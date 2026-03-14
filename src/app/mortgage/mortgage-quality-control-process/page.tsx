import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Quality Control Process Explained | Housentia',
  description:
    'Lenders use quality control to verify loan files before and after closing. Learn how the mortgage quality control process works and what it means for borrowers.',
  openGraph: {
    title: 'Mortgage Quality Control Process Explained | Housentia',
    description: 'Understand the mortgage quality control process.',
  },
};

const ARTICLE_SLUG = 'mortgage-quality-control-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Quality Control Process Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-quality-control-process';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage quality control?',
    answer:
      'Quality control (QC) is a process lenders use to review loan files before and after closing. QC teams verify that documentation is complete, underwriting decisions are supported, and the loan meets investor and regulatory requirements. It helps lenders catch errors and reduce repurchase risk.',
  },
  {
    question: 'When does QC happen?',
    answer:
      'QC can happen pre-funding (before the loan closes) or post-funding (after closing). Pre-funding QC may review a sample of loans before they fund. Post-funding QC typically reviews a percentage of closed loans, often within 30–90 days of closing.',
  },
  {
    question: 'Does QC affect borrowers?',
    answer:
      'Most borrowers never interact with QC. If QC finds an issue before closing, the lender may request additional documentation or make corrections—which could delay closing. Post-funding QC usually does not affect borrowers unless a significant defect is found, which is rare.',
  },
  {
    question: 'Why do lenders do QC?',
    answer:
      'Lenders perform QC to ensure loan quality, meet investor requirements, and reduce the risk of buybacks (when an investor requires the lender to repurchase a defective loan). QC also supports compliance and helps identify training needs.',
  },
];

export default function MortgageQualityControlProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Quality Control Process Explained',
    description:
      'Lenders use quality control to verify loan files. Learn how the process works and what it means for borrowers.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Quality Control Process Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage quality control (QC)</strong> is a process lenders use to review loan files before and after closing. QC teams verify that documentation is complete, underwriting decisions are supported, and the loan meets investor and regulatory requirements. As a borrower, you typically do not interact with QC—but understanding it helps you see how lenders ensure loan quality.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What QC Reviews</h2>
          <p className="text-gray-700 mb-4">
            QC teams typically review:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Income and asset documentation</li>
            <li>Credit report and creditworthiness</li>
            <li>Appraisal and property valuation</li>
            <li>Title and legal documents</li>
            <li>Disclosures (Loan Estimate, Closing Disclosure)</li>
            <li>Compliance with investor guidelines</li>
          </ul>
          <p className="text-gray-700">
            See{' '}
            <Link href="/mortgage/mortgage-file-review-process" className="text-primary hover:underline font-medium">
              Mortgage File Review Process
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-compliance-checks-explained" className="text-primary hover:underline font-medium">
              Mortgage Compliance Checks Explained
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Funding vs. Post-Funding QC</h2>
          <p className="text-gray-700 mb-4">
            <strong>Pre-funding QC</strong> reviews loans before they close. Lenders may select a sample of loans for review. If issues are found, the lender may request additional documentation or correct errors before funding. <strong>Post-funding QC</strong> reviews closed loans, often within 30–90 days. Investors often require post-funding QC as part of their purchase agreements. Defects found post-funding can result in lender remediation but rarely affect the borrower&apos;s loan terms.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about quality control">
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
            QC procedures vary by lender and investor.
          </p>
        </section>
      </main>
    </div>
  );
}
