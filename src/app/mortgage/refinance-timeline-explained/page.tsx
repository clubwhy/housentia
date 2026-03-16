import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Timeline Explained | Housentia',
  description:
    'A typical refinance takes 30–45 days. Learn the timeline: application, underwriting, appraisal, and closing.',
  openGraph: { title: 'Refinance Timeline Explained | Housentia', description: 'Understand the refinance timeline.' },
};

const ARTICLE_SLUG = 'refinance-timeline-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Timeline Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-timeline-explained';

const FAQ_ITEMS = [
  { question: 'How long does a refinance take?', answer: 'Typically 30–45 days from application to closing for a standard refinance. Streamline programs (FHA, VA) may be faster—sometimes 2–3 weeks—because they often skip full underwriting and appraisal.' },
  { question: 'What are the main steps in a refinance?', answer: 'Apply, receive a Loan Estimate within 3 business days (per TRID), lock your interest rate, submit documents, complete underwriting, appraisal (if required), clear conditions, schedule closing, sign documents, and receive funding.' },
  { question: 'What can delay a refinance?', answer: 'Missing documents, appraisal issues, title problems, high lender volume, or slow responses to condition requests. Responding quickly to lender requests can help avoid delays.' },
  { question: 'Can streamline refinances be faster?', answer: 'Yes. FHA streamline and VA IRRRL often skip full underwriting and appraisal, which can shorten the timeline significantly—sometimes to 2–3 weeks.' },
  { question: 'When does my new payment start after refinancing?', answer: 'Your first payment on the new loan is typically due the month after closing. Your old loan is paid off at closing, so you may have a short period with no payment or a prorated amount.' },
  { question: 'Does the refinance timeline affect my rate lock?', answer: 'Yes. Rate locks typically last 30–60 days. If your refinance runs longer than the lock period, you may need to extend the lock (sometimes for a fee) or lock again at the current rate.' },
];

export default function RefinanceTimelineExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Timeline Explained', description: 'Learn the typical refinance timeline and what affects it.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Timeline Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When you refinance your mortgage, you replace your existing loan with a new one—often to secure a lower <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">interest rate</Link>, change your loan term, or access home equity. Understanding the refinance timeline helps you plan when to start, what to expect, and how long the process typically takes from application to funding.
          </p>
          <p className="text-gray-700 mb-4">
            A standard refinance usually takes 30–45 days from the day you apply to the day your new loan funds. Streamline programs such as FHA streamline and VA IRRRL can be faster—sometimes 2–3 weeks—because they often skip full <strong>underwriting</strong> and appraisal. This guide walks you through the typical refinance timeline, what each phase involves, and what can speed up or slow down the process.
          </p>
          <p className="text-gray-700">
            The U.S. mortgage process is governed by federal rules including the Truth in Lending Act (TILA), the Real Estate Settlement Procedures Act (RESPA), and TRID (TILA-RESPA Integrated Disclosure). These require lenders to provide a <strong>Loan Estimate</strong> within 3 business days of application and a Closing Disclosure at least 3 business days before closing. Understanding these milestones can help you track where you are in the refinance timeline.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            The <strong>refinance timeline</strong> is the period from when you submit your application until your new loan pays off the old one and you begin making payments on the new mortgage. During this time, the lender verifies your income, assets, credit, and the property value. You receive disclosures, lock your rate, and eventually sign closing documents.
          </p>
          <p className="text-gray-700 mb-4">
            A 30–45 day timeline is typical for conventional and many government-backed refinances. That does not mean every refinance finishes in exactly 30 days. Some close sooner; others take longer due to document requests, appraisal scheduling, title work, or lender volume. Knowing the general flow helps you set realistic expectations and avoid last-minute surprises—for example, if you are counting on a lower payment by a certain date.
          </p>
          <p className="text-gray-700">
            The timeline also affects your <Link href="/mortgage/what-is-rate-lock" className="text-primary hover:underline font-medium">rate lock</Link>. Most lenders lock your <strong>interest rate</strong> for 30–60 days. If your refinance runs longer than the lock period, you may need to extend the lock (sometimes for a fee) or re-lock at the current market rate. Planning ahead and responding quickly to document requests can help you stay within your lock window.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The refinance process follows a series of steps. Here is a typical sequence and what happens at each stage.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Application (Day 1):</strong> You submit your application and the lender pulls your credit. Within 3 business days, you should receive a Loan Estimate showing the estimated <strong>loan amount</strong>, rate, <strong>closing costs</strong>, and monthly payment.</li>
            <li><strong>Rate lock:</strong> You lock your rate to protect against market changes. Lock terms vary; 30–45 days is common.</li>
            <li><strong>Document submission:</strong> You provide pay stubs, tax returns, bank statements, and other items the lender requests. The sooner you respond, the faster underwriting can proceed.</li>
            <li><strong>Underwriting:</strong> The lender reviews your file, verifies income and assets, and may issue conditions (additional documents or explanations).</li>
            <li><strong>Appraisal (if required):</strong> For most non-streamline refinances, an appraiser visits the property to confirm value. This can add several days to the timeline.</li>
            <li><strong>Clear to close:</strong> Once all conditions are satisfied, the lender approves the loan and prepares closing documents.</li>
            <li><strong>Closing:</strong> You sign the Closing Disclosure and other documents. Under TRID, you must receive the Closing Disclosure at least 3 business days before closing.</li>
            <li><strong>Funding:</strong> The lender wires funds to pay off your old loan. Your new <strong>mortgage payment</strong> typically begins the following month.</li>
          </ul>
          <p className="text-gray-700">
            Streamline refinances (FHA streamline, VA IRRRL) often skip full income verification and appraisal, which shortens the timeline. See <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link> and <Link href="/mortgage/how-mortgage-refinancing-works" className="text-primary hover:underline font-medium">How Mortgage Refinancing Works</Link> for more detail.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Maria applies for a rate-and-term refinance on March 1. She wants to lower her <strong>interest rate</strong> from 7% to 6.25% on her $300,000 balance. Her lender sends a Loan Estimate by March 4. She locks her rate for 45 days on March 5.
          </p>
          <p className="text-gray-700 mb-4">
            Maria submits her pay stubs, W-2s, and bank statements by March 8. Underwriting requests a letter explaining a recent deposit; she provides it by March 12. The appraisal is ordered on March 10 and completed on March 18. The appraisal comes in at value, and underwriting clears conditions by March 22.
          </p>
          <p className="text-gray-700 mb-4">
            The lender sends the Closing Disclosure on March 25. Maria receives it and the three-day waiting period runs. She signs on April 2, and the loan funds on April 3. Her old loan is paid off, and her first payment on the new loan is due May 1. Total timeline: about 33 days from application to funding.
          </p>
          <p className="text-gray-700">
            This example illustrates a smooth refinance. Delays can occur if documents are missing, the appraisal is delayed, or the lender has high volume. Maria&apos;s quick response to the condition request helped keep the timeline on track.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If you are considering a refinance—whether you bought your home recently or years ago—understanding the timeline helps you plan. You may want to refinance before a rate lock expires, before an adjustable rate resets, or to lower your payment before a major expense. Knowing that a typical refinance takes 30–45 days (or less for streamline programs) helps you decide when to start.
          </p>
          <p className="text-gray-700 mb-4">
            The timeline also affects your <strong>closing costs</strong>. Some costs are incurred during the process (appraisal, credit report, etc.). If you refinance again soon after, you may pay these costs twice. Calculating your <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">refinance break-even point</Link>—how long it takes for monthly savings to offset <strong>closing costs</strong>—can help you decide if refinancing makes sense for your situation.
          </p>
          <p className="text-gray-700">
            First-time homebuyers who later refinance will go through a similar process to their purchase: application, disclosures, underwriting, and closing. The main difference is that you are replacing an existing loan rather than financing a new purchase. The regulatory framework (TILA, RESPA, TRID) applies in both cases.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Refinance Timelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Predictable sequence: application → underwriting → closing</li>
                <li>TRID gives you a Loan Estimate and Closing Disclosure with standardized cost information</li>
                <li>Streamline programs can close in 2–3 weeks with less paperwork</li>
                <li>Rate locks protect you from rate increases during the process</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>30–45 days can feel long if you need a lower payment quickly</li>
                <li>Rate lock extensions may cost extra if the process runs long</li>
                <li>Appraisal and title work can introduce delays</li>
                <li>High lender volume can slow processing times</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Starting too late:</strong> If you need to close by a certain date (e.g., before an ARM reset), start the refinance early. A 30–45 day buffer is often wise.</li>
            <li><strong>Delaying document responses:</strong> Each day you wait to provide requested documents adds to the timeline. Respond as soon as you can.</li>
            <li><strong>Ignoring the rate lock:</strong> Know when your lock expires. If you are close to the deadline, ask your lender about extension options.</li>
            <li><strong>Making big financial changes during the process:</strong> Avoid large new debts, job changes, or big withdrawals from accounts. Lenders may re-verify and that can delay or complicate approval.</li>
            <li><strong>Assuming streamline is always faster:</strong> Streamline programs can be quicker, but lender volume and document requirements still affect the timeline.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance timeline">
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
            <li>Consumer Financial Protection Bureau (CFPB) – TILA-RESPA Integrated Disclosure (TRID) rules</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA streamline refinance guidelines</li>
            <li>U.S. Department of Veterans Affairs (VA) – VA IRRRL program information</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Timelines vary by lender and loan type.</p>
        </section>
      </main>
    </div>
  );
}
