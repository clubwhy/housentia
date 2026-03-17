import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'USDA vs FHA Loan | Housentia',
  description:
    'Compare USDA and FHA loans: zero down vs 3.5% down, property location, income limits, and when each makes sense.',
  openGraph: { title: 'USDA vs FHA Loan | Housentia', description: 'Compare USDA and FHA loans.' },
};

const ARTICLE_SLUG = 'usda-vs-fha-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'USDA vs FHA Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/usda-vs-fha-loan';

const FAQ_ITEMS = [
  {
    question: 'What is the main difference between USDA and FHA?',
    answer:
      'USDA offers 100% financing (zero down) for eligible rural/suburban areas with income limits. FHA allows 3.5% down with more flexible location and no income limits. Both are government-backed. Your Loan Estimate (TRID) shows the loan amount, interest rate, mortgage payment, and closing costs for each. See USDA Loan and FHA Loan.',
  },
  {
    question: 'Which has lower down payment?',
    answer:
      'USDA has zero down. FHA requires 3.5% minimum (or 10% with lower credit). USDA can mean less cash at closing if the property qualifies. See Down Payment Requirements Explained.',
  },
  {
    question: 'Where can I use each loan?',
    answer:
      'USDA is limited to eligible rural and suburban areas—check the USDA eligibility map. FHA can be used almost anywhere for primary residences. If the property is not USDA-eligible, FHA is the option.',
  },
  {
    question: 'When is USDA better than FHA?',
    answer:
      'USDA can be better if the property qualifies, you meet income limits, and you want zero down. USDA guarantee fees (1% upfront, 0.35% annual) may be lower than FHA MIP (1.75% upfront, plus annual) in some cases. Compare using your Loan Estimate.',
  },
  {
    question: 'When is FHA better than USDA?',
    answer:
      'FHA is better if the property is not USDA-eligible, you exceed USDA income limits, or you prefer a property in an urban area. FHA has no income limits. See FHA vs Conventional Loan for broader comparison.',
  },
  {
    question: 'Do both use the same Loan Estimate?',
    answer:
      'Yes. Under TRID (TILA-RESPA Integrated Disclosure), both USDA and FHA lenders provide a Loan Estimate within 3 business days. Use it to compare interest rate, mortgage payment, closing costs, and APR. See What Is APR.',
  },
];

export default function UsdaVsFhaLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'USDA vs FHA Loan', description: 'Compare USDA and FHA: zero down vs 3.5%, location, income limits.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="USDA vs FHA Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>USDA vs FHA</strong> is a common comparison for first-time homebuyers seeking low or no down payment options. USDA offers 100% financing (zero down) for eligible rural and suburban areas but has income limits and property location requirements. FHA allows 3.5% down with no income limits and can be used almost anywhere. Both affect your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days of application for either loan type. Use it to compare. See{' '}
            <Link href="/mortgage/usda-loan" className="text-primary hover:underline font-medium">What Is a USDA Loan</Link>,{' '}
            <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>, and{' '}
            <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Both USDA and FHA are government-backed. USDA is guaranteed by the U.S. Department of Agriculture; FHA is insured by the Federal Housing Administration. USDA requires no down payment—your <strong>loan amount</strong> can equal the purchase price (up to appraised value). FHA requires at least 3.5% down—your <strong>loan amount</strong> is the purchase price minus your down payment.
          </p>
          <p className="text-gray-700 mb-4">
            USDA charges an upfront guarantee fee (typically 1%) and an annual fee (typically 0.35%). FHA charges upfront MIP (typically 1.75%) and annual MIP. Both add to your <strong>closing costs</strong> and <strong>mortgage payment</strong>. Your <strong>Loan Estimate</strong> (TRID) shows the breakdown. <strong>Underwriting</strong> verifies eligibility—USDA has income limits; FHA does not. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: USDA vs FHA comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">USDA vs FHA: Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">USDA</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">FHA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Down payment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0% (100% financing)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">3.5% (or 10% with lower credit)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Upfront fee</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1% guarantee fee</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.75% MIP</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Annual fee</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.35%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.45%–1.05% (varies by LTV)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Property location</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Eligible rural/suburban only</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Any (primary residence)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Income limits</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Yes (by area)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Rates and rules are subject to change. See USDA and HUD guidelines.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply through a USDA-approved or FHA-approved lender. <strong>Underwriting</strong> verifies eligibility. For USDA: the property must be in an eligible area (check the USDA map), and your household income must be within the area limit. For FHA: the property must meet minimum standards; there are no income limits.             Both require primary residence.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) shows the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> for each option. Compare the total cost—including upfront fees and annual fees. The <strong>interest rate</strong> may be similar; the fees differ. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor is buying a $260,000 home in an eligible rural area. Taylor qualifies for both USDA and FHA. USDA: <strong>loan amount</strong> $260,000 (100% financing). Upfront fee: 1% × $260,000 = $2,600. FHA: 3.5% down = $9,100, <strong>loan amount</strong> $250,900. Upfront MIP: 1.75% × $250,900 = $4,391.
          </p>
          <p className="text-gray-700 mb-4">
            At 6.5% <strong>interest rate</strong>, USDA <strong>mortgage payment</strong> (principal, interest, annual fee) is about $1,780. FHA (principal, interest, annual MIP) is about $1,850. USDA has a higher <strong>loan amount</strong> but lower fees. Taylor has limited cash—USDA requires no down payment, so Taylor chooses USDA. Taylor pays <strong>closing costs</strong>; seller concessions cover part. This is illustrative. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link> and{' '}
            <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>USDA</strong> offers zero down for eligible rural/suburban areas with income limits. <strong>FHA</strong> allows 3.5% down with no income limits and broader location. Use your <strong>Loan Estimate</strong> (TRID) to compare <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. If the property qualifies and you meet income limits, USDA may save cash at closing. See{' '}
            <Link href="/mortgage/usda-loan" className="text-teal-700 underline font-medium">USDA Loan</Link> and{' '}
            <Link href="/mortgage/fha-loan" className="text-teal-700 underline font-medium">FHA Loan</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            USDA can help buyers who qualify for rural or suburban areas and meet income limits. Zero down means less cash at closing—but you still pay <strong>closing costs</strong> and the upfront guarantee fee. FHA can help buyers who want to live in urban areas or exceed USDA income limits. The 3.5% down payment is lower than conventional but still requires savings.
          </p>
          <p className="text-gray-700 mb-4">
            Compare both loan types using your <strong>Loan Estimate</strong>. The <strong>mortgage payment</strong> and total cost over time may differ. USDA guarantee fees may be lower than FHA MIP in some cases. Your <strong>interest rate</strong> affects your payment—shop lenders. See{' '}
            <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link> and{' '}
            <Link href="/mortgage/upfront-mortgage-insurance-explained" className="text-primary hover:underline font-medium">Upfront Mortgage Insurance Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">USDA</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>Zero down payment</li>
                <li>Lower guarantee fees than FHA MIP in some cases</li>
                <li>Competitive interest rates</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Income limits apply</li>
                <li>Property must be in eligible area</li>
                <li>Primary residence only</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">FHA</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>No income limits</li>
                <li>Can be used almost anywhere</li>
                <li>3.5% down with 580+ credit</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Higher upfront MIP (1.75%)</li>
                <li>MIP often lasts for life of loan</li>
                <li>3.5% down still required</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming USDA applies everywhere:</strong> USDA is limited to eligible rural and suburban areas. Check the USDA eligibility map before house hunting. If the property is not eligible, FHA is the option.</li>
            <li><strong>Overlooking income limits:</strong> USDA has income limits by area and household size. If you exceed them, you will not qualify. FHA has no income limits.</li>
            <li><strong>Comparing only the interest rate:</strong> The <strong>interest rate</strong> may be similar. Compare the full <strong>mortgage payment</strong> (including fees), <strong>closing costs</strong>, and <strong>loan amount</strong>. Use your <strong>Loan Estimate</strong> (TRID).</li>
            <li><strong>Forgetting closing costs:</strong> USDA has zero down but you still pay <strong>closing costs</strong> and the upfront guarantee fee. FHA requires 3.5% down plus <strong>closing costs</strong> and upfront MIP. See <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.</li>
            <li><strong>Not getting Loan Estimates for both:</strong> Get <strong>Loan Estimates</strong> for USDA and FHA from the same or different lenders. Compare side by side. TRID requires the form within 3 business days of application.</li>
            <li><strong>Choosing USDA without verifying property:</strong> Confirm the property is USDA-eligible before making an offer. If it is not, you will need FHA or another loan type.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about USDA vs FHA">
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
            <li>U.S. Department of Agriculture (USDA) – Single Family Housing Guaranteed Loan Program</li>
            <li>U.S. Department of Agriculture (USDA) – Eligibility Map</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Mortgage Insurance Premiums</li>
          </ul>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Program rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
