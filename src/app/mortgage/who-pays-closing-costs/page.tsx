import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who Pays Closing Costs? | Housentia',
  description:
    'Buyers typically pay most closing costs, but sellers may contribute through concessions. Learn how closing costs are split and what\'s negotiable.',
  openGraph: { title: 'Who Pays Closing Costs? | Housentia', description: 'Understand who typically pays closing costs.' },
};

const ARTICLE_SLUG = 'who-pays-closing-costs';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Who Pays Closing Costs?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/who-pays-closing-costs';

const FAQ_ITEMS = [
  { question: 'Who typically pays closing costs?', answer: 'Buyers usually pay most closing costs—lender fees, appraisal, title, etc. Sellers may pay some costs (e.g., transfer taxes, owner\'s title policy in some states) or contribute via seller concessions.' },
  { question: 'What are seller concessions?', answer: 'Seller concessions are when the seller agrees to pay a portion of the buyer\'s closing costs. Limits apply based on loan type and down payment (e.g., FHA typically allows up to 6% of the sale price).' },
  { question: 'Can the seller pay all closing costs?', answer: 'No. Concession limits cap how much the seller can contribute. Excess seller credits may need to be applied to the purchase price or other allowed uses.' },
  { question: 'How much can the seller contribute?', answer: 'Conventional loans typically limit seller contributions to 3%–9% depending on down payment. FHA allows up to 6%. VA may allow more. Check your loan program.' },
  { question: 'Are closing costs negotiable between buyer and seller?', answer: 'Yes. Who pays which costs is often negotiated as part of the purchase agreement. Local custom and market conditions influence what is typical. See How to Reduce Closing Costs for strategies.' },
  { question: 'Do refinance borrowers pay closing costs?', answer: 'Yes. On a refinance, the borrower typically pays all closing costs unless the lender offers a no-closing-cost option (often in exchange for a higher rate). There is no seller to share costs.' },
];

export default function WhoPaysClosingCostsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Who Pays Closing Costs?', description: 'Buyers typically pay most closing costs; sellers may contribute. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Who Pays Closing Costs?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Who pays closing costs</strong> is negotiable in a home purchase. Buyers typically pay most costs—lender fees, appraisal, title, and prepaid items. Sellers may pay some costs (e.g., transfer taxes, owner&apos;s title policy in some states) or contribute via seller concessions. Understanding the typical split helps you budget and negotiate. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> for a full breakdown of mortgage closing costs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            In a typical home purchase, the buyer brings funds for the down payment plus closing costs. Closing costs include lender fees, third-party fees (appraisal, title, escrow), government fees, and prepaid items. The seller may pay certain costs by custom or by agreement—for example, transfer taxes, owner&apos;s title insurance in some areas, or a portion of the buyer&apos;s costs through seller concessions.
          </p>
          <p className="text-gray-700 mb-4">
            Seller concessions are credits the seller agrees to pay toward the buyer&apos;s closing costs. The amount is negotiated and limited by loan program rules. This can reduce the buyer&apos;s cash to close without changing the purchase price. See{' '}
            <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link> for limits by loan type.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The purchase agreement specifies who pays which costs. In many markets, the buyer pays lender fees, appraisal, and title. The seller may pay transfer taxes, deed preparation, or owner&apos;s title policy depending on local custom. These customs vary by state and region; your real estate agent or attorney can explain what is typical in your area.
          </p>
          <p className="text-gray-700 mb-4">
            Seller concessions are written into the contract. The seller agrees to credit a dollar amount toward the buyer&apos;s closing costs. At settlement, the credit reduces the buyer&apos;s cash to close. Concession limits are set by the loan program (FHA, VA, conventional, etc.) and often depend on down payment. Exceeding the limit may require the credit to be applied differently or reduced.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Buyer vs Seller: Who Typically Pays What</h2>
          <p className="text-gray-700 mb-4">
            The table below shows typical responsibilities. Local custom and negotiation can change who pays what. This is general guidance, not a legal requirement for any specific state.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cost</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typically Buyer</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typically Seller</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender fees (origination, processing, underwriting)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Yes</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No (unless via concession)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Yes</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Title search and lender&apos;s title insurance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Yes</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies by region</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Owner&apos;s title insurance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies by region</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies by region</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Transfer taxes</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies by state</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies by state</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Recording fees</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Yes</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Prepaid interest, escrow, insurance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Yes</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No (unless via concession)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor is buying a $350,000 home with a conventional loan and 10% down. Total closing costs are about $8,500. Taylor negotiates a $6,000 seller concession in the purchase agreement. The seller credit reduces Taylor&apos;s cash to close by $6,000; Taylor pays the remaining $2,500 in closing costs out of pocket.
          </p>
          <p className="text-gray-700 mb-4">
            In a different market, the seller might pay the owner&apos;s title policy ($800) by custom. That would further reduce Taylor&apos;s costs. Concession limits for conventional loans with 10% down typically allow up to 6% of the sale price ($21,000), so the $6,000 credit is within limits. This is illustrative.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li><strong>Assuming the seller will always pay.</strong> Seller concessions depend on negotiation and market conditions. In a strong seller&apos;s market, sellers may resist. Budget for paying your own closing costs.</li>
            <li><strong>Exceeding concession limits.</strong> Loan programs cap how much the seller can contribute. Excess credits may not be allowed; work with your lender to stay within limits.</li>
            <li><strong>Confusing prepaid costs with fees.</strong> Both affect cash to close. Seller concessions can often cover prepaid items (insurance, escrow) as well as fees. See <Link href="/mortgage/prepaid-costs-vs-closing-costs" className="text-primary hover:underline font-medium">Prepaid Costs vs Closing Costs</Link> for the difference.</li>
            <li><strong>Ignoring local custom.</strong> Who pays transfer taxes, owner&apos;s title, and other items varies by state and region. Your agent or attorney can clarify what is typical.</li>
          </ul>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaways</h3>
          <ul className="text-teal-800 text-[15px] leading-relaxed space-y-2">
            <li>Buyers typically pay most closing costs; sellers may pay some by custom or via concessions.</li>
            <li>Seller concessions reduce the buyer&apos;s cash to close; limits apply by loan program.</li>
            <li>Who pays what is negotiable and should be specified in the purchase agreement.</li>
            <li>Local custom affects transfer taxes, title, and other costs—check with your agent.</li>
          </ul>
        </div>

        <section className="mb-10" aria-label="Frequently asked questions about who pays closing costs">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
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
