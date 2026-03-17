import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Approval Process: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn how mortgage approval works: conditional approval, final approval, and clear to close. Understand what lenders evaluate and what happens at each stage.',
  openGraph: {
    title: 'Mortgage Approval Process: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the mortgage approval process from conditional to final approval.',
  },
};

const ARTICLE_SLUG = 'mortgage-approval-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Approval Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-approval-process';

const FAQ_ITEMS = [
  {
    question: 'What is conditional approval?',
    answer:
      'Conditional approval means the lender has approved you subject to certain conditions—for example, providing additional documents, a satisfactory appraisal, or clearing title issues. Once conditions are met, you may receive clear to close. Your loan amount, interest rate, and mortgage payment are typically set at this stage.',
  },
  {
    question: 'What is clear to close?',
    answer:
      'Clear to close means the lender has approved the loan and all conditions have been satisfied. You can proceed to closing. You will receive the Closing Disclosure at least 3 business days before closing. Review it and compare to your Loan Estimate.',
  },
  {
    question: 'How long does mortgage approval take?',
    answer:
      'From application to conditional approval often takes one to two weeks. Final approval (clear to close) depends on how quickly conditions are met—typically a few days to a week after conditional approval. Total application to closing is often 30–45 days.',
  },
  {
    question: 'Can my approval be denied after conditional approval?',
    answer:
      'Yes. If conditions are not met—for example, the appraisal comes in low, your financial situation changes, or new credit issues appear—the lender may withdraw or deny the approval. Stay in contact with your lender and avoid major financial changes.',
  },
  {
    question: 'What should I avoid after conditional approval?',
    answer:
      'Avoid major purchases, new credit, job changes, or large deposits that cannot be explained. These can affect your qualification and delay or derail approval. Your lender may perform a final verification before closing.',
  },
  {
    question: 'How does approval affect my Loan Estimate?',
    answer:
      'Under TRID, your Loan Estimate shows the loan amount, interest rate, mortgage payment, and closing costs. If underwriting finds different information, the lender may issue a revised Loan Estimate. Your final numbers appear on the Closing Disclosure.',
  },
];

export default function MortgageApprovalProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Approval Process: A Guide for U.S. Homebuyers',
    description:
      'Learn how mortgage approval works from conditional approval to clear to close. Understand what lenders evaluate and what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Approval Process: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>mortgage approval process</strong> moves from application through <strong>underwriting</strong> to
            conditional approval, then final approval (clear to close). Understanding each stage helps you know what to
            expect, when to provide documents, and what to avoid. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and <strong>mortgage payment</strong> are typically set at conditional
            approval—but they can change if conditions are not met or if the lender finds new information.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), your <strong>Loan Estimate</strong> shows the estimated terms
            and <strong>closing costs</strong> early in the process. Your Closing Disclosure—at least 3 business days
            before closing—shows the final numbers. See <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">Mortgage Application Process</Link> and{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Conditional approval</strong> means the lender has approved you subject to conditions—appraisal,
            title, additional documents, or verifications. Your <strong>loan amount</strong> and{' '}
            <strong>interest rate</strong> are typically locked at this stage unless something changes. <strong>Clear to
            close</strong> means all conditions are satisfied and you can proceed to closing.
          </p>
          <p className="text-gray-700 mb-4">
            Approval can be withdrawn if conditions are not met—for example, a low appraisal, a change in your financial
            situation, or new credit issues. The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement
            Procedures Act) require accurate disclosure of the cost of credit. Your <strong>Loan Estimate</strong> and
            Closing Disclosure reflect the terms at each stage. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>.
          </p>
        </section>

        {/* Design object 1: Approval stages visual */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Approval Stages</h2>
          <div className="grid gap-3">
            {[
              { label: 'Application', desc: 'Documents submitted; underwriting begins' },
              { label: 'Underwriting', desc: 'Lender evaluates credit, income, assets, property' },
              { label: 'Conditional approval', desc: 'Approved subject to appraisal, title, docs' },
              { label: 'Conditions satisfied', desc: 'You provide requested items' },
              { label: 'Clear to close', desc: 'All conditions met; Closing Disclosure sent' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After you apply, the lender begins <strong>underwriting</strong>—evaluating your credit, income, assets,{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>, and the
            property. They order an appraisal and title search. When the initial review is complete, they may issue
            <strong> conditional approval</strong>—approval subject to conditions such as: appraisal satisfactory to
            the lender, title clear, additional documentation (e.g., letter of explanation, updated bank statement), or
            verification of employment.
          </p>
          <p className="text-gray-700 mb-4">
            You respond to condition requests. Once all conditions are satisfied, the lender issues <strong>clear to
            close</strong>. You receive the Closing Disclosure at least 3 business days before closing. Review it and
            compare to your <strong>Loan Estimate</strong>. At closing, you sign the mortgage documents and the loan
            funds. See <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
          <p className="text-gray-700">
            The <strong>mortgage payment</strong> and <strong>closing costs</strong> on your Loan Estimate are based on
            the information at application. If underwriting finds different income or a lower appraisal, your terms
            could change. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor applies for a $340,000 loan and receives a <strong>Loan Estimate</strong> within 3 business days:
            7% <strong>interest rate</strong>, <strong>mortgage payment</strong> of about $2,262 (P&I). Underwriting
            runs for 10 days. Taylor receives conditional approval—subject to appraisal and title. The appraisal comes
            in at value; title is clear. Taylor provides a letter of explanation for a large deposit. Conditions are
            satisfied within 5 days.
          </p>
          <p className="text-gray-700 mb-4">
            Taylor receives clear to close. The Closing Disclosure arrives 4 days before closing. The final{' '}
            <strong>closing costs</strong> are close to the Loan Estimate. Taylor closes on schedule. If the appraisal
            had come in low, the lender might have reduced the <strong>loan amount</strong> or required a larger down
            payment—a revised Loan Estimate would have been issued. The example is illustrative.
          </p>
        </section>

        {/* Design object 2: What to avoid callout */}
        <div className="mb-10 rounded-xl border-l-4 border-rose-400 bg-rose-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-rose-900 mb-2">After Conditional Approval: What to Avoid</h3>
          <p className="text-rose-800 text-[15px] leading-relaxed mb-3">
            Lenders may perform a final credit check or verification before closing. To avoid derailing your approval:
          </p>
          <ul className="text-rose-800 text-[15px] space-y-1 list-disc list-inside">
            <li>Do not make large purchases or open new credit</li>
            <li>Do not change jobs without discussing with your lender</li>
            <li>Do not make large, unexplained deposits</li>
            <li>Do not miss payments on existing debts</li>
          </ul>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, conditional approval can feel like the finish line—but it is not. Conditions must
            be satisfied. Respond promptly to document requests. If the appraisal comes in low, you may need to
            renegotiate with the seller, bring more money to closing, or walk away. Understanding the process helps
            you plan.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> and <strong>loan amount</strong> depend on verified information. If
            underwriting finds different income or a lower appraisal, your terms could change. Stay in contact with your
            lender. See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link> and{' '}
            <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Understanding Approval</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Know when to provide documents</li>
                <li>Understand conditional vs. clear to close</li>
                <li>Avoid actions that derail approval</li>
                <li>Plan for typical timeline</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Approval can be withdrawn if conditions fail</li>
                <li>Low appraisal can change terms</li>
                <li>Final verification can uncover issues</li>
                <li>Timeline varies by lender</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not responding to conditions promptly:</strong> Delays can push back your closing. Provide requested documents as soon as possible.</li>
            <li><strong>Making big financial changes after conditional approval:</strong> New debt, job changes, or large purchases can affect your qualification. Stay stable until closing.</li>
            <li><strong>Ignoring the Closing Disclosure:</strong> Compare it to your <strong>Loan Estimate</strong>. Ensure the final <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>closing costs</strong> match what you expect.</li>
            <li><strong>Assuming conditional approval means approval:</strong> Conditions must be satisfied. A low appraisal or title issue can derail the loan.</li>
            <li><strong>Not informing your lender of changes:</strong> If your situation changes, tell your lender. Transparency helps avoid surprises at closing.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about mortgage approval">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage process and approval</li>
            <li>Fannie Mae – Selling Guide (underwriting and approval)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Underwriting', href: '/mortgage-glossary/underwriting' }]}
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
            The approval process varies by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
