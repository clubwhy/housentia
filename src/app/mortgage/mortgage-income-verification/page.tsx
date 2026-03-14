import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Income Verification: What Lenders Check | Housentia',
  description:
    'Lenders verify income through pay stubs, W-2s, tax returns, and employer contact. Learn how mortgage income verification works and what documents you need.',
  openGraph: {
    title: 'Mortgage Income Verification: What Lenders Check | Housentia',
    description: 'Understand how lenders verify income for mortgage approval.',
  },
};

const ARTICLE_SLUG = 'mortgage-income-verification';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Income Verification',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-income-verification';

const FAQ_ITEMS = [
  {
    question: 'How do lenders verify income?',
    answer:
      'Lenders verify income by reviewing pay stubs, W-2s, and tax returns. They may also contact your employer (verbal verification of employment, or VOE) to confirm employment, job title, and income.',
  },
  {
    question: 'What income documents do I need?',
    answer:
      'Typically: pay stubs (2 months), W-2s (2 years), and tax returns (2 years). Self-employed borrowers may need profit-and-loss statements and 1099s. See our Mortgage Application Documents guide for a full checklist.',
  },
  {
    question: 'What if my income is variable?',
    answer:
      'Lenders may average income over 2 years for self-employed borrowers. Bonuses and overtime may be used if consistent. Commission and variable income often require a 2-year history.',
  },
  {
    question: 'Do lenders verify employment at closing?',
    answer:
      'Many lenders perform a final verification of employment (VOE) shortly before closing to confirm you are still employed. A job change during the process can affect approval.',
  },
];

export default function MortgageIncomeVerificationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Income Verification: What Lenders Check',
    description:
      'Lenders verify income through documents and employer contact. Learn how it works and what you need.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Income Verification: What Lenders Check" breadcrumbs={BREADCRUMBS} />
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
            Lenders must verify that you have sufficient income to repay the mortgage. <strong>Income verification</strong> involves reviewing your pay stubs, W-2s, tax returns, and often contacting your employer. The process differs for employed vs. self-employed borrowers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Documents Used for Income Verification</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Pay stubs</strong> — Show current income and YTD</li>
            <li><strong>W-2s</strong> — Show annual wages and taxes withheld</li>
            <li><strong>Tax returns</strong> — Show reported income; required for self-employed</li>
            <li><strong>VOE (Verification of Employment)</strong> — Lender contacts employer to confirm job, title, income</li>
          </ul>
          <p className="text-gray-700">
            For more detail, see{' '}
            <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline font-medium">
              How Income Is Verified for a Mortgage
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">
              Mortgage Application Documents
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Self-Employed Borrowers</h2>
          <p className="text-gray-700 mb-4">
            Self-employed borrowers typically provide tax returns (2 years), profit-and-loss statements, and possibly 1099s. Lenders often average income over 2 years. See{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">
              Self-Employed Borrower Scenarios
            </Link>
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about income verification">
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
          glossary={[{ label: 'DTI', href: '/mortgage-glossary/dti' }]}
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
