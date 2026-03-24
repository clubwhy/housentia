'use client';

import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import { useState } from 'react';

interface ComparisonResult {
  fixedMonthly: number;
  fixedTotalInterest: number;
  armInitialMonthly: number;
  armInitialTotalInterest: number;
  armAfterAdjustment: number;
  armBalanceAfterFixed: number;
  loanAmount: number;
  term: number;
}

function pmt(loanAmount: number, annualRate: number, months: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return loanAmount / months;
  return (loanAmount * r) / (1 - Math.pow(1 + r, -months));
}

function balanceAfter(loanAmount: number, annualRate: number, monthlyPmt: number, monthsPaid: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return Math.max(0, loanAmount - monthlyPmt * monthsPaid);
  return loanAmount * Math.pow(1 + r, monthsPaid) - monthlyPmt * (Math.pow(1 + r, monthsPaid) - 1) / r;
}

export default function ArmVsFixedCalculatorPage() {
  const [result, setResult] = useState<ComparisonResult | null>(null);

  function calculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const loanAmount = Number(data.loanAmount) || 0;
    const term = Number(data.termYears) || 30;
    const fixedRate = Number(data.fixedRate) || 6.5;
    const armInitialRate = Number(data.armInitialRate) || 6.0;
    const armAfterRate = Number(data.armAfterRate) || 7.5;
    const armFixedYears = Number(data.armFixedYears) || 5;

    if (loanAmount <= 0) return;

    const n = term * 12;
    const fixedMonthly = pmt(loanAmount, fixedRate, n);
    const fixedTotalInterest = fixedMonthly * n - loanAmount;

    const armFixedMonths = armFixedYears * 12;
    const armAdjustMonths = n - armFixedMonths;
    const armInitialMonthly = pmt(loanAmount, armInitialRate, n);
    const armBalanceAfterFixed = balanceAfter(loanAmount, armInitialRate, armInitialMonthly, armFixedMonths);
    const armMonthlyAfter = armAdjustMonths > 0 && armBalanceAfterFixed > 0
      ? pmt(armBalanceAfterFixed, armAfterRate, armAdjustMonths)
      : 0;
    const armPhase1Interest = armInitialMonthly * armFixedMonths - (loanAmount - armBalanceAfterFixed);
    const armPhase2Interest = armMonthlyAfter * armAdjustMonths - armBalanceAfterFixed;
    const armInitialTotalInterest = armPhase1Interest + armPhase2Interest;

    setResult({
      fixedMonthly,
      fixedTotalInterest,
      armInitialMonthly,
      armInitialTotalInterest,
      armAfterAdjustment: armMonthlyAfter,
      armBalanceAfterFixed,
      loanAmount,
      term,
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="ARM vs Fixed-Rate Calculator"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mortgage Tools', href: '/mortgage-tools' },
          { label: 'ARM vs Fixed-Rate Calculator' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Disclaimer variant="compact" />
        <p className="text-xs text-gray-500 mt-2 mb-6">
          All calculations are estimates for educational purposes only. ARM rates can change; this uses simplified assumptions.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-[280px]">
            <div className="bg-slate-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-primary mb-4">Loan & Rates</h2>
              <form onSubmit={calculate} className="space-y-4">
                <div>
                  <label className="font-bold text-sm block mb-1">Loan Amount ($)</label>
                  <input
                    type="number"
                    name="loanAmount"
                    required
                    min="1"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="300000"
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
                  <label className="font-bold text-sm block mb-1">Fixed-Rate (%)</label>
                  <input
                    type="number"
                    name="fixedRate"
                    step="0.001"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="6.5"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">ARM Initial Rate (%)</label>
                  <input
                    type="number"
                    name="armInitialRate"
                    step="0.001"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="6.0"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">ARM Rate After Adjustment (%)</label>
                  <input
                    type="number"
                    name="armAfterRate"
                    step="0.001"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="7.5"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">ARM Fixed Period (Years)</label>
                  <select name="armFixedYears" className="w-full border border-slate-200 rounded-lg px-3 py-2">
                    <option value="5">5 years (5/1 ARM)</option>
                    <option value="7">7 years (7/1 ARM)</option>
                    <option value="10">10 years (10/1 ARM)</option>
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
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-2">Fixed-Rate</h3>
                    <p className="text-2xl font-bold text-blue-800">
                      ${result.fixedMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      Total interest: ${result.fixedTotalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                    <h3 className="font-bold text-amber-900 mb-2">ARM</h3>
                    <p className="text-2xl font-bold text-amber-800">
                      ${result.armInitialMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo
                    </p>
                    <p className="text-sm text-amber-700 mt-1">
                      After adjustment: ~${result.armAfterAdjustment.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo · Total interest: ${result.armInitialTotalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                  <p>ARM starts with a lower rate, then adjusts. If rates rise, your payment can increase. This comparison uses simplified assumptions; actual ARM caps and adjustment mechanics vary by product.</p>
                </div>
              </div>
            )}
            {!result && (
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center text-gray-600">
                <p className="mb-2">Enter loan amount and rate assumptions.</p>
                <p className="text-sm">Compare monthly payments and total cost for fixed vs ARM.</p>
              </div>
            )}
          </div>
        </div>

        <nav className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-600 mb-2">Related guides</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/mortgage/fixed-vs-adjustable-rate-mortgage" className="text-primary hover:underline">Fixed vs Adjustable Rate Mortgage</Link>
            <Link href="/mortgage/what-is-an-adjustable-rate-mortgage" className="text-primary hover:underline">What Is an Adjustable Rate Mortgage</Link>
            <Link href="/mortgage/what-is-a-fixed-rate-mortgage" className="text-primary hover:underline">What Is a Fixed Rate Mortgage</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
