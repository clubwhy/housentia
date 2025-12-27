import { NextResponse } from 'next/server';

// DIAGNOSTIC: Force dynamic to prevent caching issues
export const dynamic = "force-dynamic";

// In-memory cache
let cache: { data: any, timestamp: number } | null = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour cache

// FRED API series IDs for mortgage rates
const FRED_SERIES = {
  '30 Yr. Fixed': 'MORTGAGE30US',
  '15 Yr. Fixed': 'MORTGAGE15US',
  '30 Yr. FHA': 'OBMMIFHA30YF', // FHA 30-year fixed mortgage rate
  '30 Yr. VA': 'OBMMIVA30YF', // VA 30-year fixed mortgage rate
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
 * Fetch historical data for chart
 * Uses a fixed historical start date to ensure we always get data
 * (FRED doesn't update daily, so filtering by today's date often returns empty)
 */
async function fetchFREDHistorical(seriesId: string): Promise<{ date: string; value: number }[]> {
  const apiKey = process.env.FRED_API_KEY;
  if (!apiKey) {
    console.error('FRED_API_KEY not set in environment variables');
    return [];
  }

  try {
    // Use a fixed historical start date (2+ years ago) to ensure we always get data
    // FRED mortgage rate data goes back many years, so this is safe
    const startDateStr = "2022-01-01";

    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${apiKey}&file_type=json&limit=10000&sort_order=desc&observation_start=${startDateStr}&units=lin`;
    
    console.log(`🔵 [DIAGNOSTIC] Fetching FRED historical data for ${seriesId} from ${startDateStr}`);
    console.log(`🔵 [DIAGNOSTIC] FRED URL (without key): ${url.replace(/api_key=[^&]+/, 'api_key=***')}`);
    
    // DIAGNOSTIC: Force no cache for fetch
    const res = await fetch(url, {
      cache: "no-store",
    });
    
    // DIAGNOSTIC: Log raw response status
    console.log(`🔵 [DIAGNOSTIC] FRED response status for ${seriesId}:`, res.status, res.statusText);
    
    const data: FREDResponse = await res.json();
    
    // DIAGNOSTIC: Log EXACT raw FRED response before any filtering
    console.log(`🔵 [DIAGNOSTIC] Raw FRED response for ${seriesId}:`, {
      hasObservations: !!data.observations,
      observationsType: Array.isArray(data.observations) ? 'array' : typeof data.observations,
      observationsLength: data.observations?.length || 0,
      realtimeStart: data.realtime_start,
      realtimeEnd: data.realtime_end,
      firstObservation: data.observations?.[0],
      lastObservation: data.observations?.[data.observations?.length - 1],
      sampleValues: data.observations?.slice(0, 5).map((o: FREDObservation) => ({
        date: o.date,
        value: o.value,
        valueType: typeof o.value
      }))
    });

    console.log(`FRED response for ${seriesId}:`, {
      hasObservations: !!data.observations,
      observationsLength: data.observations?.length || 0,
      realtimeStart: data.realtime_start,
      realtimeEnd: data.realtime_end
    });

    if (!data.observations || data.observations.length === 0) {
      console.warn(`🔴 [DIAGNOSTIC] No observations returned for ${seriesId}`);
      return [];
    }

    // DIAGNOSTIC: Log before filtering
    console.log(`🔵 [DIAGNOSTIC] Before filtering for ${seriesId}:`, {
      totalObservations: data.observations.length,
      sampleBeforeFilter: data.observations.slice(0, 3).map((o: FREDObservation) => ({
        date: o.date,
        value: o.value,
        willPass: o.value !== '.' && o.value !== null && o.value !== ''
      }))
    });

    // Filter out null values and reverse to chronological order
    // DIAGNOSTIC: Use safer parsing
    const validObservations = data.observations
      .filter(obs => {
        const isValid = obs.value !== '.' && obs.value !== null && obs.value !== '';
        if (!isValid) {
          console.log(`🔵 [DIAGNOSTIC] Filtered out observation:`, { date: obs.date, value: obs.value });
        }
        return isValid;
      })
      .map(obs => {
        const num = parseFloat(obs.value);
        if (Number.isNaN(num)) {
          console.warn(`🔴 [DIAGNOSTIC] NaN value for ${seriesId}:`, { date: obs.date, value: obs.value });
          return null;
        }
        return {
          date: obs.date,
          value: num
        };
      })
      .filter((item): item is { date: string; value: number } => item !== null)
      .reverse();

    console.log(`🔵 [DIAGNOSTIC] Valid observations for ${seriesId}:`, {
      total: validObservations.length,
      firstDate: validObservations[0]?.date,
      lastDate: validObservations[validObservations.length - 1]?.date,
      firstValue: validObservations[0]?.value,
      lastValue: validObservations[validObservations.length - 1]?.value
    });

    return validObservations;
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
  // We fetch full historical data and let the client filter by time range
  const historical30 = await fetchFREDHistorical('MORTGAGE30US');
  const historical15 = await fetchFREDHistorical('MORTGAGE15US');
  
  console.log('🔵 [DIAGNOSTIC] Historical data fetched:', {
    historical30Length: historical30.length,
    historical15Length: historical15.length,
    historical30First: historical30[0],
    historical30Last: historical30[historical30.length - 1],
    historical15First: historical15[0],
    historical15Last: historical15[historical15.length - 1]
  });

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
  // Include data points even if only one rate is available (more lenient)
  dateMap.forEach((values, date) => {
    // If we have at least one rate, include it (use null for missing rate)
    if (values.fixed30 !== undefined || values.fixed15 !== undefined) {
      chartData.push({
        date,
        fixed30: values.fixed30 ?? null,
        fixed15: values.fixed15 ?? null,
      });
    }
  });

  chartData.sort((a, b) => a.date.localeCompare(b.date));

  // Determine the last updated date (most recent date in chart data)
  const lastUpdatedDate = chartData.length > 0 
    ? chartData[chartData.length - 1].date 
    : null;

  console.log('🔵 [DIAGNOSTIC] Final chart data prepared:', {
    chartDataLength: chartData.length,
    lastUpdatedDate: lastUpdatedDate,
    firstDate: chartData[0]?.date,
    lastDate: chartData[chartData.length - 1]?.date,
    firstDataPoint: chartData[0],
    lastDataPoint: chartData[chartData.length - 1],
    sampleDataPoints: chartData.slice(0, 3)
  });

  return {
    scrapedAt: new Date().toISOString(),
    rates,
    chartData: chartData, // Full historical data (client filters by time range)
    lastUpdatedDate: lastUpdatedDate, // Most recent date in the chart data
  };
}

export async function GET() {
  // DIAGNOSTIC: Log that route handler is being called
  console.log('🔵 [DIAGNOSTIC] Route handler called at:', new Date().toISOString());
  
  // Check cache (1 hour duration)
  if (cache && (Date.now() - cache.timestamp) < CACHE_DURATION) {
    console.log('🔵 [DIAGNOSTIC] Returning cached data');
    console.log('🔵 [DIAGNOSTIC] Cached data shape:', {
      hasChartData: !!cache.data.chartData,
      chartDataLength: cache.data.chartData?.length || 0,
      lastUpdatedDate: cache.data.lastUpdatedDate
    });
    return NextResponse.json(cache.data);
  }

  // Fetch fresh data from FRED API
  try {
    console.log('🔵 [DIAGNOSTIC] Fetching fresh data from FRED');
    const data = await fetchFREDRates();
    
    // DIAGNOSTIC: Log final response shape before returning
    console.log('🔵 [DIAGNOSTIC] Final response shape:', {
      hasChartData: !!data.chartData,
      chartDataLength: data.chartData?.length || 0,
      chartDataType: Array.isArray(data.chartData) ? 'array' : typeof data.chartData,
      lastUpdatedDate: data.lastUpdatedDate,
      firstDataPoint: data.chartData?.[0],
      lastDataPoint: data.chartData?.[data.chartData?.length - 1],
      hasError: !!data.error
    });
    
    cache = { data, timestamp: Date.now() };
    return NextResponse.json(data);
  } catch (error) {
    console.error('🔴 [DIAGNOSTIC] Error fetching FRED rates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch mortgage rates from FRED API' },
      { status: 500 }
    );
  }
} 