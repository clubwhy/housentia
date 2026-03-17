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
      'Lenders verify employment by reviewing pay stubs and W-2s, and often by contacting your employer directly (Verification of Employment, or VOE). They may call your employer or use a third-party service. Income is used to calculate DTI and qualify you for the loan amount and mortgage payment.',
  },
  {
    question: 'What is a VOE?',
    answer:
      'VOE stands for Verification of Employment. The lender (or a service) contacts your employer to confirm you work there, your job title, how long you have been employed, and your income. This can be verbal or written. VOE is a common condition during underwriting.',
  },
  {
    question: 'Do lenders verify employment right before closing?',
    answer:
      'Yes. Many lenders perform a final VOE shortly before closing—often within 10 days—to confirm you are still employed. A job change or loss of job during the process can affect or delay approval. Your Loan Estimate and closing costs are typically set by then.',
  },
  {
    question: 'What if I just started a new job?',
    answer:
      'Lenders typically prefer 2 years of employment history. A new job in the same field may be acceptable. A recent job change in a different industry can be harder. Some loan programs are more flexible. See our guides on Mortgage Income Verification and Self-Employed Borrower Scenarios.',
  },
  {
    question: 'Does employment verification affect my interest rate or Loan Estimate?',
    answer:
      'Employment verification confirms your income for underwriting. Your interest rate and Loan Estimate are based on your application. If verification reveals different income, the lender may revise the loan amount or terms. Income supports your ability to make the mortgage payment.',
  },
  {
    question: 'What documents do I need for employment verification?',
    answer:
      'Typically: recent pay stubs (often 30–60 days), W-2s (usually 2 years), and sometimes tax returns. The lender may also request a VOE form or contact your employer directly. Provide what your lender requests promptly.',
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

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Lenders verify your <strong>employment</strong> to confirm you have stable income to repay the loan. Income
            is used to calculate your DTI (debt-to-income ratio) and qualify you for a <strong>loan amount</strong> and{' '}
            <strong>mortgage payment</strong>. Verification happens during <strong>underwriting</strong> through pay stubs,
            W-2s, and often direct contact with your employer (Verification of Employment, or VOE).
          </p>
          <p className="text-gray-700 mb-4">
            A job change or loss of job during the process can affect approval. Your <strong>Loan Estimate</strong> and{' '}
            <strong>closing costs</strong> are based on the income you report; verification confirms it. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/mortgage-income-verification" className="text-primary hover:underline font-medium">Mortgage Income Verification</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you apply, you provide pay stubs and W-2s. The lender uses your income to determine how much you can
            borrow and at what <strong>interest rate</strong>. Under the ability-to-repay rule (part of TILA), lenders
            must verify that you can repay the loan. Employment verification is one way they do that.
          </p>
          <p className="text-gray-700 mb-4">
            The lender (or a third-party service) may contact your employer to confirm your job, title, tenure, and
            income. This VOE can be verbal or written. Many lenders also perform a final VOE shortly before closing to
            confirm you are still employed. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Design object 1: Verification methods table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Employment Verification Methods</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Method</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Shows</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay stubs</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Current employer, pay frequency, gross income</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">W-2s</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employer, annual wages (typically 2 years)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">VOE (Verification of Employment)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employer confirms job, title, tenure, income</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Tax returns</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Annual income (for self-employed or additional verification)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender and loan type.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            During <strong>underwriting</strong>, the lender reviews your pay stubs and W-2s. They may send a VOE request
            to your employer—by phone, form, or through a third-party service like The Work Number. The employer confirms
            your employment status, job title, hire date, and income. Some employers use a centralized verification
            service; you may need to authorize access.
          </p>
          <p className="text-gray-700 mb-4">
            Many lenders perform a final VOE shortly before closing—often within 10 days. This confirms you are still
            employed. If you changed jobs or lost your job, inform your lender immediately. Approval may be withdrawn or
            delayed. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are
            typically set by then; the final VOE is a last check. See{' '}
            <Link href="/mortgage/mortgage-conditional-approval-explained" className="text-primary hover:underline font-medium">Mortgage Conditional Approval Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Casey applies for a $320,000 loan. Casey provides 2 months of pay stubs and 2 years of W-2s. The lender
            orders a VOE; Casey&apos;s employer uses The Work Number. Casey authorizes access, and the lender receives
            verification within 2 days. Income is confirmed, DTI is acceptable, and the loan is conditionally approved.
          </p>
          <p className="text-gray-700 mb-4">
            Five days before closing, the lender performs a final VOE. Casey is still employed. Clear to close is
            issued. Casey receives the Closing Disclosure under TRID and closes on schedule. The <strong>Loan Estimate</strong> and{' '}
            <strong>closing costs</strong> were set earlier. The example is illustrative; procedures vary by lender.
          </p>
        </section>

        {/* Design object 2: Job change callout */}
        <div className="mb-10 rounded-xl border-l-4 border-rose-500 bg-rose-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-rose-900 mb-2">Important: Report Job Changes</h3>
          <p className="text-rose-800 text-[15px] leading-relaxed">
            If you change jobs or lose your job during the mortgage process, inform your lender immediately. A final VOE
            will likely reveal the change. Hiding it can result in denial or withdrawal of approval. A new job in the
            same field may be acceptable; discuss with your lender.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Employment verification is a standard part of <strong>underwriting</strong>. Understanding what lenders
            check helps you prepare. Have pay stubs and W-2s ready. If your employer uses a verification service, know
            how to authorize access. Avoid job changes during the process when possible—or disclose them promptly.
          </p>
          <p className="text-gray-700 mb-4">
            First-time buyers may not know that lenders contact employers. Your employer may receive a call or form.
            Ensure your employer&apos;s contact information is correct. Income supports your <strong>loan amount</strong> and{' '}
            <strong>mortgage payment</strong>—see <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Employment Verification</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Confirms income for ability-to-repay</li>
                <li>Supports responsible lending</li>
                <li>Final VOE reduces risk of closing with unemployed borrower</li>
                <li>Standardized process across lenders</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Job change during process can affect approval</li>
                <li>Employer must respond to VOE</li>
                <li>New job may require additional documentation</li>
                <li>Self-employed borrowers have different process</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Changing jobs without telling the lender:</strong> A final VOE will likely catch it. Disclose job changes immediately. A new job in the same field may be acceptable.</li>
            <li><strong>Providing outdated pay stubs:</strong> Lenders typically want recent pay stubs (30–60 days). Provide the most current ones.</li>
            <li><strong>Incorrect employer contact information:</strong> If the lender cannot reach your employer, verification can delay. Ensure HR contact info is correct.</li>
            <li><strong>Assuming self-employment is verified the same way:</strong> Self-employed borrowers use tax returns, P&L statements, and business documents—not a traditional VOE. See <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower Scenarios</Link>.</li>
            <li><strong>Quitting before closing:</strong> Do not leave your job before closing unless you have discussed it with your lender. Approval may be withdrawn.</li>
          </ul>
        </section>

        {/* Self-Employed Borrowers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Self-Employed Borrowers</h2>
          <p className="text-gray-700 mb-4">
            Self-employed borrowers do not have a traditional employer to contact. Lenders verify income through tax
            returns, profit-and-loss statements, and business documents. See{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower Scenarios</Link> and{' '}
            <Link href="/mortgage/mortgage-income-verification" className="text-primary hover:underline font-medium">Mortgage Income Verification</Link>.
          </p>
        </section>

        {/* FAQ */}
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

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Ability to Repay and Qualified Mortgage rule</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Fannie Mae – Selling Guide (income and employment verification)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (income documentation)</li>
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
            Verification requirements vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
