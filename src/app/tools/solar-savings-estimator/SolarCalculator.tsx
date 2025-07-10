"use client";
import { useState } from 'react';
import { HiLocationMarker, HiCurrencyDollar, HiCalculator, HiSun, HiTrendingUp, HiHome } from 'react-icons/hi';
import SolarResults from './SolarResults';

interface SolarData {
  panelsCount: number;
  yearlyEnergyDcKwh: number;
  recommendedSizeKw: number;
  roofArea: number;
  annualSunlight: number;
}

interface CalculationResults {
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
}

export default function SolarCalculator() {
  const [address, setAddress] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [solarData, setSolarData] = useState<SolarData | null>(null);
  const [error, setError] = useState('');

  // Constants from Solar API documentation
  const DC_TO_AC_DERATE = 0.85;
  const EFFICIENCY_DEPRECIATION_FACTOR = 0.995;
  const INSTALLATION_LIFESPAN = 20;
  const COST_INCREASE_FACTOR = 1.022;
  const DISCOUNT_RATE = 1.04;
  const AVERAGE_KWH_COST = 0.14; // Average US electricity cost per kWh

  // Get solar data from API
  const getSolarData = async (address: string): Promise<SolarData> => {
    const response = await fetch('/api/solar-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch solar data');
    }

    const result = await response.json();
    
    if (result.error) {
      throw new Error(result.error);
    }

    return {
      panelsCount: result.data.panelsCount,
      yearlyEnergyDcKwh: result.data.yearlyEnergyDcKwh,
      recommendedSizeKw: result.data.recommendedSizeKw,
      roofArea: result.data.roofArea,
      annualSunlight: result.data.annualSunlight
    };
  };

  // Calculate installation cost based on system size
  const calculateInstallationCost = (systemSizeKw: number): number => {
    const baseCostPerWatt = 2.5; // $2.50 per watt
    return systemSizeKw * 1000 * baseCostPerWatt;
  };

  // Calculate lifetime production using geometric series
  const calculateLifetimeProduction = (initialAcKwhPerYear: number): number => {
    const a = initialAcKwhPerYear;
    const r = EFFICIENCY_DEPRECIATION_FACTOR;
    const n = INSTALLATION_LIFESPAN;
    
    return a * (1 - Math.pow(r, n)) / (1 - r);
  };

  // Calculate yearly breakdown
  const calculateYearlyBreakdown = (
    initialAcKwhPerYear: number,
    annualConsumption: number,
    monthlyBill: number
  ) => {
    const breakdown = [];
    let cumulativeSavings = 0;

    for (let year = 1; year <= INSTALLATION_LIFESPAN; year++) {
      const production = initialAcKwhPerYear * Math.pow(EFFICIENCY_DEPRECIATION_FACTOR, year - 1);
      const utilityEnergyNeeded = Math.max(0, annualConsumption - production);
      
      // Cost with solar
      const utilityCostWithSolar = utilityEnergyNeeded * AVERAGE_KWH_COST * 
        Math.pow(COST_INCREASE_FACTOR, year - 1) / Math.pow(DISCOUNT_RATE, year - 1);
      
      // Cost without solar
      const utilityCostWithoutSolar = monthlyBill * 12 * 
        Math.pow(COST_INCREASE_FACTOR, year - 1) / Math.pow(DISCOUNT_RATE, year - 1);
      
      const yearlySavings = utilityCostWithoutSolar - utilityCostWithSolar;
      cumulativeSavings += yearlySavings;

      breakdown.push({
        year,
        production: Math.round(production),
        savings: Math.round(yearlySavings),
        cumulativeSavings: Math.round(cumulativeSavings)
      });
    }

    return breakdown;
  };

  const handleCalculate = async () => {
    if (!address.trim() || !monthlyBill.trim()) {
      setError('Please enter both address and monthly bill amount.');
      return;
    }

    const billAmount = parseFloat(monthlyBill);
    if (isNaN(billAmount) || billAmount <= 0) {
      setError('Please enter a valid monthly bill amount.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const solarDataResult = await getSolarData(address);
      const annualConsumption = (billAmount / AVERAGE_KWH_COST) * 12;
      const initialAcKwhPerYear = solarDataResult.yearlyEnergyDcKwh * DC_TO_AC_DERATE;
      const installationCost = calculateInstallationCost(solarDataResult.recommendedSizeKw);
      const yearlyBreakdown = calculateYearlyBreakdown(initialAcKwhPerYear, annualConsumption, billAmount);
      
      const lifetimeSavings = yearlyBreakdown[yearlyBreakdown.length - 1].cumulativeSavings - installationCost;
      const paybackPeriod = Math.ceil(installationCost / (yearlyBreakdown[0].savings));
      const roi = ((lifetimeSavings / installationCost) * 100);

      setSolarData(solarDataResult);
      setResults({
        annualConsumption: Math.round(annualConsumption),
        annualProduction: Math.round(initialAcKwhPerYear),
        installationCost: Math.round(installationCost),
        lifetimeSavings: Math.round(lifetimeSavings),
        paybackPeriod,
        roi: Math.round(roi * 100) / 100,
        yearlyBreakdown
      });
    } catch (err) {
      setError('An error occurred while calculating. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Calculate Your Solar Savings</h2>
      
      {/* Input Form */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <HiLocationMarker className="inline mr-2" />
            US Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your US address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <HiCurrencyDollar className="inline mr-2" />
            Monthly Electricity Bill ($)
          </label>
          <input
            type="number"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(e.target.value)}
            placeholder="150"
            min="0"
            step="0.01"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={handleCalculate}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center mx-auto"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Calculating...
            </>
          ) : (
            <>
              <HiCalculator className="mr-2" />
              Calculate Savings
            </>
          )}
        </button>
      </div>

      {/* Results */}
      {results && solarData && (
        <div className="mt-8">
          <SolarResults results={results} solarData={solarData} />
          
          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> This calculator provides estimates based on current solar technology and market conditions. 
              For accurate quotes and installation, consult with local solar installers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 