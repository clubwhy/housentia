import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an Appraisal Fee? | Housentia',
  description:
    'The appraisal fee pays for a professional valuation of the property. Learn what it covers, typical costs, and where it appears on your Loan Estimate.',
  openGraph: {
    title: 'What Is an Appraisal Fee? | Housentia',
    description: 'Understand mortgage appraisal fees and what they cover.',
  },
};

const ARTICLE_SLUG = 'what-is-an-appraisal-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is an Appraisal Fee?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-an-appraisal-fee';

const FAQ_ITEMS = [
  {
    question: 'What is an appraisal fee?',
    answer:
      'The appraisal fee pays for a licensed appraiser to assess the property\'s market value. Lenders require an appraisal to ensure the loan amount does not exceed the property\'s worth.',
  },
  {
    question: 'How much does an appraisal cost?',
    answer:
      'Typical appraisal fees range from about $300 to $600 for a single-family home, depending on property type, location, and complexity. The fee is usually paid at or before closing.',
  },
  {
    question: 'Can I shop for an appraiser?',
    answer:
      'Usually no. Lenders typically order the appraisal through an appraisal management company (AMC) to maintain independence. The fee is disclosed on your Loan Estimate under "Services You Cannot Shop For."',
  },
  {
    question: 'Is the appraisal fee refundable?',
    answer:
      'Generally no. If the loan does not close, the appraisal fee is typically non-refundable because the work was already performed.',
  },
];

export default function WhatIsAnAppraisalFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is an Appraisal Fee?',
    description:
      'The appraisal fee pays for a professional valuation of the property. Learn what it covers and typical costs.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is an Appraisal Fee?" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            The <strong>appraisal fee</strong> pays for a licensed appraiser to assess the property&apos;s market value. Lenders require an appraisal to ensure the loan amount does not exceed what the property is worth. The fee typically appears on your Loan Estimate and Closing Disclosure under &quot;Services You Cannot Shop For.&quot;
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Appraisal Covers</h2>
          <p className="text-gray-700 mb-4">
            The appraiser inspects the property, compares it to similar sales in the area, and produces a report with an estimated value. The lender uses this to verify that the loan-to-value (LTV) ratio is acceptable. See{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">
              What Is LTV
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Costs</h2>
          <p className="text-gray-700 mb-4">
            Appraisal fees vary by property type and location. For a single-family home, expect roughly $300–$600. Condos, multi-unit properties, and jumbo loans may cost more. The fee is usually paid at closing or when the appraisal is ordered.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about appraisal fee">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
                <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
                <dd className="text-gray-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Appraisal fees vary by lender and property.
          </p>
        </section>
      </main>
    </div>
  );
}
