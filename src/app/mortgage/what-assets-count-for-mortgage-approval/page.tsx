import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Assets Count for Mortgage Approval? | Housentia',
  description:
    'Lenders verify assets for down payment, closing costs, and reserves. Learn what assets count and how they are documented.',
  openGraph: { title: 'What Assets Count for Mortgage Approval? | Housentia', description: 'Understand which assets count for mortgage approval.' },
};

const ARTICLE_SLUG = 'what-assets-count-for-mortgage-approval';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Assets Count for Mortgage Approval' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-assets-count-for-mortgage-approval';

const FAQ_ITEMS = [
  {
    question: 'What assets count for a mortgage?',
    answer:
      'Checking, savings, money market, stocks, bonds, retirement accounts (often 60–70% of vested balance), and other liquid assets. Gifts with proper documentation may count for down payment and closing costs. Your Loan Estimate shows the cash to close. See Mortgage Asset Verification and What Is LTV.',
  },
  {
    question: 'Do retirement accounts count?',
    answer:
      'Yes, often at 60–70% of vested balance. Some programs require proof you can access funds (e.g., no penalty for withdrawal). 401(k) loans may count if there is a repayment plan. See What Is Mortgage Reserve Requirement.',
  },
  {
    question: 'Do gift funds count?',
    answer:
      'Yes, for down payment and closing costs if documented with a gift letter and proof of transfer. Lenders have specific rules on eligible donors. See Gift Funds for Down Payment Explained.',
  },
  {
    question: 'What assets do not count?',
    answer:
      'Borrowed funds (unless from a 401(k) loan with repayment plan), unsecured loans, and assets that cannot be verified. Cash that cannot be sourced may not count. See Mortgage Asset Verification.',
  },
  {
    question: 'How do assets affect my loan amount and mortgage payment?',
    answer:
      'Assets fund your down payment and closing costs. A larger down payment reduces your loan amount and may lower your mortgage payment and interest rate. Assets also support reserves. See What Is DTI and What Is Amortization.',
  },
  {
    question: 'When does the lender verify my assets?',
    answer:
      'During underwriting. You provide bank statements (typically 2 months) and other account statements. The lender verifies you have funds for down payment, closing costs, and reserves. Your Loan Estimate (TRID) shows estimated cash to close. See Mortgage Application Documents.',
  },
];

export default function WhatAssetsCountForMortgageApprovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Assets Count for Mortgage Approval?', description: 'Learn which assets count for mortgage approval.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Assets Count for Mortgage Approval?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Assets that count for mortgage approval</strong> include cash, savings, investments, and retirement accounts. Lenders verify assets to ensure you have funds for the down payment, <strong>closing costs</strong>, and reserves. Your assets determine how much you can bring to closing—which affects your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), your <strong>Loan Estimate</strong> shows the estimated cash to close. The lender verifies your assets during <strong>underwriting</strong>. See{' '}
            <Link href="/mortgage/mortgage-asset-verification" className="text-primary hover:underline font-medium">Mortgage Asset Verification</Link>,{' '}
            <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment Explained</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-reserve-requirement" className="text-primary hover:underline font-medium">What Is Mortgage Reserve Requirement</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Lenders need to see that you have the funds for your down payment and <strong>closing costs</strong>. Your down payment reduces your <strong>loan amount</strong> and affects your LTV (loan-to-value). A larger down payment can mean a lower <strong>interest rate</strong> and no PMI (if you reach 20% down). Reserves—liquid assets you have after closing—show you can make <strong>mortgage payments</strong> if income is temporarily disrupted.
          </p>
          <p className="text-gray-700 mb-4">
            Not all assets count equally. Cash in a checking or savings account is fully countable. Retirement accounts may count at 60–70% of the vested balance. Gift funds count if properly documented. Borrowed money (except certain 401(k) loans) typically does not count. Your <strong>Loan Estimate</strong> shows the cash to close. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Asset types table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Asset Types: What Typically Counts</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Asset Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Treatment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Checking, savings, money market</td>
                  <td className="px-4 py-3 text-sm text-gray-700">100% of balance (if verified)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Stocks, bonds, mutual funds</td>
                  <td className="px-4 py-3 text-sm text-gray-700">100% of liquid value (if accessible)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Retirement (401k, IRA, etc.)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often 60–70% of vested balance</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Gift funds</td>
                  <td className="px-4 py-3 text-sm text-gray-700">100% with gift letter and proof of transfer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Borrowed funds (unsecured)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Typically do not count</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender and program. Large deposits may require a letter of explanation.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You list your assets on the application. The lender requests bank statements (typically 2 months), investment statements, and sometimes retirement account statements. <strong>Underwriting</strong> verifies that you have sufficient funds for the down payment, <strong>closing costs</strong>, and reserves. Large or unusual deposits may require a letter of explanation and documentation to prove the source.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) shows the estimated cash to close. The lender confirms your assets support that amount. If you use gift funds, the donor provides a gift letter and proof of transfer. Retirement accounts may require proof of accessibility. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor is buying a $320,000 home with 10% down. Down payment: $32,000. <strong>Closing costs</strong>: about $7,500. Cash needed: $39,500. Taylor has $28,000 in savings and a $25,000 401(k) (vested). The lender counts 70% of the 401(k): $17,500. Total countable assets: $45,500—enough for down payment, <strong>closing costs</strong>, and some reserves.
          </p>
          <p className="text-gray-700 mb-4">
            Taylor&apos;s <strong>loan amount</strong> is $288,000. The <strong>Loan Estimate</strong> shows the <strong>interest rate</strong>, <strong>mortgage payment</strong>, and cash to close. Taylor provides 2 months of bank statements. A $5,000 deposit from selling furniture is explained with a letter. <strong>Underwriting</strong> approves. This is illustrative. See{' '}
            <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Assets that count</strong> include checking, savings, investments, retirement (often 60–70%), and gift funds with documentation. They fund your down payment, <strong>closing costs</strong>, and reserves. Your <strong>Loan Estimate</strong> (TRID) shows cash to close. The lender verifies assets during <strong>underwriting</strong>. Borrowed funds typically do not count. See{' '}
            <Link href="/mortgage/mortgage-asset-verification" className="text-teal-700 underline font-medium">Mortgage Asset Verification</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding which assets count helps you plan. You know what to gather and what to avoid (e.g., borrowing from a friend for the down payment—that typically does not count). Gift funds can help if documented properly. Retirement accounts can supplement savings, but only a portion may count. Reserves can strengthen your application.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> shows the cash to close. Compare that to your countable assets. If you are short, you may need to save more, receive a gift, or adjust your purchase price. See{' '}
            <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment Explained</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-reserve-requirement" className="text-primary hover:underline font-medium">What Is Mortgage Reserve Requirement</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Liquid Assets (Checking, Savings)</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>Fully countable</li>
                <li>Easy to verify with bank statements</li>
                <li>No accessibility concerns</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Large deposits may need explanation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Retirement Accounts</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>Often 60–70% counts</li>
                <li>Can supplement other assets</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Only partial value counts</li>
                <li>May need proof of accessibility</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Borrowing for the down payment:</strong> Unsecured loans typically do not count. The lender may treat it as debt and it can affect your DTI. If you must repay it, it is not your asset.</li>
            <li><strong>Large deposits without explanation:</strong> Lenders may question large deposits. Provide a letter of explanation and documentation (e.g., sale of car, gift letter). Unexplained deposits may not count.</li>
            <li><strong>Assuming all retirement funds count:</strong> Lenders often use 60–70% of the vested balance. You may need to prove you can access the funds without penalty. See <Link href="/mortgage/what-is-mortgage-reserve-requirement" className="text-primary hover:underline font-medium">What Is Mortgage Reserve Requirement</Link>.</li>
            <li><strong>Gift funds without proper documentation:</strong> Gift funds require a gift letter and proof of transfer. The donor may need to provide bank statements. See <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment Explained</Link>.</li>
            <li><strong>Moving money right before applying:</strong> Lenders want to see a history of funds. Moving large sums between accounts can trigger questions. Keep records and be prepared to explain.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Your <strong>Loan Estimate</strong> (TRID) shows the cash to close. Ensure your assets cover that amount. Compare to the Closing Disclosure before closing.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about mortgage assets">
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
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (assets and reserves)</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
          </ul>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
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
