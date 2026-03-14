import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Pre-Approval Process: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn the mortgage pre-approval process: what documents you need, how long it takes, and how to get a pre-approval letter before house hunting.',
  openGraph: {
    title: 'Mortgage Pre-Approval Process: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the steps to get mortgage pre-approved.',
  },
};

const ARTICLE_SLUG = 'mortgage-pre-approval-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Pre-Approval Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-pre-approval-process';

const FAQ_ITEMS = [
  {
    question: 'How long does pre-approval take?',
    answer:
      'Pre-approval often takes a few days to a week, depending on the lender and how quickly you provide documents. Some lenders offer same-day or next-day pre-approval for straightforward cases.',
  },
  {
    question: 'What documents do I need for pre-approval?',
    answer:
      'Typical documents include pay stubs (2–4 weeks), W-2s (2 years), tax returns (2 years), bank statements (2 months), and a government-issued ID. Self-employed borrowers may need additional documentation.',
  },
  {
    question: 'Does pre-approval affect my credit score?',
    answer:
      'Pre-approval usually involves a hard credit pull, which may have a small, temporary effect on your score. Multiple mortgage inquiries within a short window (e.g., 14–45 days) are often counted as one for scoring.',
  },
  {
    question: 'How long is a pre-approval letter valid?',
    answer:
      'Pre-approval letters often expire in 60 to 90 days. If your situation changes or the letter expires, you may need to update or renew. Check with your lender.',
  },
];

export default function MortgagePreApprovalProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Pre-Approval Process: A Guide for U.S. Homebuyers',
    description:
      'Learn the mortgage pre-approval process: documents needed, timeline, and how to get a pre-approval letter.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Pre-Approval Process: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>mortgage pre-approval process</strong> is the steps you take to get a lender to verify your finances and conditionally approve you for a loan amount. A pre-approval letter strengthens your offer when house hunting and helps you know your budget.
          </p>
          <p className="text-gray-700">
            This guide explains what to do, what documents you need, and how long it typically takes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Approval vs. Prequalification</h2>
          <p className="text-gray-700 mb-4">
            <strong>Prequalification</strong> is typically a quick estimate based on self-reported information. <strong>Pre-approval</strong> involves verification of your income, assets, and credit. For house hunting, pre-approval is stronger. See{' '}
            <Link href="/mortgage/mortgage-pre-approval-vs-pre-qualification" className="text-primary hover:underline font-medium">
              Pre-Approval vs Pre-Qualification
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Steps in the Pre-Approval Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong>Choose a lender</strong> — Bank, credit union, online lender, or mortgage broker. You can get pre-approved from multiple lenders within a short window.
            </li>
            <li>
              <strong>Submit application and documents</strong> — Provide income, asset, and identification documents. The lender will pull your credit.
            </li>
            <li>
              <strong>Lender reviews</strong> — The lender verifies your information and evaluates your credit, income, and debt.
            </li>
            <li>
              <strong>Receive pre-approval letter</strong> — If approved, you get a letter stating the loan amount you are conditionally approved for. Use it when making offers.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Documents Typically Required</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Pay stubs (2–4 weeks)</li>
            <li>W-2s (2 years)</li>
            <li>Tax returns (2 years)</li>
            <li>Bank statements (2 months)</li>
            <li>Government-issued ID</li>
            <li>Employment verification (may be requested)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Self-employed borrowers may need profit-and-loss statements, 1099s, and additional tax documentation. See{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">
              Self-Employed Borrower Scenarios
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long It Takes</h2>
          <p className="text-gray-700 mb-4">
            Pre-approval often takes a few days to a week. Some lenders offer faster turnaround. Delays can occur if documents are missing or if the lender needs clarification. Respond promptly to requests.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using Your Pre-Approval Letter</h2>
          <p className="text-gray-700 mb-4">
            When you make an offer on a home, you may include your pre-approval letter to show the seller you are a qualified buyer. The letter typically states the loan amount and may have an expiration date. Do not confuse pre-approval with a guarantee—final approval depends on the property and final underwriting.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about pre-approval process">
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
          glossary={[{ label: 'Pre-approval', href: '/mortgage-glossary/pre-approval' }]}
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
            The pre-approval process varies by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
