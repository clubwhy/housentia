import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is DTI? A Guide for U.S. Homebuyers | Housentia',
  description: 'DTI (Debt-to-Income ratio) compares your monthly debt payments to your gross income. Learn how front-end and back-end DTI work and why lenders use them in mortgage underwriting.',
  openGraph: {
    title: 'What Is DTI? A Guide for U.S. Homebuyers | Housentia',
    description: 'DTI compares debt payments to income. Learn how lenders use front-end and back-end ratios in mortgage underwriting.',
  },
};

const BREADCRUMBS = [{ label: 'Mortgage', href: '/mortgage' }, { label: 'What Is DTI?' }];
const PAGE_URL = 'https://housentia.com/mortgage/what-is-dti';

const FAQ_ITEMS = [
  {
    question: 'What does DTI stand for?',
    answer: 'DTI stands for Debt-to-Income ratio, which compares monthly debt obligations to gross monthly income.',
  },
  {
    question: 'Why do lenders review DTI?',
    answer: 'DTI helps lenders understand how much of a borrower\'s income is already used to pay existing debts.',
  },
  {
    question: 'Does DTI include credit card balances?',
    answer: 'DTI calculations usually include the minimum monthly payment required on credit cards, not the total balance.',
  },
  {
    question: 'Is DTI the same as a credit score?',
    answer: 'No. A credit score measures credit history and payment behavior, while DTI measures the relationship between debt payments and income.',
  },
  {
    question: 'Does every mortgage program use the same DTI guidelines?',
    answer: 'No. Mortgage programs may evaluate debt ratios differently based on underwriting standards and program requirements.',
  },
];

export default function WhatIsDTIPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({
    headline: 'What Is DTI? A Guide for U.S. Homebuyers',
    description: 'DTI (Debt-to-Income ratio) compares monthly debt payments to gross monthly income. This guide explains front-end and back-end ratios and how lenders use DTI in mortgage underwriting.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is DTI? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When applying for a mortgage in the United States, lenders evaluate several financial factors to understand a borrower&apos;s ability to manage monthly payments. One of the most commonly referenced measurements is DTI, which stands for Debt-to-Income ratio.
          </p>
          <p className="text-gray-700 mb-4">
            DTI is a simple financial calculation that compares a person&apos;s monthly debt obligations to their gross monthly income. It is widely used in mortgage underwriting to assess how much of a borrower&apos;s income is already committed to existing debts.
          </p>
          <p className="text-gray-700 mb-4">
            Federal mortgage regulations and consumer protection laws emphasize transparency in lending. Regulations such as the Truth in Lending Act (TILA), Real Estate Settlement Procedures Act (RESPA), and the TILA-RESPA Integrated Disclosure (TRID) rule require lenders to provide clear disclosures about loan costs and obligations. While these regulations do not set a single universal DTI requirement, the concept of debt-to-income is widely used across mortgage programs as part of responsible lending practices.
          </p>
          <p className="text-gray-700">
            Understanding DTI helps homebuyers better interpret mortgage disclosures and understand how lenders evaluate financial obligations. This guide explains what DTI is, how it works, and why it is commonly referenced in the mortgage process.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Debt-to-Income ratio (DTI) measures the relationship between a borrower&apos;s monthly debt payments and their gross monthly income (income before taxes and deductions). The result is expressed as a percentage.
          </p>
          <p className="text-gray-700 mb-4">The general formula is:</p>
          <div className="bg-gray-50 border-l-4 border-primary p-4 mb-4 rounded">
            <p className="font-mono font-semibold text-gray-900">DTI = Total Monthly Debt Payments ÷ Gross Monthly Income</p>
          </div>
          <p className="text-gray-700 mb-4">
            For example, if a borrower earns $6,000 per month before taxes and has $2,400 in monthly debt payments, the DTI would be:
          </p>
          <p className="text-gray-700 mb-4 font-mono">$2,400 ÷ $6,000 = 40% DTI</p>
          <p className="text-gray-700 mb-4">
            This percentage shows how much of a borrower&apos;s income is used to cover existing debts.
          </p>
          <p className="text-gray-700 mb-4">
            Mortgage lenders review DTI to understand a borrower&apos;s current financial obligations relative to income. It is one of several factors used in underwriting, along with credit history, assets, and loan details.
          </p>
          <p className="text-gray-700 mb-4">
            DTI calculations are commonly referenced in underwriting standards used by organizations such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Fannie Mae</li>
            <li>Freddie Mac</li>
            <li>Federal Housing Administration (FHA)</li>
            <li>Department of Veterans Affairs (VA)</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Each program may evaluate debt ratios differently, and specific requirements may vary.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            DTI calculations typically consider two categories of debt ratios in mortgage underwriting.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Front-End Ratio (Housing Ratio)</h3>
          <p className="text-gray-700 mb-4">
            The front-end ratio measures how much of a borrower&apos;s income is used for housing costs. Housing costs may include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Principal and interest payments</li>
            <li>Property taxes</li>
            <li>Homeowner&apos;s insurance</li>
            <li>Mortgage insurance (if applicable)</li>
            <li>Homeowners association (HOA) dues when applicable</li>
          </ul>
          <p className="text-gray-700 mb-4">
            This is sometimes referred to as <strong>PITI</strong>: Principal, Interest, Taxes, Insurance. The housing ratio focuses only on the proposed housing payment.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Back-End Ratio (Total Debt Ratio)</h3>
          <p className="text-gray-700 mb-4">
            The back-end ratio includes all recurring monthly debts in addition to housing costs. These debts may include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Credit card minimum payments</li>
            <li>Auto loan payments</li>
            <li>Student loans</li>
            <li>Personal loans</li>
            <li>Alimony or child support obligations (when applicable)</li>
            <li>Other documented monthly liabilities</li>
          </ul>
          <p className="text-gray-700">
            Because it includes both housing and other debts, the back-end ratio provides a broader view of a borrower&apos;s financial obligations. Mortgage underwriting systems often review both ratios when evaluating loan applications.
          </p>
        </section>

        {/* Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Consider a simplified example to illustrate how DTI may be calculated.
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Borrower Income</h3>
              <p className="text-gray-700">Gross monthly income: $7,000</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Existing Monthly Debts</h3>
              <p className="text-gray-700 mb-2">Car payment: $450 | Student loan: $300 | Credit card minimums: $150</p>
              <p className="text-gray-700 font-semibold">Total existing debts: $900 per month</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Proposed Housing Payment</h3>
              <p className="text-gray-700 mb-2">P&amp;I: $2,100 | Property taxes: $350 | Insurance: $150</p>
              <p className="text-gray-700 font-semibold">Total housing payment: $2,600</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">Front-End Ratio</h3>
              <p className="text-blue-800 text-sm mb-1">Housing payment ÷ monthly income</p>
              <p className="font-mono text-blue-900">$2,600 ÷ $7,000 = <strong>37%</strong></p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">Back-End Ratio</h3>
              <p className="text-blue-800 text-sm mb-1">(Housing + other debts) ÷ income</p>
              <p className="font-mono text-blue-900">$3,500 ÷ $7,000 = <strong>50%</strong></p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            This example shows how lenders may calculate debt ratios when evaluating a mortgage application. Actual underwriting decisions depend on many factors, including credit profile, loan type, and program guidelines.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Helps Measure Financial Obligations</strong> — DTI provides a straightforward way to compare debt payments to income. This helps lenders assess how much of a borrower&apos;s income is already committed.</li>
                <li><strong>Promotes Responsible Lending</strong> — Debt ratio evaluation supports consumer protection goals by helping lenders evaluate whether a borrower may reasonably manage additional debt.</li>
                <li><strong>Standardized Evaluation</strong> — DTI calculations are widely used across mortgage underwriting systems and lending programs, which creates consistency across the industry.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>Does Not Reflect All Financial Factors</strong> — DTI focuses on income and debts but does not fully reflect savings, cash reserves, spending habits, or investment assets. These factors may also influence financial stability.</li>
                <li><strong>Gross Income vs. Net Income</strong> — DTI uses gross income, which is income before taxes. Actual take-home income may be lower.</li>
                <li><strong>May Change Over Time</strong> — A borrower&apos;s debt obligations or income can change after loan approval. DTI calculations represent a snapshot based on available information at the time of underwriting.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <p className="text-gray-700 mb-4">
            Understanding DTI can help prevent several common misunderstandings among homebuyers.
          </p>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Assuming DTI Determines Loan Approval</strong>
              <p className="text-gray-700 mt-1">DTI is only one factor in mortgage underwriting. Lenders also consider credit history, employment stability, assets, and loan program guidelines.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Forgetting Some Debts Are Included</strong>
              <p className="text-gray-700 mt-1">Borrowers sometimes overlook debts that may be included in DTI calculations, such as minimum credit card payments or student loans.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Confusing Gross Income With Take-Home Pay</strong>
              <p className="text-gray-700 mt-1">DTI uses gross income, not the amount deposited after taxes and deductions.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Ignoring Housing-Related Costs</strong>
              <p className="text-gray-700 mt-1">Housing payments include more than just the mortgage principal and interest. Taxes and insurance are typically part of the housing payment used in DTI calculations.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Assuming All Loan Programs Use the Same Ratios</strong>
              <p className="text-gray-700 mt-1">Different mortgage programs may evaluate DTI differently depending on underwriting standards and compensating factors.</p>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about DTI">
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
          <p className="text-gray-700 mb-4">
            The information in this guide is based on publicly available consumer education materials and regulatory resources from:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>U.S. Department of Housing and Urban Development (HUD)</li>
            <li>Federal Housing Administration (FHA)</li>
            <li>Department of Veterans Affairs (VA)</li>
            <li>Fannie Mae</li>
            <li>Freddie Mac</li>
            <li>Truth in Lending Act (TILA)</li>
            <li>Real Estate Settlement Procedures Act (RESPA)</li>
            <li>TILA-RESPA Integrated Disclosure (TRID) rules</li>
          </ul>
          <p className="text-gray-700 mb-4">Readers may consult the following resources for additional information:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
            <li><a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hud.gov</a></li>
            <li><a href="https://www.fanniemae.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">fanniemae.com</a></li>
            <li><a href="https://www.freddiemac.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">freddiemac.com</a></li>
          </ul>
        </section>

        {/* Related links: 2 guides, 1 glossary, 1 calculator */}
        <RelatedLinks
          guides={[
            { label: 'How Lenders Calculate DTI', href: '/mortgage/how-dti-calculated' },
            { label: 'Debt-to-Income Explained', href: '/mortgage/debt-to-income-explained' },
          ]}
          glossary={[{ label: 'DTI', href: '/mortgage-glossary/dti' }]}
          calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }}
          className="mb-10"
        />

        {/* Educational Disclaimer */}
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
