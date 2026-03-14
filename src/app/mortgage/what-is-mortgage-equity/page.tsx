import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Mortgage Equity? A Guide for U.S. Homeowners | Housentia',
  description:
    'Mortgage equity is the portion of your home you own outright—the difference between your home\'s value and what you owe. Learn how equity builds and how you can use it.',
  openGraph: {
    title: 'What Is Mortgage Equity? A Guide for U.S. Homeowners | Housentia',
    description: 'Understand what mortgage equity is and how it grows over time.',
  },
};

const ARTICLE_SLUG = 'what-is-mortgage-equity';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is Mortgage Equity?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-mortgage-equity';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage equity?',
    answer:
      'Mortgage equity (or home equity) is the difference between your home\'s current value and the amount you still owe on your mortgage. If your home is worth $350,000 and you owe $200,000, you have $150,000 in equity.',
  },
  {
    question: 'How does equity increase?',
    answer:
      'Equity increases when you pay down your principal and when your home\'s value rises. Each mortgage payment reduces your loan balance. Market appreciation can also increase your home\'s value, boosting equity even if you have not made extra payments.',
  },
  {
    question: 'Can equity decrease?',
    answer:
      'Yes. If your home\'s value falls (e.g., in a market downturn) or you borrow against it (HELOC, cash-out refinance, second mortgage), your equity can decrease. You can also have negative equity (underwater) if you owe more than the home is worth.',
  },
  {
    question: 'How can I use my home equity?',
    answer:
      'You can tap equity through a home equity loan, HELOC, or cash-out refinance. Uses include home improvements, debt consolidation, education, or other expenses. Borrowing against equity adds debt and risk—your home secures the loan.',
  },
  {
    question: 'What is negative equity?',
    answer:
      'Negative equity (being "underwater") means you owe more on your mortgage than your home is worth. It can happen when home values drop or when you borrow heavily against the property. It can make selling or refinancing difficult.',
  },
];

export default function WhatIsMortgageEquityPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is Mortgage Equity? A Guide for U.S. Homeowners',
    description:
      'Mortgage equity is the portion of your home you own outright. This guide explains how equity builds and how you can use it.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Mortgage Equity? A Guide for U.S. Homeowners" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage equity</strong> (often called home equity) is the portion of your home you own outright—the difference between your home&apos;s current value and the amount you still owe on your mortgage. As you pay down your loan and as your home&apos;s value may change, your equity grows or shrinks.
          </p>
          <p className="text-gray-700">
            Understanding equity helps you see how much of your home you truly &quot;own,&quot; and it matters when you refinance, sell, or borrow against your home.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Mortgage Equity?</h2>
          <p className="text-gray-700 mb-4">
            <strong>Equity</strong> = Home value − Mortgage balance
          </p>
          <p className="text-gray-700 mb-4">
            Example: If your home is worth $400,000 and you owe $280,000 on your mortgage, you have $120,000 in equity. That $120,000 is the portion of the home you own free and clear of the mortgage.
          </p>
          <p className="text-gray-700 mb-4">
            Equity is not cash you can spend until you sell the home or borrow against it. When you sell, you receive the proceeds minus the payoff to your lender and closing costs. When you borrow (e.g., HELOC or cash-out refinance), you take on new debt secured by the property.
          </p>
          <p className="text-gray-700">
            For more on how your loan balance decreases over time, see our guide on{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">
              What Is Amortization?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Equity Builds</h2>
          <p className="text-gray-700 mb-4">
            Equity increases in two main ways:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Principal payments</strong> — Each mortgage payment reduces your loan balance. Early in the loan, most of each payment goes to interest; over time, more goes to principal. Extra principal payments accelerate equity growth.</li>
            <li><strong>Home appreciation</strong> — If your home&apos;s value rises, your equity increases even if your loan balance stays the same. Market conditions, improvements, and location affect value.</li>
          </ul>
          <p className="text-gray-700">
            The opposite can also happen: if your home&apos;s value falls, your equity can decrease. In a severe downturn, you could owe more than the home is worth (negative equity).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using Your Equity</h2>
          <p className="text-gray-700 mb-4">
            You can tap home equity through:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Cash-out refinance</strong> — Refinance for more than you owe and receive the difference in cash. See{' '}
              <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">
                What Is a Cash-Out Refinance?
              </Link>
            </li>
            <li><strong>Home equity loan</strong> — A lump-sum loan secured by your equity</li>
            <li><strong>HELOC</strong> — A revolving line of credit. See{' '}
              <Link href="/mortgage/heloc" className="text-primary hover:underline font-medium">
                HELOC Overview
              </Link>
            </li>
          </ul>
          <p className="text-gray-700">
            Borrowing against equity adds debt and uses your home as collateral. If you cannot repay, you could lose your home. Consider the purpose, cost, and your ability to repay before borrowing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Equity and Loan-to-Value (LTV)</h2>
          <p className="text-gray-700 mb-4">
            LTV (loan-to-value) is the inverse of equity. If you have 20% equity, your LTV is 80%. Lenders use LTV to assess risk and set terms. Lower LTV (more equity) often means better rates and no PMI. For more on LTV, see our{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">
              What Is LTV?
            </Link>
            {' '}guide.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage equity">
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <p className="text-gray-700 mb-4">This guide is based on publicly available consumer education resources.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                consumerfinance.gov
              </a>
            </li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'CLTV', href: '/mortgage-glossary/cltv' }]}
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
            Readers should consult a licensed mortgage professional or financial advisor for advice specific to their situation.
          </p>
        </section>
      </main>
    </div>
  );
}
