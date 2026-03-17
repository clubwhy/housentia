import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Happens After Mortgage Approval? A Guide for U.S. Homebuyers | Housentia',
  description:
    'After conditional mortgage approval, the lender orders an appraisal, may request more documents, and clears you to close. Learn what happens between approval and closing.',
  openGraph: {
    title: 'What Happens After Mortgage Approval? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand what happens after you receive mortgage approval and before closing.',
  },
};

const ARTICLE_SLUG = 'what-happens-after-mortgage-approval';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Happens After Mortgage Approval?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-happens-after-mortgage-approval';

const FAQ_ITEMS = [
  {
    question: 'What happens right after conditional approval?',
    answer:
      'The lender typically orders the appraisal (if not already done) and may request additional documents to satisfy conditions. You should respond to any requests promptly. Title work is also completed. See Mortgage Conditional Approval Explained and Mortgage Approval Process.',
  },
  {
    question: 'How long between approval and closing?',
    answer:
      'It varies. Once you receive conditional approval, satisfying conditions often takes a few days to two weeks. After clear to close, you receive the Closing Disclosure (TRID) and close within a few days to a week. Your Loan Estimate shows the loan amount, interest rate, and closing costs; the Closing Disclosure confirms the final terms.',
  },
  {
    question: 'Can anything derail my approval before closing?',
    answer:
      'Yes. A low appraisal, title issues, changes to your financial situation, or new credit activity can affect approval. Avoid major purchases, new credit, job changes, and large unexplained deposits. See What Is DTI and What Is LTV for how these affect your loan.',
  },
  {
    question: 'When do I get the Closing Disclosure?',
    answer:
      'You must receive the Closing Disclosure at least 3 business days before closing under TRID. It shows the final loan terms, mortgage payment, and closing costs. Review it and compare to your Loan Estimate. See What Is Closing Disclosure.',
  },
  {
    question: 'What if the appraisal comes in low?',
    answer:
      'If the appraisal is below the purchase price, the lender may limit the loan amount based on the appraised value. You may need to bring more cash to close, renegotiate with the seller, or walk away (subject to your contract). Your Loan Estimate and interest rate may change if the loan structure changes.',
  },
];

export default function WhatHappensAfterMortgageApprovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Happens After Mortgage Approval? A Guide for U.S. Homebuyers',
    description:
      'After conditional approval, the lender completes the appraisal, satisfies conditions, and clears you to close. Learn what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Happens After Mortgage Approval? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            After you receive <strong>conditional mortgage approval</strong>, several steps remain before closing. The lender works to satisfy conditions—appraisal, title, additional documents—and then clears you to close. Understanding what happens in this phase helps you stay on track and avoid delays.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days of application. It shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. After conditional approval, the lender verifies the information and prepares the <strong>Closing Disclosure</strong>, which you must receive at least 3 business days before closing. See{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is Loan Estimate</Link>,{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Is Closing Costs</Link>, and{' '}
            <Link href="/mortgage/mortgage-conditional-approval-explained" className="text-primary hover:underline font-medium">Mortgage Conditional Approval Explained</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            &quot;What happens after mortgage approval&quot; refers to the period between conditional approval and the closing table. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are typically set at this stage—but they are not final until you close. The lender must verify the property value (appraisal), clear title, and any remaining documentation before issuing <strong>clear to close</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            During <strong>underwriting</strong>, the lender evaluated your application. Conditional approval means you meet the lender&apos;s guidelines subject to certain conditions. Satisfying those conditions moves you toward closing. A low appraisal or change in your finances can affect your approval. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The lender orders an appraisal to verify the property&apos;s value. The appraiser visits the property and produces a report. If the appraisal comes in at or above the purchase price (or supports the <strong>loan amount</strong>), you are typically fine. If it comes in low, the lender may limit the loan based on the appraised value, and you may need to renegotiate with the seller or bring more cash to close.
          </p>
          <p className="text-gray-700 mb-4">
            Conditional approval comes with a list of conditions. Common ones include: appraisal satisfactory to the lender, title search and insurance clear, additional documentation (e.g., letter of explanation, updated bank statement), and verification of employment. Provide requested documents as soon as possible. Delays can push back your closing date.
          </p>
          <p className="text-gray-700 mb-4">
            Once all conditions are satisfied, the lender issues <strong>clear to close</strong>. The lender prepares the Closing Disclosure and sends it to you at least 3 business days before closing. Review it carefully and compare it to your Loan Estimate. At closing, you sign the loan and purchase documents, the lender funds the loan, and you receive the keys (for a purchase). See{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link>,{' '}
            <Link href="/mortgage/mortgage-final-approval-explained" className="text-primary hover:underline font-medium">Mortgage Final Approval Explained</Link>, and{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        {/* Design object 1: Conditions table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Conditions After Approval</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Condition</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal satisfactory</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Property value supports the loan amount; no issues noted</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Title clear</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No liens or ownership disputes; title insurance can be issued</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Documentation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Letter of explanation, updated bank statement, source of funds</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Verification of employment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender confirms you are still employed as stated</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Conditions vary by lender and transaction. Respond promptly to avoid closing delays.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam receives conditional approval for a $280,000 purchase with a conventional loan. The <strong>loan amount</strong> is $266,000 (5% down), <strong>interest rate</strong> 6.5%, and <strong>mortgage payment</strong> about $1,682 (P&I + PMI). The lender&apos;s conditions include: appraisal satisfactory, title clear, and an updated bank statement to show the source of a recent deposit.
          </p>
          <p className="text-gray-700 mb-4">
            Sam provides the bank statement within two days. The appraisal comes back at $282,000—above the purchase price—so the condition is satisfied. Title clears. Within 10 days of conditional approval, the lender issues clear to close. Sam receives the Closing Disclosure and closes five days later. Sam brings a government-issued ID and a cashier&apos;s check for closing costs. This is illustrative. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and{' '}
            <Link href="/mortgage/what-happens-after-closing" className="text-primary hover:underline font-medium">What Happens After Closing</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            After conditional approval, the lender satisfies conditions (appraisal, title, documents), issues clear to close, and sends the Closing Disclosure (TRID) at least 3 days before closing. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are typically set—but avoid major purchases, new credit, or job changes until you close. See{' '}
            <Link href="/mortgage/mortgage-conditional-approval-explained" className="text-teal-700 underline font-medium">Mortgage Conditional Approval Explained</Link>.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Knowing what happens after approval helps you plan. You will need to respond quickly to document requests, understand the appraisal, and avoid changes that could affect your approval. A low appraisal can require renegotiation or more cash at closing. Delays in providing documents can push back your closing date and risk the sale.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> shows your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. The Closing Disclosure confirms the final terms. Compare them before closing. If something changes (e.g., appraisal affects LTV), the lender may issue a revised estimate. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/steps-to-buy-a-house-with-a-mortgage" className="text-primary hover:underline font-medium">Steps to Buy a House with a Mortgage</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Understanding the Process</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You know what to expect and when to act</li>
                <li>You can respond quickly to document requests</li>
                <li>You understand why the appraisal and title matter</li>
                <li>You avoid actions that could derail approval</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What Can Go Wrong</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Low appraisal limits loan amount or kills the deal</li>
                <li>Title issues delay or block closing</li>
                <li>New credit or job change affects approval</li>
                <li>Slow document response pushes back closing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Making major purchases or opening new credit:</strong> New debt can affect your DTI and credit. Lenders may do a final verification before closing. Avoid car loans, furniture financing, or new credit cards until after closing.</li>
            <li><strong>Changing jobs:</strong> Employment verification is often a condition. A job change can delay or derail approval. If you must change jobs, inform your lender.</li>
            <li><strong>Large, unexplained bank deposits:</strong> Lenders want to verify the source of funds. Large deposits may require a letter of explanation or documentation. Avoid depositing cash or receiving gifts without proper documentation.</li>
            <li><strong>Missing payments on existing debts:</strong> Late payments can hurt your credit and affect approval. Stay current on all bills.</li>
            <li><strong>Ignoring the Closing Disclosure:</strong> Review it and compare to your Loan Estimate. Under TRID, you receive it at least 3 business days before closing. Verify your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">What Is Closing Disclosure</Link>.</li>
            <li><strong>Delaying document responses:</strong> Provide requested documents as soon as possible. Delays can push back your closing date and frustrate the seller. See <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link>.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">At Closing</h2>
          <p className="text-gray-700 mb-4">
            At closing, you sign the loan and purchase documents, the lender funds the loan, and you receive the keys (for a purchase). Bring a government-issued ID and funds for closing if required. Your <strong>Closing Disclosure</strong> shows the final <strong>closing costs</strong>. After closing, your loan is boarded with the servicer and you set up your <strong>mortgage payment</strong>. See{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link> and{' '}
            <Link href="/mortgage/what-happens-after-closing" className="text-primary hover:underline font-medium">What Happens After Closing</Link>.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about what happens after approval">
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Owning a home</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – Buying a home</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' }]}
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
            The process varies by lender and transaction.
          </p>
        </section>
      </main>
    </div>
  );
}
