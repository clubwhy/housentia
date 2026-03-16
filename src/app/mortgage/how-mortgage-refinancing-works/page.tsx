import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Mortgage Refinancing Works | Housentia',
  description:
    'Learn how mortgage refinancing works: application, underwriting, closing, and payoff of your old loan. Understand the steps from start to finish.',
  openGraph: { title: 'How Mortgage Refinancing Works | Housentia', description: 'Understand the refinance process.' },
};

const ARTICLE_SLUG = 'how-mortgage-refinancing-works';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'How Mortgage Refinancing Works' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-mortgage-refinancing-works';

const FAQ_ITEMS = [
  {
    question: 'What are the steps to refinance?',
    answer:
      'Apply with a lender, get a Loan Estimate within 3 business days (under TRID), lock your rate, complete underwriting, satisfy conditions, schedule closing, sign documents, and the new lender pays off your old loan. You then make payments on the new mortgage.',
  },
  {
    question: 'How long does refinancing take?',
    answer:
      'Typically 30–45 days, similar to a purchase. See our Refinance Timeline Explained guide for details. Delays can occur if underwriting requests additional documentation or if appraisal or title issues arise.',
  },
  {
    question: 'Do I need an appraisal to refinance?',
    answer:
      'Often yes, unless you qualify for a waiver (e.g., streamline refinance, appraisal waiver programs). The appraisal helps the lender determine your LTV and loan amount. See Refinance Appraisal Requirements.',
  },
  {
    question: 'What happens to my old mortgage?',
    answer:
      'The new lender pays it off at closing. Your old loan is satisfied and you begin making payments on the new loan. The payoff amount includes principal, accrued interest, and any fees. Your new mortgage payment is based on the new loan amount and interest rate.',
  },
  {
    question: 'How does the Loan Estimate work for a refinance?',
    answer:
      'Under TRID, you receive a Loan Estimate within 3 business days of application. It shows your new loan amount, interest rate, mortgage payment, and closing costs. Compare it to your current payment and costs to evaluate whether refinancing makes sense for you.',
  },
  {
    question: 'What is the difference between rate-and-term and cash-out refinance?',
    answer:
      'Rate-and-term refinance replaces your loan with a new one of similar or smaller amount—often to lower your rate or change the term. Cash-out refinance lets you borrow more than you owe and receive the difference. See Cash-Out vs Rate-and-Term Refinance.',
  },
];

export default function HowMortgageRefinancingWorksPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'How Mortgage Refinancing Works', description: 'Learn the refinance process from application to payoff.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Mortgage Refinancing Works" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage refinancing</strong> replaces your current loan with a new one. You may refinance to lower your{' '}
            <strong>interest rate</strong>, reduce your <strong>mortgage payment</strong>, change your loan term, or tap
            equity (cash-out refinance). The process is similar to a purchase: apply, get a <strong>Loan Estimate</strong> within 3 business days under TRID, complete <strong>underwriting</strong>, close, and the new lender pays off your old loan.
          </p>
          <p className="text-gray-700 mb-4">
            Your new <strong>loan amount</strong> may be equal to or greater than what you owe, depending on whether you
            do a rate-and-term or cash-out refinance. Your new <strong>mortgage payment</strong> depends on the loan amount,{' '}
            <strong>interest rate</strong>, and term. See <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is Refinance</Link>,{' '}
            <Link href="/mortgage/refinance-timeline-explained" className="text-primary hover:underline font-medium">Refinance Timeline Explained</Link>, and{' '}
            <Link href="/mortgage/refinance-documentation-requirements" className="text-primary hover:underline font-medium">Refinance Documentation Requirements</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you refinance, you are essentially taking out a new mortgage to pay off the old one. The new lender
            provides a new <strong>loan amount</strong> (which may include the balance you owe plus any cash-out), a new{' '}
            <strong>interest rate</strong>, and a new <strong>mortgage payment</strong>. Your <strong>closing costs</strong>{' '}
            are paid at closing—often rolled into the loan or paid out of pocket.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business
            days of application. It shows your new rate, payment, and <strong>closing costs</strong>. The TILA (Truth in
            Lending Act) requires clear disclosure of the cost of credit; RESPA (Real Estate Settlement Procedures Act)
            governs settlement and closing. Your <strong>Loan Estimate</strong> and Closing Disclosure help you compare
            offers and understand the cost of refinancing.
          </p>
          <p className="text-gray-700">
            The new loan is underwritten like a purchase: the lender verifies income, credit, assets, and the property. Your{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link> still matter.
            See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how your payment is applied.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply with a lender (or your current servicer) and provide income, asset, and debt info. The lender pulls
            your credit and orders an appraisal if needed. Within 3 business days, you receive a <strong>Loan Estimate</strong>.
            You can lock your rate to secure the terms. During <strong>underwriting</strong>, the lender verifies your
            application, reviews the appraisal, and may request additional conditions.
          </p>
          <p className="text-gray-700 mb-4">
            Once approved, you receive a Closing Disclosure at least 3 business days before closing. At closing, you sign
            the new mortgage documents. The new lender pays off your old loan (principal, accrued interest, fees). You
            begin making payments on the new loan. Your old mortgage is satisfied; the new one is recorded.
          </p>
          <p className="text-gray-700 mb-4">
            For a rate-and-term refinance, the new <strong>loan amount</strong> typically equals the payoff of your
            old loan plus any <strong>closing costs</strong> you roll in. For a cash-out refinance, you borrow more than
            you owe and receive the difference. See <Link href="/mortgage/cash-out-vs-rate-and-term-refinance" className="text-primary hover:underline font-medium">Cash-Out vs Rate-and-Term Refinance</Link> and{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>.
          </p>
          <p className="text-gray-700">
            Streamline refinances (FHA, VA) may have simplified documentation and no appraisal. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam has a $280,000 mortgage at 7.5% with a <strong>mortgage payment</strong> of about $1,956 (principal and
            interest). Sam has 25 years left. Rates have dropped; Sam can refinance to 6.5% for a 30-year term. The
            payoff balance is $272,000. Sam applies for a rate-and-term refinance.
          </p>
          <p className="text-gray-700 mb-4">
            The lender provides a <strong>Loan Estimate</strong>: new <strong>loan amount</strong> $272,000 (plus $4,000
            in <strong>closing costs</strong> rolled in = $276,000 total), 6.5% <strong>interest rate</strong>, new <strong>mortgage payment</strong> about $1,745. Sam saves about $211 per month. The break-even point—when savings cover <strong>closing costs</strong>—is about 19 months. If Sam plans to stay 5+ years, the refinance may save money over time.
          </p>
          <p className="text-gray-700">
            At closing, the new lender pays off Sam&apos;s old $272,000 loan. Sam signs the new mortgage. The example is
            illustrative. Actual rates, costs, and savings vary by lender and market. See{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link> and{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If you already own a home, refinancing can lower your payment, shorten your term, or free up equity. Understanding
            the process helps you prepare: gather documents, know your current balance and rate, and compare offers. Your{' '}
            <strong>Loan Estimate</strong> shows the new rate and payment—compare it to your current payment to see if
            refinancing makes sense.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> matter. Even with a lower rate, you pay fees to refinance. Calculate the
            break-even point: how long until your monthly savings cover the costs? If you plan to move soon, refinancing
            may not pay off. See <Link href="/mortgage/when-to-refinance-a-mortgage" className="text-primary hover:underline font-medium">When to Refinance a Mortgage</Link> and{' '}
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>.
          </p>
          <p className="text-gray-700">
            Your credit score and DTI still affect your refinance approval and <strong>interest rate</strong>. Improving
            your credit before applying can help you qualify for a better rate. See{' '}
            <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Refinancing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Potential Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower monthly mortgage payment</li>
                <li>Lower interest rate and total interest over time</li>
                <li>Shorter term or cash-out for other needs</li>
                <li>Consolidate debt or fund home improvements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Closing costs can be substantial</li>
                <li>Break-even may take years</li>
                <li>Resets the clock on your loan term</li>
                <li>You must qualify again (credit, income, DTI)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not checking the break-even point:</strong> A lower rate can still cost more if you pay high <strong>closing costs</strong> and move soon. Calculate when savings cover costs.</li>
            <li><strong>Ignoring the APR:</strong> The <strong>Loan Estimate</strong> shows the APR, which includes some fees. Compare APRs across lenders to see the true cost. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>.</li>
            <li><strong>Not shopping lenders:</strong> Rates and fees vary. Get multiple <strong>Loan Estimates</strong> and compare before locking.</li>
            <li><strong>Extending the term unnecessarily:</strong> Refinancing from a 20-year to a 30-year loan lowers the payment but may increase total interest. Consider whether a shorter term fits your goals.</li>
            <li><strong>Making big financial changes during underwriting:</strong> Avoid new debt, job changes, or large purchases. They can affect approval or your <strong>interest rate</strong>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about how refinancing works">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Refinancing your mortgage</li>
            <li>Fannie Mae – Selling Guide (refinance guidelines)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Refinance Analyzer', href: '/tools/refinance-analyzer' }} className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Refinance processes vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
