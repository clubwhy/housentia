import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Credit Score Is Needed to Buy a House? | Housentia',
  description:
    'Credit score requirements vary by loan type. Learn what score you need to buy a house with conventional, FHA, VA, and USDA loans.',
  openGraph: { title: 'What Credit Score Is Needed to Buy a House? | Housentia', description: 'Understand credit score requirements for buying a home.' },
};

const ARTICLE_SLUG = 'what-credit-score-needed-to-buy-house';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Credit Score Is Needed to Buy a House' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-credit-score-needed-to-buy-house';

const FAQ_ITEMS = [
  { question: 'What credit score do I need to buy a house?', answer: 'FHA: 580+ (3.5% down) or 500+ (10% down). Conventional: 620+. VA/USDA: varies by lender. Some programs accept lower scores.' },
  { question: 'Can I buy a house with a 500 credit score?', answer: 'FHA may allow 500–579 with 10% down. Many lenders require higher scores. Non-QM or portfolio loans may have different options.' },
  { question: 'What score do first-time buyers need?', answer: 'Same as other buyers—requirements depend on loan type. FHA and VA may be more accessible for first-time buyers.' },
  { question: 'What if my score is low?', answer: 'Improve your score before applying, pay down debt, or explore FHA, VA, or non-QM options. Shop multiple lenders.' },
];

export default function WhatCreditScoreNeededToBuyHousePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Credit Score Is Needed to Buy a House?', description: 'Learn credit score requirements for buying a home.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Credit Score Is Needed to Buy a House?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>credit score needed to buy a house</strong> depends on the loan type. FHA may accept 580+ (3.5% down) or 500+ (10% down). Conventional typically requires 620+. VA and USDA have lender-set minimums. See <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>, <Link href="/mortgage/first-time-home-buyer" className="text-primary hover:underline font-medium">First Time Home Buyer</Link>, and <Link href="/mortgage/steps-to-buy-a-house-with-a-mortgage" className="text-primary hover:underline font-medium">Steps to Buy a House with a Mortgage</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about credit score for buying">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Loan Qualification Comparison', href: '/tools/loan-qualification-comparison' }} className="mb-10" />
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
