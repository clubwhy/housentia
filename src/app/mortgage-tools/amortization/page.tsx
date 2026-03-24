'use client';

import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import { useState } from 'react';

interface ScheduleRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

function buildAmortizationSchedule(
  loanAmount: number,
  annualRate: number,
  termYears: number
): ScheduleRow[] {
  if (loanAmount <= 0 || termYears <= 0) return [];
  const monthlyRate = annualRate / 100 / 12;
  const n = termYears * 12;
  const payment =
    monthlyRate === 0
      ? loanAmount / n
      : (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  const rows: ScheduleRow[] = [];
  let balance = loanAmount;
  for (let month = 1; month <= n && balance > 0.01; month++) {
    const interestPortion = balance * monthlyRate;
    const principalPortion = Math.min(payment - interestPortion, balance);
    balance -= principalPortion;
    if (balance < 0.01) balance = 0;
    rows.push({
      month,
      payment,
      principal: principalPortion,
      interest: interestPortion,
      balance,
    });
  }
  return rows;
}

export default function AmortizationCalculatorPage() {
  const [schedule, setSchedule] = useState<ScheduleRow[]>([]);
  const [summary, setSummary] = useState<{
    loanAmount: number;
    rate: number;
    term: number;
    monthlyPayment: number;
    totalInterest: number;
    payoffYear: number;
  } | null>(null);

  function calculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const loanAmount = Number(data.loanAmount) || 0;
    const rate = Number(data.interestRate) || 0;
    const term = Number(data.loanTermYears) || 0;
    if (loanAmount <= 0 || term <= 0) return;
    const rows = buildAmortizationSchedule(loanAmount, rate, term);
    setSchedule(rows);
    const monthlyPayment = rows[0]?.payment ?? 0;
    const totalInterest = rows.reduce((s, r) => s + r.interest, 0);
    const payoffDate = new Date();
    payoffDate.setMonth(payoffDate.getMonth() + rows.length);
    setSummary({
      loanAmount,
      rate,
      term,
      monthlyPayment,
      totalInterest,
      payoffYear: payoffDate.getFullYear(),
    });
  }

  const displayRows = schedule.slice(0, 60);
  const hasMore = schedule.length > 60;

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Amortization Calculator"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mortgage Tools', href: '/mortgage-tools' },
          { label: 'Amortization Calculator' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Disclaimer variant="compact" />
        <p className="text-xs text-gray-500 mt-2 mb-6">
          All calculations are estimates for educational purposes only. Actual terms may vary.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-[280px]">
            <div className="bg-slate-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-primary mb-4">Loan Details</h2>
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
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition"
                >
                  Generate Schedule
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {summary && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="text-sm font-semibold text-blue-900">Monthly Payment</p>
                    <p className="text-xl font-bold text-blue-700">
                      ${summary.monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <p className="text-sm font-semibold text-green-900">Total Interest</p>
                    <p className="text-xl font-bold text-green-700">
                      ${summary.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <p className="text-sm font-semibold text-amber-900">Payoff Year</p>
                    <p className="text-xl font-bold text-amber-700">{summary.payoffYear}</p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 px-2">Amortization Schedule (first 60 months)</h3>
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left font-semibold text-gray-900">Month</th>
                        <th className="px-3 py-2 text-right font-semibold text-gray-900">Payment</th>
                        <th className="px-3 py-2 text-right font-semibold text-gray-900">Principal</th>
                        <th className="px-3 py-2 text-right font-semibold text-gray-900">Interest</th>
                        <th className="px-3 py-2 text-right font-semibold text-gray-900">Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {displayRows.map((r) => (
                        <tr key={r.month} className="hover:bg-gray-50">
                          <td className="px-3 py-2">{r.month}</td>
                          <td className="px-3 py-2 text-right">${r.payment.toFixed(2)}</td>
                          <td className="px-3 py-2 text-right text-green-700">${r.principal.toFixed(2)}</td>
                          <td className="px-3 py-2 text-right text-amber-700">${r.interest.toFixed(2)}</td>
                          <td className="px-3 py-2 text-right">${r.balance.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {hasMore && (
                    <p className="text-sm text-gray-500 px-3 py-2 bg-gray-50">
                      Showing 60 of {schedule.length} months. Early payments go mostly to interest; over time, more goes to principal.
                    </p>
                  )}
                </div>
              </div>
            )}

            {!summary && (
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center text-gray-600">
                <p className="mb-2">Enter your loan details and click Generate Schedule.</p>
                <p className="text-sm">You will see how each payment splits between principal and interest and how the balance decreases over time.</p>
              </div>
            )}
          </div>
        </div>

        <nav className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-600 mb-2">Related guides</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline">What Is Amortization</Link>
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline">What Is Mortgage Principal</Link>
            <Link href="/tools/mortgage-calculator" className="text-primary hover:underline">Mortgage Payment Calculator</Link>
            <Link href="/mortgage-tools/extra-payment" className="text-primary hover:underline">Extra Payment Calculator</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
