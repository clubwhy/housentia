import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Escrow Setup Process | Housentia',
  description:
    'If your loan has an escrow account, the servicer sets it up after closing. Learn how the mortgage escrow setup process works and what to expect.',
  openGraph: {
    title: 'Mortgage Escrow Setup Process | Housentia',
    description: 'Understand how your escrow account is set up after closing.',
  },
};

const ARTICLE_SLUG = 'mortgage-escrow-setup-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Escrow Setup Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-escrow-setup-process';

const FAQ_ITEMS = [
  {
    question: 'When is my escrow account set up?',
    answer:
      'If your loan requires an escrow account, it is typically set up at or before closing. You pay initial escrow funds at closing (shown on your Closing Disclosure under TRID), and your monthly mortgage payment includes an escrow portion for taxes and insurance. The servicer manages the account after closing.',
  },
  {
    question: 'What are initial escrow deposits?',
    answer:
      'At closing, you pay initial escrow deposits—funds to establish a cushion for upcoming tax and insurance payments. The amount is shown on your Closing Disclosure (Section G). The servicer holds these funds and pays your taxes and insurance when due. Initial escrow is part of your closing costs and cash to close.',
  },
  {
    question: 'Can my escrow payment change?',
    answer:
      'Yes. The servicer conducts an escrow analysis at least once a year under RESPA. If taxes or insurance increase, your monthly escrow payment may increase. If there is a surplus, you may receive a refund or it may be applied to future payments. Your total mortgage payment (P&I + escrow) can change as a result.',
  },
  {
    question: 'Do I have to have an escrow account?',
    answer:
      'It depends on your loan type and LTV. Many loans require escrow when you put down less than 20%. Some borrowers can waive escrow once they reach a certain LTV, depending on the lender and loan program. See our What Is LTV guide for context.',
  },
  {
    question: 'Does escrow affect my Loan Estimate or interest rate?',
    answer:
      'Escrow does not change your interest rate or loan amount. Your Loan Estimate and Closing Disclosure show the escrow portion of your payment and initial escrow deposits. Escrow spreads tax and insurance costs over 12 months—it does not affect the principal and interest (P&I) portion of your mortgage payment.',
  },
  {
    question: 'What if my escrow payment increases?',
    answer:
      'If taxes or insurance go up, the servicer may increase your monthly escrow payment after the annual analysis. You will receive an escrow account statement. The increase reflects higher tax or insurance bills—not a change to your loan amount or interest rate. Budget for potential increases.',
  },
];

export default function MortgageEscrowSetupProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Escrow Setup Process',
    description:
      'If your loan has an escrow account, the servicer sets it up after closing. Learn how it works.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Escrow Setup Process" breadcrumbs={BREADCRUMBS} />
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
            If your mortgage includes an <strong>escrow account</strong>, the servicer collects a portion of your annual
            property taxes and homeowner&apos;s insurance with each monthly <strong>mortgage payment</strong>, holds the
            funds, and pays the bills when due. The escrow account is typically established at closing. You pay initial
            escrow deposits as part of your <strong>closing costs</strong>—shown on your <strong>Loan Estimate</strong> and
            Closing Disclosure under TRID.
          </p>
          <p className="text-gray-700 mb-4">
            Escrow does not change your <strong>loan amount</strong>, <strong>interest rate</strong>, or principal and
            interest (P&I). It spreads tax and insurance costs over 12 months. RESPA (Real Estate Settlement Procedures
            Act) governs escrow accounts and requires annual analysis. See{' '}
            <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">What Is Escrow?</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> has two main parts: principal and interest (P&I) on your{' '}
            <strong>loan amount</strong>, and escrow for taxes and insurance. The escrow portion is typically
            one-twelfth of your estimated annual property taxes and homeowner&apos;s insurance. The servicer holds these
            funds and pays the bills when due—so you do not face large lump sums.
          </p>
          <p className="text-gray-700 mb-4">
            At closing, you pay initial escrow deposits (Section G on the Closing Disclosure). These establish a cushion
            for upcoming payments. The servicer receives the funds when the loan is boarded and sets up the account.
            Under TRID (TILA-RESPA Integrated Disclosure), your <strong>Loan Estimate</strong> and Closing Disclosure
            show escrow amounts. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link> (escrow is often required when LTV &gt; 80%) and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 1: Escrow components table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Escrow Setup at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">When</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">At closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Initial escrow deposits paid (Section G); part of cash to close</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">After closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Servicer boards loan, sets up escrow account</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Each month</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Escrow portion collected with mortgage payment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">When due</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Servicer pays property taxes and homeowner&apos;s insurance</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Annually</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Escrow analysis (RESPA); payment may adjust</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Procedures vary by servicer and loan type.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            During <strong>underwriting</strong>, the lender determines whether your loan requires escrow. Many loans with
            LTV above 80% require it. Your <strong>Loan Estimate</strong> shows the estimated escrow portion and initial
            escrow deposits. At closing, you pay the initial deposits as part of cash to close. The Closing Disclosure
            (provided under TRID at least 3 days before closing) shows the final amounts.
          </p>
          <p className="text-gray-700 mb-4">
            After closing, the loan is transferred to a servicer (who may be the lender or another company). The
            servicer boards the loan and sets up the escrow account. Your monthly <strong>mortgage payment</strong> includes
            P&I (based on <strong>loan amount</strong> and <strong>interest rate</strong>) plus escrow. Under RESPA, the
            servicer must conduct an escrow analysis at least once a year. See{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>,{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>, and{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam closes on a $300,000 loan at 6.5% <strong>interest rate</strong> with 10% down (LTV 90%). Escrow is
            required. The Closing Disclosure shows initial escrow deposits of $2,400 (Section G)—part of Sam&apos;s{' '}
            <strong>closing costs</strong>. Sam&apos;s monthly <strong>mortgage payment</strong> is $1,896 P&I plus $350
            escrow (taxes and insurance), for a total of $2,246.
          </p>
          <p className="text-gray-700 mb-4">
            The servicer sets up the escrow account after closing. Each month, Sam pays $2,246. The servicer holds the
            escrow portion and pays property taxes ($2,800/year) and homeowner&apos;s insurance ($1,400/year) when due.
            After one year, the escrow analysis shows a small surplus; Sam receives a $75 refund. The example is
            illustrative. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-cyan-500 bg-cyan-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-cyan-900 mb-2">Key Takeaway</h3>
          <p className="text-cyan-800 text-[15px] leading-relaxed">
            Escrow does not change your loan amount or interest rate. Your P&I is fixed (for a fixed-rate loan). The
            escrow portion can change when taxes or insurance change. Review your escrow account statement each year
            and budget for possible increases.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding escrow setup helps you know what to expect at closing and in your monthly payment. Your{' '}
            <strong>Loan Estimate</strong> and Closing Disclosure show initial escrow and the escrow portion of your
            payment. First-time buyers may not realize that the total <strong>mortgage payment</strong> includes more
            than P&I—taxes and insurance are part of the cost of homeownership.
          </p>
          <p className="text-gray-700 mb-4">
            Escrow spreads those costs over 12 months. Without escrow, you would pay property taxes and insurance in
            lump sums—which can be harder to budget. The annual escrow analysis may increase your payment if taxes or
            insurance go up. See <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Escrow</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Spreads tax and insurance costs over 12 months</li>
                <li>Servicer pays bills on time—no missed payments</li>
                <li>RESPA requires annual analysis and statements</li>
                <li>Easier budgeting for many borrowers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Escrow payment can increase when taxes or insurance rise</li>
                <li>Initial escrow adds to closing costs</li>
                <li>Servicer holds your funds until bills are due</li>
                <li>Not all loans require escrow (depends on LTV)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Ignoring the escrow portion of your payment:</strong> Your total <strong>mortgage payment</strong> includes P&I plus escrow. Budget for the full amount, not just P&I.</li>
            <li><strong>Not budgeting for escrow increases:</strong> Taxes and insurance can go up. The annual analysis may increase your payment. Plan for possible increases.</li>
            <li><strong>Confusing escrow with closing costs:</strong> Initial escrow is part of <strong>closing costs</strong> and cash to close, but it is not a fee—it is funds held for future tax and insurance payments.</li>
            <li><strong>Assuming escrow affects your interest rate:</strong> Escrow does not change your <strong>loan amount</strong>, <strong>interest rate</strong>, or P&I. It is separate from the loan terms.</li>
            <li><strong>Not reviewing the escrow statement:</strong> You have the right to an escrow account statement. Review it each year to understand changes.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about escrow setup">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Escrow accounts</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Escrow Account', href: '/mortgage-glossary/escrow-account' }]}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Escrow requirements vary by loan type and lender.
          </p>
        </section>
      </main>
    </div>
  );
}
