import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First-Time Buyer? Don’t Overpay Closing Costs | Housentia',
  description:
    'Why first-time buyers get surprised by closing costs (often 2–5% of the loan), what fees include, and how comparing Loan Estimates and reviewing prepaids can help you prepare—not a guarantee of savings.',
  openGraph: {
    title: 'First-Time Buyer? Don’t Overpay Closing Costs | Housentia',
    description:
      'Educational guide: typical closing cost components, common mistakes, and practical steps. Not financial advice; terms vary by lender and loan.',
  },
};

const ARTICLE_SLUG = 'first-time-buyer-closing-costs';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'First-Time Buyer Closing Costs',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/first-time-buyer-closing-costs';

const FAQ_ITEMS = [
  {
    question: 'How much should first-time buyers expect in closing costs?',
    answer:
      'Typically between 2 percent and 5 percent of the loan amount, depending on loan type, location, taxes, insurance, and lender fees. Your Loan Estimate is the starting point for your specific transaction—not a guarantee of the final amount.',
  },
  {
    question: 'Can closing costs be negotiated?',
    answer:
      'Some fees may be negotiable depending on the lender and transaction; others are set by third parties or law. Shopping and comparing standardized disclosures can help you understand differences. Nothing here is a promise that any fee can be waived or reduced.',
  },
  {
    question: 'Can sellers help pay closing costs?',
    answer:
      'In some cases, seller concessions may be negotiated if allowed by your purchase contract and your loan program’s limits. Your loan officer can explain program-specific caps.',
  },
  {
    question: 'Are closing costs included in the loan?',
    answer:
      'Financing some costs is more common in certain refinance scenarios than in purchases. Rolling costs into the loan can increase your balance and monthly payment. Program rules and lender policies apply.',
  },
  {
    question: 'How can I estimate my closing costs?',
    answer:
      'Review your Loan Estimate after you apply and compare offers from multiple lenders using the same standardized TRID forms. Compare the Closing Disclosure to your Loan Estimate before closing. For personalized numbers, work with a licensed mortgage professional.',
  },
];

export default function FirstTimeBuyerClosingCostsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'First-Time Buyer? Don’t Overpay Closing Costs',
    description:
      'Educational overview of closing costs for first-time homebuyers: typical ranges, fee categories, common pitfalls, and how disclosures help you compare—not financial advice.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="First-Time Buyer? Don’t Overpay Closing Costs" breadcrumbs={BREADCRUMBS} />
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
            Many first-time homebuyers focus on saving for a down payment but overlook{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">
              closing costs
            </Link>
            .
          </p>
          <p className="text-gray-700 mb-4">
            This often leads to paying more than expected at closing or missing opportunities to compare offers and ask questions. Comparing multiple Loan Estimates does not guarantee lower costs—but it can help you understand what drives your total and spot items to discuss with your lender.
          </p>
          <p className="text-gray-700">
            Understanding how closing costs work can help you prepare for your home purchase. For the broader journey, see{' '}
            <Link href="/mortgage/first-time-home-buyer" className="text-primary hover:underline font-medium">
              First-Time Home Buyer Guide
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/steps-to-buy-a-house-with-a-mortgage" className="text-primary hover:underline font-medium">
              Steps to Buy a House With a Mortgage
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> are the fees required to finalize your mortgage loan. They typically range from{' '}
            <strong>2 percent to 5 percent of the loan amount</strong>, and they are paid at closing in addition to your down payment.
          </p>
          <p className="text-gray-700">
            For first-time buyers, these costs can feel unexpected without proper planning. Actual totals depend on your loan, property, and market—not on this article’s examples.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What First-Time Buyers Usually Pay</h2>
          <p className="text-gray-700 mb-6">
            Closing costs are made up of multiple components. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">
              Mortgage Closing Cost Breakdown
            </Link>{' '}
            for detail.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Lender Fees</h3>
          <p className="text-gray-700 mb-4">
            Charged by your lender for processing your loan. See{' '}
            <Link href="/mortgage/what-is-origination-fee" className="text-primary hover:underline font-medium">
              Origination Fee
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Origination fee</li>
            <li>Underwriting fee</li>
            <li>Processing fee</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Title and Escrow Fees</h3>
          <p className="text-gray-700 mb-4">
            Ownership transfer and transaction processing. See{' '}
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
            Upfront payments for future expenses. See{' '}
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
            Required by local authorities. See{' '}
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
              <strong>Home price:</strong> $400,000
            </li>
            <li>
              <strong>Loan amount:</strong> $320,000
            </li>
          </ul>
          <p className="text-gray-700 mb-4">Estimated closing costs:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Lender fees: $2,000</li>
            <li>Title and escrow: $2,500</li>
            <li>Prepaid costs: $1,500</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Total estimated closing costs: $6,000 to $8,000</strong>
          </p>
          <p className="text-gray-600 text-sm italic">
            Illustrative only—not a quote, average, or prediction for your loan.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How First-Time Buyers Overpay</h2>
          <p className="text-gray-700 mb-4">
            &quot;Overpay&quot; here means paying more than necessary <em>because</em> of avoidable mistakes—not that any lender overcharged you. Many buyers leave money on the table by not comparing or not reading disclosures.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Not comparing lenders</h3>
          <p className="text-gray-700 mb-6">
            Different lenders can quote different fees for similar loan products. Under TRID, you receive a standardized{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">
              Loan Estimate
            </Link>{' '}
            to compare apples-to-apples—compare responsibly; the lowest payment or fee line is not always the best fit for your goals.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Ignoring the Loan Estimate</h3>
          <p className="text-gray-700 mb-6">
            The Loan Estimate provides a detailed breakdown of expected costs. Read{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">
              Loan Estimate Explained
            </Link>
            .
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Overlooking prepaid costs</h3>
          <p className="text-gray-700 mb-6">Taxes and insurance can add significant upfront expenses at closing.</p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Not asking about concessions</h3>
          <p className="text-gray-700">
            <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">
              Seller concessions
            </Link>{' '}
            or{' '}
            <Link href="/mortgage/mortgage-lender-credits-explained" className="text-primary hover:underline font-medium">
              lender credits
            </Link>{' '}
            may reduce out-of-pocket cash when allowed—often with trade-offs (e.g., credits may pair with a higher rate). Program and contract limits apply.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Avoid Overpaying</h2>
          <p className="text-gray-700 mb-4">Practical steps that may help you make informed choices—none of which guarantee a lower total:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Compare multiple loan offers using Loan Estimates</li>
            <li>Review fee breakdowns carefully and ask your lender what each line item is for</li>
            <li>Ask how lender credits work and how they affect rate and APR</li>
            <li>Negotiate where the market and program allow</li>
            <li>Understand what each fee covers—see <Link href="/mortgage/how-to-reduce-closing-costs" className="text-primary hover:underline font-medium">How to Reduce Closing Costs</Link></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Reducing Closing Costs</h2>
          <p className="text-gray-700 mb-4">
            Strategies that lower cash at closing—such as lender credits—often change your rate or long-term interest cost.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower upfront cash requirement</li>
                <li>Improved short-term affordability</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Potentially higher interest rate when using credits</li>
                <li>Higher long-term loan cost in many credit-for-cost trade-offs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing Costs vs Down Payment</h2>
          <p className="text-gray-700 mb-4">
            Closing costs are separate from your down payment. See{' '}
            <Link href="/mortgage-glossary/down-payment" className="text-primary hover:underline font-medium">
              Down payment
            </Link>{' '}
            in the glossary and{' '}
            <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">
              Down Payment Requirements Explained
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Down payment builds equity in the home</li>
            <li>Closing costs cover transaction-related fees and certain prepaids</li>
          </ul>
          <p className="text-gray-700 mt-4">Both must be planned for in advance as part of cash to close.</p>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Related Topics</h3>
          <ul className="list-disc list-inside text-teal-800 space-y-1 text-[15px]">
            <li>
              <Link href="/mortgage/closing-costs-explained" className="text-teal-700 underline font-medium">
                Closing Costs Explained
              </Link>
            </li>
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
          </ul>
        </div>

        <section className="mb-10" aria-label="Frequently asked questions">
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
            for rough planning, and speak with a licensed mortgage professional for numbers tied to your application.
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
            { label: 'Cash to Close', href: '/mortgage-glossary/cash-to-close' },
            { label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' },
          ]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice. Loan terms, costs, and eligibility vary based on individual circumstances, lender requirements, and market conditions.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong> We do not endorse any specific lender or loan product. Nothing on this page is an offer of credit or a commitment to lend.
          </p>
          <p className="text-gray-700 text-sm">
            For decisions about your mortgage, consult a licensed mortgage professional or qualified advisor in your state.
          </p>
        </section>
      </main>
    </div>
  );
}
