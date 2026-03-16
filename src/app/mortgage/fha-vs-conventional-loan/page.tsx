import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FHA vs Conventional Loan | Housentia',
  description:
    'Compare FHA and conventional loans: down payment, credit requirements, mortgage insurance, and when each makes sense.',
  openGraph: { title: 'FHA vs Conventional Loan | Housentia', description: 'Compare FHA and conventional loans.' },
};

const ARTICLE_SLUG = 'fha-vs-conventional-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'FHA vs Conventional Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/fha-vs-conventional-loan';

const FAQ_ITEMS = [
  {
    question: 'What is the main difference between FHA and conventional?',
    answer:
      'FHA is government-backed with lower down payment (3.5%) and more flexible credit; conventional is not government-backed, often requires 3%–20% down, and PMI can be removed at 80% LTV. FHA MIP often lasts for the life of the loan on high-LTV loans.',
  },
  {
    question: 'Which has lower down payment?',
    answer:
      'FHA allows 3.5% down with a 580+ credit score (10% with 500–579). Conventional can go as low as 3% for qualified buyers (e.g., HomeReady, Home Possible) but often requires stronger credit. See Down Payment Requirements Explained.',
  },
  {
    question: 'Which has cheaper mortgage insurance?',
    answer:
      'Conventional PMI can be removed at 80% LTV (or when you refinance or pay down the loan). FHA MIP often lasts for the life of the loan on high-LTV loans, which can make FHA more expensive long-term. Compare the full Loan Estimate.',
  },
  {
    question: 'When is FHA better?',
    answer:
      'FHA can be better for first-time buyers with lower credit or limited down payment. Conventional may be better if you have strong credit (740+), can put 5%+ down, and want to avoid long-term mortgage insurance.',
  },
  {
    question: 'Can I switch from FHA to conventional later?',
    answer:
      'Yes. You can refinance from FHA to conventional when you have enough equity (typically 80% LTV or less) and qualify. This can remove FHA MIP and potentially lower your mortgage payment. See Refinance Break-Even Point Explained.',
  },
  {
    question: 'Do both use the same Loan Estimate?',
    answer:
      'Yes. Under TRID, both FHA and conventional lenders provide a Loan Estimate within 3 business days. Use it to compare interest rate, mortgage payment, closing costs, and APR across loan types.',
  },
];

export default function FhaVsConventionalLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'FHA vs Conventional Loan', description: 'Compare FHA and conventional: down payment, credit, MI.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="FHA vs Conventional Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>FHA vs conventional</strong> is one of the most common comparisons for U.S. homebuyers. FHA loans are government-backed and offer a lower down payment (3.5% with 580+ credit) and more flexible credit requirements. Conventional loans are not government-backed; they often require stronger credit but allow <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">PMI</Link> removal at 80% <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>. Your choice affects your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), both loan types use the same <strong>Loan Estimate</strong> format. You receive it within 3 business days of application. That form lets you compare the <strong>interest rate</strong>, <strong>mortgage payment</strong>, <strong>closing costs</strong>, and <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> across offers. See <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>, <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link>, and <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>FHA loans</strong> are insured by the Federal Housing Administration. Lenders are protected against default, so they can offer more flexible terms—lower down payment, lower credit scores. In exchange, you pay FHA mortgage insurance (MIP): upfront at closing and annually for the life of the loan (on high-LTV loans). <strong>Conventional loans</strong> are not government-backed. They follow Fannie Mae and Freddie Mac guidelines (or portfolio rules). They often require higher credit scores and larger down payments, but <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">PMI</Link> can be removed when you reach 80% LTV.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>loan amount</strong> is the same regardless of type—it is based on the purchase price minus your down payment. But your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and insurance costs differ. FHA may offer a slightly lower rate for borrowers with lower credit, but the MIP can make the total cost higher over time. Conventional may have a higher rate for the same credit profile but lower long-term cost if you can remove PMI. See <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link> and <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link>.
          </p>
          <p className="text-gray-700">
            Both have loan limits. FHA limits vary by county. Conventional conforming limits are set by FHFA. Jumbo loans are conventional loans above those limits. Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link> is calculated the same way—using your <strong>mortgage payment</strong> (including insurance). A higher payment from FHA MIP can affect how much you qualify for.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender will <strong>underwrite</strong> your application. For FHA, they use FHA guidelines—more lenient on credit and DTI in some cases. For conventional, they use Fannie Mae or Freddie Mac guidelines—often stricter on credit but more flexible on property types (e.g., second homes, investment properties). Both require proof of income, assets, and employment. Your <strong>Loan Estimate</strong> will show the <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> for each option.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Down payment:</strong> FHA allows 3.5% with 580+ credit, or 10% with 500–579. Conventional allows 3% for qualified programs (e.g., first-time buyers, HomeReady, Home Possible), or 5%–20% standard. At 20% down, conventional has no PMI. <strong>Mortgage insurance:</strong> FHA MIP includes upfront (typically 1.75% of loan amount) and annual (ongoing, often for the life of the loan if you put less than 10% down). Conventional PMI is typically 0.5%–1% annually and can be removed at 80% LTV. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how your payment is applied.
          </p>
          <p className="text-gray-700 mb-4">
            The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) require clear disclosure. Your <strong>Loan Estimate</strong> and Closing Disclosure show the full cost. The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> incorporates some fees and can help you compare. Property requirements differ: FHA has minimum property standards; conventional may be more flexible for fixer-uppers in some cases.
          </p>
          <p className="text-gray-700">
            Loan limits: FHA and conventional conforming limits are set annually. In high-cost areas, limits are higher. If your <strong>loan amount</strong> exceeds the limit, you may need a jumbo conventional loan—which has different <strong>underwriting</strong> standards.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan is buying a $320,000 home with a 680 credit score. They have $16,000 for a down payment—5%. They receive two <strong>Loan Estimates</strong>: one FHA (3.5% down, $11,200) and one conventional (5% down, $16,000). FHA <strong>loan amount</strong>: $308,800. Conventional: $304,000.
          </p>
          <p className="text-gray-700 mb-4">
            At 6.5% <strong>interest rate</strong>, the FHA <strong>mortgage payment</strong> (P&I) is about $1,952; MIP adds ~$240/month. Total: ~$2,192. Conventional at 6.75%: P&I about $1,971; PMI adds ~$127/month. Total: ~$2,098. The conventional payment is lower despite the slightly higher rate because PMI is cheaper and the <strong>loan amount</strong> is smaller. Morgan could remove PMI in about 8–10 years when they reach 80% LTV. With FHA, MIP would continue for the life of the loan.
          </p>
          <p className="text-gray-700 mb-4">
            If Morgan had only $11,200 (3.5%), FHA would be the only option for a 3.5% down payment. Conventional 3% programs might allow $9,600 down, but they often require stronger credit or income. The example is illustrative—actual rates, MIP, and PMI vary by lender and borrower. Use the <strong>Loan Estimate</strong> to compare.
          </p>
          <p className="text-gray-700">
            The key takeaway: compare the full <strong>mortgage payment</strong> (including insurance) and total cost over time. FHA can help you qualify with less down and lower credit, but conventional may cost less long-term if you can put 5%+ down and have decent credit.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, the choice often comes down to credit and cash. If your credit is below 620 or you have limited savings, FHA may be the path to homeownership. If you have 620+ credit and 5% or more to put down, conventional may offer a lower total cost—especially because you can remove PMI. Your <strong>mortgage payment</strong> affects your budget and your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>—the lower the payment, the more house you may qualify for (or the more flexibility you have).
          </p>
          <p className="text-gray-700 mb-4">
            If you plan to stay in the home long-term, run the numbers. FHA MIP for the life of the loan can add tens of thousands of dollars over 30 years. Refinancing to conventional later—when you have 80% LTV and better credit—can remove MIP. See <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>. If you might sell or refinance in 5–7 years, the difference may be smaller. Use the <strong>Loan Estimate</strong> and compare the <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> to evaluate.
          </p>
          <p className="text-gray-700">
            TRID was designed to make comparison easier. Get <strong>Loan Estimates</strong> for both loan types from the same or different lenders. Compare <strong>interest rate</strong>, <strong>mortgage payment</strong>, <strong>closing costs</strong>, and APR. The best choice depends on your credit, down payment, and how long you expect to keep the loan.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons: FHA vs Conventional</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">FHA</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>3.5% down with 580+ credit</li>
                <li>More flexible credit and DTI</li>
                <li>Lower down payment for many buyers</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>MIP often for life of loan (high LTV)</li>
                <li>Upfront MIP (1.75%)</li>
                <li>Property must meet FHA standards</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Conventional</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>PMI removable at 80% LTV</li>
                <li>No PMI at 20% down</li>
                <li>Often lower long-term cost</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Often requires stronger credit (620+)</li>
                <li>May need 5%+ down for best terms</li>
                <li>Stricter underwriting in some cases</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Comparing only the interest rate:</strong> FHA may have a lower rate but higher MIP. Compare the full <strong>mortgage payment</strong> and <strong>closing costs</strong> on the <strong>Loan Estimate</strong>.</li>
            <li><strong>Ignoring long-term MIP:</strong> FHA MIP for the life of the loan can add hundreds per month for decades. Factor it into your total cost.</li>
            <li><strong>Assuming conventional requires 20% down:</strong> Conventional can go as low as 3% for qualified programs. Check <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link>.</li>
            <li><strong>Not getting multiple Loan Estimates:</strong> Shop lenders for both FHA and conventional. Terms and fees vary.</li>
            <li><strong>Overlooking refinance options:</strong> If you start with FHA, you may refinance to conventional later to remove MIP. Run a break-even analysis.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about FHA vs conventional">
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
            <li>Federal Housing Finance Agency (FHFA) – Conforming Loan Limits</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA), Real Estate Settlement Procedures Act (RESPA)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Program rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
