"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';

export default function AffordabilityCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f9fc] border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sans mb-2 md:mb-0">Affordability Calculator</h1>
          <nav className="flex items-center text-xs text-gray-500 gap-1 md:self-end md:mb-1">
            <Link href="/" className="hover:text-primary flex items-center gap-1">
              <HiHome className="inline-block w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-gray-400" />
            <Link href="/tools" className="hover:text-primary">Tools</Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-gray-400" />
            <span className="text-gray-700 font-semibold">Affordability Calculator</span>
          </nav>
        </div>
      </section>
      {/* Main Content Area */}
      <main className="max-w-2xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800">
        <h2 className="text-2xl font-bold text-center mb-8">Affordability Calculator</h2>
        <p className="text-gray-600 mb-8 text-center">여기에 주택 구매 가능성 계산기 기능을 추가하세요.</p>
      </main>
    </div>
  );
} 