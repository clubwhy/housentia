import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Pre-Approval vs Pre-Qualification: What\'s the Difference? | Housentia',
  description:
    'Pre-approval and prequalification both estimate how much you can borrow, but they differ in rigor. Learn the key differences and when each matters for home buying.',
  openGraph: {
    title: 'Mortgage Pre-Approval vs Pre-Qualification: What\'s the Difference? | Housentia',
    description: 'Understand how pre-approval and prequalification differ and which one strengthens your offer.',
  },
};

const ARTICLE_SLUG = 'mortgage-pre-approval-vs-pre-qualification';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Pre-Approval vs Pre-Qualification',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-pre-approval-vs-pre-qualification';

const FAQ_ITEMS = [
  {
    question: 'What is the main difference between pre-approval and prequalification?',
    answer:
      'Prequalification is typically a quick estimate based on self-reported information. Pre-approval involves verification of your income, assets, and credit. Lenders pull your credit and review documents for pre-approval, making it stronger and more meaningful to sellers. Neither sets your interest rate, mortgage payment, or closing costs—those come with the Loan Estimate (TRID) when you apply.',
  },
  {
    question: 'Which one should I get before house hunting?',
    answer:
      'Pre-approval is generally recommended. It shows sellers and real estate agents that a lender has verified your finances and conditionally approved a loan amount. A pre-approval letter can strengthen your offer when competing for a home. Prequalification can help early on to estimate your budget.',
  },
  {
    question: 'Does prequalification affect my credit score?',
    answer:
      'It depends. A soft inquiry (pre-qual) typically does not affect your score. A pre-approval usually involves a hard credit pull, which may have a small, temporary effect. Multiple mortgage inquiries within a short window (e.g., 14–45 days) are often counted as one for scoring.',
  },
  {
    question: 'Is pre-approval a guarantee I will get a loan?',
    answer:
      'No. Pre-approval is conditional. Final approval depends on the property (appraisal, title), final underwriting, and no material changes to your finances. Your interest rate, mortgage payment, and closing costs are set when you apply and receive the Loan Estimate.',
  },
  {
    question: 'Can I have both pre-approval and prequalification?',
    answer:
      'Yes. Some borrowers get prequalified first to get a rough idea of their budget, then pursue pre-approval when they are ready to make offers. Pre-approval is the one that matters most when you are serious about buying.',
  },
  {
    question: 'When do I get my Loan Estimate and interest rate?',
    answer:
      'After you find a home and apply for the loan. Within 3 business days of application, the lender must provide a Loan Estimate (TRID) with your interest rate, loan amount, mortgage payment, and closing costs. Neither prequalification nor pre-approval includes these—they give you an estimated loan amount only.',
  },
];

export default function MortgagePreApprovalVsPreQualificationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Pre-Approval vs Pre-Qualification: What\'s the Difference?',
    description:
      'Pre-approval and prequalification both estimate how much you can borrow. This guide explains the key differences and when each matters for home buying.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Pre-Approval vs Pre-Qualification: What's the Difference?" breadcrumbs={BREADCRUMBS} />
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
            <strong>Prequalification</strong> and <strong>pre-approval</strong> are both ways to estimate how much you
            might borrow for a mortgage. They sound similar, but they differ in rigor. Prequalification is typically a
            quick estimate based on what you tell the lender. Pre-approval involves verification of your income, assets,
            and credit—making it stronger and more meaningful when you are ready to make an offer.
          </p>
          <p className="text-gray-700 mb-4">
            Neither sets your <strong>interest rate</strong>, <strong>mortgage payment</strong>, or{' '}
            <strong>closing costs</strong>. Those come when you apply and receive a <strong>Loan Estimate</strong> (TRID).
            Pre-approval gives you a conditional <strong>loan amount</strong>; prequalification gives you an estimate.
            First-time homebuyers often start with prequalification to explore, then get pre-approved before house hunting.
            See <Link href="/mortgage/mortgage-pre-approval" className="text-primary hover:underline font-medium">Mortgage Pre-Approval</Link> and{' '}
            <Link href="/mortgage/prequalify" className="text-primary hover:underline font-medium">Mortgage Prequalification</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            With <strong>prequalification</strong>, you share income, assets, debts, and credit (often self-reported).
            The lender gives you an estimated <strong>loan amount</strong> and possibly a rate range—no formal
            verification or credit pull in most cases. With <strong>pre-approval</strong>, you submit documents (pay
            stubs, W-2s, tax returns, bank statements), the lender pulls your credit, and <strong>underwriting</strong>{' '}
            reviews your <strong>DTI</strong> and <strong>LTV</strong>. You receive a conditional approval and a letter.
          </p>
          <p className="text-gray-700 mb-4">
            Sellers and agents prefer pre-approval because it shows a lender has verified your finances. Your
            <strong> interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> are
            set later when you apply and receive the <strong>Loan Estimate</strong>. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: Comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Prequalification</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Pre-Approval</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Verification</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Typically self-reported</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Documents verified</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Credit check</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Usually soft or none</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Hard pull typically</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Time to obtain</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Quick (minutes to hours)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Days (document review)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Loan amount</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Estimated</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Conditional approval</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Strength for offers</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Higher</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Letter</td>
                  <td className="px-4 py-3 text-sm text-gray-700">May or may not provide</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Pre-approval letter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Neither prequalification nor pre-approval sets your rate, payment, or closing costs—those come with the Loan Estimate (TRID) when you apply.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            <strong>Prequalification</strong> is usually a preliminary estimate. You tell the lender about your income,
            assets, debts, and credit. They give you an estimated <strong>loan amount</strong> and possibly a rate
            range. There is typically no formal verification or credit pull. Prequalification helps you get a rough
            budget and identify what to improve (e.g., paying down debt, building credit).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Pre-approval</strong> requires documents: pay stubs, W-2s, tax returns, bank statements, ID. The
            lender pulls your credit and reviews your <strong>DTI</strong>, <strong>LTV</strong>, and credit during{' '}
            <strong>underwriting</strong>. If approved, you receive a pre-approval letter with a conditional{' '}
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
            Riley gets prequalified online in 15 minutes. Riley enters income, assets, and debts. The lender estimates
            a <strong>loan amount</strong> of $280,000–$320,000. No credit pull. Riley uses this to explore neighborhoods.
          </p>
          <p className="text-gray-700 mb-4">
            Two weeks later, Riley gets pre-approved. Riley submits pay stubs, bank statements, W-2s, and tax returns.
            The lender pulls credit and verifies. Riley receives a pre-approval letter for $310,000, valid 90 days.
            Riley uses the letter when making offers. When Riley goes under contract, Riley applies and receives the{' '}
            <strong>Loan Estimate</strong>: 6.75% <strong>interest rate</strong>, $2,010 <strong>mortgage payment</strong> (P&I),
            $9,800 <strong>closing costs</strong>. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-indigo-500 bg-indigo-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-indigo-900 mb-2">Key Takeaway</h3>
          <p className="text-indigo-800 text-[15px] leading-relaxed">
            <strong>Prequalification</strong> = quick estimate, no verification. <strong>Pre-approval</strong> = document
            verification and credit check, conditional <strong>loan amount</strong>. Get pre-approved before house
            hunting to strengthen your offer. Your <strong>interest rate</strong>, <strong>mortgage payment</strong>,
            and <strong>closing costs</strong> come with the <strong>Loan Estimate</strong> (TRID) when you apply.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers often wonder which to get first. Prequalification can help when you are just exploring—you
            get a rough idea of your budget without a credit pull. Pre-approval is the one that matters when you are
            ready to make offers. In competitive markets, sellers and agents expect to see a pre-approval letter. It shows
            a lender has verified your finances and conditionally approved a <strong>loan amount</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (provided under TRID within 3 business days of application) shows your
            <strong> interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>.
            Neither prequalification nor pre-approval includes these. See{' '}
            <Link href="/mortgage/mortgage-pre-approval-process" className="text-primary hover:underline font-medium">Mortgage Pre-Approval Process</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prequalification</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Quick; no credit pull typically</li>
                <li>Rough budget estimate</li>
                <li>Identify what to improve</li>
                <li>Not verified; weaker for offers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pre-Approval</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Verified; stronger for offers</li>
                <li>Conditional loan amount</li>
                <li>Letter to show sellers</li>
                <li>Hard credit pull; takes days</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Thinking prequalification is enough for offers:</strong> Sellers and agents prefer pre-approval. A prequalification letter is often not sufficient. Get pre-approved before making serious offers.</li>
            <li><strong>Assuming pre-approval locks your rate:</strong> Your interest rate and mortgage payment are not set until you apply and lock. Pre-approval gives you a conditional loan amount only. The Loan Estimate (TRID) comes after you apply.</li>
            <li><strong>Confusing the two:</strong> Prequalification = estimate, no verification. Pre-approval = verified, conditional approval. Both are different from final approval, which depends on the property and underwriting.</li>
            <li><strong>Letting pre-approval expire:</strong> Letters often expire in 60–90 days. If you have not found a home, ask for an extension. An expired letter may not satisfy sellers.</li>
            <li><strong>Making major financial changes after pre-approval:</strong> Large purchases, new credit, or job changes can affect your approval. Avoid until after closing. Lenders may re-verify before funding.</li>
            <li><strong>Applying with too many lenders at once:</strong> Pre-approval involves a hard credit pull. Multiple pulls within a short window may be treated as one, but apply strategically. See <Link href="/mortgage/mortgage-pre-approval" className="text-primary hover:underline font-medium">Mortgage Pre-Approval</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about pre-approval vs prequalification">
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
          glossary={[{ label: 'Pre-approval', href: '/mortgage-glossary/pre-approval' }, { label: 'Prequalification', href: '/mortgage-glossary/prequalification' }]}
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
          <p className="text-gray-700 text-sm mb-2">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and borrower circumstances.
          </p>
          <p className="text-gray-700 text-sm">
            Readers should consult a licensed mortgage professional or financial advisor for advice specific to their situation.
          </p>
        </section>
      </main>
    </div>
  );
}
