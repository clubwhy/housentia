import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an FHA 203k Loan? | Housentia',
  description:
    'FHA 203k loans finance purchase and renovation in one mortgage. Learn about limited vs. standard 203k and typical requirements.',
  openGraph: { title: 'What Is an FHA 203k Loan? | Housentia', description: 'Understand FHA 203k renovation loans.' },
};

const ARTICLE_SLUG = 'fha-203k-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is an FHA 203k Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/fha-203k-loan';

const FAQ_ITEMS = [
  {
    question: 'What is an FHA 203k loan?',
    answer:
      'An FHA 203k loan is an FHA-insured mortgage that finances both the purchase and renovation of a home in one loan. The loan amount is based on the home\'s value after improvements (or as-is value plus rehab costs, subject to program limits).',
  },
  {
    question: 'What is limited vs. standard 203k?',
    answer:
      'Limited 203k: smaller renovations (up to $35,000), simpler process, no HUD consultant required. Standard 203k: larger renovations, structural work allowed, requires a HUD consultant and more documentation.',
  },
  {
    question: 'What are the down payment requirements?',
    answer:
      'Same as regular FHA: 3.5% down with a 580+ credit score, or 10% with 500–579. The down payment is based on the purchase price plus eligible renovation costs.',
  },
  {
    question: 'What work can be financed?',
    answer:
      'Structural repairs, kitchen/bath remodels, HVAC, roofing, flooring, and more. Luxury items (e.g., pools, tennis courts) may not be eligible. Limited 203k has caps on certain repairs.',
  },
  {
    question: 'How does the 203k loan amount work?',
    answer:
      'The loan amount typically cannot exceed the lesser of: (1) purchase price plus rehab costs, or (2) a percentage of the after-improved value (e.g., 110% for standard). Your mortgage payment is based on this total loan amount.',
  },
  {
    question: 'Is an FHA 203k more expensive than a regular FHA loan?',
    answer:
      '203k loans may have slightly higher interest rates and additional fees (e.g., consultant fees for standard 203k). FHA mortgage insurance applies. Compare Loan Estimates to understand the full cost.',
  },
];

export default function Fha203kLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is an FHA 203k Loan?', description: 'FHA 203k finances purchase and renovation. Learn limited vs. standard.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is an FHA 203k Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            An <strong>FHA 203k loan</strong> is an FHA-insured mortgage that finances both the purchase and renovation of a home in one loan. Instead of buying a move-in-ready home and taking out a separate renovation loan, you combine the purchase and rehab into a single <strong>loan amount</strong> and one <strong>mortgage payment</strong>. That can make it easier to buy a fixer-upper—especially if you do not have cash for repairs after closing.
          </p>
          <p className="text-gray-700 mb-4">
            The 203k comes in two types: <strong>limited</strong> (smaller projects, up to $35,000 in repairs) and <strong>standard</strong> (larger renovations, including structural work). Under TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days of application. That form shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See <Link href="/mortgage/renovation-loan" className="text-primary hover:underline font-medium">What Is a Renovation Loan</Link>, <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>, and <Link href="/mortgage/construction-loan" className="text-primary hover:underline font-medium">What Is a Construction Loan</Link> for related options.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            With a 203k, your <strong>loan amount</strong> includes the purchase price (or as-is value) plus the cost of eligible renovations. The lender bases the loan on the home&apos;s value after improvements—or a percentage of that value, subject to FHA limits. Your <strong>mortgage payment</strong> is calculated on this total amount. You make one payment each month; the lender disburses renovation funds to contractors as work is completed (standard 203k) or in a single draw at closing (limited 203k, for smaller projects).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Limited 203k</strong> is for non-structural repairs up to $35,000. Examples: kitchen or bath updates, new flooring, HVAC replacement, roofing, painting. The process is simpler—no HUD consultant required. <strong>Standard 203k</strong> allows larger projects, including structural changes (e.g., room additions, foundation repair). It requires a HUD-approved consultant to oversee the work and typically involves an escrow account for draws as repairs progress.
          </p>
          <p className="text-gray-700">
            Down payment rules match regular FHA: 3.5% with a 580+ credit score, or 10% with 500–579. The down payment is based on the total project cost (purchase plus rehab). Your <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">loan-to-value ratio (LTV)</Link> is calculated using the after-improved value. FHA mortgage insurance is required. See <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link> and <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You find a home that needs work and get a contractor estimate for the repairs. The lender will <strong>underwrite</strong> the loan using the purchase price, rehab costs, and the home&apos;s value after improvements. The <strong>loan amount</strong> typically cannot exceed the lesser of: (1) the purchase price plus eligible rehab costs, or (2) a percentage of the after-improved value (e.g., 110% for standard 203k). FHA sets maximum loan limits by county.
          </p>
          <p className="text-gray-700 mb-4">
            For a <strong>limited 203k</strong>, renovation funds are often disbursed at or shortly after closing. For a <strong>standard 203k</strong>, the lender holds funds in escrow and releases them as work is completed and inspected. The consultant ensures work meets HUD standards. Your <strong>mortgage payment</strong> begins after closing and is based on the full <strong>loan amount</strong>—including the portion that will fund renovations.
          </p>
          <p className="text-gray-700 mb-4">
            You receive a <strong>Loan Estimate</strong> within 3 business days of application. It will show your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. The RESPA (Real Estate Settlement Procedures Act) requires clear disclosure of fees. Your <strong>closing costs</strong> may include consultant fees (standard 203k), appraisal, and other typical charges. The TILA (Truth in Lending Act) requires disclosure of the <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link>. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how your payment is applied.
          </p>
          <p className="text-gray-700">
            Eligible work varies. Structural repairs, health and safety fixes, kitchen and bath remodels, HVAC, roofing, and flooring are common. Luxury items (pools, tennis courts) are generally not eligible. The FHA Single Family Housing Policy Handbook outlines program rules. Lenders must be FHA-approved to offer 203k loans.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan finds a $250,000 home that needs $30,000 in repairs—new kitchen counters, flooring, and HVAC. They use a <strong>limited 203k</strong> because the work is under $35,000 and non-structural. The total project cost is $280,000. With 3.5% down ($9,800), their <strong>loan amount</strong> is $270,200.
          </p>
          <p className="text-gray-700 mb-4">
            At a 6.5% <strong>interest rate</strong>, their <strong>mortgage payment</strong> (principal and interest) is about $1,708. FHA mortgage insurance adds roughly $190 per month. Total P&I plus MIP is about $1,898. The renovation funds are disbursed at closing—Jordan&apos;s contractor receives payment and completes the work within a few months. Jordan moves in and makes one <strong>mortgage payment</strong> each month.
          </p>
          <p className="text-gray-700 mb-4">
            If the repairs had been $80,000 and included structural work, Jordan would need a <strong>standard 203k</strong>. The process would involve a HUD consultant, an escrow account for draws, and inspections as work progresses. The <strong>loan amount</strong> would be capped by the after-improved value (e.g., 110% of that value). Their <strong>closing costs</strong> would include consultant fees. The example is illustrative—actual rates, fees, and program limits vary by lender and location.
          </p>
          <p className="text-gray-700">
            The key takeaway: a 203k lets you finance purchase and renovation in one loan. Your <strong>mortgage payment</strong> reflects the full <strong>loan amount</strong>. Compare with a conventional purchase plus a separate renovation loan or construction loan to see what fits your situation.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers or those with limited cash, a 203k can make fixer-uppers accessible. You do not need to pay for repairs out of pocket after closing—the renovation is rolled into your <strong>loan amount</strong>. That can help you buy in a neighborhood you might not otherwise afford, or get more house for your money by purchasing a home that needs work.
          </p>
          <p className="text-gray-700 mb-4">
            The tradeoff: your <strong>mortgage payment</strong> is higher because you are financing the renovation. Your <strong>interest rate</strong> may be slightly higher than a standard FHA purchase loan. You also need a contractor and a clear scope of work. For a standard 203k, the consultant adds oversight—and cost. Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link> is calculated using your full <strong>mortgage payment</strong>, so the larger <strong>loan amount</strong> can affect how much you qualify for.
          </p>
          <p className="text-gray-700">
            Use the <strong>Loan Estimate</strong> to compare 203k offers with other options. If you have enough cash for repairs, a standard FHA or conventional purchase plus a separate renovation loan might work. If you want one loan and one <strong>mortgage payment</strong>, the 203k is designed for that. TRID helps you compare by requiring consistent disclosure of <strong>closing costs</strong> and terms.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of FHA 203k Loans</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>One loan for purchase and renovation</li>
                <li>Low down payment (3.5% with 580+ credit)</li>
                <li>Finance repairs you cannot pay for upfront</li>
                <li>Limited 203k: simpler process for smaller projects</li>
                <li>Standard 203k: structural work allowed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>May have higher interest rate than standard FHA</li>
                <li>Consultant fees for standard 203k</li>
                <li>More paperwork and underwriting complexity</li>
                <li>Contractor and scope of work required</li>
                <li>Not all lenders offer 203k</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Underestimating renovation costs:</strong> Get multiple contractor quotes. The <strong>loan amount</strong> is set at closing—you cannot easily add funds later for overruns.</li>
            <li><strong>Choosing limited when you need standard:</strong> If repairs exceed $35,000 or include structural work, you need a standard 203k. Starting with limited and then realizing you need more can delay your purchase.</li>
            <li><strong>Not budgeting for closing costs:</strong> <strong>Closing costs</strong> include appraisal, consultant fees (standard), and other charges. Plan for them in addition to your down payment.</li>
            <li><strong>Picking an unqualified contractor:</strong> Lenders may require contractors to be licensed and insured. Verify requirements before you commit.</li>
            <li><strong>Ignoring the full mortgage payment:</strong> Your <strong>mortgage payment</strong> includes principal, interest, and FHA mortgage insurance. Make sure it fits your budget and DTI.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about FHA 203k">
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
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook, 203k Program</li>
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
          <p className="text-gray-700 text-sm">FHA 203k rules and eligibility vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
