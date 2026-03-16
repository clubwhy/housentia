import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minimum Credit Score for Conventional Loan | Housentia',
  description:
    'Conventional loans typically require 620 or higher. Learn minimum credit score requirements and how scores affect rates.',
  openGraph: { title: 'Minimum Credit Score for Conventional Loan | Housentia', description: 'Understand conventional loan credit score requirements.' },
};

const ARTICLE_SLUG = 'minimum-credit-score-for-conventional-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Minimum Credit Score for Conventional Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/minimum-credit-score-for-conventional-loan';

const FAQ_ITEMS = [
  {
    question: 'What is the minimum credit score for a conventional loan?',
    answer:
      'Fannie Mae and Freddie Mac allow 620 in many cases. Some programs (e.g., certain high-LTV or investment property loans) may require 640 or higher. Individual lenders can set overlays that raise the minimum above 620.',
  },
  {
    question: 'What score do I need for the best conventional rates?',
    answer:
      '740+ often qualifies for the best pricing. 720–739 is also strong. Below 720 you may see higher interest rates and closing costs. Your Loan Estimate shows the rate for your score.',
  },
  {
    question: 'Can I get a conventional loan with 620 credit?',
    answer:
      'Yes, in many cases. DTI, down payment, LTV, and reserves matter. Compensating factors like a larger down payment or lower DTI can help. Some programs have stricter requirements.',
  },
  {
    question: 'How does credit score affect PMI on conventional loans?',
    answer:
      'Lower scores may result in higher PMI premiums. Lenders use risk-based pricing for both the interest rate and mortgage insurance. A higher score can reduce your monthly mortgage payment.',
  },
  {
    question: 'Which credit score do lenders use for conventional loans?',
    answer:
      'Lenders typically use the middle of your three bureau scores (Equifax, Experian, TransUnion). For joint applicants, they use the lower of the two middle scores. Underwriting evaluates the score at application.',
  },
  {
    question: 'How does my score affect my Loan Estimate?',
    answer:
      'Under TRID, your Loan Estimate shows the interest rate, mortgage payment, and closing costs based on the credit information the lender has. A lower score can mean a higher rate and higher costs on the form.',
  },
];

export default function MinimumCreditScoreForConventionalLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Minimum Credit Score for Conventional Loan', description: 'Learn conventional loan credit score requirements.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Minimum Credit Score for Conventional Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            The <strong>minimum credit score for a conventional loan</strong> is typically 620 or higher. Fannie Mae and
            Freddie Mac—the government-sponsored enterprises (GSEs) that buy most conventional mortgages—allow 620 in
            many programs. That does not mean every lender will approve at 620; some set overlays requiring 640 or
            higher. Your score affects your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and{' '}
            <strong>closing costs</strong> through risk-based pricing.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), your lender provides a <strong>Loan Estimate</strong> within 3
            business days of application. That form shows your estimated rate, payment, and costs based on the credit
            information they have. A 740+ score often qualifies for the best conventional pricing; scores below 700 may
            see higher rates. See <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan</Link>,{' '}
            <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>, and{' '}
            <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Meeting the minimum score is one hurdle—not the only one. Lenders also evaluate your{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>, income,
            and reserves. A 620 score with strong DTI and a 20% down payment may qualify; a 620 with high DTI and 3%
            down may not. Compensating factors can help when your score is at the lower end.
          </p>
          <p className="text-gray-700 mb-4">
            Your score does not change your <strong>loan amount</strong> directly, but it affects the rate you pay. A
            higher rate means a higher <strong>mortgage payment</strong> for the same <strong>loan amount</strong>. On
            conventional loans with less than 20% down, you typically pay PMI—and lower scores can mean higher PMI
            premiums. The TILA (Truth in Lending Act) requires clear disclosure of the cost of credit; your{' '}
            <strong>Loan Estimate</strong> and <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> reflect that.
          </p>
          <p className="text-gray-700">
            See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how your payment is applied.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender pulls your credit report and scores from Equifax, Experian, and TransUnion. For a
            single applicant, they typically use the <strong>middle score</strong>. For joint applicants, they use the
            lower of the two middle scores. The lender then <strong>underwrites</strong> your application against
            Fannie Mae or Freddie Mac guidelines—or their own overlays.
          </p>
          <p className="text-gray-700 mb-4">
            Fannie and Freddie set minimum scores (often 620) for their programs. Individual lenders can add overlays—for
            example, requiring 640 for certain loan types or 660 for high-LTV loans. Your <strong>Loan Estimate</strong>{' '}
            shows the <strong>interest rate</strong> and <strong>closing costs</strong> for the offer you receive. If
            your score changes before you lock—or if the lender pulls a different score at closing—the terms could
            change. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
          <p className="text-gray-700">
            RESPA (Real Estate Settlement Procedures Act) governs settlement and closing. Your Loan Estimate and Closing
            Disclosure use consistent formats so you can compare offers. Shopping multiple lenders within a short
            window (e.g., 14–45 days) typically counts as one credit inquiry for rate-shopping purposes.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Avery has a 635 credit score and is buying a $320,000 home with 10% down. The <strong>loan amount</strong>{' '}
            is $288,000. Avery receives a <strong>Loan Estimate</strong> with a 7.25% <strong>interest rate</strong> and
            PMI. The <strong>mortgage payment</strong> (principal, interest, PMI, taxes, insurance) is about $2,450.
            Avery&apos;s DTI is 42%—within typical limits.
          </p>
          <p className="text-gray-700 mb-4">
            If Avery had raised their score to 720 before applying, they might have qualified for 6.75%—a payment of
            about $2,280. The 85-point difference costs roughly $170 per month, or $61,200 over 30 years. Avery could
            also explore FHA, which may accept lower scores but has different requirements (e.g., mortgage insurance
            for the life of the loan in some cases). The example is illustrative; actual rates vary by lender and market.
          </p>
          <p className="text-gray-700">
            The key takeaway: improving your score before applying can significantly reduce your <strong>mortgage payment</strong> and total cost. See{' '}
            <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link> for a comparison.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If your score is near 620, you may qualify for conventional financing—but at a higher rate than someone with
            740+. Weigh the trade-off: waiting a few months to improve your score could save thousands over the life of
            the loan. If your score is below 620, you may need to focus on FHA, VA, or credit repair before applying for
            conventional.
          </p>
          <p className="text-gray-700 mb-4">
            Check your credit report early. Errors can drag down your score; disputing and correcting them takes time.
            Avoid big financial changes before applying—new debt, missed payments, or large purchases can hurt your
            score. Your <strong>mortgage payment</strong> affects your DTI; a higher rate means a higher payment, which
            can reduce the <strong>loan amount</strong> you qualify for. See{' '}
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Conventional at Various Scores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">At 620–659</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>May qualify when Fannie/Freddie allow it</li>
                <li>No FHA mortgage insurance structure</li>
                <li>Compensating factors can help</li>
                <li>Higher rates and PMI likely</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">At 740+</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Best conventional pricing typically</li>
                <li>Lower PMI premiums</li>
                <li>More lender options</li>
                <li>May avoid lender overlays</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not checking your credit before applying:</strong> Surprises during <strong>underwriting</strong> can delay or derail your application. Get your report and scores early.</li>
            <li><strong>Assuming 620 means approval:</strong> Lenders can set overlays. DTI, LTV, and reserves also matter. A 620 with weak compensating factors may not qualify.</li>
            <li><strong>Making big financial changes before closing:</strong> Avoid new debt, closing credit cards, or large purchases. These can affect your score and approval.</li>
            <li><strong>Not shopping lenders:</strong> Different lenders may have different overlays and rates for the same score. Get multiple <strong>Loan Estimates</strong> and compare.</li>
            <li><strong>Ignoring the cost of a lower score:</strong> A 50–100 point difference can add $100–$200 or more to your monthly <strong>mortgage payment</strong>. Plan for the impact.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about conventional credit score">
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
            <li>Consumer Financial Protection Bureau (CFPB) – How credit scores affect your mortgage</li>
            <li>Fannie Mae – Selling Guide (credit score requirements)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (credit requirements)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }} className="mb-10" />
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
