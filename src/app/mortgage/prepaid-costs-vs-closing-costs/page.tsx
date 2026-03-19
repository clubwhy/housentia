import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Are Prepaid Costs vs Closing Costs? | Housentia',
  description:
    'Prepaid costs and closing costs both appear at closing but serve different purposes. Learn the difference between prepaid interest, escrow, and lender fees.',
  openGraph: {
    title: 'What Are Prepaid Costs vs Closing Costs? | Housentia',
    description: 'Understand the difference between prepaid costs and closing costs at mortgage closing.',
  },
};

const ARTICLE_SLUG = 'prepaid-costs-vs-closing-costs';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Are Prepaid Costs vs Closing Costs?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/prepaid-costs-vs-closing-costs';

const FAQ_ITEMS = [
  {
    question: 'What is the difference between prepaid costs and closing costs?',
    answer:
      'Closing costs is the broad term for all fees and prepaid items paid at closing. Prepaid costs are a subset—they cover items you pay in advance, such as prepaid interest, homeowner insurance, and initial escrow deposits. Lender fees, appraisal, and title are closing costs but not prepaids.',
  },
  {
    question: 'Are prepaid costs included in closing costs?',
    answer:
      'Yes. On your Loan Estimate and Closing Disclosure, prepaid items appear under "Other Costs" and are part of your total closing costs. They are often listed separately from lender and third-party fees because they represent advance payments rather than one-time fees.',
  },
  {
    question: 'What is prepaid interest?',
    answer:
      'Prepaid interest is the interest that accrues from your closing date until your first mortgage payment. If you close mid-month, you pay interest for the partial month at closing so your first full payment covers a complete month. The amount depends on your loan amount, interest rate, and days between closing and first payment.',
  },
  {
    question: 'Can I avoid prepaid costs?',
    answer:
      'Prepaid interest is required—it reflects interest owed for the period before your first payment. Homeowner insurance and escrow deposits are typically required if your lender uses an escrow account. You cannot avoid these; they are part of the cost of borrowing and owning a home.',
  },
  {
    question: 'Do prepaid costs affect my cash to close?',
    answer:
      'Yes. Prepaid costs are included in your cash to close. Your Closing Disclosure shows the total amount due, which includes down payment, closing costs (lender and third-party fees), and prepaid items. All of these affect how much you bring to closing.',
  },
  {
    question: 'Can seller concessions cover prepaid costs?',
    answer:
      'Yes. Seller concessions can often be applied to prepaid items (insurance, escrow, prepaid interest) within program limits. See Who Pays Closing Costs and How to Reduce Closing Costs for more on negotiation.',
  },
  {
    question: 'Why does my closing date affect prepaid interest?',
    answer:
      'Prepaid interest covers the period from closing until your first payment. Closing earlier in the month means more days of interest due at closing; closing later means fewer days. Your lender calculates the exact amount based on your loan amount and rate.',
  },
];

export default function PrepaidCostsVsClosingCostsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Are Prepaid Costs vs Closing Costs?',
    description:
      'Prepaid costs and closing costs both appear at closing. Learn the difference and how they affect your cash to close.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Are Prepaid Costs vs Closing Costs?" breadcrumbs={BREADCRUMBS} />
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
            When you review your Loan Estimate or Closing Disclosure, you will see several categories of costs. Two terms that often cause confusion are <strong>prepaid costs</strong> and <strong>closing costs</strong>. Understanding the difference helps you know what you are paying for and why.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> is the broad term for all fees and prepaid items you pay to finalize your mortgage. <strong>Prepaid costs</strong> are a subset—they are advance payments for items such as interest, insurance, and taxes. Both appear on your disclosure forms under TRID (TILA-RESPA Integrated Disclosure). See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> for a full overview.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> include everything you pay at closing except the down payment. That includes lender fees (origination, processing, underwriting), third-party fees (appraisal, title, escrow), government fees (recording), and prepaid items.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Prepaid costs</strong> are advance payments. You are paying for something you will use over time. Prepaid interest covers the period from closing until your first mortgage payment. Homeowner insurance premiums may be paid for the first year. Initial escrow deposits fund your escrow account for upcoming property taxes and insurance. These are not one-time fees for a service—they are payments made in advance.
          </p>
          <p className="text-gray-700">
            Lender fees, appraisal, and title insurance are one-time charges. Prepaid interest, insurance, and escrow are ongoing obligations paid upfront. Both affect your cash to close.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Under TRID, your Loan Estimate and Closing Disclosure organize costs into sections. Section B typically covers "Services You Cannot Shop For" (e.g., appraisal, credit report) and "Services You Can Shop For" (e.g., title). Section C covers "Taxes and Other Government Fees." Section F covers "Prepaids" and Section G covers "Initial Escrow Payment at Closing."
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Prepaid interest</strong> is calculated based on your loan amount, interest rate, and the number of days from closing to the end of the month (or to your first payment date). If you close on the 15th, you may pay roughly 15 days of interest. This ensures your first full payment covers a complete month.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Initial escrow deposit</strong> is required if your lender uses an escrow account for property taxes and insurance. The lender collects a few months of reserves so funds are available when bills come due. This is not an extra fee—it is your own money held in reserve.
          </p>
          <p className="text-gray-700">
            Your mortgage closing costs and prepaids together determine your total "Other Costs" and contribute to your cash to close. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> and{' '}
            <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">What Is Escrow</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Differences: Prepaid Costs vs Closing Fees</h2>
          <p className="text-gray-700 mb-4">
            The table below summarizes how prepaid items differ from one-time closing fees. Both appear on your Loan Estimate and Closing Disclosure, but they serve different purposes.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Aspect</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Prepaid Costs</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Closing Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">What it is</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Advance payments for future use</td>
                  <td className="px-4 py-3 text-sm text-gray-700">One-time fees for services</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Examples</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Prepaid interest, homeowner insurance, initial escrow deposit</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Origination, appraisal, title, recording</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Can you avoid it?</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Generally no; required for the loan</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Some fees are negotiable or shoppable</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Where it appears</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Sections F and G (Prepaids, Initial Escrow)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Sections A through E (loan costs, other costs)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Refundable?</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Escrow balance may be refunded if loan is paid off; prepaid interest is not</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No; fees are paid for services rendered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan is closing on a $300,000 loan at 6.5% interest. Closing is on March 15; the first payment is due May 1. Jordan has an escrow account for taxes and insurance.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs (fees):</strong> Lender fees $2,000, appraisal $550, title $1,500, recording $200. Total fees: $4,250.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Prepaid costs:</strong> Prepaid interest (March 15–31, about 16 days) is approximately $860. Homeowner insurance (first year) $1,200. Initial escrow deposit (2 months taxes + 2 months insurance) $800. Total prepaids: $2,860.
          </p>
          <p className="text-gray-700 mb-4">
            Jordan&apos;s total "Other Costs" (closing costs plus prepaids) is about $7,110. This is separate from the down payment. Cash to close includes down payment plus these costs minus any credits. This is illustrative.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li><strong>Confusing prepaids with fees.</strong> Prepaid interest and escrow deposits are not extra charges; they are advance payments. Mistaking them for lender fees can lead to unnecessary negotiation attempts or frustration.</li>
            <li><strong>Ignoring the escrow cushion.</strong> Lenders require an initial escrow deposit plus a cushion (often two months of taxes and insurance). Some borrowers are surprised by the total; review Section G of your Loan Estimate early.</li>
            <li><strong>Assuming closing late in the month saves money.</strong> Closing later reduces prepaid interest, but it also delays your first payment. The trade-off is small; choose a closing date that fits your timeline, not just to minimize a few days of interest.</li>
            <li><strong>Overlooking seller concessions for prepaids.</strong> Seller credits can often be applied to prepaid items. If you are negotiating <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">who pays closing costs</Link>, remember that prepaids are eligible within program limits.</li>
          </ul>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaways</h3>
          <ul className="text-teal-800 text-[15px] leading-relaxed space-y-2">
            <li>Closing costs is the broad term; prepaid costs are a subset (advance payments for interest, insurance, escrow).</li>
            <li>Prepaid interest covers the period from closing to your first payment.</li>
            <li>Initial escrow deposits fund your escrow account for taxes and insurance.</li>
            <li>Both closing costs and prepaids affect your cash to close.</li>
          </ul>
        </div>

        <section className="mb-10" aria-label="Frequently asked questions about prepaid vs closing costs">
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
            Procedures and costs vary by lender and transaction.
          </p>
        </section>
      </main>
    </div>
  );
}
