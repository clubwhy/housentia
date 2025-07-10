"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import { useState } from 'react';

export default function MortgageCalculatorPage() {
  const [result, setResult] = useState<any>(null);

  function calculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // 각 값은 string이므로 바로 Number(...)로 변환
    const homePrice = Number(data.homePrice) || 0;
    const downPaymentPercent = Number(data.downPaymentPercent) || 0;
    const loanTermYears = Number(data.loanTermYears) || 0;
    const interestRate = Number(data.interestRate) || 0;
    const propertyTaxRate = Number(data.propertyTaxRate) || 0;
    const homeInsurance = Number(data.homeInsurance) || 0;
    const otherCosts = Number(data.otherCosts) || 0;

    const downPayment = homePrice * (downPaymentPercent / 100);
    const loanAmount = homePrice - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const n = loanTermYears * 12;
    const monthlyMortgage = monthlyInterest === 0 ? loanAmount / n : (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -n));
    const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyInsurance = homeInsurance / 12;
    const monthlyOther = otherCosts / 12;
    const totalMonthly = monthlyMortgage + monthlyPropertyTax + monthlyInsurance + monthlyOther;
    const totalInterest = monthlyMortgage * n - loanAmount;
    const payoffDate = new Date();
    payoffDate.setMonth(payoffDate.getMonth() + n);

    setResult({
      loanAmount: loanAmount.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyMortgage: monthlyMortgage.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyPropertyTax: monthlyPropertyTax.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyInsurance: monthlyInsurance.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyOther: monthlyOther.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      totalMonthly: totalMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      totalInterest: totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      payoffDate: payoffDate.getFullYear()
    });
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-10 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white font-sans mb-2 md:mb-0 drop-shadow">Mortgage Calculator</h1>
          <nav className="flex items-center text-xs text-slate-200 gap-1 md:self-end md:mb-1">
            <Link href="/" className="hover:text-accent flex items-center gap-1">
              <HiHome className="inline-block w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-slate-300" />
            <Link href="/tools" className="hover:text-accent">Tools</Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-slate-300" />
            <span className="text-white font-semibold">Mortgage Calculator</span>
          </nav>
        </div>
      </section>
      {/* Main Content Area */}
      <main className="max-w-xl mx-auto px-4 py-12 font-sans text-[17px] text-gray-800">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-6">Estimate Your Monthly Payment</h2>
          <form id="calcForm" className="space-y-4" onSubmit={calculate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block font-medium text-gray-700">Home Price
                <input type="number" name="homePrice" required className="mt-1 input input-bordered w-full" placeholder="e.g. 500000" />
              </label>
              <label className="block font-medium text-gray-700">Down Payment (%)
                <input type="number" name="downPaymentPercent" required className="mt-1 input input-bordered w-full" placeholder="e.g. 20" />
              </label>
              <label className="block font-medium text-gray-700">Loan Term (Years)
                <select name="loanTermYears" required className="mt-1 input input-bordered w-full">
                  <option value="10">10 years</option>
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="30">30 years</option>
                </select>
              </label>
              <label className="block font-medium text-gray-700">Interest Rate (%)
                <input type="number" name="interestRate" step="0.001" required className="mt-1 input input-bordered w-full" placeholder="e.g. 6.5" />
              </label>
              <label className="block font-medium text-gray-700">Property Tax Rate (%)
                <input type="number" name="propertyTaxRate" step="0.01" required className="mt-1 input input-bordered w-full" placeholder="e.g. 1.2" />
              </label>
              <label className="block font-medium text-gray-700">Home Insurance ($/year)
                <input type="number" name="homeInsurance" required className="mt-1 input input-bordered w-full" placeholder="e.g. 1200" />
              </label>
              <label className="block font-medium text-gray-700">Other Costs ($/year)
                <input type="number" name="otherCosts" required className="mt-1 input input-bordered w-full" placeholder="e.g. 600" />
              </label>
            </div>
            <button type="submit" className="w-full mt-4 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-accent-hover transition text-lg">Calculate</button>
          </form>
        </div>
        {result && (
          <div id="calcResult" className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-lg border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><strong>Loan Amount:</strong> <span className="text-blue-700">${result.loanAmount}</span></p>
              <p><strong>Monthly Mortgage:</strong> <span className="text-blue-700">${result.monthlyMortgage}</span></p>
              <p><strong>Property Tax:</strong> <span className="text-blue-700">${result.monthlyPropertyTax}</span></p>
              <p><strong>Home Insurance:</strong> <span className="text-blue-700">${result.monthlyInsurance}</span></p>
              <p><strong>Other Costs:</strong> <span className="text-blue-700">${result.monthlyOther}</span></p>
              <p><strong>Total Monthly Payment:</strong> <span className="text-accent font-bold">${result.totalMonthly}</span></p>
              <p><strong>Total Interest:</strong> <span className="text-blue-700">${result.totalInterest}</span></p>
              <p><strong>Payoff Year:</strong> <span className="text-primary font-bold">{result.payoffDate}</span></p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 