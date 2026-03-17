import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Processing Explained: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Mortgage processing is the stage between application and underwriting. Learn what processors do, how they prepare your file, and what to expect.',
  openGraph: {
    title: 'Mortgage Processing Explained: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage processing and how your application moves to underwriting.',
  },
};

const ARTICLE_SLUG = 'mortgage-processing-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Processing Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-processing-explained';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage processing?',
    answer:
      'Mortgage processing is the stage where a processor collects and organizes your documents, verifies information, orders the appraisal and title, and prepares your file for underwriting. The processor is your main point of contact. Your Loan Estimate (TRID) is provided within 3 days of application—processing continues after that.',
  },
  {
    question: 'What is the difference between processing and underwriting?',
    answer:
      'Processing prepares the file—gathering documents, ordering third-party services, and ensuring the application is complete. Underwriting evaluates the file and decides whether to approve the loan and on what terms. The processor builds the file; the underwriter approves, conditionally approves, or denies.',
  },
  {
    question: 'How long does processing take?',
    answer:
      'Processing typically takes a few days to a couple of weeks, depending on how quickly you provide documents and how busy the lender is. Delays can occur if documents are missing or if the processor needs clarification. Your loan amount, interest rate, and mortgage payment are set in the Loan Estimate—processing does not change them.',
  },
  {
    question: 'What can I do to speed up processing?',
    answer:
      'Respond quickly to document requests, provide complete information the first time, and keep your processor updated if anything changes. Having documents ready before you apply can also help. Avoid major financial changes during processing.',
  },
  {
    question: 'Does processing affect my Loan Estimate or closing costs?',
    answer:
      'No. Your Loan Estimate (provided within 3 business days of application under TRID) sets your interest rate, loan amount, mortgage payment, and closing costs. Processing gathers documents and prepares the file for underwriting. TRID rules limit how much certain costs can increase.',
  },
  {
    question: 'When does the processor order the appraisal?',
    answer:
      'Typically early in processing, after you have a property under contract. The appraisal confirms the property value (affects LTV). Title is also ordered during processing. Both must be complete before the underwriter can make a final decision.',
  },
];

export default function MortgageProcessingExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Processing Explained: A Guide for U.S. Homebuyers',
    description:
      'Mortgage processing prepares your application for underwriting. Learn what processors do and what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Processing Explained: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage processing</strong> is the stage between submitting your application and{' '}
            <strong>underwriting</strong>. A loan processor collects your documents, verifies information, orders the
            appraisal and title, and prepares your file so an underwriter can evaluate it. The processor is often your
            main point of contact during this phase.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (provided within 3 business days of application under TRID) sets your{' '}
            <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong>. Processing happens after you receive the Loan Estimate—it gathers documents
            and prepares the file for underwriting. See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">Mortgage Application Process</Link> and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            After you apply, the lender provides a <strong>Loan Estimate</strong> within 3 business days (TRID). Your
            rate, <strong>loan amount</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> are
            set. Processing then begins: the processor collects pay stubs, bank statements, tax returns, W-2s, and other
            documents. They verify employment and income, order the appraisal (to confirm property value and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>), and
            order the title search. The processor does not approve or deny—they prepare the file for{' '}
            <strong>underwriting</strong>. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.
          </p>
        </section>

        {/* Design object 1: Processing stages table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Processing Stages</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Stage</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Application</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You apply; Loan Estimate within 3 days (TRID)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Document collection</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Processor requests income, assets, ID; you submit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Verification</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employment, income, assets verified</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Third-party orders</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal and title ordered</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">File to underwriting</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Processor sends complete file; underwriter reviews</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Processing typically takes a few days to a couple of weeks. Your rate and payment are set in the Loan Estimate.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The processor collects and organizes your documents: income (pay stubs, W-2s, tax returns), assets (bank
            statements), and identification. They verify employment and income, order the appraisal (to confirm property
            value for <strong>LTV</strong>), and order the title search and title insurance. RESPA governs settlement
            services; the processor coordinates with the title company.
          </p>
          <p className="text-gray-700 mb-4">
            The processor ensures the file is complete before sending it to <strong>underwriting</strong>. They
            communicate with you about document requests and status. Processors do not approve or deny—the underwriter
            evaluates the file and decides. Your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong> were set in the <strong>Loan Estimate</strong>; processing does not change
            them. See{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link>,{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jamie applies on Monday and receives the <strong>Loan Estimate</strong> on Wednesday: 6.5%{' '}
            <strong>interest rate</strong>, $2,100 <strong>mortgage payment</strong> (P&I), $10,200{' '}
            <strong>closing costs</strong>. Processing begins. The processor requests pay stubs, bank statements, W-2s,
            and tax returns. Jamie submits them within 2 days. The processor orders the appraisal and title.
          </p>
          <p className="text-gray-700 mb-4">
            A week later, the appraisal and title are back. The processor verifies employment and sends the complete
            file to underwriting. The underwriter reviews and issues conditional approval. Jamie satisfies conditions,
            and the loan clears to close. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-slate-500 bg-slate-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Key Takeaway</h3>
          <p className="text-slate-800 text-[15px] leading-relaxed">
            The processor collects documents, verifies information, and orders the appraisal and title. They prepare
            your file for <strong>underwriting</strong>—they do not approve or deny. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> are
            set in the <strong>Loan Estimate</strong> (TRID). Respond quickly to document requests to keep processing
            on track.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers may not know what happens after they apply. Processing is the phase where you will
            receive the most document requests. The processor is your main contact—respond promptly to keep the file
            moving. Delays in processing can push your closing date. Your purchase contract may have a closing deadline;
            slow document response can put that at risk.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) sets your terms before processing is complete. Processing
            gathers the documents the underwriter needs to verify those terms. See{' '}
            <Link href="/mortgage/mortgage-loan-timeline" className="text-primary hover:underline font-medium">Mortgage Loan Timeline</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of the Processing Phase</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Processor is your main point of contact</li>
                <li>Clear document requests and status updates</li>
                <li>Loan Estimate already received—terms set</li>
                <li>Structured process with defined steps</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Document requests can be frequent</li>
                <li>Delays if you respond slowly</li>
                <li>Appraisal and title take time</li>
                <li>Processor does not approve—underwriter does</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Delaying document responses:</strong> Each day you wait adds to the timeline. Respond within 24–48 hours when possible. Incomplete files sit in the queue. Your closing date may depend on it.</li>
            <li><strong>Assuming the processor approves the loan:</strong> The processor prepares the file. The underwriter approves, conditionally approves, or denies. Do not assume approval until you receive clear-to-close.</li>
            <li><strong>Making major financial changes during processing:</strong> Large purchases, new credit, or job changes can affect your approval. The underwriter may re-verify. Avoid until after closing.</li>
            <li><strong>Providing incomplete or illegible documents:</strong> Submit complete, legible copies. Redacted or partial documents can cause delays. If you cannot provide something, tell your processor right away.</li>
            <li><strong>Ignoring the processor&apos;s requests:</strong> The processor needs specific items to complete the file. Missing items delay underwriting. Respond to every request, even if it seems redundant.</li>
            <li><strong>Worrying that processing changes your terms:</strong> Your loan amount, interest rate, mortgage payment, and closing costs were set in the Loan Estimate (TRID). Processing gathers verification—it does not change your terms. See <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.</li>
          </ul>
        </section>

        {/* What Processors Do (keep, integrated above) - already in How It Works */}

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about mortgage processing">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage process and timeline</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
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
            Processing procedures vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
