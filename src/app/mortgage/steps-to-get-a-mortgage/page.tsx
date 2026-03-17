import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steps to Get a Mortgage: A Checklist for U.S. Homebuyers | Housentia',
  description:
    'A step-by-step checklist for getting a mortgage: from checking your credit to closing. Know what to do at each stage and what documents you need.',
  openGraph: {
    title: 'Steps to Get a Mortgage: A Checklist for U.S. Homebuyers | Housentia',
    description: 'Follow this step-by-step guide to get a mortgage.',
  },
};

const ARTICLE_SLUG = 'steps-to-get-a-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Steps to Get a Mortgage',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/steps-to-get-a-mortgage';

const FAQ_ITEMS = [
  {
    question: 'How many steps are there to get a mortgage?',
    answer:
      'The process typically has 6–8 main steps: check credit, get pre-approved, shop lenders (optional), submit application, receive Loan Estimate, go through underwriting and appraisal, receive Closing Disclosure, and close. The exact flow can vary by lender. See Mortgage Application Process and Mortgage Underwriting Explained.',
  },
  {
    question: 'What is the first step to get a mortgage?',
    answer:
      'Many borrowers start by checking their credit and getting pre-approved or prequalified. This helps you know how much you can borrow and identifies any issues to address before applying. See Mortgage Pre-Approval Process and Credit Score for Mortgage.',
  },
  {
    question: 'How long does it take to get a mortgage?',
    answer:
      'From application to closing typically takes 30 to 45 days. Pre-approval can take a few days. Under TRID, you receive a Loan Estimate within 3 business days and a Closing Disclosure at least 3 days before closing. Delays can occur with appraisals, title, or document requests.',
  },
  {
    question: 'Can I get a mortgage with bad credit?',
    answer:
      'It depends. FHA and some other programs may accept lower credit scores. You may pay a higher interest rate or need a larger down payment. See our guide on credit score requirements for more.',
  },
  {
    question: 'When do I get my Loan Estimate?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), your lender must provide a Loan Estimate within 3 business days of receiving your application. It shows your loan amount, interest rate, mortgage payment, and closing costs. Compare it to the Closing Disclosure before closing.',
  },
  {
    question: 'Should I shop multiple lenders?',
    answer:
      'Shopping lenders can help you compare interest rates and closing costs. Apply within a short window (e.g., 14–45 days) so credit inquiries are typically counted as one. Compare Loan Estimates side by side. See What Is APR and What Is Interest Rate.',
  },
];

export default function StepsToGetAMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Steps to Get a Mortgage: A Checklist for U.S. Homebuyers',
    description:
      'A step-by-step checklist for getting a mortgage from credit check to closing. Know what to do at each stage.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Steps to Get a Mortgage: A Checklist for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Getting a mortgage involves several steps from preparation to closing. This checklist walks you through each stage so you know what to expect and what to do. For a purchase, you typically get pre-approved before or while house hunting, then apply formally once your offer is accepted. For a refinance, you apply when you are ready. First-time homebuyers often benefit from understanding the full flow before starting.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days of applying and a Closing Disclosure at least 3 business days before closing. These forms show your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/steps-to-buy-a-house-with-a-mortgage" className="text-primary hover:underline font-medium">Steps to Buy a House with a Mortgage</Link> for how the mortgage fits into the home buying process.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            &quot;Getting a mortgage&quot; means applying to a lender, having your finances verified through <strong>underwriting</strong>, and closing on a loan. The lender evaluates your credit, income, assets, and the property (via appraisal) to decide whether to approve you and at what <strong>interest rate</strong>. Your <strong>loan amount</strong> and rate determine your <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            You will also pay <strong>closing costs</strong>—fees for origination, appraisal, title, and more. The <strong>Loan Estimate</strong> and Closing Disclosure list these. Understanding each step helps you stay on track and avoid delays. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Process stages table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Process Stages at a Glance</h2>
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
                  <td className="px-4 py-3 text-sm text-gray-700">Pre-approval</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender verifies finances, estimates loan amount and rate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Application</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Formal application submitted; Loan Estimate within 3 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Underwriting</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender reviews documents, orders appraisal</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Clear to close</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Conditions met; Closing Disclosure sent 3+ days before closing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Sign documents, lender funds loan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">TRID sets disclosure timelines. Process typically takes 30–45 days from application to closing.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You prepare your finances, check credit, and get pre-approved. You may shop lenders to compare <strong>interest rates</strong> and <strong>closing costs</strong>. When you have a purchase contract (or for refinance, when ready), you submit a formal application. The lender provides a <strong>Loan Estimate</strong> within 3 business days. <strong>Underwriting</strong> reviews your application and orders an appraisal. When conditions are satisfied, you receive clear to close. The Closing Disclosure arrives at least 3 days before closing. At closing, you sign and the lender funds the loan.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> is based on the <strong>loan amount</strong>, <strong>interest rate</strong>, and term. The <strong>Loan Estimate</strong> and Closing Disclosure show these figures. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Step 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Check Your Credit</h2>
          <p className="text-gray-700 mb-4">
            Review your credit report and score. Lenders use credit to qualify you and set your <strong>interest rate</strong>. Fix errors, pay down debt if possible, and avoid new credit inquiries before applying. A higher score can mean a lower rate and a lower <strong>mortgage payment</strong>. See{' '}
            <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>.
          </p>
        </section>

        {/* Step 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Get Pre-Approved or Prequalified</h2>
          <p className="text-gray-700 mb-4">
            Pre-approval involves verification of your finances and a credit check. Prequalification is typically a quick estimate without full verification. For house hunting, pre-approval is stronger—it shows sellers you can obtain financing and gives you an estimated <strong>loan amount</strong> and rate. See{' '}
            <Link href="/mortgage/mortgage-pre-approval-process" className="text-primary hover:underline font-medium">Mortgage Pre-Approval Process</Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-pre-approval-vs-pre-qualification" className="text-primary hover:underline font-medium">Pre-Approval vs Pre-Qualification</Link>.
          </p>
        </section>

        {/* Step 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Shop Lenders (Optional but Recommended)</h2>
          <p className="text-gray-700 mb-4">
            Compare <strong>interest rates</strong> and <strong>closing costs</strong> from multiple lenders. Apply within a short window (e.g., 14–45 days) so credit inquiries are typically counted as one. Compare <strong>Loan Estimates</strong> when you receive them—look at the <strong>loan amount</strong>, rate, <strong>mortgage payment</strong>, and total costs. See{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.
          </p>
        </section>

        {/* Step 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Submit Your Application</h2>
          <p className="text-gray-700 mb-4">
            When you have a purchase contract (or for refinance, when you are ready), submit your formal application. Provide pay stubs, W-2s, tax returns, bank statements, and ID. The lender will provide a <strong>Loan Estimate</strong> within 3 business days under TRID. It shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">Mortgage Application Process</Link> and{' '}
            <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>.
          </p>
        </section>

        {/* Step 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Underwriting and Appraisal</h2>
          <p className="text-gray-700 mb-4">
            The lender reviews your application (<strong>underwriting</strong>) and orders an appraisal. Respond quickly to any document requests. You may receive conditional approval with items to clear. The appraisal verifies the property value for the <strong>loan amount</strong>. See{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link>.
          </p>
        </section>

        {/* Step 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Clear to Close and Closing Disclosure</h2>
          <p className="text-gray-700 mb-4">
            Once conditions are met, you receive clear to close. The lender sends the Closing Disclosure at least 3 business days before closing. Review it and compare to your <strong>Loan Estimate</strong>—check the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. TRID requires this waiting period so you can review final numbers before signing.
          </p>
        </section>

        {/* Step 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 7: Closing</h2>
          <p className="text-gray-700 mb-4">
            At closing, you sign the loan documents, the lender funds the loan, and you receive the keys (for a purchase). Bring ID and funds for closing if required. Your first <strong>mortgage payment</strong> is typically due about a month after closing. See{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor checks credit (score 720), gets pre-approved for $280,000, and shops three lenders. Taylor chooses one and applies after an offer is accepted on a $265,000 home. The <strong>Loan Estimate</strong> arrives in 2 days—<strong>loan amount</strong> $251,750 (5% down), <strong>interest rate</strong> 6.75%, <strong>mortgage payment</strong> about $1,630, <strong>closing costs</strong> about $6,800. <strong>Underwriting</strong> requests two bank statements; Taylor submits them the same day.
          </p>
          <p className="text-gray-700 mb-4">
            The appraisal comes in at $268,000. Clear to close in 28 days. Taylor receives the Closing Disclosure 4 days before closing. At closing, Taylor signs the documents and pays the down payment plus <strong>closing costs</strong>. Keys in hand. This is illustrative. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Getting a mortgage</strong> follows a clear path: credit check → pre-approval → (optional) shop lenders → application → <strong>Loan Estimate</strong> (within 3 days) → <strong>underwriting</strong> and appraisal → Closing Disclosure (3+ days before closing) → closing. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are set by the lender based on your qualifications. Typical timeline: 30–45 days from application to closing.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding the mortgage process helps you plan and avoid delays. You know when to get pre-approved, what documents to gather, and when to expect the <strong>Loan Estimate</strong> and Closing Disclosure. Responding quickly to document requests keeps <strong>underwriting</strong> on track. Shopping lenders can save you money on your <strong>interest rate</strong> and <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>Loan Estimate</strong> and Closing Disclosure (TRID) let you compare offers and verify final numbers. Knowing your <strong>mortgage payment</strong> before you commit helps you budget. See{' '}
            <Link href="/mortgage/steps-to-buy-a-house-with-a-mortgage" className="text-primary hover:underline font-medium">Steps to Buy a House with a Mortgage</Link> and{' '}
            <Link href="/mortgage/mortgage-qualification-checklist" className="text-primary hover:underline font-medium">Mortgage Qualification Checklist</Link>.
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
                <li>Understanding steps reduces stress</li>
                <li>TRID disclosures help you compare costs</li>
                <li>Shopping lenders can save money</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Process takes 30–45 days or more</li>
                <li>Document requests can be extensive</li>
                <li>Appraisal delays can occur</li>
                <li>Strict deadlines apply</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Applying without pre-approval:</strong> For purchases, get pre-approved first. It shows sellers you are serious and helps you know your <strong>loan amount</strong> and budget.</li>
            <li><strong>Making large purchases before closing:</strong> New debt can affect your DTI and derail <strong>underwriting</strong>. Avoid new car loans or credit cards until after closing.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Review it within 3 days. It shows your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Compare to the Closing Disclosure before closing.</li>
            <li><strong>Delaying document responses:</strong> The lender needs paperwork on time. Slow responses can push past your closing date.</li>
            <li><strong>Not shopping lenders:</strong> Rates and <strong>closing costs</strong> vary. Compare <strong>Loan Estimates</strong> from multiple lenders. Apply within 14–45 days so inquiries count as one.</li>
            <li><strong>Not budgeting for closing costs:</strong> <strong>Closing costs</strong> are separate from the down payment. Plan for 2%–5% of the <strong>loan amount</strong>. See <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about steps to get a mortgage">
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
            <li>Fannie Mae – Selling Guide (mortgage guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
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
            The process varies by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
