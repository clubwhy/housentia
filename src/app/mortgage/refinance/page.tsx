import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Overview: A Complete Guide for U.S. Homeowners | Housentia',
  description:
    'Learn how mortgage refinancing works, when it makes sense, and how to compare costs. Understand rate-and-term vs cash-out refinances, TRID disclosures, and break-even.',
  openGraph: {
    title: 'Refinance Overview: A Complete Guide for U.S. Homeowners | Housentia',
    description: 'Understand refinancing your mortgage—types, process, costs, and how to compare options.',
  },
};

const ARTICLE_SLUG = 'refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Refinance Overview',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance';

const FAQ_ITEMS = [
  {
    question: 'What is a mortgage refinance?',
    answer:
      'A refinance replaces your existing mortgage with a new one. The new loan pays off the old loan, and you make payments on the new loan under new terms—different interest rate, loan amount, or term. Your Loan Estimate (TRID) shows the new loan details.',
  },
  {
    question: 'What is the difference between rate-and-term and cash-out refinance?',
    answer:
      'A rate-and-term refinance changes your interest rate and/or loan term without taking cash out. A cash-out refinance increases the loan amount beyond the payoff and gives you cash. Cash-out typically has stricter LTV limits and may have a higher rate. See What Is Cash-Out Refinance.',
  },
  {
    question: 'Do I pay closing costs when I refinance?',
    answer:
      'Usually yes. Refinances typically include lender fees, appraisal, title, and other closing costs—similar to a purchase loan. Costs are disclosed on the Loan Estimate and Closing Disclosure under TRID. Compare your total closing costs to your estimated monthly savings to calculate break-even.',
  },
  {
    question: 'What is refinance break-even?',
    answer:
      'Break-even is the point where your estimated monthly savings from the new refinance equal your estimated closing costs. For example, if closing costs are $4,000 and you save $200 per month, break-even is about 20 months. It is an estimate, not a guarantee. See Refinance Break-Even Point Explained.',
  },
  {
    question: 'What documents do I need to refinance?',
    answer:
      'Lenders typically require income documentation, asset statements, and identification—similar to a purchase loan. Underwriting reviews your credit, DTI, and LTV. See Refinance Documentation Requirements for details.',
  },
  {
    question: 'How does TRID apply to refinancing?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate within 3 business days of application and a Closing Disclosure at least 3 business days before closing. These forms show your loan amount, interest rate, mortgage payment, and closing costs so you can compare.',
  },
];

export default function RefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Refinance Overview: A Complete Guide for U.S. Homeowners',
    description:
      'Refinancing replaces your existing mortgage with a new loan. This guide explains refinance types, how costs are disclosed under TRID, and how to compare options.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Overview" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Refinancing</strong> means replacing your current mortgage with a new one. Homeowners often consider it when
            <strong> interest rates</strong> drop, when they want to change their loan term, or when they need to access home equity.
            A refinance can lower your <strong>mortgage payment</strong>, shorten your payoff timeline, or provide cash for
            home improvements or other needs.
          </p>
          <p className="text-gray-700 mb-4">
            Refinancing is subject to the same consumer protections as purchase loans. Under TILA (Truth in Lending Act),
            RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate
            and Closing Disclosure that show your estimated and final <strong>loan amount</strong>, rate, payment, and{' '}
            <strong>closing costs</strong>. Understanding these forms helps you compare options. See{' '}
            <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is a Refinance</Link> and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you refinance, a new lender (or your current lender) pays off your existing mortgage and creates a new loan.
            You then make payments on the new loan under its terms. The new <strong>loan amount</strong> may equal the payoff
            (rate-and-term refinance) or exceed it (cash-out refinance). Your <strong>interest rate</strong> and term may change.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> for a refinance follows similar rules as a purchase: credit, income, DTI, LTV, and program
            requirements. Your <strong>mortgage payment</strong> on the new loan depends on the rate, term, and principal.
            <strong> Closing costs</strong> apply—origination fees, appraisal, title, and more. Your Loan Estimate (TRID) shows
            the estimated cost. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 1: Refinance types table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Refinance Types Compare</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Loan Amount</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Rate-and-term</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Change rate or term</td>
                  <td className="px-4 py-3 text-sm text-gray-700">≈ Payoff amount</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower payment, shorter term</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Cash-out</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Access equity</td>
                  <td className="px-4 py-3 text-sm text-gray-700">&gt; Payoff amount</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Home improvements, debt</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Streamline (FHA/VA)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Simplified process</td>
                  <td className="px-4 py-3 text-sm text-gray-700">≈ Payoff amount</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Limited docs, no cash out</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">
            Your Loan Estimate (TRID) shows the loan amount, interest rate, mortgage payment, and closing costs for each option.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The refinance process is similar to a purchase loan. You apply, provide documentation, and the lender runs{' '}
            <strong>underwriting</strong>. You receive a <strong>Loan Estimate</strong> within 3 business days of application.
            After approval, you get a Closing Disclosure at least 3 business days before closing. At closing, the new loan pays off
            the old one, and you start making payments on the new mortgage.
          </p>
          <p className="text-gray-700 mb-4">
            Key steps: application, income and asset verification, appraisal (or waiver per program), credit review, and closing.
            Your <strong>mortgage payment</strong> on the new loan depends on the <strong>interest rate</strong>, term, and{' '}
            <strong>loan amount</strong>. Compare the <strong>APR</strong> and total <strong>closing costs</strong> across offers.
            See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan has a $300,000 balance at 7% on a 30-year loan. Current <strong>mortgage payment</strong> (P&I): about $1,996.
            Rates have dropped to 6%. A rate-and-term refinance to 6% would lower the payment to about $1,799—a $197 monthly savings.
          </p>
          <p className="text-gray-700 mb-4">
            Estimated <strong>closing costs</strong>: $4,500. Break-even: $4,500 ÷ $197 ≈ 23 months. If Jordan plans to stay
            in the home longer than 23 months, the refinance may save money over time. If Jordan plans to move in 18 months,
            the costs may not be recovered. This is illustrative. Compare your own <strong>loan amount</strong>, rate, and costs.
            See <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            A refinance replaces your existing mortgage with a new one. Compare the new <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong> to your current loan. Use your Loan Estimate
            (TRID) to review estimated costs. Break-even is the point where monthly savings offset closing costs—it is an
            estimate, not a guarantee. See <strong>What Is APR</strong> and <strong>Loan Estimate</strong> when comparing.
          </p>
        </div>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            Refinancing can lower your <strong>mortgage payment</strong>, shorten your payoff timeline, or provide cash for
            home improvements or other needs. But it is not always beneficial. <strong>Closing costs</strong> can offset
            savings if you do not stay in the home long enough. Extending the term can increase total interest even if the
            monthly payment drops.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) lets you compare. It shows the <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Use it to
            estimate break-even and compare offers. See <Link href="/mortgage/when-to-refinance-a-mortgage" className="text-primary hover:underline font-medium">When to Refinance a Mortgage</Link> and{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Refinancing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower interest rate or payment</li>
                <li>Shorter term to pay off sooner</li>
                <li>Switch from adjustable to fixed rate</li>
                <li>Access equity via cash-out (where permitted)</li>
                <li>TRID disclosures for transparent cost comparison</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Closing costs can offset savings</li>
                <li>Extending term may increase total interest</li>
                <li>Underwriting and eligibility requirements apply</li>
                <li>Break-even depends on time horizon</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Comparing only the monthly payment:</strong> Look at APR, total closing costs, and total interest over time. A lower payment with a longer term can cost more overall.</li>
            <li><strong>Ignoring closing costs:</strong> Refinancing fees can be substantial. Use your Loan Estimate to compare total costs and estimate break-even.</li>
            <li><strong>Assuming break-even is guaranteed:</strong> Break-even is an estimate based on your estimated savings and costs. If you move or refinance again sooner, you may not recover costs.</li>
            <li><strong>Not reviewing the Loan Estimate and Closing Disclosure:</strong> TRID forms are designed for comparison. Review them before closing to catch changes.</li>
            <li><strong>Overlooking LTV and DTI:</strong> Cash-out refinances have stricter LTV limits. Underwriting evaluates your DTI with the new payment. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.</li>
            <li><strong>Refinancing too soon after purchase:</strong> Some programs have waiting periods. See <Link href="/mortgage/refinance-waiting-periods" className="text-primary hover:underline font-medium">Refinance Waiting Periods</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinancing">
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

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and borrower circumstances.
          </p>
        </section>
      </main>
    </div>
  );
}
