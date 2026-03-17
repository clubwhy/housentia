import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Loan Boarding Process Explained | Housentia',
  description:
    'Loan boarding is when the servicer adds your loan to their system after closing. Learn what happens during the mortgage loan boarding process and what it means for you.',
  openGraph: {
    title: 'Mortgage Loan Boarding Process Explained | Housentia',
    description: 'Understand the mortgage loan boarding process.',
  },
};

const ARTICLE_SLUG = 'mortgage-loan-boarding-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Loan Boarding Process Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-loan-boarding-process';

const FAQ_ITEMS = [
  {
    question: 'What is loan boarding?',
    answer:
      'Loan boarding is when the mortgage servicer adds your loan to their servicing system after closing. They enter your loan amount, interest rate, mortgage payment, and other details. Until boarding is complete, you may not be able to set up online access or make payments. Your terms were set at closing—boarding is the servicer setting up to collect.',
  },
  {
    question: 'How long does loan boarding take?',
    answer:
      'Typically a few days to two weeks after closing. The lender sends the loan file to the servicer, and the servicer enters the data and activates the account. Delays can occur during busy periods. Your first mortgage payment is usually due about a month after closing, so there is typically time.',
  },
  {
    question: 'When will I receive my first statement?',
    answer:
      'Usually within a few weeks of closing, after the loan is boarded. Your first statement will show your mortgage payment amount, due date, and how to make payments. If you do not receive one, contact your servicer. The Closing Disclosure (provided under TRID) shows your servicer.',
  },
  {
    question: 'Can I make a payment before boarding is complete?',
    answer:
      'It depends. Some servicers accept payments before the account is fully set up; others ask you to wait. Your Closing Disclosure and welcome materials will indicate when and how to make your first payment. When in doubt, contact your servicer.',
  },
  {
    question: 'Does loan boarding affect my interest rate or Loan Estimate?',
    answer:
      'No. Boarding happens after closing. Your loan amount, interest rate, mortgage payment, and closing costs were set in your Loan Estimate and Closing Disclosure before closing. Boarding is the servicer adding your loan to their system—it does not change your terms.',
  },
  {
    question: 'Who is my servicer?',
    answer:
      'Your servicer is the company that collects your mortgage payments and manages your account. You may receive your Loan Estimate from a lender that later transfers servicing. The Closing Disclosure (at least 3 days before closing under TRID) shows who will service your loan. RESPA requires servicer disclosure.',
  },
];

export default function MortgageLoanBoardingProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Loan Boarding Process Explained',
    description:
      'Loan boarding is when the servicer adds your loan to their system. Learn what it means for you.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Loan Boarding Process Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Loan boarding</strong> is the process of adding your mortgage to the servicer&apos;s system after
            closing. The servicer receives the loan file from the lender, enters your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, <strong>mortgage payment</strong>, and other details, and sets up your
            account so they can collect payments, manage escrow, and send statements.
          </p>
          <p className="text-gray-700 mb-4">
            As a borrower, you typically do not need to do anything. Your terms were set at closing—shown on your{' '}
            <strong>Loan Estimate</strong> and Closing Disclosure under TRID. Boarding is the servicer&apos;s internal
            process. RESPA (Real Estate Settlement Procedures Act) governs servicing and requires servicer disclosure.
            See <Link href="/mortgage/mortgage-funding-process" className="text-primary hover:underline font-medium">Mortgage Funding Process</Link> and{' '}
            <Link href="/mortgage/mortgage-escrow-setup-process" className="text-primary hover:underline font-medium">Mortgage Escrow Setup Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            After closing, the lender funds the loan and may sell it or transfer servicing. The servicer is the company
            that collects your <strong>mortgage payment</strong>. Before they can do that, they must board the loan—add
            it to their system with your <strong>loan amount</strong>, <strong>interest rate</strong>, due date, and
            escrow information (if applicable).
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>closing costs</strong> and terms were finalized on the Closing Disclosure before closing.
            Boarding does not change them. Until boarding is complete, you may not be able to register for online
            access or make a payment. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Boarding steps table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens During Boarding</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Step</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">1. Loan file received</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender sends closed loan file to servicer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">2. Data entry</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Servicer enters loan amount, rate, payment, due date</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">3. Escrow setup</td>
                  <td className="px-4 py-3 text-sm text-gray-700">If applicable, escrow account created</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">4. Account activation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Borrower account created; online access available</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">5. First statement</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Welcome materials and first statement sent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-3">
            See <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-primary hover:underline font-medium">Mortgage Payment Setup After Closing</Link>
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After you close, the lender funds the <strong>loan amount</strong> and the deed is recorded. The lender
            may sell the loan or retain it. Either way, a servicer is assigned—often the lender itself or another
            company. The servicer receives the loan file and begins boarding.
          </p>
          <p className="text-gray-700 mb-4">
            The servicer enters your <strong>interest rate</strong>, <strong>mortgage payment</strong>, due date, and
            escrow details (if you have an escrow account). Under RESPA, you must receive a transfer of servicing
            notice if your loan is sold and servicing changes. Your Closing Disclosure (provided under TRID at least 3
            days before closing) shows who will service your loan. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex closes on a $300,000 loan at 6.5% <strong>interest rate</strong>. The <strong>mortgage payment</strong> (P&I
            plus escrow) is $2,350. The Closing Disclosure shows the lender will service the loan. Three days after
            closing, the lender&apos;s servicing department receives the loan file and begins boarding.
          </p>
          <p className="text-gray-700 mb-4">
            Within a week, Alex receives a welcome letter and can register for online access. The first statement
            arrives about two weeks after closing. The first payment is due 35 days after closing—plenty of time for
            boarding to complete. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 2: Timeline callout */}
        <div className="mb-10 rounded-xl border-l-4 border-green-500 bg-green-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-green-900 mb-2">Typical Timeline</h3>
          <p className="text-green-800 text-[15px] leading-relaxed">
            Boarding usually takes a few days to two weeks after closing. Your first <strong>mortgage payment</strong> is
            typically due about a month after closing, so there is usually enough time. If you do not receive a welcome
            letter or statement within two weeks, contact your servicer. Your Closing Disclosure has the servicer
            contact information.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding loan boarding helps you know when to expect your first statement and when you can set up
            payments. First-time buyers may try to make a payment immediately—some servicers accept it; others ask you
            to wait until the account is active. Your Closing Disclosure and welcome materials will explain.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> do
            not change during boarding. They were set at closing. Boarding is the servicer&apos;s administrative step.
            See <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of the Boarding Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Standardized process across servicers</li>
                <li>First payment typically not due for a month</li>
                <li>RESPA requires servicer disclosure</li>
                <li>Borrowers typically do not need to act</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Online access may not work until boarding complete</li>
                <li>Delays can occur during busy periods</li>
                <li>Timing varies by lender and servicer</li>
                <li>Servicing may be transferred (RESPA notice required)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Expecting to pay immediately:</strong> Some servicers need time to board. Your first payment is typically due about a month after closing. Check your Closing Disclosure for the due date.</li>
            <li><strong>Ignoring the welcome letter:</strong> The servicer sends instructions for making payments and setting up online access. Keep it and follow the steps.</li>
            <li><strong>Assuming boarding changes your terms:</strong> Boarding does not change your <strong>loan amount</strong>, <strong>interest rate</strong>, or <strong>mortgage payment</strong>. Those were set at closing.</li>
            <li><strong>Not saving servicer contact info:</strong> Your Closing Disclosure shows the servicer. Save their contact information. You will need it for payments and questions.</li>
            <li><strong>Confusing the lender with the servicer:</strong> The lender may originate the loan but another company may service it. The servicer collects your <strong>mortgage payment</strong>. RESPA requires disclosure of servicing transfers.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about loan boarding">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage servicing rules</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
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
            Procedures vary by lender and servicer.
          </p>
        </section>
      </main>
    </div>
  );
}
