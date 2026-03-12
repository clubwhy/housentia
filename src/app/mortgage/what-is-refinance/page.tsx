import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Refinance? A Guide for U.S. Homeowners | Housentia',
  description:
    'Refinancing replaces your existing mortgage with a new one. Learn common refinance types, how refinancing is disclosed under TRID, and how to compare costs using estimates and break-even concepts.',
  openGraph: {
    title: 'What Is a Refinance? A Guide for U.S. Homeowners | Housentia',
    description: 'Learn what refinancing is, how it works, and how to compare refinance scenarios.',
  },
};

const ARTICLE_SLUG = 'what-is-refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Refinance?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-refinance';

const FAQ_ITEMS = [
  {
    question: 'What is a mortgage refinance?',
    answer:
      'A refinance replaces an existing mortgage with a new mortgage. The new loan typically pays off the old loan, and the borrower then makes payments on the new loan under new terms.',
  },
  {
    question: 'What are common reasons people refinance?',
    answer:
      'Common reasons include changing the interest rate, changing the loan term, switching from an adjustable-rate to fixed-rate loan, or accessing equity through a cash-out refinance (where permitted).',
  },
  {
    question: 'Do refinances have closing costs?',
    answer:
      'Often yes. Refinances may include lender and third-party fees similar to a purchase loan. Costs are disclosed on the Loan Estimate and Closing Disclosure under TRID rules.',
  },
  {
    question: 'What is refinance break-even?',
    answer:
      'Break-even is a comparison concept that estimates how long it takes for monthly savings to offset estimated closing costs. It is an estimate, not a guarantee.',
  },
  {
    question: 'Is refinancing the right choice for everyone?',
    answer:
      'Not necessarily. Refinancing depends on the borrower’s goals, costs, time horizon, and eligibility. This guide is educational only; a licensed professional can provide guidance for a specific situation.',
  },
];

export default function WhatIsRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Refinance? A Guide for U.S. Homeowners',
    description:
      'Refinancing replaces your existing mortgage with a new loan. This educational guide explains refinance types, how costs are disclosed, and how to compare scenarios using estimates like break-even.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Refinance? A Guide for U.S. Homeowners" breadcrumbs={BREADCRUMBS} />
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
            In the U.S., homeowners sometimes consider refinancing after a purchase — for example, when rates change or when they want different loan terms.
            Refinancing can also be used to restructure the loan, such as changing from a 30-year to a 15-year term, or switching from an adjustable-rate to
            a fixed-rate mortgage.
          </p>
          <p className="text-gray-700">
            This guide explains what a refinance is, how it works, and how costs and terms are disclosed under consumer protection rules such as TRID.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>refinance</strong> replaces your current mortgage with a new mortgage. In most refinances, the new lender (or the same lender)
            uses the proceeds of the new loan to pay off the existing mortgage, and you begin making payments on the new loan.
          </p>
          <p className="text-gray-700">
            Refinances are still mortgages, so they generally follow similar underwriting concepts (credit, income, DTI, LTV, property, and program rules),
            and they typically include closing costs disclosed on standardized forms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            A refinance process can look similar to a purchase loan, but without a home sale. Common steps include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Submitting a refinance application and documentation</li>
            <li>Underwriting review (income, assets, credit, property)</li>
            <li>Appraisal or other valuation method (depends on program and lender)</li>
            <li>Receiving a Loan Estimate and later a Closing Disclosure</li>
            <li>Closing and payoff of the existing mortgage</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Refinances often fall into broad categories:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Rate-and-term refinance</strong>: Changes interest rate and/or term without taking cash out.</li>
            <li><strong>Cash-out refinance</strong>: Increases the loan amount beyond the payoff and provides cash to the borrower (subject to rules).</li>
            <li><strong>Streamline refinance</strong>: Certain FHA/VA programs may allow simplified refinances with limited documentation (program-specific).</li>
          </ul>
          <p className="text-gray-700">
            Consumer protection rules under TILA, RESPA, and TRID require standardized disclosures so borrowers can review estimated and final terms and costs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            A homeowner has a remaining balance of $280,000 and considers refinancing into a new 30-year loan. The new loan has a different interest rate and
            the refinance includes estimated closing costs.
          </p>
          <p className="text-gray-700 mb-4">
            To compare scenarios, the homeowner may look at the estimated payment difference and compute an estimated break-even timeframe:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-4">
            <p className="text-gray-700">
              <strong>Estimated break-even</strong> ≈ (estimated closing costs) ÷ (estimated monthly savings)
            </p>
          </div>
          <p className="text-gray-700">
            This is a simplified educational concept. Real comparisons should account for time horizon, total costs, and how long the borrower expects to keep the loan.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Potential payment or term changes</strong> — A refinance can change rate, term, or loan structure.</li>
                <li><strong>Opportunity to restructure</strong> — Borrowers may consolidate a lien structure or change product features.</li>
                <li><strong>Standardized disclosures</strong> — LE/CD forms provide transparent cost breakdowns.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>Closing costs</strong> — Refinancing often involves fees that may offset benefits.</li>
                <li><strong>Extending the term</strong> — A new long term can increase total interest even if payment drops.</li>
                <li><strong>Eligibility varies</strong> — Credit, income, LTV, and program rules may affect availability.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Comparing only the monthly payment</strong>
              <p className="text-gray-700 mt-1">Costs, APR, and total interest over time also matter in comparisons.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Ignoring closing costs</strong>
              <p className="text-gray-700 mt-1">Even if the rate changes, fees can affect break-even and total cost.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Assuming break-even is guaranteed</strong>
              <p className="text-gray-700 mt-1">Break-even is an estimate based on assumptions and time horizon.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Not reviewing the LE and CD carefully</strong>
              <p className="text-gray-700 mt-1">TRID forms are designed for review; comparing them can help catch changes.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Overlooking liens and insurance impacts</strong>
              <p className="text-gray-700 mt-1">LTV, junior liens, and insurance rules can affect refinance options and costs.</p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about refinancing">
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

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Refinance', href: '/mortgage-glossary/refinance' }]}
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
