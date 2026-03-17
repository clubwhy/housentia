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
