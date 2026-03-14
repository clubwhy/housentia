import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage File Review Process Explained | Housentia',
  description:
    'Mortgage file review is when underwriters, processors, or QC teams examine your loan file. Learn how the mortgage file review process works and what reviewers look for.',
  openGraph: {
    title: 'Mortgage File Review Process Explained | Housentia',
    description: 'Understand the mortgage file review process.',
  },
};

const ARTICLE_SLUG = 'mortgage-file-review-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage File Review Process Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-file-review-process';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage file review?',
    answer:
      'File review is when a reviewer (underwriter, processor, or QC auditor) examines the loan file—income documents, asset statements, credit report, appraisal, title, and disclosures—to verify that the loan is complete, accurate, and meets guidelines. It happens at multiple stages: during underwriting, before closing, and sometimes after closing.',
  },
  {
    question: 'Who reviews mortgage files?',
    answer:
      'Underwriters review files to approve or condition loans. Processors may review to ensure completeness before sending to underwriting. Quality control and audit teams review files before or after closing to verify quality and compliance.',
  },
  {
    question: 'What does a reviewer look for?',
    answer:
      'Reviewers verify that income is documented and supports the application, that assets are sufficient, that the credit report is accurate, that the appraisal supports the value, that title is clear, and that disclosures were provided correctly. They also check that the loan meets investor and regulatory requirements.',
  },
  {
    question: 'How can I help my file pass review?',
    answer:
      'Provide complete, legible documents. Respond quickly to document requests. Ensure information on your application matches your documents. Inconsistencies or missing items can delay approval or trigger additional conditions. See our Mortgage Application Documents guide.',
  },
];

export default function MortgageFileReviewProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage File Review Process Explained',
    description:
      'Mortgage file review is when reviewers examine your loan file. Learn what they look for and how to help your file pass.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage File Review Process Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage file review</strong> is when a reviewer—an underwriter, processor, or quality control auditor—examines your loan file to verify that it is complete, accurate, and meets guidelines. File review happens at multiple stages: during underwriting (when the lender decides to approve your loan), before closing, and sometimes after closing. Understanding what reviewers look for can help you provide the right documents and avoid delays.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is in a Loan File</h2>
          <p className="text-gray-700 mb-4">
            A loan file typically includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Application and disclosures</li>
            <li>Income documentation (pay stubs, W-2s, tax returns)</li>
            <li>Asset documentation (bank statements)</li>
            <li>Credit report</li>
            <li>Appraisal</li>
            <li>Title report and insurance</li>
            <li>Underwriting decision and conditions</li>
          </ul>
          <p className="text-gray-700">
            See{' '}
            <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">
              Mortgage Application Documents
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stages of File Review</h2>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> — The underwriter reviews the file to approve, condition, or deny the loan. See{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">
              Mortgage Underwriting Explained
            </Link>
            . <strong>Pre-closing</strong> — The processor or closer may review to ensure all conditions are satisfied. <strong>Post-closing</strong> — Quality control or audit teams may review a sample of closed loans to verify quality and compliance. See{' '}
            <Link href="/mortgage/mortgage-quality-control-process" className="text-primary hover:underline font-medium">
              Mortgage Quality Control Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Help Your File</h2>
          <p className="text-gray-700 mb-4">
            Provide complete, legible documents. Ensure your application matches your documentation. Respond quickly to document requests. Inconsistencies or missing items can trigger conditions or delays. Having everything ready from the start can speed up the process.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about file review">
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
            File review procedures vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
