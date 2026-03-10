import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Loan Estimate? A Guide for U.S. Homebuyers | Housentia',
  description:
    'A Loan Estimate (LE) is a standardized form you receive early in the mortgage process. Learn what it includes, when you get it, and how to use it to compare offers under TRID rules.',
  openGraph: {
    title: 'What Is a Loan Estimate? A Guide for U.S. Homebuyers | Housentia',
    description:
      'Learn what the Loan Estimate is, what it includes, and how to use it to compare mortgage offers.',
  },
};

const BREADCRUMBS = [{ label: 'Mortgage', href: '/mortgage' }, { label: 'What Is a Loan Estimate?' }];
const PAGE_URL = 'https://housentia.com/mortgage/what-is-loan-estimate';

const FAQ_ITEMS = [
  {
    question: 'What is a Loan Estimate?',
    answer:
      'A Loan Estimate is a standardized three-page form lenders provide after you apply for a mortgage. It shows estimated loan terms, monthly payment, and closing costs in a consistent format.',
  },
  {
    question: 'When do you receive a Loan Estimate?',
    answer:
      'For many mortgage applications, lenders must provide a Loan Estimate within three business days of receiving an application (as defined under TRID).',
  },
  {
    question: 'Is the Loan Estimate a final offer?',
    answer:
      'No. The Loan Estimate is an estimate based on the information available at the time. Final terms and costs are shown on the Closing Disclosure before closing.',
  },
  {
    question: 'What should I compare across multiple Loan Estimates?',
    answer:
      'Borrowers often compare interest rate, APR, estimated monthly payment, total closing costs, and whether the rate is locked. Comparing line items can also help identify fee differences.',
  },
  {
    question: 'Can a Loan Estimate change?',
    answer:
      'Some estimates can change under specific rules. Lenders may issue a revised Loan Estimate due to a valid changed circumstance or other allowed reasons.',
  },
];

export default function WhatIsLoanEstimatePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Loan Estimate? A Guide for U.S. Homebuyers',
    description:
      'The Loan Estimate (LE) is a standardized disclosure required under TRID that summarizes key loan terms and estimated costs early in the mortgage process. This educational guide explains how to read and use the form.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Loan Estimate? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            One of the most important consumer protection features in U.S. mortgages is standardized disclosures. Under the
            TILA-RESPA Integrated Disclosure rules (often called <strong>TRID</strong>), borrowers receive key forms designed
            to make mortgage terms and costs easier to compare.
          </p>
          <p className="text-gray-700">
            The first major form most borrowers receive is the <strong>Loan Estimate (LE)</strong>. This guide explains what
            it is, what it includes, and how to use it as an educational comparison tool.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>Loan Estimate</strong> is a standardized form that summarizes the estimated terms and costs of a mortgage
            loan you applied for. Lenders are generally required to provide it within three business days of receiving an application
            (as defined by TRID).
          </p>
          <p className="text-gray-700">
            The purpose is transparency: by requiring the same format, borrowers can compare offers from different lenders more consistently.
            The Loan Estimate is not a final contract, and it is not a guarantee of approval.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The Loan Estimate is typically three pages. It highlights key information such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Loan amount, interest rate, and whether the rate is locked</li>
            <li>Estimated monthly payment (including taxes/insurance if included in the estimate)</li>
            <li>Estimated closing costs and cash to close</li>
            <li>APR and other required disclosures</li>
            <li>Whether the loan has certain features (prepayment penalty, balloon payment, negative amortization, etc.)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            TRID rules also include “tolerance” categories that affect how much certain fees can change. If a lender issues a revised Loan Estimate,
            it must meet specific regulatory conditions (for example, a valid changed circumstance).
          </p>
          <p className="text-gray-700">
            Before closing, lenders provide a <strong>Closing Disclosure</strong> that shows final terms and costs. Comparing the LE to the CD is a common way
            borrowers check whether major items changed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            A borrower requests Loan Estimates from two lenders for the same purchase. Both forms show a similar interest rate, but one Loan Estimate shows
            higher origination charges and fewer lender credits.
          </p>
          <p className="text-gray-700">
            In this type of comparison, the Loan Estimate helps the borrower see differences in fees and estimated cash to close in a consistent format.
            The borrower can then ask questions and request clarification before choosing a lender — without relying on informal quotes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Standardized comparison</strong> — Makes it easier to compare offers across lenders.</li>
                <li><strong>Early transparency</strong> — Shows estimated costs before you reach the closing table.</li>
                <li><strong>Supports consumer protections</strong> — Tolerance rules limit certain fee increases.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>It is an estimate</strong> — Some items can change based on valid reasons under the rules.</li>
                <li><strong>Can be dense</strong> — Multiple pages and fee categories can be hard to interpret initially.</li>
                <li><strong>Not an approval</strong> — Underwriting and eligibility still apply.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Looking only at the interest rate</strong>
              <p className="text-gray-700 mt-1">Fees, credits, and APR matter when comparing total cost.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Assuming the rate is locked</strong>
              <p className="text-gray-700 mt-1">The Loan Estimate indicates whether the rate is locked and for how long.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Ignoring cash to close</strong>
              <p className="text-gray-700 mt-1">Cash to close combines down payment and closing costs minus credits.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Not comparing with the Closing Disclosure later</strong>
              <p className="text-gray-700 mt-1">Comparing LE to CD helps identify changes before signing.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Treating the Loan Estimate as a guarantee</strong>
              <p className="text-gray-700 mt-1">Approval depends on underwriting and final verification.</p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about the Loan Estimate">
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
            <li>TRID (TILA-RESPA Integrated Disclosures) forms and samples</li>
            <li>Truth in Lending Act (TILA)</li>
            <li>RESPA (Real Estate Settlement Procedures Act)</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
          </ul>
        </section>

        <RelatedLinks
          guides={[
            { label: 'What is APR', href: '/mortgage/what-is-apr' },
            { label: 'What are Closing Costs', href: '/mortgage/what-is-closing-costs' },
          ]}
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
