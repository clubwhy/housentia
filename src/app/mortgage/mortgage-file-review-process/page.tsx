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
      'File review is when a reviewer (underwriter, processor, or QC auditor) examines the loan file—income documents, asset statements, credit report, appraisal, title, and disclosures—to verify that the loan is complete, accurate, and meets guidelines. It happens at multiple stages: during underwriting (when your loan amount, interest rate, and mortgage payment are set), before closing, and sometimes after closing.',
  },
  {
    question: 'Who reviews mortgage files?',
    answer:
      'Underwriters review files to approve or condition loans. Processors may review to ensure completeness before sending to underwriting. Quality control and audit teams review files before or after closing to verify quality and compliance with TILA, RESPA, and TRID.',
  },
  {
    question: 'What does a reviewer look for?',
    answer:
      'Reviewers verify that income is documented and supports the application, that assets are sufficient, that the credit report is accurate, that the appraisal supports the value, that title is clear, and that disclosures (Loan Estimate, Closing Disclosure) were provided correctly under TRID. They also check that the loan meets investor and regulatory requirements.',
  },
  {
    question: 'How can I help my file pass review?',
    answer:
      'Provide complete, legible documents. Respond quickly to document requests. Ensure information on your application matches your documents. Inconsistencies or missing items can delay approval or trigger additional conditions. See our Mortgage Application Documents guide.',
  },
  {
    question: 'Does file review affect my Loan Estimate or closing costs?',
    answer:
      'File review verifies the information used to approve you. Your Loan Estimate and closing costs are based on your application. If review reveals different income, assets, or property value, the lender may revise the loan amount or terms. Review does not change your interest rate directly—it confirms the file supports the approval.',
  },
  {
    question: 'Will I know when my file is reviewed?',
    answer:
      'You typically do not see the review process. You receive document requests, conditions, and approval or denial. Underwriting review happens before conditional approval. Pre-closing review happens before clear to close. Post-closing QC happens after you close—you usually are not contacted unless a defect requires your action.',
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

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage file review</strong> is when a reviewer—an underwriter, processor, or quality control
            auditor—examines your loan file to verify that it is complete, accurate, and meets guidelines. File review
            happens at multiple stages: during <strong>underwriting</strong> (when the lender approves your{' '}
            <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong>), before
            closing, and sometimes after closing.
          </p>
          <p className="text-gray-700 mb-4">
            Reviewers verify that your <strong>Loan Estimate</strong> and Closing Disclosure were provided correctly
            under TRID (TILA-RESPA Integrated Disclosure), that income and assets support your application, and that the
            appraisal and title are satisfactory. Understanding what reviewers look for can help you provide the right
            documents and avoid delays. See{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Your loan file contains everything the lender uses to approve you: application, income docs, asset docs,
            credit report, appraisal, title, and disclosures. The underwriter reviews this file to decide whether to
            approve, condition, or deny. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and{' '}
            <strong>closing costs</strong> are based on the information in the file.
          </p>
          <p className="text-gray-700 mb-4">
            If the reviewer finds missing or inconsistent information, you may receive conditions—requests for
            additional documents or explanations. Once conditions are satisfied, the file is reviewed again. TILA and
            RESPA (via TRID) require that your <strong>Loan Estimate</strong> and Closing Disclosure be provided on
            time. Reviewers verify compliance. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: Loan file contents table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is in a Loan File</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Component</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Reviewers Check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Application & disclosures</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Completeness; TRID timing (Loan Estimate, Closing Disclosure)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Income documentation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Supports stated income; VOE if required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Asset documentation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Sufficient for down payment, reserves, closing costs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Credit report</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Accuracy; supports qualification</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Value supports loan amount; meets guidelines</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Title</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Clear; no liens or defects</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-3">
            See <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting review:</strong> The underwriter examines the file to approve, condition, or deny. They
            verify income supports your DTI, assets cover down payment and <strong>closing costs</strong>, credit meets
            guidelines, and the appraisal supports the <strong>loan amount</strong>. If approved, you receive conditional
            approval with a condition list.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Pre-closing review:</strong> The processor or closer ensures all conditions are satisfied before
            issuing clear to close. They verify the Closing Disclosure was sent at least 3 days before closing (TRID)
            and that fees are within tolerance. <strong>Post-closing review:</strong> Quality control or audit teams may
            review a sample of closed loans to verify compliance with TILA, RESPA, and investor guidelines. See{' '}
            <Link href="/mortgage/mortgage-quality-control-process" className="text-primary hover:underline font-medium">Mortgage Quality Control Process</Link> and{' '}
            <Link href="/mortgage/mortgage-audit-process" className="text-primary hover:underline font-medium">Mortgage Audit Process</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan applies for a $280,000 loan at 6.5% <strong>interest rate</strong>. The processor gathers the file:
            application, pay stubs, W-2s, bank statements, credit report. The underwriter reviews and finds the bank
            statement is 45 days old. Condition: updated bank statement. Jordan submits it within 2 days.
          </p>
          <p className="text-gray-700 mb-4">
            The underwriter reviews again—file is complete. Conditional approval issued. Appraisal and title clear.
            Pre-closing review confirms all conditions satisfied. Closing Disclosure sent 4 days before closing—TRID
            compliant. Jordan closes. The <strong>mortgage payment</strong> and <strong>Loan Estimate</strong> were set
            during underwriting. The example is illustrative. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 2: Borrower tip callout */}
        <div className="mb-10 rounded-xl border-l-4 border-lime-500 bg-lime-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-lime-900 mb-2">Tip: Help Your File Pass Review</h3>
          <p className="text-lime-800 text-[15px] leading-relaxed">
            Provide complete, legible documents. Ensure your application matches your documentation. Respond quickly to
            document requests. Inconsistencies or missing items can trigger conditions or delays. Having everything
            ready from the start can speed up <strong>underwriting</strong> and help you reach conditional approval
            faster.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding file review helps you know why lenders request documents and what happens behind the scenes.
            First-time buyers may not realize that multiple people review the file—processor, underwriter, and sometimes
            QC. Each review ensures the loan is complete and compliant.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are
            set during underwriting based on the file. Providing accurate, complete information from the start reduces
            conditions and delays. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/mortgage-conditional-approval-explained" className="text-primary hover:underline font-medium">Mortgage Conditional Approval Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of File Review</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Verifies file completeness and accuracy</li>
                <li>Ensures TILA, RESPA, TRID compliance</li>
                <li>Catches errors before closing</li>
                <li>Supports responsible lending</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Conditions can delay approval</li>
                <li>Missing docs extend timeline</li>
                <li>Inconsistencies trigger more requests</li>
                <li>Borrowers typically do not see the process</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Providing outdated documents:</strong> Lenders typically want recent pay stubs (30–60 days) and bank statements. Outdated docs can trigger conditions.</li>
            <li><strong>Application not matching documentation:</strong> If your application says $X income but your pay stub shows $Y, the reviewer will flag it. Ensure consistency.</li>
            <li><strong>Delaying document submission:</strong> Respond quickly to condition requests. Delays push back conditional approval and closing.</li>
            <li><strong>Assuming the file is complete when it is not:</strong> The lender will request missing items. Provide everything they ask for—do not assume something can be skipped.</li>
            <li><strong>Making financial changes during review:</strong> Avoid large purchases, new credit, or withdrawals that could affect your file. The lender may re-verify.</li>
          </ul>
        </section>

        {/* FAQ */}
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

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Fannie Mae – Selling Guide (underwriting and file requirements)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (underwriting)</li>
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
            File review procedures vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
