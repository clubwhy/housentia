import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fixed vs Adjustable Rate Mortgage | Housentia',
  description:
    'Compare fixed and adjustable rate mortgages. Learn the pros and cons of each and when to choose one over the other.',
  openGraph: { title: 'Fixed vs Adjustable Rate Mortgage | Housentia', description: 'Compare fixed and ARM mortgages.' },
};

const ARTICLE_SLUG = 'fixed-vs-adjustable-rate-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Fixed vs Adjustable Rate Mortgage' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/fixed-vs-adjustable-rate-mortgage';

const FAQ_ITEMS = [
  {
    question: 'What is the main difference between fixed and adjustable rate?',
    answer:
      'A fixed rate stays the same for the entire loan term; your mortgage payment (principal and interest) is predictable. An ARM has an initial fixed period (e.g., 5, 7, or 10 years), then the rate can adjust based on an index plus a margin. ARMs may start with a lower rate but introduce payment uncertainty.',
  },
  {
    question: 'When is a fixed rate better?',
    answer:
      'Fixed rates are often better when you plan to stay long-term, want payment certainty, or when fixed rates are already low. Your mortgage payment will not change from rate adjustments.',
  },
  {
    question: 'When is an ARM better?',
    answer:
      'ARMs can be better if you plan to sell or refinance before the first adjustment, or expect to move within a few years. The lower initial rate can reduce your mortgage payment and total interest paid short-term.',
  },
  {
    question: 'Are ARM initial rates always lower than fixed?',
    answer:
      'Often yes, but not always. Market conditions vary. Compare the APR and total cost over your expected ownership period using the Loan Estimate.',
  },
  {
    question: 'What are ARM rate caps?',
    answer:
      'ARMs have caps that limit how much the rate can change. Periodic caps limit each adjustment (e.g., 2% per year). Lifetime caps limit the total increase over the loan (e.g., 5% above the initial rate). The Loan Estimate shows these.',
  },
  {
    question: 'Where do I see fixed vs ARM on the Loan Estimate?',
    answer:
      'The Loan Estimate shows whether the loan has a fixed or adjustable rate, the initial interest rate, and for ARMs, the adjustment schedule and caps. Under TRID, this must be disclosed within 3 business days of application.',
  },
];

export default function FixedVsAdjustableRateMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Fixed vs Adjustable Rate Mortgage', description: 'Compare fixed and ARM. Learn when each makes sense.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Fixed vs Adjustable Rate Mortgage" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Fixed vs adjustable rate</strong> is one of the most important choices when selecting a mortgage. A <strong>fixed-rate</strong> loan keeps the same <strong>interest rate</strong> for the entire term—your <strong>mortgage payment</strong> (principal and interest) stays predictable. An <strong>adjustable-rate mortgage (ARM)</strong> has an initial fixed period, then the rate can change based on market conditions. ARMs often start with a lower rate but introduce uncertainty. Your decision depends on how long you plan to keep the loan and your tolerance for payment changes.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), your lender provides a <strong>Loan Estimate</strong> within 3 business days of application. That form shows whether the loan is fixed or adjustable, the <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. For ARMs, it also shows the adjustment schedule and caps. See <Link href="/mortgage/what-is-a-fixed-rate-mortgage" className="text-primary hover:underline font-medium">What Is a Fixed Rate Mortgage</Link>, <Link href="/mortgage/what-is-an-adjustable-rate-mortgage" className="text-primary hover:underline font-medium">What Is an Adjustable Rate Mortgage</Link>, and <Link href="/mortgage/what-is-loan-term" className="text-primary hover:underline font-medium">What Is a Loan Term</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            With a <strong>fixed-rate</strong> mortgage, your <strong>interest rate</strong> never changes. A 30-year fixed at 6.5% stays at 6.5% for the full 30 years. Your <strong>mortgage payment</strong> (principal and interest) is the same every month—though taxes, insurance, and escrow can still change. The <strong>loan amount</strong> and rate determine your payment. See <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> for how your payment is applied.
          </p>
          <p className="text-gray-700 mb-4">
            With an <strong>ARM</strong>, the rate is fixed for an initial period (e.g., 5, 7, or 10 years), then adjusts periodically (e.g., annually). The new rate is typically based on an index (e.g., SOFR, Treasury) plus a margin. ARMs have caps: a periodic cap limits how much the rate can change at each adjustment; a lifetime cap limits the total increase. A 5/1 ARM, for example, is fixed for 5 years, then can adjust once per year. The initial rate is often lower than a 30-year fixed—which can lower your <strong>mortgage payment</strong> during the fixed period.
          </p>
          <p className="text-gray-700">
            Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link> is calculated using your <strong>mortgage payment</strong>. With a fixed rate, that payment is stable. With an ARM, the payment can increase after the initial period—which could affect your budget and ability to refinance. The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> on the Loan Estimate can help you compare, but for ARMs the APR is based on the initial rate and may not reflect future adjustments.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender will <strong>underwrite</strong> your application and offer loan products. You may receive a <strong>Loan Estimate</strong> for a fixed-rate loan, an ARM, or both. The form shows the <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. For an ARM, it also shows the index, margin, adjustment frequency, and caps. The TILA (Truth in Lending Act) requires clear disclosure of these terms. The RESPA (Real Estate Settlement Procedures Act) requires consistent disclosure so you can compare.
          </p>
          <p className="text-gray-700 mb-4">
            For a fixed-rate loan, the rate is locked when you lock your rate. It does not change. For an ARM, the initial rate is locked, but after the fixed period it will adjust. The first adjustment is typically limited by the periodic cap. If rates rise, your <strong>mortgage payment</strong> can increase—sometimes significantly. If rates fall, your payment can decrease. You can refinance to a fixed rate before or after the first adjustment if you qualify.
          </p>
          <p className="text-gray-700 mb-4">
            Common ARM structures: 5/1 (fixed 5 years, then adjusts annually), 7/1 (fixed 7 years), 10/1 (fixed 10 years). The longer the initial period, the more time you have before facing an adjustment. Your <strong>loan amount</strong> and <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link> affect your rate for both fixed and ARM. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and <Link href="/mortgage/apr-vs-interest-rate" className="text-primary hover:underline font-medium">APR vs Interest Rate</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jamie is buying a $400,000 home with 20% down. Their <strong>loan amount</strong> is $320,000. They receive two <strong>Loan Estimates</strong>: a 30-year fixed at 6.5% and a 5/1 ARM at 5.75%. At 6.5% fixed, their <strong>mortgage payment</strong> (P&I) is about $2,022. At 5.75% ARM, it is about $1,868—a savings of $154 per month during the first 5 years.
          </p>
          <p className="text-gray-700 mb-4">
            Over 5 years, Jamie saves about $9,240 in payments. But in year 6, the ARM could adjust. If rates rise 2%, the new rate could be 7.75% (subject to caps)—raising the payment to about $2,292. Jamie plans to stay 7–10 years. If they sell or refinance before year 6, the ARM saves money. If they keep the ARM and rates rise, they could pay more. The example is illustrative—actual rates and adjustments vary.
          </p>
          <p className="text-gray-700">
            The key takeaway: an ARM can save money if you sell or refinance before the first adjustment. A fixed rate offers certainty regardless of how long you stay. Compare the <strong>Loan Estimate</strong> and consider your timeline.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, the choice affects your budget and peace of mind. A fixed rate means your <strong>mortgage payment</strong> (P&I) never changes from rate adjustments—you can plan your budget with certainty. An ARM can lower your initial payment, which can help you qualify for a larger <strong>loan amount</strong> (since DTI is based on your payment). But if the rate adjusts upward, your payment can increase—and if you cannot afford the higher payment, you may face difficulty.
          </p>
          <p className="text-gray-700 mb-4">
            If you expect to move or refinance within 5–7 years, an ARM may make sense. The lower initial rate can save thousands. If you plan to stay long-term or want to avoid risk, a fixed rate is often the safer choice. Use the <strong>Loan Estimate</strong> to compare. TRID was designed to make comparison easier—both fixed and ARM use the same form. Your <strong>closing costs</strong> may be similar; the main difference is the rate structure.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons: Fixed vs Adjustable Rate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fixed Rate</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>Predictable mortgage payment</li>
                <li>No rate increase from market changes</li>
                <li>Easier to budget long-term</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Initial rate often higher than ARM</li>
                <li>May pay more if you sell or refinance soon</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Adjustable Rate (ARM)</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>Lower initial rate and payment</li>
                <li>Can save money if you sell/refinance before adjustment</li>
                <li>Caps limit how high the rate can go</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Payment can increase after initial period</li>
                <li>Uncertainty if you stay long-term</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Choosing an ARM without a plan:</strong> If you take an ARM, have a plan for year 6 (or whenever the first adjustment hits). Will you refinance? Sell? Can you afford a higher payment?</li>
            <li><strong>Ignoring ARM caps:</strong> Caps limit increases but do not prevent them. A 2% periodic cap can still mean a meaningful payment jump.</li>
            <li><strong>Comparing only the initial rate:</strong> The ARM&apos;s initial rate may be lower, but the rate can change. Compare the full picture on the <strong>Loan Estimate</strong>.</li>
            <li><strong>Assuming you will refinance:</strong> Refinancing depends on credit, equity, and rates. Do not assume you can refinance out of an ARM before it adjusts.</li>
            <li><strong>Not reading the Loan Estimate:</strong> The ARM adjustment schedule and caps are on the form. Review them before you commit.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about fixed vs ARM">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Adjustable-Rate Mortgages</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Rates and terms vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
