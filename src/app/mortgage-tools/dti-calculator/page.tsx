'use client';

import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import { useState } from 'react';

export default function DtiCalculatorPage() {
  const [result, setResult] = useState<{
    frontEnd: number;
    backEnd: number;
    housingPayment: number;
    grossIncome: number;
    totalDebt: number;
  } | null>(null);

  function calculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const grossIncome = Number(data.grossIncome) || 0;
    const housingPayment = Number(data.housingPayment) || 0;
    const debtPayments = Number(data.debtPayments) || 0;

    if (grossIncome <= 0) return;
    const frontEnd = grossIncome > 0 ? (housingPayment / grossIncome) * 100 : 0;
    const totalDebt = housingPayment + debtPayments;
    const backEnd = grossIncome > 0 ? (totalDebt / grossIncome) * 100 : 0;

    setResult({
      frontEnd,
      backEnd,
      housingPayment,
      grossIncome,
      totalDebt,
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Debt-to-Income (DTI) Calculator"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mortgage Tools', href: '/mortgage-tools' },
          { label: 'DTI Calculator' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Disclaimer variant="compact" />
        <p className="text-xs text-gray-500 mt-2 mb-6">
          All calculations are estimates for educational purposes only. Lenders use their own methods and limits.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-[280px]">
            <div className="bg-slate-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-primary mb-4">Income & Debts</h2>
              <form onSubmit={calculate} className="space-y-4">
                <div>
                  <label className="font-bold text-sm block mb-1">Gross Monthly Income ($)</label>
                  <input
                    type="number"
                    name="grossIncome"
                    required
                    min="1"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="8000"
                  />
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Housing Payment ($/month)</label>
                  <input
                    type="number"
                    name="housingPayment"
                    min="0"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="2400"
                  />
                  <p className="text-xs text-gray-500 mt-1">Proposed PITI (principal, interest, taxes, insurance)</p>
                </div>
                <div>
                  <label className="font-bold text-sm block mb-1">Other Monthly Debts ($)</label>
                  <input
                    type="number"
                    name="debtPayments"
                    min="0"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-right"
                    placeholder="500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Car, credit cards, student loans, etc.</p>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition"
                >
                  Calculate DTI
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {result && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-2">Front-End DTI</h3>
                    <p className="text-3xl font-bold text-blue-800">{result.frontEnd.toFixed(1)}%</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Housing payment ÷ gross income. Many lenders prefer 28% or less.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Back-End DTI</h3>
                    <p className="text-3xl font-bold text-green-800">{result.backEnd.toFixed(1)}%</p>
                    <p className="text-sm text-green-700 mt-1">
                      (Housing + other debts) ÷ gross income. Many lenders prefer 36% or less.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                  <p><strong>Your numbers:</strong> Gross income ${result.grossIncome.toLocaleString()}/mo, housing ${result.housingPayment.toLocaleString()}/mo, other debts ${(result.totalDebt - result.housingPayment).toLocaleString()}/mo. DTI limits vary by loan program and lender.</p>
                </div>
              </div>
            )}
            {!result && (
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center text-gray-600">
                <p className="mb-2">Enter your gross monthly income and debt payments.</p>
                <p className="text-sm">See how lenders may view your affordability based on front-end and back-end DTI.</p>
              </div>
            )}
          </div>
        </div>

        <nav className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-600 mb-2">Related guides</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline">How DTI Affects Mortgage Approval</Link>
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline">What Is DTI</Link>
            <Link href="/tools/affordability-calculator" className="text-primary hover:underline">Home Affordability Calculator</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
