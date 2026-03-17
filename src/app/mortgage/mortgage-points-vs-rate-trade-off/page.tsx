import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Points vs Rate Trade Off | Housentia',
  description:
    'Paying discount points lowers your rate but increases closing costs. Learn the trade-off and how to decide whether points make sense.',
  openGraph: { title: 'Mortgage Points vs Rate Trade Off | Housentia', description: 'Understand the points vs rate trade-off.' },
};

const ARTICLE_SLUG = 'mortgage-points-vs-rate-trade-off';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Points vs Rate Trade Off' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-points-vs-rate-trade-off';

const FAQ_ITEMS = [
  {
    question: 'What is the points vs rate trade-off?',
    answer:
      'Paying discount points (upfront) lowers your interest rate and mortgage payment. The trade-off: higher closing costs now vs. lower payments over time. The opposite is lender credits—accept a higher rate to reduce closing costs. Your Loan Estimate (TRID) shows both options.',
  },
  {
    question: 'When do points make sense?',
    answer:
      'Points can make sense if you plan to keep the loan long enough to recoup the upfront cost through lower payments. Calculate the break-even period and compare to your expected ownership. If you plan to refinance or sell soon, points may not pay off.',
  },
  {
    question: 'How do I calculate break-even?',
    answer:
      'Divide the cost of the points by the monthly payment savings. The result is the number of months to break even. If you will own the home longer than that, points may pay off. Your Loan Estimate shows the rate and payment for different point options.',
  },
  {
    question: 'What about lender credits?',
    answer:
      'Lender credits are the reverse: accept a higher interest rate to get a credit that reduces closing costs. They can make sense if you are short on cash at closing or plan to refinance soon. See Mortgage Lender Credits Explained.',
  },
  {
    question: 'Do points affect my APR?',
    answer:
      'Yes. Paying points lowers your interest rate and typically your APR. Lender credits (higher rate, lower closing costs) may raise your APR. The Loan Estimate shows APR for each scenario. See What Is APR for how APR reflects upfront costs.',
  },
  {
    question: 'Are points tax deductible?',
    answer:
      'Tax rules change. Discount points paid on a purchase mortgage may be deductible in the year paid, subject to limits. Consult a tax professional. This guide is educational only and does not provide tax advice.',
  },
];

export default function MortgagePointsVsRateTradeOffPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Points vs Rate Trade Off', description: 'Paying points lowers your rate. Learn the trade-off and when it makes sense.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Points vs Rate Trade Off" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            The <strong>mortgage points vs rate trade-off</strong> is the choice between paying discount points upfront
            (to lower your <strong>interest rate</strong>) or accepting a higher rate (and possibly receiving lender
            credits). Points increase <strong>closing costs</strong> but reduce your <strong>mortgage payment</strong>.
            Each point typically equals 1% of your <strong>loan amount</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (provided under TRID within 3 business days of application) shows
            different rate options with and without points. First-time homebuyers can compare scenarios to understand
            the trade-off. See{' '}
            <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>,{' '}
            <Link href="/mortgage/what-is-a-loan-discount-fee" className="text-primary hover:underline font-medium">What Is a Loan Discount Fee</Link>, and{' '}
            <Link href="/mortgage/mortgage-lender-credits-explained" className="text-primary hover:underline font-medium">Mortgage Lender Credits Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you lock your rate, the lender may offer several options: zero points (par rate), pay points for a
            lower rate, or accept lender credits (higher rate, credit toward <strong>closing costs</strong>). Paying
            points means you pay more at closing in exchange for a lower <strong>interest rate</strong> and{' '}
            <strong>mortgage payment</strong> for the life of the loan.
          </p>
          <p className="text-gray-700 mb-4">
            The trade-off is time. If you keep the loan long enough, the lower payment can offset the upfront cost.
            If you refinance or sell soon, you may not recoup the points. Your <strong>loan amount</strong> stays the
            same—only the rate and payment change. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 1: Points vs rate comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Points vs Rate Options</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Option</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Closing Costs</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Interest Rate</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Mortgage Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay points</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Higher (points added)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Zero points (par)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Standard</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Par rate</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Standard</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender credits</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower (credit applied)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Higher</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Higher</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your Loan Estimate shows actual numbers. Point pricing varies by lender.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Discount points are prepaid interest. One point typically equals 1% of your <strong>loan amount</strong>.
            Paying 1 point on a $300,000 loan costs $3,000. In exchange, the lender may lower your{' '}
            <strong>interest rate</strong> by about 0.25% (exact reduction varies). That lowers your{' '}
            <strong>mortgage payment</strong> each month.
          </p>
          <p className="text-gray-700 mb-4">
            During <strong>underwriting</strong>, you lock a rate and point combination. The <strong>Loan Estimate</strong> and
            Closing Disclosure (TRID) show the rate, payment, and <strong>closing costs</strong> for your chosen
            option. Lender credits work in reverse: accept a higher rate and the lender gives you a credit to reduce
            closing costs. See{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break Even Point Explained</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex is offered a $350,000 loan. Option A: 7% rate, zero points, $2,328 <strong>mortgage payment</strong> (P&I),
            $10,500 in <strong>closing costs</strong>. Option B: 6.75% rate, 1 point ($3,500), $2,268 payment, $14,000
            closing costs. The point costs $3,500 and saves $60 per month. Break-even: $3,500 ÷ $60 ≈ 58 months (about
            5 years).
          </p>
          <p className="text-gray-700 mb-4">
            If Alex plans to stay 7+ years, points may pay off. If Alex plans to refinance or sell in 3 years, points
            likely do not. The example is illustrative. Actual point pricing and rate reductions vary. See{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link> and{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-violet-500 bg-violet-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-violet-900 mb-2">Key Takeaway</h3>
          <p className="text-violet-800 text-[15px] leading-relaxed">
            Paying points increases <strong>closing costs</strong> and lowers your <strong>interest rate</strong> and{' '}
            <strong>mortgage payment</strong>. Calculate break-even (point cost ÷ monthly savings) and compare to how
            long you expect to keep the loan. Lender credits do the opposite—higher rate, lower closing costs. Your{' '}
            <strong>Loan Estimate</strong> shows both options.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers often face the points decision when locking a rate. Paying points can reduce your <strong>mortgage payment</strong> for the life of the loan—but it requires more cash at closing. If you
            are already stretching for <strong>closing costs</strong> and down payment, points may not be feasible.
            Lender credits can help if you need to reduce cash to close.
          </p>
          <p className="text-gray-700 mb-4">
            The break-even calculation helps you decide. If you plan to stay 10+ years, points may make sense. If you
            expect to refinance when rates drop or sell in a few years, zero points or lender credits may be better.
            Your <strong>Loan Estimate</strong> (TRID) shows the rate, payment, and costs for each scenario. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link> and{' '}
            <Link href="/mortgage/mortgage-lender-credits-explained" className="text-primary hover:underline font-medium">Mortgage Lender Credits Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Points vs Rate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Paying Points</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower interest rate and mortgage payment</li>
                <li>Lower total interest over the life of the loan (if you keep it)</li>
                <li>May lower APR</li>
                <li>Requires more cash at closing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Lender Credits (No Points)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower closing costs; less cash at closing</li>
                <li>Can help if short on funds</li>
                <li>Higher rate and payment</li>
                <li>May make sense if you plan to refinance soon</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Paying points without calculating break-even:</strong> Divide point cost by monthly savings. If you refinance or sell before break-even, you lose money. Know your expected ownership horizon.</li>
            <li><strong>Assuming 1 point always equals 0.25%:</strong> Point pricing varies by lender and market. One point might buy 0.125%, 0.25%, or more. Your Loan Estimate shows the actual rate reduction.</li>
            <li><strong>Ignoring lender credits when short on cash:</strong> If closing costs are a stretch, lender credits can reduce cash to close. You pay a higher rate, but you may still qualify. Compare both options.</li>
            <li><strong>Paying points when planning to refinance soon:</strong> If you expect to refinance in 2–3 years when rates drop, points may not pay off. You pay upfront but may not keep the loan long enough to recoup.</li>
            <li><strong>Not comparing Loan Estimates:</strong> TRID requires the Loan Estimate within 3 days. Ask for scenarios with 0, 1, and 2 points (or lender credits) to compare. The numbers drive the decision.</li>
            <li><strong>Confusing discount points with origination fees:</strong> Discount points buy down the rate. Origination fees pay for processing and underwriting. Both appear on the Loan Estimate but serve different purposes. See <Link href="/mortgage/what-is-a-loan-discount-fee" className="text-primary hover:underline font-medium">What Is a Loan Discount Fee</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about points vs rate trade-off">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Discount points and lender credits</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Point pricing varies by lender.</p>
        </section>
      </main>
    </div>
  );
}
