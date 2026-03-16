import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FHA Streamline Refinance | Housentia',
  description:
    'FHA streamline refinance simplifies the process with reduced documentation and no appraisal. Learn eligibility and net tangible benefit requirements.',
  openGraph: { title: 'FHA Streamline Refinance | Housentia', description: 'Understand FHA streamline refinancing.' },
};

const ARTICLE_SLUG = 'fha-streamline-refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'FHA Streamline Refinance' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/fha-streamline-refinance';

const FAQ_ITEMS = [
  {
    question: 'What is an FHA streamline refinance?',
    answer:
      'An FHA streamline refinance is a simplified refinance for existing FHA borrowers. It typically requires minimal documentation, no appraisal, and may not require a credit check (non-credit-qualified). The goal is to lower your interest rate or mortgage payment.',
  },
  {
    question: 'Who qualifies for an FHA streamline?',
    answer:
      'You must have an existing FHA loan and be current on payments. The refinance must provide a net tangible benefit—a lower payment, lower rate, or shorter term. Some lenders require a minimum time in the loan.',
  },
  {
    question: 'Is there a credit check?',
    answer:
      'Credit-qualified streamline requires a credit check and may offer better terms. Non-credit-qualified streamline may not require a credit check but may have stricter net tangible benefit rules. Lender requirements vary.',
  },
  {
    question: 'Can I get cash out with an FHA streamline?',
    answer:
      'No. FHA streamline is rate-and-term only—no cash out. For cash out, you need a standard FHA refinance. See our Cash Out vs Rate and Term Refinance guide.',
  },
  {
    question: 'Do I need an appraisal?',
    answer:
      'Typically no. One of the benefits of the streamline is that it often does not require an appraisal, which speeds the process and reduces closing costs.',
  },
  {
    question: 'Will my mortgage insurance change?',
    answer:
      'You may be able to reduce or eliminate upfront MIP in some cases, but annual MIP typically continues. FHA streamline rules on MIP have changed over time—check with your lender for current requirements.',
  },
];

export default function FhaStreamlineRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'FHA Streamline Refinance', description: 'Learn about FHA streamline refinance eligibility and benefits.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="FHA Streamline Refinance" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            An <strong>FHA streamline refinance</strong> is a simplified refinance for borrowers who already have an FHA loan. It is designed to lower your <strong>interest rate</strong> or <strong>mortgage payment</strong> with minimal paperwork—typically no appraisal, reduced documentation, and in some cases no credit check. If rates have dropped since you got your FHA loan, a streamline can help you lock in a lower rate without the full <strong>underwriting</strong> process of a standard refinance.
          </p>
          <p className="text-gray-700 mb-4">
            The streamline is <strong>rate-and-term only</strong>—no cash out. You replace your existing FHA loan with a new one that has a lower rate, lower payment, or shorter term. Under TRID (TILA-RESPA Integrated Disclosure), you still receive a <strong>Loan Estimate</strong> within 3 business days of application and a Closing Disclosure before closing. Your new <strong>loan amount</strong> pays off the old one; any difference goes to <strong>closing costs</strong> or is rolled into the new loan where permitted. See <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link>, <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>, and <Link href="/mortgage/cash-out-vs-rate-and-term-refinance" className="text-primary hover:underline font-medium">Cash Out vs Rate and Term Refinance</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            With a streamline, you are refinancing your existing FHA loan into a new FHA loan. The new <strong>loan amount</strong> typically pays off your current balance plus any allowable <strong>closing costs</strong> that are financed. You do not receive cash back—this is a <strong>rate-and-term</strong> refinance. Your goal is a lower <strong>interest rate</strong>, lower <strong>mortgage payment</strong>, or shorter loan term.
          </p>
          <p className="text-gray-700 mb-4">
            FHA requires a <strong>net tangible benefit</strong>. The refinance must improve your situation: a lower monthly payment, a lower rate, or a shorter term. Lenders verify this during <strong>underwriting</strong>. If you have a non-credit-qualified streamline (no credit check), the net tangible benefit rules may be stricter—for example, requiring a minimum reduction in payment or rate.
          </p>
          <p className="text-gray-700">
            There are two main types: <strong>credit-qualified</strong> (credit check, income verification—may offer better terms) and <strong>non-credit-qualified</strong> (may skip credit check and some documentation—useful if your credit has changed). Not all lenders offer both. See <Link href="/mortgage/can-you-refinance-with-bad-credit" className="text-primary hover:underline font-medium">Can You Refinance with Bad Credit</Link> for context. Your <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link> is not reappraised because there is typically no appraisal—the new loan is based on your current balance.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply with an FHA-approved lender. The lender will <strong>underwrite</strong> the loan using streamlined documentation—often just proof of current FHA loan, payment history, and in credit-qualified cases, income and credit. No appraisal means the lender does not need to verify the home&apos;s current value. Your new <strong>loan amount</strong> is based on your payoff balance plus any financed <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            You must be current on your existing FHA loan. Some lenders require 6–12 months of on-time payments. The refinance must provide a net tangible benefit. For a rate reduction, FHA typically requires the new rate to be at least 0.5% lower (or a meaningful payment reduction). Rules vary by lender and over time.
          </p>
          <p className="text-gray-700 mb-4">
            You receive a <strong>Loan Estimate</strong> within 3 business days of application. It shows your new <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. The RESPA (Real Estate Settlement Procedures Act) and TILA (Truth in Lending Act) require clear disclosure. Your <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> will reflect the cost of the new loan. At closing, the new loan pays off the old one. You begin making payments on the new loan. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how your payment is applied.
          </p>
          <p className="text-gray-700">
            FHA mortgage insurance (MIP) continues on the new loan. In some cases, streamline refinances have offered reduced upfront MIP. Annual MIP typically continues for the life of the loan if you put less than 10% down on the original purchase. Check current FHA guidelines for MIP on refinances.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam has an FHA loan with a balance of $280,000 and an <strong>interest rate</strong> of 7%. Their <strong>mortgage payment</strong> (principal and interest) is about $1,863. Rates have dropped; Sam can refinance to 6% with an FHA streamline. The new <strong>loan amount</strong> would be $280,000 plus $2,500 in financed <strong>closing costs</strong>—$282,500 total. At 6%, the new payment would be about $1,694—a savings of $169 per month.
          </p>
          <p className="text-gray-700 mb-4">
            Sam receives a <strong>Loan Estimate</strong> showing the new rate, payment, and closing costs. The net tangible benefit is clear: lower payment and lower rate. Sam&apos;s break-even is about 15 months ($2,500 in costs ÷ $169 savings). If Sam plans to stay in the home for several years, the streamline makes sense. If they might sell in a year, the <strong>closing costs</strong> might not be worth it.
          </p>
          <p className="text-gray-700 mb-4">
            Sam uses the non-credit-qualified option because their credit has dipped since the original loan. They avoid a credit check and still get the rate reduction. The example is illustrative—actual rates, fees, and net tangible benefit rules vary by lender and FHA guidelines.
          </p>
          <p className="text-gray-700">
            The key takeaway: a streamline can lower your <strong>mortgage payment</strong> with less hassle than a full refinance. Compare the <strong>Loan Estimate</strong> with your current loan to confirm the benefit.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If you have an FHA loan and rates have dropped, a streamline can reduce your <strong>mortgage payment</strong> without the full refinance process. No appraisal means faster <strong>underwriting</strong> and lower <strong>closing costs</strong>. For borrowers whose credit has changed—or who want to avoid a credit check—the non-credit-qualified option can make refinancing possible when a standard refinance might not.
          </p>
          <p className="text-gray-700 mb-4">
            The tradeoff: you cannot get cash out. If you need to tap equity, you need a standard FHA refinance or another option. Your <strong>loan amount</strong> will include any financed closing costs, which slightly increases your balance. Run a break-even analysis: divide your <strong>closing costs</strong> by your monthly savings. If you will stay in the home longer than the break-even period, the streamline may be worthwhile. See <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>.
          </p>
          <p className="text-gray-700">
            Use the <strong>Loan Estimate</strong> to compare. TRID requires lenders to provide consistent disclosure so you can shop. Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link> is based on your <strong>mortgage payment</strong>—a lower payment can improve your financial flexibility even if you are not applying for a new loan.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of FHA Streamline Refinance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Minimal documentation—often no appraisal</li>
                <li>May not require credit check (non-credit-qualified)</li>
                <li>Faster underwriting than standard refinance</li>
                <li>Lower closing costs in many cases</li>
                <li>Can lower interest rate and mortgage payment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>No cash out—rate and term only</li>
                <li>Must have existing FHA loan</li>
                <li>Net tangible benefit required</li>
                <li>FHA MIP continues on new loan</li>
                <li>Not all lenders offer streamline</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not checking net tangible benefit:</strong> The refinance must improve your situation. If the new rate or payment is not meaningfully better, you may not qualify.</li>
            <li><strong>Ignoring closing costs:</strong> Even with reduced fees, <strong>closing costs</strong> add up. Factor them into your break-even. Rolling costs into the <strong>loan amount</strong> increases your balance.</li>
            <li><strong>Assuming you can get cash out:</strong> Streamline is rate-and-term only. For cash out, you need a different refinance product.</li>
            <li><strong>Refinancing too soon:</strong> Some lenders require 6–12 months in the current loan. Check eligibility before applying.</li>
            <li><strong>Not shopping lenders:</strong> Streamline terms and fees vary. Get multiple <strong>Loan Estimates</strong> and compare.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about FHA streamline">
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
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">FHA streamline rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
