import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an Interest Only Mortgage? | Housentia',
  description:
    'An interest-only mortgage lets you pay only interest for a period. Learn how it works, when payments increase, and the risks.',
  openGraph: { title: 'What Is an Interest Only Mortgage? | Housentia', description: 'Understand interest-only mortgages.' },
};

const ARTICLE_SLUG = 'what-is-an-interest-only-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is an Interest Only Mortgage?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-an-interest-only-mortgage';

const FAQ_ITEMS = [
  { question: 'What is an interest-only mortgage?', answer: 'An interest-only mortgage allows you to pay only interest (no principal) for an initial period (e.g., 5 or 10 years). After that, payments include principal and interest, so they increase.' },
  { question: 'Why would someone choose interest-only?', answer: 'Lower initial payments can help with cash flow. Some borrowers expect to sell or refinance before the interest-only period ends, or expect income to rise.' },
  { question: 'What happens when the interest-only period ends?', answer: 'Payments increase because you must start paying principal. The remaining balance is amortized over the remaining term.' },
  { question: 'What are the risks?', answer: 'You do not build equity during the interest-only period (except through appreciation). Payment shock when the period ends. If you cannot afford the higher payment, you may need to refinance or sell.' },
];

export default function WhatIsAnInterestOnlyMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is an Interest Only Mortgage?', description: 'Interest-only lets you pay only interest for a period. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is an Interest Only Mortgage?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">An <strong>interest-only mortgage</strong> lets you pay only interest (no principal) for an initial period. Payments are lower at first but increase when principal payments begin. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, <Link href="/mortgage/what-is-a-balloon-mortgage" className="text-primary hover:underline font-medium">What Is a Balloon Mortgage</Link>, and <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about interest only mortgage">
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
          <p className="text-gray-700 text-sm">Interest-only loans are less common. Availability varies by lender.</p>
        </section>
      </main>
    </div>
  );
}
