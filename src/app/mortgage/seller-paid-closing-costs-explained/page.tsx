import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seller Paid Closing Costs Explained | Housentia',
  description:
    'Seller concessions allow the seller to pay part of the buyer\'s closing costs. Learn the limits, how they work, and when they make sense.',
  openGraph: { title: 'Seller Paid Closing Costs Explained | Housentia', description: 'Understand seller-paid closing costs and concessions.' },
};

const ARTICLE_SLUG = 'seller-paid-closing-costs-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Seller Paid Closing Costs Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/seller-paid-closing-costs-explained';

const FAQ_ITEMS = [
  {
    question: 'What are seller-paid closing costs?',
    answer:
      'Seller-paid closing costs (seller concessions) are when the seller agrees to pay a portion of the buyer\'s closing costs. The amount is typically negotiated in the purchase agreement and limited by loan program rules. See Who Pays Closing Costs and What Are Closing Costs.',
  },
  {
    question: 'How much can the seller pay?',
    answer:
      'FHA typically allows up to 6% of the sale price. Conventional limits vary by down payment (often 3%–9%). VA may allow more. The lender must verify the sale price supports the concession and that the appraised value is sufficient.',
  },
  {
    question: 'Do seller concessions affect the sale price?',
    answer:
      'Seller concessions reduce the buyer\'s cash to close but do not change the sale price. The appraised value must support the purchase price. The loan amount is based on the purchase price, not reduced by the concession.',
  },
  {
    question: 'When do sellers agree to pay closing costs?',
    answer:
      'Sellers may agree in slower markets, when the buyer is short on cash, or when it helps close the deal. It can be a negotiating point. Some sellers prefer a higher offer with concessions over a lower offer without.',
  },
  {
    question: 'Do seller concessions show on the Loan Estimate?',
    answer:
      'Yes. Under TRID (TILA-RESPA Integrated Disclosure), your Loan Estimate and Closing Disclosure show credits from the seller. The seller credit reduces your cash to close. Compare the estimate to the final Closing Disclosure before closing.',
  },
  {
    question: 'Can seller concessions be used for prepaid items?',
    answer:
      'Generally yes. Seller concessions can often cover lender fees, title, appraisal, and prepaid items (insurance, taxes, prepaid interest) within program limits. The lender will apply the credit per program rules. Not all costs may be eligible—check with your lender.',
  },
];

export default function SellerPaidClosingCostsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Seller Paid Closing Costs Explained', description: 'Seller concessions allow the seller to pay part of the buyer\'s closing costs. Learn the limits.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Seller Paid Closing Costs Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Seller-paid closing costs</strong> (also called seller concessions) are when the seller agrees to pay a portion of the buyer&apos;s <strong>closing costs</strong>. This arrangement is negotiated in the purchase agreement and is limited by loan program rules. For first-time homebuyers who may be short on cash after the down payment, seller concessions can reduce the amount needed at closing—lowering the barrier to homeownership.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), your <strong>Loan Estimate</strong> and Closing Disclosure show credits from the seller. These forms help you understand how the concession affects your cash to close. See{' '}
            <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link> and{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When a seller agrees to pay closing costs, they are essentially crediting you a dollar amount that offsets your fees at closing. The seller does not hand you cash—instead, the credit is applied at settlement to reduce what you owe. Your <strong>loan amount</strong> and <strong>interest rate</strong> stay the same; only your cash to close decreases.
          </p>
          <p className="text-gray-700 mb-4">
            Seller concessions can typically cover lender fees (origination, processing, <strong>underwriting</strong>), appraisal, title insurance, recording fees, and prepaid items such as homeowner&apos;s insurance and property taxes. The <strong>Loan Estimate</strong> breaks these into sections. The seller credit appears as a credit that reduces your total closing costs. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>,{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>, and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Design object 1: Concession limits table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Seller Concession Limits by Loan Type</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Loan Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Limit (% of sale price)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">FHA</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Up to 6%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional (down payment &lt; 10%)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">3%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional (down payment 10%–25%)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">6%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional (down payment &gt; 25%)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">9%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">VA</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Up to 4% (plus reasonable fees)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Limits vary by lender and program. The appraised value must support the purchase price.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Seller-paid closing costs are negotiated during the offer and contract phase. You and your agent include the concession amount in the purchase agreement—for example, &quot;Seller to pay up to $X toward buyer&apos;s closing costs.&quot; The lender then verifies that the concession fits within program limits and that the sale price is supported by the appraisal.
          </p>
          <p className="text-gray-700 mb-4">
            At closing, the seller credit is applied to reduce your cash to close. Your <strong>mortgage payment</strong> is based on your <strong>loan amount</strong> and <strong>interest rate</strong>—the concession does not change those. It only reduces the amount of cash you need to bring to the table. The lender will confirm the concession on your <strong>Loan Estimate</strong> and Closing Disclosure. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan is buying a $350,000 home with an FHA loan (3.5% down). Down payment: $12,250. Estimated <strong>closing costs</strong>: $8,500 (about 2.4% of the loan amount). Jordan negotiates a 4% seller concession—$14,000—in the purchase agreement. FHA allows up to 6%, so $14,000 is within limits.
          </p>
          <p className="text-gray-700 mb-4">
            At closing, the $14,000 seller credit covers the $8,500 in closing costs and leaves $5,500. FHA rules generally do not allow the excess to go to the buyer as cash—it may reduce the concession or be applied only to eligible costs. In this example, Jordan might cap the concession at $8,500 (actual closing costs) so the seller pays only what is needed. Jordan&apos;s cash to close drops from roughly $20,750 (down payment + costs) to $12,250 (down payment only). The <strong>loan amount</strong> and <strong>mortgage payment</strong> stay the same. This is illustrative. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Seller-paid closing costs</strong> reduce your cash to close but do not change your <strong>loan amount</strong>, <strong>interest rate</strong>, or <strong>mortgage payment</strong>. Limits vary by loan type (e.g., FHA up to 6%, conventional 3%–9%). Negotiate the concession in the purchase agreement and confirm it appears on your <strong>Loan Estimate</strong> and Closing Disclosure under TRID.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Closing costs can add thousands to what you need at closing. For buyers who have saved enough for the down payment but struggle with extra fees, seller concessions can make the difference between closing and walking away. They can also free up cash for moving expenses, furniture, or repairs.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding concession limits helps you negotiate realistically. Asking for more than your program allows can delay or derail the deal. Your <strong>Loan Estimate</strong> (TRID) shows how the seller credit affects your cash to close. Review it with your lender and agent to ensure the numbers align. See{' '}
            <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link> and{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advantages</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lowers cash needed at closing</li>
                <li>Can help first-time buyers with limited savings</li>
                <li>Does not increase your loan amount or mortgage payment</li>
                <li>May make your offer more competitive in some markets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Sellers may resist or counter with a higher price</li>
                <li>In hot markets, sellers may prefer offers without concessions</li>
                <li>Excess concession may not be refunded (program-dependent)</li>
                <li>Appraisal must support the purchase price</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Asking for more than the program allows:</strong> Exceeding concession limits can cause the lender to reject or reduce the credit. Know your program&apos;s limits before negotiating.</li>
            <li><strong>Assuming the seller will agree:</strong> Seller concessions are negotiable. In competitive markets, sellers may choose offers without them. Work with your agent on strategy.</li>
            <li><strong>Forgetting the appraisal:</strong> The sale price must be supported by the appraised value. If the appraisal comes in low, the deal may need to be renegotiated.</li>
            <li><strong>Not checking the Loan Estimate:</strong> Under TRID, your Loan Estimate and Closing Disclosure show the seller credit. Compare them before closing to ensure the credit is applied correctly.</li>
            <li><strong>Expecting cash back from excess concession:</strong> Many programs do not allow the buyer to receive cash from an excess seller credit. The concession typically covers only eligible closing costs.</li>
            <li><strong>Raising the price to offset the concession:</strong> Some buyers try to offer more and ask for a larger concession. Lenders scrutinize this—the sale price must be supported by the appraisal and comparable sales.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about seller paid closing costs">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe: closing costs</li>
            <li>Fannie Mae – Selling Guide (seller concession limits)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (concessions)</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
            <li>U.S. Department of Veterans Affairs (VA) – VA Lenders Handbook</li>
          </ul>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Concession limits vary by loan program.</p>
        </section>
      </main>
    </div>
  );
}
