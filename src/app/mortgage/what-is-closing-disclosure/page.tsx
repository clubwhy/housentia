import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Closing Disclosure? A Guide for U.S. Homebuyers | Housentia',
  description:
    'The Closing Disclosure (CD) is a standardized form you receive before closing that shows final loan terms and closing costs. Learn what’s on it, the 3-business-day rule, and how to compare it to your Loan Estimate.',
  openGraph: {
    title: 'What Is a Closing Disclosure? A Guide for U.S. Homebuyers | Housentia',
    description:
      'Learn what the Closing Disclosure is, what it includes, and how to review it under TRID rules.',
  },
};

const ARTICLE_SLUG = 'what-is-closing-disclosure';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Closing Disclosure?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-closing-disclosure';

const FAQ_ITEMS = [
  {
    question: 'What is a Closing Disclosure?',
    answer:
      'A Closing Disclosure is a standardized form that summarizes the final terms of your mortgage and the final closing costs. It is required for many mortgage transactions under TRID rules.',
  },
  {
    question: 'When do I receive the Closing Disclosure?',
    answer:
      'For many transactions, you must receive the Closing Disclosure at least three business days before closing to allow time to review the final terms and costs.',
  },
  {
    question: 'What should I check on the Closing Disclosure?',
    answer:
      'Borrowers commonly verify the interest rate, APR, monthly payment, loan amount, whether there is a prepayment penalty, and the total cash to close. Comparing the CD to the Loan Estimate can help identify changes.',
  },
  {
    question: 'Can the Closing Disclosure change?',
    answer:
      'Some changes are possible. Certain changes (like a significant APR increase, a change in loan product, or adding a prepayment penalty) can trigger a new three-business-day review period under the rules.',
  },
  {
    question: 'Is the Closing Disclosure the final contract?',
    answer:
      'It is a disclosure of final terms and costs, but the legally binding obligation is established by the note and other closing documents you sign. The CD is an important document for review before signing.',
  },
];

export default function WhatIsClosingDisclosurePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Closing Disclosure? A Guide for U.S. Homebuyers',
    description:
      'The Closing Disclosure (CD) is a standardized TRID form that shows final mortgage terms and closing costs before you close. This educational guide explains the three-day review rule and how to compare the CD to the Loan Estimate.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Closing Disclosure? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Closing on a home involves many documents, deadlines, and costs. To protect consumers and improve transparency, U.S. mortgage rules require
            standardized disclosures that summarize loan terms and closing costs.
          </p>
          <p className="text-gray-700">
            One of the most important documents is the <strong>Closing Disclosure (CD)</strong>. This guide explains what it is, when you receive it,
            and how to use it for review before closing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            The <strong>Closing Disclosure</strong> is a standardized form required under TRID that shows the <strong>final</strong> loan terms and
            closing costs for many mortgage transactions. It is designed to be comparable to the earlier <strong>Loan Estimate</strong>.
          </p>
          <p className="text-gray-700">
            The CD is not meant to “sell” a loan. It’s a consumer protection disclosure intended to give borrowers time to review what they are agreeing to
            before signing final documents.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            For many transactions, lenders must provide the Closing Disclosure at least <strong>three business days</strong> before closing. This review
            period is intended to give borrowers time to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Confirm the interest rate, APR, and payment information</li>
            <li>Review the total closing costs and cash to close</li>
            <li>Compare the CD to the Loan Estimate</li>
            <li>Ask questions and request corrections if something looks wrong</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The CD includes sections for loan terms, projected payments, costs at closing, and other important items such as whether there is a prepayment
            penalty or balloon payment.
          </p>
          <p className="text-gray-700">
            If certain significant changes occur after the CD is issued (such as a meaningful APR increase, a change in loan product, or adding a prepayment
            penalty), the rules may require a corrected CD and a new three-business-day review period.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            A borrower receives a Closing Disclosure showing final closing costs and a final cash-to-close amount. The borrower compares it to the Loan
            Estimate and notices that a lender fee is higher than expected.
          </p>
          <p className="text-gray-700">
            During the review period, the borrower asks the lender or settlement agent to explain the change and whether it is allowed under TRID tolerances
            or whether a correction is needed. This type of review is exactly what the disclosure system is intended to support.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Final transparency</strong> — Provides a clear view of final terms and costs before signing.</li>
                <li><strong>Standardized format</strong> — Designed to be comparable to the Loan Estimate.</li>
                <li><strong>Review period</strong> — Three business days gives time for questions and corrections.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>Dense document</strong> — Multiple pages and categories can be hard to interpret quickly.</li>
                <li><strong>Not all changes trigger a new waiting period</strong> — Some changes may still occur at closing.</li>
                <li><strong>Requires active review</strong> — Benefits are greatest when borrowers compare it to the Loan Estimate.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Not reading the CD until the closing table</strong>
              <p className="text-gray-700 mt-1">The review period is intended for advance review, not last-minute surprises.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Comparing only the interest rate</strong>
              <p className="text-gray-700 mt-1">APR, total loan costs, and cash to close are also important comparison points.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Not comparing CD to LE</strong>
              <p className="text-gray-700 mt-1">The forms are designed to be compared; differences should be understood.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Confusing “cash to close” with closing costs</strong>
              <p className="text-gray-700 mt-1">Cash to close can include the down payment and other items.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Assuming the CD is the only binding document</strong>
              <p className="text-gray-700 mt-1">The note, deed of trust/mortgage, and other documents create the legal obligation.</p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about the Closing Disclosure">
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
          <p className="text-gray-700 mb-4">This guide is based on publicly available consumer education and regulatory resources, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>TRID (TILA-RESPA Integrated Disclosures) rules and FAQs</li>
            <li>Truth in Lending Act (TILA)</li>
            <li>RESPA (Real Estate Settlement Procedures Act)</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' }]}
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
