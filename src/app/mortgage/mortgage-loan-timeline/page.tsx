import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Loan Timeline: What to Expect | Housentia',
  description:
    'A typical mortgage takes 30 to 45 days from application to closing. Learn the mortgage loan timeline, key milestones, and what can cause delays.',
  openGraph: {
    title: 'Mortgage Loan Timeline: What to Expect | Housentia',
    description: 'Understand the typical mortgage timeline and key milestones.',
  },
};

const ARTICLE_SLUG = 'mortgage-loan-timeline';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Loan Timeline',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-loan-timeline';

const FAQ_ITEMS = [
  {
    question: 'How long does a mortgage take from application to closing?',
    answer:
      'Typically 30 to 45 days for a purchase or refinance. Some lenders can close faster; delays can occur with appraisals, title issues, or document requests.',
  },
  {
    question: 'What are the key milestones in the mortgage timeline?',
    answer:
      'Application → Loan Estimate (3 days) → Processing → Underwriting → Conditional approval → Appraisal/title → Clear to close → Closing Disclosure (3 days before) → Closing.',
  },
  {
    question: 'What can delay a mortgage?',
    answer:
      'Delays can occur from: slow document response, appraisal scheduling, title issues, low appraisal, underwriting conditions, or changes to your financial situation. Respond quickly to requests to minimize delays.',
  },
  {
    question: 'Can I speed up the mortgage process?',
    answer:
      'Provide documents promptly, respond to requests quickly, and avoid major financial changes. Some lenders offer expedited processes for straightforward loans.',
  },
];

export default function MortgageLoanTimelinePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Loan Timeline: What to Expect',
    description:
      'A typical mortgage takes 30 to 45 days. Learn the timeline, key milestones, and what can cause delays.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Loan Timeline: What to Expect" breadcrumbs={BREADCRUMBS} />
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
            A typical mortgage takes <strong>30 to 45 days</strong> from application to closing. The timeline varies by lender, loan type, and how quickly you provide documents. Understanding the key milestones helps you know what to expect and how to avoid delays.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Timeline</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li><strong>Day 0:</strong> Application submitted</li>
            <li><strong>Days 1–3:</strong> Loan Estimate received (lender must provide within 3 business days)</li>
            <li><strong>Days 1–14:</strong> Processing—documents collected, appraisal and title ordered</li>
            <li><strong>Days 7–21:</strong> Underwriting review</li>
            <li><strong>Days 14–28:</strong> Conditional approval; conditions satisfied</li>
            <li><strong>Days 21–35:</strong> Clear to close; Closing Disclosure sent</li>
            <li><strong>Days 30–45:</strong> Closing (at least 3 business days after Closing Disclosure)</li>
          </ol>
          <p className="text-gray-700 mt-4">
            These are approximate. Some loans close faster; others take longer. See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">
              Mortgage Application Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can Cause Delays</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Slow response to document requests</li>
            <li>Appraisal scheduling or low appraisal requiring renegotiation</li>
            <li>Title issues (liens, errors, boundary disputes)</li>
            <li>Underwriting conditions that take time to satisfy</li>
            <li>Changes to your financial situation requiring re-verification</li>
          </ul>
          <p className="text-gray-700">
            Respond promptly to requests and keep your lender informed to minimize delays.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage timeline">
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
            Timelines vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
