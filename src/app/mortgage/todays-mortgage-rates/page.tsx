"use client";
import PageHero from '@/components/PageHero';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
  BarElement,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend, Filler, CategoryScale, BarElement);

interface RateItem {
  name: string;
  rate: string;
  change: string;
  payment: string;
}
interface ChartPoint {
  date: string;
  fixed30: number;
  fixed15: number;
}

export default function TodaysMortgageRatesPage() {
  const [rates, setRates] = useState<RateItem[]>([]);
  const [scrapedAt, setScrapedAt] = useState<string | null>(null);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/mortgage-rates')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          setRates([]);
        } else {
          setRates(data.rates || []);
          setScrapedAt(data.scrapedAt || null);
          setChartData(data.chartData || []);
          setError(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load rates.');
        setLoading(false);
      });
  }, []);

  // Chart.js data and options for line chart (historical data)
  const lineData = {
    labels: chartData.map((d) => d.date),
    datasets: [
      {
        label: '30 Yr. Fixed',
        data: chartData.map((d) => d.fixed30),
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37,99,235,0.08)',
        fill: true,
        tension: 0.2,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: '15 Yr. Fixed',
        data: chartData.map((d) => d.fixed15),
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14,165,233,0.08)',
        fill: true,
        tension: 0.2,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: { font: { size: 16 } },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          label: (ctx: any) => `${ctx.dataset.label}: ${ctx.parsed.y?.toFixed(2)}%`,
        },
      },
    },
    scales: {
      x: {
        type: 'time' as const,
        time: { unit: 'year' as const },
        ticks: { font: { size: 13 } },
        grid: { display: false },
      },
      y: {
        title: { display: true, text: 'Rate (%)', font: { size: 15 } },
        min: 2,
        max: 8,
        ticks: {
          font: { size: 13 }, callback: function(tickValue: string | number) { return tickValue + '%'; }
        },
        grid: { color: '#e5e7eb' },
      },
    },
    elements: {
      line: { borderJoinStyle: 'round' as const },
    },
  };

  // Bar chart data and options for current rates comparison
  const barData = {
    labels: rates.map(rate => rate.name),
    datasets: [
      {
        label: 'Current Rate (%)',
        data: rates.map(rate => parseFloat(rate.rate)),
        backgroundColor: [
          '#2563eb', // 30 Yr Fixed - blue
          '#0ea5e9', // 15 Yr Fixed - light blue
          '#7c3aed', // 30 Yr Jumbo - purple
          '#059669', // 7/6 SOFR ARM - green
          '#dc2626', // 30 Yr FHA - red
          '#ea580c', // 30 Yr VA - orange
        ],
        borderColor: [
          '#1d4ed8',
          '#0284c7',
          '#6d28d9',
          '#047857',
          '#b91c1c',
          '#c2410c',
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `Rate: ${ctx.parsed.y?.toFixed(2)}%`,
        },
      },
    },
    scales: {
      x: {
        ticks: { 
          font: { size: 12 },
          maxRotation: 45,
        },
        grid: { display: false },
      },
      y: {
        title: { display: true, text: 'Rate (%)', font: { size: 15 } },
        min: 0,
        max: Math.max(...rates.map(rate => parseFloat(rate.rate))) + 1,
        ticks: {
          font: { size: 13 },
          callback: function(tickValue: string | number) { return tickValue + '%'; }
        },
        grid: { color: '#e5e7eb' },
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Today's Mortgage Rates"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: "Today's Mortgage Rates" }
        ]}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">See the Latest Home Loan Rates</h2>
        <p className="text-center text-gray-600 mb-10">Compare today's mortgage rates for 30-year, 15-year, FHA, VA, and more. Updated daily to help you make the best decision for your home financing.</p>
        {loading ? (
          <div className="text-center text-gray-400 py-12">Loading rates…</div>
        ) : error ? (
          <div className="text-center text-red-500 py-12">{error}</div>
        ) : (
          <>
            {/* Current Rates Bar Chart */}
            {rates.length > 0 && (
              <div className="bg-white rounded-2xl shadow p-6 mb-10">
                <h3 className="text-xl font-semibold text-center mb-4">Today's Mortgage Rates Comparison</h3>
                <Bar data={barData} options={barOptions} height={120} />
              </div>
            )}
            
            {/* Historical Chart Section */}
            {chartData.length > 0 && (
              <div className="bg-white rounded-2xl shadow p-6 mb-10">
                <h3 className="text-xl font-semibold text-center mb-4">30 and 15 Year Fixed Rates - Historical Trend</h3>
                <Line data={lineData} options={lineOptions} height={320} />
              </div>
            )}
            {/* Rates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {rates.map((rate, i) => (
                <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-gray-100 hover:shadow-lg transition">
                  <div className="text-lg font-semibold text-gray-500 mb-1 text-center">{rate.name}</div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-extrabold text-gray-900">{rate.rate}</span>
                    {rate.change && (
                      <span className={
                        'text-lg font-bold ' +
                        (rate.change.startsWith('+') ? 'text-red-500' : rate.change.startsWith('-') ? 'text-green-600' : 'text-gray-500')
                      }>
                        {rate.change}
                      </span>
                    )}
                  </div>
                  {rate.payment && (
                    <div className="text-base text-blue-700 font-semibold mb-1">{rate.payment}</div>
                  )}
                </div>
              ))}
            </div>
            {scrapedAt && (
              <div className="text-xs text-gray-400 text-center mb-2">Last updated: {new Date(scrapedAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST</div>
            )}
            <div className="text-center text-sm text-gray-500">
              Source: <a href="https://www.mortgagenewsdaily.com/mortgage-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mortgage News Daily</a>
            </div>
          </>
        )}
      </main>
    </div>
  );
} 