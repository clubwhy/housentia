'use client';

import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import { useState } from 'react';

interface ComparisonResult {
  standardTotalInterest: number;
  standardMonths: number;
  standardPayoffYear: number;
  withExtraTotalInterest: number;
  withExtraMonths: number;
  withExtraPayoffYear: number;
  interestSaved: number;
  monthsSaved: number;
  monthlyPayment: number;
}

function simulateWithExtraPayments(
  loanAmount: number,
  annualRate: number,
  termYears: number,
  extraMonthly: number,
  extraOneTime: number
): ComparisonResult {
  const monthlyRate = annualRate / 100 / 12;
  const n = termYears * 12;
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / n
      : (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

  let balance = loanAmount;
  let totalInterestStandard = 0;
  let monthsStandard = 0;
  for (let m = 0; m < n && balance > 0.01; m++) {
    const interest = balance * monthlyRate;
    const principal = Math.min(monthlyPayment - interest, balance);
    totalInterestStandard += interest;
    balance -= principal;
    monthsStandard = m + 1;
  }

  balance = loanAmount;
  let totalInterestWithExtra = 0;
  let monthsWithExtra = 0;
  let oneTimeApplied = false;
  for (let m = 0; balance > 0.01; m++) {
    const interest = balance * monthlyRate;
    let principal = Math.min(monthlyPayment - interest, balance);
    let extra = extraMonthly;
    if (!oneTimeApplied && extraOneTime > 0) {
      extra += extraOneTime;
      oneTimeApplied = true;
    }
    principal = Math.min(principal + extra, balance);
    totalInterestWithExtra += interest;
    balance -= principal;
    monthsWithExtra = m + 1;
    if (monthsWithExtra > n * 2) break;
  }

  const payoffStandard = new Date();
  payoffStandard.setMonth(payoffStandard.getMonth() + monthsStandard);
  const payoffExtra = new Date();
  payoffExtra.setMonth(payoffExtra.getMonth() + monthsWithExtra);

  return {
    standardTotalInterest: totalInterestStandard,
    standardMonths: monthsStandard,
    standardPayoffYear: payoffStandard.getFullYear(),
    withExtraTotalInterest: totalInterestWithExtra,
    withExtraMonths: monthsWithExtra,
    withExtraPayoffYear: payoffExtra.getFullYear(),
    interestSaved: totalInterestStandard - totalInterestWithExtra,
    monthsSaved: monthsStandard - monthsWithExtra,
    monthlyPayment,
  };
}

export default function ExtraPaymentCalculatorPage() {
  const [result, setResult] = useState<ComparisonResult | null>(null);

  function calculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const loanAmount = Number(data.loanAmount) || 0;
    const rate = Number(data.interestRate) || 0;
    const term = Number(data.loanTermYears) || 0;
    const extraMonthly = Number(data.extraMonthly) || 0;
    const extraOneTime = Number(data.extraOneTime) || 0;
    if (loanAmount <= 0 || term <= 0) return;
    const comparison = simulateWithExtraPayments(loanAmount, rate, term, extraMonthly, extraOneTime);
    setResult(comparison);
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Extra Payment Calculator"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mortgage Tools', href: '/mortgage-tools' },
          { label: 'Extra Payment Calculator' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Disclaimer variant="compact" />
        <p className="text-xs text-gray-500 mt-2 mb-6">
          All calculations are estimates for educational purposes only. Actual terms may vary. Check your loan documents for prepayment terms.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-[280px]">
            <div className="bg-slate-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-primary mb-4">Loan & Extra Payments</h2>
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
                  <label className="font-bold text-sm block mb-1">Interest Rate (%)</label>
                  <input
                    type="number"
                    name="interestRate"
                    required
                    step="0.001"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="6.5"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Loan Term (Years)</label>
                  <select
                    name="loanTermYears"
                    required
                    className="w-full border border-slate-200 rounded-lg px-3 py-2"
                  >
                    <option value="10">10 years</option>
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Extra Monthly Payment ($)</label>
                  <input
                    type="number"
                    name="extraMonthly"
                    min="0"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="100"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">One-Time Extra Payment ($)</label>
                  <input
                    type="number"
                    name="extraOneTime"
                    min="0"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="0"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition"
                >
                  Calculate Impact
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {result && (
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-900 mb-4">Impact of Extra Payments</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-green-800">Interest Saved</p>
                      <p className="text-2xl font-bold text-green-700">
                        ${result.interestSaved.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-800">Months Saved</p>
                      <p className="text-2xl font-bold text-green-700">{result.monthsSaved}</p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Without Extra Payments</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>Total interest: ${result.standardTotalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</li>
                      <li>Payoff: {result.standardMonths} months (~{result.standardPayoffYear})</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">With Extra Payments</h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>Total interest: ${result.withExtraTotalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</li>
                      <li>Payoff: {result.withExtraMonths} months (~{result.withExtraPayoffYear})</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  Extra principal payments reduce the balance faster, so less interest accrues. The earlier you make them, the more interest you save. Check your loan documents for any prepayment restrictions.
                </p>
              </div>
            )}

            {!result && (
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center text-gray-600">
                <p className="mb-2">Enter your loan details and extra payment amount(s).</p>
                <p className="text-sm">See how extra principal payments reduce total interest and shorten the loan term.</p>
              </div>
            )}
          </div>
        </div>

        <nav className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-600 mb-2">Related guides</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline">What Is Amortization</Link>
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline">What Is Mortgage Principal</Link>
            <Link href="/mortgage-tools/amortization" className="text-primary hover:underline">Amortization Calculator</Link>
            <Link href="/tools/mortgage-calculator" className="text-primary hover:underline">Mortgage Payment Calculator</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
