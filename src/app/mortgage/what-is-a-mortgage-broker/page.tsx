import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Mortgage Broker? A Guide for U.S. Homebuyers | Housentia',
  description:
    'A mortgage broker connects borrowers with lenders. Learn how brokers work, how they are compensated, and when using a broker may make sense for your mortgage.',
  openGraph: {
    title: 'What Is a Mortgage Broker? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand what a mortgage broker does and how they differ from direct lenders.',
  },
};

const ARTICLE_SLUG = 'what-is-a-mortgage-broker';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Mortgage Broker?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-mortgage-broker';

const FAQ_ITEMS = [
  {
    question: 'What is a mortgage broker?',
    answer:
      'A mortgage broker is an intermediary who connects borrowers with lenders. Brokers work with multiple lenders to find loan options that fit your needs. They do not fund the loan—the lender does—but they help you through the application process.',
  },
  {
    question: 'How does a mortgage broker get paid?',
    answer:
      'Brokers typically earn a commission from the lender (often as a percentage of the loan) or a fee from the borrower, or both. Compensation must be disclosed on your Loan Estimate. Under TRID rules, broker compensation is included in the loan terms you receive.',
  },
  {
    question: 'Is a broker better than going directly to a lender?',
    answer:
      'It depends. A broker can shop multiple lenders for you and may find competitive rates. Going directly to a lender can simplify the process and may work well if you already know which lender you want. Compare offers from both approaches.',
  },
  {
    question: 'Does using a broker cost more?',
    answer:
      'Not necessarily. Brokers may add a fee, but they can also find lower rates that offset it. Your Loan Estimate will show all costs. Compare the total cost (APR, closing costs) from a broker versus direct lenders to see which is better for you.',
  },
  {
    question: 'Is a mortgage broker the same as a loan officer?',
    answer:
      'No. A loan officer typically works for one lender. A mortgage broker works independently or for a brokerage and can place loans with many different lenders. Both help you through the application process.',
  },
];

export default function WhatIsAMortgageBrokerPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Mortgage Broker? A Guide for U.S. Homebuyers',
    description:
      'A mortgage broker connects borrowers with lenders. This guide explains how brokers work, how they are compensated, and when using one may make sense.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Mortgage Broker? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            A <strong>mortgage broker</strong> is a licensed professional who connects borrowers with lenders. Unlike a lender, a broker does not fund the loan—they act as an intermediary, shopping multiple lenders to find options that fit your needs. Brokers can simplify the process of comparing offers and may find competitive rates.
          </p>
          <p className="text-gray-700">
            This guide explains what a mortgage broker does, how they are compensated, and when using one may make sense for your situation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Mortgage Broker?</h2>
          <p className="text-gray-700 mb-4">
            A <strong>mortgage broker</strong> is an intermediary between you and potential lenders. They gather your financial information, submit applications to one or more lenders, and help you through the process until closing. The lender—not the broker—approves and funds the loan.
          </p>
          <p className="text-gray-700 mb-4">
            Brokers typically have relationships with multiple lenders, including banks, credit unions, and mortgage companies. This can give you access to a wider range of loan products and rates than you might find by contacting a single lender directly.
          </p>
          <p className="text-gray-700">
            Brokers must be licensed in the states where they operate. They are regulated by state and federal rules, including the Secure and Fair Enforcement for Mortgage Licensing Act (SAFE Act).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Broker vs. Lender vs. Loan Officer</h2>
          <p className="text-gray-700 mb-4">
            It helps to distinguish these roles:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Mortgage broker</strong> — Works with multiple lenders. Shops on your behalf. Does not fund the loan.</li>
            <li><strong>Lender</strong> — Funds the loan. You can work with a lender directly or through a broker. See{' '}
              <Link href="/mortgage/what-is-a-mortgage-lender" className="text-primary hover:underline font-medium">
                What Is a Mortgage Lender?
              </Link>
            </li>
            <li><strong>Loan officer</strong> — Works for a single lender. Helps you apply and guides you through that lender&apos;s process.</li>
          </ul>
          <p className="text-gray-700">
            A broker can be a good option if you want someone to shop multiple lenders for you without having to apply to each one yourself.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Brokers Are Compensated</h2>
          <p className="text-gray-700 mb-4">
            Mortgage brokers earn money in one or more ways:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Lender-paid compensation</strong> — The lender pays the broker a commission (often a percentage of the loan amount) for bringing the business</li>
            <li><strong>Borrower-paid fee</strong> — You pay the broker a fee, which may be a flat amount or a percentage</li>
            <li><strong>Combination</strong> — Some brokers receive compensation from both the lender and the borrower</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosures), broker compensation must be disclosed on your Loan Estimate. You will see it in the loan terms and closing cost sections. Compare the total cost—including any broker fee—with offers from direct lenders to ensure you are getting a competitive deal.
          </p>
          <p className="text-gray-700">
            A broker cannot receive compensation from both you and the lender for the same service in a way that would result in you paying more than the broker&apos;s disclosed compensation. Rules are designed to prevent steering and ensure transparency.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When a Broker May Help</h2>
          <p className="text-gray-700 mb-4">
            Using a mortgage broker can make sense when:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>You want to compare multiple lenders without applying to each one separately</li>
            <li>You have a unique situation (e.g., self-employment, credit issues) and want a broker to find lenders that work with your profile</li>
            <li>You prefer a single point of contact who handles the shopping and paperwork</li>
            <li>You are short on time and want someone to streamline the process</li>
          </ul>
          <p className="text-gray-700">
            You can also apply directly to lenders—banks, credit unions, online lenders—and compare their Loan Estimates. There is no single &quot;best&quot; approach; it depends on your preferences and what offers you receive.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage brokers">
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
          <p className="text-gray-700 mb-4">This guide is based on publicly available consumer education resources, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>TRID (TILA-RESPA Integrated Disclosures)</li>
            <li>NMLS (Nationwide Mortgage Licensing System)</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
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
          glossary={[{ label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' }]}
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
          <p className="text-gray-700 text-sm mb-2">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and borrower circumstances.
          </p>
          <p className="text-gray-700 text-sm">
            Readers should consult a licensed mortgage professional or financial advisor for advice specific to their situation.
          </p>
        </section>
      </main>
    </div>
  );
}
