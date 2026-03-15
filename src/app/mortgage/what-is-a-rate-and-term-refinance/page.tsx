import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Rate and Term Refinance? | Housentia',
  description:
    'A rate and term refinance changes your interest rate or loan term without taking cash out. Learn how it differs from cash-out refinancing.',
  openGraph: { title: 'What Is a Rate and Term Refinance? | Housentia', description: 'Understand rate and term refinancing.' },
};

const ARTICLE_SLUG = 'what-is-a-rate-and-term-refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Rate and Term Refinance?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-rate-and-term-refinance';

const FAQ_ITEMS = [
  { question: 'What is a rate and term refinance?', answer: 'A rate and term refinance changes your interest rate, loan term, or both without taking cash out. The new loan amount equals (or is close to) the payoff of your current loan.' },
  { question: 'How does it differ from cash-out?', answer: 'Rate and term: no cash to you. Cash-out: you borrow more than you owe and receive the difference. Cash-out often has stricter rules and may have different rates.' },
  { question: 'When is rate and term used?', answer: 'To lower your rate, shorten your term (e.g., 30 to 15 years), or switch from ARM to fixed. Common when rates have dropped.' },
  { question: 'Are there benefits over cash-out?', answer: 'Rate and term refinances may have simpler underwriting, lower rates, or better terms in some programs (e.g., VA IRRRL, FHA streamline).' },
];

export default function WhatIsARateAndTermRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Rate and Term Refinance?', description: 'A rate and term refinance changes rate or term without cash out. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Rate and Term Refinance?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>rate and term refinance</strong> changes your interest rate, loan term, or both without taking cash out. The new loan pays off your current balance. See <Link href="/mortgage/cash-out-vs-rate-and-term-refinance" className="text-primary hover:underline font-medium">Cash Out vs Rate and Term Refinance</Link>, <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is a Cash Out Refinance</Link>, and <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is Refinance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about rate and term refinance">
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
          <p className="text-gray-700 text-sm">Terms vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
