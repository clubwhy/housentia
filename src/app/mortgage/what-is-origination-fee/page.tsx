import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an Origination Fee? A Guide for U.S. Homebuyers | Housentia',
  description:
    'The origination fee is a charge for processing your mortgage. Learn what it covers, how it appears on the Loan Estimate, and whether it can be negotiated.',
  openGraph: {
    title: 'What Is an Origination Fee? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage origination fees and what they cover.',
  },
};

const ARTICLE_SLUG = 'what-is-origination-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is an Origination Fee?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-origination-fee';

const FAQ_ITEMS = [
  {
    question: 'What is an origination fee?',
    answer:
      'The origination fee is a charge from the lender for processing and underwriting the loan. It may be a percentage of the loan amount or a flat fee.',
  },
  {
    question: 'Where do I see the origination fee?',
    answer:
      'It appears in the "Origination Charges" section of the Loan Estimate and Closing Disclosure, under "Services You Cannot Shop For" or similar.',
  },
  {
    question: 'Is the origination fee included in APR?',
    answer:
      'Yes. Origination fees are typically included in the APR calculation, which is one reason APR can be higher than the interest rate.',
  },
  {
    question: 'Can I avoid paying an origination fee?',
    answer:
      'Some lenders offer "no origination fee" loans, but the cost may be reflected in a higher interest rate. Compare the APR and total costs.',
  },
];

export default function WhatIsOriginationFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is an Origination Fee? A Guide for U.S. Homebuyers',
    description:
      'The origination fee is a charge for processing your mortgage. Learn what it covers and how it appears on your Loan Estimate.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is an Origination Fee? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>origination fee</strong> is a charge from the lender for processing and underwriting your
            mortgage. It compensates the lender for the work involved in evaluating your application, ordering the
            appraisal, and preparing the loan.
          </p>
          <p className="text-gray-700 mb-4">
            The origination fee appears in the "Origination Charges" section of your Loan Estimate and Closing
            Disclosure. It may be expressed as a percentage of the loan amount (e.g., 1%) or as a flat dollar amount.
          </p>
          <p className="text-gray-700">
            For how origination fees differ from discount points, see our{' '}
            <Link href="/mortgage/discount-points-vs-origination-fee" className="text-primary hover:underline font-medium">
              Discount Points vs Origination Fee
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What It Covers</h2>
          <p className="text-gray-700 mb-4">
            Origination fees typically cover administrative costs such as application processing, underwriting, and
            document preparation. The exact breakdown may vary by lender. Some lenders itemize; others use a single
            origination charge.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions">
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
        <RelatedLinks
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Origination fees vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
