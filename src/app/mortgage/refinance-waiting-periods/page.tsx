import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Waiting Periods | Housentia',
  description:
    'Refinance waiting periods vary by program. Learn about FHA, VA, and conventional refinance seasoning requirements.',
  openGraph: { title: 'Refinance Waiting Periods | Housentia', description: 'Understand refinance waiting periods.' },
};

const ARTICLE_SLUG = 'refinance-waiting-periods';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Waiting Periods' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-waiting-periods';

const FAQ_ITEMS = [
  {
    question: 'What are refinance waiting periods?',
    answer:
      'Waiting periods (seasoning) are rules that require you to have had your current loan for a certain time before refinancing. They vary by program and loan type. If you refinance too soon, you may not qualify. Your lender can confirm the exact requirements for your situation.',
  },
  {
    question: 'What is the FHA streamline waiting period?',
    answer:
      'FHA streamline typically requires at least 6 months of payments and 210 days from the original closing date. You must have made on-time payments. Some lenders may have additional requirements. See FHA Streamline Refinance.',
  },
  {
    question: 'What is the VA IRRRL waiting period?',
    answer:
      'VA IRRRL typically requires at least 6 months of payments on the current VA loan. You must have made on-time payments. Check current VA guidelines for exact seasoning requirements. See VA IRRRL Refinance.',
  },
  {
    question: 'Are there conventional waiting periods?',
    answer:
      'Conventional loans may have waiting periods for rate-and-term refinance (e.g., 6 months) or cash-out (e.g., 6–12 months from purchase or last refinance). Fannie Mae and Freddie Mac investor guidelines vary. Your lender confirms the rules for your loan.',
  },
  {
    question: 'How does TRID apply when I am within the waiting period?',
    answer:
      'TRID (TILA-RESPA Integrated Disclosure) applies when you apply for a refinance. If you apply before the waiting period ends, the lender may not be able to process the loan until seasoning is met. Your Loan Estimate would be issued after a valid application when eligible.',
  },
  {
    question: 'What if I just refinanced and rates dropped again?',
    answer:
      "You may need to wait for the seasoning period before refinancing again. Check your program's waiting period. If you refinanced recently, you may not qualify for another refinance for 6–12 months depending on the program. See Refinance After Interest Rates Drop.",
  },
];

export default function RefinanceWaitingPeriodsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Waiting Periods', description: 'Learn about refinance waiting periods and seasoning requirements.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Waiting Periods" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Refinance waiting periods</strong> (also called seasoning) are rules that require you to have had your current loan for a certain time before
            you can refinance. They exist to prevent rapid refinancing and ensure payment history. If you refinance too soon after purchase or a prior refinance,
            you may not qualify. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> on the new loan depend
            on your eligibility—but first you must meet the waiting period.
          </p>
          <p className="text-gray-700 mb-4">
            FHA, VA, and conventional programs have different seasoning rules. Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act),
            and TRID (TILA-RESPA Integrated Disclosure), a refinance triggers a <strong>Loan Estimate</strong> and Closing Disclosure—but the lender will not
            process a refinance that violates program waiting periods. See <Link href="/mortgage/fha-streamline-refinance" className="text-primary hover:underline font-medium">FHA Streamline Refinance</Link>,{' '}
            <Link href="/mortgage/va-irrrl-refinance" className="text-primary hover:underline font-medium">VA IRRRL Refinance</Link>, and{' '}
            <Link href="/mortgage/refinance-after-interest-rates-drop" className="text-primary hover:underline font-medium">Refinance After Interest Rates Drop</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Seasoning</strong> means the loan has been in place long enough. Lenders and investors (Fannie Mae, Freddie Mac, FHA, VA) set minimum periods
            from the original closing or last refinance. If you bought or refinanced 3 months ago, you may not yet qualify for another refinance. <strong>Underwriting</strong> will
            check the loan history date.
          </p>
          <p className="text-gray-700 mb-4">
            Waiting periods affect when you can apply—not your <strong>loan amount</strong>, <strong>interest rate</strong>, or <strong>closing costs</strong> once
            you qualify. Your <strong>Loan Estimate</strong> (TRID) shows the terms when you have a valid application. If you are within the waiting period, the
            lender may not accept the application or may delay processing. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Waiting periods table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Refinance Waiting Periods</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Program</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Waiting Period</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">FHA streamline</td>
                  <td className="px-4 py-3 text-sm text-gray-700">6 months / 210 days</td>
                  <td className="px-4 py-3 text-sm text-gray-700">From original closing; on-time payments</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">VA IRRRL</td>
                  <td className="px-4 py-3 text-sm text-gray-700">6 months</td>
                  <td className="px-4 py-3 text-sm text-gray-700">On-time payments on current VA loan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional rate-and-term</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often 6 months</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Investor guidelines vary</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional cash-out</td>
                  <td className="px-4 py-3 text-sm text-gray-700">6–12 months</td>
                  <td className="px-4 py-3 text-sm text-gray-700">From purchase or last refinance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender and investor. Confirm with your lender before applying.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply for a refinance, the lender checks the date of your current loan&apos;s closing. If that date is within the program&apos;s waiting period,
            the lender may not process the refinance until seasoning is met. <strong>Underwriting</strong> verifies the loan history. Your <strong>Loan Estimate</strong> (TRID)
            is issued when you have a valid application—but validity can depend on meeting program rules, including seasoning.
          </p>
          <p className="text-gray-700 mb-4">
            Once you meet the waiting period, you can apply. You receive a <strong>Loan Estimate</strong> within 3 business days. It shows your new <strong>loan amount</strong>,
            <strong> interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Plan ahead: if rates drop soon after you close, you
            may need to wait before refinancing again. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan closed on an FHA loan on January 15. By March, rates have dropped and Jordan wants to do an FHA streamline refinance. The FHA streamline
            typically requires 210 days from closing—about 7 months. Jordan has only had the loan for about 2.5 months. Jordan does not yet meet the waiting period.
          </p>
          <p className="text-gray-700 mb-4">
            Jordan waits until August (210+ days from January 15). Jordan applies for the streamline refinance. The lender verifies the loan history and on-time
            payments. Jordan receives a <strong>Loan Estimate</strong> with the new <strong>interest rate</strong> and <strong>mortgage payment</strong>. The refinance
            closes in September. This is illustrative. See <Link href="/mortgage/refinance-timeline-explained" className="text-primary hover:underline font-medium">Refinance Timeline Explained</Link> and{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Refinance waiting periods</strong> (seasoning) require you to have had your loan for a certain time before refinancing. FHA streamline: typically
            6 months / 210 days. VA IRRRL: typically 6 months. Conventional: often 6–12 months depending on rate-and-term vs cash-out. Confirm with your lender.
            Your <strong>Loan Estimate</strong> (TRID) shows terms when you have a valid application.
          </p>
        </div>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            If <strong>interest rates</strong> drop soon after you buy or refinance, you may want to refinance again. But waiting periods can block that. Knowing
            the rules helps you plan. If you are 2 months into an FHA loan, you likely need to wait several more months before a streamline refinance. If you
            refinanced 4 months ago and rates dropped again, you may need to wait before another refinance.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> and <strong>closing costs</strong> apply when you have a valid application. Factor the waiting period into your
            timing. See <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
            <Link href="/mortgage/when-to-refinance-a-mortgage" className="text-primary hover:underline font-medium">When to Refinance a Mortgage</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Waiting Periods</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Help prevent rapid refinancing</li>
                <li>Ensure payment history before refinance</li>
                <li>Program-specific; streamline may have shorter periods</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>May delay refinance when rates drop</li>
                <li>Rules vary by lender and investor</li>
                <li>Must confirm exact requirements before applying</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Applying before the waiting period ends:</strong> The lender may not process the refinance. Confirm the seasoning requirement for your program before applying.</li>
            <li><strong>Assuming all programs have the same rules:</strong> FHA, VA, and conventional have different waiting periods. Rate-and-term and cash-out may differ. See <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is Cash-Out Refinance</Link>.</li>
            <li><strong>Not counting from the correct date:</strong> Waiting periods typically run from the original closing date or the date of the last refinance—not the application date.</li>
            <li><strong>Ignoring payment history:</strong> Streamline programs often require on-time payments. Late payments can affect eligibility even if you meet the time requirement.</li>
            <li><strong>Assuming your lender has the same rules as another:</strong> Investor requirements can vary. Your lender confirms the rules for your specific loan. See <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan</Link>.</li>
            <li><strong>Not planning for rate lock:</strong> If you need to wait for seasoning, your rate lock (if you have one) may expire. Plan your application timing. See <Link href="/mortgage/what-is-rate-lock" className="text-primary hover:underline font-medium">What Is Rate Lock</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance waiting periods">
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
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA streamline refinance guidelines</li>
            <li>U.S. Department of Veterans Affairs (VA) – VA IRRRL program and seasoning</li>
            <li>Fannie Mae – Selling Guide (refinance seasoning requirements)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (refinance)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Waiting period rules vary by program and lender.</p>
        </section>
      </main>
    </div>
  );
}
