import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Appraisal Requirements | Housentia',
  description:
    'Refinance appraisals verify your home\'s value. Learn when they are required, appraisal waivers, and what to expect.',
  openGraph: { title: 'Refinance Appraisal Requirements | Housentia', description: 'Understand refinance appraisal requirements.' },
};

const ARTICLE_SLUG = 'refinance-appraisal-requirements';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Appraisal Requirements' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-appraisal-requirements';

const FAQ_ITEMS = [
  {
    question: 'Do I need an appraisal to refinance?',
    answer:
      'Often yes. Conventional and cash-out refinances typically require an appraisal. FHA streamline and VA IRRRL usually do not. Some rate-and-term refinances may qualify for an appraisal waiver. See Streamline Refinance Explained.',
  },
  {
    question: 'What is an appraisal waiver?',
    answer:
      'Some lenders offer appraisal waivers for rate-and-term refinances when the loan meets certain criteria (e.g., LTV, payment history, loan-to-value limits). You may not need a new appraisal. Waiver availability varies by lender and program.',
  },
  {
    question: 'Who orders the appraisal?',
    answer:
      'The lender orders it through an appraisal management company. You typically pay the fee upfront or at closing. The appraisal fee appears on your Loan Estimate (TRID) under closing costs. See What Is an Appraisal Fee.',
  },
  {
    question: 'What if the appraisal comes in low?',
    answer:
      'A low appraisal can raise your LTV and may limit how much you can refinance or cash out. You may need to bring more to closing, adjust the loan amount, or not proceed. Underwriting uses the appraised value for LTV. See What Is LTV.',
  },
  {
    question: 'How does the appraisal affect my loan amount and LTV?',
    answer:
      'LTV = loan amount ÷ appraised value. The appraisal establishes the value. A higher value means lower LTV, which can help you qualify for a better interest rate or remove PMI. A lower value means higher LTV and may limit options. See Refinance After Home Value Increase.',
  },
  {
    question: 'Does TRID show the appraisal fee?',
    answer:
      'Yes. The appraisal fee appears on your Loan Estimate and Closing Disclosure under closing costs. TRID (TILA-RESPA Integrated Disclosure) requires these forms so you can review estimated and final costs before closing.',
  },
];

export default function RefinanceAppraisalRequirementsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Appraisal Requirements', description: 'Learn when refinance appraisals are required and about waivers.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Appraisal Requirements" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When you refinance, the lender often needs to know your home&apos;s current value. An <strong>appraisal</strong> is a professional estimate of that value.
            <strong> Underwriting</strong> uses it to calculate your <strong>LTV</strong> (loan-to-value)—the <strong>loan amount</strong> divided by the appraised value.
            LTV affects your <strong>interest rate</strong>, whether you can remove PMI, and how much you can cash out.
          </p>
          <p className="text-gray-700 mb-4">
            Refinance appraisal requirements vary by loan type. Conventional and cash-out refinances typically require an appraisal; streamline programs often do not.
            Appraisal waivers may be available for some rate-and-term refinances. The appraisal fee appears in your <strong>closing costs</strong> on the{' '}
            <strong>Loan Estimate</strong> (TRID). See <Link href="/mortgage/what-is-an-appraisal-fee" className="text-primary hover:underline font-medium">What Is an Appraisal Fee</Link>,{' '}
            <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link>, and{' '}
            <Link href="/mortgage/refinance-after-home-value-increase" className="text-primary hover:underline font-medium">Refinance After Home Value Increase</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>LTV</strong> = loan amount ÷ appraised value. The appraisal sets the denominator. A higher appraisal means lower LTV—which can mean a better{' '}
            <strong>interest rate</strong>, no PMI, or access to equity. A lower appraisal means higher LTV and may limit your options. The lender orders the
            appraisal; you pay the fee. It is part of your <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Some refinances do not require an appraisal. FHA streamline and VA IRRRL typically use your existing loan data instead of a new appraisal.
            Conventional rate-and-term refinances may qualify for an appraisal waiver when certain criteria are met. See{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>,{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Appraisal requirements table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When Is an Appraisal Required?</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Refinance Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Appraisal</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional rate-and-term</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Usually required; waiver may apply</td>
                  <td className="px-4 py-3 text-sm text-gray-700">LTV, payment history affect waiver</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Cash-out refinance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Typically required</td>
                  <td className="px-4 py-3 text-sm text-gray-700">LTV limits apply; value must support loan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">FHA streamline</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Usually not required</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Uses existing loan data</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">VA IRRRL</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Usually not required</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Streamline program; no cash out</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender and program. Your Loan Estimate shows the appraisal fee if one is required.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When an appraisal is required, the lender orders it through an appraisal management company. A licensed appraiser visits the property and prepares a report
            estimating the market value. <strong>Underwriting</strong> uses that value to calculate your <strong>LTV</strong>. Your <strong>loan amount</strong> (payoff
            or payoff plus cash-out) divided by the appraised value gives your LTV. That LTV affects your <strong>interest rate</strong>, PMI, and eligibility.
          </p>
          <p className="text-gray-700 mb-4">
            The appraisal fee appears on your <strong>Loan Estimate</strong> (TRID) under <strong>closing costs</strong>. You typically pay it upfront or at closing.
            If the appraisal comes in low, your LTV rises. You may need to reduce the <strong>loan amount</strong>, bring more to closing, or not proceed. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan wants to refinance to remove PMI. Current balance: $310,000. Morgan expects the home to be worth $400,000. If the appraisal comes in at $400,000,
            LTV = $310,000 ÷ $400,000 = 77.5%—below 80%, so no PMI on the new loan. <strong>Mortgage payment</strong> drops.
          </p>
          <p className="text-gray-700 mb-4">
            The appraisal comes in at $375,000. LTV = $310,000 ÷ $375,000 ≈ 82.7%. Still above 80%, so PMI may be required. Morgan could wait, make extra principal
            payments to lower the balance, or proceed with PMI and try again later. The appraisal fee was $550—included in <strong>closing costs</strong>. This is illustrative.
            See <Link href="/mortgage/refinance-after-home-value-increase" className="text-primary hover:underline font-medium">Refinance After Home Value Increase</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            The appraisal establishes your home&apos;s value for <strong>LTV</strong>. Conventional and cash-out refinances typically require one; streamline programs
            often do not. Appraisal waivers may apply for some rate-and-term loans. The fee appears in your <strong>closing costs</strong> on the{' '}
            <strong>Loan Estimate</strong> (TRID). A low appraisal can raise LTV and limit your options.
          </p>
        </div>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            If you are refinancing to remove PMI or access equity, the appraisal is critical. It sets the value used for <strong>LTV</strong>. A higher value means
            lower LTV—you may qualify to drop PMI or get a better <strong>interest rate</strong>. A lower value can block those goals.
          </p>
          <p className="text-gray-700 mb-4">
            Even for a simple rate-and-term refinance, an appraisal waiver can save you the fee and speed up the process. Check with your lender. Your{' '}
            <strong>Loan Estimate</strong> shows whether an appraisal is required and the estimated fee. See <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">With an Appraisal</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Establishes current value for LTV</li>
                <li>May support PMI removal or cash-out</li>
                <li>Required for most conventional and cash-out</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Appraisal Waiver / No Appraisal</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>No appraisal fee; faster process</li>
                <li>Available for some rate-and-term, streamline</li>
                <li>May not support PMI removal or cash-out</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming your home value without an appraisal:</strong> Zillow and other estimates are not used for underwriting. The lender uses the appraised value.</li>
            <li><strong>Ignoring the appraisal fee:</strong> It appears on your Loan Estimate. Factor it into your closing costs and break-even calculation.</li>
            <li><strong>Assuming you will get an appraisal waiver:</strong> Waivers are not guaranteed. Eligibility depends on LTV, payment history, and program. Ask your lender.</li>
            <li><strong>Not preparing for a low appraisal:</strong> If the value comes in low, your LTV rises. You may need to adjust the loan amount or bring more to closing. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.</li>
            <li><strong>Confusing streamline with conventional:</strong> FHA streamline and VA IRRRL usually do not require an appraisal. Conventional and cash-out typically do. See <Link href="/mortgage/fha-streamline-refinance" className="text-primary hover:underline font-medium">FHA Streamline Refinance</Link> and <Link href="/mortgage/va-irrrl-refinance" className="text-primary hover:underline font-medium">VA IRRRL Refinance</Link>.</li>
            <li><strong>Not reviewing the Loan Estimate:</strong> TRID requires the Loan Estimate within 3 business days. It shows the appraisal fee and total closing costs.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance appraisal">
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
            <li>Fannie Mae – Selling Guide (appraisal and waiver guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (appraisal requirements)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Appraisal requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
