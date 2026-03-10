import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';
import { StructuredData, buildBreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Housentia Tools Work | Calculators & Estimates',
  description: 'How Housentia mortgage calculators, refinance analyzer, and comparison tools work. Methodology and limitations of financial estimates.',
  openGraph: {
    title: 'How Housentia Tools Work | Calculators & Estimates',
    description: 'How Housentia mortgage calculators and analysis tools work and their limitations.',
  },
};

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'How Tools Work' }];

export default function HowHousentiaToolsWorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', 'https://housentia.com/how-housentia-tools-work')} />
      <PageHero
        title="How Housentia Tools Work"
        breadcrumbs={BREADCRUMBS}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-8" />

        <p className="text-gray-700 mb-10">
          Housentia offers calculators and analysis tools for educational and illustrative purposes only. 
          The following describes how they work and their limitations. Results are estimates only and do 
          not constitute offers, advice, or guarantees from any lender.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Calculator Logic</h2>
          <p className="text-gray-700 mb-4">
            Our mortgage calculator uses standard formulas to estimate monthly principal and interest (P&amp;I) 
            based on loan amount, term (e.g., 30 years), and an assumed interest rate that you enter. It may 
            optionally include estimates for property taxes and insurance (PITI) when you provide those inputs.
          </p>
          <p className="text-gray-700 mb-4">
            The math is based on amortization of a fixed-rate loan. It does not account for adjustable rates, 
            prepayment, fees, or lender-specific rules. The calculator is for illustration only; actual 
            payments depend on your rate, terms, and lender.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Refinance Analysis Methodology</h2>
          <p className="text-gray-700 mb-4">
            The refinance analyzer compares your current loan (balance, rate, remaining term) with a hypothetical 
            new loan (new rate, term, and estimated closing costs). It typically calculates:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Estimated monthly payment difference</li>
            <li>Break-even period (how long it takes for savings to offset estimated closing costs)</li>
            <li>Estimated total interest over time under each scenario</li>
          </ul>
          <p className="text-gray-700">
            Closing costs and rates are user-entered or illustrative. Actual closing costs and available 
            rates vary by lender, loan type, and your qualifications. The tool does not recommend whether 
            to refinance; it only illustrates one way to compare scenarios for education.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Loan Comparison Estimates</h2>
          <p className="text-gray-700 mb-4">
            Any loan comparison tools on the site (e.g., comparing different loan types or scenarios) use 
            the inputs you provide and standard formulas to show estimated payments or costs. They do not 
            pull live offers from lenders and do not reflect your actual eligibility or real rates. 
            Comparisons are for educational comparison only.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations of Financial Estimates</h2>
          <p className="text-gray-700 mb-4">
            All Housentia tools share these limitations:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Results are estimates only, not quotes or commitments from any lender.</li>
            <li>Rates, fees, and eligibility depend on your credit, income, property, and lender — which our tools do not evaluate.</li>
            <li>Tax and insurance estimates (if shown) are illustrative; actual amounts depend on location and your choices.</li>
            <li>We do not guarantee accuracy of inputs (e.g., rate data from third parties) or that our formulas match every lender’s methods.</li>
          </ul>
          <p className="text-gray-700">
            For personalized numbers and advice, consult a licensed mortgage professional.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            Housentia is not a lender or mortgage broker. Our tools are for general educational and 
            illustrative purposes only. They do not constitute financial or mortgage advice. Actual 
            rates, terms, fees, and eligibility are determined by lenders and your individual circumstances.
          </p>
          <p className="text-gray-700">
            For full terms and disclaimers, see our <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link> and <Link href="/about-housentia" className="text-primary hover:underline">About Housentia</Link>.
          </p>
        </section>
      </main>
    </div>
  );
}
