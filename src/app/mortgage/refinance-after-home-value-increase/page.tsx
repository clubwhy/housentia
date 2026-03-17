import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance After Home Value Increase | Housentia',
  description:
    'When your home value increases, you may qualify to remove PMI, get a better rate, or do a cash-out refinance. Learn your options.',
  openGraph: { title: 'Refinance After Home Value Increase | Housentia', description: 'Understand refinancing after home value increases.' },
};

const ARTICLE_SLUG = 'refinance-after-home-value-increase';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance After Home Value Increase' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-after-home-value-increase';

const FAQ_ITEMS = [
  {
    question: 'Why refinance after home value increases?',
    answer:
      'Higher value can lower your LTV, which may let you remove PMI, qualify for a better interest rate, or access equity through a cash-out refinance. Your mortgage payment may drop or you may receive cash. See What Is LTV and What Is Mortgage Equity.',
  },
  {
    question: 'Can I remove PMI with a refinance?',
    answer:
      'Yes. If your new LTV is 80% or below based on a new appraisal, you can refinance into a loan without PMI. The appraisal establishes the current value. Compare your new mortgage payment and closing costs to your current payment plus PMI. See What Is PMI.',
  },
  {
    question: 'Do I need an appraisal?',
    answer:
      'Usually. The lender orders an appraisal to confirm the new value for LTV and underwriting. Some rate-and-term refinances may qualify for an appraisal waiver. See Refinance Appraisal Requirements.',
  },
  {
    question: 'When does a cash-out make sense after appreciation?',
    answer:
      'When you need funds and your LTV is low enough to qualify. Cash-out limits vary by program—conventional often caps at 80% LTV. Compare the new loan amount, interest rate, mortgage payment, and closing costs. See What Is Cash-Out Refinance.',
  },
  {
    question: 'How does TRID apply to refinancing after value increase?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate within 3 business days of application and a Closing Disclosure before closing. These forms show your loan amount, interest rate, mortgage payment, and closing costs so you can compare.',
  },
  {
    question: 'What if the appraisal comes in lower than expected?',
    answer:
      'A low appraisal can raise your LTV and may limit your options—you might not qualify to remove PMI or may get less cash-out. You may need to adjust the loan amount or bring more to closing. See Refinance Appraisal Requirements.',
  },
];

export default function RefinanceAfterHomeValueIncreasePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance After Home Value Increase', description: 'Learn refinance options when your home value has increased.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance After Home Value Increase" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When your home&apos;s value increases, you gain <strong>equity</strong>—the difference between what you owe and what the home is worth.
            That can open refinance options: removing PMI, lowering your <strong>interest rate</strong>, or accessing cash through a cash-out refinance.
            A new appraisal establishes the value. Your <strong>LTV</strong> (loan-to-value) drops when value rises and your balance stays the same.
          </p>
          <p className="text-gray-700 mb-4">
            Refinancing after appreciation is subject to the same consumer protections as other refinances. Under TILA (Truth in Lending Act),
            RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate and Closing Disclosure
            showing your <strong>loan amount</strong>, rate, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-mortgage-equity" className="text-primary hover:underline font-medium">What Is Mortgage Equity</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>,{' '}
            <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>, and{' '}
            <Link href="/mortgage/refinance-appraisal-requirements" className="text-primary hover:underline font-medium">Refinance Appraisal Requirements</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>LTV</strong> = loan amount ÷ home value. When your home appreciates, the denominator grows—so LTV falls. If you bought at 90% LTV
            and paid PMI, appreciation might push you below 80% LTV. A refinance with a new appraisal can eliminate PMI because the new <strong>loan amount</strong>
            (your payoff) divided by the higher value gives a lower LTV.
          </p>
          <p className="text-gray-700 mb-4">
            Lower LTV can also mean better <strong>interest rate</strong> offers and access to equity. <strong>Underwriting</strong> uses the appraised value
            to calculate LTV. Your new <strong>mortgage payment</strong> depends on the rate, term, and principal. <strong>Closing costs</strong> apply.
            Your Loan Estimate (TRID) shows the estimated cost. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Options table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Options When Home Value Increases</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Option</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">When It Applies</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Rate-and-term to remove PMI</td>
                  <td className="px-4 py-3 text-sm text-gray-700">New LTV ≤ 80%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower payment, no PMI</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Rate-and-term for better rate</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower LTV may qualify for better rate</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower mortgage payment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Cash-out refinance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">LTV low enough per program (e.g., ≤80%)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Access equity for improvements, debt</td>
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
            You apply for a refinance. The lender orders an appraisal to establish current value. <strong>Underwriting</strong> calculates your new LTV
            using the appraised value and your payoff balance. If LTV is 80% or below, you may refinance without PMI. If you want cash-out, the
            <strong> loan amount</strong> can exceed the payoff—subject to program LTV limits.
          </p>
          <p className="text-gray-700 mb-4">
            You receive a <strong>Loan Estimate</strong> within 3 business days of application. It shows the new <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Compare to your current loan. At closing, the new loan pays off
            the old one. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is Cash-Out Refinance</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam bought a $350,000 home with 10% down ($35,000). Original <strong>loan amount</strong>: $315,000 (90% LTV). Sam pays PMI. Five years later,
            the home appraises at $420,000. Sam&apos;s balance is about $295,000. New LTV: $295,000 ÷ $420,000 ≈ 70%.
          </p>
          <p className="text-gray-700 mb-4">
            Sam refinances into a new 30-year loan at 6.5%. No PMI. New <strong>mortgage payment</strong> (P&I): about $1,864. Sam was paying roughly
            $2,100 with PMI—so the payment drops. <strong>Closing costs</strong>: ~$5,000. Sam plans to stay 5+ years, so break-even is reasonable.
            This is illustrative. Compare your own numbers. See <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            When your home value rises, your <strong>LTV</strong> falls. That can let you remove PMI, get a better <strong>interest rate</strong>, or
            access equity via cash-out. A new appraisal establishes value. Compare your new <strong>mortgage payment</strong> and{' '}
            <strong>closing costs</strong> to your current loan. Your <strong>Loan Estimate</strong> (TRID) shows the details.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            If you bought with less than 20% down, you likely pay PMI. Appreciation can push your LTV below 80%, making you eligible to refinance
            without PMI. That can lower your <strong>mortgage payment</strong>. Or you might access equity for home improvements or other needs.
          </p>
          <p className="text-gray-700 mb-4">
            Refinancing has <strong>closing costs</strong>. Compare the new <strong>loan amount</strong>, <strong>interest rate</strong>, and payment to
            your current loan. Use your Loan Estimate to estimate break-even. See <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
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
                <li>Remove PMI when LTV drops to 80% or below</li>
                <li>Potentially lower interest rate with better LTV</li>
                <li>Access equity via cash-out for improvements or debt</li>
                <li>Lower mortgage payment (if rate drops and no PMI)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Closing costs can offset savings</li>
                <li>Appraisal may come in lower than expected</li>
                <li>Underwriting and eligibility requirements apply</li>
                <li>Break-even depends on how long you stay</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming your home value without an appraisal:</strong> The lender uses an appraisal for LTV. Zillow or other estimates are not used for underwriting.</li>
            <li><strong>Ignoring closing costs:</strong> Refinancing to remove PMI still has fees. Compare total closing costs to your PMI savings and estimate break-even.</li>
            <li><strong>Not comparing the new mortgage payment to your current one:</strong> Include PMI in your current payment. A refinance may lower the payment even if the rate is similar—by removing PMI.</li>
            <li><strong>Overlooking cash-out LTV limits:</strong> Cash-out programs often cap LTV at 80% or lower. Your equity must support the cash you want. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.</li>
            <li><strong>Refinancing too soon after purchase:</strong> Some programs have waiting periods. See <Link href="/mortgage/refinance-waiting-periods" className="text-primary hover:underline font-medium">Refinance Waiting Periods</Link>.</li>
            <li><strong>Not reviewing the Loan Estimate:</strong> TRID forms show your loan amount, interest rate, mortgage payment, and closing costs. Compare before closing.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance after value increase">
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
            <li>Fannie Mae – Selling Guide (refinance and LTV guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (refinance, appraisal)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Appraisal and LTV requirements vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
