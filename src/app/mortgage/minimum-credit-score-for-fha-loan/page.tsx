import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minimum Credit Score for FHA Loan | Housentia',
  description:
    'FHA loans may accept credit scores as low as 500 with 10% down or 580 for 3.5% down. Learn FHA credit requirements and lender overlays.',
  openGraph: { title: 'Minimum Credit Score for FHA Loan | Housentia', description: 'Understand FHA credit score requirements.' },
};

const ARTICLE_SLUG = 'minimum-credit-score-for-fha-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Minimum Credit Score for FHA Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/minimum-credit-score-for-fha-loan';

const FAQ_ITEMS = [
  {
    question: 'What is the minimum credit score for an FHA loan?',
    answer:
      'FHA allows 580+ for 3.5% down or 500–579 with 10% down. Many lenders set higher overlays (e.g., 620 or 640). Your Loan Estimate shows the interest rate and mortgage payment for the offer you receive.',
  },
  {
    question: 'Can I get an FHA loan with a 500 credit score?',
    answer:
      'FHA permits it with 10% down, but lenders may require higher scores. Shop around—some FHA-approved lenders may accept 500–579 with 10% down. Consider improving your score if you have time.',
  },
  {
    question: 'Do lenders require higher scores than FHA?',
    answer:
      'Yes. Lender overlays often require 620 or higher even for FHA. Underwriting evaluates your score against both FHA guidelines and the lender\'s own requirements. Requirements vary by lender.',
  },
  {
    question: 'How does credit score affect FHA mortgage insurance?',
    answer:
      'FHA charges upfront and annual MIP (Mortgage Insurance Premium). Lower scores may result in higher MIP or affect your interest rate. Lenders use risk-based pricing for the rate and closing costs.',
  },
  {
    question: 'How does my score affect my FHA Loan Estimate?',
    answer:
      'Under TRID, your Loan Estimate shows the loan amount, interest rate, mortgage payment, and closing costs based on the credit information the lender has. A lower score can mean a higher rate and higher costs.',
  },
  {
    question: 'FHA vs conventional: which has lower credit requirements?',
    answer:
      'FHA is generally more forgiving—FHA allows 500–579 with 10% down, while conventional typically requires 620+. But lender overlays may narrow the gap. See FHA vs Conventional Loan for a comparison.',
  },
];

export default function MinimumCreditScoreForFHALoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Minimum Credit Score for FHA Loan', description: 'Learn FHA credit score requirements and lender overlays.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Minimum Credit Score for FHA Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            The <strong>minimum credit score for an FHA loan</strong> is set by the Federal Housing Administration (FHA)
            and by individual lenders. FHA allows 580 or higher for the minimum 3.5% down payment, or 500–579 with 10%
            down. Many FHA-approved lenders, however, set overlays requiring 620 or higher—so meeting FHA&apos;s minimum
            does not guarantee approval. Your score affects your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            FHA loans are insured by the federal government, which allows more flexibility than conventional loans. Under
            TRID (TILA-RESPA Integrated Disclosure), your lender provides a <strong>Loan Estimate</strong> within 3
            business days of application. That form shows your estimated rate, payment, and costs based on the credit
            information they have. See <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">FHA Loan</Link>,{' '}
            <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>, and{' '}
            <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            FHA&apos;s guidelines are more forgiving than conventional—a 580 score can qualify for 3.5% down, while
            conventional typically requires 620+. But the lender you choose matters. Many lenders add overlays that
            raise the minimum above FHA&apos;s floor. A 580 score may qualify with one lender and not another. Your{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link> also
            matter—FHA has its own DTI limits and down payment rules.
          </p>
          <p className="text-gray-700 mb-4">
            Your score does not change your <strong>loan amount</strong> directly, but it affects the rate you pay. A
            higher rate means a higher <strong>mortgage payment</strong> for the same <strong>loan amount</strong>. FHA
            loans require mortgage insurance (MIP)—both upfront and annual. Lower scores can mean higher rates and
            sometimes higher MIP. The TILA (Truth in Lending Act) requires clear disclosure; your <strong>Loan Estimate</strong> and{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> reflect the cost of credit.
          </p>
          <p className="text-gray-700">
            See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>. For conventional PMI, see{' '}
            <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply for an FHA loan, the lender pulls your credit report and scores from Equifax, Experian, and
            TransUnion. For a single applicant, they typically use the <strong>middle score</strong>. For joint
            applicants, they use the lower of the two middle scores. The lender then <strong>underwrites</strong> your
            application against FHA guidelines and their own overlays.
          </p>
          <p className="text-gray-700 mb-4">
            FHA allows 580+ for 3.5% down (96.5% <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>) or 500–579 with 10% down (90% LTV).
            Lenders can require higher scores. Your <strong>Loan Estimate</strong> shows the <strong>interest rate</strong> and{' '}
            <strong>closing costs</strong> for the offer you receive. If your score changes before you lock—or if the
            lender pulls a different score at closing—the terms could change. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
          <p className="text-gray-700">
            RESPA (Real Estate Settlement Procedures Act) governs settlement and closing. Your Loan Estimate and Closing
            Disclosure use consistent formats. Shopping multiple FHA-approved lenders within a short window (e.g.,
            14–45 days) typically counts as one credit inquiry for rate-shopping purposes.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Riley has a 585 credit score and is buying a $280,000 home. Riley puts 3.5% down ($9,800), so the <strong>loan amount</strong> is $270,200. FHA allows 580+ for 3.5% down, but Riley&apos;s lender has a 620 overlay. Riley does not qualify with this lender.
          </p>
          <p className="text-gray-700 mb-4">
            Riley shops and finds an FHA-approved lender that accepts 580+. Riley receives a <strong>Loan Estimate</strong> with a 7% <strong>interest rate</strong> and MIP. The <strong>mortgage payment</strong> (principal, interest, MIP, taxes, insurance) is about $2,380. If Riley had a 660 score, they might have qualified for 6.5%—a payment of about $2,240. The 75-point difference costs roughly $140 per month. The example is illustrative; actual rates vary by lender and market.
          </p>
          <p className="text-gray-700">
            The key takeaway: FHA allows lower scores than conventional, but lender overlays vary. Shop multiple lenders. See{' '}
            <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link>.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If your score is below 620, FHA may be an option when conventional is not. FHA&apos;s 580 minimum (with 3.5%
            down) or 500–579 (with 10% down) can open the door for first-time homebuyers with limited credit history or
            past issues. But lender overlays can close that door—many require 620 or higher. Shop FHA-approved lenders
            to find one that accepts your score.
          </p>
          <p className="text-gray-700 mb-4">
            Check your credit report early. Errors can drag down your score; disputing and correcting them takes time.
            Even a small improvement—e.g., 575 to 585—can move you from the 10% down tier to the 3.5% down tier. Your{' '}
            <strong>mortgage payment</strong> affects your DTI; a higher rate means a higher payment. See{' '}
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of FHA Credit Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of FHA&apos;s Lower Minimums</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>580+ qualifies for 3.5% down (when lender allows)</li>
                <li>500–579 possible with 10% down</li>
                <li>More accessible than conventional for lower scores</li>
                <li>FHA-insured loans may have competitive rates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lender overlays often require 620+</li>
                <li>Lower scores mean higher rates and MIP</li>
                <li>Must find FHA-approved lenders that accept your score</li>
                <li>MIP typically required for life of loan (in many cases)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming FHA&apos;s minimum means approval:</strong> Lender overlays often require higher scores. A 580 may not qualify with every FHA lender. Shop around.</li>
            <li><strong>Not checking your credit before applying:</strong> Surprises during <strong>underwriting</strong> can delay or derail your application. Get your report and scores early.</li>
            <li><strong>Ignoring the 10% down option:</strong> If your score is 500–579, FHA allows 10% down. Saving for a larger down payment can expand your options.</li>
            <li><strong>Not shopping FHA-approved lenders:</strong> Overlays and rates vary. Get multiple <strong>Loan Estimates</strong> and compare.</li>
            <li><strong>Forgetting that MIP adds to your payment:</strong> FHA MIP includes upfront and annual premiums. Factor it into your <strong>mortgage payment</strong> when budgeting.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about FHA credit score">
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
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – How credit scores affect your mortgage</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }} className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">FHA and lender requirements vary.</p>
        </section>
      </main>
    </div>
  );
}
