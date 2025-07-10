"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight, HiSun, HiCalculator, HiCurrencyDollar } from 'react-icons/hi';
import PageHero from '@/components/PageHero';
import SolarCalculator from './SolarCalculator';

export default function SolarSavingsEstimatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Solar Savings Estimator"
        breadcrumbs={[
          { label: 'Tools', href: '/tools' },
          { label: 'Solar Savings Estimator' }
        ]}
      />
      
      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HiSun className="text-6xl text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solar Savings Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential solar panel costs and savings over 20 years. 
            Get personalized estimates based on your location and energy consumption.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <HiSun className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Solar Potential</h3>
            <p className="text-gray-600">Discover how much sunlight your roof receives and optimal panel placement</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <HiCalculator className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cost Analysis</h3>
            <p className="text-gray-600">Calculate installation costs, incentives, and 20-year savings projections</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
            <HiCurrencyDollar className="text-4xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">ROI Projection</h3>
            <p className="text-gray-600">See your return on investment with detailed year-by-year breakdown</p>
          </div>
        </div>

        {/* Calculator Component */}
        <SolarCalculator />

        {/* Information Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Input Your Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Enter your US address for location-specific data</li>
                <li>• Input your average monthly electricity bill</li>
                <li>• Adjust for your specific energy consumption if needed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">Get Detailed Results</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Recommended solar system size (kW)</li>
                <li>• Estimated installation costs</li>
                <li>• 20-year savings projection</li>
                <li>• Annual energy production estimates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Important Notes:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• This calculator is designed for US residential properties</li>
            <li>• Estimates are based on current solar technology and market conditions</li>
            <li>• Actual costs and savings may vary based on local factors</li>
            <li>• Consult with local solar installers for precise quotes</li>
          </ul>
        </div>
      </main>
    </div>
  );
} 