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
      'A mortgage audit is a review of loan files to verify accuracy, completeness, and compliance with regulations and investor guidelines. Audits can be performed by the lender\'s internal team, the investor (Fannie Mae, Freddie Mac, etc.), or third-party auditors. They help ensure loan quality and identify defects. Your loan amount, interest rate, and mortgage payment are typically already set when audits occur.',
  },
  {
    question: 'How is an audit different from quality control?',
    answer:
      'Quality control (QC) is typically an ongoing, sample-based review process. An audit may be broader or more targeted—for example, a regulatory audit, investor audit, or internal audit. Both aim to verify loan quality and compliance, but audits may be more formal and follow specific protocols.',
  },
  {
    question: 'Will I know if my loan is audited?',
    answer:
      'Usually not. Audits happen behind the scenes, often after closing. If an auditor finds a defect that requires borrower action (e.g., a missing signature), your lender may contact you. Most audits do not involve borrower contact.',
  },
  {
    question: 'What happens if an audit finds a problem?',
    answer:
      'The lender typically remediates the defect—correcting documentation, obtaining missing items, or addressing compliance issues. In rare cases, a significant defect could affect the loan. For most borrowers, audits are invisible and do not change their loan terms or mortgage payment.',
  },
  {
    question: 'Do audits affect my Loan Estimate or Closing Disclosure?',
    answer:
      'No. Audits typically occur after closing. Your Loan Estimate and Closing Disclosure are provided under TRID before you close. Audits review whether the lender followed the rules—they do not change the terms you already received.',
  },
  {
    question: 'What do auditors verify?',
    answer:
      'Auditors verify that documentation supports the underwriting decision, that TILA and RESPA disclosures (Loan Estimate, Closing Disclosure) were provided correctly, that the loan meets investor guidelines, and that the file is complete. They look for missing documents, calculation errors, or compliance issues.',
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

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>mortgage audit</strong> is a review of loan files to verify accuracy, completeness, and compliance.
            Lenders, investors (Fannie Mae, Freddie Mac, etc.), and sometimes third-party auditors perform audits to
            ensure loan quality and identify defects. As a borrower, you typically do not interact with audits—they
            happen behind the scenes, often after your loan has closed. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and <strong>mortgage payment</strong> are already set when audits occur.
          </p>
          <p className="text-gray-700 mb-4">
            Audits help ensure that lenders followed the rules—including TILA (Truth in Lending Act), RESPA (Real Estate
            Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure). Your <strong>Loan Estimate</strong> and
            Closing Disclosure are provided before closing; audits review whether the lender delivered them correctly and
            whether the loan file supports the <strong>underwriting</strong> decision. See{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            For most homebuyers, the audit process is invisible. You apply, receive a <strong>Loan Estimate</strong>,
            complete <strong>underwriting</strong>, close, and begin making your <strong>mortgage payment</strong>. After
            closing, the lender or investor may audit the file to verify that your income, assets, credit, and the
            property were properly documented and that <strong>closing costs</strong> and disclosures were correct.
          </p>
          <p className="text-gray-700 mb-4">
            If an audit finds a defect, the lender typically remediates it—obtaining missing documents, correcting
            errors, or addressing compliance issues. In rare cases, a significant defect could affect the loan. For most
            borrowers, audits do not change their terms. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>.
          </p>
        </section>

        {/* Design object 1: Audit types table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Mortgage Audits</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Who Performs It</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Internal audit</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender&apos;s audit team</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Review processes and loan files</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Investor audit</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Fannie Mae, Freddie Mac, etc.</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Verify loans meet purchase guidelines</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Regulatory audit</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Federal or state examiners</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Review TILA, RESPA, TRID compliance</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Third-party audit</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Independent firm</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Independent review of loan quality</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Procedures vary by lender and investor.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After your loan closes, the lender may sell it to an investor (Fannie Mae, Freddie Mac, or another
            purchaser). Before or after the sale, the lender or investor may audit a sample of loans—or all loans—to
            verify that the file is complete, that <strong>underwriting</strong> was properly documented, and that
            disclosures (including the <strong>Loan Estimate</strong> and Closing Disclosure) were provided correctly
            under TRID.
          </p>
          <p className="text-gray-700 mb-4">
            Auditors verify that documentation supports the <strong>loan amount</strong>, income, assets, credit, and
            property value. They check for calculation errors, missing signatures, and compliance with TILA and RESPA.
            Defects may require the lender to obtain missing documents, correct errors, or repurchase the loan from the
            investor. See <Link href="/mortgage/mortgage-quality-control-process" className="text-primary hover:underline font-medium">Mortgage Quality Control Process</Link> and{' '}
            <Link href="/mortgage/mortgage-compliance-checks-explained" className="text-primary hover:underline font-medium">Mortgage Compliance Checks Explained</Link>.
          </p>
          <p className="text-gray-700">
            Your <strong>mortgage payment</strong> and <strong>closing costs</strong> are disclosed on your Loan Estimate
            and Closing Disclosure before closing. Audits review whether those disclosures were accurate and timely. See{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan closes on a $300,000 loan with a 7% <strong>interest rate</strong> and <strong>mortgage payment</strong> of
            about $1,996 (P&I). The lender sells the loan to Fannie Mae. Several weeks later, Fannie Mae audits a
            sample of loans including Jordan&apos;s. The auditor reviews the file: application, income docs, asset docs,
            credit report, appraisal, <strong>Loan Estimate</strong>, Closing Disclosure.
          </p>
          <p className="text-gray-700 mb-4">
            The auditor finds that the Loan Estimate was provided within 3 business days and the Closing Disclosure at
            least 3 days before closing—TRID compliant. The file is complete. No defects. Jordan is never contacted. If
            the auditor had found a missing document, the lender would typically obtain it or remediate. Jordan&apos;s
            <strong> loan amount</strong> and <strong>mortgage payment</strong> would not change. The example is illustrative.
          </p>
        </section>

        {/* Design object 2: Borrower callout */}
        <div className="mb-10 rounded-xl border-l-4 border-sky-500 bg-sky-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-sky-900 mb-2">For Borrowers: What to Know</h3>
          <p className="text-sky-800 text-[15px] leading-relaxed">
            Audits happen after closing and typically do not involve you. Your loan amount, interest rate, and mortgage
            payment are already set. If the lender contacts you about an audit finding (e.g., a missing signature), respond
            promptly. For most borrowers, the audit process is invisible.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding that audits exist can reduce anxiety if you hear the term. Audits are a quality check—they
            help ensure that lenders followed the rules when they approved your loan and provided your <strong>Loan Estimate</strong> and
            Closing Disclosure. As a borrower, your main focus is providing accurate information during{' '}
            <strong>underwriting</strong> and reviewing your disclosures before closing.
          </p>
          <p className="text-gray-700 mb-4">
            If an auditor finds a defect that requires your action—for example, a missing signature on a document—your
            lender will contact you. Respond promptly to avoid delays. In rare cases, a significant defect could affect
            the loan. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of the Audit Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Helps ensure loan quality and compliance</li>
                <li>Verifies TILA, RESPA, TRID compliance</li>
                <li>Identifies defects for remediation</li>
                <li>Typically invisible to borrowers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Rare cases: defect could affect loan</li>
                <li>Borrower may be contacted for missing items</li>
                <li>Procedures vary by lender</li>
                <li>Occurs after closing—no advance notice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Worrying about audits before closing:</strong> Audits typically occur after closing. Focus on providing accurate information during <strong>underwriting</strong> and reviewing your <strong>Loan Estimate</strong> and Closing Disclosure.</li>
            <li><strong>Ignoring lender requests related to an audit:</strong> If the lender contacts you about a missing signature or document, respond promptly. Delays can complicate remediation.</li>
            <li><strong>Assuming audits change your terms:</strong> For most borrowers, audits do not change the <strong>loan amount</strong>, <strong>interest rate</strong>, or <strong>mortgage payment</strong>. The lender remediates defects.</li>
            <li><strong>Confusing audit with underwriting:</strong> <strong>Underwriting</strong> happens before closing and determines your approval. Audits happen after closing and verify the file.</li>
            <li><strong>Not keeping copies of your documents:</strong> If an audit finds a missing document, having your own copies can speed remediation.</li>
          </ul>
        </section>

        {/* FAQ */}
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

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Fannie Mae – Selling Guide (quality control and loan delivery)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (quality control)</li>
          </ul>
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
