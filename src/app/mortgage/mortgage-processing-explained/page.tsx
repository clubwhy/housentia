import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Processing Explained: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Mortgage processing is the stage between application and underwriting. Learn what processors do, how they prepare your file, and what to expect.',
  openGraph: {
    title: 'Mortgage Processing Explained: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage processing and how your application moves to underwriting.',
  },
};

const ARTICLE_SLUG = 'mortgage-processing-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Processing Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-processing-explained';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage processing?',
    answer:
      'Mortgage processing is the stage where a processor collects and organizes your documents, verifies information, orders the appraisal and title, and prepares your file for underwriting. The processor is your main point of contact during this phase.',
  },
  {
    question: 'What is the difference between processing and underwriting?',
    answer:
      'Processing prepares the file—gathering documents, ordering third-party services, and ensuring the application is complete. Underwriting evaluates the file and decides whether to approve the loan and on what terms.',
  },
  {
    question: 'How long does processing take?',
    answer:
      'Processing typically takes a few days to a couple of weeks, depending on how quickly you provide documents and how busy the lender is. Delays can occur if documents are missing or if the processor needs clarification.',
  },
  {
    question: 'What can I do to speed up processing?',
    answer:
      'Respond quickly to document requests, provide complete information the first time, and keep your processor updated if anything changes. Having documents ready before you apply can also help.',
  },
];

export default function MortgageProcessingExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Processing Explained: A Guide for U.S. Homebuyers',
    description:
      'Mortgage processing prepares your application for underwriting. Learn what processors do and what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Processing Explained: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage processing</strong> is the stage between submitting your application and underwriting. A loan processor collects your documents, verifies information, orders the appraisal and title, and prepares your file so an underwriter can evaluate it. The processor is often your main point of contact during this phase.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Processors Do</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Collect and organize your documents (income, assets, identification)</li>
            <li>Verify employment and income</li>
            <li>Order the appraisal</li>
            <li>Order the title search and title insurance</li>
            <li>Ensure the file is complete before sending to underwriting</li>
            <li>Communicate with you about document requests and status</li>
          </ul>
          <p className="text-gray-700">
            Processors do not approve or deny the loan—that is the underwriter&apos;s job. They prepare the file so the underwriter has everything needed to make a decision.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing vs. Underwriting</h2>
          <p className="text-gray-700 mb-4">
            <strong>Processing</strong> = gathering, verifying, and organizing. <strong>Underwriting</strong> = evaluating and deciding. The processor builds the file; the underwriter reviews it and approves, conditionally approves, or denies. See{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">
              Mortgage Underwriting Explained
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Help the Process</h2>
          <p className="text-gray-700 mb-4">
            Respond quickly to document requests. Provide complete, legible copies. If you cannot provide something, tell your processor right away. Keep them informed of any changes (job, income, assets). The faster you respond, the faster your file can move to underwriting.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage processing">
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
            Processing procedures vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
