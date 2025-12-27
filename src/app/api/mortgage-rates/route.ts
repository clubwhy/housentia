import { NextResponse } from 'next/server';

// In-memory cache
let cache: { data: any, timestamp: number } | null = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour cache

// FRED API series IDs for mortgage rates
const FRED_SERIES = {
  '30 Yr. Fixed': 'MORTGAGE30US',
  '15 Yr. Fixed': 'MORTGAGE15US',
  '5/1 ARM': 'MORTGAGE5US',
  '1 Yr. ARM': 'MORTGAGE1US',
};

interface FREDObservation {
  date: string;
  value: string;
}

interface FREDResponse {
  observations: FREDObservation[];
  realtime_start: string;
  realtime_end: string;
}

/**
 * Fetch latest rate from FRED API for a given series ID
 */
async function fetchFREDRate(seriesId: string): Promise<{ rate: number | null; date: string | null; previousRate: number | null }> {
  const apiKey = process.env.FRED_API_KEY;
  if (!apiKey) {
    console.error('FRED_API_KEY not set in environment variables');
    return { rate: null, date: null, previousRate: null };
  }

  try {
    // Get latest observation
    const latestUrl = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${apiKey}&file_type=json&limit=2&sort_order=desc&units=lin`;
    const latestRes = await fetch(latestUrl);
    const latestData: FREDResponse = await latestRes.json();

    if (!latestData.observations || latestData.observations.length === 0) {
      return { rate: null, date: null, previousRate: null };
    }

    const latest = latestData.observations[0];
    const previous = latestData.observations[1];

    // Find the most recent non-null value
    let rate: number | null = null;
    let date: string | null = null;
    let previousRate: number | null = null;

    for (const obs of latestData.observations) {
      if (obs.value !== '.' && obs.value !== null) {
        rate = parseFloat(obs.value);
        date = obs.date;
        break;
      }
    }

    // Get previous rate for change calculation
    if (previous && previous.value !== '.' && previous.value !== null) {
      previousRate = parseFloat(previous.value);
    }

    return { rate, date, previousRate };
  } catch (error) {
    console.error(`Error fetching FRED rate for ${seriesId}:`, error);
    return { rate: null, date: null, previousRate: null };
  }
}

/**
 * Fetch historical data for chart (last 1 year)
 */
async function fetchFREDHistorical(seriesId: string, limit: number = 365): Promise<{ date: string; value: number }[]> {
  const apiKey = process.env.FRED_API_KEY;
  if (!apiKey) {
    return [];
  }

  try {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const startDate = oneYearAgo.toISOString().split('T')[0];

    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${apiKey}&file_type=json&limit=${limit}&sort_order=desc&observation_start=${startDate}&units=lin`;
    const res = await fetch(url);
    const data: FREDResponse = await res.json();

    if (!data.observations) {
      return [];
    }

    // Filter out null values and reverse to chronological order
    return data.observations
      .filter(obs => obs.value !== '.' && obs.value !== null)
      .map(obs => ({
        date: obs.date,
        value: parseFloat(obs.value)
      }))
      .reverse();
  } catch (error) {
    console.error(`Error fetching FRED historical data for ${seriesId}:`, error);
    return [];
  }
}

/**
 * Calculate change percentage between current and previous rate
 */
function calculateChange(current: number | null, previous: number | null): string {
  if (!current || !previous) return '';
  const change = current - previous;
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(3)}%`;
}

/**
 * Fetch all mortgage rates from FRED API
 */
async function fetchFREDRates() {
  const rates: any[] = [];
  const ratePromises = Object.entries(FRED_SERIES).map(async ([name, seriesId]) => {
    const { rate, date, previousRate } = await fetchFREDRate(seriesId);
    if (rate !== null) {
      const change = calculateChange(rate, previousRate);
      return {
        name,
        rate: `${rate.toFixed(3)}%`,
        change,
        date,
      };
    }
    return null;
  });

  const results = await Promise.all(ratePromises);
  const validRates = results.filter(r => r !== null);
  rates.push(...validRates);

  // Fetch historical data for 30yr and 15yr fixed for chart
  const historical30 = await fetchFREDHistorical('MORTGAGE30US');
  const historical15 = await fetchFREDHistorical('MORTGAGE15US');

  // Merge historical data by date
  const chartData: { date: string; fixed30: number; fixed15: number }[] = [];
  const dateMap = new Map<string, { fixed30?: number; fixed15?: number }>();

  historical30.forEach(item => {
    if (!dateMap.has(item.date)) {
      dateMap.set(item.date, {});
    }
    dateMap.get(item.date)!.fixed30 = item.value;
  });

  historical15.forEach(item => {
    if (!dateMap.has(item.date)) {
      dateMap.set(item.date, {});
    }
    dateMap.get(item.date)!.fixed15 = item.value;
  });

  // Convert to array and sort by date
  dateMap.forEach((values, date) => {
    if (values.fixed30 !== undefined && values.fixed15 !== undefined) {
      chartData.push({
        date,
        fixed30: values.fixed30,
        fixed15: values.fixed15,
      });
    }
  });

  chartData.sort((a, b) => a.date.localeCompare(b.date));

  return {
    scrapedAt: new Date().toISOString(),
    rates,
    chartData: chartData.slice(-365), // Last year of data
  };
}

export async function GET() {
  // Check cache (1 hour duration)
  if (cache && (Date.now() - cache.timestamp) < CACHE_DURATION) {
    return NextResponse.json(cache.data);
  }

  // Fetch fresh data from FRED API
  try {
    const data = await fetchFREDRates();
    cache = { data, timestamp: Date.now() };
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching FRED rates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch mortgage rates from FRED API' },
      { status: 500 }
    );
  }
} 