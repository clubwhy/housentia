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
      'Compliance checks ensure that loans and processes meet federal and state regulations. Lenders verify that disclosures (Loan Estimate, Closing Disclosure) are provided on time under TRID, that fees are within tolerance, and that the loan meets ability-to-repay and other rules. These checks protect borrowers and support accurate disclosure of your loan amount, interest rate, and closing costs.',
  },
  {
    question: 'What is TRID?',
    answer:
      'TRID (TILA-RESPA Integrated Disclosure) is the rule that requires the Loan Estimate (within 3 business days of application) and Closing Disclosure (at least 3 business days before closing). It also sets tolerance rules for certain fees. TRID helps borrowers compare offers and understand costs.',
  },
  {
    question: 'What is the ability-to-repay rule?',
    answer:
      'The ability-to-repay (ATR) rule requires lenders to make a reasonable, good-faith determination that the borrower can repay the loan. Lenders evaluate income, assets, debt, and credit during underwriting. Qualified Mortgages (QM) are a category of loans that meet ATR and other criteria.',
  },
  {
    question: 'Why do compliance checks matter to borrowers?',
    answer:
      'Compliance checks ensure you receive required disclosures on time, that fees are disclosed accurately, and that the loan meets regulatory standards. They support transparency and consumer protection. If a lender fails compliance, it can delay closing or require corrective action.',
  },
  {
    question: 'Do compliance checks affect my Loan Estimate or mortgage payment?',
    answer:
      'Compliance checks verify that the lender follows the rules—they do not set your loan amount, interest rate, or mortgage payment. Your terms come from the lender based on your application. Compliance ensures you receive the Loan Estimate and Closing Disclosure correctly and that disclosed fees are accurate.',
  },
  {
    question: 'What happens if a lender fails a compliance check?',
    answer:
      'The lender typically must correct the issue before closing—for example, sending a revised Closing Disclosure or waiting for a new 3-day period. In rare cases, a significant defect could delay or affect the loan. Most issues are resolved before you close.',
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

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage compliance checks</strong> ensure that loans and processes meet federal and state regulations.
            Lenders (and their compliance teams) verify that disclosures are provided on time, that fees are within
            allowed tolerances, and that the loan meets ability-to-repay and other rules. As a borrower, you benefit from
            these checks—they support transparency and help ensure your <strong>Loan Estimate</strong>, Closing
            Disclosure, <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>closing costs</strong> are
            disclosed accurately.
          </p>
          <p className="text-gray-700 mb-4">
            TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated
            Disclosure) govern how lenders must disclose your <strong>mortgage payment</strong> and costs. Compliance
            checks happen behind the scenes during <strong>underwriting</strong> and before closing. See{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you apply for a mortgage, the lender must follow federal and state rules. Under TRID, you receive a{' '}
            <strong>Loan Estimate</strong> within 3 business days and a Closing Disclosure at least 3 business days
            before closing. Compliance teams verify that these disclosures were sent on time and that the numbers
            (including <strong>closing costs</strong>) are within allowed tolerances.
          </p>
          <p className="text-gray-700 mb-4">
            The ability-to-repay (ATR) rule requires lenders to verify that you can repay the <strong>loan amount</strong>.
            During <strong>underwriting</strong>, the lender evaluates your income, debt, assets, and credit. Qualified
            Mortgages (QM) meet ATR criteria. Compliance checks ensure the lender followed these rules. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>.
          </p>
        </section>

        {/* Design object 1: Key regulations table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Regulations at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Regulation</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Covers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">TILA (Truth in Lending Act)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Disclosure of loan terms, APR, costs; right of rescission for refinances</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">RESPA (Real Estate Settlement Procedures Act)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing disclosures, kickback prohibitions, servicing disclosures</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">TRID (TILA-RESPA Integrated Disclosure)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Loan Estimate (3 days), Closing Disclosure (3 days before closing), fee tolerances</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">ATR (Ability to Repay)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender must verify borrower can repay; QM loans meet ATR criteria</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-3">
            See <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is a Loan Estimate?</Link> and{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">What Is a Closing Disclosure?</Link>
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Compliance checks occur throughout the loan process. When you apply, the lender must send the{' '}
            <strong>Loan Estimate</strong> within 3 business days. Compliance teams verify timing and that the form
            includes your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>,
            and <strong>closing costs</strong>. During <strong>underwriting</strong>, they verify that the loan meets ATR
            and QM criteria (if applicable).
          </p>
          <p className="text-gray-700 mb-4">
            Before closing, the lender sends the Closing Disclosure at least 3 business days in advance. Compliance checks
            verify that fees are within TRID tolerances—some costs cannot increase, others have limited increases. If a
            fee exceeds tolerance, the lender may need to absorb the difference or provide a revised disclosure. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/mortgage-audit-process" className="text-primary hover:underline font-medium">Mortgage Audit Process</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan applies for a $300,000 loan. The lender sends the <strong>Loan Estimate</strong> within 2 business
            days—TRID compliant. The compliance team verifies that the form includes the correct <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and <strong>closing costs</strong>. During <strong>underwriting</strong>, they
            confirm the loan meets ATR. Before closing, the Closing Disclosure is sent 4 business days early—compliant.
          </p>
          <p className="text-gray-700 mb-4">
            The compliance team finds that one fee increased beyond tolerance. The lender absorbs the difference so
            Jordan&apos;s cash to close does not increase. Jordan closes on schedule. The example is illustrative;
            procedures vary by lender. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 2: Borrower callout */}
        <div className="mb-10 rounded-xl border-l-4 border-indigo-500 bg-indigo-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-indigo-900 mb-2">For Borrowers: What to Know</h3>
          <p className="text-indigo-800 text-[15px] leading-relaxed">
            Compliance checks happen behind the scenes. You receive your Loan Estimate and Closing Disclosure because
            TRID requires it. Use the 3-day period before closing to compare the Closing Disclosure to your Loan
            Estimate. If you see unexpected increases in closing costs or changes to your loan terms, ask your lender.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding compliance helps you know why you receive certain forms and when. The 3-day rule gives you time
            to review the Closing Disclosure before signing. If the lender missed a deadline or a fee increased beyond
            tolerance, compliance checks (or post-closing audits) may catch it. You benefit from standardized disclosures
            that make it easier to compare offers.
          </p>
          <p className="text-gray-700 mb-4">
            First-time buyers may not know that TILA, RESPA, and TRID exist—but these rules shape your experience. Your{' '}
            <strong>Loan Estimate</strong> and Closing Disclosure are required by law. Compliance ensures you get them
            on time with accurate information about your <strong>mortgage payment</strong> and <strong>closing costs</strong>.
            See <Link href="/mortgage/mortgage-quality-control-process" className="text-primary hover:underline font-medium">Mortgage Quality Control Process</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Compliance Checks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Borrowers receive disclosures on time</li>
                <li>Fee tolerances limit surprise increases</li>
                <li>Standardized forms aid comparison</li>
                <li>ATR supports responsible lending</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Compliance failures can delay closing</li>
                <li>Certain changes reset the 3-day period</li>
                <li>Rules are complex and vary by state</li>
                <li>Borrowers typically do not see the checks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not reviewing the Closing Disclosure:</strong> Use the 3-day period to compare it to your <strong>Loan Estimate</strong>. Check your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>.</li>
            <li><strong>Assuming all fees can increase:</strong> TRID sets tolerances. Some fees cannot increase; others have limits. If a fee increased beyond tolerance, ask why.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> The Loan Estimate helps you compare lenders. Keep it and compare to the Closing Disclosure before closing.</li>
            <li><strong>Thinking compliance is only the lender&apos;s concern:</strong> Compliance protects you. Understanding the rules helps you know your rights and what to expect.</li>
            <li><strong>Not asking about changes:</strong> If your Closing Disclosure differs from your Loan Estimate in important ways, ask your lender before signing.</li>
          </ul>
        </section>

        {/* FAQ */}
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

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Ability to Repay and Qualified Mortgage rule</li>
          </ul>
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
