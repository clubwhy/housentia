import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a USDA Loan? | Housentia',
  description:
    'USDA loans are government-backed mortgages for eligible rural and suburban areas. Learn about zero down payment, income limits, and property requirements.',
  openGraph: { title: 'What Is a USDA Loan? | Housentia', description: 'Understand USDA loans for rural and suburban homebuyers.' },
};

const ARTICLE_SLUG = 'usda-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a USDA Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/usda-loan';

const FAQ_ITEMS = [
  {
    question: 'What is a USDA loan?',
    answer:
      'A USDA loan is a government-backed mortgage from the U.S. Department of Agriculture for eligible rural and suburban areas. It offers 100% financing (no down payment), competitive interest rates, and guarantee fees (similar to FHA MIP). Your Loan Estimate (TRID) shows the loan amount, mortgage payment, and closing costs. See FHA Loan and VA Loan.',
  },
  {
    question: 'Who qualifies for a USDA loan?',
    answer:
      'Borrowers must meet income limits for the area, use the home as a primary residence, and the property must be in an eligible rural or suburban location. Credit and income requirements apply. Underwriting verifies eligibility. See What Is DTI and What Is LTV.',
  },
  {
    question: 'Is there a down payment required?',
    answer:
      'No. USDA loans offer 100% financing. You may still need to pay closing costs, though some can be financed or covered by seller concessions. See Down Payment Requirements Explained and Seller Paid Closing Costs Explained.',
  },
  {
    question: 'What are USDA loan limits?',
    answer:
      'USDA does not set a maximum loan amount, but your income and the property\'s appraised value limit how much you can borrow. Income limits vary by area and household size. The loan amount cannot exceed the appraised value.',
  },
  {
    question: 'What are USDA guarantee fees?',
    answer:
      'USDA charges an upfront guarantee fee (typically 1% of the loan amount) and an annual fee (typically 0.35%). The upfront fee can be paid in cash or financed. They appear on your Loan Estimate as part of closing costs. See Upfront Mortgage Insurance Explained for a similar concept with FHA.',
  },
  {
    question: 'Does USDA use the same Loan Estimate as other loans?',
    answer:
      'Yes. Under TRID (TILA-RESPA Integrated Disclosure), USDA lenders provide a Loan Estimate within 3 business days of application. It shows your loan amount, interest rate, mortgage payment, and closing costs. Use it to compare with FHA and conventional offers.',
  },
];

export default function UsdaLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a USDA Loan?', description: 'USDA loans offer zero down payment for eligible rural and suburban areas. Learn requirements.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a USDA Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>USDA loan</strong> is a government-backed mortgage from the U.S. Department of Agriculture for eligible rural and suburban areas. It offers 100% financing (no down payment), competitive <strong>interest rates</strong>, and guarantee fees similar to FHA mortgage insurance. Your <strong>loan amount</strong> can equal the purchase price (up to the appraised value), and your <strong>mortgage payment</strong> includes principal, interest, and the annual guarantee fee.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days of application. It shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>,{' '}
            <Link href="/mortgage/va-loan" className="text-primary hover:underline font-medium">What Is a VA Loan</Link>, and{' '}
            <Link href="/mortgage/usda-vs-fha-loan" className="text-primary hover:underline font-medium">USDA vs FHA Loan</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            USDA guarantees loans made by approved lenders. The guarantee allows lenders to offer 100% financing—no down payment required. Your <strong>loan amount</strong> can equal the purchase price (up to the appraised value). You still pay <strong>closing costs</strong>, and USDA charges an upfront guarantee fee (typically 1% of the loan amount) and an annual fee (typically 0.35%). These fees are similar to FHA upfront MIP and annual MIP.
          </p>
          <p className="text-gray-700 mb-4">
            Eligibility depends on income limits (for the area and household size), property location (must be in an eligible rural or suburban area), and primary residence use. <strong>Underwriting</strong> verifies eligibility. Your <strong>Loan Estimate</strong> (TRID) shows the <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: USDA vs FHA vs VA comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">USDA vs FHA vs VA: At a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">USDA</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">FHA</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">VA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Down payment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0% (100% financing)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">3.5%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Upfront fee</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1% guarantee fee</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.75% MIP</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Funding fee (varies)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Property</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Eligible rural/suburban</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Any</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Any</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Eligibility</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Income limits, primary residence</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Primary residence</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Military service</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Rates and rules are subject to change. See USDA, HUD, and VA guidelines for current requirements.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply through a USDA-approved lender. The lender verifies your income, credit, and employment through <strong>underwriting</strong>. The property must be in an eligible area—USDA provides an eligibility map. Income limits vary by county and household size. Your <strong>loan amount</strong> cannot exceed the appraised value.
          </p>
          <p className="text-gray-700 mb-4">
            At closing, you pay the upfront guarantee fee (typically 1% of the loan amount)—can be paid in cash or financed into the <strong>loan amount</strong>. The annual guarantee fee (typically 0.35%) is added to your <strong>mortgage payment</strong>. Your <strong>Loan Estimate</strong> (TRID) shows the <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan buys a $280,000 home in an eligible rural area. The USDA <strong>loan amount</strong> is $280,000 (100% financing). Upfront guarantee fee: 1% × $280,000 = $2,800. Jordan finances it—new loan amount: $282,800. With a 6.5% <strong>interest rate</strong>, Jordan&apos;s <strong>mortgage payment</strong> (principal, interest, annual fee) is about $1,850. Jordan pays <strong>closing costs</strong> at closing; seller concessions cover part of them.
          </p>
          <p className="text-gray-700 mb-4">
            Jordan&apos;s household income is within the area limit. The property passed USDA eligibility. The <strong>Loan Estimate</strong> showed the loan terms, fees, and cash to close. This is illustrative. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link> and{' '}
            <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>USDA loans</strong> offer 100% financing for eligible rural and suburban areas. No down payment required. You pay an upfront guarantee fee (typically 1%) and an annual fee (typically 0.35%). Income limits and property location apply. Your <strong>Loan Estimate</strong> (TRID) shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/usda-vs-fha-loan" className="text-teal-700 underline font-medium">USDA vs FHA Loan</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            USDA loans can help buyers who qualify for rural or suburban areas and meet income limits. Without a down payment, you may need less cash at closing—but you still pay <strong>closing costs</strong> and the upfront guarantee fee. Seller concessions can reduce your cash to close. Compare USDA to FHA and conventional using your <strong>Loan Estimate</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Income limits are based on household size and the area&apos;s median income. If your income exceeds the limit, you may not qualify. Property eligibility is strict—check the USDA eligibility map before house hunting. See{' '}
            <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link> and{' '}
            <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advantages</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>100% financing—no down payment</li>
                <li>Competitive interest rates</li>
                <li>Lower guarantee fees than FHA MIP in some cases</li>
                <li>Primary residence only—helps keep program focused</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Income limits apply</li>
                <li>Property must be in eligible area</li>
                <li>Primary residence only—no investment properties</li>
                <li>Closing costs and upfront fee still required</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming any rural property qualifies:</strong> USDA has specific eligibility maps. The property must be in an eligible area. Check before making an offer.</li>
            <li><strong>Overlooking income limits:</strong> Income limits vary by county and household size. If your income exceeds the limit, you will not qualify. Review your area&apos;s limits.</li>
            <li><strong>Forgetting closing costs:</strong> 100% financing means no down payment, but you still pay <strong>closing costs</strong> and the upfront guarantee fee. Budget for them. See <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.</li>
            <li><strong>Not comparing loan types:</strong> Use your <strong>Loan Estimate</strong> (TRID) to compare USDA, FHA, and conventional. The <strong>interest rate</strong>, <strong>mortgage payment</strong>, and total cost may differ. See <Link href="/mortgage/usda-vs-fha-loan" className="text-primary hover:underline font-medium">USDA vs FHA Loan</Link>.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Under TRID, your <strong>Loan Estimate</strong> shows the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Compare it to the Closing Disclosure before closing.</li>
            <li><strong>Expecting to use for investment:</strong> USDA loans are for primary residence only. You cannot use a USDA loan for a second home or investment property.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about USDA loan">
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
            <li>U.S. Department of Agriculture (USDA) – Income Limits</li>
            <li>Fannie Mae – Selling Guide (conventional loan guidelines)</li>
          </ul>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">USDA program rules and eligibility vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
