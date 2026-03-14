import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Mortgage Payment? A Guide for U.S. Homebuyers | Housentia',
  description:
    'A mortgage payment typically includes principal, interest, taxes, and insurance (PITI). Learn how payments are calculated, when they are due, and what happens if you miss one.',
  openGraph: {
    title: 'What Is a Mortgage Payment? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand what a mortgage payment includes and how it works.',
  },
};

const ARTICLE_SLUG = 'what-is-a-mortgage-payment';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Mortgage Payment?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-mortgage-payment';

const FAQ_ITEMS = [
  {
    question: 'What is included in a mortgage payment?',
    answer:
      'A typical mortgage payment includes principal (the loan balance), interest (the cost of borrowing), and often property taxes and homeowner\'s insurance. When taxes and insurance are included, the total is called PITI (Principal, Interest, Taxes, and Insurance).',
  },
  {
    question: 'When is my mortgage payment due?',
    answer:
      'Mortgage payments are usually due on the first of each month. Many lenders offer a grace period (e.g., until the 15th) before late fees apply. Check your loan documents or contact your servicer for your specific due date and grace period.',
  },
  {
    question: 'Can I pay extra principal on my mortgage?',
    answer:
      'Yes. Most mortgages allow extra principal payments. Paying extra principal can reduce the total interest you pay and shorten the loan term. Check your loan documents or contact your servicer to confirm there is no prepayment penalty and to ensure extra payments are applied correctly.',
  },
  {
    question: 'What happens if I miss a mortgage payment?',
    answer:
      'Missing a payment can result in late fees and may be reported to credit bureaus. If you continue to miss payments, you may face delinquency and eventually foreclosure. Contact your servicer as soon as possible if you are struggling—they may offer forbearance, repayment plans, or other options.',
  },
  {
    question: 'Does my mortgage payment include PMI?',
    answer:
      'If you have private mortgage insurance (PMI) because you put down less than 20%, PMI is typically included in your monthly payment. The servicer collects it and pays the insurer. PMI can often be removed once you reach about 80% loan-to-value.',
  },
];

export default function WhatIsAMortgagePaymentPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Mortgage Payment? A Guide for U.S. Homebuyers',
    description:
      'A mortgage payment typically includes principal, interest, taxes, and insurance (PITI). This guide explains how payments work and what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Mortgage Payment? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Your <strong>mortgage payment</strong> is the amount you pay each month to your mortgage servicer. For most mortgages, it includes principal (the amount you borrowed), interest (the cost of borrowing), and often property taxes and homeowner&apos;s insurance. Understanding how your payment is structured helps you budget and plan for homeownership.
          </p>
          <p className="text-gray-700">
            This guide explains what a mortgage payment includes, how it is calculated, and what to expect when you make payments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Mortgage Payment?</h2>
          <p className="text-gray-700 mb-4">
            A <strong>mortgage payment</strong> is the recurring amount you send to your servicer to repay your loan and stay current on property-related obligations. The typical components are:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Principal</strong> — Reduces your loan balance. See{' '}
              <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">
                What Is Mortgage Principal?
              </Link>
            </li>
            <li><strong>Interest</strong> — The cost of borrowing, based on your rate and remaining balance</li>
            <li><strong>Property taxes</strong> — Often collected in escrow and paid by the servicer when due</li>
            <li><strong>Homeowner&apos;s insurance</strong> — Often collected in escrow and paid by the servicer when due</li>
            <li><strong>Mortgage insurance</strong> — PMI or MIP if you put down less than 20% (see{' '}
              <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">
                What Is PMI?
              </Link>
            </li>
          </ul>
          <p className="text-gray-700">
            When principal, interest, taxes, and insurance are combined, the total is called <strong>PITI</strong>. For more on PITI, see our{' '}
            <Link href="/mortgage/what-is-piti" className="text-primary hover:underline font-medium">
              What Is PITI?
            </Link>
            {' '}guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Mortgage Payments Are Calculated</h2>
          <p className="text-gray-700 mb-4">
            The principal and interest portion of your payment is determined by your loan amount, interest rate, and loan term. For a fixed-rate mortgage, this amount stays the same until the loan is paid off or refinanced.
          </p>
          <p className="text-gray-700 mb-4">
            Early in the loan term, most of each payment goes to interest; over time, more goes to principal. This is called <strong>amortization</strong>. For more on how this works, see our{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">
              What Is Amortization?
            </Link>
          </p>
          <p className="text-gray-700 mb-4">
            Taxes and insurance (if in escrow) can change. Property taxes may increase if assessments rise. Insurance premiums may change at renewal. Your servicer may adjust your monthly payment when they conduct an escrow analysis (typically once a year).
          </p>
          <p className="text-gray-700">
            You can use our{' '}
            <Link href="/tools/mortgage-calculator" className="text-primary hover:underline font-medium">
              Mortgage Calculator
            </Link>
            {' '}to estimate your monthly payment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When Are Payments Due?</h2>
          <p className="text-gray-700 mb-4">
            Mortgage payments are typically due on the first of each month. Many servicers offer a grace period (e.g., until the 15th) before a late fee is charged. Your first payment is usually due the month after the month in which you closed.
          </p>
          <p className="text-gray-700 mb-4">
            Example: If you close on March 15, your first payment may be due May 1. The period between closing and the first payment often includes prepaid interest (per diem interest) that you pay at closing.
          </p>
          <p className="text-gray-700">
            Set up automatic payments or reminders to avoid missing a due date. Late payments can result in fees and may affect your credit.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Extra Principal Payments</h2>
          <p className="text-gray-700 mb-4">
            Most mortgages allow you to pay extra principal. Doing so can reduce the total interest you pay and shorten the loan term. Even small extra payments can make a difference over time.
          </p>
          <p className="text-gray-700 mb-4">
            Before making extra payments, confirm:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Your loan has no prepayment penalty</li>
            <li>Extra payments are applied to principal (not future payments)</li>
            <li>You have specified that the extra amount should go to principal if your servicer allows you to designate it</li>
          </ul>
          <p className="text-gray-700">
            Contact your servicer for instructions on how to make extra principal payments correctly.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage payments">
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
            <li>CFPB mortgage servicing rules</li>
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
          glossary={[{ label: 'PITI', href: '/mortgage-glossary/piti' }, { label: 'Escrow Account', href: '/mortgage-glossary/escrow-account' }]}
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
