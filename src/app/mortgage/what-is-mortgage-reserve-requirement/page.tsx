import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Mortgage Reserve Requirement? | Housentia',
  description:
    'Reserves are liquid assets left after closing. Learn how lenders count reserves and when they are required.',
  openGraph: { title: 'What Is Mortgage Reserve Requirement? | Housentia', description: 'Understand mortgage reserve requirements.' },
};

const ARTICLE_SLUG = 'what-is-mortgage-reserve-requirement';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is Mortgage Reserve Requirement' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-mortgage-reserve-requirement';

const FAQ_ITEMS = [
  { question: 'What are mortgage reserves?', answer: 'Liquid assets (cash, savings, investments) you have left after closing. Lenders count them in months of PITIA (principal, interest, taxes, insurance, association fees).' },
  { question: 'When are reserves required?', answer: 'Some programs require 0–2 months. Jumbo, investment, or high-DTI loans often require more—e.g., 6–24 months.' },
  { question: 'What assets count as reserves?', answer: 'Cash, checking, savings, money market, stocks, bonds, retirement accounts (often partial), and other liquid assets. Gifts and borrowed funds typically do not.' },
  { question: 'Can reserves help with approval?', answer: 'Yes. Strong reserves can be a compensating factor for higher DTI or other risk factors.' },
];

export default function WhatIsMortgageReserveRequirementPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is Mortgage Reserve Requirement?', description: 'Learn about mortgage reserve requirements.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Mortgage Reserve Requirement?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>mortgage reserve requirement</strong> is the amount of liquid assets you must have left after closing. Reserves are expressed in months of PITIA. Lenders use them to assess your ability to pay if income is interrupted. See <Link href="/mortgage/what-assets-count-for-mortgage-approval" className="text-primary hover:underline font-medium">What Assets Count for Mortgage Approval</Link>, <Link href="/mortgage/mortgage-asset-verification" className="text-primary hover:underline font-medium">Mortgage Asset Verification</Link>, and <Link href="/mortgage/mortgage-compensating-factors-explained" className="text-primary hover:underline font-medium">Mortgage Compensating Factors Explained</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about mortgage reserves">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
