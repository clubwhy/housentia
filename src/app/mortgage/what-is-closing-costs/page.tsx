import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Are Closing Costs? A Guide for U.S. Homebuyers | Housentia',
  description:
    'Closing costs are fees and prepaid items paid to finalize a mortgage and transfer ownership. Learn what closing costs include, how they appear on Loan Estimates and Closing Disclosures, and how to review them.',
  openGraph: {
    title: 'What Are Closing Costs? A Guide for U.S. Homebuyers | Housentia',
    description: 'Learn what closing costs include and how to review them on your Loan Estimate and Closing Disclosure.',
  },
};

const ARTICLE_SLUG = 'what-is-closing-costs';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Are Closing Costs?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-closing-costs';

const FAQ_ITEMS = [
  {
    question: 'What are closing costs?',
    answer:
      'Closing costs are fees and prepaid items paid to finalize a mortgage and complete the home purchase or refinance. They can include lender charges, third-party fees (appraisal, title), prepaid interest, and escrow-related items.',
  },
  {
    question: 'Do closing costs include the down payment?',
    answer:
      'Typically, no. Down payment is separate from closing costs. The Closing Disclosure shows “cash to close,” which includes down payment plus closing costs minus credits.',
  },
  {
    question: 'Where do I see closing costs in disclosures?',
    answer:
      'Closing costs are summarized on the Loan Estimate early in the process and finalized on the Closing Disclosure at least three business days before closing (for many transactions).',
  },
  {
    question: 'Can closing costs change from the Loan Estimate to Closing Disclosure?',
    answer:
      'Some costs can change within regulatory limits. TRID rules create categories of fees with different tolerance limits. A lender can provide a revised Loan Estimate under certain conditions.',
  },
  {
    question: 'Who pays closing costs?',
    answer:
      'In many cases, buyers pay most closing costs, but sellers may pay some costs through concessions depending on negotiation and program rules. Lenders may also provide credits tied to pricing. See Who Pays Closing Costs.',
  },
  {
    question: 'What is the average closing cost in the U.S.?',
    answer:
      'Closing costs typically range from 2% to 5% of the loan amount. A $300,000 loan might have $6,000 to $15,000 in closing costs. Actual amounts vary by location, loan type, and lender.',
  },
  {
    question: 'Can I reduce my closing costs?',
    answer:
      'Some fees are negotiable. Lender credits can offset costs in exchange for a higher interest rate. Mortgage points can lower your rate but increase upfront costs. Compare Loan Estimates from multiple lenders. See What Are Mortgage Points.',
  },
  {
    question: 'Are prepaid items part of closing costs?',
    answer:
      'Yes. Prepaid interest, homeowner insurance premiums, and initial escrow deposits for taxes and insurance appear on the Loan Estimate and Closing Disclosure. They are required at closing but are separate from lender and third-party fees.',
  },
];

export default function WhatIsClosingCostsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Are Closing Costs? A Guide for U.S. Homebuyers',
    description:
      'Closing costs are the fees and prepaid items required to complete a mortgage and close on a home purchase or refinance. This educational guide explains what they include and how to review them on TRID disclosures.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Are Closing Costs? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Many first-time homebuyers focus on the home price and <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">interest rate</Link>, but a mortgage also includes additional costs at closing. These costs are called <strong>closing costs</strong>, and they can materially affect how much cash is needed to complete the transaction.
          </p>
          <p className="text-gray-700 mb-4">
            U.S. consumer protection rules (including TRID disclosures overseen by the CFPB) require lenders to present estimated and final costs in standardized forms so borrowers can review and compare loan offers more consistently. Your <strong>Loan Estimate</strong> shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and closing costs within three business days of applying.
          </p>
          <p className="text-gray-700">
            The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR (Annual Percentage Rate)</Link> on the Loan Estimate reflects the cost of credit, including some fees. Use it alongside the interest rate and closing costs when comparing offers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> are the fees and prepaid items required to finalize a mortgage and complete a purchase or refinance.
            They can include lender charges, third-party services, government recording fees, and prepaid items.
          </p>
          <p className="text-gray-700 mb-4">Common categories include:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Lender/origination charges</strong> (processing, underwriting, <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">mortgage points</Link>/credits)</li>
            <li><strong>Third-party services</strong> (appraisal, title search, title insurance, settlement/escrow)</li>
            <li><strong>Government fees</strong> (recording fees, transfer taxes where applicable)</li>
            <li><strong>Prepaids</strong> (prepaid interest, insurance premiums)</li>
            <li><strong>Initial escrow deposits</strong> (taxes/insurance, if escrowed)</li>
          </ul>
          <p className="text-gray-700">
            Closing costs are different from the <strong>down payment</strong>. The “cash to close” number typically includes both.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Under TRID, most borrowers receive a <strong>Loan Estimate</strong> early in the process (typically within three business days of applying)
            and a <strong>Closing Disclosure</strong> at least three business days before closing for many transactions.
          </p>
          <p className="text-gray-700 mb-4">
            These forms break costs into standardized sections, helping borrowers compare offers across lenders. The rules also define which fees can change
            and by how much (tolerances). If a lender issues a revised Loan Estimate due to a valid “changed circumstance,” updated estimates may apply.
          </p>
          <p className="text-gray-700">
            Closing costs vary by loan type, location, property details, and lender. Your <Link href="/mortgage/what-is-loan-term" className="text-primary hover:underline font-medium">loan term</Link> affects your monthly payment; closing costs are separate and due at closing. Because they include third-party services, some items may be shoppable, while others are selected by the lender or required by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing Costs Breakdown</h2>
          <p className="text-gray-700 mb-4">
            Closing costs fall into several categories. Your Loan Estimate and Closing Disclosure list each fee. Understanding what each category covers helps you review your costs and compare offers.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Fee Category</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Covers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Lender fees</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Origination, processing, underwriting. Covers the cost of evaluating your application and preparing the loan. May include discount <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">mortgage points</Link>.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Appraisal</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Professional valuation of the property. The lender orders it to verify the home supports the loan amount.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Title search and insurance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Title search checks for liens and ownership issues. Title insurance protects the lender (and optionally you) if a defect appears later.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Escrow / settlement</td>
                  <td className="px-4 py-3 text-sm text-gray-700">The closing agent coordinates the signing, disburses funds, and records the deed. Fees vary by provider and location.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Government fees</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Recording fees to file the deed and mortgage with the county. Some areas have transfer taxes; who pays varies.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Prepaid items</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Prepaid interest (from closing to first payment), homeowner insurance, and initial escrow deposits for taxes and insurance.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">Fees vary by lender, location, and loan type. Your Loan Estimate shows the breakdown for your transaction.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Buyer vs Seller Closing Costs</h2>
          <p className="text-gray-700 mb-4">
            Who pays which closing costs depends on local custom, negotiation, and sometimes program rules. This is a general overview; practices vary by market and state.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Buyers typically pay:</strong> Lender fees (origination, processing, underwriting), appraisal, credit report, and often the lender&apos;s title policy. Buyers also pay prepaid interest, homeowner insurance, and initial escrow deposits. Recording fees are often split or paid by the buyer.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Sellers typically pay:</strong> Real estate commissions (usually the largest cost), transfer taxes in some areas, and sometimes the owner&apos;s title policy or a portion of title costs. In some markets, sellers contribute to buyer closing costs as a concession.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Negotiation:</strong> The purchase contract can specify who pays what. Seller concessions (seller-paid closing costs) are common when negotiated. Program rules (e.g., FHA, VA) may limit how much the seller can contribute. See <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link> and <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Average Closing Costs in the U.S.</h2>
          <p className="text-gray-700 mb-4">
            Closing costs typically range from <strong>2% to 5%</strong> of the loan amount. On a $300,000 loan, that could mean roughly $6,000 to $15,000. Actual amounts vary widely.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>What affects the total:</strong> Location (title and recording fees vary by county and state), loan type (FHA and VA have upfront fees; conventional varies), property value, and lender pricing. The interest rate you choose also matters—paying <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">mortgage points</Link> increases upfront costs but can lower your rate. Lender credits do the opposite: they reduce closing costs but raise the rate.
          </p>
          <p className="text-gray-700 mb-4">
            Your <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR (Annual Percentage Rate)</Link> on the Loan Estimate reflects the cost of credit, including some fees. Use it alongside the <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">interest rate</Link> and total closing costs to compare offers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex is buying a $350,000 home with a 10% down payment. The <strong>loan amount</strong> is $315,000. Alex selects a 30-year <Link href="/mortgage/what-is-loan-term" className="text-primary hover:underline font-medium">loan term</Link> at 6.5% <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">interest rate</Link>. Here is a simplified estimated breakdown:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-4">
            <ul className="text-gray-700 space-y-1">
              <li>Home price: $350,000</li>
              <li>Down payment: $35,000</li>
              <li>Loan amount: $315,000</li>
              <li>Lender fees (origination, processing, underwriting): $2,100</li>
              <li>Appraisal: $550</li>
              <li>Title search and insurance: $1,850</li>
              <li>Escrow / settlement: $650</li>
              <li>Government fees (recording): $225</li>
              <li>Prepaid interest (approx. 15 days): $850</li>
              <li>Homeowner insurance (first year): $1,200</li>
              <li>Initial escrow deposit (taxes/insurance): $1,800</li>
            </ul>
            <p className="text-gray-700 mt-4 font-medium">
              Estimated total closing costs: about <strong>$9,775</strong>. Cash to close: down payment ($35,000) + closing costs ($9,775) = <strong>$44,775</strong> (minus any credits).
            </p>
          </div>
          <p className="text-gray-700">
            This is a simplified illustration. Actual closing costs vary by loan type, location, and transaction specifics. The final amounts appear on the Closing Disclosure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Transparent breakdown</strong> — TRID forms show costs in standardized sections.</li>
                <li><strong>Supports comparison shopping</strong> — Borrowers can compare Loan Estimates across lenders.</li>
                <li><strong>Consumer protections</strong> — Rules limit how much certain fees can increase.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>Complex categories</strong> — Many fees can make it hard to interpret without guidance.</li>
                <li><strong>Variation by location</strong> — Third-party and government fees vary widely.</li>
                <li><strong>Estimates can change</strong> — Certain fees may change within allowable tolerances.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Treating closing costs as the down payment</strong>
              <p className="text-gray-700 mt-1">Down payment and closing costs are different categories; both affect cash to close.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Only comparing interest rates</strong>
              <p className="text-gray-700 mt-1">Fees and credits can meaningfully change the total cost of borrowing. Compare the <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR (Annual Percentage Rate)</Link> and <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">interest rate</Link> across offers, along with total closing costs.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Ignoring “prepaids”</strong>
              <p className="text-gray-700 mt-1">Prepaid interest, insurance, and escrow deposits can impact cash needed at closing.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Not reviewing the Closing Disclosure early</strong>
              <p className="text-gray-700 mt-1">The three-day review window is designed to catch issues before signing.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Assuming every fee is negotiable</strong>
              <p className="text-gray-700 mt-1">Some fees are fixed or third-party; some services can be shopped when allowed by the lender.</p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about closing costs">
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <p className="text-gray-700 mb-4">This guide is based on publicly available consumer education and regulatory resources, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – Buying a home</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
            <li><a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hud.gov</a></li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Closing Costs', href: '/mortgage-glossary/closing-costs' }]}
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
          <p className="text-gray-700 text-sm mb-2">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and borrower circumstances.
          </p>
          <p className="text-gray-700 text-sm">
            Readers should consult a licensed mortgage professional or financial advisor for advice specific to their situation.
          </p>
        </section>
      </main>
    </div>
  );
}
