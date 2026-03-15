import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Second Mortgage? | Housentia',
  description:
    'A second mortgage is a loan secured by your home that ranks behind the first mortgage. Learn about HELOCs, home equity loans, and piggyback loans.',
  openGraph: { title: 'What Is a Second Mortgage? | Housentia', description: 'Understand second mortgages.' },
};

const ARTICLE_SLUG = 'what-is-a-second-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Second Mortgage?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-second-mortgage';

const FAQ_ITEMS = [
  { question: 'What is a second mortgage?', answer: 'A second mortgage is a loan secured by your home that ranks behind the first mortgage. If you default, the first mortgage is paid first; the second mortgage is paid from remaining proceeds.' },
  { question: 'What are common types of second mortgages?', answer: 'Common types include: home equity loans (lump sum), HELOCs (line of credit), and piggyback loans (used at purchase to avoid PMI).' },
  { question: 'Are second mortgage rates higher?', answer: 'Usually yes. Second mortgages have higher risk because they are subordinate to the first. Rates are typically higher than first mortgage rates.' },
  { question: 'When is a second mortgage used?', answer: 'When you need to borrow against home equity (HELOC, home equity loan) or when you use a piggyback at purchase to avoid PMI.' },
];

export default function WhatIsASecondMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Second Mortgage?', description: 'A second mortgage ranks behind the first. Learn about HELOCs, home equity loans, and piggybacks.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Second Mortgage?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>second mortgage</strong> is a loan secured by your home that ranks behind the first mortgage. Common types include <strong>HELOCs</strong>, <strong>home equity loans</strong>, and <strong>piggyback loans</strong>. See <Link href="/mortgage/heloc" className="text-primary hover:underline font-medium">HELOC Overview</Link>, <Link href="/mortgage/piggyback-loan" className="text-primary hover:underline font-medium">What Is a Piggyback Loan</Link>, and <Link href="/mortgage/what-is-mortgage-equity" className="text-primary hover:underline font-medium">What Is Mortgage Equity</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about second mortgage">
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
          <p className="text-gray-700 text-sm">Second mortgage terms vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
