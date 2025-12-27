"use client";
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import { useEffect, useState } from 'react';
import { HiHome, HiRefresh, HiKey } from 'react-icons/hi';
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
  // Modern, clean design with subtle colors aligned with Housentia brand
  const lineData = {
    labels: chartData.map((d) => d.date),
    datasets: [
      {
        label: '30-Year Fixed',
        data: chartData.map((d) => d.fixed30),
        borderColor: '#0EA5E9', // Primary brand color
        backgroundColor: 'transparent', // No fill for cleaner look
        fill: false,
        tension: 0.3, // Slightly smoother curves
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2.5,
        borderCapStyle: 'round' as const,
        borderJoinStyle: 'round' as const,
      },
      {
        label: '15-Year Fixed',
        data: chartData.map((d) => d.fixed15),
        borderColor: '#10B981', // Accent brand color
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2.5,
        borderCapStyle: 'round' as const,
        borderJoinStyle: 'round' as const,
      },
    ],
  };
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        align: 'end' as const,
        labels: { 
          font: { size: 14, weight: '500' },
          usePointStyle: true,
          pointStyle: 'line',
          padding: 20,
          color: '#374151',
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: { size: 13, weight: '600' },
        bodyFont: { size: 13 },
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        callbacks: {
          label: (ctx: any) => `${ctx.dataset.label}: ${ctx.parsed.y?.toFixed(2)}%`,
        },
      },
    },
    scales: {
      x: {
        type: 'time' as const,
        time: { 
          unit: 'month' as const,
          displayFormats: {
            month: 'MMM yyyy',
          },
        },
        ticks: { 
          font: { size: 12 },
          color: '#6B7280',
          maxRotation: 45,
          minRotation: 45,
        },
        grid: { 
          display: true,
          color: 'rgba(229, 231, 235, 0.5)',
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        title: { 
          display: true, 
          text: 'Interest Rate (%)', 
          font: { size: 13, weight: '600' },
          color: '#374151',
          padding: { bottom: 8 },
        },
        min: 2,
        max: 8,
        ticks: {
          stepSize: 0.5,
          font: { size: 12 },
          color: '#6B7280',
          callback: function(tickValue: string | number) { 
            return tickValue + '%'; 
          },
        },
        grid: { 
          color: 'rgba(229, 231, 235, 0.5)',
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      line: { 
        borderJoinStyle: 'round' as const,
      },
      point: {
        hoverRadius: 4,
        hoverBorderWidth: 2,
      },
    },
  };

  // Bar chart data and options for current rates comparison
  // Color mapping for different loan types
  const getColorForRate = (rateName: string, type: 'bg' | 'border') => {
    const colors: Record<string, { bg: string; border: string }> = {
      '30 Yr. Fixed': { bg: '#2563eb', border: '#1d4ed8' },
      '15 Yr. Fixed': { bg: '#0ea5e9', border: '#0284c7' },
      '30 Yr. FHA': { bg: '#dc2626', border: '#b91c1c' },
      '30 Yr. VA': { bg: '#ea580c', border: '#c2410c' },
    };
    return colors[rateName]?.[type] || (type === 'bg' ? '#6b7280' : '#4b5563');
  };

  const barData = {
    labels: rates.map(rate => rate.name),
    datasets: [
      {
        label: 'Current Rate (%)',
        data: rates.map(rate => parseFloat(rate.rate)),
        backgroundColor: rates.map(rate => getColorForRate(rate.name, 'bg')),
        borderColor: rates.map(rate => getColorForRate(rate.name, 'border')),
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
        <h2 className="text-2xl font-bold text-center mb-4">Mortgage Rate Information</h2>
        <p className="text-center text-gray-600 mb-6">
          View current mortgage rate information for 30-year, 15-year, FHA, VA, and other loan types. 
          Use this data to understand market trends and inform your home financing decisions.
        </p>
        
        {/* Compliance: Disclaimer for rate information */}
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-xs text-gray-500 mb-8 text-center">
          <strong>Important:</strong> Rates shown are national averages for informational purposes only. Actual rates offered to you may vary 
          based on your credit score, loan amount, property location, and other factors. These rates do not constitute an 
          offer or commitment from any lender.
        </p>
        {loading ? (
          <div className="text-center text-gray-400 py-12">Loading rates…</div>
        ) : error ? (
          <div className="text-center text-red-500 py-12">{error}</div>
        ) : (
          <>
            {/* Current Rates Bar Chart - Enhanced Layout */}
            {rates.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-10">
                <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">Current Mortgage Rates by Loan Type</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Chart - Takes 2 columns */}
                  <div className="md:col-span-2 h-[200px]">
                    <Bar data={barData} options={barOptions} />
                  </div>
                  {/* Key Insights - Takes 1 column */}
                  <div className="md:col-span-1 space-y-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Quick Insights</h4>
                      <ul className="space-y-2 text-xs text-gray-700">
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-0.5">•</span>
                          <span>30-year fixed is the most common loan type</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-0.5">•</span>
                          <span>15-year fixed typically offers lower rates</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-0.5">•</span>
                          <span>ARMs may start lower but can adjust</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Understanding Rates</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        These are national averages. Your actual rate depends on credit score, down payment, loan amount, and lender policies.
                      </p>
                    </div>
                    <div className="pt-2">
                      <a 
                        href="/tools/mortgage-calculator" 
                        className="block w-full text-center px-4 py-2 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary/90 transition"
                      >
                        Calculate Your Payment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Historical Chart Section - Enhanced for prominence */}
            {chartData.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mortgage Rate Trends: Understanding Market Direction
                  </h3>
                  <p className="text-sm text-gray-600">
                    Historical view of 30-year and 15-year fixed mortgage rates. Use this data to understand 
                    how rates have changed over time and inform your home financing decisions.
                  </p>
                </div>
                <div className="h-[300px] md:h-[420px]">
                  <Line data={lineData} options={lineOptions} />
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center mb-4">
                    Data represents national averages for informational purposes. Actual rates vary by lender, 
                    credit profile, and loan terms.
                  </p>
                  {/* CTA Progression from Charts to Tools */}
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    <a 
                      href="/tools/mortgage-calculator" 
                      className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-lg hover:bg-primary/20 transition border border-primary/20"
                    >
                      See How Rate Changes Affect Payments
                    </a>
                    <a 
                      href="/mortgage/find-the-right-loan" 
                      className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-200 transition"
                    >
                      Compare Fixed vs ARM Scenarios
                    </a>
                  </div>
                </div>
              </div>
            )}
            {/* Rates Grid - Enhanced with badges and tooltips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {rates.map((rate, i) => {
                const is30YearFixed = rate.name === '30 Yr. Fixed';
                return (
                  <div 
                    key={i} 
                    className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-2 transition-all relative overflow-visible ${
                      is30YearFixed ? 'border-primary shadow-primary/10' : 'border-gray-100'
                    } hover:shadow-xl hover:scale-[1.02]`}
                  >
                    {/* Badge for 30-Year Fixed - Fixed positioning */}
                    {is30YearFixed && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                          Most Common Loan Type
                        </span>
                      </div>
                    )}
                    
                    <div className="text-lg font-semibold text-gray-500 mb-1 text-center">{rate.name}</div>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl font-extrabold text-gray-900">{rate.rate}</span>
                      {rate.change && (
                        <div className="relative group">
                          <button
                            type="button"
                            className={
                              'text-lg font-bold cursor-help focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded ' +
                              (rate.change.startsWith('+') ? 'text-red-500' : rate.change.startsWith('-') ? 'text-green-600' : 'text-gray-500')
                            }
                            aria-label={`${rate.change} change from yesterday - market movement`}
                            aria-describedby={`tooltip-${i}`}
                          >
                            {rate.change}
                          </button>
                          {/* Tooltip */}
                          <div 
                            id={`tooltip-${i}`}
                            role="tooltip"
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity z-10 pointer-events-none"
                          >
                            <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 shadow-lg whitespace-nowrap">
                              {rate.change} vs yesterday (market movement)
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                <div className="border-4 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {rate.payment && (
                      <div className="text-base text-blue-700 font-semibold mb-1">{rate.payment}</div>
                    )}
                  </div>
                );
              })}
            </div>
            {scrapedAt && (
              <div className="text-xs text-gray-400 text-center mb-2">Last updated: {new Date(scrapedAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST</div>
            )}
            <div className="text-center text-sm text-gray-500 mb-12">
              Source: <a href="https://fred.stlouisfed.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Federal Reserve Economic Data (FRED)</a>
            </div>

            {/* Section 1: How to Read These Rates */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-10 border border-blue-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">How to Read These Rates</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  The rates displayed above are <strong>national market averages</strong> compiled from weekly surveys of major lenders. 
                  They represent typical rates for borrowers with strong credit profiles and standard loan terms.
                </p>
                <div className="bg-white rounded-lg p-5 border border-blue-200">
                  <h4 className="font-semibold mb-2 text-gray-900">Market Averages vs. Your Personalized Rate</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Market averages:</strong> These rates show general trends and help you understand the current lending environment.</li>
                    <li><strong>Your actual rate:</strong> May be higher or lower based on your credit score, down payment, loan amount, property type, and lender policies.</li>
                    <li><strong>Rate factors:</strong> Lenders consider your debt-to-income ratio, employment history, property location, and loan-to-value ratio when determining your rate.</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Remember:</strong> These rates are educational tools to help you understand market conditions. 
                  To learn what rate you might qualify for, you would need to speak with licensed mortgage professionals 
                  who can review your specific financial situation.
                </p>
              </div>
            </section>

            {/* Section 2: Fixed vs ARM Explained */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fixed vs. ARM Explained</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Fixed-Rate Mortgages</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>Interest rate stays the same for the entire loan term</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>Monthly payment remains predictable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>Common terms: 30-year, 15-year</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>May be suitable if you plan to stay in the home long-term</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Adjustable-Rate Mortgages (ARM)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>Interest rate can change after an initial fixed period</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>Often starts with a lower initial rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>Common types: 5/1 ARM, 7/6 ARM (fixed for 5 or 7 years, then adjusts)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>May be suitable if you plan to move or refinance before the rate adjusts</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong>Educational Note:</strong> Both loan types have different characteristics and trade-offs. 
                  The right choice depends on your financial situation, timeline, and risk tolerance. 
                  Consider speaking with licensed professionals to understand which option may align with your goals.
                </p>
              </div>
            </section>

            {/* Section 3: What Today's Rates May Mean for You - Redesigned with cards and icons */}
            <section className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 mb-10 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">What Today's Rates May Mean for You</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Buying a Home Card */}
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <HiHome className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Buying a Home</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>Use current rates to estimate monthly payments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>Understand how rate changes affect purchasing power</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>Rates may change between pre-qualification and closing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>Explore different loan types (FHA, VA, conventional)</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <a href="/tools/affordability-calculator" className="block w-full text-center px-4 py-2 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary/90 transition">
                      Calculate What You Can Afford
                    </a>
                    <a href="/tools/mortgage-calculator" className="block w-full text-center px-4 py-2 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-200 transition">
                      Estimate Monthly Payments
                    </a>
                  </div>
                </div>

                {/* Refinancing Card */}
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <HiRefresh className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Considering Refinancing</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>Compare current rates to your existing mortgage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>Estimate potential savings with a refinance analyzer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>Consider closing costs and your timeline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>Evaluate rate-and-term vs. cash-out options</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <a href="/tools/refinance-analyzer" className="block w-full text-center px-4 py-2 bg-accent text-white font-medium text-sm rounded-lg hover:bg-accent-hover transition">
                      Analyze Refinance Scenarios
                    </a>
                    <a href="/mortgage/refinance" className="block w-full text-center px-4 py-2 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-200 transition">
                      Learn About Refinancing
                    </a>
                  </div>
                </div>

                {/* Current Homeowner Card */}
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <HiKey className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Current Homeowner</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">•</span>
                      <span>Monitor rate trends for refinancing timing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">•</span>
                      <span>Rates fluctuate; timing is one factor among many</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">•</span>
                      <span>Consider long-term financial goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">•</span>
                      <span>Explore HELOCs for home equity access</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <a href="/mortgage/heloc" className="block w-full text-center px-4 py-2 bg-purple-100 text-purple-700 font-medium text-sm rounded-lg hover:bg-purple-200 transition">
                      Explore HELOC Options
                    </a>
                    <a href="/tools/refinance-analyzer" className="block w-full text-center px-4 py-2 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-200 transition">
                      Check Refinance Potential
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Rate Update Frequency Explanation */}
            <section className="bg-white rounded-2xl shadow p-6 mb-10 border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">About Rate Data Updates</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  The mortgage rate data on this page comes from the <strong>Federal Reserve Economic Data (FRED)</strong> database, 
                  which aggregates information from weekly surveys of major lenders.
                </p>
                <p>
                  <strong>Update frequency:</strong> FRED mortgage rate data is typically updated weekly, usually on Thursdays. 
                  The data reflects market conditions from the previous week. This means the rates shown may not reflect 
                  the most recent daily market movements, but they provide a reliable view of recent market trends.
                </p>
                <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <strong>Note:</strong> Because rates can change daily and vary by lender, these averages are best used 
                  as educational tools to understand market direction rather than as exact quotes. For personalized rate 
                  information, consider speaking with licensed mortgage professionals.
                </p>
              </div>
            </section>

            {/* Section 5: Related Guides and Tools */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-10 border border-indigo-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Explore Related Guides and Tools</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Mortgage Guides</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/mortgage/conventional-loan" className="text-blue-600 hover:underline">
                        Conventional Loan Guide →
                      </a>
                    </li>
                    <li>
                      <a href="/mortgage/fha-loan" className="text-blue-600 hover:underline">
                        FHA Loan Guide →
                      </a>
                    </li>
                    <li>
                      <a href="/mortgage/va-loan" className="text-blue-600 hover:underline">
                        VA Loan Guide →
                      </a>
                    </li>
                    <li>
                      <a href="/mortgage/non-qm-loan" className="text-blue-600 hover:underline">
                        Non-QM Loan Guide →
                      </a>
                    </li>
                    <li>
                      <a href="/mortgage/first-time-home-buyer" className="text-blue-600 hover:underline">
                        First-Time Home Buyer Guide →
                      </a>
                    </li>
                    <li>
                      <a href="/mortgage/refinance" className="text-blue-600 hover:underline">
                        Refinance Overview →
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Mortgage Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/tools/mortgage-calculator" className="text-blue-600 hover:underline">
                        Mortgage Calculator →
                      </a>
                    </li>
                    <li>
                      <a href="/tools/affordability-calculator" className="text-blue-600 hover:underline">
                        Affordability Calculator →
                      </a>
                    </li>
                    <li>
                      <a href="/tools/refinance-analyzer" className="text-blue-600 hover:underline">
                        Refinance Analyzer →
                      </a>
                    </li>
                    <li>
                      <a href="/tools" className="text-blue-600 hover:underline font-medium">
                        View All Tools →
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
} 