import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Underwriting Explained: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Underwriting is when the lender evaluates your application, credit, income, and the property. Learn what underwriters look for and what to expect.',
  openGraph: {
    title: 'Mortgage Underwriting Explained: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage underwriting and what lenders evaluate.',
  },
};

const ARTICLE_SLUG = 'mortgage-underwriting-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Underwriting Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-underwriting-explained';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage underwriting?',
    answer:
      'Underwriting is the process where the lender evaluates your credit, income, assets, debt, and the property to decide whether to approve the loan and on what terms. Your loan amount, interest rate, and mortgage payment are set in the Loan Estimate (TRID) before underwriting—underwriting verifies you qualify for those terms.',
  },
  {
    question: 'How long does underwriting take?',
    answer:
      'Typically a few days to a couple of weeks, depending on the lender, loan type, and whether additional documents are requested. Your Loan Estimate is provided within 3 business days of application; underwriting continues after that.',
  },
  {
    question: 'What do underwriters look for?',
    answer:
      'Underwriters evaluate the 3 C\'s: Credit (score and history), Capacity (income and DTI), and Collateral (property value and condition via appraisal). They also verify assets for down payment and closing costs. See What Is DTI and What Is LTV.',
  },
  {
    question: 'What if the underwriter requests more documents?',
    answer:
      'Conditional approval often includes a list of conditions. Provide the requested documents promptly to avoid delays. Each day you wait can push your closing date. Avoid major financial changes during underwriting.',
  },
  {
    question: 'Does underwriting change my Loan Estimate or closing costs?',
    answer:
      'Your Loan Estimate (TRID) sets your interest rate, loan amount, mortgage payment, and closing costs. Underwriting verifies you qualify—it does not change those terms. If you are denied or need to reapply with different terms, you would receive a new Loan Estimate.',
  },
  {
    question: 'What is conditional approval?',
    answer:
      'Conditional approval means the underwriter approves the loan subject to you providing additional documents or meeting conditions (e.g., explanation letter, updated bank statement). Once conditions are satisfied, you may receive clear-to-close. See Mortgage Conditional Approval Explained.',
  },
];

export default function MortgageUnderwritingExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Underwriting Explained: A Guide for U.S. Homebuyers',
    description:
      'Underwriting is when the lender evaluates your application. This guide explains what underwriters look for and what to expect during the process.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Underwriting Explained: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage underwriting</strong> is the process where the lender evaluates your loan application to
            decide whether to approve it and on what terms. The underwriter reviews your credit, income, assets, debt,
            and the property to assess risk. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and{' '}
            <strong>mortgage payment</strong> are set in your <strong>Loan Estimate</strong> (TRID) within 3 business days
            of application—underwriting verifies you qualify for those terms.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding underwriting helps first-time homebuyers know what to expect after submitting an application,
            why the lender may request additional documents, and what factors influence the decision. See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">Mortgage Application Process</Link> and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            After you apply, the lender provides a <strong>Loan Estimate</strong> (TRID) with your{' '}
            <strong>interest rate</strong>, <strong>loan amount</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong>. Processing gathers documents; <strong>underwriting</strong> evaluates them.
            The underwriter checks your <strong>DTI</strong> (debt-to-income), <strong>LTV</strong> (loan-to-value),
            credit, income, assets, and the property (appraisal, title). The underwriter approves, denies, or issues
            conditional approval.
          </p>
          <p className="text-gray-700 mb-4">
            Underwriting does not change your terms—it verifies you meet the program guidelines. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: 3 C's table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: The 3 C&apos;s of Underwriting</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Underwriters Review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Credit</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Score, payment history, existing debt; affects rate and approval</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Capacity</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Income, DTI; ability to make mortgage payment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Collateral</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal, LTV; property value and condition</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Assets</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Bank statements; down payment, closing costs, reserves</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your Loan Estimate (TRID) sets your terms. Underwriting verifies you qualify.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After you submit your application and documents, the lender assigns an underwriter. The underwriter reviews
            your credit report, pay stubs, W-2s, tax returns, bank statements, and the appraisal. They calculate your{' '}
            <strong>DTI</strong> (monthly debt ÷ gross income) and <strong>LTV</strong> (loan amount ÷ property value).
            They verify you have funds for the down payment and <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            The underwriter may approve, deny, or issue conditional approval. Conditional approval means you are
            approved subject to providing additional documents (e.g., explanation letter, updated bank statement). Once
            conditions are satisfied, you may receive clear-to-close. Your <strong>interest rate</strong> and{' '}
            <strong>mortgage payment</strong> were set in the <strong>Loan Estimate</strong>—underwriting does not
            change them. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan applies and receives the <strong>Loan Estimate</strong>: $280,000 <strong>loan amount</strong>, 6.5%{' '}
            <strong>interest rate</strong>, $1,770 <strong>mortgage payment</strong> (P&I), $9,200{' '}
            <strong>closing costs</strong>. Processing sends the file to <strong>underwriting</strong>. The underwriter
            verifies Jordan&apos;s income, assets, credit, and the appraisal. DTI is 36%; LTV is 85%.
          </p>
          <p className="text-gray-700 mb-4">
            The underwriter issues conditional approval: provide a letter explaining a 2-month employment gap. Jordan
            submits the letter within 2 days. The underwriter clears the loan. Jordan receives clear-to-close. The
            example is illustrative. See{' '}
            <Link href="/mortgage/mortgage-conditional-approval-explained" className="text-primary hover:underline font-medium">Mortgage Conditional Approval Explained</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-blue-500 bg-blue-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Key Takeaway</h3>
          <p className="text-blue-800 text-[15px] leading-relaxed">
            <strong>Underwriting</strong> verifies you qualify for the terms in your <strong>Loan Estimate</strong> (TRID).
            The underwriter reviews credit, <strong>DTI</strong>, <strong>LTV</strong>, income, assets, and the property.
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> do not
            change. Respond quickly to document requests. Avoid major financial changes during underwriting.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers often wonder what happens after they apply. Underwriting is the phase where the lender
            decides whether to approve the loan. Conditional approval is common—the underwriter may need an explanation
            letter, updated bank statement, or other document. Responding within 24–48 hours helps keep your closing on
            track.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) set your terms before underwriting. Underwriting verifies you
            meet the guidelines. Do not make large purchases, open new credit, or change jobs during underwriting—the
            lender may re-verify. See{' '}
            <Link href="/mortgage/mortgage-processing-explained" className="text-primary hover:underline font-medium">Mortgage Processing Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of the Underwriting Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Loan Estimate sets terms before underwriting</li>
                <li>Structured evaluation (3 C&apos;s)</li>
                <li>Conditional approval gives you a path to clear</li>
                <li>Investor guidelines provide consistency</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Document requests can be frequent</li>
                <li>Delays if you respond slowly</li>
                <li>Major financial changes can affect approval</li>
                <li>Conditional approval is common</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Delaying document responses:</strong> Each day you wait adds to the timeline. Conditional approval often requires letters, updated statements, or other items. Respond within 24–48 hours when possible.</li>
            <li><strong>Making major financial changes during underwriting:</strong> Large purchases, new credit, or job changes can trigger re-verification or affect your approval. Avoid until after closing. The lender may pull credit again before funding.</li>
            <li><strong>Assuming underwriting changes your terms:</strong> Your loan amount, interest rate, mortgage payment, and closing costs were set in the Loan Estimate (TRID). Underwriting verifies you qualify—it does not change those terms.</li>
            <li><strong>Ignoring conditional approval conditions:</strong> Read the list carefully. Provide every item requested. Missing one can delay or derail your approval. If you cannot provide something, tell your lender immediately.</li>
            <li><strong>Not understanding DTI and LTV:</strong> Underwriters use these to evaluate risk. A high DTI or LTV can limit your loan amount or cause denial. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link> before applying.</li>
            <li><strong>Applying with incomplete documents:</strong> Gather pay stubs, W-2s, tax returns, and bank statements before applying. Incomplete files sit in the queue. See <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about underwriting">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage process and underwriting</li>
            <li>Fannie Mae – Selling Guide (underwriting guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (underwriting)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Loan Qualification Comparison', href: '/tools/loan-qualification-comparison' }}
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
            Underwriting criteria vary by lender and loan program.
          </p>
        </section>
      </main>
    </div>
  );
}
