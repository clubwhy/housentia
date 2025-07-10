"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import PageHero from '@/components/PageHero';
import React from 'react'; // Added missing import
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import usStates from '@/data/usStates.json';

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
                  <label className="block font-semibold">Annual income {/* <span className="text-gray-400 ml-1">ⓘ</span> */}</label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={income} onChange={e=>setIncome(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Current monthly debt {/* <span className="text-gray-400 ml-1">ⓘ</span> */}</label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={debt} onChange={e=>setDebt(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Down payment {/* <span className="text-gray-400 ml-1">ⓘ</span> */}</label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={down} onChange={e=>setDown(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Select a state</label>
                  <select
                    className="w-full border-b bg-transparent py-1 px-2"
                    value={state}
                    onChange={e => setState(e.target.value)}
                  >
                    <option value="">Select...</option>
                    {usStates.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <button type="button" className="mt-4 px-6 py-2 border rounded text-primary border-primary font-bold hover:bg-primary hover:text-white transition">Update</button>
              </form>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block font-semibold">Property tax (annual) {/* <span className="text-gray-400 ml-1">ⓘ</span> */}</label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={propertyTax} onChange={e=>setPropertyTax(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Homeowners insurance (annual) {/* <span className="text-gray-400 ml-1">ⓘ</span> */}</label>
                  <input type="number" className="w-full border-b bg-transparent py-1 px-2" value={insurance} onChange={e=>setInsurance(Number(e.target.value))} min={0} />
                </div>
                <div>
                  <label className="block font-semibold">Homeowners association fees (monthly) {/* <span className="text-gray-400 ml-1">ⓘ</span> */}</label>
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
                    <label className="block font-semibold">Interest rate {/* <span className="text-gray-400 ml-1">ⓘ</span> */}</label>
                    <input type="number" step="0.01" className="w-full border-b bg-transparent py-1 px-2" value={interest} onChange={e=>setInterest(Number(e.target.value))} min={0} />
                  </div>
                </div>
                <button type="button" className="mt-4 px-6 py-2 border rounded text-primary border-primary font-bold hover:bg-primary hover:text-white transition">Update</button>
              </form>
            )}
          </div>
          {/* 우측 결과 영역 */}
          <div className="flex-1 flex flex-col items-center justify-center min-w-[320px]">
            {/* 게이지 그래프 (CircularProgressbar) */}
            <div className="w-48 h-48 flex flex-col items-center mb-4">
              {(() => {
                const gaugeValue = Math.min(100, Math.round((affordable / 1000000) * 100));
                let color = '#16a34a';
                if (gaugeValue >= 85) color = '#ef4444';
                else if (gaugeValue >= 60) color = '#f59e42';
                return (
                  <CircularProgressbarWithChildren
                    value={gaugeValue}
                    maxValue={100}
                    strokeWidth={12}
                    styles={buildStyles({
                      pathColor: color,
                      trailColor: '#e5e7eb',
                      strokeLinecap: 'round',
                      textColor: '#0a2580',
                      backgroundColor: '#fff',
                    })}
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-primary">${affordable.toLocaleString()}</div>
                      <div className="text-base text-blue-600 font-semibold mt-1">Home price</div>
                    </div>
                  </CircularProgressbarWithChildren>
                );
              })()}
            </div>
            {/* 월 납입금 카드 */}
            <div className="w-full max-w-xs mb-4">
              <div className="rounded-xl bg-blue-50 border border-blue-200 shadow flex flex-col items-center py-4 mb-2">
                <div className="text-gray-500 text-sm mb-1">Estimated monthly payment</div>
                <div className="text-2xl font-bold text-blue-700">${calcMonthly.toLocaleString()}</div>
              </div>
            </div>
            {/* Breakdown 카드 스타일 - 유니크하게 개선 (간격/패딩 조정) */}
            <div className="w-full max-w-xs mb-6">
              <div className="flex items-center gap-2 mb-2 font-semibold">AFFORDABILITY BREAKDOWN {/* <span className="text-gray-400">ⓘ</span> */}</div>
              <div className="flex flex-col gap-2">
                {/* Affordable (2줄, 배지는 금액 위로) */}
                <div className="relative flex items-center rounded-xl bg-blue-50 border border-blue-200 shadow-sm px-4 py-3 min-h-[56px]">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.84L18 7.27l-3.91 3.81L15.18 18 10 14.77 4.82 18l1.09-6.92L2 7.27l5.61-.43L10 2z"/></svg>
                    </span>
                    <span className="font-extrabold text-blue-800 uppercase tracking-wide text-base">Affordable</span>
                  </div>
                  {/* Recommended 배지 오버레이 (금액 위로) */}
                  <span className="absolute top-1 right-4 px-2 py-0.5 rounded-full bg-blue-100 text-xs text-blue-700 font-semibold shadow-sm z-10">
                    Recommended
                  </span>
                  {/* 금액은 아래쪽에 block으로 */}
                  <span className="block w-full text-right font-extrabold text-blue-700 text-lg mt-2 whitespace-nowrap">{`$0 - $${affordable.toLocaleString()}`}</span>
                </div>
                {/* Stretch */}
                <div className="flex items-center justify-between rounded-xl bg-purple-50 border border-purple-100 px-3 py-2 min-h-[44px]">
                  <div className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-purple-400"></span>
                    <span className="font-semibold text-purple-800">Stretch</span>
                  </div>
                  <span className="font-bold text-purple-700 text-base">{`$${affordable.toLocaleString()} - $${stretch.toLocaleString()}`}</span>
                </div>
                {/* Aggressive */}
                <div className="flex items-center justify-between rounded-xl bg-rose-50 border border-rose-100 px-3 py-2 min-h-[44px]">
                  <div className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-rose-400"></span>
                    <span className="font-semibold text-rose-800">Aggressive</span>
                  </div>
                  <span className="font-bold text-rose-700 text-base">{`$${stretch.toLocaleString()} - $${aggressive.toLocaleString()}`}</span>
                </div>
              </div>
            </div>
            {/* <button className="mt-2 px-8 py-3 rounded bg-primary text-white font-bold text-lg shadow hover:bg-blue-700 transition">Prequalify</button> */}
            {/* <div className="text-xs text-gray-400 mt-2">Prequalification doesn’t affect your credit score.</div> */}
          </div>
        </div>
      </main>
    </div>
  );
} 