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
      'Final approval (often called "clear to close") means the lender has approved your loan and all conditions have been satisfied. You can proceed to closing. Your loan amount, interest rate, and mortgage payment are set. You will receive the Closing Disclosure under TRID and schedule the signing.',
  },
  {
    question: 'What is the difference between conditional and final approval?',
    answer:
      'Conditional approval means you are approved subject to conditions (appraisal, title, documents). Final approval means those conditions have been met and the loan is approved for closing. See our Mortgage Conditional Approval Explained guide.',
  },
  {
    question: 'Can final approval be revoked?',
    answer:
      'Yes. If your financial situation changes before closing (new debt, job change, large deposits), the lender may perform a final check and could revoke approval. Avoid major financial changes between approval and closing.',
  },
  {
    question: 'When do I get the Closing Disclosure?',
    answer:
      'You must receive the Closing Disclosure at least 3 business days before closing under TRID. It shows the final loan terms, closing costs, and mortgage payment. Review it and compare to your Loan Estimate.',
  },
  {
    question: 'Does final approval change my interest rate or Loan Estimate?',
    answer:
      'No. Final approval confirms that all conditions are satisfied—it does not change your loan amount, interest rate, or closing costs. Your terms were set at conditional approval. The Closing Disclosure reflects those final numbers.',
  },
  {
    question: 'How long after final approval until I close?',
    answer:
      'Closing is typically scheduled within days or a week of clear to close. The 3-day TRID rule requires the Closing Disclosure at least 3 business days before closing. Your lender or settlement agent will coordinate the date.',
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

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Final approval</strong> (often called <strong>clear to close</strong>) means the lender has approved
            your loan and all conditions have been satisfied. You can proceed to closing. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and <strong>mortgage payment</strong> are set. You will receive the Closing
            Disclosure under TRID (TILA-RESPA Integrated Disclosure) and schedule the signing.
          </p>
          <p className="text-gray-700 mb-4">
            Final approval is the last step before closing. The lender has verified income, assets, credit, appraisal,
            and title. Your <strong>Loan Estimate</strong> and <strong>closing costs</strong> are finalized on the
            Closing Disclosure.             See{' '}
            <Link href="/mortgage/mortgage-conditional-approval-explained" className="text-primary hover:underline font-medium">Mortgage Conditional Approval Explained</Link>,{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link>, and{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            After <strong>underwriting</strong> issues conditional approval, you work to satisfy the conditions—appraisal
            satisfactory, title clear, additional documents. Once everything is complete, the underwriter issues clear to
            close. That is final approval. No more conditions. You can schedule closing.
          </p>
          <p className="text-gray-700 mb-4">
            Your terms do not change at final approval. The <strong>loan amount</strong>, <strong>interest rate</strong>,
            and <strong>closing costs</strong> were set at conditional approval. Final approval confirms the file is
            complete and compliant. Under TRID, you receive the Closing Disclosure at least 3 business days before
            closing. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Design object 1: Approval stages table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">From Application to Final Approval</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Stage</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Application</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You apply; receive Loan Estimate within 3 days (TRID)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Underwriting</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender reviews file; approves, conditions, or denies</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Conditional approval</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Approved subject to conditions (appraisal, title, docs)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Final approval (clear to close)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">All conditions satisfied; ready for closing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing Disclosure 3+ days before; sign; lender funds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Procedures vary by lender.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After conditional approval, you submit the requested documents. The lender orders the appraisal and title
            work. The processor gathers everything and sends the file back to the underwriter. Once the underwriter
            confirms all conditions are satisfied, they issue clear to close—final approval.
          </p>
          <p className="text-gray-700 mb-4">
            The lender prepares the Closing Disclosure and sends it at least 3 business days before closing (TRID
            rule). You review it, compare to your <strong>Loan Estimate</strong>, and schedule closing. At closing, you
            sign the documents and pay cash to close. The lender funds the <strong>loan amount</strong>. Your first{' '}
            <strong>mortgage payment</strong> is typically due about a month later. See{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>,{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>,{' '}
            <Link href="/mortgage/mortgage-funding-process" className="text-primary hover:underline font-medium">Mortgage Funding Process</Link>, and{' '}
            <Link href="/mortgage/what-happens-at-closing" className="text-primary hover:underline font-medium">What Happens at Closing</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex receives conditional approval on a $265,000 loan at 6.75% <strong>interest rate</strong>. Conditions:
            appraisal satisfactory, title clear, updated bank statement. Alex submits the bank statement. The appraisal
            supports the value. Title clears. The underwriter reviews and issues clear to close—final approval.
          </p>
          <p className="text-gray-700 mb-4">
            The lender sends the Closing Disclosure 4 days before closing. Alex reviews it; the <strong>loan amount</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong> match the <strong>Loan Estimate</strong>.
            Alex closes on schedule. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 2: Avoid changes callout */}
        <div className="mb-10 rounded-xl border-l-4 border-orange-500 bg-orange-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-orange-900 mb-2">Important: Avoid Financial Changes</h3>
          <p className="text-orange-800 text-[15px] leading-relaxed">
            Between final approval and closing, avoid large purchases, new credit, job changes, or large withdrawals.
            The lender may perform a final check (e.g., credit pull, employment verification). Significant changes can
            result in revoked approval. Stay steady until you close.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Final approval is a milestone—you are close to the finish line. Understanding what it means helps you know
            what to expect next: Closing Disclosure, scheduling, and signing. First-time buyers may not realize that
            approval can be revoked if their situation changes. Avoid major financial moves until you close.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are
            locked in. The Closing Disclosure confirms them. Use the 3-day period to review and ask questions. See{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Final Approval</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>All conditions satisfied—ready to close</li>
                <li>Terms are set (loan amount, rate, payment)</li>
                <li>Closing Disclosure confirms final numbers</li>
                <li>Clear path to signing and funding</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Approval can be revoked before closing</li>
                <li>Financial changes may trigger re-verification</li>
                <li>3-day TRID rule applies—plan closing date</li>
                <li>Still need to sign and fund</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Making large purchases before closing:</strong> A new car or furniture on credit can affect your DTI. The lender may re-pull credit or revoke approval.</li>
            <li><strong>Changing jobs before closing:</strong> A job change can delay or derail approval. The lender may require a new VOE or re-underwrite. See <Link href="/mortgage/mortgage-employment-verification" className="text-primary hover:underline font-medium">Mortgage Employment Verification</Link>.</li>
            <li><strong>Not reviewing the Closing Disclosure:</strong> Use the 3-day period to compare it to your <strong>Loan Estimate</strong>. Check <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>closing costs</strong>, and <strong>mortgage payment</strong>.</li>
            <li><strong>Assuming final approval cannot be revoked:</strong> It can. Avoid financial changes. If something changes, inform your lender immediately.</li>
            <li><strong>Depleting reserves or making large withdrawals:</strong> The lender may re-verify assets. Large withdrawals can trigger questions or affect approval.</li>
          </ul>
        </section>

        {/* FAQ */}
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

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Fannie Mae – Selling Guide (underwriting and closing)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (loan delivery)</li>
          </ul>
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
