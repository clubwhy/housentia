import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steps to Buy a House with a Mortgage: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn the steps to buy a house with a mortgage: from getting pre-approved to closing. Understand the full home buying process and how the mortgage fits in.',
  openGraph: {
    title: 'Steps to Buy a House with a Mortgage: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the full process of buying a house with a mortgage.',
  },
};

const ARTICLE_SLUG = 'steps-to-buy-a-house-with-a-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Steps to Buy a House with a Mortgage',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/steps-to-buy-a-house-with-a-mortgage';

const FAQ_ITEMS = [
  {
    question: 'What is the first step to buying a house with a mortgage?',
    answer:
      'Many buyers start by checking their finances and getting pre-approved for a mortgage. This tells you how much you can borrow and strengthens your offer when you find a home. See Mortgage Pre-Approval Process and What Is DTI.',
  },
  {
    question: 'When do I apply for the mortgage?',
    answer:
      'You typically apply for the mortgage after your offer is accepted. You may have a contingency period (e.g., 14–21 days) to obtain financing. Get pre-approved before making offers so you are ready. See Mortgage Application Process.',
  },
  {
    question: 'How long does it take to buy a house?',
    answer:
      'From offer to closing often takes 30 to 45 days, depending on the contract and mortgage timeline. The mortgage process usually takes 30–45 days from application to closing. Underwriting, appraisal, and title work run in parallel.',
  },
  {
    question: 'Do I need a real estate agent?',
    answer:
      'You can buy without an agent (for sale by owner), but most buyers use an agent. Agents help find homes, negotiate, and navigate the process. For the mortgage, you work with a lender or broker.',
  },
  {
    question: 'When do I receive the Loan Estimate?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), your lender must provide a Loan Estimate within 3 business days of receiving your application. It shows your loan amount, interest rate, mortgage payment, and closing costs. Compare it to the Closing Disclosure before closing.',
  },
  {
    question: 'What if the appraisal comes in low?',
    answer:
      'If the appraisal is lower than the purchase price, the lender may limit the loan amount based on the appraised value. You may need to renegotiate with the seller, bring more cash to close, or walk away if you have an appraisal contingency.',
  },
];

export default function StepsToBuyAHouseWithAMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Steps to Buy a House with a Mortgage: A Guide for U.S. Homebuyers',
    description:
      'Learn the steps to buy a house with a mortgage from pre-approval to closing. Understand how the mortgage fits into the home buying process.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Steps to Buy a House with a Mortgage: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Buying a house with a mortgage combines two processes: finding and securing a home, and obtaining financing. The steps overlap—you get pre-approved before or while house hunting, make an offer, then apply for the mortgage once your offer is accepted. For first-time homebuyers, understanding this flow helps reduce stress and avoid costly mistakes.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days of applying and a Closing Disclosure at least 3 business days before closing. These forms show your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. This guide walks through the full process from preparation to closing.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            &quot;Buying a house with a mortgage&quot; means you are borrowing money from a lender to purchase a home. You agree to repay the <strong>loan amount</strong> over time with interest. Your <strong>mortgage payment</strong> covers principal and interest, and often includes escrow for taxes and insurance. The home serves as collateral—if you default, the lender can foreclose.
          </p>
          <p className="text-gray-700 mb-4">
            The purchase and mortgage processes run in parallel. You negotiate with the seller (or their agent) while the lender verifies your income, assets, and credit through <strong>underwriting</strong>. Your <strong>interest rate</strong> and <strong>loan amount</strong> are set by the lender based on your qualifications and the property. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Timeline table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Timeline: Offer to Closing</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Phase</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Pre-approval & house hunting</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Weeks to months</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Offer accepted → application</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Day 1</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Loan Estimate received</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Within 3 business days</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Inspection, appraisal, underwriting</td>
                  <td className="px-4 py-3 text-sm text-gray-700">2–4 weeks</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Clear to close → Closing Disclosure</td>
                  <td className="px-4 py-3 text-sm text-gray-700">At least 3 days before closing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Day 30–45 (typical)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Timing varies by lender, market, and contract. TRID sets minimum disclosure timelines.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You prepare your finances, get pre-approved, find a home, and make an offer. Once the offer is accepted, you apply formally for the mortgage. The lender orders an appraisal and runs <strong>underwriting</strong>. In parallel, you may schedule a home inspection and work with title/escrow. When the lender approves and all conditions are met, you receive clear to close. You review the Closing Disclosure, then attend closing to sign documents and receive the keys.
          </p>
          <p className="text-gray-700 mb-4">
            Your purchase agreement typically includes contingencies—for example, a financing contingency that lets you back out if you cannot obtain a mortgage, and an inspection contingency. These protect you but have deadlines. The <strong>Loan Estimate</strong> and Closing Disclosure (TRID) show your <strong>closing costs</strong> and <strong>mortgage payment</strong>. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Step 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Prepare Your Finances</h2>
          <p className="text-gray-700 mb-4">
            Check your credit, calculate how much you can afford, and save for a down payment and <strong>closing costs</strong>. Lenders typically review your debt-to-income ratio (DTI) and loan-to-value (LTV). Use our{' '}
            <Link href="/tools/affordability-calculator" className="text-primary hover:underline font-medium">Affordability Calculator</Link>
            {' '}to estimate. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>
            {' '}and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Step 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Get Pre-Approved</h2>
          <p className="text-gray-700 mb-4">
            Get pre-approved before or early in your house hunt. A pre-approval letter shows sellers you are a serious buyer and can obtain financing. The lender reviews your income, assets, and credit to estimate the <strong>loan amount</strong> and <strong>interest rate</strong> you may qualify for. See{' '}
            <Link href="/mortgage/mortgage-pre-approval-process" className="text-primary hover:underline font-medium">Mortgage Pre-Approval Process</Link>.
          </p>
        </section>

        {/* Step 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Find a Home and Make an Offer</h2>
          <p className="text-gray-700 mb-4">
            Work with a real estate agent (or on your own) to find a home. When you find one you want, make an offer. Your offer may include contingencies—for example, financing contingency (mortgage approval) and inspection contingency. In competitive markets, sellers may prefer offers with fewer contingencies. Your agent can help you structure the offer.
          </p>
        </section>

        {/* Step 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Apply for the Mortgage</h2>
          <p className="text-gray-700 mb-4">
            Once your offer is accepted, apply formally with your lender. You will provide documents (income, assets, employment) and receive a <strong>Loan Estimate</strong> within 3 business days under TRID. The estimate shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. The mortgage process runs in parallel with other steps (inspection, appraisal, title). See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">Mortgage Application Process</Link> and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* Step 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Home Inspection and Appraisal</h2>
          <p className="text-gray-700 mb-4">
            A home inspection (optional but recommended) assesses the property&apos;s condition. The lender orders an appraisal to verify value for the <strong>loan amount</strong>. If the appraisal comes in low, you may need to renegotiate or bring more cash to close. The appraisal protects the lender and helps ensure the loan is supported by the property value. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.
          </p>
        </section>

        {/* Step 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Clear to Close</h2>
          <p className="text-gray-700 mb-4">
            Once <strong>underwriting</strong> is complete and all conditions are met, you receive clear to close. You get the Closing Disclosure at least 3 business days before closing. Review it carefully and compare it to your Loan Estimate. TRID requires this waiting period so you understand your final costs before closing. See{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link>.
          </p>
        </section>

        {/* Step 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 7: Closing</h2>
          <p className="text-gray-700 mb-4">
            At closing, you sign the loan and purchase documents, the lender funds the loan, and you receive the keys. You will pay your down payment and closing costs (or receive credits if applicable). Your first <strong>mortgage payment</strong> is typically due about a month after closing. See{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam checks credit and finances, then gets pre-approved for $320,000. Sam finds a $300,000 home and makes an offer with a financing contingency. The offer is accepted. Sam applies the same day and receives a <strong>Loan Estimate</strong> within 3 business days—<strong>loan amount</strong> $285,000 (5% down), <strong>interest rate</strong> 6.5%, <strong>mortgage payment</strong> about $1,800, <strong>closing costs</strong> about $7,500.
          </p>
          <p className="text-gray-700 mb-4">
            The inspection reveals minor issues; the seller agrees to fix them. The appraisal comes in at $302,000. <strong>Underwriting</strong> completes in 22 days. Sam receives the Closing Disclosure 4 days before closing. At closing, Sam signs the documents and pays the down payment plus closing costs. Keys in hand. This is illustrative. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Buying a house with a mortgage</strong> combines house hunting with financing. Get pre-approved first, make an offer with contingencies, then apply formally after acceptance. Your <strong>Loan Estimate</strong> (within 3 days) and Closing Disclosure (3+ days before closing) show your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Typical timeline: 30–45 days from offer to closing.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding the process helps you plan ahead. You know when to get pre-approved, when to apply, and what to expect at each stage. The financing contingency gives you an exit if the mortgage falls through—but you must meet deadlines. Missing a document or delaying can push you past closing and risk the deal.
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>Loan Estimate</strong> and Closing Disclosure (TRID) let you compare offers and verify final numbers. Knowing your <strong>mortgage payment</strong> and <strong>closing costs</strong> before you commit helps you budget. See{' '}
            <Link href="/mortgage/first-time-home-buyer" className="text-primary hover:underline font-medium">First-Time Home Buyer</Link> and{' '}
            <Link href="/mortgage/steps-to-get-a-mortgage" className="text-primary hover:underline font-medium">Steps to Get a Mortgage</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Being Prepared</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Pre-approval strengthens your offer</li>
                <li>Understanding the timeline reduces stress</li>
                <li>Contingencies protect you</li>
                <li>TRID disclosures help you compare costs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Process can take 30–45 days or more</li>
                <li>Low appraisal may require renegotiation</li>
                <li>Multiple parties must coordinate</li>
                <li>Deadlines are strict</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Making offers without pre-approval:</strong> Sellers may not take you seriously. Get pre-approved before house hunting.</li>
            <li><strong>Making large purchases before closing:</strong> New debt can affect your DTI and derail <strong>underwriting</strong>. Avoid new car loans or credit cards until after closing.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Review it within 3 days. It shows your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Compare to the Closing Disclosure before closing.</li>
            <li><strong>Waiving contingencies without understanding risk:</strong> Waiving the financing or appraisal contingency can leave you exposed if the mortgage or appraisal fails.</li>
            <li><strong>Missing document deadlines:</strong> The lender needs paperwork on time. Delays can push past your closing date and risk the deal.</li>
            <li><strong>Not budgeting for closing costs:</strong> <strong>Closing costs</strong> are separate from the down payment. Plan for 2%–5% of the <strong>loan amount</strong>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about buying a house with a mortgage">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe: mortgage process</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Owning a home</li>
            <li>Fannie Mae – Selling Guide (purchase mortgage guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }}
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
            The process varies by location, lender, and transaction.
          </p>
        </section>
      </main>
    </div>
  );
}
