import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Renovation Loan? | Housentia',
  description:
    'A renovation loan finances both the purchase and renovation of a home. Learn about FHA 203k, Fannie Mae HomeStyle, and other renovation programs.',
  openGraph: { title: 'What Is a Renovation Loan? | Housentia', description: 'Understand renovation loans for homebuyers.' },
};

const ARTICLE_SLUG = 'renovation-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Renovation Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/renovation-loan';

const FAQ_ITEMS = [
  {
    question: 'What is a renovation loan?',
    answer:
      "A renovation loan finances both the purchase (or refinance) and the cost of renovating a home in one loan. The loan amount is based on the home's value after improvements (as-completed value). You make one mortgage payment. Funds are typically held in escrow and released to contractors as work is completed.",
  },
  {
    question: 'What are common renovation loan programs?',
    answer:
      'FHA 203k (limited and standard), Fannie Mae HomeStyle Renovation, and Freddie Mac CHOICERenovation are common. Each has different requirements, limits, and eligibility. FHA 203k allows lower down payments; conventional programs may have different LTV limits. See FHA 203k Loan.',
  },
  {
    question: 'How are renovation funds disbursed?',
    answer:
      'Funds are typically held in escrow and released as work is completed. An inspector may verify completion before each draw. Limited 203k may allow a single draw at closing for smaller projects. Your Loan Estimate (TRID) shows the total loan amount and closing costs.',
  },
  {
    question: 'Can I use a renovation loan for a refinance?',
    answer:
      'Yes. Programs like HomeStyle and CHOICERenovation allow refinancing to include renovation costs. FHA 203k can be used for purchase or refinance. The loan amount includes your current payoff plus renovation costs, subject to program limits.',
  },
  {
    question: 'How does TRID apply to renovation loans?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate within 3 business days of application and a Closing Disclosure before closing. These forms show your loan amount, interest rate, mortgage payment, and closing costs. Renovation costs may be itemized.',
  },
  {
    question: 'What is the difference between renovation and construction loans?',
    answer:
      'A renovation loan finances purchase (or refinance) plus improvements to an existing home. A construction loan typically finances building a new home from the ground up. Different programs and processes apply. See What Is a Construction Loan.',
  },
];

export default function RenovationLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Renovation Loan?', description: 'A renovation loan finances purchase and renovation. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Renovation Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>renovation loan</strong> finances both the purchase (or refinance) and the cost of renovating a home in one mortgage. Instead of buying a
            fixer-upper and paying for repairs out of pocket—or taking a separate renovation loan—you combine the purchase and rehab into a single <strong>loan amount</strong>.
            Your <strong>mortgage payment</strong> is based on that total. The loan amount is typically based on the home&apos;s &quot;as-completed&quot; value—what it will
            be worth after improvements.
          </p>
          <p className="text-gray-700 mb-4">
            Common programs include FHA 203k, Fannie Mae HomeStyle Renovation, and Freddie Mac CHOICERenovation. Under TILA (Truth in Lending Act), RESPA (Real Estate
            Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days. It shows
            your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/fha-203k-loan" className="text-primary hover:underline font-medium">What Is an FHA 203k Loan</Link>,{' '}
            <Link href="/mortgage/construction-loan" className="text-primary hover:underline font-medium">What Is a Construction Loan</Link>, and{' '}
            <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Your <strong>loan amount</strong> = purchase price (or as-is value) + eligible renovation costs, subject to program limits. The lender uses the
            &quot;as-completed&quot; value—the home&apos;s estimated value after improvements—to determine how much you can borrow. Your <strong>mortgage payment</strong> is
            based on this total. <strong>Underwriting</strong> evaluates your credit, income, DTI, and the project. Renovation funds are typically held in escrow
            and released to contractors as work is completed.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> apply. Your <strong>Loan Estimate</strong> (TRID) shows the breakdown. The <strong>interest rate</strong> may be slightly
            higher than a standard purchase loan. Compare the total cost. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>,{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Programs comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Renovation Loan Programs</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Program</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Use</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">FHA 203k Limited</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Purchase or refinance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Up to $35K repairs; non-structural</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">FHA 203k Standard</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Purchase or refinance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Larger projects; structural allowed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Fannie Mae HomeStyle</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Purchase or refinance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional; higher limits</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Freddie Mac CHOICERenovation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Purchase or refinance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional; similar to HomeStyle</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements and limits vary by program. Your Loan Estimate shows the loan amount, interest rate, mortgage payment, and closing costs.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You find a home that needs work and get contractor estimates for the repairs. You apply for a renovation loan. The lender runs <strong>underwriting</strong> using
            the purchase price, rehab costs, and the home&apos;s as-completed value. The <strong>loan amount</strong> typically cannot exceed the lesser of: (1) purchase
            price plus eligible rehab costs, or (2) a percentage of the as-completed value (varies by program). You receive a <strong>Loan Estimate</strong> within 3 business days.
          </p>
          <p className="text-gray-700 mb-4">
            At closing, renovation funds go into escrow. As work is completed, the lender releases draws to the contractor (often after inspections). Your{' '}
            <strong>mortgage payment</strong> is based on the full <strong>loan amount</strong> from the start. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam buys a $280,000 fixer-upper. Renovation costs: $45,000 (kitchen, bath, flooring). As-completed value: $340,000. Sam uses an FHA 203k limited (under $35K
            would use limited; over $35K may require standard). For illustration, assume standard 203k. <strong>Loan amount</strong>: up to 110% of as-completed value = $374,000,
            but the loan is capped by purchase + rehab = $325,000. Sam finances $325,000.
          </p>
          <p className="text-gray-700 mb-4">
            At 6.5% for 30 years, <strong>mortgage payment</strong> (P&I): about $2,054. <strong>Closing costs</strong> apply. Renovation funds go to escrow; draws are
            released as work completes. Sam makes one payment from day one. This is illustrative. See <Link href="/mortgage/fha-203k-loan" className="text-primary hover:underline font-medium">FHA 203k Loan</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            A <strong>renovation loan</strong> = purchase (or refinance) + renovation in one <strong>loan amount</strong> and one <strong>mortgage payment</strong>.
            The loan is based on the as-completed value. Funds are held in escrow and released as work completes. FHA 203k, HomeStyle, and CHOICERenovation are
            common programs. Your <strong>Loan Estimate</strong> (TRID) shows the rate, payment, and <strong>closing costs</strong>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Fixer-uppers can be more affordable than move-in-ready homes, but repairs cost money. A renovation loan lets you finance the purchase and improvements
            together—so you do not need a large cash reserve for repairs after closing. Your <strong>mortgage payment</strong> is based on the total <strong>loan amount</strong>,
            but you get the work done through the loan.
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>interest rate</strong> and <strong>closing costs</strong> may be slightly higher than a standard purchase. Compare your <strong>Loan Estimate</strong> to
            a conventional or FHA purchase loan. See <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan</Link> and{' '}
            <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>One loan for purchase and renovation</li>
                <li>No separate renovation financing needed</li>
                <li>FHA 203k allows lower down payment</li>
                <li>Can buy fixer-uppers with limited cash</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>May have higher rate or closing costs</li>
                <li>Draw process can add complexity</li>
                <li>Contractor and inspection requirements</li>
                <li>Program limits and eligibility vary</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Underestimating renovation costs:</strong> Get detailed contractor estimates. The loan amount is based on eligible costs. Underestimating can leave you short.</li>
            <li><strong>Assuming all work is eligible:</strong> Programs have limits. Luxury items (pools, tennis courts) may not qualify. Structural work may require standard 203k. See <Link href="/mortgage/fha-203k-loan" className="text-primary hover:underline font-medium">FHA 203k Loan</Link>.</li>
            <li><strong>Not budgeting for closing costs:</strong> Renovation loans have closing costs. Your Loan Estimate shows the total. Factor it into your budget.</li>
            <li><strong>Choosing a contractor without lender approval:</strong> Many programs require approved contractors. Check program rules before signing a contract.</li>
            <li><strong>Confusing renovation with construction loans:</strong> Renovation loans are for existing homes. Construction loans finance building from scratch. See <Link href="/mortgage/construction-loan" className="text-primary hover:underline font-medium">What Is a Construction Loan</Link>.</li>
            <li><strong>Not reviewing the Loan Estimate:</strong> TRID requires a Loan Estimate within 3 business days. It shows your loan amount, interest rate, mortgage payment, and closing costs. Compare before committing.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about renovation loan">
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
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA 203k program</li>
            <li>Fannie Mae – HomeStyle Renovation guidelines</li>
            <li>Freddie Mac – CHOICERenovation guidelines</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Renovation loan programs vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
