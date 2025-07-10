"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import PageHero from '@/components/PageHero';

export default function AffordabilityCalculatorPage() {
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
      <main className="max-w-2xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800">
        <h2 className="text-2xl font-bold text-center mb-8">Affordability Calculator</h2>
        <p className="text-gray-600 mb-8 text-center">여기에 주택 구매 가능성 계산기 기능을 추가하세요.</p>
      </main>
    </div>
  );
} 