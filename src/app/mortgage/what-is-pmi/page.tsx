import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is PMI? A Guide for U.S. Homebuyers | Housentia',
  description:
    'PMI (private mortgage insurance) is often required on conventional mortgages with low down payments. Learn what PMI is, how it’s paid, how it appears on disclosures, and when it may end.',
  openGraph: {
    title: 'What Is PMI? A Guide for U.S. Homebuyers | Housentia',
    description:
      'PMI is mortgage insurance on many conventional loans with low down payments. Learn how it works and where it shows up in your disclosures.',
  },
};

const BREADCRUMBS = [{ label: 'Mortgage', href: '/mortgage' }, { label: 'What Is PMI?' }];
const PAGE_URL = 'https://housentia.com/mortgage/what-is-pmi';

const FAQ_ITEMS = [
  {
    question: 'What does PMI stand for?',
    answer:
      'PMI stands for private mortgage insurance. It is mortgage insurance that generally applies to conventional loans when the down payment is less than 20%.',
  },
  {
    question: 'Who does PMI protect?',
    answer:
      'PMI typically protects the lender (or the investor in the loan) if the borrower stops making payments. It does not eliminate the borrower’s obligation to repay the loan.',
  },
  {
    question: 'How is PMI paid?',
    answer:
      'PMI may be paid monthly, as an upfront premium at closing, or as a combination—depending on the loan structure and lender options.',
  },
  {
    question: 'When can PMI end on a conventional loan?',
    answer:
      'Under the Homeowners Protection Act (HPA), borrower-paid PMI on many conventional loans can be requested to be canceled at 80% LTV (with conditions) and must terminate automatically at 78% LTV if the borrower is current. FHA and VA loans follow different rules.',
  },
  {
    question: 'Is PMI the same as FHA mortgage insurance?',
    answer:
      'No. PMI is generally used for conventional loans. FHA loans use mortgage insurance premiums (MIP) with different rules and costs.',
  },
];

export default function WhatIsPMIPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({
    headline: 'What Is PMI? A Guide for U.S. Homebuyers',
    description:
      'PMI (private mortgage insurance) is commonly required on conventional loans with low down payments. This educational guide explains what PMI is, how it is paid, and how PMI cancellation and termination generally work under U.S. rules.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is PMI? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            When buying a home in the United States, many borrowers hear about “PMI” — especially if they’re making a
            smaller down payment. PMI stands for <strong>private mortgage insurance</strong>, and it commonly comes up
            with conventional mortgages.
          </p>
          <p className="text-gray-700 mb-4">
            PMI can be confusing because it’s an extra cost that many borrowers pay, but it is not the same thing as
            homeowner’s insurance. It also differs from mortgage insurance used on FHA loans.
          </p>
          <p className="text-gray-700">
            This guide explains what PMI is, how it works, how it appears on your Loan Estimate and Closing Disclosure
            (TRID forms), and what general rules exist for cancellation and termination on many conventional loans.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>PMI</strong> is mortgage insurance that is typically required for many conventional loans when the
            borrower has less than 20% equity at closing — often expressed as an LTV above 80%.
          </p>
          <p className="text-gray-700 mb-4">
            PMI generally protects the lender (or the investor) if the borrower defaults. It does not guarantee approval
            and does not remove the borrower’s responsibility to repay the loan.
          </p>
          <p className="text-gray-700">
            PMI may help some borrowers access conventional financing with smaller down payments, but it increases the
            total cost of the mortgage. PMI terms and costs vary based on factors such as credit profile, LTV, loan type,
            and lender options.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            PMI is typically tied to <strong>LTV</strong>. When a conventional loan finances more than 80% of the home’s
            value, lenders often require PMI as a form of credit enhancement.
          </p>
          <p className="text-gray-700 mb-4">PMI can be structured in several ways:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>
              <strong>Monthly PMI</strong>: A premium added to the monthly mortgage payment.
            </li>
            <li>
              <strong>Upfront PMI</strong>: A one-time premium paid at closing (less common).
            </li>
            <li>
              <strong>Split premium</strong>: A combination of upfront and monthly premiums.
            </li>
            <li>
              <strong>Lender-paid mortgage insurance</strong>: The lender pays PMI but the cost may be reflected in a
              higher interest rate (structure varies).
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            PMI should be disclosed on the <strong>Loan Estimate</strong> and reflected in the <strong>Closing
            Disclosure</strong> as part of the total estimated monthly payment and closing costs, when applicable.
          </p>
          <p className="text-gray-700">
            For many conventional loans, PMI cancellation and termination rules are governed by the{' '}
            <strong>Homeowners Protection Act (HPA)</strong>. FHA and VA programs have different insurance and fee
            structures, and those rules should be reviewed separately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Consider a simplified purchase example where the borrower puts down 10% on a conventional loan.
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
            Because the LTV is above 80%, many conventional loans in this type of scenario typically require PMI. The
            PMI premium might appear as a monthly line item in the payment estimate, and it would be included in the
            estimated “total monthly payment” shown on the Loan Estimate.
          </p>
          <p className="text-gray-700">
            The specific cost and duration of PMI depend on the loan terms, the borrower’s profile, and the lender’s
            PMI structure. This example is for educational illustration only.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li>
                  <strong>Supports smaller down payments</strong> — PMI can make conventional financing possible with
                  less cash at closing.
                </li>
                <li>
                  <strong>Potentially removable</strong> — For many conventional loans, PMI can end after reaching
                  certain thresholds, depending on the loan and payment history.
                </li>
                <li>
                  <strong>Standardized disclosures</strong> — PMI is typically shown on Loan Estimates and Closing
                  Disclosures, supporting transparency.
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li>
                  <strong>Higher total cost</strong> — PMI adds a recurring premium (or rate impact) that increases the
                  cost of borrowing.
                </li>
                <li>
                  <strong>Rules vary</strong> — PMI cancellation and termination depend on the loan type, origination
                  date, payment history, and other factors.
                </li>
                <li>
                  <strong>Not the same across programs</strong> — FHA and VA use different insurance and fee structures,
                  so PMI rules don’t always apply.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Confusing PMI with homeowner’s insurance</strong>
              <p className="text-gray-700 mt-1">
                Homeowner’s insurance protects you against certain property risks. PMI is a credit risk product that
                generally protects the lender if the borrower defaults.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Assuming PMI applies to all loan types</strong>
              <p className="text-gray-700 mt-1">
                PMI is generally associated with conventional loans. FHA loans use MIP, and VA loans have a funding fee
                and different rules.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Treating PMI removal as automatic at 80%</strong>
              <p className="text-gray-700 mt-1">
                Many conventional loans allow borrower-requested cancellation at 80% LTV, but conditions often apply and
                the request may need to be made in writing.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Ignoring appraisal/value concepts</strong>
              <p className="text-gray-700 mt-1">
                HPA thresholds are often based on “original value,” and other cancellation pathways may require
                valuation evidence. Rules vary by loan and servicer.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Not reviewing PMI on disclosures</strong>
              <p className="text-gray-700 mt-1">
                PMI costs and structure should appear on the Loan Estimate and Closing Disclosure; reviewing these forms
                can help you compare scenarios.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about PMI">
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
            <li>Homeowners Protection Act (HPA / PMI Cancellation Act)</li>
            <li>Federal Housing Finance Agency (FHFA)</li>
            <li>Fannie Mae</li>
            <li>Freddie Mac</li>
            <li>U.S. Department of Housing and Urban Development (HUD)</li>
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
