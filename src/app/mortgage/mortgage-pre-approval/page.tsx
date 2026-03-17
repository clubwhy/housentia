import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Pre-Approval: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Pre-approval means a lender has reviewed your finances and conditionally approved a loan amount. Learn how it differs from prequalification and why it matters when house hunting.',
  openGraph: {
    title: 'Mortgage Pre-Approval: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage pre-approval and how it strengthens your offer.',
  },
};

const ARTICLE_SLUG = 'mortgage-pre-approval';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Pre-Approval',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-pre-approval';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage pre-approval?',
    answer:
      'Pre-approval means a lender has reviewed your income, assets, credit, and debt and has conditionally approved you for a specific loan amount, subject to property and final underwriting. It is stronger than prequalification because it involves document verification and a credit check.',
  },
  {
    question: 'How is pre-approval different from prequalification?',
    answer:
      'Prequalification is typically a quick estimate based on self-reported information. Pre-approval involves verification of your financial documents and a credit check, making it more meaningful to sellers. See Mortgage Pre-Approval vs Pre-Qualification for a detailed comparison.',
  },
  {
    question: 'How long does pre-approval last?',
    answer:
      'Pre-approval letters often have an expiration date, such as 60 or 90 days. You may need to update if your situation changes or the letter expires. Your loan amount, interest rate, and mortgage payment are not set until you apply and receive a Loan Estimate.',
  },
  {
    question: 'Does pre-approval guarantee a loan?',
    answer:
      'No. Pre-approval is conditional. Final approval depends on the property, appraisal, and final underwriting review. The property must meet lender requirements, and your financial situation must not change significantly.',
  },
  {
    question: 'When do I get my Loan Estimate and interest rate?',
    answer:
      'After pre-approval, you find a home and apply for the loan. Within 3 business days of application, the lender must provide a Loan Estimate (TRID) with your interest rate, loan amount, mortgage payment, and closing costs. Pre-approval does not lock a rate.',
  },
  {
    question: 'Does pre-approval affect my credit?',
    answer:
      'Pre-approval typically involves a hard credit inquiry, which may slightly affect your credit score. Multiple inquiries within a short window (e.g., 14–45 days) for the same purpose are often treated as one. Avoid applying with many lenders at once.',
  },
];

export default function MortgagePreApprovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Pre-Approval: A Guide for U.S. Homebuyers',
    description:
      'Pre-approval means a lender has reviewed your finances and conditionally approved a loan amount. Learn how it differs from prequalification and why it matters.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Pre-Approval: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage pre-approval</strong> means a lender has reviewed your financial information—income,
            assets, credit, and debt—and has conditionally approved you for a specific <strong>loan amount</strong>. A
            pre-approval letter can strengthen your offer when competing for a home. First-time homebuyers often get
            pre-approved before house hunting to know their budget and show sellers they are serious.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-approval is different from prequalification. Prequalification is typically a quick estimate based on
            self-reported information. Pre-approval involves verification of documents and a credit check, making it
            more meaningful to sellers and real estate agents. Your <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong> are not set until you apply and
            receive a <strong>Loan Estimate</strong> (TRID). See{' '}
            <Link href="/mortgage/prequalify" className="text-primary hover:underline font-medium">Mortgage Prequalification</Link> and{' '}
            <Link href="/mortgage/mortgage-pre-approval-vs-pre-qualification" className="text-primary hover:underline font-medium">Mortgage Pre-Approval vs Pre-Qualification</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you are pre-approved, the lender has typically verified your income (pay stubs, W-2s, tax returns),
            assets (bank statements), and credit report. The lender reviews your <strong>DTI</strong> (debt-to-income),
            <strong> LTV</strong> (loan-to-value), and other factors. The lender then issues a letter stating the{' '}
            <strong>loan amount</strong> you are conditionally approved for, subject to the property meeting
            requirements and final <strong>underwriting</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-approval is not a guarantee. The property must appraise, and final underwriting may uncover additional
            conditions. But it shows sellers you are a serious, qualified buyer. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: Pre-approval process table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Pre-Approval Process</h2>
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
                  <td className="px-4 py-3 text-sm text-gray-700">Apply</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You submit application; lender pulls credit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Submit documents</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Income, assets, employment verification</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender review</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Underwriting reviews DTI, LTV, credit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Pre-approval letter</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Conditional loan amount; valid 60–90 days typically</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Find home → Apply</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Loan Estimate (TRID) within 3 days; rate, payment, closing costs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Process varies by lender. Pre-approval does not lock your interest rate.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply for pre-approval by submitting an application and documents. The lender verifies your income
            (pay stubs, W-2s, tax returns for self-employed), assets (bank statements), and pulls your credit. The
            lender reviews your <strong>DTI</strong>, <strong>LTV</strong>, and credit profile to determine the maximum{' '}
            <strong>loan amount</strong> you qualify for.
          </p>
          <p className="text-gray-700 mb-4">
            Once approved, you receive a pre-approval letter. You then shop for a home. When you find one and go under
            contract, you apply for the actual loan. Within 3 business days, the lender provides a{' '}
            <strong>Loan Estimate</strong> (TRID) with your <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Final <strong>underwriting</strong>{' '}
            reviews the property (appraisal, title) and your file again. See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">Mortgage Application Process</Link>,{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan applies for pre-approval with pay stubs, 2 years of tax returns, and bank statements. The lender
            verifies income and assets, pulls credit, and calculates DTI at 38%. Morgan is pre-approved for a{' '}
            <strong>loan amount</strong> of $320,000. The letter is valid for 90 days.
          </p>
          <p className="text-gray-700 mb-4">
            Morgan finds a home for $380,000 and goes under contract. Morgan applies for the loan. Within 3 days,
            Morgan receives the <strong>Loan Estimate</strong>: 6.75% <strong>interest rate</strong>, $2,075{' '}
            <strong>mortgage payment</strong> (P&I), $11,200 <strong>closing costs</strong>. Final underwriting
            approves the loan. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            Pre-approval gives you a conditional <strong>loan amount</strong> before you shop. It strengthens your
            offer and helps you know your budget. Your <strong>interest rate</strong>, <strong>mortgage payment</strong>,
            and <strong>closing costs</strong> are set when you apply and receive the <strong>Loan Estimate</strong> (TRID).
            Pre-approval is not a guarantee—final approval depends on the property and underwriting.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers often wonder whether to get pre-approved before or after finding a home. Getting
            pre-approved first helps you know your price range and shows sellers you are qualified. In competitive
            markets, offers without pre-approval may be passed over. Sellers and agents prefer buyers who have already
            had their finances verified.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-approval also surfaces issues early. If your credit needs work or your DTI is too high, you can
            address it before you fall in love with a home. The <strong>Loan Estimate</strong> (provided under TRID
            after you apply) shows your rate, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/mortgage-pre-approval-process" className="text-primary hover:underline font-medium">Mortgage Pre-Approval Process</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Pre-Approval</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Stronger offers—sellers prefer pre-approved buyers</li>
                <li>Know your budget before house hunting</li>
                <li>Faster process—verification already done</li>
                <li>Identify credit or income issues early</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Hard credit inquiry may slightly affect score</li>
                <li>Letter expires (often 60–90 days)</li>
                <li>Not a guarantee—property must qualify</li>
                <li>Rate and payment not set until you apply</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Confusing pre-approval with final approval:</strong> Pre-approval is conditional. The property must appraise, and final underwriting may add conditions. Do not assume the loan is guaranteed.</li>
            <li><strong>Making major financial changes after pre-approval:</strong> Large purchases, new credit, or job changes can affect your approval. Avoid until after closing. Lenders may re-verify before funding.</li>
            <li><strong>Letting the pre-approval letter expire:</strong> Letters often expire in 60–90 days. If you have not found a home, ask for an extension or update. An expired letter may not satisfy sellers.</li>
            <li><strong>Applying with too many lenders at once:</strong> Each application can mean a hard credit pull. Multiple pulls for the same purpose within a short window may be treated as one, but apply strategically.</li>
            <li><strong>Assuming pre-approval locks your rate:</strong> Your interest rate and mortgage payment are not set until you apply and lock. Rate locks typically happen when you go under contract, not at pre-approval.</li>
            <li><strong>Maxing out your pre-approved amount:</strong> The letter shows the maximum loan amount. Consider a lower price range to leave room for closing costs, moving expenses, and emergencies. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about pre-approval">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage process and pre-approval</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }}
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
            Pre-approval requirements and processes vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
