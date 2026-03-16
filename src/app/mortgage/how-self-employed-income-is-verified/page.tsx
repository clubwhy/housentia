import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Self Employed Income Is Verified | Housentia',
  description:
    'Self-employed borrowers typically need tax returns, P&L statements, and 1099s. Learn how lenders verify self-employed income.',
  openGraph: { title: 'How Self Employed Income Is Verified | Housentia', description: 'Understand self-employed income verification.' },
};

const ARTICLE_SLUG = 'how-self-employed-income-is-verified';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'How Self Employed Income Is Verified' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-self-employed-income-is-verified';

const FAQ_ITEMS = [
  {
    question: 'How do lenders verify self-employed income?',
    answer:
      'Typically 2 years of personal and business tax returns, P&L statements, 1099s, and bank statements. Lenders often average income over 2 years. During underwriting, they reconcile these documents to determine your qualifying income for the loan amount.',
  },
  {
    question: 'Why is self-employed income harder to qualify?',
    answer:
      'Lenders use taxable income from tax returns, which may be lower due to deductions. Income can vary year to year. There is no employer to verify employment. The Loan Estimate and mortgage payment are based on verified income—if it is lower than expected, your qualifying loan amount may be reduced.',
  },
  {
    question: 'Can I use bank statements instead of tax returns?',
    answer:
      'Some non-QM bank statement programs accept bank statements. Conventional and FHA loans typically require tax returns. Bank statement programs may use deposits as income but often have different terms and interest rates.',
  },
  {
    question: 'What if my income dropped recently?',
    answer:
      'Lenders may average 2 years or use the most recent year. Declining income can affect qualification and the loan amount you qualify for. A significant drop may require additional documentation or compensating factors.',
  },
  {
    question: 'How does self-employed income affect my Loan Estimate?',
    answer:
      'Under TRID, your Loan Estimate shows the loan amount, interest rate, and mortgage payment based on the income you provide. The lender verifies that income during underwriting using tax returns and other documents. If verified income is lower, your terms could change.',
  },
  {
    question: 'What is the difference between W-2 and self-employed verification?',
    answer:
      'W-2 employees use pay stubs and W-2s; lenders can verify with the employer. Self-employed borrowers use tax returns and P&L statements; there is no employer to call. See W-2 vs Self-Employed Mortgage Qualification for a comparison.',
  },
];

export default function HowSelfEmployedIncomeIsVerifiedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'How Self Employed Income Is Verified', description: 'Learn how lenders verify self-employed income.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Self Employed Income Is Verified" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Self-employed income verification</strong> typically uses tax returns, profit-and-loss (P&L) statements,
            and 1099s. Unlike W-2 employees, self-employed borrowers have no employer to verify income—lenders rely on
            tax returns and business documents. Your verified income determines the <strong>loan amount</strong> you qualify
            for and affects your <strong>mortgage payment</strong> and <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            Lenders often average 2 years of income because self-employed earnings can vary. Under TRID (TILA-RESPA
            Integrated Disclosure), your <strong>Loan Estimate</strong> shows the estimated <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong> based on the income you provide. During{' '}
            <strong>underwriting</strong>, the lender verifies that income using your tax returns and other documents. See{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower</Link>,{' '}
            <Link href="/mortgage/mortgage-income-verification" className="text-primary hover:underline font-medium">Mortgage Income Verification</Link>, and{' '}
            <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline font-medium">How Income Is Verified for Mortgage</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Lenders use your <strong>taxable income</strong> from tax returns—not gross revenue. Business deductions reduce
            your taxable income, which can lower the amount lenders count. A W-2 employee&apos;s gross salary is often
            used directly; a self-employed borrower&apos;s qualifying income may be the average of Schedule C or business
            income over 2 years, after allowable add-backs.
          </p>
          <p className="text-gray-700 mb-4">
            Your verified income affects the <strong>loan amount</strong> you qualify for. A lower verified income means
            a smaller loan and a lower <strong>mortgage payment</strong>—or you may need a larger down payment to meet{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link> and DTI
            requirements. The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) require
            clear disclosure of the cost of credit. Your <strong>Loan Estimate</strong> reflects the terms based on your
            stated income—but those terms can change if <strong>underwriting</strong> finds that your verified income
            differs.
          </p>
          <p className="text-gray-700">
            See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> for how your payment is applied.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, you provide personal and business tax returns (typically 2 years), P&L statements, 1099s, and
            possibly bank statements. For sole proprietors, Schedule C from your personal tax return shows business
            income. For S-corps or partnerships, the lender reviews business returns (1120-S, 1065) and your K-1s. They
            may add back certain deductions (e.g., depreciation, one-time expenses) to calculate qualifying income.
          </p>
          <p className="text-gray-700 mb-4">
            Lenders often <strong>average</strong> the 2 years of income. If income is declining, they may use the more
            recent year or the lower of the two. During <strong>underwriting</strong>, they reconcile P&L statements
            with tax returns and check for consistency. Discrepancies can trigger questions or conditions. There is no
            employer to call—verification is document-based.
          </p>
          <p className="text-gray-700 mb-4">
            Once income is verified, the lender calculates your qualifying income and uses it to determine your maximum{' '}
            <strong>loan amount</strong> and <strong>mortgage payment</strong>. Your <strong>Loan Estimate</strong> and
            final <strong>closing costs</strong> are based on that analysis. See{' '}
            <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline font-medium">How Income Is Verified for Mortgage</Link> and{' '}
            <Link href="/mortgage/w2-vs-self-employed-mortgage-qualification" className="text-primary hover:underline font-medium">W-2 vs Self-Employed Mortgage Qualification</Link>.
          </p>
          <p className="text-gray-700">
            Some non-QM programs use bank statements instead of tax returns—deposits over 12–24 months may be averaged
            as income. These programs often have different <strong>interest rate</strong> and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Casey is a freelance graphic designer. Year 1 Schedule C shows $85,000 net profit; Year 2 shows $78,000. The
            lender averages: ($85,000 + $78,000) / 2 = $81,500 per year, or $6,792 gross per month. Casey has $400 in
            monthly debt. At a 43% back-end DTI limit, Casey&apos;s maximum total debt is about $2,920. Subtracting $400
            leaves $2,520 for housing.
          </p>
          <p className="text-gray-700 mb-4">
            At a 7% <strong>interest rate</strong> on a 30-year loan, that supports a <strong>loan amount</strong> of
            roughly $378,000 (principal and interest only; taxes and insurance reduce the amount further). Casey receives
            a <strong>Loan Estimate</strong> showing the <strong>mortgage payment</strong> and <strong>closing costs</strong>.
            If Casey had only Year 2 income ($78,000), qualifying income would drop to $6,500/month—reducing the maximum
            loan. Declining income can limit qualification.
          </p>
          <p className="text-gray-700">
            The example is illustrative. Actual limits vary by lender and program. See <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how payments are applied.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If you are self-employed, prepare early. Have 2 years of tax returns ready—personal and business. Ensure
            Schedule C or K-1 income is consistent and accurately reflects your business. Large year-over-year
            swings or declining income can affect your qualifying <strong>loan amount</strong>. See{' '}
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            Business deductions reduce taxable income—which can reduce what lenders count. Some add-backs (depreciation,
            one-time expenses) may be allowed; policies vary. If you take aggressive deductions, your qualifying income
            may be lower than your actual cash flow. Plan accordingly when estimating the <strong>mortgage payment</strong> you
            can afford.
          </p>
          <p className="text-gray-700">
            Bank statement programs may work if tax returns show low income but deposits are strong. These programs
            often have higher rates and different terms. Compare options and understand the trade-offs.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Self-Employed Income Verification</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Being Prepared</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Faster underwriting with complete tax returns and P&L ready</li>
                <li>Clear picture of your qualifying loan amount</li>
                <li>Ability to address add-backs and deductions with your lender</li>
                <li>Option to explore bank statement programs if tax returns are weak</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Taxable income may be lower than actual cash flow</li>
                <li>2-year averaging can hurt if income dropped recently</li>
                <li>No employer verification—documentation burden is higher</li>
                <li>Requirements vary by lender and program</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not having 2 years of tax returns ready:</strong> Delays in providing returns can slow <strong>underwriting</strong>. File on time and keep copies.</li>
            <li><strong>Overstating income on the application:</strong> Lenders use tax returns. Inflated numbers will not match and can lead to denial or revised terms.</li>
            <li><strong>Assuming gross revenue counts:</strong> Lenders use taxable income (net profit after deductions). Revenue minus expenses is what matters.</li>
            <li><strong>Ignoring declining income:</strong> If Year 2 is lower than Year 1, the lender may use the lower year or average. Plan for the impact on your <strong>loan amount</strong>.</li>
            <li><strong>Not asking about add-backs:</strong> Some deductions (depreciation, one-time expenses) may be added back. Policies vary—ask your lender what qualifies.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about self-employed income verification">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Fannie Mae – Selling Guide (self-employed income documentation)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (self-employed borrowers)</li>
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
