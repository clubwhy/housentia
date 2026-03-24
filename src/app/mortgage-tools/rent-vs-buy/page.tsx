'use client';

import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import { useState } from 'react';

interface ComparisonResult {
  years: number;
  rentTotal: number;
  buyTotal: number;
  buyDownPayment: number;
  buyMortgageTotal: number;
  buyMaintenance: number;
  buyClosingCosts: number;
  monthlyRent: number;
  monthlyBuy: number;
}

function calculateRentVsBuy(
  monthlyRent: number,
  homePrice: number,
  downPaymentPercent: number,
  interestRate: number,
  termYears: number,
  propertyTaxRate: number,
  insuranceAnnual: number,
  maintenancePercent: number,
  closingCostsPercent: number,
  years: number
): ComparisonResult {
  const downPayment = homePrice * (downPaymentPercent / 100);
  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const n = termYears * 12;
  const monthlyPandI =
    monthlyRate === 0
      ? loanAmount / n
      : (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  const monthlyIns = insuranceAnnual / 12;
  const monthlyMaint = (homePrice * (maintenancePercent / 100)) / 12;
  const monthlyBuy = monthlyPandI + monthlyTax + monthlyIns + monthlyMaint;

  const rentTotal = monthlyRent * 12 * years;
  const monthsToCompare = Math.min(years * 12, n);
  const mortgageTotal = monthlyPandI * monthsToCompare;
  const buyMaintenance = monthlyMaint * 12 * years;
  const buyClosingCosts = homePrice * (closingCostsPercent / 100);
  const buyTotal = downPayment + mortgageTotal + (monthlyTax + monthlyIns) * 12 * years + buyMaintenance + buyClosingCosts;

  return {
    years,
    rentTotal,
    buyTotal,
    buyDownPayment: downPayment,
    buyMortgageTotal: mortgageTotal,
    buyMaintenance,
    buyClosingCosts,
    monthlyRent,
    monthlyBuy,
  };
}

export default function RentVsBuyCalculatorPage() {
  const [result, setResult] = useState<ComparisonResult | null>(null);

  function calculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const monthlyRent = Number(data.monthlyRent) || 0;
    const homePrice = Number(data.homePrice) || 0;
    const downPaymentPercent = Number(data.downPaymentPercent) || 20;
    const interestRate = Number(data.interestRate) || 6.5;
    const termYears = Number(data.termYears) || 30;
    const propertyTaxRate = Number(data.propertyTaxRate) || 1.2;
    const insuranceAnnual = Number(data.insuranceAnnual) || 1200;
    const maintenancePercent = Number(data.maintenancePercent) || 1;
    const closingCostsPercent = Number(data.closingCostsPercent) || 3;
    const years = Number(data.years) || 5;

    if (monthlyRent <= 0 || homePrice <= 0) return;
    const comparison = calculateRentVsBuy(
      monthlyRent,
      homePrice,
      downPaymentPercent,
      interestRate,
      termYears,
      propertyTaxRate,
      insuranceAnnual,
      maintenancePercent,
      closingCostsPercent,
      years
    );
    setResult(comparison);
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Rent vs Buy Calculator"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mortgage Tools', href: '/mortgage-tools' },
          { label: 'Rent vs Buy Calculator' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Disclaimer variant="compact" />
        <p className="text-xs text-gray-500 mt-2 mb-6">
          All calculations are estimates for educational purposes only. Does not account for appreciation, tax deductions, or opportunity cost.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-[280px]">
            <div className="bg-slate-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-primary mb-4">Rent vs Buy Assumptions</h2>
              <form onSubmit={calculate} className="space-y-4">
                <div>
                  <label className="font-bold text-sm block mb-1">Monthly Rent ($)</label>
                  <input
                    type="number"
                    name="monthlyRent"
                    required
                    min="1"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="2000"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Home Price ($)</label>
                  <input
                    type="number"
                    name="homePrice"
                    required
                    min="1"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="400000"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Down Payment (%)</label>
                  <input
                    type="number"
                    name="downPaymentPercent"
                    min="0"
                    max="100"
                    step="0.5"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="20"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Interest Rate (%)</label>
                  <input
                    type="number"
                    name="interestRate"
                    step="0.001"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="6.5"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Loan Term (Years)</label>
                  <select name="termYears" className="w-full border border-slate-200 rounded-lg px-3 py-2">
                    <option value="30">30 years</option>
                    <option value="15">15 years</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Property Tax Rate (%/year)</label>
                  <input
                    type="number"
                    name="propertyTaxRate"
                    step="0.01"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="1.2"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Insurance ($/year)</label>
                  <input
                    type="number"
                    name="insuranceAnnual"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="1200"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Maintenance (% of home value/year)</label>
                  <input
                    type="number"
                    name="maintenancePercent"
                    step="0.1"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="1"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Closing Costs (% of home price)</label>
                  <input
                    type="number"
                    name="closingCostsPercent"
                    step="0.5"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="3"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Compare Over (Years)</label>
                  <select name="years" className="w-full border border-slate-200 rounded-lg px-3 py-2">
                    <option value="5">5 years</option>
                    <option value="10">10 years</option>
                    <option value="15">15 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition"
                >
                  Compare
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {result && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">Renting</h3>
                    <p className="text-2xl font-bold text-gray-800">
                      ${result.rentTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Total over {result.years} years at ${result.monthlyRent.toLocaleString()}/mo
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-2">Buying</h3>
                    <p className="text-2xl font-bold text-blue-800">
                      ${result.buyTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      Down + mortgage + taxes + insurance + maintenance + closing
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                  <p><strong>Buy breakdown:</strong> Down payment ${result.buyDownPayment.toLocaleString()}, mortgage payments ~${result.buyMortgageTotal.toLocaleString()}, maintenance ~${result.buyMaintenance.toLocaleString()}, closing costs ~${result.buyClosingCosts.toLocaleString()}. This excludes appreciation, tax deductions, and opportunity cost. For educational purposes only.</p>
                </div>
              </div>
            )}
            {!result && (
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center text-gray-600">
                <p className="mb-2">Enter rent and home purchase assumptions.</p>
                <p className="text-sm">Compare total costs of renting vs buying over 5–30 years.</p>
              </div>
            )}
          </div>
        </div>

        <nav className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-600 mb-2">Related guides</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline">Down Payment Requirements</Link>
            <Link href="/mortgage/what-is-a-mortgage" className="text-primary hover:underline">What Is a Mortgage</Link>
            <Link href="/tools/affordability-calculator" className="text-primary hover:underline">Home Affordability Calculator</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
