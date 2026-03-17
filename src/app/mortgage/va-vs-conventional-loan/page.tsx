import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VA vs Conventional Loan | Housentia',
  description:
    'Compare VA and conventional loans: zero down for eligible veterans, no PMI, funding fee vs. down payment, and when each makes sense.',
  openGraph: { title: 'VA vs Conventional Loan | Housentia', description: 'Compare VA and conventional loans.' },
};

const ARTICLE_SLUG = 'va-vs-conventional-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'VA vs Conventional Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/va-vs-conventional-loan';

const FAQ_ITEMS = [
  {
    question: 'What is the main difference between VA and conventional?',
    answer:
      'VA loans offer zero down payment and no PMI for eligible veterans and service members. Conventional typically requires a down payment and PMI when LTV exceeds 80%. VA has a funding fee; conventional has no funding fee. Your Loan Estimate (TRID) shows the loan amount, interest rate, mortgage payment, and closing costs for each. See VA Loan and Conventional Loan.',
  },
  {
    question: 'Does VA have a funding fee?',
    answer:
      'Yes. VA charges a funding fee (can be financed) unless you are exempt (e.g., disability). The fee helps fund the program. No monthly mortgage insurance. The funding fee varies by down payment and service type. See What Is APR.',
  },
  {
    question: 'Who qualifies for a VA loan?',
    answer:
      'Active duty, veterans, and certain surviving spouses. You need a Certificate of Eligibility (COE). Service requirements apply. Conventional has no military requirement—any qualified borrower can apply. See What Is DTI and What Is LTV.',
  },
  {
    question: 'When is VA better than conventional?',
    answer:
      'VA is often better for eligible borrowers who want zero down and no PMI. Your mortgage payment may be lower without PMI. Conventional may be better if you have 20% down (no PMI) or want to avoid the funding fee. Compare using your Loan Estimate.',
  },
  {
    question: 'Do both use the same Loan Estimate?',
    answer:
      'Yes. Under TRID (TILA-RESPA Integrated Disclosure), both VA and conventional lenders provide a Loan Estimate within 3 business days. Use it to compare interest rate, mortgage payment, closing costs, and APR. See What Is APR.',
  },
  {
    question: 'Can I use VA for a second home or investment property?',
    answer:
      'VA loans are for primary residence only. Conventional loans can be used for second homes and investment properties. If you are not buying a primary residence, conventional (or another loan type) may be the option.',
  },
];

export default function VaVsConventionalLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'VA vs Conventional Loan', description: 'Compare VA and conventional: zero down, no PMI, funding fee.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="VA vs Conventional Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>VA vs conventional</strong> is a common comparison for eligible veterans and service members. VA loans offer zero down payment and no PMI (private mortgage insurance); conventional loans typically require a down payment and PMI when your <strong>loan amount</strong> exceeds 80% of the home&apos;s value (LTV). VA has a funding fee; conventional has no funding fee. Your choice affects your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days of application for either loan type. Use it to compare. See{' '}
            <Link href="/mortgage/va-loan" className="text-primary hover:underline font-medium">What Is a VA Loan</Link>,{' '}
            <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link>, and{' '}
            <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>VA loans</strong> are guaranteed by the U.S. Department of Veterans Affairs. Lenders can offer 100% financing—no down payment—because the VA guarantees a portion of the loan. There is no monthly PMI; instead, VA charges a one-time funding fee at closing (or when refinancing). Veterans with disability may be exempt. <strong>Conventional loans</strong> are not government-backed. They follow Fannie Mae and Freddie Mac guidelines. With less than 20% down, you pay PMI until you reach 80% LTV.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>loan amount</strong> is the purchase price minus your down payment. VA allows 0% down, so your <strong>loan amount</strong> can equal the purchase price (up to appraised value). Conventional may require 3%–20% down. Your <strong>mortgage payment</strong> is based on the <strong>loan amount</strong>, <strong>interest rate</strong>, and term. VA has no PMI, so the payment may be lower than conventional with PMI. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: VA vs Conventional comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">VA vs Conventional: Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">VA</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Conventional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Down payment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0% (100% financing)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">3%–20% (typically)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">PMI / mortgage insurance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">None</td>
                  <td className="px-4 py-3 text-sm text-gray-700">PMI when LTV &gt; 80%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Funding fee / upfront cost</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Funding fee (disability exempt)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">None</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Eligibility</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Veterans, active duty, spouses</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Any qualified borrower</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Property use</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Primary residence only</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Primary, second home, investment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">VA funding fee rates vary by down payment and service. Conventional PMI can be removed at 80% LTV.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply through a VA-approved or conventional lender. <strong>Underwriting</strong> verifies eligibility. For VA, you need a Certificate of Eligibility (COE) from the VA. For conventional, the lender uses Fannie Mae or Freddie Mac guidelines. Both require proof of income, assets, and employment—though VA may be more flexible in some cases.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) shows the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> for each option. VA <strong>closing costs</strong> have restrictions—some fees cannot be charged to the borrower. Conventional has fewer restrictions. Compare the total cost. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor is an eligible veteran buying a $350,000 home. Taylor has $35,000 for a down payment (10%) but is considering VA for zero down. VA: <strong>loan amount</strong> $350,000, funding fee 2.3% (first use, no down) = $8,050, financed. New loan: $358,050. At 6.5% <strong>interest rate</strong>, <strong>mortgage payment</strong> about $2,263. No PMI. Conventional: 10% down = $35,000, <strong>loan amount</strong> $315,000. At 6.5%, payment about $1,991; PMI adds ~$160. Total: ~$2,151.
          </p>
          <p className="text-gray-700 mb-4">
            VA payment is slightly higher because of the larger <strong>loan amount</strong> (no down payment) and financed funding fee. But Taylor keeps the $35,000. Conventional has a lower payment but required the down payment. Taylor could put 5% down on conventional to keep some cash—<strong>loan amount</strong> $332,500, PMI ~$170. Total payment ~$2,270. Taylor compares using the <strong>Loan Estimate</strong>. This is illustrative. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> and{' '}
            <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>VA</strong> offers zero down and no PMI for eligible veterans—your <strong>mortgage payment</strong> has no PMI. <strong>Conventional</strong> requires a down payment and PMI when LTV exceeds 80%. VA has a funding fee; conventional does not. Use your <strong>Loan Estimate</strong> (TRID) to compare <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/va-loan" className="text-teal-700 underline font-medium">VA Loan</Link> and{' '}
            <Link href="/mortgage/conventional-loan" className="text-teal-700 underline font-medium">Conventional Loan</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For eligible veterans, VA can mean lower cash at closing (no down payment) and no monthly PMI. Your <strong>mortgage payment</strong> may be more affordable. Conventional may make sense if you have 20% down—no PMI—or if you are not VA-eligible. VA is for primary residence only; conventional can be used for second homes and investment properties.
          </p>
          <p className="text-gray-700 mb-4">
            Compare both using your <strong>Loan Estimate</strong>. The <strong>interest rate</strong>, <strong>mortgage payment</strong>, and total cost over time may differ. VA funding fee can be financed, which increases your <strong>loan amount</strong>. Veterans with disability may be exempt from the funding fee. See{' '}
            <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link> for another comparison.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">VA</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>Zero down payment</li>
                <li>No PMI</li>
                <li>Competitive interest rates</li>
                <li>Funding fee may be waived (disability)</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Funding fee (unless exempt)</li>
                <li>Primary residence only</li>
                <li>Military eligibility required</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Conventional</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>No funding fee</li>
                <li>PMI removable at 80% LTV</li>
                <li>No PMI at 20% down</li>
                <li>Can use for second home, investment</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Down payment required</li>
                <li>PMI when LTV &gt; 80%</li>
                <li>Often stricter credit requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming VA is always cheaper:</strong> VA has no PMI, but the funding fee and potentially larger <strong>loan amount</strong> (zero down) can add up. Compare the full <strong>mortgage payment</strong> and total cost using your <strong>Loan Estimate</strong>.</li>
            <li><strong>Forgetting the funding fee:</strong> VA charges a funding fee unless you are exempt (e.g., disability). It can be financed, which increases your <strong>loan amount</strong> and <strong>mortgage payment</strong>. Factor it into your comparison.</li>
            <li><strong>Not checking VA eligibility:</strong> You need a Certificate of Eligibility (COE). Service requirements apply. If you are not eligible, conventional (or FHA or USDA) is the option.</li>
            <li><strong>Comparing only the interest rate:</strong> The <strong>interest rate</strong> may be similar. Compare the full <strong>mortgage payment</strong> (including PMI for conventional), <strong>closing costs</strong>, and <strong>loan amount</strong>. Use your <strong>Loan Estimate</strong> (TRID).</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Under TRID, your <strong>Loan Estimate</strong> shows the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Compare it to the Closing Disclosure before closing.</li>
            <li><strong>Using VA for a second home:</strong> VA loans are for primary residence only. For a second home or investment property, you need conventional or another loan type.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about VA vs conventional">
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
            <li>U.S. Department of Veterans Affairs (VA) – VA Lenders Handbook</li>
            <li>U.S. Department of Veterans Affairs (VA) – Funding Fee tables</li>
            <li>Fannie Mae – Selling Guide (conventional loan guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide</li>
          </ul>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">VA eligibility and fees vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
