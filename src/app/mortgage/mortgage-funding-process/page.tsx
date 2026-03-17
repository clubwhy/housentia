import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Funding Process: What Happens After You Sign | Housentia',
  description:
    'Mortgage funding is when the lender sends the loan proceeds to the closing agent. Learn how the funding process works and when you get the keys.',
  openGraph: {
    title: 'Mortgage Funding Process: What Happens After You Sign | Housentia',
    description: 'Understand the mortgage funding process and when the loan is funded.',
  },
};

const ARTICLE_SLUG = 'mortgage-funding-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Funding Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-funding-process';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage funding?',
    answer:
      'Mortgage funding is when the lender sends the loan proceeds to the closing agent (title company or attorney). The funds pay the seller (purchase), pay off the old loan (refinance), and cover closing costs. Your loan amount, interest rate, and mortgage payment were set at closing—funding is when the lender actually sends the money.',
  },
  {
    question: 'When does funding happen?',
    answer:
      'Funding typically happens after you sign the loan documents. In some cases it is the same day; in others, the next business day. The exact timing depends on the lender and state. You receive the keys (for a purchase) once funding and recording are complete.',
  },
  {
    question: 'What is recording?',
    answer:
      'Recording is when the deed and mortgage (or deed of trust) are filed with the county recorder. This makes the transfer of ownership and the lender\'s lien official. Recording usually happens on or shortly after the funding date.',
  },
  {
    question: 'When do I get the keys?',
    answer:
      'For a purchase, you typically receive the keys after the loan is funded and the deed is recorded. In some states this is the same day as signing; in others, the next business day. Your closing agent will tell you.',
  },
  {
    question: 'Does funding affect my Loan Estimate or mortgage payment?',
    answer:
      'No. Funding is when the lender sends the money—it does not change your loan amount, interest rate, closing costs, or mortgage payment. Those terms were set in your Loan Estimate and Closing Disclosure before closing. Funding executes the loan.',
  },
  {
    question: 'When is my first mortgage payment due?',
    answer:
      'Your first mortgage payment is typically due about a month after closing. The Closing Disclosure shows the due date. Prepaid interest (from closing to first payment) is often collected at closing. See our guides on What Is Amortization and What Is Mortgage Principal.',
  },
];

export default function MortgageFundingProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Funding Process: What Happens After You Sign',
    description:
      'Mortgage funding is when the lender sends the loan proceeds. Learn how it works and when you get the keys.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Funding Process: What Happens After You Sign" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage funding</strong> is when the lender sends the <strong>loan amount</strong> to the closing
            agent. For a purchase, the funds pay the seller and cover <strong>closing costs</strong>. For a refinance,
            they pay off the old loan. You receive the keys (for a purchase) once funding and recording are complete.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and terms were set in your{' '}
            <strong>Loan Estimate</strong> and Closing Disclosure before closing. Funding is when the lender actually
            wires the money. TILA and RESPA (via TRID) govern the disclosures you received; funding executes the
            transaction. See{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link> and{' '}
            <Link href="/mortgage/what-happens-at-closing" className="text-primary hover:underline font-medium">What Happens at Closing</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            At closing, you sign the promissory note (your promise to repay the <strong>loan amount</strong>) and the
            mortgage or deed of trust (securing the loan with the property). You pay your cash to close (down payment
            plus <strong>closing costs</strong> minus credits). The closing agent sends the signed documents to the
            lender. The lender reviews and wires the loan proceeds to the closing agent.
          </p>
          <p className="text-gray-700 mb-4">
            The closing agent disburses funds—paying the seller, old lender (if refinance), and fees. The deed and
            mortgage are recorded with the county. For a purchase, you receive the keys. Your first{' '}
            <strong>mortgage payment</strong> is typically due about a month later. See{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 1: Funding sequence table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Funding Sequence</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Step</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">1. Signing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You sign loan documents at closing; pay cash to close</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">2. Documents to lender</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing agent sends signed docs to lender</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">3. Funding</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender wires loan proceeds to closing agent</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">4. Disbursement</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Agent pays seller, old lender, fees</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">5. Recording</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Deed and mortgage filed with county</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">6. Keys (purchase)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You receive keys after funding and recording</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Timing varies by lender and state. Same day or next business day.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After you sign, the closing agent sends the signed promissory note, mortgage or deed of trust, and Closing
            Disclosure to the lender. The lender reviews and wires the <strong>loan amount</strong> to the closing
            agent&apos;s escrow account. The agent disburses funds according to the settlement statement—paying the
            seller, title company, and other parties. Your <strong>closing costs</strong> were disclosed on the Closing
            Disclosure under TRID.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Recording</strong> is when the deed (transfer of ownership) and mortgage (lender&apos;s lien) are
            filed with the county recorder. This makes the transaction official. Recording typically happens on or
            shortly after the funding date. For a purchase, you receive the keys once funding and recording are
            complete. In some states this is the same day; in others, the next business day. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/mortgage-final-approval-explained" className="text-primary hover:underline font-medium">Mortgage Final Approval Explained</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor closes on a $310,000 purchase at 10 a.m. on Friday. Taylor signs the documents and wires $75,000
            (down payment plus <strong>closing costs</strong>). The closing agent sends the signed docs to the lender.
            The lender reviews and wires the <strong>loan amount</strong> ($310,000) by 2 p.m. The agent disburses
            funds and records the deed and mortgage by Friday afternoon.
          </p>
          <p className="text-gray-700 mb-4">
            Taylor receives the keys the same day. The first <strong>mortgage payment</strong> is due in about a month.
            The <strong>interest rate</strong> and payment were set in the <strong>Loan Estimate</strong> and Closing
            Disclosure. The example is illustrative; timing varies by lender and state. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 2: Keys callout */}
        <div className="mb-10 rounded-xl border-l-4 border-slate-600 bg-slate-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">When You Get the Keys</h3>
          <p className="text-slate-800 text-[15px] leading-relaxed">
            For a purchase, you receive the keys after the loan is funded and the deed is recorded. In some states this
            happens the same day as signing; in others (e.g., some states with escrow), it may be the next business day.
            For a refinance, there are no keys—you already own the home. Your closing agent will confirm the timing.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding that funding happens after signing helps you know when you can move in. First-time buyers may
            expect keys immediately at the signing table—in some states you get them the same day; in others, the next
            business day. Your closing agent will explain the process for your transaction.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are
            set before funding. Funding executes the transaction. The Closing Disclosure (provided under TRID at least 3
            days before closing) shows your final terms. See{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of the Funding Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Structured sequence ensures funds are used correctly</li>
                <li>Recording protects lender and borrower</li>
                <li>Same-day funding in many states</li>
                <li>Closing agent coordinates the process</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Timing varies by lender and state</li>
                <li>Keys may be next business day in some states</li>
                <li>Wire fraud risk—verify instructions by phone</li>
                <li>Funding can be delayed if docs have issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Expecting keys immediately at signing:</strong> In some states you receive keys the same day; in others, the next business day. Ask your closing agent when to expect them.</li>
            <li><strong>Wiring funds without verifying:</strong> Wire fraud is a risk. Confirm wire instructions by calling a known number—never rely solely on email.</li>
            <li><strong>Assuming funding changes your terms:</strong> Funding does not change your <strong>loan amount</strong>, <strong>interest rate</strong>, or <strong>mortgage payment</strong>. Those were set in your <strong>Loan Estimate</strong> and Closing Disclosure.</li>
            <li><strong>Not planning for first payment:</strong> Your first <strong>mortgage payment</strong> is typically due about a month after closing. The Closing Disclosure shows the due date. Budget accordingly.</li>
            <li><strong>Ignoring the recording step:</strong> Recording makes the transfer official. You cannot receive keys (for a purchase) until the deed is recorded. The closing agent handles this.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about mortgage funding">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage closing and settlement</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
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
            Funding procedures vary by lender and state.
          </p>
        </section>
      </main>
    </div>
  );
}
