import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Income Requirements | Housentia',
  description:
    'Lenders verify income to ensure you can repay. Learn typical income requirements, DTI limits, and documentation needs.',
  openGraph: { title: 'Mortgage Income Requirements | Housentia', description: 'Understand mortgage income requirements.' },
};

const ARTICLE_SLUG = 'mortgage-income-requirements';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Income Requirements' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-income-requirements';

const FAQ_ITEMS = [
  {
    question: 'Is there a minimum income for a mortgage?',
    answer:
      'No set minimum. Lenders use DTI—your income must support the mortgage payment plus other debts. Income must be stable and documented. Your Loan Estimate and loan amount are based on the income you report; underwriting verifies it.',
  },
  {
    question: 'What income counts for mortgage qualification?',
    answer:
      'W-2 wages, salary, bonuses, overtime, commission, self-employment, rental income, investments, alimony, child support (if counted), and other verifiable income. Lenders typically want 2 years of history for variable income. See Mortgage Income Verification.',
  },
  {
    question: 'How much income do I need for a mortgage?',
    answer:
      'It depends on the loan amount, interest rate, and your debts. Use DTI: housing payment + debts divided by gross income. Many programs cap DTI around 43–50%. A higher income can support a larger loan amount and mortgage payment. See What Is DTI.',
  },
  {
    question: 'What if my income is irregular?',
    answer:
      'Lenders may average 2 years of income for self-employed or variable earners. Bonuses and overtime often need a 2-year history. Compensating factors (reserves, low LTV) may help. See our Self-Employed Borrower and Mortgage Compensating Factors guides.',
  },
  {
    question: 'Does income affect my Loan Estimate or interest rate?',
    answer:
      'Income affects how much you qualify to borrow (loan amount), which affects your mortgage payment. It does not directly set your interest rate—that depends on credit, LTV, and other factors. Your Loan Estimate shows the terms you qualify for based on your application.',
  },
  {
    question: 'What documents prove income?',
    answer:
      'Typically: pay stubs (30–60 days), W-2s (2 years), tax returns (2 years for self-employed), and sometimes a VOE (Verification of Employment). The lender uses these during underwriting to verify the income you stated on your application.',
  },
];

export default function MortgageIncomeRequirementsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Income Requirements', description: 'Learn mortgage income requirements and documentation.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Income Requirements" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage income requirements</strong> ensure you can afford the loan. Lenders verify income during{' '}
            <strong>underwriting</strong> and use DTI (debt-to-income ratio) to assess whether your income supports the{' '}
            <strong>mortgage payment</strong> plus other debts. There is no universal minimum income—what matters is that
            income supports the <strong>loan amount</strong> you seek at the <strong>interest rate</strong> you qualify for.
          </p>
          <p className="text-gray-700 mb-4">
            Under the ability-to-repay rule (part of TILA), lenders must verify that you can repay. Income documentation
            supports your <strong>Loan Estimate</strong> and approval. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>, and{' '}
            <Link href="/mortgage/mortgage-income-verification" className="text-primary hover:underline font-medium">Mortgage Income Verification</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you apply, you state your income. The lender uses it to calculate how much you can borrow. Your{' '}
            <strong>mortgage payment</strong> (principal and interest) depends on your <strong>loan amount</strong> and{' '}
            <strong>interest rate</strong>. The lender adds your other debts and divides by your gross income to get DTI.
            Many programs cap DTI around 43–50%.
          </p>
          <p className="text-gray-700 mb-4">
            Income must be stable, documented, and likely to continue. W-2 wages, salary, bonuses, overtime, commission,
            self-employment, and other verifiable income count. The lender verifies through pay stubs, W-2s, tax returns,
            and sometimes a VOE. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link> and{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>.
          </p>
        </section>

        {/* Design object 1: Income types table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Income Types That Typically Count</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Income Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Documentation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">W-2 wages, salary</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay stubs, W-2s, VOE</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Bonuses, overtime, commission</td>
                  <td className="px-4 py-3 text-sm text-gray-700">2-year history; pay stubs, W-2s</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Self-employment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Tax returns (2 years), P&L</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Rental income</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lease, tax returns, schedule E</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Investments, dividends</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Tax returns, statements</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Alimony, child support</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Court order, payment history</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender and program.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, you provide income information. The lender sends a <strong>Loan Estimate</strong> within 3
            business days (TRID). During <strong>underwriting</strong>, the lender verifies your income with pay stubs,
            W-2s, tax returns, and sometimes a VOE. They calculate your qualifying income and DTI.
          </p>
          <p className="text-gray-700 mb-4">
            The lender determines the maximum <strong>loan amount</strong> you can afford based on your income, debts,
            and the <strong>interest rate</strong>. Your <strong>mortgage payment</strong> and <strong>closing costs</strong> are
            disclosed on the Loan Estimate and Closing Disclosure. Income does not set your rate—credit, LTV, and other
            factors do. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan earns $72,000 per year (gross). Monthly debt: $400 car payment, $150 student loan. Jordan applies for
            a $280,000 loan at 6.5% <strong>interest rate</strong>. The <strong>mortgage payment</strong> (P&I) is about
            $1,770. Housing expense (P&I + taxes + insurance) is about $2,100. Total debt: $2,650. DTI: $2,650 ÷ $6,000
            = 44%—within typical limits.
          </p>
          <p className="text-gray-700 mb-4">
            Jordan provides pay stubs and W-2s. <strong>Underwriting</strong> verifies income. The lender approves a{' '}
            <strong>loan amount</strong> of $280,000. Jordan receives a <strong>Loan Estimate</strong> with the approved
            terms. The example is illustrative; outcomes depend on the lender and full file.
          </p>
        </section>

        {/* Design object 2: DTI callout */}
        <div className="mb-10 rounded-xl border-l-4 border-blue-500 bg-blue-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Key Formula: DTI</h3>
          <p className="text-blue-800 text-[15px] leading-relaxed">
            DTI = (housing payment + monthly debts) ÷ gross monthly income. Many programs cap DTI around 43–50%. A higher
            income can support a larger loan amount. Use our Affordability Calculator to estimate what you may qualify for.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding income requirements helps you know what to expect before applying. First-time buyers may not
            realize that lenders verify every dollar of income—and that some income (e.g., sporadic side gigs without
            history) may not count. Document your income early and ensure it matches your application.
          </p>
          <p className="text-gray-700 mb-4">
            Your income supports your <strong>loan amount</strong> and <strong>mortgage payment</strong>. A higher income
            (or lower debts) can qualify you for more. See <Link href="/mortgage/mortgage-compensating-factors-explained" className="text-primary hover:underline font-medium">Mortgage Compensating Factors Explained</Link> for
            how reserves and other factors can help when DTI is high, and{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower Scenarios</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Income Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Supports ability-to-repay (TILA)</li>
                <li>Reduces risk of default</li>
                <li>DTI provides clear affordability measure</li>
                <li>Documentation ensures accuracy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>No set minimum—varies by loan and lender</li>
                <li>Variable income needs 2-year history</li>
                <li>Some income may not count</li>
                <li>DTI limits can restrict loan amount</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Overstating income:</strong> Lenders verify. If your pay stubs or W-2s show less than you stated, the lender may reduce your qualifying income or deny. Be accurate.</li>
            <li><strong>Assuming all income counts:</strong> Some income (e.g., short-term gigs, unreported cash) may not count. Lenders want stable, documented, likely-to-continue income.</li>
            <li><strong>Ignoring debts:</strong> DTI includes debts. A high income with high debts may still result in a high DTI. Pay down debt before applying when possible.</li>
            <li><strong>Not documenting variable income:</strong> Bonuses, overtime, and self-employment typically need 2 years of history. One good year may not be enough.</li>
            <li><strong>Changing jobs before applying:</strong> Lenders prefer stable employment. A new job in the same field may be acceptable; a career change can be harder. See <Link href="/mortgage/mortgage-employment-verification" className="text-primary hover:underline font-medium">Mortgage Employment Verification</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about mortgage income">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Ability to Repay and Qualified Mortgage rule</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Fannie Mae – Selling Guide (income and employment)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (income documentation)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }} className="mb-10" />
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
