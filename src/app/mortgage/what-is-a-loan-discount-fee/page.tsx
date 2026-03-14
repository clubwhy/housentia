import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Loan Discount Fee? | Housentia',
  description:
    'The loan discount fee (discount points) pays to lower your interest rate. Learn how it works and when it may make sense.',
  openGraph: { title: 'What Is a Loan Discount Fee? | Housentia', description: 'Understand loan discount fees (discount points).' },
};

const ARTICLE_SLUG = 'what-is-a-loan-discount-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Loan Discount Fee?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-loan-discount-fee';

const FAQ_ITEMS = [
  { question: 'What is a loan discount fee?', answer: 'The loan discount fee (often called discount points) is an upfront payment that lowers your interest rate. One point typically equals 1% of the loan amount and may reduce the rate by about 0.25%.' },
  { question: 'How does it differ from origination fee?', answer: 'Discount points lower your rate; origination fees cover processing and underwriting. Both appear in origination charges on the Loan Estimate. See Discount Points vs Origination Fee.' },
  { question: 'When do discount points make sense?', answer: 'Discount points can make sense if you plan to keep the loan long enough to recoup the upfront cost through lower monthly payments. Use a break-even calculator to compare.' },
  { question: 'Are discount points tax deductible?', answer: 'Discount points paid on a purchase mortgage are generally deductible over the life of the loan. Consult a tax professional for your situation.' },
];

export default function WhatIsALoanDiscountFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Loan Discount Fee?', description: 'The loan discount fee (discount points) lowers your rate. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Loan Discount Fee?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>loan discount fee</strong> (often called <strong>discount points</strong>) is an upfront payment that lowers your interest rate. One point typically equals 1% of the loan amount. Paying points can reduce your rate, which lowers your monthly payment over the life of the loan.</p>
          <p className="text-gray-700">See <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>, <Link href="/mortgage/discount-points-vs-origination-fee" className="text-primary hover:underline font-medium">Discount Points vs Origination Fee</Link>, and <Link href="/mortgage/mortgage-points-vs-rate-trade-off" className="text-primary hover:underline font-medium">Mortgage Points vs Rate Trade Off</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about loan discount fee">
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
          <p className="text-gray-700 text-sm">Discount point pricing varies by lender.</p>
        </section>
      </main>
    </div>
  );
}
