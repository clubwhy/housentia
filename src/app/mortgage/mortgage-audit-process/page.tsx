import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Audit Process Explained | Housentia',
  description:
    'Lenders and investors audit mortgage files to verify accuracy and compliance. Learn how the mortgage audit process works and what it means for borrowers.',
  openGraph: {
    title: 'Mortgage Audit Process Explained | Housentia',
    description: 'Understand the mortgage audit process.',
  },
};

const ARTICLE_SLUG = 'mortgage-audit-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Audit Process Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-audit-process';

const FAQ_ITEMS = [
  {
    question: 'What is a mortgage audit?',
    answer:
      'A mortgage audit is a review of loan files to verify accuracy, completeness, and compliance with regulations and investor guidelines. Audits can be performed by the lender\'s internal team, the investor (Fannie Mae, Freddie Mac, etc.), or third-party auditors. They help ensure loan quality and identify defects.',
  },
  {
    question: 'How is an audit different from quality control?',
    answer:
      'Quality control (QC) is typically an ongoing, sample-based review process. An audit may be broader or more targeted—for example, a regulatory audit, investor audit, or internal audit. Both aim to verify loan quality and compliance, but audits may be more formal and follow specific protocols.',
  },
  {
    question: 'Will I know if my loan is audited?',
    answer:
      'Usually not. Audits happen behind the scenes. If an auditor finds a defect that requires borrower action (e.g., a missing signature), your lender may contact you. Most audits do not involve borrower contact.',
  },
  {
    question: 'What happens if an audit finds a problem?',
    answer:
      'The lender typically remediates the defect—correcting documentation, obtaining missing items, or addressing compliance issues. In rare cases, a significant defect could affect the loan. For most borrowers, audits are invisible and do not change their loan terms.',
  },
];

export default function MortgageAuditProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Audit Process Explained',
    description:
      'Lenders and investors audit mortgage files to verify accuracy and compliance. Learn how it works.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Audit Process Explained" breadcrumbs={BREADCRUMBS} />
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
            A <strong>mortgage audit</strong> is a review of loan files to verify accuracy, completeness, and compliance. Lenders, investors (Fannie Mae, Freddie Mac, etc.), and sometimes third-party auditors perform audits to ensure loan quality and identify defects. As a borrower, you typically do not interact with audits—they happen behind the scenes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Audits</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Internal audit</strong> — The lender&apos;s audit team reviews processes and loan files</li>
            <li><strong>Investor audit</strong> — Fannie Mae, Freddie Mac, or other investors review loans they have purchased</li>
            <li><strong>Regulatory audit</strong> — Examiners review lender compliance with federal and state rules</li>
            <li><strong>Third-party audit</strong> — An independent firm reviews loan files</li>
          </ul>
          <p className="text-gray-700">
            See{' '}
            <Link href="/mortgage/mortgage-quality-control-process" className="text-primary hover:underline font-medium">
              Mortgage Quality Control Process
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-compliance-checks-explained" className="text-primary hover:underline font-medium">
              Mortgage Compliance Checks Explained
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Auditors Look For</h2>
          <p className="text-gray-700 mb-4">
            Auditors verify that documentation supports the underwriting decision, that disclosures were provided correctly, that the loan meets investor and regulatory requirements, and that the file is complete. Defects may include missing documents, calculation errors, or compliance issues. The lender typically remediates defects.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage audit">
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
            Audit procedures vary by lender and investor.
          </p>
        </section>
      </main>
    </div>
  );
}
