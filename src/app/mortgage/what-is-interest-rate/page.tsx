import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an Interest Rate? A Guide for U.S. Homebuyers | Housentia',
  description:
    'The mortgage interest rate is the cost of borrowing. Learn how it differs from APR, how rates are set, and how it affects your monthly payment.',
  openGraph: {
    title: 'What Is an Interest Rate? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage interest rates and how they affect your loan cost.',
  },
};

const ARTICLE_SLUG = 'what-is-interest-rate';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is an Interest Rate?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-interest-rate';

const FAQ_ITEMS = [
  {
    question: 'Is the interest rate the same as APR?',
    answer:
      'No. The interest rate reflects the cost of borrowing the principal. APR includes the interest rate plus certain fees and finance charges, so APR is often higher.',
  },
  {
    question: 'What affects my mortgage interest rate?',
    answer:
      'Rates are influenced by market conditions, your credit score, loan amount, down payment, loan term, and the type of loan (fixed vs. adjustable).',
  },
  {
    question: 'Where do I see the interest rate on my disclosures?',
    answer:
      'The interest rate appears on the Loan Estimate and Closing Disclosure, typically in the loan terms section.',
  },
  {
    question: 'What is a good interest rate?',
    answer:
      'Rates vary over time and by borrower. Comparing offers from multiple lenders and understanding APR can help you evaluate what is competitive for your situation.',
  },
];

export default function WhatIsInterestRatePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is an Interest Rate? A Guide for U.S. Homebuyers',
    description:
      'The mortgage interest rate is the percentage charged for borrowing. This guide explains how it works, how it differs from APR, and how it affects your payment.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is an Interest Rate? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>interest rate</strong> is one of the most important numbers on a mortgage. It represents the
            percentage the lender charges you for borrowing money. Unlike APR (Annual Percentage Rate), the interest
            rate focuses specifically on the cost of the loan principal — it does not include fees or other finance
            charges.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding the interest rate helps you compare loan offers and estimate your monthly principal and
            interest payment. This guide explains what the interest rate is, how it differs from APR, and how it
            appears on your Loan Estimate and Closing Disclosure.
          </p>
          <p className="text-gray-700">
            For a broader view of loan costs that includes fees, see our{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">
              What Is APR?
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            The interest rate is the annual percentage charged on the loan balance. For a fixed-rate mortgage, it
            typically stays the same for the life of the loan. For an adjustable-rate mortgage (ARM), it may change after
            an initial fixed period.
          </p>
          <p className="text-gray-700 mb-4">
            The interest rate directly affects your monthly principal and interest (P&amp;I) payment. A higher rate
            means a higher payment; a lower rate means a lower payment. The rate does not include property taxes,
            homeowner&apos;s insurance, or mortgage insurance.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interest Rate vs. APR</h2>
          <p className="text-gray-700 mb-4">
            Many borrowers confuse the interest rate with APR. The <strong>interest rate</strong> reflects only the
            cost of borrowing the principal. <strong>APR</strong> includes the interest rate plus certain fees (such as
            origination fees, discount points) required by federal disclosure rules.
          </p>
          <p className="text-gray-700">
            APR is designed to help you compare the total cost of different loan offers. When comparing offers, consider
            both the interest rate and the APR.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Rates Are Set</h2>
          <p className="text-gray-700 mb-4">
            Mortgage interest rates are influenced by many factors, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Market conditions and economic indicators</li>
            <li>Your credit score and credit history</li>
            <li>Loan amount and down payment (LTV)</li>
            <li>Loan term (e.g., 15-year vs. 30-year)</li>
            <li>Loan type (fixed vs. adjustable)</li>
          </ul>
          <p className="text-gray-700">
            Lenders use these factors to price loans. Shopping with multiple lenders can help you find competitive
            rates.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about interest rates">
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
          glossary={[{ label: 'Interest Rate', href: '/mortgage-glossary/interest-rate' }]}
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
            Mortgage rates and terms vary by lender and borrower circumstances.
          </p>
        </section>
      </main>
    </div>
  );
}
