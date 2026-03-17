import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Closing Costs Explained | Housentia',
  description:
    'Refinance closing costs include lender fees, appraisal, title, and more. Learn what to expect and how to reduce or roll costs into the loan.',
  openGraph: { title: 'Refinance Closing Costs Explained | Housentia', description: 'Understand refinance closing costs.' },
};

const ARTICLE_SLUG = 'refinance-closing-costs-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Closing Costs Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-closing-costs-explained';

const FAQ_ITEMS = [
  {
    question: 'What are refinance closing costs?',
    answer:
      'Similar to purchase: lender fees (origination, processing, underwriting), appraisal, title, recording, and prepaid items. Typically 2%–5% of the loan amount. Your Loan Estimate (TRID) lists each category. See What Are Closing Costs and Mortgage Closing Cost Breakdown.',
  },
  {
    question: 'Can I roll closing costs into the loan?',
    answer:
      'Yes. You can often finance closing costs by increasing the loan amount, which raises your balance and may slightly increase your mortgage payment. You pay interest on the extra principal. Factor that into your break-even calculation. See Refinance Break-Even Point Explained.',
  },
  {
    question: 'Are refinance costs lower than purchase?',
    answer:
      'Sometimes. You may avoid some fees (e.g., no real estate commission). Lender credits or no-closing-cost options may be available in exchange for a higher interest rate. Compare the Loan Estimate to your current loan.',
  },
  {
    question: 'How do I reduce refinance costs?',
    answer:
      'Shop lenders, compare Loan Estimates, ask about lender credits, and consider streamline programs (FHA, VA) that may have reduced costs. Some services (title, escrow) are shoppable. See Streamline Refinance Explained.',
  },
  {
    question: 'How does TRID apply to refinance closing costs?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate within 3 business days of application and a Closing Disclosure before closing. Both forms show your loan amount, interest rate, mortgage payment, and closing costs so you can compare.',
  },
  {
    question: 'What if my closing costs change?',
    answer:
      'Some costs can change within tolerance limits under TRID. Others may change with a valid changed circumstance (e.g., you lock a different rate). The lender must provide a revised Loan Estimate or Closing Disclosure when certain costs change.',
  },
];

export default function RefinanceClosingCostsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Closing Costs Explained', description: 'Learn what refinance closing costs include and how to reduce them.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Closing Costs Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Refinance closing costs</strong> are the fees you pay when you replace your current mortgage with a new one. They are similar to purchase
            closing costs: lender fees (origination, processing, <strong>underwriting</strong>), appraisal, title, recording, and prepaid items. Typically
            2%–5% of the <strong>loan amount</strong>. Your <strong>Loan Estimate</strong> (TRID) lists each fee.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a
            Loan Estimate within 3 business days of application and a Closing Disclosure before closing. These forms show your <strong>interest rate</strong>,
            <strong> mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>,{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>, and{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is a Loan Estimate</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you refinance, you pay fees to the lender and third parties. <strong>Origination charges</strong> cover processing and underwriting. The
            <strong> appraisal</strong> establishes your home&apos;s value for LTV. <strong>Title</strong> and <strong>recording</strong> fees protect the lien.
            <strong> Prepaid items</strong> (insurance, taxes, prepaid interest) go into escrow or are paid in advance.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> breaks costs into sections. Section A: origination. Sections B–E: other services and prepaids. The total affects
            your cash to close—or, if you roll costs into the loan, your <strong>loan amount</strong> and <strong>mortgage payment</strong>. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Cost categories table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Refinance Closing Cost Categories</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Origination</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Processing, underwriting, points</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Property valuation (waiver may apply)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Title & recording</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Title insurance, recording fee</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Prepaid items</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Insurance, taxes, prepaid interest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your Loan Estimate (TRID) shows the breakdown. Typically 2%–5% of loan amount.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply for a refinance. Within 3 business days, you receive a <strong>Loan Estimate</strong>. It lists estimated <strong>closing costs</strong> by
            category. You can pay them at closing (cash to close) or, if permitted, roll them into the <strong>loan amount</strong>. Rolling costs increases your
            principal and may slightly raise your <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Lender credits can reduce your costs in exchange for a higher <strong>interest rate</strong>. No-closing-cost refinances work similarly—the lender
            absorbs costs but may charge a higher rate. Compare the <strong>APR</strong> and total cost over time. At least 3 business days before closing, you
            receive the Closing Disclosure with final numbers. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Riley refinances a $300,000 balance. Estimated <strong>closing costs</strong>: $5,400 (about 1.8% of loan amount). Breakdown: origination $1,200,
            appraisal $550, title $1,100, recording $150, prepaids $2,400. Riley pays at closing. New <strong>mortgage payment</strong> drops $180/month due to
            lower <strong>interest rate</strong>. Break-even: $5,400 ÷ $180 ≈ 30 months.
          </p>
          <p className="text-gray-700 mb-4">
            Alternatively, Riley could roll $5,400 into the loan. New <strong>loan amount</strong>: $305,400. Payment would be slightly higher than if Riley
            paid costs upfront—because of the extra principal. Riley would pay interest on that $5,400. This is illustrative. See{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Refinance closing costs</strong> typically run 2%–5% of the <strong>loan amount</strong>. Your <strong>Loan Estimate</strong> (TRID) shows
            the breakdown. You can pay at closing or roll costs into the loan (if permitted). Lender credits may reduce costs in exchange for a higher{' '}
            <strong>interest rate</strong>. Compare total cost and break-even before deciding.
          </p>
        </div>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> can offset the benefit of a lower <strong>interest rate</strong>. If your monthly savings are $150 and your costs
            are $6,000, break-even is 40 months. If you plan to move in 3 years, you may not recover the costs. Understanding the breakdown helps you compare
            offers and decide whether to pay at closing or roll costs in.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) lets you compare. It shows the <strong>loan amount</strong>, <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Use it to estimate break-even. See{' '}
            <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
            <Link href="/mortgage/when-to-refinance-a-mortgage" className="text-primary hover:underline font-medium">When to Refinance a Mortgage</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Paying Costs at Closing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower loan amount, lower payment</li>
                <li>No interest on cost amount</li>
                <li>Requires cash at closing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Rolling Costs into Loan</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Less cash needed at closing</li>
                <li>Higher loan amount, slightly higher payment</li>
                <li>You pay interest on the rolled amount</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Comparing only the interest rate:</strong> A lower rate with high closing costs may not save you money if you do not stay long enough. Compare total cost and break-even.</li>
            <li><strong>Ignoring lender credits:</strong> Lender credits reduce your closing costs but may come with a higher rate. Compare the APR and total cost over your expected ownership period.</li>
            <li><strong>Assuming rolling costs is free:</strong> Rolling costs increases your loan amount. You pay interest on that extra principal. Factor it into your comparison.</li>
            <li><strong>Not shopping:</strong> Costs vary by lender. Get Loan Estimates from multiple lenders and compare. Some services (title, escrow) are shoppable. See <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.</li>
            <li><strong>Forgetting prepaid items:</strong> Prepaids (insurance, taxes, interest) affect cash to close. They are not fees but funds held in escrow. Review Section E and F on the Loan Estimate.</li>
            <li><strong>Not reviewing the Closing Disclosure:</strong> Compare the Closing Disclosure to your Loan Estimate before closing. TRID requires it at least 3 business days before closing so you can review.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance closing costs">
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
          <p className="text-gray-700 text-sm">Costs vary by lender and transaction.</p>
        </section>
      </main>
    </div>
  );
}
