import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Rate Buydown Explained | Housentia',
  description:
    'A rate buydown lowers your interest rate for a period or the life of the loan. Learn about permanent and temporary buydowns.',
  openGraph: { title: 'Mortgage Rate Buydown Explained | Housentia', description: 'Understand mortgage rate buydowns.' },
};

const ARTICLE_SLUG = 'mortgage-rate-buydown-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Rate Buydown Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-rate-buydown-explained';

const FAQ_ITEMS = [
  {
    question: 'What is a rate buydown?',
    answer:
      'A rate buydown is when you (or the seller) pay upfront to lower your interest rate. It can be permanent (for the life of the loan, like discount points) or temporary (for the first few years). A lower rate means a lower mortgage payment. The cost appears on your Loan Estimate and Closing Disclosure (TRID) as part of closing costs.',
  },
  {
    question: 'What is a permanent buydown?',
    answer:
      'A permanent buydown (discount points) lowers your rate for the entire loan term. You pay points at closing (typically 1% of the loan amount per point) in exchange for a lower rate and mortgage payment. See What Are Mortgage Points and Mortgage Points vs Rate Trade Off.',
  },
  {
    question: 'What is a temporary buydown?',
    answer:
      'A temporary buydown (e.g., 2-1 buydown) lowers your rate for the first year or two, then it steps up to the note rate. Often used when the buyer expects income to rise. The upfront cost is paid at closing. See Temporary Rate Buydown Explained.',
  },
  {
    question: 'Who pays for a buydown?',
    answer:
      'The buyer, seller, or builder can pay. Seller-paid buydowns are sometimes used as a concession to help the buyer qualify or afford the payment. The cost is part of closing costs and appears on the Loan Estimate. See Seller Paid Closing Costs Explained.',
  },
  {
    question: 'Does a buydown affect my Loan Estimate or APR?',
    answer:
      'Yes. The buydown cost appears on your Loan Estimate (TRID) as part of closing costs. A permanent buydown typically lowers your APR. A temporary buydown may have a smaller effect on APR since the lower rate is only for a few years. See What Is APR.',
  },
  {
    question: 'Can a buydown help me qualify?',
    answer:
      'A temporary buydown can help if underwriting uses the reduced payment to calculate DTI. The first-year payment may be lower, which could improve your debt-to-income ratio. Program rules vary. See What Is DTI and Mortgage Points vs Rate Trade Off.',
  },
];

export default function MortgageRateBuydownExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Rate Buydown Explained', description: 'A rate buydown lowers your rate. Learn about permanent and temporary buydowns.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Rate Buydown Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>rate buydown</strong> lowers your <strong>interest rate</strong> by paying upfront. A{' '}
            <strong>permanent buydown</strong> (discount points) lowers the rate for the life of the loan and reduces
            your <strong>mortgage payment</strong> each month. A <strong>temporary buydown</strong> lowers it for the
            first year or two, then steps up to the note rate.
          </p>
          <p className="text-gray-700 mb-4">
            The buydown cost is part of your <strong>closing costs</strong> and appears on your{' '}
            <strong>Loan Estimate</strong> and Closing Disclosure (TRID). First-time homebuyers may see buydowns offered
            by sellers or builders. See{' '}
            <Link href="/mortgage/temporary-rate-buydown-explained" className="text-primary hover:underline font-medium">Temporary Rate Buydown Explained</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>, and{' '}
            <Link href="/mortgage/mortgage-points-vs-rate-trade-off" className="text-primary hover:underline font-medium">Mortgage Points vs Rate Trade Off</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            You (or the seller) pay money at closing to reduce your <strong>interest rate</strong> and{' '}
            <strong>mortgage payment</strong>. With a permanent buydown, the lower rate lasts for the entire loan. With
            a temporary buydown (e.g., 2-1 buydown), the rate is reduced for year 1 and year 2, then steps up to the
            full note rate. Your <strong>loan amount</strong> stays the same—only the rate and payment change.
          </p>
          <p className="text-gray-700 mb-4">
            The buydown cost is added to your <strong>closing costs</strong>. Your <strong>Loan Estimate</strong> (TRID)
            shows the rate, <strong>mortgage payment</strong>, and costs. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 1: Buydown types table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Buydown Types</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Permanent (discount points)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Life of loan</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower rate and mortgage payment forever</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Temporary (e.g., 2-1)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Year 1–2 (or similar)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower payment initially; steps up to note rate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Both add to closing costs. Your Loan Estimate (TRID) shows the rate and payment for each option.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            A <strong>permanent buydown</strong> is the same as discount points. You pay 1% of the{' '}
            <strong>loan amount</strong> per point (typically) in exchange for a lower <strong>interest rate</strong>.
            The rate reduction varies by lender. Your <strong>mortgage payment</strong> is lower for the life of the
            loan. The cost appears in the origination or discount section of your <strong>Loan Estimate</strong> (TRID).
          </p>
          <p className="text-gray-700 mb-4">
            A <strong>temporary buydown</strong> (e.g., 2-1 buydown) lowers the rate by 2% in year 1, 1% in year 2,
            then the full note rate. The lender or a third party (seller, builder) funds an escrow account at closing.
            That account subsidizes your lower payments. <strong>Underwriting</strong> may use the reduced payment for
            <strong> DTI</strong> if the program allows. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan gets a $300,000 loan. Without a buydown: 7% rate, $1,996 <strong>mortgage payment</strong> (P&I).
            Morgan chooses a 2-1 buydown. The seller pays $6,000 at closing. Year 1: 5% rate, $1,610 payment. Year 2: 6%
            rate, $1,799 payment. Year 3+: 7% rate, $1,996 payment.
          </p>
          <p className="text-gray-700 mb-4">
            Morgan&apos;s <strong>closing costs</strong> include the buydown (seller-paid in this example). The{' '}
            <strong>Loan Estimate</strong> shows the payment schedule. The example is illustrative. See{' '}
            <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-amber-500 bg-amber-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Key Takeaway</h3>
          <p className="text-amber-800 text-[15px] leading-relaxed">
            A <strong>rate buydown</strong> lowers your <strong>interest rate</strong> and{' '}
            <strong>mortgage payment</strong> by paying upfront. <strong>Permanent</strong> = lower rate for life (like
            discount points). <strong>Temporary</strong> = lower rate for 1–2 years, then steps up. The cost is part of{' '}
            <strong>closing costs</strong> and appears on your <strong>Loan Estimate</strong> (TRID). Buyer, seller, or
            builder can pay.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers may see buydowns offered by sellers or builders as an incentive. A temporary buydown can
            lower your <strong>mortgage payment</strong> in the early years when income may be tighter. It can also help
            with <strong>underwriting</strong> if the lender uses the reduced payment for <strong>DTI</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            A permanent buydown (discount points) reduces your payment for the life of the loan but increases{' '}
            <strong>closing costs</strong>. Calculate break-even to see if it pays off. Your <strong>Loan Estimate</strong>{' '}
            (TRID) shows the rate, payment, and costs for each option. See{' '}
            <Link href="/mortgage/mortgage-points-vs-rate-trade-off" className="text-primary hover:underline font-medium">Mortgage Points vs Rate Trade Off</Link> and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Rate Buydowns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Permanent Buydown</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower rate and payment for life</li>
                <li>May lower APR</li>
                <li>Higher closing costs</li>
                <li>Break-even: compare cost to monthly savings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Temporary Buydown</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower payment in early years</li>
                <li>May help DTI for qualification</li>
                <li>Seller/builder may pay</li>
                <li>Payment steps up after 1–2 years</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Confusing permanent and temporary:</strong> Permanent (discount points) lowers your rate for the life of the loan. Temporary lowers it for 1–2 years, then steps up. Know which you are getting and plan for the step-up.</li>
            <li><strong>Not checking the Loan Estimate:</strong> Your Loan Estimate (TRID) shows the buydown cost, rate, and payment schedule. Verify the numbers. Temporary buydowns have a payment schedule—year 1, year 2, year 3+.</li>
            <li><strong>Assuming seller-paid buydown is free:</strong> The seller may pay, but the cost is often reflected in the purchase price or negotiated as a concession. Understand the full deal. See <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link>.</li>
            <li><strong>Ignoring the step-up on temporary buydowns:</strong> Your payment will increase after year 1 or 2. Budget for the higher payment. If your income will not rise, a temporary buydown may not be the best fit.</li>
            <li><strong>Paying for a permanent buydown without calculating break-even:</strong> Divide the cost by the monthly savings. If you refinance or sell before break-even, you lose money. See <Link href="/mortgage/mortgage-points-vs-rate-trade-off" className="text-primary hover:underline font-medium">Mortgage Points vs Rate Trade Off</Link>.</li>
            <li><strong>Assuming all lenders offer buydowns:</strong> Buydown availability varies by lender and program. Ask if a temporary or permanent buydown is available and what it costs. See <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about rate buydown">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe: closing costs</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Discount points and rate buydowns</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Buydown availability varies by lender.</p>
        </section>
      </main>
    </div>
  );
}
