import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Bridge Loan? | Housentia',
  description:
    'A bridge loan provides short-term financing to "bridge" the gap between buying a new home and selling your current one. Learn how it works.',
  openGraph: { title: 'What Is a Bridge Loan? | Housentia', description: 'Understand bridge loans for homebuyers.' },
};

const ARTICLE_SLUG = 'what-is-a-bridge-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Bridge Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-bridge-loan';

const FAQ_ITEMS = [
  { question: 'What is a bridge loan?', answer: 'A bridge loan is short-term financing that helps you buy a new home before selling your current one. You use the proceeds to make a down payment or cover the purchase, then pay it off when you sell.' },
  { question: 'When is a bridge loan used?', answer: 'When you need to buy a new home before your current home sells. It bridges the gap between the two transactions.' },
  { question: 'What are the terms?', answer: 'Bridge loans are typically 6–12 months. Rates are often higher than traditional mortgages. You may need to qualify for both the bridge and the new mortgage.' },
  { question: 'What are the risks?', answer: 'If your home does not sell as expected, you may face two mortgage payments. Bridge loans can be expensive and are not available from all lenders.' },
];

export default function WhatIsABridgeLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Bridge Loan?', description: 'A bridge loan helps you buy before selling. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Bridge Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>bridge loan</strong> is short-term financing that helps you buy a new home before selling your current one. It bridges the gap between the two transactions. See <Link href="/mortgage/steps-to-buy-a-house-with-a-mortgage" className="text-primary hover:underline font-medium">Steps to Buy a House with a Mortgage</Link>, <Link href="/mortgage/what-is-mortgage-equity" className="text-primary hover:underline font-medium">What Is Mortgage Equity</Link>, and <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about bridge loan">
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
          <p className="text-gray-700 text-sm">Bridge loan availability varies by lender.</p>
        </section>
      </main>
    </div>
  );
}
