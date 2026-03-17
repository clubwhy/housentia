import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Investor Guidelines Explained | Housentia',
  description:
    'Fannie Mae, Freddie Mac, and other investors set guidelines that lenders follow. Learn how mortgage investor guidelines affect loan eligibility and terms.',
  openGraph: {
    title: 'Mortgage Investor Guidelines Explained | Housentia',
    description: 'Understand mortgage investor guidelines and how they affect your loan.',
  },
};

const ARTICLE_SLUG = 'mortgage-investor-guidelines-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Investor Guidelines Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-investor-guidelines-explained';

const FAQ_ITEMS = [
  {
    question: 'What are mortgage investor guidelines?',
    answer:
      'Investor guidelines are the rules that Fannie Mae, Freddie Mac, Ginnie Mae, and other investors set for the loans they purchase. Lenders must originate loans that meet these guidelines if they want to sell them. Guidelines cover credit, income, DTI, LTV, loan amount limits, property type, and documentation. They influence your loan eligibility, interest rate, and mortgage payment.',
  },
  {
    question: 'Who are the main mortgage investors?',
    answer:
      'Fannie Mae and Freddie Mac purchase conventional conforming loans. Ginnie Mae securitizes government-backed loans (FHA, VA, USDA). Private investors purchase non-conforming or jumbo loans. Each has different guidelines. See our Conventional Loan and Mortgage Loan Delivery Process guides.',
  },
  {
    question: 'How do investor guidelines affect me?',
    answer:
      'Lenders use investor guidelines to determine loan eligibility, pricing, and terms. If your loan meets Fannie or Freddie guidelines, you may get a conforming rate. If not, you may need FHA, VA, jumbo, or non-QM with different guidelines. Your Loan Estimate and closing costs reflect the program you qualify for.',
  },
  {
    question: 'Can lender guidelines be stricter than investor guidelines?',
    answer:
      'Yes. Lenders can impose overlays—stricter requirements than the investor minimum. For example, an investor may allow a 620 credit score, but a lender might require 640. Overlays vary by lender.',
  },
  {
    question: 'Do investor guidelines affect my Loan Estimate or interest rate?',
    answer:
      'Indirectly. Guidelines determine which programs you qualify for. Your interest rate and Loan Estimate are based on the program—conforming, FHA, VA, jumbo, etc. Each program has different pricing. A conforming loan may have different rates than an FHA loan for the same loan amount.',
  },
  {
    question: 'What happens if my loan does not meet investor guidelines?',
    answer:
      'The lender may offer a different program—FHA, VA, jumbo, or non-QM—that fits your profile. Or the lender may decline. Each investor has different credit, DTI, LTV, and documentation requirements. See What Is DTI and What Is LTV for context.',
  },
];

export default function MortgageInvestorGuidelinesExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Investor Guidelines Explained',
    description:
      'Investors set guidelines that lenders follow. Learn how they affect your loan eligibility and terms.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Investor Guidelines Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage investor guidelines</strong> are the rules that Fannie Mae, Freddie Mac, Ginnie Mae, and
            other investors set for the loans they purchase. Lenders originate loans that meet these guidelines so they
            can sell them in the secondary market. As a borrower, you do not deal with investors directly—but their
            guidelines influence your eligibility, <strong>loan amount</strong>, <strong>interest rate</strong>, and{' '}
            <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Guidelines cover credit score, DTI, LTV, loan limits, property type, and documentation. Your{' '}
            <strong>Loan Estimate</strong> and <strong>closing costs</strong> reflect the program you qualify for—conforming,
            FHA, VA, or jumbo. TILA and RESPA (via TRID) govern the disclosures you receive; investor guidelines shape
            the programs lenders offer. See{' '}
            <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan Guide</Link> and{' '}
            <Link href="/mortgage/mortgage-loan-delivery-process" className="text-primary hover:underline font-medium">Mortgage Loan Delivery Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender evaluates your profile against investor guidelines. If your credit, income, DTI,
            LTV, and property fit Fannie Mae or Freddie Mac guidelines, you may qualify for a conforming loan. If not,
            the lender may offer FHA, VA, jumbo, or non-QM—each with different guidelines and pricing.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>interest rate</strong> and <strong>mortgage payment</strong> depend on the program. Conforming
            loans often have competitive rates. FHA and VA have different pricing and <strong>closing costs</strong>.
            During <strong>underwriting</strong>, the lender ensures the loan meets the investor&apos;s requirements before
            approval. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: Main investors table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Investors at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Investor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Loan Types</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Key Guidelines</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Fannie Mae</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional conforming</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Credit, DTI, LTV, loan limits, documentation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Freddie Mac</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional conforming</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Credit, DTI, LTV, loan limits, documentation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Ginnie Mae</td>
                  <td className="px-4 py-3 text-sm text-gray-700">FHA, VA, USDA</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Aligns with agency program rules</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Private investors</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Jumbo, non-QM</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies by investor</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Guidelines change. Lenders may add overlays (stricter requirements).</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender runs your application through automated <strong>underwriting</strong> (Fannie Mae
            Desktop Underwriter, Freddie Mac Loan Product Advisor, or agency systems). The system evaluates your
            credit, income, DTI, LTV, and property against investor guidelines. If you fit conforming guidelines, you
            may receive a conforming <strong>Loan Estimate</strong> with competitive <strong>interest rate</strong> and{' '}
            <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            If you do not fit conforming guidelines—for example, credit below the minimum or <strong>loan amount</strong> above
            the conforming limit—the lender may offer FHA, VA, or jumbo. Each program has different guidelines and
            pricing. After closing, the lender may sell the loan to the investor. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/mortgage-audit-process" className="text-primary hover:underline font-medium">Mortgage Audit Process</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan applies for a $350,000 loan. Credit 720, DTI 38%, LTV 80%. The loan is within the conforming limit.
            The lender runs the file through Fannie Mae&apos;s system—approve. Morgan receives a <strong>Loan Estimate</strong> for
            a conforming loan at 6.5% <strong>interest rate</strong>. The <strong>mortgage payment</strong> (P&I) is about
            $2,212.
          </p>
          <p className="text-gray-700 mb-4">
            If Morgan&apos;s credit had been 600, the conforming guidelines might not have been met. The lender could
            have offered FHA instead—different guidelines, different <strong>closing costs</strong> (e.g., mortgage
            insurance). The example is illustrative. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 2: Overlays callout */}
        <div className="mb-10 rounded-xl border-l-4 border-amber-500 bg-amber-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Lender Overlays</h3>
          <p className="text-amber-800 text-[15px] leading-relaxed">
            Lenders can impose overlays—stricter requirements than the investor minimum. For example, Fannie may allow
            620 credit, but a lender might require 640. Overlays vary by lender. If one lender declines, another may
            approve with different overlays. Compare offers.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding that investor guidelines exist helps you know why lenders offer certain programs and not
            others. First-time buyers may not realize that their credit, DTI, or <strong>loan amount</strong> determines
            whether they get a conforming loan or need FHA/VA. Improving credit or reducing debt can help you qualify
            for better programs.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> and <strong>mortgage payment</strong> reflect the program you qualify
            for. Conforming loans often have competitive rates. FHA and VA have different pros and cons. See{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Investor Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Standardized criteria across lenders</li>
                <li>Conforming loans often have competitive rates</li>
                <li>Multiple programs (FHA, VA, jumbo) for different profiles</li>
                <li>Secondary market supports liquidity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lender overlays can be stricter</li>
                <li>Guidelines change over time</li>
                <li>Not all profiles fit conforming</li>
                <li>Borrowers do not choose the investor</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming one lender&apos;s no means all lenders will say no:</strong> Overlays vary. If one lender declines, another may approve. Compare offers.</li>
            <li><strong>Ignoring credit and DTI:</strong> Investor guidelines set minimums. Improving credit and reducing DTI can help you qualify for conforming instead of FHA. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.</li>
            <li><strong>Assuming conforming is always best:</strong> For some borrowers, FHA or VA may be better—lower down payment, different <strong>closing costs</strong>. Compare programs.</li>
            <li><strong>Not comparing Loan Estimates:</strong> Different programs have different <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Use the Loan Estimate to compare.</li>
            <li><strong>Expecting guidelines to never change:</strong> Loan limits, credit minimums, and other guidelines are updated. Check current requirements with your lender.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about investor guidelines">
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
            <li>Federal Housing Finance Agency (FHFA) – Conforming loan limits</li>
            <li>Fannie Mae – Selling Guide (eligibility and underwriting)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (eligibility)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Conforming Loan', href: '/mortgage-glossary/conforming-loan' }]}
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
            Guidelines change over time. Consult a lender for current requirements.
          </p>
        </section>
      </main>
    </div>
  );
}
