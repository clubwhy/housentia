import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Temporary Rate Buydown Explained | Housentia',
  description:
    'A temporary rate buydown (e.g., 2-1 buydown) lowers your rate for the first year or two. Learn how it works and when it makes sense.',
  openGraph: { title: 'Temporary Rate Buydown Explained | Housentia', description: 'Understand temporary rate buydowns.' },
};

const ARTICLE_SLUG = 'temporary-rate-buydown-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Temporary Rate Buydown Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/temporary-rate-buydown-explained';

const FAQ_ITEMS = [
  {
    question: 'What is a temporary rate buydown?',
    answer:
      'A temporary buydown lowers your interest rate for the first year or two, then steps up to the full note rate. The most common is the 2-1 buydown: 2% below note rate in year 1, 1% below in year 2, then full rate. Your mortgage payment is lower initially, then increases. See Mortgage Rate Buydown Explained.',
  },
  {
    question: 'How does a 2-1 buydown work?',
    answer:
      'You (or the seller) fund an escrow account at closing. The lender uses it to subsidize your payments: year 1 at 2% below note rate, year 2 at 1% below, year 3+ at full rate. The cost is the present value of the payment reduction and appears on your Loan Estimate as part of closing costs.',
  },
  {
    question: 'Who typically pays for a temporary buydown?',
    answer:
      'The seller or builder often pays as a concession. Buyers can also pay. The cost is the present value of the payment reduction over the buydown period. It is part of closing costs. See Seller Paid Closing Costs Explained.',
  },
  {
    question: 'When does a temporary buydown make sense?',
    answer:
      'It can help when the buyer expects income to rise (e.g., new graduate, commission-based) or when the seller wants to offer a concession. The buyer must qualify at the full note rate. Underwriting may use the reduced payment for DTI in some programs. See What Is DTI.',
  },
  {
    question: 'Does a temporary buydown affect my APR?',
    answer:
      'A temporary buydown may have a smaller effect on APR than a permanent buydown, since the lower rate applies only for a few years. The buydown cost appears on your Loan Estimate (TRID) as part of closing costs. See What Is APR.',
  },
  {
    question: 'Can I get a 3-2-1 buydown?',
    answer:
      'Yes. A 3-2-1 buydown lowers the rate by 3% in year 1, 2% in year 2, 1% in year 3, then full rate. Less common than 2-1. Availability and structure vary by lender and program.',
  },
];

export default function TemporaryRateBuydownExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Temporary Rate Buydown Explained', description: 'A temporary buydown lowers your rate for the first year or two. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Temporary Rate Buydown Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>temporary rate buydown</strong> lowers your <strong>interest rate</strong> for the first year or two, then steps up to the full note rate. The most common is the <strong>2-1 buydown</strong>: 2% below the note rate in year 1, 1% below in year 2, then the full rate. Your <strong>mortgage payment</strong> is lower initially, then increases as the rate steps up.
          </p>
          <p className="text-gray-700 mb-4">
            The buydown cost is paid at closing and appears on your <strong>Loan Estimate</strong> and Closing Disclosure (TRID) as part of <strong>closing costs</strong>. Sellers or builders often offer it as a concession. Buyers must qualify at the full note rate. See{' '}
            <Link href="/mortgage/mortgage-rate-buydown-explained" className="text-primary hover:underline font-medium">Mortgage Rate Buydown Explained</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            With a temporary buydown, you (or the seller) pay upfront to reduce your <strong>interest rate</strong> and <strong>mortgage payment</strong> for a limited time. Your <strong>loan amount</strong> stays the same—only the rate and payment change during the buydown period. After the buydown ends, you pay the full note rate for the rest of the loan.
          </p>
          <p className="text-gray-700 mb-4">
            The upfront cost is the present value of the payment reduction over the buydown period. It is added to your <strong>closing costs</strong>. Your <strong>Loan Estimate</strong> (TRID) shows the rate schedule and <strong>mortgage payment</strong> for each year. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 1: 2-1 buydown schedule table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical 2-1 Buydown Rate Schedule</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Loan Year</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Rate (if note rate is 7%)</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Year 1</td>
                  <td className="px-4 py-3 text-sm text-gray-700">5%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">2% below note rate; lower mortgage payment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Year 2</td>
                  <td className="px-4 py-3 text-sm text-gray-700">6%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1% below note rate; payment steps up</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Year 3+</td>
                  <td className="px-4 py-3 text-sm text-gray-700">7%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Full note rate; payment at full level</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Example assumes 7% note rate. Rate and payment reduction vary by loan amount and term.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The lender (or a third party) sets up an escrow account at closing. The buyer, seller, or builder funds it with the present value of the payment reduction over the buydown period. Each month during the buydown, the lender draws from the account to subsidize your <strong>mortgage payment</strong>. You pay the reduced amount; the lender receives the full payment from the subsidy.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> typically requires you to qualify at the full note rate—your DTI is calculated using the full payment, not the reduced one. Some programs may allow use of the reduced payment for DTI; check with your lender. The buydown cost appears on your <strong>Loan Estimate</strong> (TRID) as part of <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan buys a $320,000 home with a $304,000 <strong>loan amount</strong> (5% down). Note rate: 7%. The seller offers a 2-1 buydown as a concession. Year 1: Morgan pays at 5% rate—<strong>mortgage payment</strong> about $1,630. Year 2: 6% rate—payment about $1,823. Year 3+: 7% at full rate—payment about $2,023.
          </p>
          <p className="text-gray-700 mb-4">
            The buydown cost is about $8,200 (present value of the payment reduction). The seller pays it at closing. Morgan qualifies at the full 7% payment. Morgan&apos;s <strong>closing costs</strong> include the buydown; the <strong>Loan Estimate</strong> shows the rate schedule. This is illustrative. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link> and{' '}
            <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            A <strong>temporary rate buydown</strong> (e.g., 2-1) lowers your <strong>interest rate</strong> and <strong>mortgage payment</strong> for the first year or two, then steps up to the full note rate. The cost is paid at closing and appears on your <strong>Loan Estimate</strong> (TRID). You qualify at the full rate. Sellers or builders often pay as a concession. See{' '}
            <Link href="/mortgage/mortgage-rate-buydown-explained" className="text-teal-700 underline font-medium">Mortgage Rate Buydown Explained</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            A temporary buydown can ease the transition into homeownership. If you expect your income to rise—for example, a new graduate starting a career or a commission-based earner—the lower payment in year 1 and 2 can help while you adjust. Sellers may offer it to attract buyers or close a deal.
          </p>
          <p className="text-gray-700 mb-4">
            You must qualify at the full note rate. Plan for the payment increase in year 2 and year 3. Your <strong>Loan Estimate</strong> (TRID) shows the rate schedule and <strong>mortgage payment</strong> for each period. Compare the cost to the benefit—if you sell or refinance before the buydown ends, you may not receive the full value. See{' '}
            <Link href="/mortgage/mortgage-points-vs-rate-trade-off" className="text-primary hover:underline font-medium">Mortgage Points vs Rate Trade Off</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advantages</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower payment in early years</li>
                <li>Can help when income is expected to rise</li>
                <li>Seller often pays as a concession</li>
                <li>May help with cash flow in year 1–2</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Payment steps up—plan for the increase</li>
                <li>You qualify at full rate</li>
                <li>Cost adds to closing costs</li>
                <li>Less benefit if you sell or refinance early</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not planning for the payment increase:</strong> Your <strong>mortgage payment</strong> will rise in year 2 and year 3. Budget for the full payment before the buydown ends.</li>
            <li><strong>Assuming you qualify at the reduced rate:</strong> <strong>Underwriting</strong> typically uses the full note rate for DTI. You must qualify at the full payment.</li>
            <li><strong>Ignoring the cost on the Loan Estimate:</strong> The buydown adds to your <strong>closing costs</strong>. Review your <strong>Loan Estimate</strong> (TRID) to see the rate schedule and total cost.</li>
            <li><strong>Expecting the seller to always pay:</strong> Sellers may offer it as a concession, but it is negotiable. Buyers can also pay. The cost is the present value of the payment reduction.</li>
            <li><strong>Confusing temporary vs. permanent buydown:</strong> A temporary buydown lasts only for the first year or two. A permanent buydown (discount points) lowers your rate for the life of the loan. See <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>.</li>
            <li><strong>Not comparing to other options:</strong> Consider whether a permanent buydown, lender credits, or seller-paid <strong>closing costs</strong> might be better for your situation. See <Link href="/mortgage/mortgage-rate-buydown-explained" className="text-primary hover:underline font-medium">Mortgage Rate Buydown Explained</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about temporary rate buydown">
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
            <li>Fannie Mae – Selling Guide (buydown guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (buydowns)</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
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
