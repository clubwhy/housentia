import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Credit Score Affects Mortgage Rates | Housentia',
  description:
    'Higher credit scores often qualify for lower mortgage rates. Learn how lenders use risk-based pricing and credit tiers.',
  openGraph: { title: 'How Credit Score Affects Mortgage Rates | Housentia', description: 'Understand how credit score affects your mortgage rate.' },
};

const ARTICLE_SLUG = 'how-credit-score-affects-mortgage-rates';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'How Credit Score Affects Mortgage Rates' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-credit-score-affects-mortgage-rates';

const FAQ_ITEMS = [
  {
    question: 'How much does credit score affect mortgage rate?',
    answer:
      'Scores can move rates by 0.25%–1% or more. A 740+ score often gets the best pricing; lower scores may see higher rates. A 50-point difference can add $50–$150 or more to your monthly mortgage payment on a $300,000 loan.',
  },
  {
    question: 'What credit score gets the best mortgage rate?',
    answer:
      'Typically 740 or higher for conventional loans. FHA and VA may have different tiers. Lenders use risk-based pricing—check your Loan Estimate to see the rate for your score.',
  },
  {
    question: 'Can I get a lower rate by improving my score?',
    answer:
      'Yes. Improving your score before applying can qualify you for better pricing. Even small improvements (e.g., 680 to 700) can help. Plan several months ahead—credit improvement takes time.',
  },
  {
    question: 'What is risk-based pricing?',
    answer:
      'Lenders adjust interest rates and fees based on risk factors such as credit score, LTV, and DTI. Higher credit scores often mean lower rates and lower closing costs.',
  },
  {
    question: 'Does credit score affect my Loan Estimate?',
    answer:
      'Yes. The Loan Estimate shows the interest rate and mortgage payment based on the credit information the lender has. Under TRID, you receive it within 3 business days of application.',
  },
  {
    question: 'Will shopping multiple lenders hurt my credit?',
    answer:
      'Multiple applications within a short window (e.g., 14–45 days) for the same purpose are often counted as one inquiry when rate shopping. You can compare offers without significant impact.',
  },
];

export default function HowCreditScoreAffectsMortgageRatesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'How Credit Score Affects Mortgage Rates', description: 'Learn how credit score affects your mortgage rate.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Credit Score Affects Mortgage Rates" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Your <strong>credit score</strong> is one of the main factors that determine the <strong>interest rate</strong> you receive on a mortgage. Lenders use risk-based pricing: borrowers with higher scores typically qualify for lower rates, while lower scores often mean higher rates and sometimes higher <strong>closing costs</strong>. A 740+ score typically qualifies for the best conventional pricing. The difference can add up—a 0.5% rate increase on a $300,000 loan can mean roughly $90 more per month in your <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), your lender provides a <strong>Loan Estimate</strong> within 3 business days of application. That form shows your estimated <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> based on the credit information they have. Your score affects all of these. See <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>, <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>, and <Link href="/mortgage/apr-vs-interest-rate" className="text-primary hover:underline font-medium">APR vs Interest Rate</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Lenders view your credit score as a measure of risk. A higher score suggests you are more likely to repay. In exchange for that lower risk, they offer a lower <strong>interest rate</strong>. A lower score suggests higher risk—so they charge a higher rate to compensate. This is called <strong>risk-based pricing</strong>. Your score does not change your <strong>loan amount</strong> directly, but it affects the rate you pay on that amount. A higher rate means a higher <strong>mortgage payment</strong> for the same <strong>loan amount</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Credit tiers vary by lender. For conventional loans, 740+ often gets the best rate. Scores in the 700–739 range may get slightly higher rates. Scores in the 660–699 range may see another bump. Below 660, rates and fees can increase further. FHA and VA have different pricing—they may be more forgiving of lower scores but still use risk-based pricing. Your <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link> and <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link> also affect pricing. See <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>.
          </p>
          <p className="text-gray-700">
            The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> on your Loan Estimate incorporates some credit-related costs. Comparing APRs across lenders can help you evaluate the full cost of credit. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how your payment is applied.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender pulls your credit report and scores from the three bureaus (Equifax, Experian, TransUnion). For a single applicant, they typically use the middle score. For joint applicants, they use the lower of the two middle scores. The lender then <strong>underwrites</strong> your application and assigns a rate based on your score, <strong>loan amount</strong>, LTV, DTI, and other factors.
          </p>
          <p className="text-gray-700 mb-4">
            The TILA (Truth in Lending Act) requires lenders to disclose the <strong>interest rate</strong> and APR clearly. The RESPA (Real Estate Settlement Procedures Act) requires consistent disclosure of <strong>closing costs</strong>. Your <strong>Loan Estimate</strong> shows the rate and payment for the offer you receive. If your score changes before you lock—or if the lender pulls a different score at closing—the terms could change. Locking your rate secures the terms for a set period.
          </p>
          <p className="text-gray-700 mb-4">
            Some lenders charge higher origination fees or discount point requirements for lower scores. Others may offer the same fees but a higher rate. Shopping multiple lenders can reveal differences. Rate shopping within a short window (e.g., 14–45 days) typically counts as one credit inquiry. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor and Morgan are buying a $350,000 home with 10% down. Their <strong>loan amount</strong> is $315,000. Taylor has a credit score of 745; Morgan has 695. The lender uses the lower middle score—695—for pricing. At 695, they receive a conventional <strong>interest rate</strong> of 6.75%. Their <strong>mortgage payment</strong> (principal and interest) is about $2,043.
          </p>
          <p className="text-gray-700 mb-4">
            If Morgan had raised their score to 740 before applying, they might have qualified for 6.25%—a <strong>mortgage payment</strong> of about $1,939. The 45-point difference costs them about $104 per month, or $37,440 over 30 years. They receive their <strong>Loan Estimate</strong> within 3 business days. The form shows their rate, payment, and <strong>closing costs</strong>. The example is illustrative—actual rates vary by lender and market.
          </p>
          <p className="text-gray-700">
            The key takeaway: even a modest score improvement can significantly reduce your <strong>mortgage payment</strong> and total interest. If you have time before buying, improving your score can pay off.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, understanding the link between credit and rate can help you plan. If your score is in the 680–720 range, you may qualify for conventional financing but not get the best rate. Waiting a few months to improve your score could save thousands over the life of the loan. If your score is below 620, you may need to focus on FHA or VA—or spend time improving your credit before applying for conventional.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> affects your budget and your DTI. A higher rate means a higher payment—which can reduce the <strong>loan amount</strong> you qualify for (since DTI is based on your payment). Improving your score can help you qualify for more house or leave room in your budget. Check your credit report early. Errors can drag down your score; disputing and correcting them takes time. See <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Understanding Credit and Rates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Being Informed</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You can plan to improve your score before applying</li>
                <li>You can set realistic expectations for your rate</li>
                <li>You can shop lenders and compare Loan Estimates</li>
                <li>You can spot errors on your credit report early</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Improving your score takes time</li>
                <li>Joint applicants may be limited by the lower score</li>
                <li>Rates and tiers vary by lender</li>
                <li>Score can change between application and closing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not checking your credit before applying:</strong> Surprises during <strong>underwriting</strong> can delay or derail your application. Get your report and scores early.</li>
            <li><strong>Making big financial changes before closing:</strong> Avoid closing credit cards, opening new accounts, or making large purchases. These can affect your score.</li>
            <li><strong>Assuming a few points do not matter:</strong> A 50-point difference can move your rate by 0.25%–0.5% or more—adding significant cost to your <strong>mortgage payment</strong>.</li>
            <li><strong>Not shopping lenders:</strong> Different lenders may offer different rates for the same score. Get multiple <strong>Loan Estimates</strong> and compare.</li>
            <li><strong>Ignoring the APR:</strong> The APR incorporates some fees and can help you compare the true cost of credit across offers.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about credit score and rates">
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
            <li>Consumer Financial Protection Bureau (CFPB) – How credit scores affect your mortgage rate</li>
            <li>AnnualCreditReport.com – Free credit reports from the three bureaus</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }} className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Rates vary by lender and loan type.</p>
        </section>
      </main>
    </div>
  );
}
