import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Education Guides | Housentia',
  description: 'Central index of educational mortgage guides. Learn about mortgage basics, loan types, refinancing, and the home buying process. For educational purposes only.',
  openGraph: {
    title: 'Mortgage Education Guides | Housentia',
    description: 'Educational mortgage guides to help homebuyers understand mortgage concepts, loan types, and the home financing process.',
  },
};

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'Mortgage Education Guides' }];
const PAGE_URL = 'https://housentia.com/mortgage-guides';

/**
 * Central index for mortgage education articles.
 * This page will eventually include over 100 mortgage guide pages across
 * Mortgage Basics, Mortgage Process, Loan Types, Refinancing, Home Buying,
 * and additional categories as the content library expands.
 */

// Guide links by category. Add new guides here as they are published.
// Future expansion: 100+ mortgage guide pages (see docs/SEO-ARCHITECTURE.md).
const GUIDE_CATEGORIES = [
  {
    id: 'mortgage-basics',
    title: 'Mortgage Basics',
    description: 'Core concepts and terms that help you understand how mortgages work.',
    guides: [
      { label: 'What is APR', href: '/mortgage/what-is-apr' },
      { label: 'What is DTI', href: '/mortgage/what-is-dti' },
      { label: 'What is LTV', href: '/mortgage/what-is-ltv' },
      { label: 'What is PMI', href: '/mortgage/what-is-pmi' },
      { label: 'What is Amortization', href: '/mortgage/what-is-amortization' },
      { label: 'What is a Rate Lock', href: '/mortgage/what-is-rate-lock' },
      { label: 'What are Mortgage Points', href: '/mortgage/what-is-mortgage-points' },
    ],
  },
  {
    id: 'mortgage-process',
    title: 'Mortgage Process',
    description: 'Steps and considerations from application through closing.',
    guides: [
      { label: 'What are Closing Costs', href: '/mortgage/what-is-closing-costs' },
      { label: 'What is a Loan Estimate', href: '/mortgage/what-is-loan-estimate' },
      { label: 'What is a Closing Disclosure', href: '/mortgage/what-is-closing-disclosure' },
    ],
  },
  {
    id: 'loan-types',
    title: 'Loan Types',
    description: 'Educational overviews of different mortgage programs and loan products.',
    guides: [
      { label: 'FHA Loan Guide', href: '/mortgage/fha-loan' },
      { label: 'VA Loan Guide', href: '/mortgage/va-loan' },
      { label: 'Conventional Loan Guide', href: '/mortgage/conventional-loan' },
    ],
  },
  {
    id: 'refinancing',
    title: 'Refinancing',
    description: 'Information about refinancing your existing mortgage.',
    guides: [
      { label: 'Refinance Overview', href: '/mortgage/refinance' },
      { label: 'What is a Refinance', href: '/mortgage/what-is-refinance' },
      { label: 'What is a Cash-Out Refinance', href: '/mortgage/what-is-cash-out-refinance' },
      { label: 'Refinance & Cash-Out', href: '/mortgage/refinance-cashout' },
    ],
  },
  {
    id: 'home-buying',
    title: 'Home Buying',
    description: 'Guides for buyers, including first-time home buyer information.',
    guides: [
      { label: 'First Time Home Buyer Guide', href: '/mortgage/first-time-home-buyer' },
    ],
  },
] as const;

export default function MortgageGuidesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Education Guides',
    description: 'Central index of educational mortgage guides for U.S. homebuyers. Covers mortgage basics, loan types, refinancing, and the home financing process. Educational content only; not financial or mortgage advice.',
    url: PAGE_URL,
  });

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema]} />
      <PageHero title="Mortgage Education Guides" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        {/* Required educational disclaimer — CFPB/RESPA/TILA/TRID compliant; no financial advice or lender endorsement */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mb-8" role="region" aria-label="Disclaimer">
          <p className="text-gray-700 text-sm mb-2">
            This website provides general mortgage and financial information for educational purposes only. It does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a licensed mortgage broker, lender, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and borrower circumstances.
          </p>
        </div>

        {/* Introduction */}
        <p className="text-gray-700 mb-10">
          This page contains educational mortgage guides designed to help homebuyers understand mortgage concepts, loan types, and the home financing process. Each guide is intended for general education only. Use the links below to explore by topic.
        </p>

        {/* Guide categories — structure supports future expansion to 100+ guides */}
        <div className="space-y-10">
          {GUIDE_CATEGORIES.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              {category.guides.length > 0 ? (
                <ul className="space-y-2">
                  {category.guides.map((guide) => (
                    <li key={guide.href}>
                      <Link
                        href={guide.href}
                        className="text-primary hover:underline font-medium"
                      >
                        {guide.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm italic">More guides in this category will be added as they are published.</p>
              )}
            </section>
          ))}
        </div>

        {/* Internal linking: related hubs */}
        <nav className="mt-10 pt-8 border-t border-gray-200" aria-label="Related resources">
          <p className="text-gray-600 text-sm mb-2">Explore more educational resources:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/mortgage" className="text-primary hover:underline">Mortgage overview</Link>
            <Link href="/mortgage-glossary" className="text-primary hover:underline">Mortgage Glossary</Link>
            <Link href="/mortgage-tools" className="text-primary hover:underline">Mortgage Tools</Link>
            <Link href="/about-housentia" className="text-primary hover:underline">About Housentia</Link>
            <Link href="/editorial-methodology" className="text-primary hover:underline">Editorial Methodology</Link>
          </div>
        </nav>
      </main>
    </div>
  );
}
