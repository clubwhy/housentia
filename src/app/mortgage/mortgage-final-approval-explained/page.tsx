import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Final Approval Explained | Housentia',
  description:
    'Final approval (clear to close) means all conditions are satisfied and you can proceed to closing. Learn what final approval means and what happens next.',
  openGraph: {
    title: 'Mortgage Final Approval Explained | Housentia',
    description: 'Understand mortgage final approval and clear to close.',
  },
};

const ARTICLE_SLUG = 'mortgage-final-approval-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Final Approval Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-final-approval-explained';

const FAQ_ITEMS = [
  {
    question: 'What is final approval?',
    answer:
      'Final approval (often called "clear to close") means the lender has approved your loan and all conditions have been satisfied. You can proceed to closing. You will receive the Closing Disclosure and schedule the signing.',
  },
  {
    question: 'What is the difference between conditional and final approval?',
    answer:
      'Conditional approval means you are approved subject to conditions (appraisal, title, documents). Final approval means those conditions have been met and the loan is approved for closing.',
  },
  {
    question: 'Can final approval be revoked?',
    answer:
      'Yes. If your financial situation changes before closing (new debt, job change, large deposits), the lender may perform a final check and could revoke approval. Avoid major financial changes between approval and closing.',
  },
  {
    question: 'When do I get the Closing Disclosure?',
    answer:
      'You must receive the Closing Disclosure at least 3 business days before closing. It shows the final loan terms and costs. Review it and compare to your Loan Estimate.',
  },
];

export default function MortgageFinalApprovalExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Final Approval Explained',
    description:
      'Final approval (clear to close) means all conditions are satisfied. Learn what it means and what happens next.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Final Approval Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Final approval</strong> (often called <strong>clear to close</strong>) means the lender has approved your loan and all conditions have been satisfied. You can proceed to closing. You will receive the Closing Disclosure and schedule the signing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">From Conditional to Final Approval</h2>
          <p className="text-gray-700 mb-4">
            After conditional approval, you (and the lender) work to satisfy the conditions—appraisal, title, additional documents. Once everything is complete, the underwriter issues clear to close. That is final approval.
          </p>
          <p className="text-gray-700">
            See{' '}
            <Link href="/mortgage/mortgage-conditional-approval-explained" className="text-primary hover:underline font-medium">
              Mortgage Conditional Approval Explained
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">
              Mortgage Approval Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens After Final Approval</h2>
          <p className="text-gray-700 mb-4">
            The lender prepares the Closing Disclosure and sends it to you at least 3 business days before closing. You review it, compare it to your Loan Estimate, and schedule closing. At closing, you sign the documents and the lender funds the loan. See{' '}
            <Link href="/mortgage/mortgage-funding-process" className="text-primary hover:underline font-medium">
              Mortgage Funding Process
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/what-happens-at-closing" className="text-primary hover:underline font-medium">
              What Happens at Closing
            </Link>
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about final approval">
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
            Procedures vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
