import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Loan Timeline: What to Expect | Housentia',
  description:
    'A typical mortgage takes 30 to 45 days from application to closing. Learn the mortgage loan timeline, key milestones, and what can cause delays.',
  openGraph: {
    title: 'Mortgage Loan Timeline: What to Expect | Housentia',
    description: 'Understand the typical mortgage timeline and key milestones.',
  },
};

const ARTICLE_SLUG = 'mortgage-loan-timeline';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Loan Timeline',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-loan-timeline';

const FAQ_ITEMS = [
  {
    question: 'How long does a mortgage take from application to closing?',
    answer:
      'Typically 30 to 45 days for a purchase or refinance. Some lenders can close faster; delays can occur with appraisals, title issues, or document requests. Your Loan Estimate (provided within 3 business days under TRID) sets your loan amount, interest rate, and closing costs—the timeline is separate from those terms.',
  },
  {
    question: 'What are the key milestones in the mortgage timeline?',
    answer:
      'Application → Loan Estimate (3 days) → Processing → Underwriting → Conditional approval → Appraisal/title → Clear to close → Closing Disclosure (3 days before) → Closing. See our guide for a detailed breakdown of each stage.',
  },
  {
    question: 'What can delay a mortgage?',
    answer:
      'Delays can occur from: slow document response, appraisal scheduling, title issues, low appraisal, underwriting conditions, or changes to your financial situation. Respond quickly to requests to minimize delays. Avoid major purchases or job changes during underwriting.',
  },
  {
    question: 'Can I speed up the mortgage process?',
    answer:
      'Provide documents promptly, respond to requests quickly, and avoid major financial changes. Some lenders offer expedited processes for straightforward loans. Your DTI, LTV, and documentation completeness affect how fast underwriting can proceed.',
  },
  {
    question: 'When will I know my interest rate and mortgage payment?',
    answer:
      'Your Loan Estimate (within 3 business days of application) shows the estimated interest rate, loan amount, mortgage payment, and closing costs. These may change slightly until you lock your rate. The Closing Disclosure confirms final terms at least 3 days before closing under TRID.',
  },
  {
    question: 'Does the timeline affect my closing costs?',
    answer:
      'No. Your closing costs are set in the Loan Estimate and confirmed in the Closing Disclosure. TRID rules limit how much certain costs can increase. The timeline (30–45 days) is about how long processing and underwriting take—not about changing your loan terms.',
  },
];

export default function MortgageLoanTimelinePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Loan Timeline: What to Expect',
    description:
      'A typical mortgage takes 30 to 45 days. Learn the timeline, key milestones, and what can cause delays.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Loan Timeline: What to Expect" breadcrumbs={BREADCRUMBS} />
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
            A typical mortgage takes <strong>30 to 45 days</strong> from application to closing. The timeline varies by
            lender, loan type, and how quickly you provide documents. Understanding the key milestones helps first-time
            homebuyers know what to expect—from your <strong>Loan Estimate</strong> (within 3 business days under TRID)
            to your final <strong>closing costs</strong> and <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) govern the disclosures you
            receive. TRID (TILA-RESPA Integrated Disclosure) requires the Loan Estimate within 3 business days and the
            Closing Disclosure at least 3 business days before closing. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and terms are set through these disclosures. See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">Mortgage Application Process</Link> and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the clock starts. Within 3 business days you receive a <strong>Loan Estimate</strong> with
            your estimated <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>,
            and <strong>closing costs</strong>. Processing and <strong>underwriting</strong> follow. The lender verifies
            your income, assets, and credit; orders an appraisal and title; and reviews the file. Once you are clear to
            close, you receive the Closing Disclosure. At least 3 business days later, you close.
          </p>
          <p className="text-gray-700 mb-4">
            The timeline is separate from your loan terms. Your rate and payment do not change because the process takes
            30 or 45 days—they are locked (or float) based on when you lock. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 1: Timeline table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Typical Timeline</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Stage</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Approx. Timing</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Application</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Day 0</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You submit; lender begins review</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Loan Estimate</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Days 1–3</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender must provide within 3 business days (TRID)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Processing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Days 1–14</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Documents collected; appraisal and title ordered</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Underwriting</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Days 7–21</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender reviews file; may issue conditions</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Clear to close</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Days 21–35</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing Disclosure sent; 3-day wait before closing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Days 30–45</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You sign; loan funds; keys (purchase)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Timing is approximate. Some loans close faster; others take longer.</p>
        </section>

        {/* How It Works (narrative) */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After you apply, the lender has 3 business days to send a <strong>Loan Estimate</strong>. This shows your
            estimated <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>,
            and <strong>closing costs</strong>. Processing begins: the lender collects pay stubs, bank statements, tax
            returns, and other documents. An appraisal is ordered to confirm the property value (affects{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>). Title
            is ordered to check for liens or ownership issues.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> reviews your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>, credit,
            income, and assets. You may receive a conditional approval with items to satisfy. Once all conditions are
            met, you are clear to close. The lender sends the Closing Disclosure; TRID requires at least 3 business
            days before closing. At closing, you sign the note and mortgage, pay your cash to close, and receive the
            keys (for a purchase). See{' '}
            <Link href="/mortgage/mortgage-funding-process" className="text-primary hover:underline font-medium">Mortgage Funding Process</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan applies for a $280,000 conventional loan on Monday. By Thursday, Jordan receives the{' '}
            <strong>Loan Estimate</strong>: 6.75% <strong>interest rate</strong>, about $1,815 <strong>mortgage payment</strong> (P&I),
            $8,200 in <strong>closing costs</strong>. Jordan locks the rate and submits documents within a week.
            Processing orders the appraisal and title. <strong>Underwriting</strong> reviews and issues two conditions:
            a letter explaining a 2-month employment gap and an updated bank statement.
          </p>
          <p className="text-gray-700 mb-4">
            Jordan provides both within 3 days. On day 28, Jordan is clear to close. The Closing Disclosure arrives;
            Jordan waits 3 business days (TRID) and closes on day 34. Total timeline: 34 days. The example is
            illustrative. Timelines vary. See{' '}
            <Link href="/mortgage/mortgage-conditional-approval-explained" className="text-primary hover:underline font-medium">Mortgage Conditional Approval Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-emerald-900 mb-2">Key Takeaway</h3>
          <p className="text-emerald-800 text-[15px] leading-relaxed">
            Plan for 30–45 days from application to closing. Respond quickly to document requests and avoid major
            financial changes during <strong>underwriting</strong>. Your <strong>Loan Estimate</strong> (within 3 days)
            and Closing Disclosure (3 days before closing) set your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>.
            TRID protects you with required waiting periods.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers often wonder how long the mortgage takes and what happens next. Knowing the timeline helps
            you coordinate with your purchase contract, plan your move, and avoid surprises. If your contract has a
            30-day closing contingency, a 45-day timeline may require negotiation. Understanding milestones—Loan
            Estimate, conditional approval, clear to close—helps you track progress.
          </p>
          <p className="text-gray-700 mb-4">
            TRID gives you time to review. The 3-day Loan Estimate window lets you compare offers. The 3-day Closing
            Disclosure period lets you verify final terms before you sign. Your <strong>mortgage payment</strong> and{' '}
            <strong>closing costs</strong> are disclosed in advance. See{' '}
            <Link href="/mortgage/closing-disclosure-explained" className="text-primary hover:underline font-medium">Closing Disclosure Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of the Mortgage Timeline</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>TRID gives you 3 days to review Loan Estimate and Closing Disclosure</li>
                <li>Structured process with clear milestones</li>
                <li>Time to gather documents and satisfy conditions</li>
                <li>Some lenders offer faster timelines for simple loans</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>30–45 days can feel long when waiting for approval</li>
                <li>Delays can push closing past contract dates</li>
                <li>Rate lock may expire if timeline extends</li>
                <li>Document requests can be frequent</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming a 2-week close:</strong> Most loans take 30–45 days. Plan your purchase contract and move accordingly. Rush closings are possible but not typical.</li>
            <li><strong>Delaying document responses:</strong> Each day you wait to send pay stubs, bank statements, or letters adds to the timeline. Respond within 24–48 hours when possible.</li>
            <li><strong>Making major financial changes during underwriting:</strong> Large purchases, new credit, or job changes can trigger re-verification and delay approval. Avoid until after closing.</li>
            <li><strong>Ignoring the 3-day Closing Disclosure rule:</strong> TRID requires at least 3 business days between receiving the Closing Disclosure and closing. You cannot waive this for most loans. Plan your closing date accordingly.</li>
            <li><strong>Not locking your rate:</strong> If you float, your interest rate and mortgage payment can change. Lock when you are comfortable with the terms. Rate locks have expiration dates—close before the lock expires.</li>
            <li><strong>Underestimating appraisal and title time:</strong> Appraisal scheduling and title work can take 1–2 weeks. Order early. Low appraisals or title issues can add significant delay.</li>
          </ul>
        </section>

        {/* What Can Cause Delays (keep but integrate) */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can Cause Delays</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Slow response to document requests</li>
            <li>Appraisal scheduling or low appraisal requiring renegotiation</li>
            <li>Title issues (liens, errors, boundary disputes)</li>
            <li>Underwriting conditions that take time to satisfy</li>
            <li>Changes to your financial situation requiring re-verification</li>
          </ul>
          <p className="text-gray-700">
            Respond promptly to requests and keep your lender informed to minimize delays.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about mortgage timeline">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe: mortgage timeline</li>
            <li>Consumer Financial Protection Bureau (CFPB) – 3-day rule and closing</li>
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
            Timelines vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
