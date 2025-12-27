"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import { useState } from 'react';
import Disclaimer from '@/components/Disclaimer';

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
    const totalMortgagePayment = totalMonthly * n;

    setResult({
      loanAmount: loanAmount.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyMortgage: monthlyMortgage.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyPropertyTax: monthlyPropertyTax.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyInsurance: monthlyInsurance.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyOther: monthlyOther.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      totalMonthly: totalMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      totalInterest: totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      payoffDate: payoffDate.getFullYear(),
      totalMortgagePayment: totalMortgagePayment.toLocaleString(undefined, { maximumFractionDigits: 0 })
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
      <div className="flex items-center justify-center py-8">
        <div className="w-full max-w-5xl rounded-2xl shadow-xl border border-slate-100 bg-white p-6 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Compliance: Disclaimer for calculators */}
          <div className="w-full md:hidden mb-4">
            <Disclaimer variant="compact" />
            <p className="text-xs text-gray-500 mt-2 text-center">
              <strong>Note:</strong> All calculations are estimates for educational purposes only. Actual rates and terms may vary.
            </p>
          </div>
          
          {/* 입력폼 */}
          <div className="flex-1 min-w-[320px]">
            <div className="bg-slate-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Mortgage Information</h2>
              <form id="calcForm" className="space-y-0" onSubmit={calculate}>
                <div className="divide-y divide-slate-200">
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Home Price</label>
                    <input type="number" name="homePrice" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="e.g. 500000" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Down Payment (%)</label>
                    <input type="number" name="downPaymentPercent" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="e.g. 20" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Loan Term (Years)</label>
                    <select name="loanTermYears" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3">
                      <option value="10">10 years</option>
                      <option value="15">15 years</option>
                      <option value="20">20 years</option>
                      <option value="30">30 years</option>
                    </select>
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Interest Rate (%)</label>
                    <input type="number" name="interestRate" step="0.001" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="e.g. 6.5" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Property Tax Rate (%)</label>
                    <input type="number" name="propertyTaxRate" step="0.01" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="e.g. 1.2" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Home Insurance ($/year)</label>
                    <input type="number" name="homeInsurance" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="e.g. 1200" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Other Costs ($/year)</label>
                    <input type="number" name="otherCosts" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="e.g. 600" />
                  </div>
                </div>
                <button type="submit" className="mt-5 w-full py-2 border border-primary text-primary font-bold rounded-lg bg-white hover:bg-primary/10 transition text-base">Calculate</button>
              </form>
            </div>
          </div>
          {/* 결과 영역 */}
          <div className="flex-1 min-w-[320px] flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              {/* Compliance: Hidden disclaimer on desktop, shown on mobile */}
              <div className="hidden md:block mb-4">
                <Disclaimer variant="compact" />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  <strong>Note:</strong> All calculations are estimates for educational purposes only. Actual rates and terms may vary.
                </p>
              </div>
              
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="w-40 h-40 rounded-full border-8 border-slate-100 flex items-center justify-center mb-2">
                  <div className="text-3xl font-extrabold text-primary text-center">${result ? result.totalMonthly : 0}</div>
                </div>
                <div className="text-primary font-bold text-lg text-center">Estimated monthly payment</div>
                <div className="text-xs text-gray-500 mt-1 text-center">For educational purposes only</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center shadow mb-4">
                <div className="font-bold text-slate-700 mb-1">Loan Amount</div>
                <div className="text-blue-700 text-xl font-extrabold">${result ? result.loanAmount : 0}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow mb-4">
                <div className="font-bold text-slate-700 mb-1">Breakdown</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between bg-blue-100 rounded-lg px-3 py-1">
                    <span className="font-bold text-blue-700">Property Tax</span>
                    <span className="text-blue-700">${result ? result.monthlyPropertyTax : 0}</span>
                  </div>
                  <div className="flex items-center justify-between bg-purple-100 rounded-lg px-3 py-1">
                    <span className="font-bold text-purple-700">Home Insurance</span>
                    <span className="text-purple-700">${result ? result.monthlyInsurance : 0}</span>
                  </div>
                  <div className="flex items-center justify-between bg-pink-100 rounded-lg px-3 py-1">
                    <span className="font-bold text-pink-700">Other Costs</span>
                    <span className="text-pink-700">${result ? result.monthlyOther : 0}</span>
                  </div>
                  <div className="flex items-center justify-between bg-green-100 rounded-lg px-3 py-1">
                    <span className="font-bold text-green-700">Monthly Mortgage</span>
                    <span className="text-green-700">${result ? result.monthlyMortgage : 0}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between bg-green-100 rounded-lg px-3 py-1">
                  <span className="font-bold text-green-700">Total Mortgage Payment</span>
                  <span className="text-green-700">${result ? result.totalMortgagePayment : 0}</span>
                </div>
                <div className="flex items-center justify-between bg-blue-100 rounded-lg px-3 py-1">
                  <span className="font-bold text-blue-700">Total Interest</span>
                  <span className="text-blue-700">${result ? result.totalInterest : 0}</span>
                </div>
                <div className="flex items-center justify-between bg-yellow-100 rounded-lg px-3 py-1">
                  <span className="font-bold text-yellow-700">Payoff Year</span>
                  <span className="text-yellow-700">{result ? result.payoffDate : '-'}</span>
                </div>
              </div>
              {/* Secondary Actions - Educational Engagement */}
              {result && (
                <div className="mt-6 space-y-3">
                  <div className="text-center text-sm text-gray-600 mb-3">
                    <strong>Next Steps:</strong> Explore how different loan types affect your payment
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        // Save calculation to localStorage (client-side only)
                        const calcData = {
                          timestamp: new Date().toISOString(),
                          homePrice: (document.querySelector('input[name="homePrice"]') as HTMLInputElement)?.value,
                          downPayment: (document.querySelector('input[name="downPaymentPercent"]') as HTMLInputElement)?.value,
                          loanTerm: (document.querySelector('select[name="loanTermYears"]') as HTMLSelectElement)?.value,
                          interestRate: (document.querySelector('input[name="interestRate"]') as HTMLInputElement)?.value,
                          monthlyPayment: result.totalMonthly,
                          loanAmount: result.loanAmount
                        };
                        const saved = JSON.parse(localStorage.getItem('savedCalculations') || '[]');
                        saved.push(calcData);
                        localStorage.setItem('savedCalculations', JSON.stringify(saved.slice(-5))); // Keep last 5
                        alert('Calculation saved! You can compare this with other scenarios.');
                      }}
                      className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition text-sm"
                    >
                      Save this calculation
                    </button>
                    <a
                      href="/mortgage/find-the-right-loan"
                      className="flex-1 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition text-sm text-center"
                    >
                      See how loan type affects this payment
                    </a>
                    <button
                      onClick={() => {
                        // Reset form
                        const form = document.getElementById('calcForm') as HTMLFormElement;
                        form.reset();
                        setResult(null);
                      }}
                      className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition text-sm"
                    >
                      Compare another scenario
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 