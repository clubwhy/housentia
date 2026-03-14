import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Happens After Mortgage Approval? A Guide for U.S. Homebuyers | Housentia',
  description:
    'After conditional mortgage approval, the lender orders an appraisal, may request more documents, and clears you to close. Learn what happens between approval and closing.',
  openGraph: {
    title: 'What Happens After Mortgage Approval? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand what happens after you receive mortgage approval and before closing.',
  },
};

const ARTICLE_SLUG = 'what-happens-after-mortgage-approval';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Happens After Mortgage Approval?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-happens-after-mortgage-approval';

const FAQ_ITEMS = [
  {
    question: 'What happens right after conditional approval?',
    answer:
      'The lender typically orders the appraisal (if not already done) and may request additional documents to satisfy conditions. You should respond to any requests promptly. Title work is also completed.',
  },
  {
    question: 'How long between approval and closing?',
    answer:
      'It varies. Once you receive conditional approval, satisfying conditions often takes a few days to two weeks. After clear to close, you receive the Closing Disclosure and close within a few days to a week.',
  },
  {
    question: 'Can anything derail my approval before closing?',
    answer:
      'Yes. A low appraisal, title issues, changes to your financial situation, or new credit activity can affect approval. Avoid major purchases, new credit, job changes, and large unexplained deposits.',
  },
  {
    question: 'When do I get the Closing Disclosure?',
    answer:
      'You must receive the Closing Disclosure at least 3 business days before closing. It shows the final loan terms and costs. Review it and compare to your Loan Estimate.',
  },
];

export default function WhatHappensAfterMortgageApprovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Happens After Mortgage Approval? A Guide for U.S. Homebuyers',
    description:
      'After conditional approval, the lender completes the appraisal, satisfies conditions, and clears you to close. Learn what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Happens After Mortgage Approval? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            After you receive <strong>conditional mortgage approval</strong>, several steps remain before closing. The lender works to satisfy conditions—appraisal, title, additional documents—and then clears you to close. Understanding what happens in this phase helps you stay on track and avoid delays.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Appraisal</h2>
          <p className="text-gray-700 mb-4">
            The lender orders an appraisal to verify the property&apos;s value. The appraiser visits the property and produces a report. If the appraisal comes in at or above the purchase price (or loan amount), you are typically fine. If it comes in low, the lender may limit the loan amount, and you may need to renegotiate with the seller or bring more cash to close.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Satisfying Conditions</h2>
          <p className="text-gray-700 mb-4">
            Conditional approval comes with a list of conditions. Common ones include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Appraisal satisfactory to the lender</li>
            <li>Title search and insurance clear</li>
            <li>Additional documentation (e.g., letter of explanation, updated bank statement)</li>
            <li>Verification of employment</li>
          </ul>
          <p className="text-gray-700">
            Provide requested documents as soon as possible. Delays can push back your closing date. See{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">
              Mortgage Approval Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Clear to Close</h2>
          <p className="text-gray-700 mb-4">
            Once all conditions are satisfied, the lender issues <strong>clear to close</strong>. You can proceed to closing. The lender prepares the Closing Disclosure and sends it to you at least 3 business days before closing. Review it carefully and compare it to your Loan Estimate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing</h2>
          <p className="text-gray-700 mb-4">
            At closing, you sign the loan and purchase documents, the lender funds the loan, and you receive the keys (for a purchase). Bring a government-issued ID and funds for closing if required. See{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">
              Mortgage Closing Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Avoid</h2>
          <p className="text-gray-700 mb-4">
            Between approval and closing, avoid:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Major purchases or new credit</li>
            <li>Job changes</li>
            <li>Large, unexplained bank deposits</li>
            <li>Missing payments on existing debts</li>
          </ul>
          <p className="text-gray-700">
            Lenders may do a final verification before closing. Changes can affect your approval.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about what happens after approval">
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
          glossary={[{ label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' }]}
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
            The process varies by lender and transaction.
          </p>
        </section>
      </main>
    </div>
  );
}
