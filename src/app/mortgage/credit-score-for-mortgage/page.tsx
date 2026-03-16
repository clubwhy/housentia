import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Credit Score Is Needed for a Mortgage? A Guide for U.S. Homebuyers | Housentia',
  description:
    'Credit score requirements vary by loan type. Learn the typical ranges for conventional, FHA, and VA loans and how to improve your score.',
  openGraph: {
    title: 'What Credit Score Is Needed for a Mortgage? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand credit score requirements for different mortgage types.',
  },
};

const ARTICLE_SLUG = 'credit-score-for-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Credit Score Is Needed for a Mortgage?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/credit-score-for-mortgage';

const FAQ_ITEMS = [
  {
    question: 'What credit score do I need for a conventional loan?',
    answer:
      'Conventional loans often prefer scores of 620 or higher, though 740+ may qualify for better interest rates. Requirements vary by lender and loan program. Some programs may allow 580 with compensating factors.',
  },
  {
    question: 'What credit score do I need for an FHA loan?',
    answer:
      'FHA loans may accept scores as low as 500 with a 10% down payment, or 580 for 3.5% down. Many lenders set overlays requiring 620 or higher. Requirements vary by lender.',
  },
  {
    question: 'Does a higher credit score get a better rate?',
    answer:
      'Generally yes. Higher scores often qualify for lower interest rates and better terms. Lenders use risk-based pricing—your credit score affects the rate and fees you receive on your Loan Estimate.',
  },
  {
    question: 'How can I improve my credit score before applying?',
    answer:
      'Pay bills on time, reduce credit card balances, avoid new credit inquiries, and check your report for errors. Improvement takes time—plan several months before applying if possible.',
  },
  {
    question: 'Does the lender use my middle score?',
    answer:
      'For joint applications, lenders typically use the lower of the two middle scores from the three credit bureaus. For a single applicant, they use the middle of the three scores.',
  },
  {
    question: 'Will a mortgage application hurt my credit?',
    answer:
      'Applying causes a hard inquiry, which may slightly lower your score temporarily. Multiple applications within a short window (e.g., 14–45 days) for the same purpose are often counted as one inquiry when rate shopping.',
  },
];

export default function CreditScoreForMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Credit Score Is Needed for a Mortgage? A Guide for U.S. Homebuyers',
    description:
      'Credit score requirements vary by loan type. Learn the typical ranges for conventional, FHA, and VA loans.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Credit Score Is Needed for a Mortgage? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Your <strong>credit score</strong> is one of the key factors lenders use when evaluating your mortgage application. It affects whether you qualify, what loan programs you can access, and what <strong>interest rate</strong> you receive. A higher score often means a lower rate—which can lower your <strong>mortgage payment</strong> over the life of the loan.
          </p>
          <p className="text-gray-700 mb-4">
            Credit score requirements vary by loan type. Conventional loans typically prefer 620 or higher; FHA and VA loans may be more flexible. Federal rules—including the Truth in Lending Act (TILA) and TRID (TILA-RESPA Integrated Disclosure)—require lenders to provide a <strong>Loan Estimate</strong> within 3 business days of application. That form shows your estimated <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> based on the credit information they have. Your score can affect all of these.
          </p>
          <p className="text-gray-700">
            Credit is one of several factors. Lenders also consider income, <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link>, and the property. See <Link href="/mortgage/what-lenders-look-at-mortgage-approval" className="text-primary hover:underline font-medium">What Lenders Look at When Approving a Mortgage</Link> for the full picture.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>credit score</strong> is a number that summarizes your creditworthiness based on your credit report. Lenders use it to assess risk: the higher the score, the more likely you are to repay. Scores typically range from 300 to 850. For mortgages, lenders often pull scores from all three bureaus (Equifax, Experian, TransUnion) and use the middle score—or, for joint applicants, the lower of the two middle scores.
          </p>
          <p className="text-gray-700 mb-4">
            Your score affects your <strong>loan amount</strong> (indirectly, through qualification), your <strong>interest rate</strong>, and sometimes your <strong>closing costs</strong>. Lenders use risk-based pricing: borrowers with lower scores may receive higher rates or pay more in fees. A difference of 50–100 points can move your rate by 0.25%–0.5% or more—which can add hundreds of dollars to your monthly <strong>mortgage payment</strong> over 30 years.
          </p>
          <p className="text-gray-700">
            Loan programs have different minimums. Conventional loans (Fannie Mae, Freddie Mac) often require 620 or higher. FHA may allow 580 (3.5% down) or 500–579 (10% down). VA does not set a minimum; lenders set their own. USDA has lender-set minimums. These are guidelines—individual lenders may have overlays that require higher scores.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply for a mortgage, the lender will <strong>underwrite</strong> your application. As part of that process, they pull your credit report and scores. Your score, along with your <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">loan-to-value ratio (LTV)</Link>, DTI, and other factors, determines whether you qualify and at what <strong>interest rate</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Typical credit score ranges by loan type:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Conventional</strong> — Often 620+; 740+ for best rates</li>
            <li><strong>FHA</strong> — May accept 580+ (3.5% down) or 500+ with 10% down</li>
            <li><strong>VA</strong> — No minimum set by VA; lenders set their own (often 620+)</li>
            <li><strong>USDA</strong> — Lender-set; often 640+</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> will show the <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> for the offer you receive. If your score changes before you lock—or if the lender pulls a different score—the terms may change. Under TRID, you must receive the Loan Estimate within 3 business days of application. The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> on the form incorporates some credit costs and can help you compare offers. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and <Link href="/mortgage/apr-vs-interest-rate" className="text-primary hover:underline font-medium">APR vs Interest Rate</Link> for details.
          </p>
          <p className="text-gray-700">
            Credit is one input. Lenders also consider your payment history, employment, income stability, and reserves. A strong score can help offset a higher DTI or lower down payment in some cases. See <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> for context on how your <strong>mortgage payment</strong> is calculated.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex and Jordan are buying a $350,000 home with 10% down. Their <strong>loan amount</strong> is $315,000. Alex has a credit score of 720; Jordan has 680. The lender uses the lower middle score—680—for qualifying.
          </p>
          <p className="text-gray-700 mb-4">
            At 680, they receive a conventional <strong>interest rate</strong> of 6.75%. Their <strong>mortgage payment</strong> (principal and interest) is about $2,440. If Jordan had raised their score to 740 before applying, they might have qualified for 6.25%—a payment of about $2,320. The 50-point difference costs them about $120 per month, or $43,200 over 30 years.
          </p>
          <p className="text-gray-700 mb-4">
            They receive their <strong>Loan Estimate</strong> within 3 business days. The form shows their <strong>closing costs</strong>, which include a credit report fee. Their PMI premium may also be affected by credit—lower scores can mean higher PMI. They decide to proceed but could have chosen to wait and improve Jordan&apos;s score before applying if they had more time.
          </p>
          <p className="text-gray-700">
            This example is illustrative. Actual <strong>interest rates</strong> and fees vary by lender, market, and loan type. The point is that credit score can have a significant impact on your <strong>mortgage payment</strong> and total cost.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, understanding credit score requirements helps you plan. If your score is below 620, you may need to focus on FHA or VA (if eligible) or improve your score before applying for conventional financing. If your score is in the 680–720 range, you may qualify for conventional but not get the best rates. Waiting a few months to raise your score could save you money over the life of the loan.
          </p>
          <p className="text-gray-700 mb-4">
            Your score also affects how much house you can afford. A higher <strong>interest rate</strong> means a higher <strong>mortgage payment</strong> for the same <strong>loan amount</strong>—which can reduce the amount you qualify for based on DTI. Improving your credit before you shop can increase the loan amount you qualify for and the rate you receive.
          </p>
          <p className="text-gray-700">
            Check your credit report regularly. Errors on your report can drag down your score. Disputing and correcting errors can take time—so start early. The three bureaus offer one free report per year at annualcreditreport.com. Reviewing your report before you apply can help you spot issues and avoid surprises during <strong>underwriting</strong>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Understanding Credit Score Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros of Being Informed</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You can target the right loan program for your score</li>
                <li>You can plan to improve your score before applying</li>
                <li>You can spot errors on your credit report early</li>
                <li>You can shop lenders and compare Loan Estimates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Requirements vary by lender—overlays can be stricter</li>
                <li>Improving your score takes time</li>
                <li>Rate shopping can cause multiple inquiries (though they may be counted as one)</li>
                <li>Joint applicants may be limited by the lower score</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not checking your credit before applying:</strong> Surprises during <strong>underwriting</strong> can delay or derail your application. Get your report and scores early.</li>
            <li><strong>Making big financial changes before closing:</strong> Avoid closing credit cards, opening new accounts, or making large purchases. These can affect your score and DTI.</li>
            <li><strong>Assuming FHA and VA have no minimums:</strong> FHA sets minimums; VA does not, but lenders do. Many lenders require 620+ even for government-backed loans.</li>
            <li><strong>Ignoring the impact of a few points:</strong> A 50-point difference can move your <strong>interest rate</strong> and <strong>mortgage payment</strong> significantly. Small improvements can matter.</li>
            <li><strong>Not comparing Loan Estimates:</strong> Different lenders may offer different rates for the same score. Shop and compare.</li>
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
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
            <li>U.S. Department of Veterans Affairs (VA) – VA Home Loan Guaranty</li>
            <li>AnnualCreditReport.com – Free credit reports from the three bureaus</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Loan Qualification Comparison', href: '/tools/loan-qualification-comparison' }}
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
            Credit score requirements vary by lender and program.
          </p>
        </section>
      </main>
    </div>
  );
}
