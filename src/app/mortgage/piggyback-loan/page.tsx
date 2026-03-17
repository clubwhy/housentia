import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Piggyback Loan? | Housentia',
  description:
    'A piggyback loan combines a first mortgage with a second mortgage to avoid PMI. Learn how 80-10-10 and 80-15-5 structures work.',
  openGraph: { title: 'What Is a Piggyback Loan? | Housentia', description: 'Understand piggyback loans to avoid PMI.' },
};

const ARTICLE_SLUG = 'piggyback-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Piggyback Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/piggyback-loan';

const FAQ_ITEMS = [
  {
    question: 'What is a piggyback loan?',
    answer:
      'A piggyback loan combines a first mortgage (e.g., 80% LTV) with a second mortgage (e.g., 10% or 15%) so you can avoid PMI while putting down less than 20%. You have two loan amounts, two interest rates, and two mortgage payments. Your Loan Estimate (TRID) may show both loans.',
  },
  {
    question: 'What is 80-10-10?',
    answer:
      '80-10-10 means: 80% first mortgage, 10% second mortgage, 10% down payment. The combined LTV is 90%, so no PMI on the first mortgage. The second mortgage typically has a higher interest rate than the first. See What Is LTV.',
  },
  {
    question: 'What is 80-15-5?',
    answer:
      '80-15-5 means: 80% first mortgage, 15% second mortgage, 5% down payment. The second mortgage covers the gap so you avoid PMI. You have a smaller down payment but a larger second mortgage. Compare total mortgage payment and closing costs.',
  },
  {
    question: 'When does a piggyback make sense?',
    answer:
      'When the cost of the second mortgage (rate + fees) is less than PMI over the time you expect to have it. Compare total costs. Piggybacks can make sense if you have strong credit and expect to pay down the second or refinance soon. See What Is PMI and What Is DTI.',
  },
  {
    question: 'Does a piggyback affect my Loan Estimate or closing costs?',
    answer:
      'Yes. You receive a Loan Estimate (TRID) for each loan—or a combined disclosure. Your closing costs include fees for both the first and second mortgage. Two loans mean two sets of origination fees, possibly two appraisals. Compare the total to a single loan with PMI.',
  },
  {
    question: 'What is the interest rate on the second mortgage?',
    answer:
      'Second mortgages typically have higher interest rates than first mortgages because they are riskier for the lender. The rate may be fixed or adjustable. Your Loan Estimate shows the rate and mortgage payment for each loan. See What Is Interest Rate.',
  },
];

export default function PiggybackLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Piggyback Loan?', description: 'A piggyback loan combines first and second mortgages to avoid PMI. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Piggyback Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>piggyback loan</strong> combines a first mortgage with a second mortgage so you can put down less
            than 20% and avoid PMI (private mortgage insurance). Common structures: <strong>80-10-10</strong> (80% first,
            10% second, 10% down) or <strong>80-15-5</strong>. You have two <strong>loan amounts</strong>, two{' '}
            <strong>interest rates</strong>, and two <strong>mortgage payment</strong>s—but no PMI on the first loan.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) may show both loans. First-time homebuyers with strong credit
            and limited down payment may consider a piggyback. See{' '}
            <Link href="/mortgage/what-is-a-second-mortgage" className="text-primary hover:underline font-medium">What Is a Second Mortgage</Link>,{' '}
            <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>, and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            With a conventional loan and less than 20% down, you typically pay PMI. A piggyback uses a second
            mortgage to cover part of the gap. The first mortgage stays at 80% <strong>LTV</strong>—no PMI. The second
            mortgage has a higher <strong>interest rate</strong> and its own <strong>mortgage payment</strong>. Your
            total <strong>closing costs</strong> include fees for both loans.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> evaluates both loans. Your <strong>DTI</strong> includes both payments. Compare
            the total cost (first + second payment + <strong>closing costs</strong>) to a single loan with PMI. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 1: Piggyback structures table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Piggyback Structures</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Structure</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">First Mortgage</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Second Mortgage</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Down Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">80-10-10</td>
                  <td className="px-4 py-3 text-sm text-gray-700">80% LTV; no PMI</td>
                  <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">80-15-5</td>
                  <td className="px-4 py-3 text-sm text-gray-700">80% LTV; no PMI</td>
                  <td className="px-4 py-3 text-sm text-gray-700">15%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Second mortgage typically has higher interest rate. Your Loan Estimate (TRID) shows both loans.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply for both loans—often through the same lender or a lender that offers piggyback programs. The first
            mortgage is a conventional loan at 80% <strong>LTV</strong>. The second mortgage (home equity loan or HELOC
            used as a second) covers 10% or 15%. Your down payment covers the rest. Because the first loan is at 80%
            LTV, no PMI is required.
          </p>
          <p className="text-gray-700 mb-4">
            The second mortgage usually has a higher <strong>interest rate</strong> and may have a shorter term. You make
            two <strong>mortgage payment</strong>s each month. <strong>Underwriting</strong> evaluates your{' '}
            <strong>DTI</strong> with both payments. Your <strong>Loan Estimate</strong> (TRID) and Closing Disclosure
            show the <strong>loan amount</strong>, rate, payment, and <strong>closing costs</strong> for each. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex buys a $400,000 home with 80-10-10. First mortgage: $320,000 (80%) at 6.5%, $2,022{' '}
            <strong>mortgage payment</strong> (P&I), no PMI. Second mortgage: $40,000 (10%) at 8.5%, $327 payment.
            Down payment: $40,000 (10%). Total payment: $2,349. <strong>Closing costs</strong> for both loans.
          </p>
          <p className="text-gray-700 mb-4">
            Compare to a single $360,000 loan (90% LTV) with PMI: payment might be similar or higher depending on PMI
            cost. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            A <strong>piggyback loan</strong> = first mortgage (80% LTV) + second mortgage (10% or 15%) + down payment.
            No PMI on the first. You have two <strong>loan amounts</strong>, two <strong>interest rates</strong>, two{' '}
            <strong>mortgage payment</strong>s. The second typically has a higher rate. Compare total cost (payments +{' '}
            <strong>closing costs</strong>) to a single loan with PMI. Your <strong>Loan Estimate</strong> (TRID) shows
            both.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers with strong credit but limited savings may want to avoid PMI. A piggyback can achieve that
            with 10% or 5% down. The trade-off: two loans, two payments, and typically higher <strong>closing costs</strong>.
            The second mortgage&apos;s <strong>interest rate</strong> is usually higher. Compare the total cost over
            time to a single loan with PMI—especially if you plan to pay down the second or refinance when you reach
            80% LTV.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) lets you compare. You receive it within 3 business days of
            application. It shows the <strong>loan amount</strong>, <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong> for each loan. See{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Piggyback Loans</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>No PMI on the first mortgage</li>
                <li>Lower down payment (10% or 5%)</li>
                <li>May pay off second early to reduce payment</li>
                <li>First mortgage at 80% LTV</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Two loans, two payments, two sets of fees</li>
                <li>Second mortgage has higher rate</li>
                <li>Higher closing costs than single loan</li>
                <li>DTI must support both payments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming piggyback is always cheaper than PMI:</strong> Compare total cost. The second mortgage&apos;s higher rate and fees may exceed PMI—especially if you keep the loan long-term. Run the numbers for your scenario.</li>
            <li><strong>Ignoring closing costs for both loans:</strong> Two loans mean two sets of origination fees, possibly two appraisals. Your Loan Estimate shows the total. Compare to a single loan with PMI.</li>
            <li><strong>Not budgeting for two mortgage payments:</strong> You owe two payments each month. Underwriting will include both in your DTI. Ensure you can afford both. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.</li>
            <li><strong>Assuming you can remove the second easily:</strong> Paying down the second or refinancing requires equity, a new appraisal, and possibly new closing costs. Plan for the full term of both loans.</li>
            <li><strong>Confusing 80-10-10 with 80-15-5:</strong> 80-10-10 requires 10% down. 80-15-5 requires 5% down but a larger second mortgage (15%). The second in 80-15-5 typically has a higher rate or shorter term.</li>
            <li><strong>Not comparing Loan Estimates:</strong> Get a Loan Estimate for a piggyback and for a single loan with PMI. Compare interest rate, mortgage payment, closing costs, and APR. TRID makes comparison easier. See <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about piggyback loan">
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
            <li>Fannie Mae – Selling Guide (second mortgage and piggyback guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (second liens)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Piggyback availability varies by lender.</p>
        </section>
      </main>
    </div>
  );
}
