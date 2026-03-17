import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Pre-Approval Process: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn the mortgage pre-approval process: what documents you need, how long it takes, and how to get a pre-approval letter before house hunting.',
  openGraph: {
    title: 'Mortgage Pre-Approval Process: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the steps to get mortgage pre-approved.',
  },
};

const ARTICLE_SLUG = 'mortgage-pre-approval-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Pre-Approval Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-pre-approval-process';

const FAQ_ITEMS = [
  {
    question: 'How long does pre-approval take?',
    answer:
      'Pre-approval often takes a few days to a week, depending on the lender and how quickly you provide documents. Some lenders offer same-day or next-day pre-approval for straightforward cases. Your interest rate and mortgage payment are not set until you apply and receive a Loan Estimate (TRID).',
  },
  {
    question: 'What documents do I need for pre-approval?',
    answer:
      'Typical documents include pay stubs (2–4 weeks), W-2s (2 years), tax returns (2 years), bank statements (2 months), and a government-issued ID. Self-employed borrowers may need profit-and-loss statements, 1099s, and additional tax documentation. The lender uses these to verify income and DTI.',
  },
  {
    question: 'Does pre-approval affect my credit score?',
    answer:
      'Pre-approval usually involves a hard credit pull, which may have a small, temporary effect on your score. Multiple mortgage inquiries within a short window (e.g., 14–45 days) are often counted as one for scoring. Apply strategically to limit inquiries.',
  },
  {
    question: 'How long is a pre-approval letter valid?',
    answer:
      'Pre-approval letters often expire in 60 to 90 days. If your situation changes or the letter expires, you may need to update or renew. Check with your lender. An expired letter may not satisfy sellers.',
  },
  {
    question: 'When do I get my Loan Estimate and closing costs?',
    answer:
      'After pre-approval, you find a home and apply for the loan. Within 3 business days of application, the lender must provide a Loan Estimate (TRID) with your interest rate, loan amount, mortgage payment, and closing costs. Pre-approval does not include these.',
  },
  {
    question: 'Does pre-approval guarantee final approval?',
    answer:
      'No. Pre-approval is conditional. Final approval depends on the property (appraisal, title), final underwriting review, and no material changes to your financial situation. Avoid major purchases or job changes until after closing.',
  },
];

export default function MortgagePreApprovalProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Pre-Approval Process: A Guide for U.S. Homebuyers',
    description:
      'Learn the mortgage pre-approval process: documents needed, timeline, and how to get a pre-approval letter.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Pre-Approval Process: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>mortgage pre-approval process</strong> is the steps you take to get a lender to verify your
            finances and conditionally approve you for a <strong>loan amount</strong>. A pre-approval letter strengthens
            your offer when house hunting and helps first-time homebuyers know their budget. Your{' '}
            <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> are not
            set until you apply and receive a <strong>Loan Estimate</strong> (TRID).
          </p>
          <p className="text-gray-700 mb-4">
            Pre-approval involves document verification and a credit check—stronger than prequalification, which is
            typically a quick estimate based on self-reported information. See{' '}
            <Link href="/mortgage/mortgage-pre-approval" className="text-primary hover:underline font-medium">Mortgage Pre-Approval</Link> and{' '}
            <Link href="/mortgage/mortgage-pre-approval-vs-pre-qualification" className="text-primary hover:underline font-medium">Pre-Approval vs Pre-Qualification</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            You apply, submit documents (income, assets, ID), and the lender pulls your credit. The lender reviews your{' '}
            <strong>DTI</strong> (debt-to-income), <strong>LTV</strong> (loan-to-value), and credit profile during{' '}
            <strong>underwriting</strong>. If approved, you receive a letter stating the conditional{' '}
            <strong>loan amount</strong>. You then shop for a home and use the letter when making offers.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-approval is not a guarantee. Final approval depends on the property (appraisal, title) and final
            underwriting. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: Process steps table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Pre-Approval Steps</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Step</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What You Do</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">1. Choose lender</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Bank, credit union, online, or broker</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You submit application</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">2. Submit documents</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay stubs, W-2s, tax returns, bank statements, ID</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender pulls credit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">3. Underwriting</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Respond to any requests</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender verifies DTI, LTV, credit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">4. Pre-approval letter</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Use when making offers</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Conditional loan amount; valid 60–90 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">5. Find home → Apply</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Apply for loan</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Loan Estimate (TRID) within 3 days; rate, payment, closing costs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Process varies by lender. Typically takes a few days to a week.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You choose a lender (bank, credit union, online lender, or mortgage broker) and submit an application.
            Typical documents: pay stubs (2–4 weeks), W-2s (2 years), tax returns (2 years), bank statements (2 months),
            and government-issued ID. The lender pulls your credit and verifies your income and assets. Self-employed
            borrowers may need profit-and-loss statements, 1099s, and additional tax documentation. See{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            The lender reviews your <strong>DTI</strong>, <strong>LTV</strong>, and credit during{' '}
            <strong>underwriting</strong>. If approved, you receive a pre-approval letter with the conditional{' '}
            <strong>loan amount</strong>. When you find a home and apply, the lender provides a{' '}
            <strong>Loan Estimate</strong> (TRID) within 3 business days with your <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>,{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Casey applies for pre-approval on Monday. Casey submits pay stubs, bank statements, W-2s, and tax returns
            by Tuesday. The lender pulls credit and verifies income. On Friday, Casey receives a pre-approval letter for
            a <strong>loan amount</strong> of $285,000, valid 90 days.
          </p>
          <p className="text-gray-700 mb-4">
            Casey finds a home 3 weeks later and goes under contract. Casey applies for the loan. Within 3 days, Casey
            receives the <strong>Loan Estimate</strong>: 6.5% <strong>interest rate</strong>, $1,800{' '}
            <strong>mortgage payment</strong> (P&I), $9,500 <strong>closing costs</strong>. Final underwriting approves
            the loan. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-amber-500 bg-amber-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Key Takeaway</h3>
          <p className="text-amber-800 text-[15px] leading-relaxed">
            Gather documents (pay stubs, W-2s, tax returns, bank statements, ID), apply, and respond promptly. Pre-approval
            typically takes a few days to a week. Your <strong>loan amount</strong> is conditional; your{' '}
            <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> come
            when you apply and receive the <strong>Loan Estimate</strong> (TRID). Use the letter when making offers.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers often wonder when to start the pre-approval process. Starting before you shop helps you
            know your price range and shows sellers you are qualified. In competitive markets, offers without
            pre-approval may be passed over. The process also surfaces issues early—if your credit or DTI needs work,
            you can address it before you find a home.
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>Loan Estimate</strong> (TRID) comes after you apply for the actual loan—not at pre-approval.
            That is when you see your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">Mortgage Application Process</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of the Pre-Approval Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Know your budget before house hunting</li>
                <li>Stronger offers—sellers prefer pre-approved buyers</li>
                <li>Identify credit or income issues early</li>
                <li>Faster process—verification already done when you apply</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Hard credit inquiry may slightly affect score</li>
                <li>Letter expires (often 60–90 days)</li>
                <li>Requires gathering and submitting documents</li>
                <li>Rate and closing costs not set until you apply</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Delaying document submission:</strong> Each day you wait adds to the timeline. Gather pay stubs, W-2s, tax returns, and bank statements before applying. Respond promptly to requests.</li>
            <li><strong>Assuming pre-approval locks your rate:</strong> Your interest rate and mortgage payment are not set until you apply and lock. Pre-approval gives you a conditional loan amount only.</li>
            <li><strong>Making major financial changes after pre-approval:</strong> Large purchases, new credit, or job changes can affect your approval. Avoid until after closing. Lenders may re-verify before funding.</li>
            <li><strong>Letting the letter expire:</strong> Letters often expire in 60–90 days. If you have not found a home, ask for an extension. An expired letter may not satisfy sellers or agents.</li>
            <li><strong>Applying with too many lenders at once:</strong> Multiple hard credit pulls can affect your score. Inquiries within a short window (e.g., 14–45 days) for the same purpose may be treated as one, but apply strategically.</li>
            <li><strong>Not including the letter with offers:</strong> When making an offer, include your pre-approval letter to show the seller you are qualified. Some agents require it before showing homes. See <Link href="/mortgage/mortgage-pre-approval" className="text-primary hover:underline font-medium">Mortgage Pre-Approval</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about pre-approval process">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage process and pre-approval</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Pre-approval', href: '/mortgage-glossary/pre-approval' }]}
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
            The pre-approval process varies by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
