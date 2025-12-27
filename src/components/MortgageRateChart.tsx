"use client";

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
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend, Filler, CategoryScale);

interface ChartPoint {
  date: string;
  fixed30: number;
  fixed15: number;
}

export default function MortgageRateChart() {
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const [timeRange, setTimeRange] = useState<12 | 24>(12);
  const [loading, setLoading] = useState(true);
  const [lastUpdatedDate, setLastUpdatedDate] = useState<string | null>(null);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    async function fetchChartData() {
      setLoading(true);
      setApiError(false);
      try {
        // DIAGNOSTIC: Log fetch start
        console.log('🟢 [DIAGNOSTIC] Client: Starting fetch to /api/mortgage-rates');
        
        // Fetch data from the API
        const response = await fetch('/api/mortgage-rates', {
          cache: "no-store", // DIAGNOSTIC: Force no cache
        });
        
        console.log('🟢 [DIAGNOSTIC] Client: Response status:', response.status, response.statusText);
        
        if (!response.ok) {
          console.error('🔴 [DIAGNOSTIC] Client: API response not OK:', response.status, response.statusText);
          const errorText = await response.text();
          console.error('🔴 [DIAGNOSTIC] Client: Error response body:', errorText);
          setApiError(true);
          setLoading(false);
          return;
        }
        
        const data = await response.json();
        
        // DIAGNOSTIC: Log EXACT response shape received by client
        console.log('🟢 [DIAGNOSTIC] Client: Full API response:', data);
        console.log('🟢 [DIAGNOSTIC] Client: Response shape analysis:', { 
          hasChartData: !!data.chartData, 
          chartDataType: Array.isArray(data.chartData) ? 'array' : typeof data.chartData,
          chartDataLength: data.chartData?.length || 0,
          hasError: !!data.error,
          errorMessage: data.error,
          lastUpdatedDate: data.lastUpdatedDate,
          firstDataPoint: data.chartData?.[0],
          lastDataPoint: data.chartData?.[data.chartData?.length - 1],
          sampleDataPoints: data.chartData?.slice(0, 3),
          allKeys: Object.keys(data)
        });
        
        // Check if API returned an error
        if (data.error) {
          console.error('API returned error:', data.error);
          setApiError(true);
          setLoading(false);
          return;
        }
        
        // Check if we have chart data
        if (data.chartData && Array.isArray(data.chartData)) {
          if (data.chartData.length > 0) {
            // Filter data based on time range (12 or 24 months)
            const cutoffDate = new Date();
            cutoffDate.setMonth(cutoffDate.getMonth() - timeRange);
            const cutoffDateStr = cutoffDate.toISOString().split('T')[0];
            
            const filteredData = data.chartData.filter((point: ChartPoint) => 
              point.date >= cutoffDateStr
            );
            
            console.log('Filtered data:', { 
              originalLength: data.chartData.length,
              filteredLength: filteredData.length,
              cutoffDate: cutoffDateStr
            });
            
            // Always set chart data if we have any historical data
            if (filteredData.length > 0) {
              setChartData(filteredData);
              // Use the last updated date from API, or fallback to most recent date in filtered data
              setLastUpdatedDate(data.lastUpdatedDate || filteredData[filteredData.length - 1].date);
            } else {
              // If filtered data is empty but we have historical data, use all available data
              console.log('Using all available data as fallback');
              setChartData(data.chartData);
              setLastUpdatedDate(data.lastUpdatedDate || data.chartData[data.chartData.length - 1].date);
            }
          } else {
            console.warn('chartData array is empty');
            setApiError(true);
          }
        } else {
          console.warn('No chartData in response or not an array');
          setApiError(true);
        }
      } catch (error) {
        console.error('Error fetching chart data:', error);
        setApiError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchChartData();
  }, [timeRange]);

  // Check if we have valid data before preparing chart
  const validData30 = chartData.filter((d) => d.fixed30 !== null && d.fixed30 !== undefined);
  const validData15 = chartData.filter((d) => d.fixed15 !== null && d.fixed15 !== undefined);
  const hasValidData = validData30.length > 0 || validData15.length > 0;
  
  // Prepare chart data - allow null values (gaps in data)
  const lineData = {
    labels: chartData.map((d) => d.date),
    datasets: [
      {
        label: '30-Year Fixed Mortgage',
        data: chartData.map((d) => d.fixed30 !== null && d.fixed30 !== undefined ? d.fixed30 : null),
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37,99,235,0.05)',
        fill: true,
        tension: 0.2,
        pointRadius: 0,
        borderWidth: 2,
        spanGaps: true, // Allow gaps in data
      },
      {
        label: '15-Year Fixed Mortgage',
        data: chartData.map((d) => d.fixed15 !== null && d.fixed15 !== undefined ? d.fixed15 : null),
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14,165,233,0.05)',
        fill: true,
        tension: 0.2,
        pointRadius: 0,
        borderWidth: 2,
        spanGaps: true, // Allow gaps in data
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
        labels: { 
          font: { size: 14 },
          usePointStyle: true,
          padding: 15,
        },
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
        time: {
          unit: 'month' as const,
          displayFormats: {
            month: 'MMM yyyy',
          },
        },
        ticks: { 
          font: { size: 12 },
          maxRotation: 45,
          minRotation: 45,
        },
        grid: { 
          display: true,
          color: '#e5e7eb',
        },
      },
      y: {
        title: { 
          display: true, 
          text: 'Interest Rate (%)', 
          font: { size: 14 },
        },
        ticks: {
          font: { size: 12 },
          callback: function(tickValue: string | number) {
            return tickValue + '%';
          },
        },
        grid: { 
          color: '#e5e7eb',
        },
      },
    },
    elements: {
      line: { 
        borderJoinStyle: 'round' as const,
      },
    },
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading chart data...</div>
        </div>
      </div>
    );
  }

  if (apiError || !hasValidData) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <p className="text-gray-600 mb-2">Mortgage rate data updates periodically.</p>
          <p className="text-gray-500 text-sm">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-center">Mortgage Rate Trends (National Average)</h3>
        <div className="flex justify-center gap-2 mb-4">
          <button
            onClick={() => setTimeRange(12)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              timeRange === 12
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            12 Months
          </button>
          <button
            onClick={() => setTimeRange(24)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              timeRange === 24
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            24 Months
          </button>
        </div>
      </div>
      <div className="h-64 mb-4">
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="space-y-2">
        <p className="text-xs text-gray-500 text-center">
          Rates shown are national averages for educational purposes only. Actual rates vary by credit profile, loan amount, property type, and lender. This information does not constitute an offer or commitment.
        </p>
        {lastUpdatedDate && (
          <p className="text-xs text-gray-400 text-center">
            Last updated: {lastUpdatedDate} (Source: FRED)
          </p>
        )}
      </div>
    </div>
  );
}

