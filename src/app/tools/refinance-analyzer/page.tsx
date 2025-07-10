"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import PageHero from '@/components/PageHero';
import { useState } from 'react';


export default function RefinanceAnalyzerPage() {
  const [result, setResult] = useState<any>(null);

  function calculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Current loan
    const currentBalance = Number(data.currentBalance) || 0;
    const currentMonthly = Number(data.currentMonthly) || 0;
    const currentRate = Number(data.currentRate) || 0;
    // New loan
    const newTerm = Number(data.newTerm) || 0;
    const newRate = Number(data.newRate) || 0;
    const newPoints = Number(data.newPoints) || 0;
    const newFees = Number(data.newFees) || 0;
    const newCashout = Number(data.newCashout) || 0;

    // 남은 기간(개월) 추정: 현재 월납입금, 잔액, 이자율로 계산
    const monthlyInterest = currentRate / 100 / 12;
    let n = 0;
    if (monthlyInterest > 0 && currentMonthly > 0) {
      n = Math.log(currentMonthly / (currentMonthly - currentBalance * monthlyInterest)) / Math.log(1 + monthlyInterest);
      n = Math.round(n);
    }
    // 기존 대출 총이자, 총상환액
    const currentTotalInterest = currentMonthly * n - currentBalance;
    const currentTotalPayments = currentMonthly * n;

    // 신규 대출 월납입금
    const newLoanAmount = currentBalance + newFees + newCashout + (currentBalance * (newPoints / 100));
    const newMonthlyInterest = newRate / 100 / 12;
    const newN = newTerm * 12;
    const newMonthly = newMonthlyInterest === 0 ? newLoanAmount / newN : (newLoanAmount * newMonthlyInterest) / (1 - Math.pow(1 + newMonthlyInterest, -newN));
    const newTotalInterest = newMonthly * newN - newLoanAmount;
    const newTotalPayments = newMonthly * newN;
    const upfrontFees = newFees + (currentBalance * (newPoints / 100));

    // 차이
    const diffMonthly = newMonthly - currentMonthly;
    const diffInterest = newTotalInterest - currentTotalInterest;
    const diffPayments = newTotalPayments - currentTotalPayments;
    // 브레이크이븐(수수료 회수 시점, 개월)
    const breakEven = upfrontFees > 0 && diffMonthly < 0 ? Math.ceil(upfrontFees / Math.abs(diffMonthly)) : null;

    setResult({
      n,
      newN,
      currentBalance,
      currentMonthly,
      currentRate,
      newLoanAmount,
      newMonthly,
      newRate,
      newPoints,
      newFees,
      newCashout,
      currentTotalInterest,
      currentTotalPayments,
      newTotalInterest,
      newTotalPayments,
      upfrontFees,
      diffMonthly,
      diffInterest,
      diffPayments,
      breakEven
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Refinance Analyzer"
        breadcrumbs={[
          { label: 'Tools', href: '/tools' },
          { label: 'Refinance Analyzer' }
        ]}
      />
      <div className="flex items-center justify-center py-8">
        <div className="w-full max-w-5xl rounded-2xl shadow-xl border border-slate-100 bg-white p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          {/* 입력폼 */}
          <div className="flex-1 min-w-[320px]">
            <div className="bg-slate-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Current loan</h2>
              <form id="refiForm" className="space-y-0" onSubmit={calculate}>
                <div className="divide-y divide-slate-200">
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Remaining balance</label>
                    <input type="number" name="currentBalance" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="$300000" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Monthly payment</label>
                    <input type="number" name="currentMonthly" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="$2300" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Interest rate (%)</label>
                    <input type="number" name="currentRate" step="0.001" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="7" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-primary mt-8 mb-4">New loan</h2>
                <div className="divide-y divide-slate-200">
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Loan term (years)</label>
                    <input type="number" name="newTerm" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="20" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Interest rate (%)</label>
                    <input type="number" name="newRate" step="0.001" required className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="6.828" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Points (%)</label>
                    <input type="number" name="newPoints" step="0.01" className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="2" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Fees ($)</label>
                    <input type="number" name="newFees" className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="5000" />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-base block mb-1">Cash out amount ($)</label>
                    <input type="number" name="newCashout" className="bg-white border border-slate-200 rounded-lg w-full h-9 text-right text-base px-3" placeholder="0" />
                  </div>
                </div>
                <button type="submit" className="mt-5 w-full py-2 border border-primary text-primary font-bold rounded-lg bg-white hover:bg-primary/10 transition text-base">Analyze</button>
              </form>
            </div>
          </div>
          {/* 결과 영역 */}
          <div className="flex-1 min-w-[320px] flex flex-col">
            <div className="w-full max-w-md">
              {result && (
                <div className="bg-white rounded-xl p-6 shadow mb-4">
                  <h3 className="text-lg font-bold text-primary mb-2">By refinancing, you will:</h3>
                  <ul className="mb-4 text-base">
                    <li>Pay <span className={result.diffMonthly < 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{result.diffMonthly < 0 ? `$${Math.abs(result.diffMonthly).toFixed(2)} less` : `$${Math.abs(result.diffMonthly).toFixed(2)} more`}</span> each month</li>
                    <li>Spend <span className={result.diffInterest < 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{result.diffInterest < 0 ? `$${Math.abs(result.diffInterest).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})} less` : `$${Math.abs(result.diffInterest).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})} more`}</span> over the lifetime of the loan</li>
                    {result.breakEven && <li>Break even on your upfront fees in <span className="font-bold text-blue-700">{result.breakEven} months</span></li>}
                  </ul>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                      <thead>
                        <tr className="bg-slate-50 text-slate-600">
                          <th className="py-2 px-2 font-bold text-left"> </th>
                          <th className="py-2 px-2 font-bold text-center">Current loan</th>
                          <th className="py-2 px-2 font-bold text-center">New loan</th>
                          <th className="py-2 px-2 font-bold text-center">Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-2 font-bold">Loan amount</td>
                          <td className="py-2 px-2 text-center">${result.currentBalance.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                          <td className="py-2 px-2 text-center">${result.newLoanAmount.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                          <td className="py-2 px-2 text-center">${(result.newLoanAmount-result.currentBalance).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-bold">Loan term</td>
                          <td className="py-2 px-2 text-center">{result.n} months</td>
                          <td className="py-2 px-2 text-center">{result.newN} months</td>
                          <td className="py-2 px-2 text-center">{result.newN-result.n} months</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-bold">Monthly payment</td>
                          <td className="py-2 px-2 text-center">${result.currentMonthly.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                          <td className="py-2 px-2 text-center">${result.newMonthly.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                          <td className="py-2 px-2 text-center">{result.diffMonthly > 0 ? '+' : ''}{result.diffMonthly.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-bold">Interest rate</td>
                          <td className="py-2 px-2 text-center">{result.currentRate}%</td>
                          <td className="py-2 px-2 text-center">{result.newRate}%</td>
                          <td className="py-2 px-2 text-center">{(result.newRate-result.currentRate).toFixed(2)}%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-bold">Total interest</td>
                          <td className="py-2 px-2 text-center">${result.currentTotalInterest.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                          <td className="py-2 px-2 text-center">${result.newTotalInterest.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                          <td className="py-2 px-2 text-center">{result.diffInterest > 0 ? '+' : ''}{result.diffInterest.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-bold">Total payments</td>
                          <td className="py-2 px-2 text-center">${result.currentTotalPayments.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                          <td className="py-2 px-2 text-center">${result.newTotalPayments.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                          <td className="py-2 px-2 text-center">{result.diffPayments > 0 ? '+' : ''}{result.diffPayments.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-bold">Upfront fees</td>
                          <td className="py-2 px-2 text-center">-</td>
                          <td className="py-2 px-2 text-center">${result.upfrontFees.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                          <td className="py-2 px-2 text-center">-</td>
                        </tr>
                      </tbody>
                    </table>
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