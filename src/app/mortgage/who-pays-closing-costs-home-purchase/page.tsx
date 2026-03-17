import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who Pays Closing Costs in a Home Purchase? | Housentia',
  description:
    'In a home purchase, buyers typically pay most closing costs, but sellers may contribute. Learn who pays what, how negotiation works, and what limits apply.',
  openGraph: {
    title: 'Who Pays Closing Costs in a Home Purchase? | Housentia',
    description: 'Understand who pays closing costs when buying a home and how to negotiate.',
  },
};

const ARTICLE_SLUG = 'who-pays-closing-costs-home-purchase';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Who Pays Closing Costs in a Home Purchase?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/who-pays-closing-costs-home-purchase';

const FAQ_ITEMS = [
  {
    question: 'Who typically pays closing costs when buying a home?',
    answer:
      'Buyers typically pay most closing costs—lender fees, appraisal, credit report, and often the lender\'s title policy. Sellers may pay some costs (e.g., transfer taxes, owner\'s title policy in some areas) or contribute via seller concessions. See What Are Closing Costs for a full breakdown.',
  },
  {
    question: 'What are seller concessions?',
    answer:
      'Seller concessions are when the seller agrees to pay a portion of the buyer\'s closing costs. The amount is negotiated in the purchase agreement and limited by loan program rules. FHA typically allows up to 6% of the sale price; conventional limits vary by down payment.',
  },
  {
    question: 'Can the seller pay all of my closing costs?',
    answer:
      'No. Concession limits cap how much the seller can contribute. Excess credits may need to be applied to the purchase price or other allowed uses. The lender must verify the sale price and appraised value support the transaction.',
  },
  {
    question: 'How do I negotiate who pays closing costs?',
    answer:
      'The purchase contract can specify who pays which costs. In a buyer\'s market, sellers may agree to pay more. In a seller\'s market, buyers may pay most costs. Your real estate agent can help structure the offer. See Seller Paid Closing Costs Explained.',
  },
  {
    question: 'Do closing cost responsibilities differ by state?',
    answer:
      'Local custom and state law vary. In some areas, the seller pays transfer taxes or the owner\'s title policy; in others, the buyer pays. Your lender and title company can explain local practice. The purchase contract overrides custom when specified.',
  },
];

export default function WhoPaysClosingCostsHomePurchasePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Who Pays Closing Costs in a Home Purchase?',
    description:
      'Buyers typically pay most closing costs in a home purchase; sellers may contribute. Learn how it works and how to negotiate.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Who Pays Closing Costs in a Home Purchase?" breadcrumbs={BREADCRUMBS} />
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
            When you buy a home, <strong>mortgage closing costs</strong> are part of the transaction. Understanding who typically pays what helps you budget and negotiate. In most home purchases, buyers pay most closing costs, but sellers may contribute through concessions or by paying specific fees.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), your Loan Estimate and Closing Disclosure show credits from the seller when applicable. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> for a full overview of what closing costs include.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            &quot;Who pays closing costs&quot; in a home purchase refers to how the buyer and seller split the fees required to finalize the mortgage and transfer ownership. There is no single rule—local custom, negotiation, and loan program limits all play a role.
          </p>
          <p className="text-gray-700 mb-4">
            Buyers typically pay lender fees (origination, processing, underwriting), third-party services the lender orders (appraisal, credit report), and often the lender&apos;s title policy. Buyers also pay prepaid interest, homeowner insurance, and initial escrow deposits. Sellers typically pay real estate commissions (usually the largest cost), and in some areas, transfer taxes or the owner&apos;s title policy.
          </p>
          <p className="text-gray-700">
            Seller concessions allow the seller to pay a portion of the buyer&apos;s closing costs. This is negotiated in the purchase agreement and is subject to program limits. See{' '}
            <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link> and{' '}
            <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The purchase contract specifies the sale price and, when negotiated, who pays which closing costs. If the seller agrees to contribute $5,000 toward the buyer&apos;s closing costs, that credit reduces the buyer&apos;s cash to close. The loan amount is based on the purchase price; the concession does not affect the sale price or appraised value.
          </p>
          <p className="text-gray-700 mb-4">
            Loan program limits apply. Conventional loans typically limit seller contributions to 3%–9% of the purchase price depending on down payment. FHA allows up to 6%. VA may allow the seller to pay more of the buyer&apos;s costs. The lender will apply the credit per program rules. Excess credits cannot be applied to the down payment in excess of program limits.
          </p>
          <p className="text-gray-700 mb-4">
            Your Loan Estimate and Closing Disclosure show the seller credit as a reduction to your cash to close. Under TRID, you receive the Closing Disclosure at least three business days before closing. Compare it to your Loan Estimate to verify the amounts. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> and{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">What Is Closing Disclosure</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor is buying a $350,000 home with a conventional loan. Taylor&apos;s total closing costs (including prepaids) are about $10,000. Taylor negotiates a $6,000 seller concession in the purchase agreement.
          </p>
          <p className="text-gray-700 mb-4">
            The seller credit reduces Taylor&apos;s cash to close by $6,000. Taylor brings $4,000 in closing costs plus the down payment. The $6,000 concession is within conventional limits (Taylor has a 10% down payment, so the limit is higher). The sale price remains $350,000; the loan amount is based on that. This is illustrative.
          </p>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaways</h3>
          <ul className="text-teal-800 text-[15px] leading-relaxed space-y-2">
            <li>Buyers typically pay most closing costs; sellers may contribute via concessions.</li>
            <li>Seller concessions are negotiated and limited by loan program rules.</li>
            <li>The purchase contract specifies who pays what; local custom varies.</li>
            <li>Your Loan Estimate and Closing Disclosure show seller credits when applicable.</li>
          </ul>
        </div>

        <section className="mb-10" aria-label="Frequently asked questions about who pays closing costs">
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

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Closing Costs', href: '/mortgage-glossary/closing-costs' }]}
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
            Concession limits and local practices vary by loan program and location.
          </p>
        </section>
      </main>
    </div>
  );
}
