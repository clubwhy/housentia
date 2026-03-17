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
      'Lenders verify income by reviewing pay stubs, W-2s, and tax returns. They may also contact your employer (Verification of Employment, or VOE) to confirm employment, job title, and income. Income is used to calculate DTI and qualify you for the loan amount and mortgage payment.',
  },
  {
    question: 'What income documents do I need?',
    answer:
      'Typically: pay stubs (2 months), W-2s (2 years), and tax returns (2 years). Self-employed borrowers may need profit-and-loss statements and 1099s. See our Mortgage Application Documents guide for a full checklist. Your Loan Estimate is based on the income you report.',
  },
  {
    question: 'What if my income is variable?',
    answer:
      'Lenders may average income over 2 years for self-employed borrowers. Bonuses and overtime may be used if consistent. Commission and variable income often require a 2-year history. See Self-Employed Borrower Scenarios and Mortgage Compensating Factors Explained.',
  },
  {
    question: 'Do lenders verify employment at closing?',
    answer:
      'Many lenders perform a final verification of employment (VOE) shortly before closing to confirm you are still employed. A job change during the process can affect approval. See Mortgage Employment Verification.',
  },
  {
    question: 'Does income verification affect my interest rate or Loan Estimate?',
    answer:
      'Income verification confirms the income used to qualify you. Your interest rate and Loan Estimate are based on your application. If verification reveals different income, the lender may revise the loan amount or terms. Income supports your ability to make the mortgage payment.',
  },
  {
    question: 'Why do lenders need to verify income?',
    answer:
      'Under the ability-to-repay rule (TILA), lenders must verify that you can repay the loan. Income is used to calculate DTI and determine the maximum loan amount you qualify for. Verification ensures the information on your application is accurate.',
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

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Lenders must verify that you have sufficient income to repay the mortgage. <strong>Income verification</strong> involves
            reviewing your pay stubs, W-2s, tax returns, and often contacting your employer. Under the ability-to-repay
            rule (part of TILA), lenders must make a reasonable determination that you can repay the <strong>loan amount</strong>.
            Income supports your <strong>mortgage payment</strong> and DTI calculation.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> and <strong>interest rate</strong> are based on the income you report.
            During <strong>underwriting</strong>, the lender verifies it. The process differs for employed vs.
            self-employed borrowers. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/mortgage-income-requirements" className="text-primary hover:underline font-medium">Mortgage Income Requirements</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you apply, you state your income. The lender uses it to calculate how much you can borrow and whether
            your DTI is acceptable. The lender then verifies that income through documents and sometimes employer
            contact. If verified income differs from what you stated, the lender may adjust your qualifying{' '}
            <strong>loan amount</strong> or request additional documentation.
          </p>
          <p className="text-gray-700 mb-4">
            Income verification does not set your <strong>interest rate</strong>—credit, LTV, and other factors do.
            But it determines whether you qualify and for how much. Your <strong>mortgage payment</strong> and{' '}
            <strong>closing costs</strong> are disclosed on the Loan Estimate and Closing Disclosure under TRID. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: Verification documents table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Documents Used for Income Verification</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Document</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Shows</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay stubs</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Current income, YTD, employer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">W-2s</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Annual wages, taxes withheld (typically 2 years)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Tax returns</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Reported income; required for self-employed (2 years)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">VOE (Verification of Employment)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employer confirms job, title, income</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">P&L, 1099s (self-employed)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Business income; supports tax return figures</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-3">
            See <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline font-medium">How Income Is Verified for a Mortgage</Link> and{' '}
            <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, you provide income information. The lender sends a <strong>Loan Estimate</strong> within 3
            business days (TRID). During <strong>underwriting</strong>, the lender reviews your pay stubs, W-2s, and tax
            returns. They may order a VOE—contacting your employer to confirm job, title, tenure, and income.
          </p>
          <p className="text-gray-700 mb-4">
            The lender calculates your qualifying income and DTI. If income is verified, you may receive conditional
            approval. Many lenders perform a final VOE shortly before closing. If verification reveals different income,
            the lender may revise the <strong>loan amount</strong> or issue a revised Loan Estimate. See{' '}
            <Link href="/mortgage/mortgage-employment-verification" className="text-primary hover:underline font-medium">Mortgage Employment Verification</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam applies for a $295,000 loan. Sam provides 2 months of pay stubs and 2 years of W-2s. The pay stubs show
            $5,800/month gross; the W-2s show $69,000 and $71,000 for the past two years. The lender orders a VOE; the
            employer confirms $70,000 salary. Income is verified.
          </p>
          <p className="text-gray-700 mb-4">
            The lender calculates DTI and approves a <strong>loan amount</strong> of $295,000 at 6.5%{' '}
            <strong>interest rate</strong>. Sam receives conditional approval. Five days before closing, the lender
            performs a final VOE—Sam is still employed. Clear to close. The <strong>mortgage payment</strong> and{' '}
            <strong>Loan Estimate</strong> were set during underwriting. The example is illustrative.
          </p>
        </section>

        {/* Design object 2: Self-employed callout */}
        <div className="mb-10 rounded-xl border-l-4 border-purple-500 bg-purple-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-purple-900 mb-2">Self-Employed Borrowers</h3>
          <p className="text-purple-800 text-[15px] leading-relaxed">
            Self-employed borrowers typically provide tax returns (2 years), profit-and-loss statements, and possibly
            1099s. Lenders often average income over 2 years. There is no traditional VOE—income is verified through
            tax returns and business documents. See <Link href="/mortgage/self-employed-borrower" className="text-purple-700 hover:underline font-medium">Self-Employed Borrower Scenarios</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding income verification helps you prepare. Have pay stubs, W-2s, and tax returns ready. Ensure your
            application matches your documents. First-time buyers may not realize that lenders verify every dollar—and
            that overstating income can result in denial or reduced <strong>loan amount</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Your income supports your <strong>mortgage payment</strong> and qualification. A job change during the
            process can affect approval. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/mortgage-conditional-approval-explained" className="text-primary hover:underline font-medium">Mortgage Conditional Approval Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Income Verification</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Supports ability-to-repay (TILA)</li>
                <li>Ensures accurate qualification</li>
                <li>Final VOE reduces risk before closing</li>
                <li>Standardized process across lenders</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Job change during process can affect approval</li>
                <li>Variable income needs 2-year history</li>
                <li>Self-employed have different documentation</li>
                <li>Verification can take time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Overstating income:</strong> Lenders verify. If documents show less than you stated, the lender may reduce qualifying income or deny. Be accurate on your application.</li>
            <li><strong>Providing outdated pay stubs:</strong> Lenders typically want recent pay stubs (30–60 days). Outdated stubs can trigger conditions.</li>
            <li><strong>Application not matching documents:</strong> If your application says $X but your pay stub shows $Y, the reviewer will flag it. Ensure consistency.</li>
            <li><strong>Changing jobs during the process:</strong> A job change can delay or affect approval. The lender may require a new VOE or re-underwrite. See <Link href="/mortgage/mortgage-employment-verification" className="text-primary hover:underline font-medium">Mortgage Employment Verification</Link>.</li>
            <li><strong>Assuming self-employment is verified the same way:</strong> Self-employed borrowers use tax returns and business docs—not a traditional VOE. Provide complete tax returns and P&L.</li>
          </ul>
        </section>

        {/* FAQ */}
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

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Ability to Repay and Qualified Mortgage rule</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Fannie Mae – Selling Guide (income documentation)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (income verification)</li>
          </ul>
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
