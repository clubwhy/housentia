import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How DTI Affects Mortgage Approval: A Guide for U.S. Homebuyers | Housentia',
  description:
    'DTI (debt-to-income ratio) is a key factor in mortgage approval. Learn how lenders use it, typical limits, and how to improve your DTI.',
  openGraph: {
    title: 'How DTI Affects Mortgage Approval: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand how DTI affects your mortgage approval.',
  },
};

const ARTICLE_SLUG = 'how-dti-affects-mortgage-approval';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'How DTI Affects Mortgage Approval',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-dti-affects-mortgage-approval';

const FAQ_ITEMS = [
  {
    question: 'What DTI do lenders prefer?',
    answer:
      'Many conventional programs prefer a back-end DTI of 36% or below, with a housing ratio of 28% or below. Some programs allow higher DTI with compensating factors such as reserves or a strong credit score.',
  },
  {
    question: 'Can I get a mortgage with a high DTI?',
    answer:
      'Some programs allow DTI above 43%. FHA and VA may have different guidelines. Compensating factors like reserves or a strong credit score may help. The Loan Estimate will show your projected mortgage payment based on your DTI.',
  },
  {
    question: 'How can I lower my DTI?',
    answer:
      'Pay down debt, increase income, or choose a less expensive home. Paying off a car loan or credit card can reduce your monthly debt obligations and improve your DTI for underwriting.',
  },
  {
    question: 'Is DTI the only factor in approval?',
    answer:
      'No. Lenders also consider credit score, employment history, assets, and the property. DTI is one of several important factors in mortgage approval.',
  },
  {
    question: 'How does DTI appear on my Loan Estimate?',
    answer:
      'Under TRID, the Loan Estimate shows your loan amount, interest rate, and estimated mortgage payment. Lenders use your stated income and debts to calculate DTI during underwriting. Your DTI affects whether you qualify and at what terms.',
  },
  {
    question: 'What is the difference between front-end and back-end DTI?',
    answer:
      'Front-end DTI is your housing payment (principal, interest, taxes, insurance) divided by gross income. Back-end DTI adds all other monthly debts (car loans, credit cards, student loans). Lenders typically focus on back-end DTI for approval.',
  },
];

export default function HowDTIAffectsMortgageApprovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'How DTI Affects Mortgage Approval: A Guide for U.S. Homebuyers',
    description:
      'DTI is a key factor in mortgage approval. Learn how lenders use it, typical limits, and how to improve your DTI.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How DTI Affects Mortgage Approval: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Your <strong>debt-to-income ratio (DTI)</strong> is one of the most important factors lenders use when
            deciding whether to approve your mortgage. DTI compares your monthly debt payments to your gross monthly
            income. Lenders use it to assess whether you can afford the new <strong>mortgage payment</strong> along with
            your existing debts.
          </p>
          <p className="text-gray-700 mb-4">
            A lower DTI generally improves your chances of approval and may help you qualify for better terms. During
            <strong> underwriting</strong>, lenders calculate your DTI using the information you provide on your
            application and the projected <strong>loan amount</strong> and payment. Under TRID (TILA-RESPA Integrated
            Disclosure), your <strong>Loan Estimate</strong> shows the estimated <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> based on that analysis.
          </p>
          <p className="text-gray-700">
            For a detailed explanation of how DTI is calculated, see our{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">
              What is DTI?
            </Link>{' '}
            guide.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            DTI tells lenders how much of your income goes toward debt each month. A high DTI suggests you may struggle to
            make your <strong>mortgage payment</strong> if something changes—a job loss, illness, or emergency. A lower
            DTI suggests you have more room in your budget for the new payment. Lenders use this to assess risk.
          </p>
          <p className="text-gray-700 mb-4">
            There are two types: <strong>front-end DTI</strong> (housing payment only) and <strong>back-end DTI</strong> (all
            debts). Most programs focus on back-end DTI. Many conventional programs prefer a back-end DTI of 36% or
            below and a front-end (housing) ratio of 28% or below. Qualified Mortgage (QM) rules generally cap DTI at 43%
            for certain loans, though there are exceptions. FHA and VA have their own guidelines. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What is DTI</Link> for
            details.
          </p>
          <p className="text-gray-700 mb-4">
            Lenders may accept higher DTI with compensating factors such as significant reserves, a strong credit score,
            or a low <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>.
            Your DTI and LTV work together
            during <strong>underwriting</strong>—your payment affects DTI, and your DTI affects how much <strong>loan amount</strong> you qualify for.
          </p>
          <p className="text-gray-700">
            The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> on your Loan Estimate
            reflects the cost of credit. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how your payment is applied.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender collects your income and debt information. They add your proposed housing payment
            (principal, interest, taxes, insurance) and all other monthly debts—car loans, credit cards, student loans,
            child support, etc. They divide that total by your gross monthly income to get your DTI.
          </p>
          <p className="text-gray-700 mb-4">
            The TILA (Truth in Lending Act) requires lenders to disclose the <strong>interest rate</strong> and APR clearly. The RESPA (Real Estate Settlement Procedures Act) requires consistent disclosure of <strong>closing costs</strong>. Your <strong>Loan Estimate</strong> shows the rate and payment for the offer you receive. During <strong>underwriting</strong>, the lender verifies your income and debts and may adjust your DTI if they find discrepancies.
          </p>
          <p className="text-gray-700 mb-4">
            If your DTI is too high for the loan amount you want, the lender may either deny the application or suggest a
            smaller loan. Some programs allow higher DTI with compensating factors. Shopping multiple lenders can reveal
            differences—some may be more flexible with DTI than others. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan earns $6,000 per month gross and has $800 in monthly debt (car loan, credit cards, student loan). Jordan
            is looking at a $400,000 home with 10% down—a <strong>loan amount</strong> of $360,000. At 7% <strong>interest rate</strong>, the
            principal and interest payment is about $2,395. Adding taxes and insurance of $400, the total housing payment is
            $2,795.
          </p>
          <p className="text-gray-700 mb-4">
            Jordan&apos;s back-end DTI: ($2,795 + $800) / $6,000 = 60%. That exceeds typical limits. Many conventional programs
            cap at 43–50%. Jordan would need to either pay down debt, increase income, or choose a less expensive home. If
            Jordan paid off the car loan ($350/month), total debt drops to $450. DTI becomes ($2,795 + $450) / $6,000 = 54%—still
            high for some programs. If Jordan instead found a $320,000 home at 10% down ($288,000 loan), the payment at 7% is
            about $1,916. With taxes and insurance of $320, housing is $2,236. DTI: ($2,236 + $800) / $6,000 = 51%. Some programs
            may accept that with compensating factors.
          </p>
          <p className="text-gray-700">
            The <strong>Loan Estimate</strong> would show Jordan&apos;s projected <strong>mortgage payment</strong> and <strong>closing costs</strong>. The example is illustrative—actual limits vary by lender and program.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, understanding DTI helps you set realistic expectations. If your DTI is high, you may
            qualify for a smaller <strong>loan amount</strong> than you expect—or you may need to pay down debt before buying.
            Knowing your DTI early lets you plan: pay off a car loan, avoid new debt, or adjust your price range.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> is a key input to DTI. A higher <strong>interest rate</strong> means a higher payment—which can reduce the loan amount you qualify for. Improving your credit score can lower your rate and thus your payment, potentially lowering your DTI. See{' '}
            <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link> and{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What is DTI</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Understanding DTI</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Being Informed</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You can plan to pay down debt before applying</li>
                <li>You can set a realistic price range based on your budget</li>
                <li>You can avoid surprises during underwriting</li>
                <li>You can compare offers from different lenders</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Paying down debt takes time and resources</li>
                <li>DTI limits vary by lender and program</li>
                <li>Income and debt verification can be strict</li>
                <li>High DTI may limit your options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not calculating DTI before applying:</strong> Surprises during <strong>underwriting</strong> can delay or derail your application. Get a rough estimate of your DTI and the loan amount you can afford.</li>
            <li><strong>Taking on new debt before closing:</strong> A new car loan or credit card can increase your DTI and affect approval. Avoid big purchases until after closing.</li>
            <li><strong>Underestimating housing costs:</strong> DTI includes taxes and insurance, not just principal and interest. Use your full monthly payment when estimating.</li>
            <li><strong>Not shopping lenders:</strong> Different lenders may have different DTI limits. FHA and VA may be more flexible than conventional. Get multiple <strong>Loan Estimates</strong> and compare.</li>
            <li><strong>Ignoring compensating factors:</strong> Reserves, a strong credit score, or a low LTV may help you qualify with a higher DTI. Ask your lender what options exist.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about DTI and mortgage approval">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Debt-to-income ratio and mortgage qualification</li>
            <li>Fannie Mae – Selling Guide (conventional DTI guidelines)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'DTI', href: '/mortgage-glossary/dti' }]}
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
            DTI guidelines vary by lender and program.
          </p>
        </section>
      </main>
    </div>
  );
}
