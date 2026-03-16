import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discount Points vs Origination Fee: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Discount points lower your rate; origination fees cover processing. Learn the difference and how they appear on your Loan Estimate.',
  openGraph: {
    title: 'Discount Points vs Origination Fee: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the difference between discount points and origination fees.',
  },
};

const ARTICLE_SLUG = 'discount-points-vs-origination-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Discount Points vs Origination Fee',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/discount-points-vs-origination-fee';

const FAQ_ITEMS = [
  {
    question: 'What is the difference between discount points and origination fees?',
    answer:
      'Discount points are optional fees you pay to lower your interest rate. Origination fees are charges for processing and underwriting the loan. Both appear in the "Origination Charges" section of the Loan Estimate.',
  },
  {
    question: 'Are discount points tax deductible?',
    answer:
      'Discount points on a purchase mortgage may be deductible in the year paid. Origination fees may be deductible over the life of the loan. Consult a tax professional for your situation.',
  },
  {
    question: 'Should I pay discount points?',
    answer:
      'It depends on how long you plan to keep the loan. If you stay long enough, the savings from the lower rate can exceed the cost of the points. Use a break-even analysis to compare.',
  },
  {
    question: 'Can I negotiate origination fees?',
    answer:
      'Some fees may be negotiable. Compare offers from multiple lenders and ask about the breakdown of origination charges. Shopping lenders can help you find better terms.',
  },
  {
    question: 'Where do discount points and origination fees appear on the Loan Estimate?',
    answer:
      'Both appear in Section A, "Origination Charges," on page 2 of the Loan Estimate. TRID requires lenders to itemize these charges so you can compare offers. The total origination charges also affect your APR.',
  },
  {
    question: 'Do discount points affect my APR?',
    answer:
      'Yes. Paying discount points lowers your interest rate, which typically lowers your APR. Origination fees are also factored into the APR calculation. See our What Is APR guide for how APR works.',
  },
];

export default function DiscountPointsVsOriginationFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Discount Points vs Origination Fee: A Guide for U.S. Homebuyers',
    description:
      'Discount points lower your rate; origination fees cover processing. Learn the difference and how they appear on your Loan Estimate.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Discount Points vs Origination Fee: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Both <strong>discount points</strong> and <strong>origination fees</strong> appear in the origination charges section of your <strong>Loan Estimate</strong>. But they serve different purposes: discount points are optional fees you pay to lower your <strong>interest rate</strong>; origination fees are charges for processing and <strong>underwriting</strong> the loan. Understanding the difference helps you compare offers and decide whether paying points makes sense for your situation.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), lenders must provide a Loan Estimate within 3 business days of application. That form breaks down your <strong>closing costs</strong>, including origination charges. Both discount points and origination fees are listed in Section A. Your <strong>mortgage payment</strong> and <strong>loan amount</strong> are affected by whether you pay points—because points lower your rate, which lowers your monthly payment.
          </p>
          <p className="text-gray-700">
            Learn more in our <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points?</Link> and <Link href="/mortgage/what-is-origination-fee" className="text-primary hover:underline font-medium">What Is an Origination Fee?</Link> guides.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Discount points</strong> are prepaid interest. One point typically equals 1% of your <strong>loan amount</strong>. For a $300,000 loan, one point costs $3,000. In exchange, the lender may reduce your <strong>interest rate</strong> by about 0.25% (the exact reduction varies by lender and market). Paying points is optional—you choose whether to pay more upfront to get a lower rate and a lower <strong>mortgage payment</strong> over time.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Origination fees</strong> are charges for processing and underwriting the loan. They cover the cost of evaluating your application, verifying income and assets, and preparing the loan. Unlike discount points, origination fees are generally not optional in the same way—they are a cost of obtaining the loan. Lenders may structure them as a percentage of the loan amount (e.g., 1%) or a flat fee (e.g., $1,500). Under RESPA (Real Estate Settlement Procedures Act), lenders must disclose these fees clearly on the Loan Estimate.
          </p>
          <p className="text-gray-700">
            Both affect your total <strong>closing costs</strong>. The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> on your Loan Estimate incorporates some of these costs, so comparing APRs across lenders can help you evaluate the full cost of the loan. See <Link href="/mortgage/apr-vs-interest-rate" className="text-primary hover:underline font-medium">APR vs Interest Rate</Link> for how they differ.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply for a mortgage, the lender provides a Loan Estimate with your estimated <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Section A of the Loan Estimate lists origination charges. You may see line items such as "Discount points" (optional) and "Origination fee" or "Loan origination fee" (typically required). The lender may also offer a "no-points" option—a higher rate with no discount points paid.
          </p>
          <p className="text-gray-700 mb-4">
            If you pay discount points, the rate reduction is usually locked when you lock your rate. The points are paid at closing as part of your <strong>closing costs</strong>. Your <strong>mortgage payment</strong> is calculated using the lower rate. Over time, the savings from the lower payment can offset the upfront cost of the points—but only if you keep the loan long enough. This is called the break-even period.
          </p>
          <p className="text-gray-700 mb-4">
            Origination fees are also paid at closing. They do not lower your rate—they simply cover the cost of <strong>underwriting</strong> and processing. Some lenders offer "no origination fee" loans, but they may charge a higher <strong>interest rate</strong> instead. Comparing the full picture—rate, points, and origination fees—helps you choose the best offer. The TILA (Truth in Lending Act) requires lenders to disclose the APR, which reflects the cost of credit including some fees.
          </p>
          <p className="text-gray-700">
            Your <strong>loan amount</strong> does not include points or origination fees—those are paid separately at closing (or rolled into the loan in some cases, though that increases your balance). See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how your payment is applied.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Maria is buying a $400,000 home with 20% down. Her <strong>loan amount</strong> is $320,000. She receives two Loan Estimates from different lenders. Lender A offers 6.5% with no points and a $2,400 origination fee (0.75%). Lender B offers 6.25% with 1 discount point ($3,200) and a $1,600 origination fee (0.5%).
          </p>
          <p className="text-gray-700 mb-4">
            At 6.5%, Maria&apos;s <strong>mortgage payment</strong> (principal and interest) is about $2,022. At 6.25%, it is about $1,969—a difference of $53 per month. She pays $3,200 for the point plus $800 less in origination fees (net $2,400 more upfront) to save $53 per month. Her break-even is about 45 months. If she plans to stay in the home and keep the loan for 7–10 years, paying the point could save her money. If she might refinance or move in 3 years, the no-points option may cost less overall.
          </p>
          <p className="text-gray-700 mb-4">
            Maria compares the APRs on both Loan Estimates. Lender B&apos;s APR is lower because the rate is lower, even though she pays more upfront. She also checks the total <strong>closing costs</strong> on page 2. The example is illustrative—actual rates, points, and fees vary by lender and market.
          </p>
          <p className="text-gray-700">
            The key takeaway: discount points reduce your <strong>interest rate</strong> and <strong>mortgage payment</strong>; origination fees do not. Both are part of your <strong>closing costs</strong>. Deciding whether to pay points depends on how long you expect to keep the loan.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, the Loan Estimate can feel overwhelming. Knowing that discount points and origination fees are different—and where they appear—helps you compare offers. Two lenders may quote the same <strong>interest rate</strong>, but one may charge 1% origination and the other 0.5%. One may include discount points in the quote; the other may offer a no-points option. Comparing the full <strong>closing costs</strong> and APR, not just the rate, gives you a clearer picture.
          </p>
          <p className="text-gray-700 mb-4">
            If you are short on cash at closing, you might prefer a no-points loan—even if it means a slightly higher <strong>mortgage payment</strong>. If you have extra cash and plan to stay put, paying points could lower your payment and total interest over the life of the loan. Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio</Link> is calculated using your <strong>mortgage payment</strong>, so a lower rate (from points) can help you qualify for a larger <strong>loan amount</strong> in some cases.
          </p>
          <p className="text-gray-700">
            TRID was designed to make it easier to compare offers. Use the Loan Estimate to compare origination charges, total closing costs, and APR across lenders. Do not focus only on the <strong>interest rate</strong>—the fees matter too.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Discount Points vs Origination Fees</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Discount Points</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>Lower interest rate and mortgage payment</li>
                <li>May save money if you keep the loan long enough</li>
                <li>Optional—you choose whether to pay</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Higher upfront closing costs</li>
                <li>Break-even may take years</li>
                <li>No benefit if you refinance or sell soon</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Origination Fee</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>Covers processing and underwriting</li>
                <li>Some lenders offer low or no origination fee</li>
                <li>Transparent on Loan Estimate</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Does not lower your rate</li>
                <li>Adds to closing costs</li>
                <li>Varies by lender—shop to compare</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Comparing only the interest rate:</strong> A lower rate with high origination fees or points may cost more overall. Compare the full Loan Estimate and APR.</li>
            <li><strong>Paying points without calculating break-even:</strong> If you refinance or move in 3 years, points may not pay off. Estimate how long you will keep the loan.</li>
            <li><strong>Confusing discount points with origination fees:</strong> Points lower your rate; origination fees do not. Both appear in Section A but serve different purposes.</li>
            <li><strong>Not shopping lenders:</strong> Origination fees and point pricing vary. Get multiple Loan Estimates and compare.</li>
            <li><strong>Ignoring the APR:</strong> The APR includes some fees and can help you compare the true cost of credit across offers.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Know Before You Owe: Loan Estimate</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Points and fees vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
