"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import PageHero from '@/components/PageHero';

export default function RemodelingCostEstimatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Remodeling Cost Estimator"
        breadcrumbs={[
          { label: 'Tools', href: '/tools' },
          { label: 'Remodeling Cost Estimator' }
        ]}
      />
      {/* Main Content Area */}
      <main className="max-w-2xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800">
        <h2 className="text-2xl font-bold text-center mb-8">Remodeling Cost Estimator</h2>
        <p className="text-gray-600 mb-8 text-center">여기에 리모델링 비용 계산기 기능을 추가하세요.</p>
      </main>
    </div>
  );
} 