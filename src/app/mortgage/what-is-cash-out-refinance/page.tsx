import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Cash-Out Refinance? A Guide for U.S. Homeowners | Housentia',
  description:
    'A cash-out refinance replaces your mortgage with a larger loan and provides cash from home equity. Learn how it works, common limits, how it compares to HELOCs, and how costs are disclosed under TRID.',
  openGraph: {
    title: 'What Is a Cash-Out Refinance? A Guide for U.S. Homeowners | Housentia',
    description:
      'Learn what a cash-out refinance is, how it works, and how to compare it to other home equity options.',
  },
};

const BREADCRUMBS = [{ label: 'Mortgage', href: '/mortgage' }, { label: 'What Is a Cash-Out Refinance?' }];
const PAGE_URL = 'https://housentia.com/mortgage/what-is-cash-out-refinance';

const FAQ_ITEMS = [
  {
    question: 'What is a cash-out refinance?',
    answer:
      'A cash-out refinance replaces your existing mortgage with a new, larger mortgage. The new loan pays off the old loan, and the borrower receives the difference in cash (subject to program limits and fees).',
  },
  {
    question: 'How is cash-out refinance different from a HELOC?',
    answer:
      'A cash-out refinance replaces your first mortgage. A HELOC is usually a separate revolving line of credit that may sit behind the first mortgage. Costs, rates, and rules differ by product and lender.',
  },
  {
    question: 'Are there limits on how much cash you can take out?',
    answer:
      'Often yes. Many programs limit maximum loan-to-value (LTV) for cash-out refinances, and limits can vary by loan type, occupancy, and lender policies.',
  },
  {
    question: 'Do cash-out refinances have closing costs?',
    answer:
      'Usually. Cash-out refinances often include closing costs similar to other mortgages. Estimated costs are shown on the Loan Estimate and finalized on the Closing Disclosure.',
  },
  {
    question: 'Is cash-out refinance considered financial advice?',
    answer:
      'No. This guide is educational only. A licensed professional can help evaluate options for a specific situation based on goals, eligibility, and costs.',
  },
];

export default function WhatIsCashOutRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Cash-Out Refinance? A Guide for U.S. Homeowners',
    description:
      'A cash-out refinance replaces your mortgage with a larger loan and provides cash from home equity. This educational guide explains how it works, how it compares to HELOCs, and how costs are disclosed under TRID.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Cash-Out Refinance? A Guide for U.S. Homeowners" breadcrumbs={BREADCRUMBS} />
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
            Homeowners sometimes explore ways to access home equity for major expenses, renovations, or debt restructuring. One option that may be available
            is a <strong>cash-out refinance</strong>, which is a type of refinance that increases the loan amount and provides cash to the borrower.
          </p>
          <p className="text-gray-700">
            Because cash-out refinancing involves a new mortgage, it uses the same consumer disclosure framework (Loan Estimate and Closing Disclosure) and
            generally requires underwriting. This guide explains the concept in a neutral, educational format.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>cash-out refinance</strong> replaces your existing mortgage with a new mortgage that is larger than the amount needed to pay off the
            current loan. After payoff and closing costs, the borrower receives the remaining proceeds as cash.
          </p>
          <p className="text-gray-700">
            The amount available depends on program rules, property value, loan limits, LTV caps, and the borrower’s profile. Cash-out refinances are not
            available in every situation and rules vary by loan type and lender.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The cash-out process is similar to other refinances: application, underwriting review, valuation, and closing. Key concepts include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Current loan payoff</strong>: The new loan pays off the existing mortgage.</li>
            <li><strong>New loan amount</strong>: The new loan may be larger than the payoff to provide cash-out proceeds.</li>
            <li><strong>LTV limits</strong>: Programs often cap maximum LTV for cash-out refinances (varies by program and lender).</li>
            <li><strong>Closing costs</strong>: As with many mortgages, there are lender and third-party fees disclosed under TRID.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Cash-out is often compared to other home equity options, such as a <strong>HELOC</strong> or a <strong>home equity loan</strong>.
            Unlike a HELOC, a cash-out refinance typically replaces the first mortgage rather than adding a second lien (though the lien structure depends on the borrower’s situation).
          </p>
          <p className="text-gray-700">
            The Loan Estimate and Closing Disclosure help borrowers review the final loan terms, cash-to-close/cash-to-borrower amounts, and total closing costs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            A homeowner owes $250,000 on a mortgage. The home appraises at $400,000. The homeowner applies for a cash-out refinance for $300,000.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-4">
            <ul className="text-gray-700 space-y-1">
              <li>New loan amount: $300,000</li>
              <li>Old loan payoff: $250,000</li>
              <li>Difference: $50,000</li>
              <li>Less closing costs and prepaid items: varies</li>
            </ul>
            <p className="text-gray-700 mt-3">
              In this simplified example, the borrower may receive some portion of the $50,000 difference as cash after paying closing costs.
              Exact proceeds depend on costs, program limits, and closing details.
            </p>
          </div>
          <p className="text-gray-700">
            This is an educational illustration only. Actual eligibility and proceeds depend on underwriting and program rules.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Single primary mortgage</strong> — Cash-out refinance can consolidate into one first-lien loan in some scenarios.</li>
                <li><strong>Structured disclosures</strong> — LE/CD forms provide standardized transparency on costs and proceeds.</li>
                <li><strong>Potential flexibility</strong> — Provides access to equity in a lump sum (subject to limits).</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>Closing costs</strong> — Fees can be significant and affect net proceeds.</li>
                <li><strong>Higher balance</strong> — Borrowing more increases the loan balance and may change total interest over time.</li>
                <li><strong>Eligibility limits</strong> — LTV caps, credit, and program rules may restrict availability.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Ignoring total costs</strong>
              <p className="text-gray-700 mt-1">Cash proceeds should be evaluated alongside fees, APR, and the new loan term.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Assuming the maximum LTV is always available</strong>
              <p className="text-gray-700 mt-1">Maximum cash-out limits vary by program, occupancy, and lender overlays.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Overlooking second liens</strong>
              <p className="text-gray-700 mt-1">Existing HELOCs or second mortgages can affect cash-out options and may require subordination or payoff.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Comparing only the interest rate</strong>
              <p className="text-gray-700 mt-1">APR and closing costs can change the total cost of borrowing.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Not using disclosures to confirm proceeds</strong>
              <p className="text-gray-700 mt-1">Loan Estimate and Closing Disclosure show cash to close and final costs; review them carefully.</p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about cash-out refinancing">
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
          <p className="text-gray-700 mb-4">This guide is based on publicly available consumer education and regulatory resources, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>U.S. Department of Housing and Urban Development (HUD)</li>
            <li>Truth in Lending Act (TILA)</li>
            <li>RESPA and TRID disclosure resources</li>
            <li>Freddie Mac and Fannie Mae consumer education materials</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
            <li><a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hud.gov</a></li>
          </ul>
        </section>

        <RelatedLinks
          guides={[
            { label: 'Refinance & Cash-Out', href: '/mortgage/refinance-cashout' },
            { label: 'HELOC Overview', href: '/mortgage/heloc' },
          ]}
          glossary={[{ label: 'Cash-Out Refinance', href: '/mortgage-glossary/cash-out-refinance' }]}
          calculator={{ label: 'Refinance Analyzer', href: '/tools/refinance-analyzer' }}
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
