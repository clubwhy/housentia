import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is LTV? A Guide for U.S. Homebuyers | Housentia',
  description:
    'LTV (loan-to-value) compares your mortgage amount to the home’s value. Learn how LTV is calculated, why it matters for underwriting, and how it relates to down payments and mortgage insurance.',
  openGraph: {
    title: 'What Is LTV? A Guide for U.S. Homebuyers | Housentia',
    description:
      'LTV compares loan amount to home value. Learn how it’s calculated and why it matters in U.S. mortgages.',
  },
};

const BREADCRUMBS = [{ label: 'Mortgage', href: '/mortgage' }, { label: 'What Is LTV?' }];
const PAGE_URL = 'https://housentia.com/mortgage/what-is-ltv';

const FAQ_ITEMS = [
  {
    question: 'What does LTV stand for?',
    answer:
      'LTV stands for loan-to-value ratio. It compares the loan amount to the home’s value (purchase price or appraised value) and is expressed as a percentage.',
  },
  {
    question: 'How do you calculate LTV?',
    answer:
      'LTV is calculated as loan amount ÷ property value. For example, a $240,000 loan on a $300,000 home is 80% LTV.',
  },
  {
    question: 'Why does LTV matter for a mortgage?',
    answer:
      'Lenders use LTV to understand risk and to determine requirements such as mortgage insurance and pricing adjustments. Higher LTV generally means less borrower equity at closing.',
  },
  {
    question: 'Is LTV the same as down payment?',
    answer:
      'They are related but not the same. Down payment is the cash you put down. LTV reflects how much of the home’s value is financed. A 20% down payment typically corresponds to 80% LTV.',
  },
  {
    question: 'Does LTV change over time?',
    answer:
      'It can. As you pay down principal or if the home’s value changes, your effective LTV may change. However, many program thresholds are based on “original value” or specific appraisal events.',
  },
];

export default function WhatIsLTVPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({
    headline: 'What Is LTV? A Guide for U.S. Homebuyers',
    description:
      'LTV (loan-to-value ratio) compares the mortgage amount to the home’s value. This educational guide explains how LTV is calculated and why it affects mortgage insurance, eligibility, and pricing.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is LTV? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            In U.S. mortgages, lenders look at several measurements to understand how a loan fits within program
            guidelines and how much equity a borrower has at closing. One of the most common measurements is LTV, short
            for <strong>loan-to-value ratio</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            LTV is a simple comparison: it looks at the mortgage amount relative to the home’s value. You’ll see LTV
            referenced in discussions about down payments, mortgage insurance, refinancing, and eligibility thresholds.
          </p>
          <p className="text-gray-700">
            Understanding LTV can help homebuyers interpret disclosures, compare scenarios, and recognize why two loans
            with the same rate might still have different costs due to risk-based pricing or mortgage insurance rules.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Loan-to-value (LTV)</strong> measures how much of a property’s value is being financed. It is
            expressed as a percentage.
          </p>
          <p className="text-gray-700 mb-4">A common formula is:</p>
          <div className="bg-gray-50 border-l-4 border-primary p-4 mb-4 rounded">
            <p className="font-mono font-semibold text-gray-900">LTV = Loan Amount ÷ Property Value</p>
          </div>
          <p className="text-gray-700 mb-4">
            In purchase transactions, “property value” may be based on the lower of the purchase price or appraised
            value (depending on program rules). In refinancing, it’s often based on an appraisal value used for the new
            loan.
          </p>
          <p className="text-gray-700">
            In general terms, a <strong>lower LTV</strong> means the borrower has more equity (often associated with a
            larger down payment). A <strong>higher LTV</strong> means the borrower is financing more of the property’s
            value, which can increase risk and may affect mortgage insurance requirements or pricing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            LTV is used throughout the mortgage process as part of underwriting and pricing. While it does not, by
            itself, determine approval, it commonly influences:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>
              <strong>Mortgage insurance</strong>: Conventional loans often require PMI above certain LTV thresholds.
              FHA loans use different insurance rules (MIP).
            </li>
            <li>
              <strong>Program eligibility</strong>: Some programs have maximum LTV limits for certain scenarios.
            </li>
            <li>
              <strong>Pricing adjustments</strong>: Risk-based pricing may vary by LTV and other factors (for example,
              credit and loan type).
            </li>
            <li>
              <strong>Refinancing options</strong>: High LTV can limit refinancing, or change what types of refinances
              are available.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            LTV is closely connected to the down payment. A higher down payment generally lowers the loan amount and
            reduces LTV. In contrast, smaller down payments increase LTV.
          </p>
          <p className="text-gray-700">
            Lenders may also reference related ratios such as <strong>CLTV (combined LTV)</strong>, which accounts for
            multiple loans secured by the property (for example, a first mortgage plus a HELOC).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">Here is a simplified example of how LTV is calculated in a purchase:</p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-4">
            <ul className="text-gray-700 space-y-1">
              <li>Home price: $350,000</li>
              <li>Down payment: $70,000 (20%)</li>
              <li>Loan amount: $280,000</li>
            </ul>
            <p className="text-gray-700 mt-3 font-mono">
              LTV = $280,000 ÷ $350,000 = <strong>80%</strong>
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            In many conventional scenarios, 80% LTV is an important threshold because mortgage insurance requirements
            often change around that level. However, exact rules vary by program and lender, and insurance requirements
            differ for FHA and VA loans.
          </p>
          <p className="text-gray-700">
            LTV is only one part of a broader underwriting picture that can include credit history, DTI, assets, and
            property details.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li>
                  <strong>Simple indicator of equity</strong> — LTV helps summarize how much of the home is financed
                  versus paid upfront.
                </li>
                <li>
                  <strong>Supports consistent underwriting</strong> — LTV is widely used across loan programs and
                  underwriting systems, which helps standardize evaluation.
                </li>
                <li>
                  <strong>Helpful for scenario comparison</strong> — LTV can help you compare down payment options and
                  understand how financing changes may affect costs such as mortgage insurance.
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li>
                  <strong>Doesn’t reflect the full picture</strong> — LTV does not measure income stability, credit
                  risk, or cash reserves.
                </li>
                <li>
                  <strong>Depends on property value assumptions</strong> — Appraisals and value definitions can affect
                  the ratio.
                </li>
                <li>
                  <strong>Can be misinterpreted</strong> — A “good” LTV depends on loan type, program rules, and the
                  overall application, not a single universal number.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Confusing LTV with DTI</strong>
              <p className="text-gray-700 mt-1">
                LTV is about the loan and the property value. DTI is about monthly debts compared to income. Both may
                matter, but they measure different things.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Assuming purchase price always equals value</strong>
              <p className="text-gray-700 mt-1">
                Many programs use the lower of purchase price or appraised value. If an appraisal comes in lower than
                expected, the effective LTV may be higher than planned.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Ignoring combined liens</strong>
              <p className="text-gray-700 mt-1">
                If there is a second loan (like a HELOC), lenders may consider CLTV, not just the first mortgage LTV.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Thinking LTV alone determines mortgage insurance</strong>
              <p className="text-gray-700 mt-1">
                Mortgage insurance rules differ by loan type. Conventional PMI, FHA MIP, and VA funding fees operate
                under different frameworks.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Treating thresholds as guarantees</strong>
              <p className="text-gray-700 mt-1">
                Thresholds like 80% are common reference points, but program rules and lender overlays vary.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about LTV">
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
            This guide is based on publicly available consumer education and program resources, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>Federal Housing Finance Agency (FHFA)</li>
            <li>Fannie Mae</li>
            <li>Freddie Mac</li>
            <li>U.S. Department of Housing and Urban Development (HUD)</li>
            <li>Federal Housing Administration (FHA)</li>
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
              <a href="https://www.fhfa.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                fhfa.gov
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

        <RelatedLinks
          guides={[
            { label: 'Conventional Loan Guide', href: '/mortgage/conventional-loan' },
            { label: 'FHA Loan Guide', href: '/mortgage/fha-loan' },
          ]}
          glossary={[{ label: 'LTV', href: '/mortgage-glossary/ltv' }]}
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
