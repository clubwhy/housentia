import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loan Estimate Explained: A Guide for U.S. Homebuyers | Housentia',
  description:
    'A detailed walkthrough of the Loan Estimate form. Learn what each section means: loan terms, projected payments, and closing costs.',
  openGraph: {
    title: 'Loan Estimate Explained: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the Loan Estimate form section by section.',
  },
};

const ARTICLE_SLUG = 'loan-estimate-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Loan Estimate Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/loan-estimate-explained';

const FAQ_ITEMS = [
  {
    question: 'When do I receive the Loan Estimate?',
    answer:
      'Under TRID, lenders must provide a Loan Estimate within 3 business days of receiving your application for most residential mortgages. The clock starts when you submit the six key pieces of information: name, income, SSN, property address, estimated value, and loan amount sought.',
  },
  {
    question: 'Is the Loan Estimate binding?',
    answer:
      'No. The Loan Estimate is an estimate, not a final offer. Some costs can change within tolerance limits; others may change with a valid changed circumstance. The Closing Disclosure at least 3 days before closing shows the final numbers.',
  },
  {
    question: 'What are the main sections of the Loan Estimate?',
    answer:
      'Page 1: Loan Terms (loan amount, interest rate, monthly P&I, rate type), Projected Payments (P&I, mortgage insurance, escrow), and Costs at Closing. Page 2: Itemized closing costs. Page 3: Comparisons (5-year cost, total of payments, APR) and other considerations.',
  },
  {
    question: 'Can I compare Loan Estimates from different lenders?',
    answer:
      'Yes. The standardized format makes it easier to compare. Focus on interest rate, APR (which includes some fees), total closing costs, and the estimated mortgage payment. Line-by-line comparison can reveal fee differences.',
  },
  {
    question: 'How does the Loan Estimate relate to underwriting?',
    answer:
      'The Loan Estimate is based on the information you provide at application. During underwriting, the lender verifies that information. If verified income, credit, or property value differs, the lender may issue a revised Loan Estimate with different terms.',
  },
  {
    question: 'What is the difference between the interest rate and APR on the Loan Estimate?',
    answer:
      'The interest rate is the rate applied to your loan amount. The APR includes some closing costs and reflects the annual cost of credit. See our What Is APR guide for details. Both appear on page 1 and in the Comparisons section.',
  },
];

export default function LoanEstimateExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Loan Estimate Explained: A Guide for U.S. Homebuyers',
    description:
      'A detailed walkthrough of the Loan Estimate form. Learn what each section means and how to compare offers.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Loan Estimate Explained: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>Loan Estimate</strong> is a three-page form that lenders must provide within 3 business days of
            receiving your mortgage application. Required under TRID (TILA-RESPA Integrated Disclosure), it summarizes
            your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong> in a consistent format so you can compare offers and understand the cost of
            credit before you commit.
          </p>
          <p className="text-gray-700 mb-4">
            The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) require clear disclosure
            of loan terms and settlement costs. The Loan Estimate fulfills that requirement early in the process—before
            <strong> underwriting</strong> is complete. This guide walks through each section so you know what to look
            for. For a general overview, see <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is a Loan Estimate</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you receive a Loan Estimate, you are seeing the lender&apos;s proposed terms based on the information you
            provided. The <strong>loan amount</strong> and <strong>interest rate</strong> determine your{' '}
            <strong>mortgage payment</strong>. The <strong>closing costs</strong> are the fees you pay at settlement. The
            form is designed so you can compare multiple offers side by side—same structure, same line items.
          </p>
          <p className="text-gray-700 mb-4">
            The Loan Estimate is an estimate, not a contract. Some costs can change within tolerance; the Closing
            Disclosure shows the final numbers at least 3 days before closing. If your application changes—for example,
            if <strong>underwriting</strong> finds different income or property value—the lender may issue a revised
            Loan Estimate. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> for how your payment is applied.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            <strong>Page 1</strong> opens with <strong>Loan Terms</strong>: the <strong>loan amount</strong>, <strong>interest rate</strong>,
            monthly principal and interest, and whether the rate is fixed or adjustable. Next comes <strong>Projected
            Payments</strong>—your base <strong>mortgage payment</strong> plus mortgage insurance (if applicable) and
            estimated escrow for taxes and insurance. The <strong>Costs at Closing</strong> section shows the total
            estimated <strong>closing costs</strong> in three buckets: origination charges, services you can shop for, and
            services you cannot shop for.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Page 2</strong> itemizes those costs—appraisal, title, recording fees, and more. You can see exactly
            what each service costs and which ones you can shop for. <strong>Page 3</strong> includes <strong>Comparisons</strong>:
            how much you will pay in the first 5 years, the total of all payments over the life of the loan, and the APR.
            It also covers other considerations such as appraisal, assumption, and homeowner&apos;s insurance.
          </p>
          <p className="text-gray-700 mb-4">
            The Loan Estimate and <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">Closing Disclosure</Link> use the same
            section structure, so you can compare the initial estimate to the final numbers. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>,{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>, and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link> for how these affect your terms.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan applies for a $350,000 conventional loan to buy a $437,500 home (20% down). Within 3 business days,
            Jordan receives a Loan Estimate. <strong>Page 1</strong> shows: <strong>loan amount</strong> $350,000, 7%
            <strong> interest rate</strong>, 30-year term, monthly P&I $2,329. With estimated escrow of $450, the total
            projected payment is $2,779. <strong>Closing costs</strong> are estimated at $8,200.
          </p>
          <p className="text-gray-700 mb-4">
            Jordan gets a second Loan Estimate from another lender: 6.875% rate, P&I $2,297, but <strong>closing costs</strong> of
            $9,500. The first offer has a slightly higher <strong>mortgage payment</strong> but lower fees. Jordan uses
            the <strong>Comparisons</strong> section to see the 5-year cost and APR—the first offer&apos;s APR is 7.12%,
            the second is 7.08%. The difference is small; Jordan weighs the lower payment vs. the higher upfront costs.
          </p>
          <p className="text-gray-700">
            At closing, Jordan receives the Closing Disclosure. The numbers are close to the Loan Estimate; a few line
            items shifted slightly. The example is illustrative. See <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how the payment is applied over time.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, the Loan Estimate can feel overwhelming. Knowing what each section means helps you
            spot the key numbers: your <strong>mortgage payment</strong>, total <strong>closing costs</strong>, and APR.
            You do not have to memorize the form—focus on those three, then dig into line items if something looks off.
          </p>
          <p className="text-gray-700 mb-4">
            Shopping multiple lenders is easier when every offer uses the same format. Compare the same line items across
            Loan Estimates. A lower <strong>interest rate</strong> may come with higher origination fees; the APR helps
            you see the blended cost. If you lock your rate, the rate and certain costs are typically locked—but confirm
            with your lender what is locked and for how long.
          </p>
          <p className="text-gray-700">
            The Loan Estimate arrives before <strong>underwriting</strong> is complete. If the lender discovers different
            income, credit, or property value, they may issue a revised estimate. Review any revised form carefully. See{' '}
            <Link href="/mortgage/closing-disclosure-explained" className="text-primary hover:underline font-medium">Closing Disclosure Explained</Link> for the final step.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of the Loan Estimate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Standardized format makes comparison straightforward</li>
                <li>Arrives early—within 3 business days of application</li>
                <li>Shows loan terms, payment, and costs in one place</li>
                <li>Required by law—lenders cannot skip it for covered loans</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Estimates can change; final numbers are on the Closing Disclosure</li>
                <li>Based on application info—underwriting may uncover differences</li>
                <li>Some costs have tolerance limits; others can change with valid reasons</li>
                <li>Does not include every possible fee (e.g., some third-party services)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Only comparing the interest rate:</strong> The APR and total <strong>closing costs</strong> matter. A lower rate with higher fees may cost more over time.</li>
            <li><strong>Ignoring the projected payment:</strong> The <strong>mortgage payment</strong> includes P&I, mortgage insurance, and escrow. Ensure it fits your budget and <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>.</li>
            <li><strong>Not checking which services you can shop for:</strong> Page 2 lists services you can shop for. Shopping can lower some <strong>closing costs</strong>.</li>
            <li><strong>Assuming the estimate is final:</strong> The Loan Estimate is an estimate. Review the Closing Disclosure before closing to confirm the final numbers.</li>
            <li><strong>Not asking about rate locks:</strong> If you lock your rate, the rate and certain fees are typically locked for a set period. Ask what is locked and when it expires.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about the Loan Estimate">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe: Loan Estimate</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Tolerance and variance rules for closing costs</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' }]}
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
            Loan Estimate rules are set by the CFPB under TRID. Actual forms may vary slightly.
          </p>
        </section>
      </main>
    </div>
  );
}
