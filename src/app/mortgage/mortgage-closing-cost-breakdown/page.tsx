import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Closing Cost Breakdown | Housentia',
  description:
    'A breakdown of mortgage closing costs: lender fees, third-party fees, prepaid items, and escrow. Learn what each category includes.',
  openGraph: { title: 'Mortgage Closing Cost Breakdown | Housentia', description: 'Understand the breakdown of mortgage closing costs.' },
};

const ARTICLE_SLUG = 'mortgage-closing-cost-breakdown';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Closing Cost Breakdown' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-closing-cost-breakdown';

const FAQ_ITEMS = [
  {
    question: 'What are the main categories of closing costs?',
    answer:
      'Closing costs typically include: (1) Origination charges (lender fees for processing, underwriting, points), (2) Services you cannot shop for (appraisal, credit report, flood cert), (3) Services you can shop for (title, escrow), (4) Prepaid items (insurance, taxes, prepaid interest), (5) Initial escrow payment. Your Loan Estimate and Closing Disclosure list each category.',
  },
  {
    question: 'Where do I see the breakdown?',
    answer:
      'The Loan Estimate and Closing Disclosure break down costs by category. Section A is origination charges; Sections B–E cover other services and prepaid items. Under TRID, both forms use the same structure so you can compare your estimate to the final numbers before closing.',
  },
  {
    question: 'Which costs can I shop for?',
    answer:
      'Title insurance, escrow, and some other services are often shoppable. The Loan Estimate indicates which services you can shop for. Compare quotes to save. Lender-chosen services (appraisal, credit report) are typically not shoppable.',
  },
  {
    question: 'What are prepaid items?',
    answer:
      'Prepaid items include homeowner\'s insurance, property taxes, and prepaid interest (from closing to first payment). These are not fees but funds held in escrow or paid in advance. They affect your cash to close but are separate from lender and third-party fees.',
  },
  {
    question: 'Do closing costs affect my mortgage payment?',
    answer:
      'Closing costs are paid at closing and do not directly change your monthly mortgage payment. Your payment is based on your loan amount, interest rate, and term. However, discount points (paid at closing) can lower your interest rate and thus your payment. See our guides on What Is APR and What Is Interest Rate.',
  },
  {
    question: 'Can closing costs change between the Loan Estimate and Closing Disclosure?',
    answer:
      'Some costs can change within tolerance limits under TRID. Others may change with a valid changed circumstance (e.g., you lock a different rate, or the appraisal comes in lower). The lender must provide a revised Loan Estimate or Closing Disclosure when certain costs change.',
  },
];

export default function MortgageClosingCostBreakdownPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Closing Cost Breakdown', description: 'A breakdown of lender fees, third-party fees, prepaid items, and escrow.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Closing Cost Breakdown" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>mortgage closing cost breakdown</strong> organizes fees into categories so you can understand what
            you pay at closing. Under TRID (TILA-RESPA Integrated Disclosure), your <strong>Loan Estimate</strong> and
            Closing Disclosure use the same structure—origination charges, services you cannot shop for, services you can
            shop for, prepaid items, and initial escrow. This makes it easier to compare offers and track changes.
          </p>
          <p className="text-gray-700 mb-4">
            Closing costs are separate from your <strong>loan amount</strong> and <strong>mortgage payment</strong>. Your
            payment is based on your <strong>interest rate</strong>, term, and principal. Closing costs are one-time
            fees and prepaid items paid at settlement. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you apply for a mortgage, the lender sends a <strong>Loan Estimate</strong> within 3 business days.
            Page 2 shows the closing cost breakdown by section. Section A lists origination charges—lender fees for
            processing, <strong>underwriting</strong>, and optional discount points. Sections B through E cover
            third-party services and prepaid items.
          </p>
          <p className="text-gray-700 mb-4">
            Some services you can shop for (title, escrow); others you cannot (appraisal, credit report). Shopping for
            title and escrow can lower your total <strong>closing costs</strong>. At least 3 days before closing, you
            receive the Closing Disclosure with final numbers. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> (APR includes some fees) and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: Closing cost categories table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing Cost Categories at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Section</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Covers</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Can You Shop?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">A – Origination</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Processing, underwriting, points</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No (lender sets)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">B – Services you cannot shop for</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal, credit report, flood cert</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">C – Services you can shop for</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Title, escrow, survey</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">E – Prepaid items</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Insurance, taxes, prepaid interest</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies (insurance shoppable)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">G – Initial escrow</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Reserves for taxes and insurance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Structure follows TRID. Section labels may vary slightly by form.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Under TILA and RESPA (via TRID), lenders must provide a <strong>Loan Estimate</strong> within 3 business
            days of receiving your application. The breakdown appears on page 2. Origination charges (Section A) are
            lender fees. Discount points, if you pay them, lower your <strong>interest rate</strong> and thus your{' '}
            <strong>mortgage payment</strong>—see <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            Sections B and C list third-party services. The form indicates which you can shop for. Prepaid items
            (Section E) include homeowner&apos;s insurance, property taxes, and prepaid interest from closing to your
            first payment. Initial escrow (Section G) holds reserves for future taxes and insurance. Your total cash to
            close combines the down payment, <strong>closing costs</strong>, and prepaid items. See{' '}
            <Link href="/mortgage/average-mortgage-closing-costs" className="text-primary hover:underline font-medium">Average Mortgage Closing Costs</Link> and{' '}
            <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam is buying a $350,000 home with a $280,000 <strong>loan amount</strong> at 6.5% <strong>interest rate</strong>.
            The <strong>Loan Estimate</strong> shows: Section A origination $1,200, Section B (appraisal, credit) $650,
            Section C (title, escrow) $1,800, Section E prepaid items $2,100, Section G initial escrow $1,400. Total
            closing costs (A–D) about $4,650; with prepaid and escrow, cash to close is higher.
          </p>
          <p className="text-gray-700 mb-4">
            Sam shops for title and gets a quote $300 lower. The Closing Disclosure at least 3 days before closing
            reflects the final numbers. Sam&apos;s <strong>mortgage payment</strong> (P&I) is based on the{' '}
            <strong>loan amount</strong> and rate—see <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
            The example is illustrative; actual costs vary by lender, location, and transaction.
          </p>
        </section>

        {/* Design object 2: Shopping callout */}
        <div className="mb-10 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-emerald-900 mb-2">Tip: Shop for Shoppable Services</h3>
          <p className="text-emerald-800 text-[15px] leading-relaxed">
            Section C services (title, escrow) are often shoppable. The Loan Estimate lists them and indicates which you
            can shop for. Getting multiple quotes can reduce your closing costs. You are not required to use the
            lender&apos;s preferred provider for shoppable services.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding the breakdown helps you compare lenders, spot fee differences, and plan your cash to close.
            First-time buyers often focus on the <strong>interest rate</strong> and <strong>mortgage payment</strong>—both
            matter—but <strong>closing costs</strong> can add thousands. A lower rate with high fees may cost more over
            time than a slightly higher rate with lower fees. Use <strong>APR</strong> as one comparison tool—see{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            The standardized TRID format makes it easier to compare <strong>Loan Estimates</strong> side by side. Check
            Section A (origination), Section C (shoppable services), and total closing costs. If your <strong>Loan Estimate</strong> changes
            during <strong>underwriting</strong>, the lender must provide a revised form when certain costs increase.
            See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> for how income and debt affect qualification.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Understanding the Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Compare lenders more effectively</li>
                <li>Identify shoppable services to save</li>
                <li>Plan cash to close accurately</li>
                <li>Spot unexpected fee increases</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Some costs can change (TRID tolerances)</li>
                <li>Prepaid items vary by closing date</li>
                <li>Lender fees differ—compare total cost</li>
                <li>Discount points trade upfront cost for lower rate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Ignoring the breakdown:</strong> Focus on more than the <strong>interest rate</strong>. Total <strong>closing costs</strong> and APR matter. Compare the full <strong>Loan Estimate</strong>.</li>
            <li><strong>Not shopping for Section C services:</strong> Title and escrow are often shoppable. Get quotes to reduce costs.</li>
            <li><strong>Confusing prepaid items with fees:</strong> Prepaid interest, insurance, and taxes are not lender fees—they are funds paid in advance or held in escrow.</li>
            <li><strong>Assuming the Loan Estimate is final:</strong> It is an estimate. Some costs can change within TRID tolerances or with a valid changed circumstance.</li>
            <li><strong>Overlooking the Closing Disclosure:</strong> Review it at least 3 days before closing. Compare to your Loan Estimate and ask about increases.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about closing cost breakdown">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe: closing costs</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Closing cost structures vary by lender and transaction.</p>
        </section>
      </main>
    </div>
  );
}
