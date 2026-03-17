import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance After Interest Rates Drop | Housentia',
  description:
    'When interest rates drop, refinancing can lower your monthly payment. Learn when it makes sense and how to calculate savings.',
  openGraph: { title: 'Refinance After Interest Rates Drop | Housentia', description: 'Understand refinancing when rates drop.' },
};

const ARTICLE_SLUG = 'refinance-after-interest-rates-drop';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance After Interest Rates Drop' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-after-interest-rates-drop';

const FAQ_ITEMS = [
  {
    question: 'When should I refinance after rates drop?',
    answer:
      'When the new interest rate is low enough to recoup your closing costs within your expected ownership period. Calculate your break-even point: closing costs ÷ monthly savings. If you plan to stay past break-even, refinancing may make sense. See Refinance Break-Even Point Explained.',
  },
  {
    question: 'How much lower should the rate be?',
    answer:
      'A common rule of thumb is 0.75%–1% lower, but the real test is whether your monthly mortgage payment savings will cover closing costs before you move or refinance again. A smaller rate drop can still work if closing costs are low or you stay a long time.',
  },
  {
    question: 'Should I wait for rates to drop more?',
    answer:
      'Rates are unpredictable. If you can save now and plan to stay long enough to break even, refinancing may make sense. Waiting risks rates rising. Compare your Loan Estimate to your current loan. See What Is Interest Rate and What Is APR.',
  },
  {
    question: 'What if I just refinanced?',
    answer:
      'Check refinance waiting periods. Some programs require 6–12 months before another refinance. Your lender can confirm. See Refinance Waiting Periods.',
  },
  {
    question: 'How does TRID apply to refinancing when rates drop?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate within 3 business days of application and a Closing Disclosure before closing. These forms show your loan amount, interest rate, mortgage payment, and closing costs so you can compare to your current loan.',
  },
  {
    question: 'Does extending my term affect total interest?',
    answer:
      'Yes. Refinancing into a new 30-year term resets the clock. Even with a lower rate, you may pay more total interest over the life of the loan if you extend the term. Compare total interest, not just the monthly payment. See What Is Amortization.',
  },
];

export default function RefinanceAfterInterestRatesDropPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance After Interest Rates Drop', description: 'Learn when to refinance when rates drop and how to calculate savings.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance After Interest Rates Drop" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When <strong>interest rates</strong> fall, refinancing can lower your <strong>mortgage payment</strong>. You replace your current loan with a new one
            at a lower rate. The new <strong>loan amount</strong> typically equals your payoff (rate-and-term refinance). Your monthly payment drops because
            you pay less interest on the same principal.
          </p>
          <p className="text-gray-700 mb-4">
            Refinancing has <strong>closing costs</strong>. The key question: will your monthly savings cover those costs before you move or refinance again?
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a
            Loan Estimate and Closing Disclosure showing your new rate, payment, and costs. See{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>,{' '}
            <Link href="/mortgage/when-to-refinance-a-mortgage" className="text-primary hover:underline font-medium">When to Refinance a Mortgage</Link>,{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>, and{' '}
            <Link href="/mortgage/refinance-waiting-periods" className="text-primary hover:underline font-medium">Refinance Waiting Periods</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> depends on the <strong>interest rate</strong>, term, and principal. When the rate drops, the payment drops—
            assuming the same <strong>loan amount</strong> and term. A refinance replaces your old loan with a new one at the lower rate.
            <strong> Underwriting</strong> evaluates your credit, income, DTI, and LTV. You must qualify for the new loan.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> include origination fees, appraisal, title, and more. Your <strong>Loan Estimate</strong> (TRID) shows the total.
            Break-even = closing costs ÷ monthly savings. If you stay past break-even, you may save money overall. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Break-even comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When a Rate Drop May Pay Off</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Scenario</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Consideration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Rate drops 0.5%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">May work if closing costs are low and you stay long-term</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Rate drops 1%+</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often worth comparing; break-even may be shorter</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Planning to move soon</td>
                  <td className="px-4 py-3 text-sm text-gray-700">May not break even; compare costs to savings</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your Loan Estimate shows the new interest rate, mortgage payment, and closing costs. Compare to your current loan.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply for a rate-and-term refinance. The lender runs <strong>underwriting</strong> and may order an appraisal. You receive a{' '}
            <strong>Loan Estimate</strong> within 3 business days. It shows the new <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong>. Compare to your current loan. At closing, the new loan pays off the old one.
          </p>
          <p className="text-gray-700 mb-4">
            The new <strong>loan amount</strong> equals your payoff (plus any costs rolled in, if permitted). Your payment drops because the rate is lower.
            Watch the term: refinancing into a new 30-year loan resets the clock. You may pay more total interest over time even with a lower rate.
            See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor has a $280,000 balance at 7.25% on a 30-year loan. Current <strong>mortgage payment</strong> (P&I): about $1,909. Rates have dropped to 6.25%.
            A rate-and-term refinance to 6.25% would lower the payment to about $1,724—a $185 monthly savings.
          </p>
          <p className="text-gray-700 mb-4">
            Estimated <strong>closing costs</strong>: $4,200. Break-even: $4,200 ÷ $185 ≈ 23 months. If Taylor plans to stay 4+ years, the refinance may save
            money. If Taylor plans to move in 18 months, the costs may not be recovered. This is illustrative. Compare your own <strong>loan amount</strong>,
            rate, and costs. See <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            When <strong>interest rates</strong> drop, refinancing can lower your <strong>mortgage payment</strong>. Compare your new rate, payment, and{' '}
            <strong>closing costs</strong> to your current loan. Break-even = closing costs ÷ monthly savings. If you stay past break-even, you may save.
            Your <strong>Loan Estimate</strong> (TRID) shows the details. Do not extend the term unless you understand the total interest impact.
          </p>
        </div>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            A lower <strong>interest rate</strong> can reduce your <strong>mortgage payment</strong> and total interest over time. But refinancing has costs.
            If you move or refinance again before break-even, you may not recover those costs. Your time horizon matters.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) lets you compare. It shows the <strong>loan amount</strong>, <strong>interest rate</strong>, payment,
            and <strong>closing costs</strong>. Use it to estimate break-even. See <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower monthly mortgage payment</li>
                <li>Less total interest if you keep the same or shorter term</li>
                <li>Lock in a lower rate if rates rise later</li>
                <li>TRID disclosures for transparent cost comparison</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Closing costs can offset savings</li>
                <li>Extending term may increase total interest</li>
                <li>Rates may drop further—or rise—before you close</li>
                <li>Break-even depends on how long you stay</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Comparing only the monthly payment:</strong> Look at APR, total closing costs, and total interest. A lower payment with a longer term can cost more overall.</li>
            <li><strong>Ignoring closing costs:</strong> Refinancing fees can be substantial. Use your Loan Estimate to compare total costs and estimate break-even.</li>
            <li><strong>Assuming break-even is guaranteed:</strong> Break-even is an estimate. If you move or refinance again sooner, you may not recover costs.</li>
            <li><strong>Extending the term without understanding:</strong> Refinancing into a new 30-year loan resets the clock. You may pay more total interest even with a lower rate. See <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.</li>
            <li><strong>Not locking your rate:</strong> Rates can change before closing. A rate lock protects you. See <Link href="/mortgage/what-is-rate-lock" className="text-primary hover:underline font-medium">What Is Rate Lock</Link>.</li>
            <li><strong>Refinancing too soon after a prior refinance:</strong> Some programs have waiting periods. See <Link href="/mortgage/refinance-waiting-periods" className="text-primary hover:underline font-medium">Refinance Waiting Periods</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance after rates drop">
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
          <p className="text-gray-700 text-sm">Use our refinance analyzer to compare scenarios.</p>
        </section>
      </main>
    </div>
  );
}
