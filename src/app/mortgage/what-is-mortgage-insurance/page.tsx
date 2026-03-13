import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Mortgage Insurance? A Guide for U.S. Homebuyers | Housentia',
  description:
    'Mortgage insurance protects lenders when borrowers put down less than 20%. Learn about PMI, FHA MIP, and how mortgage insurance works across different loan types.',
  openGraph: {
    title: 'What Is Mortgage Insurance? A Guide for U.S. Homebuyers | Housentia',
    description:
      'Understand mortgage insurance: PMI for conventional loans, MIP for FHA loans, and how it affects your monthly payment.',
  },
};

const ARTICLE_SLUG = 'what-is-mortgage-insurance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is Mortgage Insurance?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-mortgage-insurance';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage insurance?',
    answer:
      'Mortgage insurance is a product that protects the lender (or loan investor) if the borrower defaults. It is often required when the borrower finances more than 80% of the home\'s value (LTV above 80%).',
  },
  {
    question: 'Is mortgage insurance the same as homeowner\'s insurance?',
    answer:
      'No. Homeowner\'s insurance protects against property damage (fire, theft, etc.). Mortgage insurance protects the lender against borrower default and does not cover property risks.',
  },
  {
    question: 'What types of mortgage insurance exist?',
    answer:
      'Common types include: PMI (private mortgage insurance) for conventional loans, MIP (mortgage insurance premium) for FHA loans, and the VA funding fee for VA loans. Each has different rules and costs.',
  },
  {
    question: 'When can PMI be removed on a conventional loan?',
    answer:
      'Under the Homeowners Protection Act, borrower-paid PMI on many conventional loans can often be canceled at 80% LTV (with conditions) and must terminate automatically at 78% LTV if the borrower is current. FHA and VA loans follow different rules.',
  },
  {
    question: 'Does every mortgage require mortgage insurance?',
    answer:
      'No. Loans with 20% or more down (80% LTV or below) typically do not require PMI on conventional loans. FHA loans generally require mortgage insurance regardless of down payment.',
  },
];

export default function WhatIsMortgageInsurancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is Mortgage Insurance? A Guide for U.S. Homebuyers',
    description:
      'Mortgage insurance protects lenders when borrowers put down less than 20%. This guide explains PMI, FHA MIP, and how mortgage insurance works across conventional, FHA, and VA loans.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Mortgage Insurance? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or
          mortgage advice.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When buying a home in the United States, many borrowers encounter the term &quot;mortgage insurance&quot; —
            especially if they are making a down payment of less than 20%. Mortgage insurance is a product that protects
            the lender when the borrower has less equity in the home at closing.
          </p>
          <p className="text-gray-700 mb-4">
            It is important to note that mortgage insurance is <strong>not</strong> the same as homeowner&apos;s
            insurance. Homeowner&apos;s insurance protects you against property risks such as fire or theft. Mortgage
            insurance protects the lender if the borrower stops making payments.
          </p>
          <p className="text-gray-700">
            This guide explains what mortgage insurance is, the main types (PMI for conventional loans, MIP for FHA
            loans), how it appears on your disclosures, and when it may end. For detailed information about private
            mortgage insurance on conventional loans, see our{' '}
            <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">
              What Is PMI?
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage insurance</strong> is a protection product that typically protects the lender (or the
            investor who purchases the loan) when the borrower defaults. It does not guarantee loan approval and does
            not remove the borrower&apos;s obligation to repay the loan.
          </p>
          <p className="text-gray-700 mb-4">
            Mortgage insurance is often required when the borrower finances more than 80% of the home&apos;s value —
            expressed as an LTV (loan-to-value) ratio above 80%. This is because lenders typically view higher LTV
            loans as riskier.
          </p>
          <p className="text-gray-700 mb-4">
            The cost of mortgage insurance is usually borne by the borrower, either as a monthly premium, an upfront
            fee, or a combination. The structure and rules vary by loan type.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Mortgage Insurance</h2>
          <p className="text-gray-700 mb-4">
            Different loan programs use different mortgage insurance structures. Understanding the main types can help
            you compare loan options.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">PMI (Private Mortgage Insurance)</h3>
              <p className="text-gray-700 mb-2">
                Used for <strong>conventional loans</strong> when the down payment is less than 20%. PMI is provided by
                private insurers and typically can be canceled or terminated once the borrower reaches certain equity
                thresholds (e.g., 80% LTV) under the Homeowners Protection Act.
              </p>
              <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">
                Learn more about PMI →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">FHA MIP (Mortgage Insurance Premium)</h3>
              <p className="text-gray-700 mb-2">
                Used for <strong>FHA loans</strong>. FHA loans generally require mortgage insurance regardless of down
                payment. MIP includes an upfront premium (often financed into the loan) and an annual premium paid
                monthly. MIP rules differ from PMI and may apply for the life of the loan in some cases.
              </p>
              <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">
                Learn more about FHA loans →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">VA Funding Fee</h3>
              <p className="text-gray-700 mb-2">
                <strong>VA loans</strong> do not use traditional mortgage insurance. Instead, VA loans may charge a
                one-time funding fee that helps support the VA loan program. VA loans often allow no down payment
                without requiring PMI or MIP.
              </p>
              <Link href="/mortgage/va-loan" className="text-primary hover:underline font-medium">
                Learn more about VA loans →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Mortgage insurance is typically tied to the <strong>loan-to-value (LTV)</strong> ratio. When you borrow
            more than 80% of the home&apos;s value, lenders often require insurance as a form of credit enhancement.
          </p>
          <p className="text-gray-700 mb-4">
            The cost of mortgage insurance should appear on your <strong>Loan Estimate</strong> and{' '}
            <strong>Closing Disclosure</strong> as part of the estimated monthly payment and closing costs, when
            applicable. TRID rules require lenders to present these costs in standardized formats so borrowers can
            compare offers.
          </p>
          <p className="text-gray-700">
            Rules for when mortgage insurance can end vary by program. For conventional loans with PMI, the Homeowners
            Protection Act (HPA) governs cancellation and termination. FHA and VA loans follow different rules.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Consider a borrower who puts down 10% on a $400,000 home with a conventional loan.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-4">
            <ul className="text-gray-700 space-y-1">
              <li>Home price: $400,000</li>
              <li>Down payment: $40,000 (10%)</li>
              <li>Loan amount: $360,000</li>
            </ul>
            <p className="text-gray-700 mt-3 font-mono">
              LTV = $360,000 ÷ $400,000 = <strong>90%</strong>
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            Because the LTV is above 80%, many conventional loans in this scenario typically require PMI. The PMI
            premium would appear as a monthly line item in the payment estimate on the Loan Estimate and would be
            included in the estimated total monthly payment.
          </p>
          <p className="text-gray-700">
            The specific cost and duration depend on the loan terms, the borrower&apos;s profile, and the lender&apos;s
            structure. This example is for educational illustration only.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li>
                  <strong>Enables smaller down payments</strong> — Mortgage insurance can make homeownership possible
                  with less cash at closing.
                </li>
                <li>
                  <strong>Potentially removable (PMI)</strong> — For many conventional loans, PMI can end after reaching
                  certain thresholds, depending on the loan and payment history.
                </li>
                <li>
                  <strong>Standardized disclosures</strong> — Costs are typically shown on Loan Estimates and Closing
                  Disclosures, supporting transparency.
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li>
                  <strong>Higher total cost</strong> — Mortgage insurance adds a recurring premium (or rate impact) that
                  increases the cost of borrowing.
                </li>
                <li>
                  <strong>Rules vary by program</strong> — PMI, MIP, and VA funding fees each have different rules and
                  durations.
                </li>
                <li>
                  <strong>Not the same as homeowner&apos;s insurance</strong> — Mortgage insurance does not protect
                  against property damage; it protects the lender.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Confusing mortgage insurance with homeowner&apos;s insurance</strong>
              <p className="text-gray-700 mt-1">
                Homeowner&apos;s insurance protects you against property risks. Mortgage insurance protects the lender
                against borrower default.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Assuming all loan types use the same insurance</strong>
              <p className="text-gray-700 mt-1">
                Conventional loans use PMI. FHA loans use MIP. VA loans use a funding fee. Each has different rules and
                costs.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Ignoring LTV when planning</strong>
              <p className="text-gray-700 mt-1">
                Understanding LTV helps you anticipate when mortgage insurance may be required and when it might end.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Not reviewing insurance costs on disclosures</strong>
              <p className="text-gray-700 mt-1">
                Mortgage insurance costs should appear on the Loan Estimate and Closing Disclosure; reviewing these
                forms can help you compare scenarios.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage insurance">
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
          <p className="text-gray-700 mb-4">
            This guide is based on publicly available consumer education and regulatory resources, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>Homeowners Protection Act (HPA)</li>
            <li>U.S. Department of Housing and Urban Development (HUD)</li>
            <li>Federal Housing Administration (FHA)</li>
            <li>Department of Veterans Affairs (VA)</li>
            <li>Fannie Mae</li>
            <li>Freddie Mac</li>
          </ul>
          <p className="text-gray-700 mb-4">Readers may consult the following resources for additional information:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <a
                href="https://www.consumerfinance.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                consumerfinance.gov
              </a>
            </li>
            <li>
              <a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                hud.gov
              </a>
            </li>
            <li>
              <a href="https://www.fanniemae.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                fanniemae.com
              </a>
            </li>
            <li>
              <a href="https://www.freddiemac.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                freddiemac.com
              </a>
            </li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Private Mortgage Insurance (PMI)', href: '/mortgage-glossary/private-mortgage-insurance' }]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or
            mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm mb-2">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and borrower circumstances.
          </p>
          <p className="text-gray-700 text-sm">
            Readers should consult a licensed mortgage professional or financial advisor for advice specific to their
            situation.
          </p>
        </section>
      </main>
    </div>
  );
}
