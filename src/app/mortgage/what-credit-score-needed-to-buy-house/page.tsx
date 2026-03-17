import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Credit Score Is Needed to Buy a House? | Housentia',
  description:
    'Credit score requirements vary by loan type. Learn what score you need to buy a house with conventional, FHA, VA, and USDA loans.',
  openGraph: { title: 'What Credit Score Is Needed to Buy a House? | Housentia', description: 'Understand credit score requirements for buying a home.' },
};

const ARTICLE_SLUG = 'what-credit-score-needed-to-buy-house';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Credit Score Is Needed to Buy a House' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-credit-score-needed-to-buy-house';

const FAQ_ITEMS = [
  {
    question: 'What credit score do I need to buy a house?',
    answer:
      'FHA: 580+ (3.5% down) or 500+ (10% down). Conventional: 620+. VA/USDA: varies by lender. Your score affects your interest rate and mortgage payment. See Credit Score for Mortgage and How Credit Score Affects Mortgage Rates.',
  },
  {
    question: 'Can I buy a house with a 500 credit score?',
    answer:
      'FHA may allow 500–579 with 10% down. Many lenders set overlays requiring 620+. Non-QM or portfolio loans may have different options. Your Loan Estimate shows the rate and terms for your situation. See Non-QM Loan.',
  },
  {
    question: 'What score do first-time buyers need?',
    answer:
      'Same as other buyers—requirements depend on loan type. FHA and VA may be more accessible for first-time buyers with lower scores. See First-Time Home Buyer and Down Payment Requirements Explained.',
  },
  {
    question: 'What if my score is low?',
    answer:
      'Improve your score before applying (pay bills on time, reduce debt), or explore FHA, VA, or non-QM options. Shop multiple lenders. Your interest rate and closing costs may be higher. See What Is DTI.',
  },
  {
    question: 'How does credit score affect my mortgage payment?',
    answer:
      'Higher scores often qualify for lower interest rates. A lower rate means a lower mortgage payment for the same loan amount. A 50-point difference can add $50–$150 or more per month. See What Is APR and What Is Interest Rate.',
  },
  {
    question: 'When does the lender check my credit?',
    answer:
      'When you apply. The lender pulls your credit during underwriting. You receive a Loan Estimate (TRID) within 3 business days. The estimate shows your loan amount, interest rate, mortgage payment, and closing costs based on your credit.',
  },
];

export default function WhatCreditScoreNeededToBuyHousePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Credit Score Is Needed to Buy a House?', description: 'Learn credit score requirements for buying a home.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Credit Score Is Needed to Buy a House?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            The <strong>credit score needed to buy a house</strong> depends on the loan type. FHA may accept 580+ (3.5% down) or 500+ (10% down). Conventional typically requires 620+. VA and USDA have lender-set minimums. Your score affects your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>—a higher score often means better terms.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days of application. It shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> based on your credit. See{' '}
            <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>,{' '}
            <Link href="/mortgage/first-time-home-buyer" className="text-primary hover:underline font-medium">First-Time Home Buyer</Link>, and{' '}
            <Link href="/mortgage/steps-to-buy-a-house-with-a-mortgage" className="text-primary hover:underline font-medium">Steps to Buy a House with a Mortgage</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Lenders use your credit score to assess risk and set your <strong>interest rate</strong>. A higher score typically means a lower rate and a lower <strong>mortgage payment</strong>. A lower score may limit which loan programs you qualify for—or mean higher rates and <strong>closing costs</strong>. First-time homebuyers often use FHA or VA, which may accept lower scores than conventional.
          </p>
          <p className="text-gray-700 mb-4">
            Your score does not directly set your <strong>loan amount</strong>—that depends on income, DTI, and the property. But your score affects the rate you pay on that amount. A 50-point difference can add $50–$150 or more to your monthly <strong>mortgage payment</strong> on a typical loan. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Credit score by loan type table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Credit Score Requirements by Loan Type</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Loan Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Minimum</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional</td>
                  <td className="px-4 py-3 text-sm text-gray-700">620+</td>
                  <td className="px-4 py-3 text-sm text-gray-700">740+ often gets best rates</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">FHA</td>
                  <td className="px-4 py-3 text-sm text-gray-700">580+ (3.5% down) or 500+ (10% down)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Many lenders set overlays (e.g., 620+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">VA</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender-set (often 620+)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">VA does not set minimum</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">USDA</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender-set (often 640+)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Income limits also apply</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender. Your Loan Estimate shows the rate and terms for your situation.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply to buy a house, the lender pulls your credit report and scores from the three bureaus. For a single applicant, they typically use the middle score. For joint applicants, they use the lower of the two middle scores. <strong>Underwriting</strong> evaluates your application—credit, income, DTI, and the property—to determine qualification and your <strong>interest rate</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            You receive a <strong>Loan Estimate</strong> (TRID) within 3 business days. It shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. If your score is lower, you may qualify for FHA or VA instead of conventional—or you may receive a higher rate. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan is a first-time buyer with a 650 credit score. Morgan wants to buy a $280,000 home with 5% down. Conventional may be an option (620+), but the rate might be higher than for a 740+ borrower. Morgan receives a <strong>Loan Estimate</strong>: <strong>loan amount</strong> $266,000, <strong>interest rate</strong> 7%, <strong>mortgage payment</strong> about $1,770 (P&I + PMI). At 720, the rate might be 6.5%—payment about $1,682. The 50-point difference costs about $88/month.
          </p>
          <p className="text-gray-700 mb-4">
            If Morgan had a 580 score, conventional might not be available. FHA could work—580+ allows 3.5% down. Morgan would need a smaller down payment ($9,800) but would pay FHA MIP. The <strong>Loan Estimate</strong> would show the FHA terms. This is illustrative. See{' '}
            <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link> and{' '}
            <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            The <strong>credit score needed to buy a house</strong> varies by loan type: FHA 580+ (or 500+ with 10% down), conventional 620+, VA/USDA lender-set. Your score affects your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Your <strong>Loan Estimate</strong> (TRID) shows the terms. See{' '}
            <Link href="/mortgage/credit-score-for-mortgage" className="text-teal-700 underline font-medium">Credit Score for Mortgage</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Knowing the typical score requirements helps you plan. If your score is below 620, conventional may be out of reach—but FHA or VA might work. If you are close to a threshold, improving your score by even 20–30 points before applying could qualify you for a better program or a lower <strong>interest rate</strong>. That can save hundreds per month on your <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Check your credit report before house hunting. Errors can lower your score. Dispute inaccuracies. Pay down debt to improve your utilization. Give yourself time—credit improvement often takes months. Your <strong>Loan Estimate</strong> shows the <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>closing costs</strong> for your situation. See{' '}
            <Link href="/mortgage/steps-to-buy-a-house-with-a-mortgage" className="text-primary hover:underline font-medium">Steps to Buy a House with a Mortgage</Link> and{' '}
            <Link href="/mortgage/steps-to-get-a-mortgage" className="text-primary hover:underline font-medium">Steps to Get a Mortgage</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Higher Score (620+)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Access to conventional loans</li>
                <li>Often lower interest rates</li>
                <li>Lower mortgage payment</li>
                <li>May avoid PMI with 20% down</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Lower Score (500–619)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>FHA or VA may be options</li>
                <li>Higher rates and closing costs</li>
                <li>May need larger down payment (FHA 10% if 500–579)</li>
                <li>Non-QM may have alternatives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not checking your credit before applying:</strong> Errors can lower your score. Review your report and dispute inaccuracies. Know your score before house hunting.</li>
            <li><strong>Making large purchases or opening new credit before closing:</strong> New debt can affect your DTI and score. Avoid major changes until after closing.</li>
            <li><strong>Assuming FHA always accepts 500:</strong> FHA allows 500–579 with 10% down, but many lenders set overlays requiring 620+. Shop lenders.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Your <strong>Loan Estimate</strong> (TRID) shows the <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> for your credit profile. Compare to the Closing Disclosure before closing.</li>
            <li><strong>Not shopping lenders:</strong> Requirements and rates vary. Multiple applications within 14–45 days for the same purpose are often counted as one inquiry. See <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link>.</li>
            <li><strong>Applying without improving first:</strong> If you are close to a threshold, a few months of paying down debt and paying on time can help. Credit improvement takes time.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about credit score for buying">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Owning a home</li>
            <li>Fannie Mae – Selling Guide (credit requirements)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
          </ul>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Loan Qualification Comparison', href: '/tools/loan-qualification-comparison' }} className="mb-10" />
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
