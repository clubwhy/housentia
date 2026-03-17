import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Documentation Requirements | Housentia',
  description:
    'Refinance documentation typically includes income, assets, and identification. Streamline programs may require less. Learn what to prepare.',
  openGraph: { title: 'Refinance Documentation Requirements | Housentia', description: 'Understand refinance documentation.' },
};

const ARTICLE_SLUG = 'refinance-documentation-requirements';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Documentation Requirements' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-documentation-requirements';

const FAQ_ITEMS = [
  {
    question: 'What documents do I need to refinance?',
    answer:
      'Typically: pay stubs (2 months), W-2s (2 years), tax returns (2 years), bank statements (2 months), government-issued ID, and your current mortgage statement. The lender uses these during underwriting to verify income, assets, and payoff. Requirements vary by loan type and lender. See Mortgage Application Documents.',
  },
  {
    question: 'Do streamline refinances need less documentation?',
    answer:
      'Yes. FHA streamline and VA IRRRL often require minimal documentation—sometimes just proof of on-time payments, a mortgage statement, and a few items. No full income verification or appraisal in many cases. See FHA Streamline Refinance and VA IRRRL Refinance.',
  },
  {
    question: 'Why does the lender need my mortgage statement?',
    answer:
      'To verify your current balance (payoff amount), payment history, and that the loan is in good standing. This helps determine the new loan amount and eligibility. The payoff is used to calculate closing figures.',
  },
  {
    question: 'What if I am self-employed?',
    answer:
      'You may need business tax returns, profit-and-loss statements, 1099s, and other documentation. Underwriting may use a different income calculation. See Self-Employed Borrower for more.',
  },
  {
    question: 'How does TRID apply to refinance documentation?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate within 3 business days of application. The lender uses your application and documents to verify the loan amount, interest rate, and mortgage payment shown. If verified data differs, your terms could change.',
  },
  {
    question: 'When should I gather my documents?',
    answer:
      'Before you apply. Having pay stubs, tax returns, bank statements, and your mortgage statement ready can speed up the process. Delays in providing documents can slow underwriting and push back your closing date.',
  },
];

export default function RefinanceDocumentationRequirementsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Documentation Requirements', description: 'Learn what documents you need for a refinance.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Documentation Requirements" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When you refinance, the lender needs to verify your income, assets, and identity—similar to a purchase loan. <strong>Refinance documentation</strong> typically
            includes pay stubs, tax returns, bank statements, ID, and your current <strong>mortgage statement</strong>. <strong>Underwriting</strong> uses these to
            confirm you can afford the new <strong>loan amount</strong> and <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Streamline programs (FHA streamline, VA IRRRL) often require less documentation. Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement
            Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days. The lender verifies
            your application data with your documents. See <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>,{' '}
            <Link href="/mortgage/fha-streamline-refinance" className="text-primary hover:underline font-medium">FHA Streamline Refinance</Link>, and{' '}
            <Link href="/mortgage/va-irrrl-refinance" className="text-primary hover:underline font-medium">VA IRRRL Refinance</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> evaluates your ability to repay. Income documents (pay stubs, W-2s, tax returns) verify your earnings. Asset documents
            (bank statements) show reserves and that you can cover <strong>closing costs</strong>. Your <strong>mortgage statement</strong> confirms your current
            balance and payment history. The payoff amount is used to calculate the new <strong>loan amount</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>DTI</strong> (debt-to-income) includes the new <strong>mortgage payment</strong>. The lender verifies that your income supports it.
            Your <strong>Loan Estimate</strong> shows the estimated <strong>interest rate</strong>, payment, and costs—based on the information you provide.
            If verified data differs, terms could change. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Document categories table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Refinance Document Categories</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Examples</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Streamline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Income</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay stubs, W-2s, tax returns</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often waived</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Assets</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Bank statements (2 months)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often minimal</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Identity</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Government-issued ID</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Usually required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Current mortgage</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Mortgage statement, payoff</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Usually required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender and program. Streamline = FHA streamline, VA IRRRL.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply for a refinance and provide the requested documents. The lender&apos;s <strong>underwriting</strong> team reviews them to verify income,
            assets, credit, and property. Your <strong>mortgage statement</strong> confirms the payoff. The lender orders an appraisal (or waiver) for LTV.
            You receive a <strong>Loan Estimate</strong> within 3 business days.
          </p>
          <p className="text-gray-700 mb-4">
            If documents are incomplete or raise questions, the lender may request more. Delays can push back your closing. Having everything ready upfront helps.
            Your <strong>Loan Estimate</strong> shows the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong>. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan applies for a rate-and-term refinance. Jordan gathers: 2 months of pay stubs, 2 years of W-2s and tax returns, 2 months of bank statements,
            driver&apos;s license, and the current mortgage statement showing a $285,000 balance. The lender verifies income for DTI and assets for reserves.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> approves. Jordan receives a <strong>Loan Estimate</strong> with a new <strong>interest rate</strong> of 6.25%,{' '}
            <strong>mortgage payment</strong> of $1,754, and <strong>closing costs</strong> of $4,800. At closing, the new loan pays off the $285,000. This is
            illustrative. See <Link href="/mortgage/how-mortgage-refinancing-works" className="text-primary hover:underline font-medium">How Mortgage Refinancing Works</Link> and{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Refinance documentation</strong> typically includes income (pay stubs, tax returns), assets (bank statements), ID, and your current{' '}
            <strong>mortgage statement</strong>. <strong>Underwriting</strong> uses these to verify your <strong>loan amount</strong>, <strong>mortgage payment</strong>,
            and <strong>DTI</strong>. Streamline programs (FHA, VA) often require less. Gather documents before you apply to speed the process.
          </p>
        </div>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            Having your documents ready can speed up <strong>underwriting</strong> and help you close sooner. Missing or incomplete documents can delay your
            refinance—and if <strong>interest rates</strong> rise while you wait, your <strong>Loan Estimate</strong> could change. Your <strong>mortgage statement</strong> is
            especially important: it confirms your payoff and payment history.
          </p>
          <p className="text-gray-700 mb-4">
            Streamline programs may require far less. If you have an FHA or VA loan and qualify for a streamline refinance, you may need only proof of on-time
            payments and a few items. See <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
            <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Full Documentation (Conventional, Cash-Out)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Standard income, asset, ID verification</li>
                <li>May qualify for best rates</li>
                <li>More paperwork to gather</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Streamline (FHA, VA)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Minimal documentation</li>
                <li>Faster process, often no appraisal</li>
                <li>Limited to FHA/VA borrowers; no cash out</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Waiting to gather documents until after you apply:</strong> Have pay stubs, tax returns, bank statements, and your mortgage statement ready. Delays can slow underwriting.</li>
            <li><strong>Providing incomplete bank statements:</strong> Include all pages. Lenders may ask about large deposits. Use the same accounts you disclosed on your application.</li>
            <li><strong>Forgetting the mortgage statement:</strong> The lender needs it to verify your payoff and payment history. Request it from your servicer if you do not have it.</li>
            <li><strong>Assuming streamline means no documents:</strong> Streamline programs still require some items—proof of on-time payments, mortgage statement, and possibly ID. See <Link href="/mortgage/fha-streamline-refinance" className="text-primary hover:underline font-medium">FHA Streamline Refinance</Link>.</li>
            <li><strong>Self-employed without proper docs:</strong> You may need business tax returns, P&L statements, and 1099s. See <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower</Link>.</li>
            <li><strong>Not responding quickly to document requests:</strong> Underwriting may need clarification. Respond promptly to avoid delays. Your Loan Estimate and rate lock may be affected.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance documentation">
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
            <li>Fannie Mae – Selling Guide (refinance documentation)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (refinance)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Documentation requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
