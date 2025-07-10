"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import PageHero from '@/components/PageHero';
import React from 'react'; // Added missing import

export default function AffordabilityCalculatorPage() {
  // 상태 관리
  const [tab, setTab] = React.useState<'personal' | 'taxes'>('personal');
  const [income, setIncome] = React.useState(10000);
  const [debt, setDebt] = React.useState(2000);
  const [down, setDown] = React.useState(20000);
  const [state, setState] = React.useState('California');
  // Taxes & fees 상태
  const [propertyTax, setPropertyTax] = React.useState(5000);
  const [insurance, setInsurance] = React.useState(1200);
  const [hoa, setHoa] = React.useState(350);
  const [loanTerm, setLoanTerm] = React.useState(30);
  const [interest, setInterest] = React.useState(6.49);
  // 샘플 계산 로직 (실제론 더 복잡)
  // 계산에 사용할 값 결정
  const isPersonal = tab === 'personal';
  // 집값 계산: 연소득 - 연부채 * 3 + 다운페이, 최대 100만 달러
  const calcHomePrice = Math.max(0, Math.min((income - debt * 12) * 3 + down, 1000000));
  // 월 납입금 계산
  function calcMonthlyPayment(P: number, r: number, n: number) {
    if (r === 0) return P / n;
    return P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }
  let calcMonthly = 0;
  if (isPersonal) {
    // Personal info 탭: 대출원금 = 집값 - 다운페이, 이자율 5%, 30년 고정
    const principal = Math.max(0, calcHomePrice - down);
    const months = 30 * 12;
    const monthlyRate = 0.05 / 12;
    const loanPayment = calcMonthlyPayment(principal, monthlyRate, months);
    calcMonthly = Math.round(loanPayment);
  } else {
    // Taxes & fees 탭: 입력값 모두 반영
    const principal = Math.max(0, calcHomePrice - down);
    const months = loanTerm * 12;
    const monthlyRate = interest / 100 / 12;
    const loanPayment = calcMonthlyPayment(principal, monthlyRate, months);
    const tax = propertyTax / 12;
    const ins = insurance / 12;
    calcMonthly = Math.round(loanPayment + tax + ins + hoa);
  }
  // 구간 계산(예시)
  const affordable = calcHomePrice;
  const stretch = affordable + 5000;
  const aggressive = stretch + 5000;

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Affordability Calculator"
        breadcrumbs={[
          { label: 'Tools', href: '/tools' },
          { label: 'Affordability Calculator' }
        ]}
      />
      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800">
        <div className="bg-white border rounded-2xl shadow p-6 md:p-10 flex flex-col md:flex-row gap-8 items-stretch">
          {/* 좌측 입력폼 */}
          <div className="flex-1 min-w-[300px] max-w-md bg-[#f5f8fc] rounded-xl p-6">
            <div className="flex gap-2 mb-6">
              <button onClick={() => setTab('personal')} className={`px-4 py-2 rounded-t-lg border-b-2 font-semibold transition ${tab==='personal' ? 'border-primary text-primary bg-white' : 'border-transparent text-gray-500 bg-transparent'}`}>Personal info</button>
              <button onClick={() => setTab('taxes')} className={`px-4 py-2 rounded-t-lg border-b-2 font-semibold transition ${tab==='taxes' ? 'border-primary text-primary bg-white' : 'border-transparent text-gray-500 bg-transparent'}`}>Taxes & fees</button>
            </div>
            {tab==='personal' ? (
              <form className="space-y-4">
                <div>
                  <label className="block font-semibold">Annual income <span className="text-gray-400 ml-1">ⓘ</span></label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={income} onChange={e=>setIncome(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Current monthly debt <span className="text-gray-400 ml-1">ⓘ</span></label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={debt} onChange={e=>setDebt(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Down payment <span className="text-gray-400 ml-1">ⓘ</span></label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={down} onChange={e=>setDown(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Enter a state <span className="text-gray-400 ml-1">ⓘ</span></label>
                  <input type="text" className="w-full border-b bg-transparent py-1 px-2" value={state} onChange={e=>setState(e.target.value)} />
                </div>
                <button type="button" className="mt-4 px-6 py-2 border rounded text-primary border-primary font-bold hover:bg-primary hover:text-white transition">Update</button>
              </form>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block font-semibold">Property tax (annual) <span className="text-gray-400 ml-1">ⓘ</span></label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={propertyTax} onChange={e=>setPropertyTax(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Homeowners insurance (annual) <span className="text-gray-400 ml-1">ⓘ</span></label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={insurance} onChange={e=>setInsurance(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Homeowners association fees (monthly) <span className="text-gray-400 ml-1">ⓘ</span></label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={hoa} onChange={e=>setHoa(Number(e.target.value))} min={0} />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block font-semibold">Loan term</label>
                    <select className="w-full border-b bg-transparent py-1 px-2" value={loanTerm} onChange={e=>setLoanTerm(Number(e.target.value))}>
                      <option value={30}>30 years</option>
                      <option value={20}>20 years</option>
                      <option value={15}>15 years</option>
                      <option value={10}>10 years</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block font-semibold">Interest rate <span className="text-gray-400 ml-1">ⓘ</span></label>
                    <input type="number" step="0.01" className="w-full border-b bg-transparent py-1 px-2" value={interest} onChange={e=>setInterest(Number(e.target.value))} min={0} />
                  </div>
                </div>
                <button type="button" className="mt-4 px-6 py-2 border rounded text-primary border-primary font-bold hover:bg-primary hover:text-white transition">Update</button>
              </form>
            )}
          </div>
          {/* 우측 결과 영역 */}
          <div className="flex-1 flex flex-col items-center justify-center min-w-[320px]">
            {/* 게이지 그래프 (SVG) */}
            <div className="w-full flex flex-col items-center mb-6">
              <svg width="260" height="140" viewBox="0 0 260 140">
                <path d="M40 120 A90 90 0 0 1 220 120" fill="none" stroke="#16a34a" strokeWidth="14" />
                <path d="M120 32 A90 90 0 0 1 220 120" fill="none" stroke="#f59e42" strokeWidth="14" />
                <path d="M180 32 A90 90 0 0 1 220 120" fill="none" stroke="#ef4444" strokeWidth="14" />
                {/* 추천값 포인터 */}
                <circle cx="140" cy="120" r="8" fill="#fff" stroke="#2563eb" strokeWidth="4" />
                <text x="140" y="60" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#0a2580">${affordable.toLocaleString()}</text>
                <text x="140" y="85" textAnchor="middle" fontSize="16" fill="#0a2580">Home price</text>
                <text x="140" y="110" textAnchor="middle" fontSize="18" fill="#2563eb">${calcMonthly.toLocaleString()}</text>
                <text x="140" y="128" textAnchor="middle" fontSize="14" fill="#2563eb">Estimated monthly payment</text>
              </svg>
            </div>
            {/* Breakdown */}
            <div className="w-full max-w-xs mb-6">
              <div className="flex items-center gap-2 mb-2 font-semibold">AFFORDABILITY BREAKDOWN <span className="text-gray-400">ⓘ</span></div>
              <div className="flex flex-col gap-1 text-sm">
                <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span>Affordable</span><span className="text-primary font-bold">Recommended ▶ $0 - ${affordable.toLocaleString()}</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-400 inline-block"></span>Stretch</span><span>${affordable.toLocaleString()} - ${stretch.toLocaleString()}</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>Aggressive</span><span>${stretch.toLocaleString()} - ${aggressive.toLocaleString()}</span></div>
              </div>
            </div>
            <button className="mt-2 px-8 py-3 rounded bg-primary text-white font-bold text-lg shadow hover:bg-blue-700 transition">Prequalify</button>
            <div className="text-xs text-gray-400 mt-2">Prequalification doesn’t affect your credit score.</div>
          </div>
        </div>
      </main>
    </div>
  );
} 