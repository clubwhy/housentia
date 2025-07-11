import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

// In-memory cache
let cache: { data: any, timestamp: number, lastScrapeSlot: string } | null = null;

// PST scrape slots (24h format)
const SCRAPE_HOURS = [6, 9, 12, 15];
const PST_TZ = 'America/Los_Angeles';

function getPSTNow() {
  const now = new Date();
  const pstString = now.toLocaleString('en-US', { timeZone: PST_TZ });
  return new Date(pstString);
}

function getCurrentScrapeSlot(date: Date) {
  // Returns a string like '2024-07-11-09' for 9am slot
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const h = date.getHours();
  // Find the most recent scrape hour <= current hour
  let slotHour = SCRAPE_HOURS[0];
  for (let i = 0; i < SCRAPE_HOURS.length; i++) {
    if (h >= SCRAPE_HOURS[i]) slotHour = SCRAPE_HOURS[i];
  }
  return `${y}-${m}-${d}-${slotHour}`;
}

function isWeekday(date: Date) {
  const day = date.getDay();
  return day >= 1 && day <= 5; // 1=Mon, 5=Fri
}

async function scrapeRates() {
  const res = await fetch('https://www.mortgagenewsdaily.com/mortgage-rates', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; HousentiaBot/1.0)'
    }
  });
  const html = await res.text();
  const $ = cheerio.load(html);

  // Find the main rates table (customize selector as needed)
  // We'll extract: 30 Yr. Fixed, 15 Yr. Fixed, 30 Yr. Jumbo, 7/6 SOFR ARM, 30 Yr. FHA, 30 Yr. VA
  const rates: any[] = [];
  $("table:contains('30 Yr. Fixed')").first().find('tr').each((i: number, el: any) => {
    const tds = $(el).find('td');
    if (tds.length >= 4) {
      const name = $(tds[0]).text().trim();
      const rate = $(tds[1]).text().trim();
      const change = $(tds[2]).text().trim();
      const payment = $(tds[3]).text().trim();
      if (name && rate) {
        rates.push({ name, rate, change, payment });
      }
    }
  });

  // Fallback: try to extract from cards if table not found (for robustness)
  if (rates.length === 0) {
    $("div:contains('Yr. Fixed'), div:contains('Jumbo'), div:contains('FHA'), div:contains('VA')").each((i: number, el: any) => {
      const name = $(el).find('h3, h4, .rate-title').text().trim();
      const rate = $(el).find('.rate-value').text().trim();
      const change = $(el).find('.rate-change').text().trim();
      const payment = $(el).find('.rate-payment').text().trim();
      if (name && rate) {
        rates.push({ name, rate, change, payment });
      }
    });
  }

  // Only keep the main 6 rates - remove duplicates by keeping first occurrence
  const MAIN_RATE_NAMES = [
    '30 Yr. Fixed',
    '15 Yr. Fixed',
    '30 Yr. Jumbo',
    '7/6 SOFR ARM',
    '30 Yr. FHA',
    '30 Yr. VA'
  ];
  
  // Remove duplicates by keeping only the first occurrence of each rate type
  const seen = new Set();
  const filteredRates = rates.filter(r => {
    if (MAIN_RATE_NAMES.includes(r.name) && !seen.has(r.name)) {
      seen.add(r.name);
      return true;
    }
    return false;
  });

  // --- HISTORICAL CHART DATA SCRAPING ---
  // Find the script tag or inline JS that contains the chart data for 30/15yr fixed
  // Look for a script with data like: var chartData = ...
  let chartData: { date: string, fixed30: number, fixed15: number }[] = [];
  $('script').each((i: number, el: any) => {
    const script = $(el).html() || '';
    if (script.includes('30 and 15 Year Fixed Rates')) {
      // Try to extract the data array from the script
      // Example: data: [{x:new Date(2016,0,1),y:3.95}, ...]
      const match = script.match(/series:\s*\[([\s\S]*?)\],\s*\}/);
      if (match) {
        const seriesStr = match[1];
        // Try to extract both series (30yr, 15yr)
        const seriesMatches = [];
        const regex = /name:\s*"([^"]+)",\s*data:\s*(\[[\s\S]*?\])/g;
        let m;
        while ((m = regex.exec(seriesStr)) !== null) {
          seriesMatches.push(m);
        }
        if (seriesMatches.length >= 2) {
          // Parse 30yr
          const data30 = JSON.parse(seriesMatches[0][2].replace(/([a-zA-Z]+):/g, '"$1":'));
          const data15 = JSON.parse(seriesMatches[1][2].replace(/([a-zA-Z]+):/g, '"$1":'));
          // Merge by index (assume same length/order)
          chartData = data30.map((d: any, idx: number) => ({
            date: d.x, // may need to convert to ISO string
            fixed30: d.y,
            fixed15: data15[idx]?.y
          }));
        }
      }
    }
  });

  return { scrapedAt: new Date().toISOString(), rates: filteredRates, chartData };
}

export async function GET() {
  const now = getPSTNow();
  if (!isWeekday(now)) {
    return NextResponse.json({ error: 'Rates are only updated on weekdays (Mon-Fri) at 6am, 9am, 12pm, 3pm PST.' }, { status: 200 });
  }
  const slot = getCurrentScrapeSlot(now);
  // If cache is for this slot, return cached data
  if (cache && cache.lastScrapeSlot === slot) {
    return NextResponse.json(cache.data);
  }
  // Only scrape if current time is at or after a slot and not already scraped for this slot
  // (If user visits before 6am, no scrape; after 6am, scrape once for 6am slot, etc.)
  const data = await scrapeRates();
  cache = { data, timestamp: Date.now(), lastScrapeSlot: slot };
  return NextResponse.json(data);
} 