import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Are Mortgage Points? A Guide for U.S. Homebuyers | Housentia',
  description:
    'Mortgage points are upfront charges that can affect your interest rate and closing costs. Learn what points are, how they’re disclosed, and how to compare offers with and without points.',
  openGraph: {
    title: 'What Are Mortgage Points? A Guide for U.S. Homebuyers | Housentia',
    description:
      'Learn how mortgage points work, how they affect APR and closing costs, and how they show up on Loan Estimates.',
  },
};

const BREADCRUMBS = [{ label: 'Mortgage', href: '/mortgage' }, { label: 'What Are Mortgage Points?' }];
const PAGE_URL = 'https://housentia.com/mortgage/what-is-mortgage-points';

const FAQ_ITEMS = [
  {
    question: 'What are mortgage points?',
    answer:
      'Mortgage points are upfront charges paid at closing. Discount points are typically paid to lower the interest rate. Other points may be origination-related fees, depending on how the lender structures costs.',
  },
  {
    question: 'How much is one point?',
    answer:
      'One point typically equals 1% of the loan amount. For example, 1 point on a $300,000 loan is $3,000.',
  },
  {
    question: 'Do points always lower my monthly payment?',
    answer:
      'Discount points are intended to reduce the interest rate, which may lower the monthly principal-and-interest payment. The impact depends on the rate reduction and the loan terms.',
  },
  {
    question: 'Where do points appear on mortgage disclosures?',
    answer:
      'Points are generally shown on the Loan Estimate and Closing Disclosure, typically within the sections that break down loan costs and origination charges.',
  },
  {
    question: 'Are points included in APR?',
    answer:
      'Discount points and certain lender/broker fees are often included in APR calculations under federal disclosure rules, which is one reason APR can be higher than the interest rate.',
  },
];

export default function WhatIsMortgagePointsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({
    headline: 'What Are Mortgage Points? A Guide for U.S. Homebuyers',
    description:
      'Mortgage points are upfront charges that can affect the interest rate, APR, and total closing costs. This educational guide explains discount points, origination-related charges, and how to compare offers using disclosures.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Are Mortgage Points? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Mortgage offers often include a mix of interest rates and upfront costs. One term that commonly appears in U.S. mortgage
            disclosures is <strong>points</strong>. Points can be confusing because they may refer to fees that reduce the interest rate,
            or to other origination-related charges depending on the loan.
          </p>
          <p className="text-gray-700">
            This guide explains what mortgage points are, how they work, where they appear on the Loan Estimate and Closing Disclosure,
            and how to compare offers in a consistent way.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>mortgage point</strong> is an upfront charge paid at closing. The most common type is a{' '}
            <strong>discount point</strong>, which is generally paid to obtain a lower interest rate.
          </p>
          <p className="text-gray-700 mb-4">
            A common convention is:
          </p>
          <div className="bg-gray-50 border-l-4 border-primary p-4 mb-4 rounded">
            <p className="font-mono font-semibold text-gray-900">1 point = 1% of the loan amount</p>
          </div>
          <p className="text-gray-700">
            Points may be paid by the borrower, covered through lender credits (often linked to a higher interest rate), or paid by a seller
            as part of a negotiated transaction — subject to program rules and lender policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The relationship between points and the interest rate is a pricing tradeoff. Paying more upfront may reduce the rate, which can
            lower the monthly principal-and-interest payment. Choosing fewer points (or receiving lender credits) may reduce upfront cash needs
            but can increase the interest rate.
          </p>
          <p className="text-gray-700 mb-4">
            Federal disclosure rules under TILA and TRID require standardized forms so borrowers can compare costs. Points and origination-related
            charges are typically shown on the <strong>Loan Estimate</strong> and finalized on the <strong>Closing Disclosure</strong>.
          </p>
          <p className="text-gray-700">
            Because points are part of the “finance charge” in many scenarios, they may affect <strong>APR</strong>, which is designed to help
            compare the yearly cost of borrowing across offers with different fees and rates.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Two lenders offer the same loan amount and term, but different rate/points options:
          </p>
          <div className="grid gap-6 md:grid-cols-2 mb-4">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Option A</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Rate: 6.50%</li>
                <li>Points: 0</li>
                <li>Upfront loan costs: lower</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Option B</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Rate: 6.25%</li>
                <li>Points: 1.0 (≈ 1% of loan amount)</li>
                <li>Upfront loan costs: higher</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700">
            Option B may lower the monthly payment, but requires more upfront cash. A borrower reviewing both options might compare monthly savings
            against the upfront cost to understand how long it takes for the lower payment to offset the points (sometimes described as a break-even timeframe).
            This is an educational comparison example; actual pricing varies by lender and market conditions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Flexible tradeoffs</strong> — Points allow choices between upfront cost and ongoing payment.</li>
                <li><strong>Transparent disclosures</strong> — Points are generally visible on LE/CD forms.</li>
                <li><strong>APR comparison support</strong> — Points often feed into APR, helping compare offers.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>Higher cash-to-close</strong> — Paying points increases upfront costs.</li>
                <li><strong>Break-even depends on time</strong> — If the loan is refinanced or the home is sold early, the benefit may differ from expectations.</li>
                <li><strong>Easy to miscompare</strong> — Comparing rates without considering points can be misleading.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Comparing interest rates without comparing points</strong>
              <p className="text-gray-700 mt-1">A lower rate may come with higher points or fees.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Assuming points always “pay off”</strong>
              <p className="text-gray-700 mt-1">Whether points are cost-effective depends on time horizon and total costs.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Confusing discount points with origination charges</strong>
              <p className="text-gray-700 mt-1">Disclosures may show multiple fee line items. The labels and totals matter.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Ignoring lender credits</strong>
              <p className="text-gray-700 mt-1">Credits can reduce upfront costs but are often associated with a higher rate.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Not reviewing LE and CD side-by-side</strong>
              <p className="text-gray-700 mt-1">TRID forms are designed for comparison; changes can be identified before closing.</p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage points">
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
            <li>Truth in Lending Act (TILA)</li>
            <li>RESPA and TRID disclosure resources</li>
            <li>Freddie Mac and Fannie Mae consumer education materials</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
            <li><a href="https://www.freddiemac.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">freddiemac.com</a></li>
          </ul>
        </section>

        <RelatedLinks
          guides={[
            { label: 'What is APR', href: '/mortgage/what-is-apr' },
            { label: "Today's Mortgage Rates", href: '/mortgage/todays-mortgage-rates' },
          ]}
          glossary={[{ label: 'Mortgage Points', href: '/mortgage-glossary/mortgage-points' }]}
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
