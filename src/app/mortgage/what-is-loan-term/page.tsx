import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Loan Term? A Guide for U.S. Homebuyers | Housentia',
  description:
    'The loan term is how long you have to repay the mortgage. Learn about 15-year vs 30-year terms, how they affect your payment and total cost.',
  openGraph: {
    title: 'What Is a Loan Term? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage loan terms: 15-year vs 30-year and how they affect your payment.',
  },
};

const ARTICLE_SLUG = 'what-is-loan-term';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Loan Term?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-loan-term';

const FAQ_ITEMS = [
  {
    question: 'What is a loan term?',
    answer:
      'The loan term is the length of time you have to repay the mortgage. Common terms are 30 years and 15 years.',
  },
  {
    question: 'What is the difference between 15-year and 30-year mortgages?',
    answer:
      'A 15-year term typically has a lower interest rate and higher monthly payment, but you pay less interest over time. A 30-year term has a lower monthly payment but more total interest.',
  },
  {
    question: 'Can I pay off my mortgage early?',
    answer:
      'Most conventional mortgages allow early payoff without penalty. Check your loan documents for prepayment terms.',
  },
  {
    question: 'Does loan term affect my interest rate?',
    answer:
      'Yes. Shorter terms often have lower rates. Lenders may offer different rates for 15-year vs 30-year loans.',
  },
];

export default function WhatIsLoanTermPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Loan Term? A Guide for U.S. Homebuyers',
    description:
      'The loan term is how long you have to repay the mortgage. This guide explains 15-year vs 30-year terms and how they affect your payment and total cost.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Loan Term? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>loan term</strong> is the length of time you have to repay your mortgage. The most common terms
            are <strong>30 years</strong> and <strong>15 years</strong>, though other terms (e.g., 10, 20, 25 years) may
            be available.
          </p>
          <p className="text-gray-700 mb-4">
            The loan term affects both your monthly payment and the total amount of interest you pay over the life of the
            loan. A shorter term usually means a higher monthly payment but less total interest. A longer term means a
            lower monthly payment but more interest over time.
          </p>
          <p className="text-gray-700">
            Understanding loan terms helps you choose a mortgage that fits your budget and goals. For how payments are
            structured over time, see our{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">
              What Is Amortization?
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>30-year fixed</strong> mortgage is repaid over 360 monthly payments. A <strong>15-year
            fixed</strong> is repaid over 180 monthly payments. The loan term is stated on your Loan Estimate and
            Closing Disclosure.
          </p>
          <p className="text-gray-700 mb-4">
            The term is different from the <strong>rate lock period</strong> (how long your interest rate is locked) and
            from the <strong>adjustment period</strong> on an ARM (when the rate can change).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">15-Year vs. 30-Year</h2>
          <div className="grid gap-6 md:grid-cols-2 mb-4">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">15-Year Term</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Higher monthly payment</li>
                <li>Lower interest rate (typically)</li>
                <li>Less total interest paid</li>
                <li>Build equity faster</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">30-Year Term</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Lower monthly payment</li>
                <li>Higher interest rate (typically)</li>
                <li>More total interest paid</li>
                <li>More payment flexibility</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700">
            Your choice depends on your budget, how long you plan to stay in the home, and your financial goals.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about loan terms">
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
            Loan terms and rates vary by lender and borrower circumstances.
          </p>
        </section>
      </main>
    </div>
  );
}
