"use client";
import { HiSun, HiTrendingUp, HiHome, HiCalculator, HiLightningBolt, HiGlobe } from 'react-icons/hi';

interface SolarResultsProps {
  results: {
    annualConsumption: number;
    annualProduction: number;
    installationCost: number;
    lifetimeSavings: number;
    paybackPeriod: number;
    roi: number;
    yearlyBreakdown: Array<{
      year: number;
      production: number;
      savings: number;
      cumulativeSavings: number;
    }>;
  };
  solarData: {
    panelsCount: number;
    recommendedSizeKw: number;
    roofArea: number;
    annualSunlight: number;
  };
}

export default function SolarResults({ results, solarData }: SolarResultsProps) {
  const environmentalImpact = {
    co2Reduction: results.annualProduction * 0.92, // kg CO2 per kWh
    treesEquivalent: Math.round((results.annualProduction * 0.92) / 22), // 22kg CO2 per tree per year
    carsEquivalent: Math.round((results.annualProduction * 0.92) / 4600) // 4600kg CO2 per car per year
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
          <HiSun className="text-4xl text-blue-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-blue-900">{results.annualProduction.toLocaleString()}</div>
          <div className="text-sm text-blue-700 font-medium">kWh/year</div>
          <div className="text-xs text-blue-600 mt-1">Annual Production</div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
          <HiTrendingUp className="text-4xl text-green-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-green-900">${results.lifetimeSavings.toLocaleString()}</div>
          <div className="text-sm text-green-700 font-medium">20-year savings</div>
          <div className="text-xs text-green-600 mt-1">Total Savings</div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl text-center">
          <HiHome className="text-4xl text-yellow-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-yellow-900">${results.installationCost.toLocaleString()}</div>
          <div className="text-sm text-yellow-700 font-medium">Installation cost</div>
          <div className="text-xs text-yellow-600 mt-1">Upfront Investment</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
          <HiCalculator className="text-4xl text-purple-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-purple-900">{results.paybackPeriod}</div>
          <div className="text-sm text-purple-700 font-medium">Years to payback</div>
          <div className="text-xs text-purple-600 mt-1">Break-even Period</div>
        </div>
      </div>

      {/* System Details and ROI */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* System Details */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-900">System Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Recommended System Size</span>
              <span className="font-semibold text-gray-900">{solarData.recommendedSizeKw.toFixed(1)} kW</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Number of Panels</span>
              <span className="font-semibold text-gray-900">{solarData.panelsCount}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Roof Area Available</span>
              <span className="font-semibold text-gray-900">{solarData.roofArea} sq ft</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Annual Sunlight</span>
              <span className="font-semibold text-gray-900">{solarData.annualSunlight} hours</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Annual Energy Consumption</span>
              <span className="font-semibold text-gray-900">{results.annualConsumption.toLocaleString()} kWh</span>
            </div>
          </div>
        </div>

        {/* Financial Analysis */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Financial Analysis</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Return on Investment</span>
              <span className="font-semibold text-green-600">{results.roi}%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Annual Savings (Year 1)</span>
              <span className="font-semibold text-green-600">${results.yearlyBreakdown[0].savings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Monthly Savings (Year 1)</span>
              <span className="font-semibold text-green-600">${Math.round(results.yearlyBreakdown[0].savings / 12).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Cost per Watt</span>
              <span className="font-semibold text-gray-900">${(results.installationCost / (solarData.recommendedSizeKw * 1000)).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Net Present Value</span>
              <span className="font-semibold text-green-600">${results.lifetimeSavings.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
          <HiGlobe className="mr-2 text-green-600" />
          Environmental Impact
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {environmentalImpact.co2Reduction.toLocaleString()}
            </div>
            <div className="text-sm text-green-700 font-medium">kg CO2 avoided/year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {environmentalImpact.treesEquivalent}
            </div>
            <div className="text-sm text-green-700 font-medium">trees planted equivalent</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {environmentalImpact.carsEquivalent}
            </div>
            <div className="text-sm text-green-700 font-medium">cars off the road</div>
          </div>
        </div>
      </div>

      {/* Yearly Breakdown Chart */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">20-Year Savings Projection</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Production (kWh)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Savings ($)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cumulative Savings ($)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.yearlyBreakdown.map((year) => {
                const isBreakEven = year.cumulativeSavings >= results.installationCost;
                const isProfitable = year.cumulativeSavings > results.installationCost;
                
                return (
                  <tr key={year.year} className={isProfitable ? 'bg-green-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {year.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {year.production.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      ${year.savings.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${year.cumulativeSavings.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {isBreakEven ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <HiLightningBolt className="mr-1" />
                          Profitable
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Payback
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Savings Visualization */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Savings Visualization</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Investment Recovery</span>
            <span className="text-sm font-medium text-gray-900">
              {Math.round((results.yearlyBreakdown[0].cumulativeSavings / results.installationCost) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${Math.min(100, (results.yearlyBreakdown[0].cumulativeSavings / results.installationCost) * 100)}%` 
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500">
            Year 1 progress toward breaking even on your solar investment
          </div>
        </div>
      </div>
    </div>
  );
} 