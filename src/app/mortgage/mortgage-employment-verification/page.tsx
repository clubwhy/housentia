import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Employment Verification: What Lenders Check | Housentia',
  description:
    'Lenders verify employment through pay stubs, W-2s, and direct contact with your employer. Learn how mortgage employment verification works and what to expect.',
  openGraph: {
    title: 'Mortgage Employment Verification: What Lenders Check | Housentia',
    description: 'Understand how lenders verify employment for mortgage approval.',
  },
};

const ARTICLE_SLUG = 'mortgage-employment-verification';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Employment Verification',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-employment-verification';

const FAQ_ITEMS = [
  {
    question: 'How do lenders verify employment?',
    answer:
      'Lenders verify employment by reviewing pay stubs and W-2s, and often by contacting your employer directly. This is called a Verification of Employment (VOE). They may call your employer or use a third-party service.',
  },
  {
    question: 'What is a VOE?',
    answer:
      'VOE stands for Verification of Employment. The lender (or a service) contacts your employer to confirm you work there, your job title, how long you have been employed, and your income. This can be verbal or written.',
  },
  {
    question: 'Do lenders verify employment right before closing?',
    answer:
      'Yes. Many lenders perform a final VOE shortly before closing to confirm you are still employed. A job change or loss of job during the process can affect or delay approval.',
  },
  {
    question: 'What if I just started a new job?',
    answer:
      'Lenders typically prefer 2 years of employment history. A new job in the same field may be acceptable. A recent job change in a different industry can be harder. Some loan programs are more flexible. Discuss with your lender.',
  },
];

export default function MortgageEmploymentVerificationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Employment Verification: What Lenders Check',
    description:
      'Lenders verify employment through pay stubs, W-2s, and employer contact. Learn how it works.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Employment Verification: What Lenders Check" breadcrumbs={BREADCRUMBS} />
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
            Lenders verify your <strong>employment</strong> to confirm you have a stable income. They do this by reviewing pay stubs and W-2s, and often by contacting your employer directly (Verification of Employment, or VOE). A job change during the process can affect approval.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Employment Is Verified</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Pay stubs</strong> — Show current employer, pay frequency, and income</li>
            <li><strong>W-2s</strong> — Show employer and annual wages</li>
            <li><strong>VOE (Verification of Employment)</strong> — Lender or third party contacts employer to confirm job, title, tenure, and income</li>
          </ul>
          <p className="text-gray-700">
            The VOE may be verbal (phone call) or written (form or letter). Some employers use a centralized service for verification requests.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Final VOE Before Closing</h2>
          <p className="text-gray-700 mb-4">
            Many lenders perform a final verification of employment shortly before closing—often within 10 days of the closing date. If you have changed jobs or lost your job, you must inform your lender. Approval may be withdrawn or delayed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Self-Employed Borrowers</h2>
          <p className="text-gray-700 mb-4">
            Self-employed borrowers do not have a traditional employer to contact. Lenders verify income through tax returns, profit-and-loss statements, and business documents. See{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">
              Self-Employed Borrower Scenarios
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-income-verification" className="text-primary hover:underline font-medium">
              Mortgage Income Verification
            </Link>
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about employment verification">
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
            Verification requirements vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
