import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Construction Loan? | Housentia',
  description:
    'A construction loan finances building a new home. Learn how draw schedules work, one-time vs. two-time close, and typical requirements.',
  openGraph: { title: 'What Is a Construction Loan? | Housentia', description: 'Understand construction loans for new home builds.' },
};

const ARTICLE_SLUG = 'construction-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Construction Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/construction-loan';

const FAQ_ITEMS = [
  { question: 'What is a construction loan?', answer: 'A construction loan finances building a new home. Funds are typically disbursed in draws as construction milestones are met. The loan may convert to a permanent mortgage (one-time close) or require a separate closing (two-time close) for permanent financing.' },
  { question: 'How do construction draws work?', answer: 'The lender releases funds in stages (draws) as construction progresses—e.g., foundation, framing, rough-in, final. An inspector usually verifies each stage before the next draw. You typically pay interest only on the amount drawn.' },
  { question: 'What is one-time vs. two-time close?', answer: 'A one-time close (construction-to-permanent) combines construction and permanent financing in one loan. You close once and the loan converts when the home is complete. A two-time close has separate construction and permanent loans—you close twice.' },
  { question: 'What are typical construction loan requirements?', answer: 'Lenders typically require a construction contract, detailed budget, approved plans, and often a larger down payment (20–25% is common). Credit and income requirements may be stricter than for a standard purchase mortgage.' },
  { question: 'Do I make mortgage payments during construction?', answer: 'You typically pay interest only on the amount drawn during construction. Once the loan converts to a permanent mortgage, you begin making full principal and interest payments.' },
  { question: 'How is a construction loan different from a renovation loan?', answer: 'A construction loan is for building a new home from the ground up. A renovation loan (e.g., FHA 203k) finances buying and renovating an existing home. Different programs and requirements apply.' },
];

export default function ConstructionLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Construction Loan?', description: 'A construction loan finances building a new home. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Construction Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>construction loan</strong> finances building a new home from the ground up. Unlike a traditional mortgage that funds a purchase of an existing home, a construction loan releases funds in stages—called draws—as the builder completes milestones. When construction is finished, the loan may convert to a permanent mortgage (one-time close) or you may need a separate loan to pay off the construction loan (two-time close).
          </p>
          <p className="text-gray-700 mb-4">
            Construction loans are specialized products. Lenders typically require a construction contract, detailed budget, approved plans, and often a larger down payment. Your <strong>loan amount</strong> is based on the projected cost to build, and you typically pay interest only on the amount drawn during construction. Federal rules—including the Truth in Lending Act (TILA), RESPA, and TRID—apply to construction-to-permanent loans. You will receive a <strong>Loan Estimate</strong> within 3 business days of application showing the <strong>interest rate</strong>, <strong>mortgage payment</strong> (after conversion), and <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700">
            This guide explains how construction loans work, what to expect from <strong>underwriting</strong>, and how they differ from renovation loans. For related options, see <Link href="/mortgage/renovation-loan" className="text-primary hover:underline font-medium">What Is a Renovation Loan</Link>, <Link href="/mortgage/fha-203k-loan" className="text-primary hover:underline font-medium">What Is an FHA 203k Loan</Link>, and <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>construction loan</strong> is a short-term loan used to finance the cost of building a home. The lender does not disburse the full <strong>loan amount</strong> at closing. Instead, funds are released in draws—typically when the foundation is complete, framing is up, rough-in (electrical, plumbing, HVAC) is done, and at final completion. An inspector usually verifies each stage before the lender releases the next draw.
          </p>
          <p className="text-gray-700 mb-4">
            During construction, you typically pay interest only on the amount that has been drawn. If the total <strong>loan amount</strong> is $400,000 and only $100,000 has been drawn after the foundation and framing, you pay interest on $100,000. As more is drawn, your interest payment increases. This differs from a standard mortgage, where you receive the full <strong>loan amount</strong> at closing and begin full <strong>mortgage payment</strong>s (principal and interest) immediately.
          </p>
          <p className="text-gray-700">
            Construction loans often require a larger down payment—20–25% is common—because the lender is taking risk on a project that does not yet exist. Your <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">loan-to-value ratio (LTV)</Link> is based on the projected completed value or construction cost. Lenders want to ensure the finished home will be worth more than the <strong>loan amount</strong>.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply for a construction loan, the lender will <strong>underwrite</strong> your application—verifying your income, assets, credit, and the construction project. You need a signed construction contract, a detailed budget (often a line-item breakdown), and approved building plans. The lender may also require a construction contingency (e.g., 10%) to cover overruns. Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link> must support the <strong>mortgage payment</strong> you will have once the loan converts to permanent financing.
          </p>
          <p className="text-gray-700 mb-4">
            With a <strong>one-time close</strong> (construction-to-permanent) loan, you close once. The loan has a construction phase and a permanent phase. When the home is complete and the certificate of occupancy is issued, the loan converts to a standard mortgage. You lock your <strong>interest rate</strong> at the initial closing, so you know your future <strong>mortgage payment</strong>. <strong>Closing costs</strong> are paid at the first closing; you do not pay closing costs again at conversion.
          </p>
          <p className="text-gray-700 mb-4">
            With a <strong>two-time close</strong>, you close on a construction-only loan first. When construction is done, you apply for a separate permanent mortgage (or refinance) to pay off the construction loan. You close again and pay <strong>closing costs</strong> a second time. The two-time close can offer flexibility—you may shop for a permanent loan when the home is complete—but it involves two rounds of <strong>underwriting</strong> and two sets of fees.
          </p>
          <p className="text-gray-700">
            Your <strong>Loan Estimate</strong> will show the <strong>loan amount</strong>, <strong>interest rate</strong>, and estimated <strong>mortgage payment</strong> after conversion. Under TRID, you receive this within 3 business days of application. The form may also show the draw schedule and construction terms. See <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> for context on how permanent payments work.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jennifer and Tom are building a new home. The total project cost is $450,000 (land, construction, and contingency). They own the land free and clear (worth $80,000) and need $370,000 to build. They apply for a construction-to-permanent loan with a 20% down payment on the construction cost—$74,000. Their <strong>loan amount</strong> is $296,000.
          </p>
          <p className="text-gray-700 mb-4">
            They close in January. The draw schedule has five stages: 10% at foundation, 25% at framing, 25% at rough-in, 25% at drywall and finishes, 15% at final. They lock a 6.5% <strong>interest rate</strong> at closing. During construction, they pay interest only on the drawn amount. After the first two draws ($103,600), their interest-only payment is about $560 per month. By month six, when the home is complete, the full <strong>loan amount</strong> has been drawn. The loan converts to a 30-year mortgage, and their <strong>mortgage payment</strong> (principal and interest) becomes about $1,870.
          </p>
          <p className="text-gray-700 mb-4">
            Their <strong>closing costs</strong> at the initial closing were about $9,000. They did not pay closing costs again at conversion—the one-time close structure avoids a second set of fees. If they had used a two-time close, they would have paid <strong>closing costs</strong> twice—once for the construction loan and again for the permanent mortgage.
          </p>
          <p className="text-gray-700">
            This example is illustrative. Actual <strong>interest rates</strong>, <strong>closing costs</strong>, draw schedules, and requirements vary by lender. Construction timelines can change; delays may affect when draws are released and when the loan converts.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If you want to build a custom home rather than buy an existing one, a construction loan is typically the financing path. It allows you to pay the builder in stages as work is completed, which protects you—the lender verifies progress before releasing funds. You are not paying interest on the full <strong>loan amount</strong> until it is drawn, which can reduce your interest cost during the build.
          </p>
          <p className="text-gray-700 mb-4">
            A one-time close construction-to-permanent loan simplifies the process: one application, one closing, one set of <strong>closing costs</strong>. You lock your <strong>interest rate</strong> upfront, so you know your future <strong>mortgage payment</strong>. A two-time close may make sense if you want to shop for the best permanent rate when the home is done—but you take the risk that rates could rise, and you pay <strong>closing costs</strong> twice.
          </p>
          <p className="text-gray-700">
            Construction loans are different from <Link href="/mortgage/renovation-loan" className="text-primary hover:underline font-medium">renovation loans</Link> or <Link href="/mortgage/fha-203k-loan" className="text-primary hover:underline font-medium">FHA 203k</Link> loans, which finance buying and renovating an existing home. If you are buying a fixer-upper, those programs may be a better fit. If you are building from scratch, a construction loan is the typical option.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Finances building a custom home</li>
                <li>Interest only during construction—pay on what is drawn</li>
                <li>One-time close avoids a second closing and second set of fees</li>
                <li>Draw schedule protects you—lender verifies progress before releasing funds</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Larger down payment often required (20–25%)</li>
                <li>Stricter underwriting—construction contract, plans, budget</li>
                <li>Construction delays can extend the timeline and interest payments</li>
                <li>Fewer lenders offer construction loans than standard mortgages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Underestimating the down payment:</strong> Construction loans often require 20–25% down. Budget accordingly—you need more cash upfront than for many purchase mortgages.</li>
            <li><strong>Not having a detailed budget:</strong> Lenders want a line-item construction budget. Vague estimates can delay approval or cause draw issues. Work with your builder on a detailed cost breakdown.</li>
            <li><strong>Assuming you can change plans mid-build:</strong> Significant changes may require lender approval and can affect the draw schedule. Plan carefully before breaking ground.</li>
            <li><strong>Ignoring the conversion rate:</strong> With a one-time close, you lock your permanent <strong>interest rate</strong> at the start. Understand what rate you are locking and for how long. Rate locks can expire if construction runs long.</li>
            <li><strong>Confusing construction and renovation loans:</strong> A construction loan is for new builds. If you are buying and renovating an existing home, a renovation or 203k loan may be the right product.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about construction loan">
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
            <li>U.S. Department of Housing and Urban Development (HUD) – RESPA</li>
            <li>Fannie Mae – Construction-to-Permanent Loan Programs</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Construction loan terms vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
