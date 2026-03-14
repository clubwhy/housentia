import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Compliance Checks Explained | Housentia',
  description:
    'Lenders perform compliance checks to ensure loans meet federal and state rules. Learn about TILA, RESPA, TRID, and other mortgage compliance requirements.',
  openGraph: {
    title: 'Mortgage Compliance Checks Explained | Housentia',
    description: 'Understand mortgage compliance checks and how they protect borrowers.',
  },
};

const ARTICLE_SLUG = 'mortgage-compliance-checks-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Compliance Checks Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-compliance-checks-explained';

const FAQ_ITEMS = [
  {
    question: 'What are mortgage compliance checks?',
    answer:
      'Compliance checks ensure that loans and processes meet federal and state regulations. Lenders verify that disclosures (Loan Estimate, Closing Disclosure) are provided on time, that fees are within tolerance, and that the loan meets ability-to-repay and other rules. These checks protect borrowers and reduce lender risk.',
  },
  {
    question: 'What is TRID?',
    answer:
      'TRID (TILA-RESPA Integrated Disclosure) is the rule that requires the Loan Estimate (within 3 business days of application) and Closing Disclosure (at least 3 business days before closing). It also sets tolerance rules for certain fees. TRID helps borrowers compare offers and understand costs.',
  },
  {
    question: 'What is the ability-to-repay rule?',
    answer:
      'The ability-to-repay (ATR) rule requires lenders to make a reasonable, good-faith determination that the borrower can repay the loan. Lenders evaluate income, assets, debt, and credit. Qualified Mortgages (QM) are a category of loans that meet ATR and other criteria.',
  },
  {
    question: 'Why do compliance checks matter to borrowers?',
    answer:
      'Compliance checks ensure you receive required disclosures on time, that fees are disclosed accurately, and that the loan meets regulatory standards. They support transparency and consumer protection. If a lender fails compliance, it can delay closing or require corrective action.',
  },
];

export default function MortgageComplianceChecksExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Compliance Checks Explained',
    description:
      'Lenders perform compliance checks to ensure loans meet federal and state rules. Learn how they protect borrowers.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Compliance Checks Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage compliance checks</strong> ensure that loans and processes meet federal and state regulations. Lenders (and their compliance teams) verify that disclosures are provided on time, that fees are within allowed tolerances, and that the loan meets ability-to-repay and other rules. As a borrower, you benefit from these checks—they support transparency and consumer protection.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Regulations</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>TILA (Truth in Lending Act)</strong> — Requires disclosure of loan terms, APR, and costs. Governs the right of rescission for refinances.</li>
            <li><strong>RESPA (Real Estate Settlement Procedures Act)</strong> — Governs closing disclosures, prohibits kickbacks, and requires servicing disclosures.</li>
            <li><strong>TRID</strong> — Combines TILA and RESPA into the Loan Estimate and Closing Disclosure. Sets timing and tolerance rules.</li>
            <li><strong>ATR (Ability to Repay)</strong> — Requires lenders to verify that borrowers can repay the loan. QM loans meet ATR criteria.</li>
          </ul>
          <p className="text-gray-700">
            See{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">
              What Is a Loan Estimate?
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">
              What Is a Closing Disclosure?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Lenders Check</h2>
          <p className="text-gray-700 mb-4">
            Compliance teams verify that the Loan Estimate was sent within 3 business days, that the Closing Disclosure was sent at least 3 business days before closing, that fees are within tolerance, that the loan meets QM/ATR criteria (if applicable), and that state-specific rules are followed. Issues can delay closing or require revised disclosures.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about compliance checks">
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
          glossary={[{ label: 'TILA', href: '/mortgage-glossary/tila' }, { label: 'RESPA', href: '/mortgage-glossary/respa' }]}
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
            Compliance requirements are complex and change over time. Consult a professional for specific questions.
          </p>
        </section>
      </main>
    </div>
  );
}
