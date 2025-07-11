"use client";
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { HiOutlineCurrencyDollar, HiOutlineDocumentText, HiOutlineHomeModern, HiOutlineCheckCircle, HiOutlineArrowRightCircle } from 'react-icons/hi2';

export default function RefinanceCashOutPage() {
  return (
    <div className="min-h-screen bg-white" style={{ background: '#fff' }}>
      <PageHero 
        title="Refinance & Cash-Out"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: 'Refinance & Cash-Out' }
        ]}
      />
      {/* Hero Section */}

      {/* Why Refinance */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl p-6 my-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-3">Why Refinance?</h2>
        <p className="text-gray-700 text-lg">Refinancing means replacing your current mortgage with a new one—usually to get a lower interest rate, reduce your monthly payments, or switch to a better loan program. Some people also refinance to remove mortgage insurance or access cash through home equity.</p>
      </section>

      {/* When Is a Good Time to Refinance */}
      <section className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-6 my-8">
        <h2 className="text-2xl font-bold mb-3">When Is a Good Time to Refinance?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Interest rates have dropped</li>
          <li>Your credit score improved</li>
          <li>You want to remove FHA or VA mortgage insurance</li>
          <li>Your home value increased (LTV under 80%)</li>
          <li>You want a shorter loan term</li>
          <li>You need cash for renovations or debt</li>
        </ul>
      </section>

      {/* What Is Cash-Out Refinance */}
      <section className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-6 my-8">
        <h2 className="text-2xl font-bold mb-3">What Is Cash-Out Refinance?</h2>
        <p className="text-gray-700 text-lg mb-2">Cash-out refinancing lets you replace your current mortgage with a larger one—and you receive the difference in cash.</p>
        <div className="bg-white rounded-xl p-4 shadow text-gray-800 text-base mt-2">
          <span className="font-semibold">Example:</span> If you owe $300,000 and your home is worth $500,000, you could refinance for $400,000 and get $100,000 in cash (minus fees).
        </div>
      </section>

      {/* FHA/VA Loan Section */}
      <section className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-6 my-8">
        <h2 className="text-2xl font-bold mb-3">Have an FHA or VA Loan?</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">FHA Loan Refinance</h3>
          <p className="text-gray-700 text-base mb-1">If your home value has risen and your LTV is below 80%, you can refinance to a conventional loan and remove monthly mortgage insurance (MI).</p>
          <div className="bg-white rounded-xl p-3 shadow text-gray-800 text-base mt-1">
            <span className="font-semibold">Example:</span> Bought at $300K, now worth $375K, balance $300K = 80% LTV. MI can be removed.
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">VA Loan Refinance</h3>
          <p className="text-gray-700 text-base">Use the VA IRRRL streamline refinance to quickly reduce your rate—often with no appraisal or income check.</p>
        </div>
      </section>

      {/* Do You Qualify? */}
      <section className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-6 my-8">
        <h2 className="text-2xl font-bold mb-3">Do You Qualify?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-2">
          <li>Pay stubs</li>
          <li>Bank statements</li>
          <li>Tax returns & W-2s</li>
          <li>Mortgage statement</li>
          <li>Homeowners insurance</li>
          <li>Credit report</li>
        </ul>
        <div className="text-sm text-gray-500 mt-2">Some documents may not be needed for VA/FHA streamline refi.</div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-blue-50 rounded-2xl p-8 my-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Find out if refinancing can help you save
          <br className="hidden md:inline" />
          or unlock your home’s value.
        </h2>
        <Link href="/tools/refinance-analyzer" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow hover:bg-accent-hover transition">
          Try Our Refinance Analyzer <HiOutlineArrowRightCircle className="w-6 h-6" />
        </Link>
      </section>

      {/* White space before footer */}
      <div className="bg-white py-4"></div>
    </div>
  );
} 