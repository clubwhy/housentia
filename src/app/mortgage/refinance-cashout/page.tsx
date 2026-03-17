"use client";
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';

const ARTICLE_SLUG = 'refinance-cashout';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Refinance & Cash-Out',
  });
})();

const FAQ_ITEMS = [
  {
    question: 'What is a cash-out refinance?',
    answer:
      'A cash-out refinance replaces your current mortgage with a larger one. The new loan amount exceeds your payoff, and you receive the difference in cash (minus closing costs). You use your home equity. See What Is Cash-Out Refinance.',
  },
  {
    question: 'What is the difference between cash-out and rate-and-term refinance?',
    answer:
      'A rate-and-term refinance changes your interest rate or loan term without taking cash out—the loan amount equals your payoff. A cash-out refinance increases the loan amount and gives you cash. Cash-out typically has stricter LTV limits and may have a higher rate.',
  },
  {
    question: 'What LTV do I need for cash-out?',
    answer:
      'Conventional cash-out often caps at 80% LTV—your loan amount cannot exceed 80% of the appraised value. FHA and VA have different rules. Your Loan Estimate shows the loan amount and LTV. See What Is LTV.',
  },
  {
    question: 'Do I need an appraisal for cash-out?',
    answer:
      'Usually yes. The lender orders an appraisal to establish value for LTV. The appraisal fee appears in your closing costs on the Loan Estimate. See Refinance Appraisal Requirements.',
  },
  {
    question: 'How does TRID apply to cash-out refinance?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate within 3 business days of application and a Closing Disclosure before closing. These forms show your loan amount, interest rate, mortgage payment, and closing costs.',
  },
  {
    question: 'Should I compare cash-out to a HELOC?',
    answer:
      'Both let you access equity. A cash-out refinance replaces your first mortgage and gives you a lump sum. A HELOC is a separate line of credit. Compare the interest rate, mortgage payment, and closing costs. See Refinance vs HELOC.',
  },
];

export default function RefinanceCashOutPage() {
  return (
    <div className="min-h-screen bg-white" style={{ background: '#fff' }}>
      <PageHero title="Refinance & Cash-Out" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Refinancing</strong> means replacing your current mortgage with a new one—often to get a lower <strong>interest rate</strong>, reduce your{' '}
            <strong>mortgage payment</strong>, or remove PMI. A <strong>cash-out refinance</strong> goes further: the new <strong>loan amount</strong> exceeds your
            payoff, and you receive the difference in cash. You use your home equity for renovations, debt consolidation, or other needs.
          </p>
          <p className="text-gray-700 mb-4">
            Cash-out refinances are subject to the same consumer protections as other refinances. Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement
            Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate and Closing Disclosure showing your <strong>loan amount</strong>,
            rate, payment, and <strong>closing costs</strong>. See <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is Cash-Out Refinance</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-equity" className="text-primary hover:underline font-medium">What Is Mortgage Equity</Link>, and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>LTV</strong> = loan amount ÷ appraised value. For cash-out, the <strong>loan amount</strong> is your payoff plus the cash you want. LTV limits
            apply—conventional often caps at 80%. If your home is worth $400,000, the max loan might be $320,000. If you owe $250,000, you could access up to
            $70,000 in equity (minus <strong>closing costs</strong>).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> evaluates your credit, income, DTI, and LTV. Your new <strong>mortgage payment</strong> depends on the <strong>interest rate</strong>,
            term, and <strong>loan amount</strong>. Cash-out typically has a slightly higher rate than rate-and-term. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Cash-out vs rate-and-term table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cash-Out vs Rate-and-Term Refinance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Rate-and-Term</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cash-Out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Loan amount</td>
                  <td className="px-4 py-3 text-sm text-gray-700">≈ Payoff</td>
                  <td className="px-4 py-3 text-sm text-gray-700">&gt; Payoff</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">LTV limit</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often ≤80% (conventional)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Cash to borrower</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Yes (minus costs)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your Loan Estimate (TRID) shows the loan amount, interest rate, mortgage payment, and closing costs.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply for a cash-out refinance. The lender orders an appraisal to establish value. <strong>Underwriting</strong> calculates your LTV: (payoff + cash
            you want) ÷ appraised value. If LTV is within program limits, you may qualify. You receive a <strong>Loan Estimate</strong> within 3 business days.
          </p>
          <p className="text-gray-700 mb-4">
            At closing, the new loan pays off the old one. The excess—minus <strong>closing costs</strong>—goes to you. Your new <strong>mortgage payment</strong> is
            based on the full <strong>loan amount</strong> and <strong>interest rate</strong>. Compare the payment and costs to a HELOC or other options. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>,{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>, and{' '}
            <Link href="/mortgage/refinance-vs-heloc" className="text-primary hover:underline font-medium">Refinance vs HELOC</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jamie owes $280,000 on a home appraised at $450,000. LTV = 62%. Jamie wants $50,000 for renovations. New <strong>loan amount</strong>: $330,000.
            New LTV = $330,000 ÷ $450,000 ≈ 73%—within 80% limit. <strong>Closing costs</strong>: $6,500. Jamie receives $50,000 − $6,500 = $43,500 in cash.
          </p>
          <p className="text-gray-700 mb-4">
            New <strong>mortgage payment</strong> at 6.5% on $330,000 (30-year): about $2,086. Jamie&apos;s old payment was ~$1,770. The payment increases because
            the <strong>loan amount</strong> is larger. This is illustrative. See <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link> and{' '}
            <Link href="/mortgage/refinance-after-home-value-increase" className="text-primary hover:underline font-medium">Refinance After Home Value Increase</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            A <strong>cash-out refinance</strong> = new <strong>loan amount</strong> &gt; payoff. You receive the difference in cash (minus{' '}
            <strong>closing costs</strong>). LTV limits apply—conventional often caps at 80%. Your <strong>mortgage payment</strong> increases because the loan
            is larger. Compare to HELOC. Your <strong>Loan Estimate</strong> (TRID) shows the details.
          </p>
        </div>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            Home equity can fund renovations, debt consolidation, or other needs. A cash-out refinance is one way to access it. The trade-off: a larger{' '}
            <strong>loan amount</strong> and higher <strong>mortgage payment</strong>. You also pay <strong>closing costs</strong>. Compare to a HELOC, which
            keeps your first mortgage and adds a second lien.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) shows the new <strong>interest rate</strong>, payment, and costs. Use it to compare. See{' '}
            <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
            <Link href="/mortgage/refinance-vs-home-equity-loan" className="text-primary hover:underline font-medium">Refinance vs Home Equity Loan</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Cash-Out Refinance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Access equity in a lump sum</li>
                <li>One loan, one mortgage payment</li>
                <li>May get a lower rate than HELOC</li>
                <li>TRID disclosures for cost comparison</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Larger loan amount, higher payment</li>
                <li>Closing costs apply</li>
                <li>LTV limits may limit cash available</li>
                <li>Underwriting and appraisal required</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Overestimating how much cash you can get:</strong> LTV limits apply. Your equity minus closing costs and LTV cap determines the max. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.</li>
            <li><strong>Ignoring the higher mortgage payment:</strong> A larger loan amount means a higher payment. Ensure you can afford it. Underwriting will check your DTI.</li>
            <li><strong>Not comparing to HELOC:</strong> A HELOC may cost less in closing costs if you need a smaller amount. Compare the interest rate, payment, and fees.</li>
            <li><strong>Using Zillow for value:</strong> The lender uses an appraisal. Your equity is based on appraised value, not online estimates.</li>
            <li><strong>Not reviewing the Loan Estimate:</strong> TRID requires the Loan Estimate within 3 business days. It shows your loan amount, rate, payment, and closing costs.</li>
            <li><strong>Forgetting closing costs reduce your cash:</strong> The cash you receive = (loan amount − payoff) − closing costs. Factor that in.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance and cash-out">
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
            <li>Fannie Mae – Selling Guide (cash-out refinance guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (cash-out refinance)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Cash-out refinance availability and LTV limits vary by lender and program.</p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 to-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Find out if refinancing can help you save
            <br className="hidden md:inline" />
            or unlock your home&apos;s value.
          </h2>
          <Link href="/tools/refinance-analyzer" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow hover:bg-accent-hover transition">
            Try Our Refinance Analyzer <HiOutlineArrowRightCircle className="w-6 h-6" />
          </Link>
        </section>

        <div className="bg-white py-4" />
      </main>
    </div>
  );
}
