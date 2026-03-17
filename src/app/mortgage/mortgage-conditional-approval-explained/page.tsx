import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Conditional Approval Explained | Housentia',
  description:
    'Conditional approval means the lender has approved you subject to certain conditions. Learn what conditions are, how to satisfy them, and what happens next.',
  openGraph: {
    title: 'Mortgage Conditional Approval Explained | Housentia',
    description: 'Understand mortgage conditional approval and how to clear conditions.',
  },
};

const ARTICLE_SLUG = 'mortgage-conditional-approval-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Conditional Approval Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-conditional-approval-explained';

const FAQ_ITEMS = [
  {
    question: 'What is conditional approval?',
    answer:
      'Conditional approval means the lender has approved your application based on the information provided, but certain items must be completed before you can close. Once conditions are satisfied, you may receive clear to close. Your loan amount, interest rate, and mortgage payment are typically set at this stage; conditions are about verification and documentation.',
  },
  {
    question: 'What are common conditions?',
    answer:
      'Common conditions include: appraisal satisfactory to the lender (value supports the loan amount), title clear, additional documentation (letter of explanation, updated bank statement, source of funds for large deposits), and verification of employment. See our Mortgage Approval Process and Mortgage Underwriting Explained guides.',
  },
  {
    question: 'How long does it take to clear conditions?',
    answer:
      'It depends on the conditions. Providing documents promptly can take a few days. Appraisal and title work may take a week or more. Respond quickly to minimize delays. Closing can be pushed back if conditions take longer than expected.',
  },
  {
    question: 'Can conditional approval be denied?',
    answer:
      'Yes. If conditions are not met—for example, the appraisal comes in low, title issues cannot be resolved, or your financial situation changes—the lender may withdraw or deny the approval. Avoid large purchases or withdrawals that could affect your file.',
  },
  {
    question: 'Does conditional approval affect my Loan Estimate or closing costs?',
    answer:
      'Your Loan Estimate and closing costs are typically set before conditional approval. Conditions verify the information used to approve you. If conditions reveal a change (e.g., appraisal affects LTV, requiring a different loan product), the lender may issue a revised Loan Estimate. Under TRID, you receive the Closing Disclosure at least 3 days before closing.',
  },
  {
    question: 'What is clear to close?',
    answer:
      'Clear to close means all conditions have been satisfied and the lender has approved the loan for closing. You can proceed to sign documents and close. The lender will schedule closing and send the Closing Disclosure under TRID.',
  },
];

export default function MortgageConditionalApprovalExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Conditional Approval Explained',
    description:
      'Conditional approval means the lender has approved you subject to conditions. Learn what to expect and how to clear them.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Conditional Approval Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Conditional approval</strong> (or &quot;approval with conditions&quot;) means the lender has approved your
            application based on the information provided, but certain items must be completed before you can close.
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are
            typically set at this stage. Conditions are about verification—appraisal, title, documentation—not about
            renegotiating your terms.
          </p>
          <p className="text-gray-700 mb-4">
            Once you satisfy the conditions, the lender can issue clear to close. You will then receive the Closing
            Disclosure under TRID (TILA-RESPA Integrated Disclosure) at least 3 business days before closing. See{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">Mortgage Approval Process</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            During <strong>underwriting</strong>, the lender reviews your income, assets, credit, and the property. If
            the lender approves you subject to conditions, it means you have met the main criteria—DTI, credit score,
            LTV—but certain items still need to be verified or completed. The appraisal must support the{' '}
            <strong>loan amount</strong>. The title must be clear. You may need to provide additional documentation.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> and <strong>closing costs</strong> were provided earlier. Conditional
            approval does not change them unless a condition reveals new information (e.g., a low appraisal affects LTV).
            See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>.
          </p>
        </section>

        {/* Design object 1: Common conditions table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Conditions at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Condition</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Verifies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal satisfactory</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Property value supports the loan amount</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Title clear</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No liens or defects; lender can secure the loan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Additional documentation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Letter of explanation, updated bank statement, etc.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Verification of employment (VOE)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Income and employment status</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Source of funds</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Large deposits explained and documented</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your lender will send a specific list. Provide each item as requested.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After <strong>underwriting</strong> reviews your file, the lender may issue conditional approval with a
            condition list. You receive the list (often via a portal or email) and submit each item. The processor or
            underwriter reviews your submissions. The appraisal is ordered by the lender and completed by a licensed
            appraiser. Title work is done by a title company or attorney.
          </p>
          <p className="text-gray-700 mb-4">
            Once all conditions are satisfied, the lender issues clear to close. You receive the Closing Disclosure at
            least 3 business days before closing under TRID. Your <strong>mortgage payment</strong> and{' '}
            <strong>closing costs</strong> are finalized on that form. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan receives conditional approval on a $280,000 loan at 6.5% <strong>interest rate</strong>. Conditions:
            appraisal satisfactory, title clear, updated bank statement (one large deposit), and VOE. Morgan submits the
            bank statement and VOE within 2 days. The appraisal is completed in 5 days and supports the{' '}
            <strong>loan amount</strong>. Title clears. All conditions are satisfied.
          </p>
          <p className="text-gray-700 mb-4">
            The lender issues clear to close. Morgan receives the Closing Disclosure 4 days before closing—TRID
            compliant. The <strong>mortgage payment</strong> and <strong>closing costs</strong> match the{' '}
            <strong>Loan Estimate</strong>. Morgan closes on schedule. The example is illustrative; timelines and
            conditions vary by lender.
          </p>
        </section>

        {/* Design object 2: Key tip callout */}
        <div className="mb-10 rounded-xl border-l-4 border-amber-500 bg-amber-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Tip: Respond Quickly</h3>
          <p className="text-amber-800 text-[15px] leading-relaxed">
            Submit condition documents as soon as possible. Delays can push back your closing date. Avoid large
            purchases, new credit, or withdrawals that could affect your file while conditions are pending. If you
            cannot provide something, contact your lender immediately.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Conditional approval is a positive step—you are close to closing. Understanding what conditions mean helps
            you respond effectively. First-time buyers may not know that conditions are normal and that most borrowers
            receive them. The key is to provide each item promptly.
          </p>
          <p className="text-gray-700 mb-4">
            If a condition seems unclear, ask your lender or loan officer. Do not assume you can skip it. Conditions that
            are not satisfied can delay or derail your loan. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and <strong>mortgage payment</strong> are typically locked in—focus on
            clearing the list. See <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link> and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Conditional Approval</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You are approved—terms are typically set</li>
                <li>Clear list of what to provide</li>
                <li>Most conditions are straightforward to satisfy</li>
                <li>Clear to close follows once conditions are met</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Conditions must be satisfied—approval is not final until then</li>
                <li>Appraisal or title issues can affect the loan</li>
                <li>Delays in providing documents can push closing</li>
                <li>Financial changes can affect approval</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Delaying document submission:</strong> Respond to condition requests promptly. Delays can push back closing and, in a purchase, risk the deal.</li>
            <li><strong>Making large purchases or opening new credit:</strong> Avoid big purchases or new credit cards while conditions are pending. They can affect your DTI and credit, and the lender may re-pull your credit.</li>
            <li><strong>Depleting reserves or making large withdrawals:</strong> The lender may re-verify assets. Large withdrawals can trigger additional conditions or affect approval.</li>
            <li><strong>Ignoring a condition you cannot satisfy:</strong> If you cannot provide something, contact your lender. Do not assume it will be overlooked.</li>
            <li><strong>Assuming conditional approval is final:</strong> Approval is conditional. If the appraisal comes in low, title has issues, or your situation changes, the lender may withdraw approval.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about conditional approval">
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
            <li>Fannie Mae – Selling Guide (underwriting and conditions)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (underwriting)</li>
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
            Conditions vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
