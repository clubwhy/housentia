import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Break Even Point Explained | Housentia',
  description:
    'The refinance break-even point is when your monthly savings equal your closing costs. Learn how to calculate it and why it matters.',
  openGraph: { title: 'Refinance Break Even Point Explained | Housentia', description: 'Understand refinance break-even.' },
};

const ARTICLE_SLUG = 'refinance-break-even-point-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Break Even Point Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-break-even-point-explained';

const FAQ_ITEMS = [
  {
    question: 'What is the refinance break-even point?',
    answer:
      'The break-even point is when your total monthly savings from the refinance equal the closing costs you paid. Before that, you have not yet recouped what you paid. After that, you are ahead. It is an estimate, not a guarantee.',
  },
  {
    question: 'How do I calculate break-even?',
    answer:
      'Divide your closing costs by your monthly mortgage payment savings. Example: $4,000 in closing costs ÷ $150/month savings = about 27 months to break even. Use the numbers from your Loan Estimate and current loan. See Refinance Closing Costs Explained.',
  },
  {
    question: 'Why does break-even matter?',
    answer:
      'If you plan to move or refinance again before break-even, you may not recoup your costs. Refinancing makes more sense if you will stay longer. Your time horizon is key. See When to Refinance a Mortgage.',
  },
  {
    question: 'What if I roll costs into the loan?',
    answer:
      'If you finance closing costs, your loan amount increases. You pay interest on that extra principal. Factor that into your true savings. The break-even concept still applies to net savings—compare total cost over time.',
  },
  {
    question: 'Does TRID help me compare for break-even?',
    answer:
      'Yes. Under TRID (TILA-RESPA Integrated Disclosure), your Loan Estimate shows your new interest rate, mortgage payment, and closing costs. Compare to your current loan to estimate monthly savings and break-even.',
  },
  {
    question: 'Is break-even a guarantee?',
    answer:
      'No. Break-even is an estimate based on your estimated closing costs and monthly savings. If you move sooner, refinance again, or your situation changes, you may not recover costs. Use it as a planning tool.',
  },
];

export default function RefinanceBreakEvenPointExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Break Even Point Explained', description: 'Learn how to calculate refinance break-even and why it matters.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Break Even Point Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            The <strong>refinance break-even point</strong> is when your monthly savings from the new loan equal the <strong>closing costs</strong> you paid.
            Before that, you have not yet recouped what you spent. After that, you are ahead. It is a simple comparison concept—not a guarantee—that helps you
            decide whether refinancing makes sense for your situation.
          </p>
          <p className="text-gray-700 mb-4">
            Refinancing lowers your <strong>mortgage payment</strong> when you get a lower <strong>interest rate</strong>, but it has upfront costs. Your{' '}
            <strong>Loan Estimate</strong> (TRID) shows those costs. Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and
            TRID (TILA-RESPA Integrated Disclosure), you receive standardized forms so you can compare. See{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>,{' '}
            <Link href="/mortgage/when-to-refinance-a-mortgage" className="text-primary hover:underline font-medium">When to Refinance a Mortgage</Link>, and{' '}
            <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is Refinance</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you refinance, you pay <strong>closing costs</strong>—origination fees, appraisal, title, and more. In return, you get a new <strong>loan amount</strong>
            (typically your payoff) at a new <strong>interest rate</strong>. If the rate is lower, your <strong>mortgage payment</strong> drops. The monthly savings
            are the difference between your old payment and your new one.
          </p>
          <p className="text-gray-700 mb-4">
            Break-even answers: how many months of savings does it take to equal the costs? If you stay that long or longer, you may come out ahead. If you move
            or refinance again sooner, you may not. <strong>Underwriting</strong> does not use break-even—it is a planning tool for you. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Break-even formula callout */}
        <div className="mb-10 rounded-xl border-l-4 border-indigo-500 bg-indigo-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-indigo-900 mb-2">Break-Even Formula</h3>
          <p className="text-indigo-800 text-[15px] leading-relaxed mb-2">
            <strong>Break-even (months)</strong> ≈ Closing costs ÷ Monthly payment savings
          </p>
          <p className="text-indigo-700 text-sm">
            Example: $4,500 closing costs ÷ $200 monthly savings ≈ 23 months. Use your Loan Estimate for costs and compare to your current mortgage payment.
          </p>
        </div>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Step 1: Get your estimated <strong>closing costs</strong> from the <strong>Loan Estimate</strong> (TRID). Step 2: Compare your new{' '}
            <strong>mortgage payment</strong> to your current one. The difference is your monthly savings. Step 3: Divide closing costs by monthly savings.
            The result is the approximate number of months to break even.
          </p>
          <p className="text-gray-700 mb-4">
            If you plan to stay in the home longer than that, refinancing may save you money over time. If you plan to move sooner, the costs may not be
            recovered. Include only P&I (principal and interest) in the payment comparison if your escrow changes—or use total payment if that is easier.
            See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Casey has a $320,000 balance at 7% on a 30-year loan. Current <strong>mortgage payment</strong> (P&I): about $2,129. Casey is offered a refinance
            at 6.25% with <strong>closing costs</strong> of $5,200. New payment: about $1,970. Monthly savings: $159.
          </p>
          <p className="text-gray-700 mb-4">
            Break-even: $5,200 ÷ $159 ≈ 33 months. If Casey plans to stay 5+ years, the refinance may save money. If Casey plans to move in 2 years,
            the costs may not be recovered. This is illustrative. Use your own <strong>loan amount</strong>, <strong>interest rate</strong>, and costs.
            See <Link href="/mortgage/refinance-after-interest-rates-drop" className="text-primary hover:underline font-medium">Refinance After Interest Rates Drop</Link>.
          </p>
        </section>

        {/* Design object 2: Example scenarios table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Break-Even Scenarios</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Closing Costs</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Monthly Savings</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Break-Even (approx.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">$3,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">$150</td>
                  <td className="px-4 py-3 text-sm text-gray-700">20 months</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">$4,500</td>
                  <td className="px-4 py-3 text-sm text-gray-700">$200</td>
                  <td className="px-4 py-3 text-sm text-gray-700">23 months</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">$6,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">$250</td>
                  <td className="px-4 py-3 text-sm text-gray-700">24 months</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Use your Loan Estimate for actual closing costs and compare to your current mortgage payment.</p>
        </section>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            A lower <strong>interest rate</strong> can reduce your <strong>mortgage payment</strong>, but refinancing is not free. <strong>Closing costs</strong> can
            offset savings if you do not stay long enough. Break-even helps you set a time horizon: if you expect to stay past that point, refinancing may make sense.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) gives you the numbers. It shows your new <strong>loan amount</strong>, <strong>interest rate</strong>, payment,
            and <strong>closing costs</strong>. Use it to estimate break-even before you commit. See <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Using Break-Even</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Simple comparison: costs vs. savings</li>
                <li>Helps you decide if refinancing fits your timeline</li>
                <li>Uses numbers from your Loan Estimate</li>
                <li>Easy to calculate and understand</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Estimate only—not a guarantee</li>
                <li>Does not account for total interest over life of loan</li>
                <li>Assumes you stay and payment stays the same</li>
                <li>Does not include opportunity cost of upfront cash</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Using only part of closing costs:</strong> Use the total closing costs from your Loan Estimate, not just the lender fee. Include appraisal, title, and other fees.</li>
            <li><strong>Comparing the wrong payments:</strong> Use P&I (principal and interest) for an apples-to-apples comparison. If escrow changes, note that separately.</li>
            <li><strong>Assuming break-even is guaranteed:</strong> It is an estimate. If you move sooner, refinance again, or rates change, you may not recover costs.</li>
            <li><strong>Ignoring the term:</strong> Refinancing into a new 30-year loan resets the clock. You may pay more total interest even with a lower payment. See <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.</li>
            <li><strong>Forgetting lender credits:</strong> Lender credits reduce your closing costs. If you get credits, use the net cost in your break-even calculation.</li>
            <li><strong>Not reviewing the Loan Estimate:</strong> TRID requires the Loan Estimate within 3 business days. It shows your closing costs so you can calculate break-even accurately.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance break-even">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe: closing costs</li>
            <li>Fannie Mae – Selling Guide (refinance guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (refinance)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Use our refinance analyzer tool to compare scenarios.</p>
        </section>
      </main>
    </div>
  );
}
