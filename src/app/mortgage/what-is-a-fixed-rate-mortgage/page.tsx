import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Fixed Rate Mortgage? | Housentia',
  description:
    'A fixed rate mortgage keeps the same interest rate for the entire loan term. Learn how it works and when it makes sense.',
  openGraph: { title: 'What Is a Fixed Rate Mortgage? | Housentia', description: 'Understand fixed rate mortgages.' },
};

const ARTICLE_SLUG = 'what-is-a-fixed-rate-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Fixed Rate Mortgage?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-fixed-rate-mortgage';

const FAQ_ITEMS = [
  { question: 'What is a fixed rate mortgage?', answer: 'A fixed rate mortgage has an interest rate that stays the same for the entire loan term. Your principal and interest payment remains constant (excluding taxes, insurance, and escrow changes).' },
  { question: 'What are common fixed rate terms?', answer: '30-year and 15-year fixed are most common. 10-year, 20-year, and other terms are also available.' },
  { question: 'When does a fixed rate make sense?', answer: 'Fixed rates offer predictability and are often preferred when you plan to stay in the home long-term or when rates are low. See Fixed vs Adjustable Rate Mortgage.' },
  { question: 'Can my payment still change?', answer: 'Principal and interest stay fixed. If you have an escrow account, taxes and insurance can change, so your total monthly payment may vary.' },
];

export default function WhatIsAFixedRateMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Fixed Rate Mortgage?', description: 'A fixed rate keeps the same rate for the entire term. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Fixed Rate Mortgage?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>fixed rate mortgage</strong> has an interest rate that stays the same for the entire loan term. Your principal and interest payment remains constant, which makes budgeting predictable. See <Link href="/mortgage/what-is-an-adjustable-rate-mortgage" className="text-primary hover:underline font-medium">What Is an Adjustable Rate Mortgage</Link>, <Link href="/mortgage/fixed-vs-adjustable-rate-mortgage" className="text-primary hover:underline font-medium">Fixed vs Adjustable Rate Mortgage</Link>, and <Link href="/mortgage/15-vs-30-year-mortgage" className="text-primary hover:underline font-medium">15 vs 30 Year Mortgage</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about fixed rate mortgage">
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
          <p className="text-gray-700 text-sm">Rates and terms vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
