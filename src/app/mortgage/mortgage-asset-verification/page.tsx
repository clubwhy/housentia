import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Asset Verification: What Lenders Check | Housentia',
  description:
    'Lenders verify assets through bank statements and investment accounts. Learn how mortgage asset verification works, what documents you need, and how large deposits are handled.',
  openGraph: {
    title: 'Mortgage Asset Verification: What Lenders Check | Housentia',
    description: 'Understand how lenders verify assets for mortgage approval.',
  },
};

const ARTICLE_SLUG = 'mortgage-asset-verification';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Asset Verification',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-asset-verification';

const FAQ_ITEMS = [
  {
    question: 'What assets do lenders verify?',
    answer:
      'Lenders verify the accounts you use for your down payment, closing costs, and reserves. This typically includes checking, savings, and sometimes investment or retirement accounts. Your Loan Estimate and mortgage payment are based on your loan amount—assets fund the down payment and closing costs.',
  },
  {
    question: 'How far back do bank statements need to go?',
    answer:
      'Most lenders request 2 months of bank statements. They want to see the source of funds and that balances are consistent. Large or unusual deposits may require a letter of explanation. Provide statements for all accounts you use for down payment, closing costs, or reserves.',
  },
  {
    question: 'What is a large deposit?',
    answer:
      'A large deposit is typically any deposit that is not from your regular paycheck or a recurring source. Lenders may ask for a letter of explanation and documentation (e.g., sale of asset, gift letter) to verify the source and ensure it is not a loan.',
  },
  {
    question: 'Can I use gift funds for my down payment?',
    answer:
      'Yes, in many cases. You will need a gift letter stating the amount, that it is a gift (not a loan), and the donor\'s relationship to you. The donor may need to provide bank statements showing the funds. See our Gift Funds for Down Payment guide.',
  },
  {
    question: 'How does asset verification affect my Loan Estimate?',
    answer:
      'Under TRID, your Loan Estimate shows the loan amount, interest rate, mortgage payment, and closing costs. The lender verifies that you have funds for the down payment and closing costs. If verified assets differ or large deposits cannot be explained, your approval could be delayed or terms could change.',
  },
  {
    question: 'What are reserves and why do they matter?',
    answer:
      'Reserves are liquid assets you have after closing. Lenders may require 2–24 months of PITI in reserves. Reserves show you can make mortgage payments if income is temporarily disrupted. Requirements vary by loan type and your profile.',
  },
];

export default function MortgageAssetVerificationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Asset Verification: What Lenders Check',
    description:
      'Lenders verify assets through bank statements and investment accounts. Learn how it works and what you need.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Asset Verification: What Lenders Check" breadcrumbs={BREADCRUMBS} />
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
            Lenders verify your <strong>assets</strong> to ensure you have funds for the down payment, <strong>closing costs</strong>, and reserves. Asset verification typically involves reviewing bank statements and sometimes investment or retirement account statements. Your assets fund the cash you bring to closing—which affects your <strong>loan amount</strong> and <strong>LTV</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), your <strong>Loan Estimate</strong> shows the estimated
            <strong> closing costs</strong> and cash to close. The lender verifies that you have the funds during{' '}
            <strong>underwriting</strong>. Large or unexplained deposits may require a letter of explanation. See{' '}
            <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link> and{' '}
            <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Your down payment and <strong>closing costs</strong> reduce the <strong>loan amount</strong> you need—or
            increase the home price you can afford. Lenders want to see that the funds are yours (or properly gifted) and
            that they have been in your account long enough to be considered seasoned. A large, unexplained deposit may
            be treated as a loan—which would add to your debt and affect your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) require accurate disclosure
            of the cost of credit. Your <strong>Loan Estimate</strong> and Closing Disclosure show the cash to close.
            The lender verifies that you have the assets to cover it. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>,{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Assets that count table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Assets Lenders Typically Verify</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Asset Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Use</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Documents</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Checking & savings</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Down payment, closing costs, reserves</td>
                  <td className="px-4 py-3 text-sm text-gray-700">2 months statements</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Investment accounts</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Down payment, reserves</td>
                  <td className="px-4 py-3 text-sm text-gray-700">2 months statements</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Retirement (401k, IRA)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Reserves; some allow % for down payment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Statement; vesting rules apply</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Gift funds</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Down payment (when allowed)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Gift letter, donor statements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender and loan type.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, you list the accounts you will use for the down payment and <strong>closing costs</strong>. The
            lender requests 2 months of statements for checking, savings, and any investment accounts. During{' '}
            <strong>underwriting</strong>, they trace the source of funds. They look for large deposits—any deposit not
            from your regular paycheck or a recurring source. Large deposits may require a letter of explanation and
            documentation (e.g., gift letter, sale agreement).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Reserves</strong> are liquid assets you have after closing. Lenders may require 2–24 months of PITI
            (principal, interest, taxes, insurance) in reserves. Reserves show you can make your <strong>mortgage payment</strong> if
            income is temporarily disrupted. Retirement accounts may count for reserves at a discounted percentage. See{' '}
            <Link href="/mortgage/what-is-mortgage-reserve-requirement" className="text-primary hover:underline font-medium">What Is Mortgage Reserve Requirement</Link>.
          </p>
          <p className="text-gray-700">
            Gift funds require a gift letter stating the amount, that it is a gift (not a loan), and the donor&apos;s
            relationship. The donor may need to provide bank statements. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex is buying a $360,000 home with 10% down. The <strong>loan amount</strong> is $324,000. Alex needs
            $36,000 for the down payment plus about $9,000 for <strong>closing costs</strong>—$45,000 total. Alex has
            $52,000 in a savings account. Alex provides 2 months of bank statements.
          </p>
          <p className="text-gray-700 mb-4">
            The lender notices a $15,000 deposit 3 weeks ago. Alex provides a letter of explanation: it was a gift from a
            parent for the down payment. Alex obtains a gift letter and the parent&apos;s bank statement showing the
            transfer. Underwriting clears the condition. Alex receives clear to close. If Alex had not documented the
            gift, the lender might have excluded the $15,000 from usable funds—leaving Alex short. The example is
            illustrative.
          </p>
        </section>

        {/* Design object 2: Large deposit callout */}
        <div className="mb-10 rounded-xl border-l-4 border-amber-500 bg-amber-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Large Deposit? Be Prepared to Explain</h3>
          <p className="text-amber-800 text-[15px] leading-relaxed">
            Deposits that are not from your regular paycheck may require a letter of explanation and documentation. Common sources: gift (gift letter + donor statements), sale of asset (bill of sale, receipt), tax refund (copy of refund), or bonus (pay stub). Undocumented deposits may be excluded from your usable funds.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, the down payment and closing costs can be a large sum. Having your funds in place
            and documented before you apply can speed up <strong>underwriting</strong>. If you receive a gift, get the
            gift letter and donor statements early. Avoid moving money between accounts right before applying—it can
            create a paper trail that requires explanation.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> and <strong>loan amount</strong> depend on your down payment. A
            larger down payment means a smaller loan and sometimes a lower <strong>interest rate</strong>. Your assets
            fund that down payment. See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link> and{' '}
            <Link href="/mortgage/what-assets-count-for-mortgage-approval" className="text-primary hover:underline font-medium">What Assets Count for Mortgage Approval</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Asset Verification</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Clear documentation can speed underwriting</li>
                <li>Gift funds can help when allowed by program</li>
                <li>Reserves may improve approval odds</li>
                <li>Seasoned funds typically need less explanation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Large deposits require documentation</li>
                <li>Moving money between accounts can trigger questions</li>
                <li>Retirement accounts may have limited use</li>
                <li>Requirements vary by lender</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not having 2 months of statements ready:</strong> Delays can slow <strong>underwriting</strong>. Pull statements before you apply.</li>
            <li><strong>Making large deposits right before applying:</strong> Unexplained deposits may be excluded. If you receive a gift, document it with a gift letter and donor statements.</li>
            <li><strong>Moving money between accounts without a paper trail:</strong> Transfers can look like new deposits. The lender may ask for both accounts&apos; statements to trace the flow.</li>
            <li><strong>Assuming all assets count:</strong> Some assets (e.g., certain retirement funds, non-liquid assets) may not count or may be discounted. Ask your lender what qualifies.</li>
            <li><strong>Not explaining a large deposit proactively:</strong> If you know the lender will ask, provide the letter of explanation and documentation upfront to avoid conditions.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about asset verification">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Fannie Mae – Selling Guide (asset documentation)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (asset verification)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Cash to Close', href: '/mortgage-glossary/cash-to-close' }]}
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
          <p className="text-gray-700 text-sm">
            Asset verification requirements vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
