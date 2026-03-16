import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Income Is Verified for a Mortgage: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Lenders verify income through pay stubs, W-2s, tax returns, and more. Learn what documents are needed for employed and self-employed borrowers.',
  openGraph: {
    title: 'How Income Is Verified for a Mortgage: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand how lenders verify income for mortgage approval.',
  },
};

const ARTICLE_SLUG = 'how-income-verified-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'How Income Is Verified for a Mortgage',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-income-verified-mortgage';

const FAQ_ITEMS = [
  {
    question: 'What documents do I need to verify income?',
    answer:
      'Typically: recent pay stubs (often 2 months), W-2s (2 years), and tax returns (2 years). Self-employed borrowers may need profit-and-loss statements and 1099s. The lender uses these during underwriting to calculate your qualifying income for the loan amount.',
  },
  {
    question: 'Do lenders verify employment?',
    answer:
      'Yes. Lenders often call your employer to confirm employment, job title, and income. They may also request a verbal verification of employment (VOE) or written form. This happens during underwriting before you receive final approval.',
  },
  {
    question: 'What if I am self-employed?',
    answer:
      'Self-employed borrowers typically provide tax returns (2 years), profit-and-loss statements, and possibly 1099s. Lenders may average income over 2 years. See our Self-Employed Borrower guide for detailed scenarios.',
  },
  {
    question: 'What income counts for a mortgage?',
    answer:
      'Lenders typically use stable, documented income: salary, wages, bonuses, overtime (if consistent), self-employment income, rental income, and certain other sources. Unstable or one-time income may not count toward your qualifying income.',
  },
  {
    question: 'How does income affect my Loan Estimate?',
    answer:
      'Under TRID, your Loan Estimate shows the loan amount, interest rate, and mortgage payment based on the income and debt information you provide. The lender verifies that information during underwriting. If verified income differs, your terms could change.',
  },
  {
    question: 'Can I use income from a new job?',
    answer:
      'Lenders generally prefer at least 2 years of employment history in the same field. A new job in the same line of work may be acceptable. A recent career change may require additional documentation or a longer history. Requirements vary by lender.',
  },
];

export default function HowIncomeVerifiedMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'How Income Is Verified for a Mortgage: A Guide for U.S. Homebuyers',
    description:
      'Lenders verify income through pay stubs, W-2s, tax returns, and more. Learn what documents are needed for employed and self-employed borrowers.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Income Is Verified for a Mortgage: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Lenders must verify that you have sufficient income to repay the mortgage. They do this by reviewing
            documents such as pay stubs, W-2s, and tax returns, and often by contacting your employer. Your verified
            income determines the <strong>loan amount</strong> you qualify for and affects your <strong>mortgage payment</strong> and{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), your lender provides a <strong>Loan Estimate</strong> within 3 business days
            of application. That form shows your estimated <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong> based on the income and debt information you provide. During <strong>underwriting</strong>, the
            lender verifies that information. The verification process varies for employed vs. self-employed borrowers.
          </p>
          <p className="text-gray-700">
            For self-employed scenarios, see our{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">
              Self-Employed Borrower Scenarios
            </Link>{' '}
            guide.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Lenders use your verified income to calculate how much you can afford. They divide your total monthly debt
            (including the new <strong>mortgage payment</strong>) by your gross monthly income to get your DTI. A higher
            verified income can support a larger <strong>loan amount</strong> and a higher payment. A lower verified
            income may limit what you qualify for.
          </p>
          <p className="text-gray-700 mb-4">
            Not all income counts. Lenders typically use stable, documented income: salary, wages, bonuses (if
            consistent), overtime (if likely to continue), self-employment income, rental income, and certain other
            sources. One-time windfalls, irregular side gigs, or income that cannot be documented may not be used. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What is DTI</Link> and{' '}
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>.
          </p>
          <p className="text-gray-700">
            The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) require lenders to disclose
            the cost of credit clearly. Your <strong>Loan Estimate</strong> reflects the terms based on your stated
            income—but those terms can change if <strong>underwriting</strong> finds that your verified income differs.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, you provide income and employment information. The lender requests documents to verify it.
            For W-2 employees, common documents include: <strong>pay stubs</strong> (typically 2 months, showing
            year-to-date income), <strong>W-2s</strong> (usually 2 years), <strong>tax returns</strong> (usually 2
            years, with all schedules), and <strong>employment verification</strong> (VOE form or employer contact).
          </p>
          <p className="text-gray-700 mb-4">
            The lender may call your employer to confirm employment, job title, and income. They may use a third-party
            verification service. During <strong>underwriting</strong>, they reconcile pay stubs with W-2s and tax
            returns to ensure consistency. Discrepancies can delay approval or require explanation.
          </p>
          <p className="text-gray-700 mb-4">
            Self-employed borrowers typically provide tax returns (2 years), profit-and-loss statements, 1099s, and
            business tax returns. Lenders may average income over 2 years or use the lower of the two years. See{' '}
            <Link href="/mortgage/how-self-employed-income-is-verified" className="text-primary hover:underline font-medium">How Self-Employed Income Is Verified</Link> and{' '}
            <Link href="/mortgage/w2-vs-self-employed-mortgage-qualification" className="text-primary hover:underline font-medium">W-2 vs Self-Employed Mortgage Qualification</Link>.
          </p>
          <p className="text-gray-700">
            Once income is verified, the lender calculates your qualifying income and uses it to determine your maximum{' '}
            <strong>loan amount</strong> and <strong>mortgage payment</strong>. Your <strong>Loan Estimate</strong> and
            final <strong>closing costs</strong> are based on that analysis. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex works as a software engineer and earns $95,000 per year ($7,917 gross per month). Alex provides 2 months
            of pay stubs, 2 years of W-2s, and 2 years of tax returns. The lender verifies employment with Alex&apos;s
            employer and confirms the salary. Alex has $500 in monthly debt. The lender qualifies Alex at $7,917 gross.
          </p>
          <p className="text-gray-700 mb-4">
            At a 43% back-end DTI limit, Alex&apos;s maximum total debt is about $3,404 per month. Subtracting $500 in
            existing debt leaves $2,904 for housing. At a 7% <strong>interest rate</strong> on a 30-year loan, that
            supports a <strong>loan amount</strong> of roughly $365,000 (principal and interest only; taxes and insurance
            reduce the amount further). Alex receives a <strong>Loan Estimate</strong> showing the <strong>mortgage payment</strong> and{' '}
            <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700">
            If Alex had overstated income and the lender found a lower verified amount—say $80,000—the qualifying{' '}
            <strong>loan amount</strong> would drop. The example is illustrative; actual limits vary by lender, program,
            and <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, understanding income verification helps you prepare. Gather your documents early:
            pay stubs, W-2s, tax returns. If you are self-employed, have your profit-and-loss statements and 1099s
            ready. Gaps or inconsistencies can delay <strong>underwriting</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Your verified income directly affects the <strong>loan amount</strong> you qualify for. A higher income
            supports a larger loan and a higher <strong>mortgage payment</strong>. If you have bonuses or overtime, ensure
            they are documented and consistent—lenders may not count irregular income. See{' '}
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
          <p className="text-gray-700">
            Changing jobs before or during the process can complicate verification. Lenders generally prefer 2 years of
            employment in the same field. A new job in the same line of work may be acceptable; a career change may
            require additional documentation.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Income Verification</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Being Prepared</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Faster underwriting with documents ready</li>
                <li>Clear picture of your qualifying loan amount</li>
                <li>Fewer surprises during the process</li>
                <li>Ability to address discrepancies early</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Self-employed borrowers face more documentation</li>
                <li>Irregular income may not count</li>
                <li>Job changes can complicate verification</li>
                <li>Requirements vary by lender and program</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not gathering documents early:</strong> Delays in providing pay stubs, W-2s, or tax returns can slow <strong>underwriting</strong> and push back your closing.</li>
            <li><strong>Overstating income:</strong> Lenders verify everything. Inflated numbers can lead to denial or revised terms. Be accurate on your application.</li>
            <li><strong>Assuming all income counts:</strong> Bonuses, overtime, and side income may not count if inconsistent or undocumented. Ask your lender what qualifies.</li>
            <li><strong>Changing jobs during the process:</strong> A new job can require additional verification. If possible, avoid changing jobs until after closing.</li>
            <li><strong>Ignoring tax return consistency:</strong> Lenders compare W-2s and tax returns. Large differences can trigger questions. Ensure your records align.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about income verification">
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
            <li>Fannie Mae – Selling Guide (income and employment verification)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (income documentation)</li>
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
            Income verification requirements vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
