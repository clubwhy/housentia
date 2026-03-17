import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Qualification Checklist | Housentia',
  description:
    'A checklist of credit, income, assets, and other factors lenders evaluate for mortgage qualification.',
  openGraph: { title: 'Mortgage Qualification Checklist | Housentia', description: 'Use this mortgage qualification checklist.' },
};

const ARTICLE_SLUG = 'mortgage-qualification-checklist';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Qualification Checklist' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-qualification-checklist';

const FAQ_ITEMS = [
  {
    question: 'What do lenders check for mortgage approval?',
    answer:
      'Credit score, income, employment, DTI (debt-to-income), LTV (loan-to-value), assets, down payment, property, and sometimes reserves. Underwriting evaluates each factor to assess your ability to repay. Your loan amount, interest rate, and mortgage payment are set in the Loan Estimate (TRID) after you apply.',
  },
  {
    question: 'What documents do I need?',
    answer:
      'ID, pay stubs (2–4 weeks), W-2s or tax returns (2 years), bank statements (2 months), and employment verification. Self-employed borrowers need profit-and-loss statements, 1099s, and additional tax documentation. See Mortgage Application Documents.',
  },
  {
    question: 'What credit score do I need?',
    answer:
      'FHA: 580+ (3.5% down) or 500+ (10% down). Conventional: typically 620+. VA/USDA: varies by lender. Higher scores may qualify for better interest rates. Requirements vary by program.',
  },
  {
    question: 'How can I prepare before applying?',
    answer:
      'Check your credit, pay down debt to improve DTI, gather documents, and understand your LTV. Pre-approval can help you know your loan amount before house hunting. See What Is DTI and What Is LTV.',
  },
  {
    question: 'Does the checklist affect my Loan Estimate or closing costs?',
    answer:
      'Your Loan Estimate (provided within 3 business days of application under TRID) shows your interest rate, loan amount, mortgage payment, and closing costs. Qualification factors (credit, DTI, LTV) determine whether you qualify and at what terms—they do not change after you receive the Loan Estimate unless you reapply or change the loan.',
  },
  {
    question: 'What is DTI and why does it matter?',
    answer:
      'DTI (debt-to-income) is your monthly debt payments divided by gross monthly income. Lenders typically want DTI below 43–50% depending on the program. A lower DTI can help you qualify for a larger loan amount. See What Is DTI for details.',
  },
];

export default function MortgageQualificationChecklistPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Qualification Checklist', description: 'A checklist for mortgage qualification.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Qualification Checklist" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>mortgage qualification checklist</strong> helps first-time homebuyers prepare before applying.
            Lenders evaluate credit, income, <strong>DTI</strong> (debt-to-income), <strong>LTV</strong> (loan-to-value),
            assets, down payment, and the property during <strong>underwriting</strong>. Your{' '}
            <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong> are set in the <strong>Loan Estimate</strong> (TRID) after you apply.
          </p>
          <p className="text-gray-700 mb-4">
            This checklist covers what lenders typically review. Requirements vary by lender and program. See{' '}
            <Link href="/mortgage/what-lenders-look-at-mortgage-approval" className="text-primary hover:underline font-medium">What Lenders Look at Mortgage Approval</Link>,{' '}
            <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>, and{' '}
            <Link href="/mortgage/steps-to-get-a-mortgage" className="text-primary hover:underline font-medium">Steps to Get a Mortgage</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender pulls your credit, verifies your income and assets, and reviews your{' '}
            <strong>DTI</strong> and <strong>LTV</strong>. These factors determine whether you qualify and for what{' '}
            <strong>loan amount</strong>. The <strong>Loan Estimate</strong> (provided within 3 business days under
            TRID) shows your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong>. <strong>Underwriting</strong> verifies that you meet the program guidelines.
          </p>
          <p className="text-gray-700 mb-4">
            Preparing in advance—checking credit, gathering documents, understanding your DTI—can help the process go
            smoothly. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: Qualification checklist table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Qualification Checklist</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Lenders Review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Credit score</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Payment history, score; affects rate and approval</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Income</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay stubs, W-2s, tax returns; verified</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">DTI</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Debt payments ÷ income; typically &lt;43–50%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">LTV</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Loan amount ÷ value; affects PMI, approval</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Assets</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Bank statements; down payment, closing costs, reserves</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Property</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal, title; must meet program guidelines</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender and program. Your Loan Estimate (TRID) sets your terms after you apply.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Lenders evaluate your ability to repay. <strong>Credit</strong> shows payment history; higher scores may
            qualify for better <strong>interest rates</strong>. <strong>Income</strong> and employment are verified with
            pay stubs, W-2s, and tax returns. <strong>DTI</strong> (debt-to-income) compares your monthly debt payments
            to gross income—lenders typically want it below 43–50%. <strong>LTV</strong> (loan-to-value) is your{' '}
            <strong>loan amount</strong> divided by the property value; it affects PMI and approval.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Assets</strong> (bank statements) show you have funds for the down payment and{' '}
            <strong>closing costs</strong>. The property must appraise and meet program guidelines. During{' '}
            <strong>underwriting</strong>, the lender verifies all of this. Your <strong>Loan Estimate</strong> (TRID)
            sets your <strong>mortgage payment</strong> and costs. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor checks the checklist before applying. Credit score: 720. DTI: 38%. Taylor has 2 months of pay stubs,
            W-2s, tax returns, and bank statements ready. Taylor applies for a $300,000 loan. The lender provides the{' '}
            <strong>Loan Estimate</strong> within 3 days: 6.5% <strong>interest rate</strong>, $1,896{' '}
            <strong>mortgage payment</strong> (P&I), $9,500 <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> verifies Taylor&apos;s income, assets, and credit. The property appraises.
            Taylor is approved. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/mortgage-pre-approval" className="text-primary hover:underline font-medium">Mortgage Pre-Approval</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-cyan-500 bg-cyan-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-cyan-900 mb-2">Key Takeaway</h3>
          <p className="text-cyan-800 text-[15px] leading-relaxed">
            Before applying: check credit, understand your <strong>DTI</strong> and <strong>LTV</strong>, gather documents
            (pay stubs, W-2s, tax returns, bank statements), and know your down payment and <strong>closing costs</strong>.
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are
            set in the <strong>Loan Estimate</strong> (TRID) after you apply. Use this checklist to prepare.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers often wonder what lenders look for. This checklist helps you prepare before you apply.
            Knowing your credit score, DTI, and LTV in advance can help you address issues (e.g., paying down debt) or
            set realistic expectations. Gathering documents early speeds up processing and <strong>underwriting</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) is provided within 3 business days of application. It shows your
            <strong> interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>.
            Qualification factors determine whether you get that estimate and at what terms. See{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Using a Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Prepare before applying</li>
                <li>Identify issues early (credit, DTI)</li>
                <li>Gather documents in advance</li>
                <li>Set realistic expectations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Requirements vary by lender</li>
                <li>Program guidelines differ (FHA, conventional, etc.)</li>
                <li>Checklist is a guide, not a guarantee</li>
                <li>Pre-approval gives actual conditional amount</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Applying without checking credit first:</strong> Know your score before you apply. Errors or issues can be addressed. A surprise low score can affect your interest rate or approval.</li>
            <li><strong>Ignoring DTI:</strong> High debt relative to income can limit your loan amount or cause denial. Pay down debt before applying if possible. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.</li>
            <li><strong>Not having documents ready:</strong> Processing and underwriting require pay stubs, W-2s, tax returns, bank statements. Gather them before applying to speed up the process.</li>
            <li><strong>Making major financial changes during underwriting:</strong> Large purchases, new credit, or job changes can affect approval. Avoid until after closing.</li>
            <li><strong>Assuming one size fits all:</strong> FHA, conventional, VA, and USDA have different requirements. Credit score, DTI, and LTV thresholds vary. Check program guidelines.</li>
            <li><strong>Confusing prequalification with pre-approval:</strong> Prequalification is an estimate. Pre-approval involves verification and gives you a conditional loan amount. Get pre-approved before house hunting. See <Link href="/mortgage/mortgage-pre-approval-vs-pre-qualification" className="text-primary hover:underline font-medium">Mortgage Pre-Approval vs Pre-Qualification</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about mortgage qualification">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage qualification and approval</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Loan Qualification Comparison', href: '/tools/loan-qualification-comparison' }} className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
