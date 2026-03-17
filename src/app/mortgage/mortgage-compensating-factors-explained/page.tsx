import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Compensating Factors Explained | Housentia',
  description:
    'Compensating factors can offset risk. Learn how reserves, credit, and other factors may help with approval.',
  openGraph: { title: 'Mortgage Compensating Factors Explained | Housentia', description: 'Understand mortgage compensating factors.' },
};

const ARTICLE_SLUG = 'mortgage-compensating-factors-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Compensating Factors Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-compensating-factors-explained';

const FAQ_ITEMS = [
  {
    question: 'What are compensating factors?',
    answer:
      'Compensating factors are positive attributes that can offset risk during underwriting. Examples include strong reserves, credit score above the minimum, low LTV, stable employment, minimal payment shock, and documented income history. They may help when DTI is high or other risk factors exist.',
  },
  {
    question: 'Can compensating factors help with high DTI?',
    answer:
      'Yes. Lenders may approve higher DTI when compensating factors are present—for example, 18+ months of reserves, credit well above the minimum, or low LTV. Each lender and program has its own guidelines. Compensating factors support approval but do not guarantee it.',
  },
  {
    question: 'What compensating factors do lenders look for?',
    answer:
      'Common factors include: reserves (months of mortgage payments in savings), credit score above the program minimum, low LTV (more equity), minimal payment shock (new payment similar to current housing cost), stable employment, and documented income. See our guides on What Is DTI, What Is LTV, and What Is Mortgage Reserve Requirement.',
  },
  {
    question: 'Do compensating factors guarantee approval?',
    answer:
      'No. They support approval but do not override program requirements. Each lender evaluates differently. You must still meet minimum credit, income, and property standards. Compensating factors may help when you are borderline on one or more criteria.',
  },
  {
    question: 'How do compensating factors affect my Loan Estimate or interest rate?',
    answer:
      'Compensating factors are used during underwriting to decide whether to approve the loan. They do not directly change your interest rate or Loan Estimate. A stronger overall profile may help you qualify for better terms, but the rate is set by the lender based on credit, LTV, and other factors. See What Is APR and What Is Interest Rate.',
  },
  {
    question: 'What is payment shock?',
    answer:
      'Payment shock is the increase from your current housing payment to your new mortgage payment. Minimal payment shock (e.g., you are already paying a similar amount in rent) can be a compensating factor. Large payment shock may require stronger compensating factors to offset the risk.',
  },
];

export default function MortgageCompensatingFactorsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Compensating Factors Explained', description: 'Learn about mortgage compensating factors.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Compensating Factors Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage compensating factors</strong> are positive attributes that can offset risk during{' '}
            <strong>underwriting</strong>. When your DTI is high, your credit is borderline, or you have other risk
            factors, lenders may still approve your loan if compensating factors are present. Examples include strong
            reserves, credit score above the minimum, low LTV, stable employment, and minimal payment shock.
          </p>
          <p className="text-gray-700 mb-4">
            Compensating factors do not change your <strong>loan amount</strong>, <strong>interest rate</strong>, or{' '}
            <strong>mortgage payment</strong> directly—they help the lender decide whether to approve you. Your{' '}
            <strong>Loan Estimate</strong> and <strong>closing costs</strong> are based on the terms you qualify for.
            See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-reserve-requirement" className="text-primary hover:underline font-medium">What Is Mortgage Reserve Requirement</Link>, and{' '}
            <Link href="/mortgage/what-is-automated-underwriting" className="text-primary hover:underline font-medium">What Is Automated Underwriting</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            During <strong>underwriting</strong>, the lender evaluates your ability to repay. If your DTI is slightly
            above the typical limit, or your credit score is at the low end of the range, the lender may look for
            compensating factors to offset that risk. Strong reserves (months of <strong>mortgage payment</strong> in
            savings) show you can handle temporary income loss. Low LTV (more equity) reduces the lender&apos;s
            exposure. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            Compensating factors do not guarantee approval. Each lender and program has its own guidelines. Fannie Mae
            and Freddie Mac allow manual underwriting with compensating factors when automated underwriting refers or
            rejects. Your <strong>loan amount</strong> and <strong>interest rate</strong> are set by the lender based
            on your profile—see <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Design object 1: Compensating factors table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Compensating Factors</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Why It Helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Strong reserves</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Shows ability to cover payments if income drops</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Credit above minimum</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Indicates stronger repayment history</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Low LTV</td>
                  <td className="px-4 py-3 text-sm text-gray-700">More equity reduces lender risk</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Stable employment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Predictable income stream</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Minimal payment shock</td>
                  <td className="px-4 py-3 text-sm text-gray-700">New payment similar to current housing cost</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Documented income history</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Consistent, verifiable earnings</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Lenders weigh these differently. Requirements vary by program.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender runs your application through automated <strong>underwriting</strong> (Fannie Mae
            Desktop Underwriter, Freddie Mac Loan Product Advisor, or similar). If the system refers or rejects—for
            example, due to high DTI—the lender may perform manual underwriting. The underwriter reviews your file for
            compensating factors that offset the risk.
          </p>
          <p className="text-gray-700 mb-4">
            Reserves are often a key factor. Having 18 or 24 months of <strong>mortgage payment</strong> in reserves
            can support approval when DTI is elevated. Low LTV (e.g., 70% or below) also helps. The underwriter
            documents the compensating factors and may approve the loan. Your <strong>Loan Estimate</strong> and{' '}
            <strong>closing costs</strong> reflect the terms you qualify for. See{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor has a DTI of 48%—above the typical 43% guideline for conventional loans. Taylor also has 24 months
            of reserves, a credit score of 720, and an LTV of 75%. The automated system refers the file. The
            underwriter reviews and documents: strong reserves, credit above minimum, low LTV. These compensating factors
            offset the high DTI. The loan is approved.
          </p>
          <p className="text-gray-700 mb-4">
            Taylor receives a <strong>Loan Estimate</strong> with the approved <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and <strong>mortgage payment</strong>. The example is illustrative;
            outcomes depend on the lender, program, and full file. Compensating factors do not guarantee approval.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            Compensating factors can help when you are borderline on DTI, credit, or other criteria. They do not
            guarantee approval. Build reserves, maintain strong credit, and put more down when possible. Each lender
            evaluates differently—if one says no, another may approve with the right compensating factors.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding compensating factors helps you know what may strengthen your application. If your DTI is high,
            building reserves before applying can help. If your credit is at the minimum, improving it even slightly may
            provide a compensating factor. A larger down payment lowers LTV and can offset other risk.
          </p>
          <p className="text-gray-700 mb-4">
            First-time buyers often focus on the <strong>interest rate</strong> and <strong>mortgage payment</strong>.
            Qualifying comes first. Compensating factors may help you get approved when you are close but not quite
            there. See <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Compensating Factors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>May help with high DTI or borderline credit</li>
                <li>Manual underwriting can consider full picture</li>
                <li>Reserves and low LTV are within your control</li>
                <li>Can support approval when automated system refers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Do not guarantee approval</li>
                <li>Lender guidelines vary</li>
                <li>Manual underwriting can take longer</li>
                <li>You must still meet program minimums</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming compensating factors guarantee approval:</strong> They support approval but do not override program requirements. You must still meet minimum credit, income, and property standards.</li>
            <li><strong>Depleting reserves before closing:</strong> Reserves are a key compensating factor. Avoid large withdrawals between application and closing. The lender may re-verify.</li>
            <li><strong>Not documenting income fully:</strong> Stable, documented income is a compensating factor. Provide complete pay stubs, W-2s, and tax returns as requested during <strong>underwriting</strong>.</li>
            <li><strong>Ignoring DTI when you have reserves:</strong> Reserves can offset high DTI, but extremely high DTI may still disqualify you. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.</li>
            <li><strong>Expecting the same outcome from every lender:</strong> Each lender evaluates compensating factors differently. If one denies, another may approve.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about compensating factors">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Fannie Mae – Selling Guide (compensating factors, manual underwriting)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (compensating factors)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage qualification and underwriting</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
