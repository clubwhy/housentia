import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Closing Costs Explained: What You’ll Actually Pay | Housentia',
  description:
    'Closing costs are usually 2% to 5% of the loan. See fee categories, a real dollar example, Loan Estimate vs Closing Disclosure, and how to prepare.',
  openGraph: {
    title: 'Closing Costs Explained: What You’ll Actually Pay | Housentia',
    description:
      'Breakdown of lender, title, prepaid, and government fees—plus FAQ on seller contributions, refinance, and changes before closing.',
  },
};

const ARTICLE_SLUG = 'closing-costs-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Closing Costs Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/closing-costs-explained';

const FAQ_ITEMS = [
  {
    question: 'How much should I expect to pay in closing costs?',
    answer:
      'Most buyers pay between 2 percent and 5 percent of the loan amount. Your Loan Estimate lists estimated costs; the Closing Disclosure shows final numbers. See Average Mortgage Closing Costs.',
  },
  {
    question: 'Can closing costs change before closing?',
    answer:
      'Yes. Some costs may change between the Loan Estimate and Closing Disclosure within TRID tolerance rules—for example, if you change loan features or certain third-party charges. Compare both forms and ask your lender about any differences.',
  },
  {
    question: 'Can the seller pay closing costs?',
    answer:
      'In some transactions, sellers may contribute toward the buyer’s closing costs through concessions, subject to your contract and loan program limits. See Seller Paid Closing Costs Explained.',
  },
  {
    question: 'Are closing costs the same for refinance?',
    answer:
      'Refinance closing costs are similar in structure—lender fees, title, recording, and prepaid items—but the mix and totals can differ from a purchase. See Refinance Closing Costs Explained.',
  },
  {
    question: 'Can I avoid paying closing costs upfront?',
    answer:
      'In some cases, costs can be rolled into the loan (more common on certain refinances) or offset with lender credits, which often mean a higher interest rate. Purchases usually require more cash at closing than a no-cost label suggests.',
  },
];

export default function ClosingCostsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Closing Costs Explained: What You’ll Actually Pay',
    description:
      'Educational overview of mortgage closing costs: typical ranges, fee categories, cash needed beyond the down payment, and TRID disclosures.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Closing Costs Explained: What You’ll Actually Pay" breadcrumbs={BREADCRUMBS} />
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
            Most homebuyers focus on the down payment and overlook{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">
              closing costs
            </Link>
            .
          </p>
          <p className="text-gray-700 mb-4">
            That mistake can lead to thousands of dollars in unexpected expenses at closing. Here is a clear breakdown of what you will actually pay and how to prepare for it. For a numeric example with ranges, see{' '}
            <Link href="/mortgage/how-much-are-closing-costs-2026" className="text-primary hover:underline font-medium">
              How Much Are Closing Costs in 2026
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> are the total fees and expenses required to finalize your mortgage loan. They are typically paid at closing and usually range from{' '}
            <strong>2 percent to 5 percent of the loan amount</strong>.
          </p>
          <p className="text-gray-700">
            For a typical home purchase, this can add up quickly and should be factored into your total cash needed alongside your down payment and reserves.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Closing Costs Work</h2>
          <p className="text-gray-700 mb-6">
            Closing costs are made up of several categories of fees. For a line-by-line view, see{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">
              Mortgage Closing Cost Breakdown
            </Link>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Lender Fees</h3>
          <p className="text-gray-700 mb-4">
            Fees charged by the lender for processing your loan. See{' '}
            <Link href="/mortgage/what-is-origination-fee" className="text-primary hover:underline font-medium">
              Origination Fee
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">
              Mortgage Underwriting Explained
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Origination fee</li>
            <li>Underwriting fee</li>
            <li>Application fee</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Title and Escrow Fees</h3>
          <p className="text-gray-700 mb-4">
            Required to transfer ownership and handle the transaction. See{' '}
            <Link href="/mortgage/what-is-a-title-insurance-fee" className="text-primary hover:underline font-medium">
              Title Insurance Fee
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">
              What Is Escrow
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Title search</li>
            <li>Title insurance</li>
            <li>Escrow services</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Prepaid Costs</h3>
          <p className="text-gray-700 mb-4">
            Upfront payments for ongoing expenses related to your home. See{' '}
            <Link href="/mortgage/prepaid-costs-vs-closing-costs" className="text-primary hover:underline font-medium">
              Prepaid Costs vs Closing Costs
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Property taxes</li>
            <li>Homeowners insurance</li>
            <li>Prepaid interest</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Government and Recording Fees</h3>
          <p className="text-gray-700 mb-4">
            Required by local and state authorities. See{' '}
            <Link href="/mortgage/what-is-a-recording-fee" className="text-primary hover:underline font-medium">
              Recording Fee
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Recording fees</li>
            <li>Transfer taxes</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Real Example</h2>
          <ul className="list-none text-gray-700 space-y-1 mb-4">
            <li>
              <strong>Home price:</strong> $500,000
            </li>
            <li>
              <strong>Loan amount:</strong> $400,000
            </li>
          </ul>
          <p className="text-gray-700 mb-4">Estimated closing costs:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Lender fees: $2,500</li>
            <li>Title and escrow: $3,000</li>
            <li>Prepaid taxes and insurance: $2,000</li>
          </ul>
          <p className="text-gray-700">
            <strong>Total estimated closing costs: $7,500 to $10,000</strong> (illustrative; your transaction may differ.)
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Will Actually Pay</h2>
          <p className="text-gray-700 mb-4">The exact amount depends on several factors:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Loan type</li>
            <li>Property location</li>
            <li>Lender pricing</li>
            <li>Taxes and insurance rates</li>
          </ul>
          <p className="text-gray-700 mb-4">
            In most cases, buyers should expect to pay several thousand dollars in addition to their down payment. Your{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">
              Loan Estimate
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">
              Closing Disclosure
            </Link>{' '}
            show estimated and final cash to close.
          </p>
          <p className="text-gray-700">
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">
              DTI (debt-to-income)
            </Link>{' '}
            and other qualification factors affect how much house you can afford—but closing costs are a separate cash need at settlement. See{' '}
            <Link href="/mortgage/average-mortgage-closing-costs" className="text-primary hover:underline font-medium">
              Average Mortgage Closing Costs
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can Closing Costs Be Reduced?</h2>
          <p className="text-gray-700 mb-4">Some closing costs may be reduced or offset depending on the situation.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <Link href="/mortgage/how-to-reduce-closing-costs" className="text-primary hover:underline font-medium">
                Compare multiple lenders
              </Link>{' '}
              and Loan Estimates
            </li>
            <li>Negotiate certain fees where possible</li>
            <li>
              <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">
                Request seller concessions
              </Link>
            </li>
            <li>
              Consider{' '}
              <Link href="/mortgage/mortgage-lender-credits-explained" className="text-primary hover:underline font-medium">
                lender credits
              </Link>{' '}
              (often a higher rate in exchange for less cash at closing)
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <p className="text-gray-700 mb-4">
            If you pay more of your closing costs upfront in cash (rather than financing them or using credits), the trade-offs often look like this:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower long-term loan cost (when you are not rolling fees into the balance)</li>
                <li>More equity from day one</li>
                <li>Lower monthly payment compared with financing those costs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Higher upfront cash requirement</li>
                <li>Reduced liquidity after closing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Underestimating total costs:</strong> Budget for fees and prepaid items, not just the down payment.
            </li>
            <li>
              <strong>Ignoring prepaid expenses:</strong> Taxes, insurance, and per diem interest add to cash to close.
            </li>
            <li>
              <strong>Not reviewing the Loan Estimate:</strong> Read{' '}
              <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">
                Loan Estimate Explained
              </Link>{' '}
              early in the process.
            </li>
            <li>
              <strong>Not comparing lenders:</strong> Fee structures and rates vary; use standardized TRID forms to compare.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing Costs vs Loan Estimate vs Closing Disclosure</h2>
          <p className="text-gray-700 mb-4">Understanding these documents helps avoid surprises.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>
              <strong>Loan Estimate</strong> provides an early estimate (typically within three business days of application under TRID).
            </li>
            <li>
              <strong>Closing Disclosure</strong> shows final numbers (generally at least three business days before closing).
            </li>
          </ul>
          <p className="text-gray-700">
            Review both carefully before closing. Start with{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">
              Loan Estimate Explained
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/closing-disclosure-explained" className="text-primary hover:underline font-medium">
              Closing Disclosure Explained
            </Link>
            .
          </p>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Related Topics</h3>
          <ul className="list-disc list-inside text-teal-800 space-y-1 text-[15px]">
            <li>
              <Link href="/mortgage/loan-estimate-explained" className="text-teal-700 underline font-medium">
                Loan Estimate Explained
              </Link>
            </li>
            <li>
              <Link href="/mortgage/closing-disclosure-explained" className="text-teal-700 underline font-medium">
                Closing Disclosure Explained
              </Link>
            </li>
            <li>
              <Link href="/mortgage/what-is-dti" className="text-teal-700 underline font-medium">
                What Is DTI
              </Link>
            </li>
          </ul>
        </div>

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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Take the Next Step</h2>
          <p className="text-gray-700">
            Want to estimate your closing costs based on your situation? Use our{' '}
            <Link href="/tools/mortgage-calculator" className="text-primary hover:underline font-medium">
              mortgage calculator
            </Link>{' '}
            or connect with a licensed mortgage professional.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[
            { label: 'Closing Costs', href: '/mortgage-glossary/closing-costs' },
            { label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' },
            { label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' },
          ]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice. Loan terms, costs, and eligibility vary based on individual circumstances, lender requirements, and market conditions.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
        </section>
      </main>
    </div>
  );
}
