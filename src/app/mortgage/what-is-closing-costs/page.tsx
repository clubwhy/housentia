import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
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

const BREADCRUMBS = [{ label: 'Mortgage', href: '/mortgage' }, { label: 'What Are Closing Costs?' }];
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
      'In many cases, buyers pay most closing costs, but sellers may pay some costs through concessions depending on negotiation and program rules. Lenders may also provide credits tied to pricing.',
  },
];

export default function WhatIsClosingCostsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', PAGE_URL);
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
            Many first-time homebuyers focus on the home price and interest rate, but a mortgage also includes additional costs at closing.
            These costs are called <strong>closing costs</strong>, and they can materially affect how much cash is needed to complete the transaction.
          </p>
          <p className="text-gray-700">
            U.S. consumer protection rules (including TRID disclosures overseen by the CFPB) require lenders to present estimated and final costs
            in standardized forms so borrowers can review and compare loan offers more consistently.
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
            <li><strong>Lender/origination charges</strong> (processing, underwriting, points/credits)</li>
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
            Closing costs vary by loan type, location, property details, and lender. Because they include third-party services, some items may be shoppable,
            while others are selected by the lender or required by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            A borrower buying a home might see these simplified estimates on a Loan Estimate:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-4">
            <ul className="text-gray-700 space-y-1">
              <li>Home price: $350,000</li>
              <li>Down payment: $35,000</li>
              <li>Estimated loan costs (origination + services): $4,500</li>
              <li>Estimated other costs (taxes, government, prepaids): $3,500</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Estimated closing costs in this example would be about <strong>$8,000</strong>, separate from the down payment. The final amounts are shown on the Closing Disclosure.
            </p>
          </div>
          <p className="text-gray-700">
            This is a simplified illustration. Actual closing costs vary by loan type, location, and transaction specifics.
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
              <p className="text-gray-700 mt-1">Fees and credits can meaningfully change the total cost of borrowing.</p>
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
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>U.S. Department of Housing and Urban Development (HUD)</li>
            <li>Truth in Lending Act (TILA)</li>
            <li>RESPA and TRID disclosure resources</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
            <li><a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hud.gov</a></li>
          </ul>
        </section>

        <RelatedLinks
          guides={[
            { label: 'First Time Home Buyer Guide', href: '/mortgage/first-time-home-buyer' },
            { label: 'What is APR', href: '/mortgage/what-is-apr' },
          ]}
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
