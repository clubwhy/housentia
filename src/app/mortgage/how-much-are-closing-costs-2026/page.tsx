import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Are Closing Costs in 2026? Real Numbers & Full Breakdown | Housentia',
  description:
    'Closing costs usually run 2% to 5% of the loan amount. See a realistic dollar breakdown, what drives the total, and how Loan Estimate and Closing Disclosure compare.',
  openGraph: {
    title: 'How Much Are Closing Costs in 2026? Real Numbers & Full Breakdown | Housentia',
    description:
      'Typical ranges, fee categories, example totals, and ways to reduce closing costs—plus FAQ for buyers and refinancers.',
  },
};

const ARTICLE_SLUG = 'how-much-are-closing-costs-2026';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'How Much Are Closing Costs in 2026?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-much-are-closing-costs-2026';

const FAQ_ITEMS = [
  {
    question: 'How much are closing costs for first-time buyers?',
    answer:
      'They are typically in the same range as for other buyers—often about 2% to 5% of the loan amount—though loan type, location, and seller concessions can change the cash you need at closing. Your Loan Estimate shows your situation.',
  },
  {
    question: 'Can closing costs be included in the loan?',
    answer:
      'In some refinance situations, certain costs can be rolled into the new loan, which increases your loan balance and payment. For purchases, financing closing costs is less common; programs and lender rules vary. See What Is Refinance and your lender’s disclosures.',
  },
  {
    question: 'Who pays closing costs?',
    answer:
      'Buyers usually pay most lender and title-related costs; sellers may pay some items or contribute through concessions, depending on your contract and program limits. See Who Pays Closing Costs.',
  },
  {
    question: 'Are closing costs tax deductible?',
    answer:
      'Some costs may be deductible in certain tax years or situations; rules change and depend on how you file. This is not tax advice—consult a qualified tax professional.',
  },
  {
    question: 'Can I avoid closing costs completely?',
    answer:
      'You generally cannot avoid all settlement-related fees, but you can sometimes reduce or offset them with lender credits, seller concessions, or shopping third-party services where allowed.',
  },
];

export default function HowMuchAreClosingCosts2026Page() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'How Much Are Closing Costs in 2026? (Real Numbers & Full Breakdown)',
    description:
      'Educational guide to typical closing cost ranges, fee categories, a sample dollar breakdown, and how Loan Estimate and Closing Disclosure work under TRID.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero
        title="How Much Are Closing Costs in 2026? (Real Numbers & Full Breakdown)"
        breadcrumbs={BREADCRUMBS}
      />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Most homebuyers underestimate <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">closing costs</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            Many end up paying thousands more than expected at the closing table. If you are planning to buy or{' '}
            <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">refinance</Link>, understanding closing costs ahead of time can help you avoid surprises and make better financial decisions. For context on typical ranges, see also{' '}
            <Link href="/mortgage/average-mortgage-closing-costs" className="text-primary hover:underline font-medium">Average Mortgage Closing Costs</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> are the fees and expenses required to finalize a mortgage loan. These costs are typically paid at closing and usually range from{' '}
            <strong>2 percent to 5 percent of the loan amount</strong>, depending on your loan type, location, and lender.
          </p>
          <p className="text-gray-700 mb-4">
            For example, on a $400,000 loan, closing costs could range from <strong>$8,000 to $20,000</strong>. Your{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">Loan Estimate</Link> (TRID) shows estimated costs early; the{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">Closing Disclosure</Link> finalizes them before closing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Closing Costs Work</h2>
          <p className="text-gray-700 mb-6">
            Closing costs are made up of several categories. For a line-by-line view, see{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Lender Fees</h3>
          <p className="text-gray-700 mb-4">
            These are fees charged by the lender to process and underwrite your loan—for example, origination, application, and underwriting. See{' '}
            <Link href="/mortgage/what-is-origination-fee" className="text-primary hover:underline font-medium">What Is an Origination Fee</Link> and{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link>.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Origination fee</li>
            <li>Application fee</li>
            <li>Underwriting fee</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Title and Escrow Fees</h3>
          <p className="text-gray-700 mb-4">
            Third-party fees required to transfer ownership and close the transaction—often including title search, title insurance, and escrow or settlement services. See{' '}
            <Link href="/mortgage/what-is-a-title-insurance-fee" className="text-primary hover:underline font-medium">Title Insurance Fee</Link> and{' '}
            <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">What Is Escrow</Link>.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Title search</li>
            <li>Title insurance</li>
            <li>Escrow services</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Prepaid Costs</h3>
          <p className="text-gray-700 mb-4">
            Upfront payments for future expenses—property taxes, homeowners insurance, and prepaid mortgage interest. These often appear alongside fees on your disclosures. See{' '}
            <Link href="/mortgage/prepaid-costs-vs-closing-costs" className="text-primary hover:underline font-medium">Prepaid Costs vs Closing Costs</Link>.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Property taxes</li>
            <li>Homeowners insurance</li>
            <li>Mortgage interest</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Government and Recording Fees</h3>
          <p className="text-gray-700 mb-4">
            Charges required by local or state authorities. See{' '}
            <Link href="/mortgage/what-is-a-recording-fee" className="text-primary hover:underline font-medium">Recording Fee</Link> and your state&apos;s rules on transfer taxes.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Recording fees</li>
            <li>Transfer taxes</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Real Example (What You Might Actually Pay)</h2>
          <p className="text-gray-700 mb-4">Let&apos;s break down a realistic scenario:</p>
          <ul className="list-none text-gray-700 space-y-1 mb-4">
            <li>
              <strong>Home price:</strong> $500,000
            </li>
            <li>
              <strong>Loan amount:</strong> $400,000
            </li>
          </ul>
          <p className="text-gray-700 mb-4">Estimated closing costs:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Lender fees: $2,500</li>
            <li>Title &amp; escrow: $3,000</li>
            <li>Prepaid taxes &amp; insurance: $2,000</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Total estimated closing costs: $7,500 to $10,000</strong> (illustrative; your market and loan may differ.)
          </p>
          <p className="text-gray-700">
            This example shows why many buyers are surprised at closing if they are not prepared. Compare always using your actual{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate</Link> and{' '}
            <Link href="/mortgage/closing-disclosure-explained" className="text-primary hover:underline font-medium">Closing Disclosure</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can Closing Costs Be Reduced?</h2>
          <p className="text-gray-700 mb-4">Closing costs are not always fixed. In some cases, they can be reduced or offset.</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Options include:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <Link href="/mortgage/how-to-reduce-closing-costs" className="text-primary hover:underline font-medium">Comparing multiple lenders</Link> and Loan Estimates
            </li>
            <li>Negotiating lender fees where possible</li>
            <li>
              <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Asking for seller concessions</Link> (subject to limits)
            </li>
            <li>
              Using{' '}
              <Link href="/mortgage/mortgage-lender-credits-explained" className="text-primary hover:underline font-medium">lender credits</Link> (higher rate in exchange for lower upfront cost)
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Paying Closing Costs Upfront</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower monthly payment (when you avoid financing costs or choose fewer credits)</li>
                <li>Lower overall loan cost in many scenarios</li>
                <li>Better long-term savings versus rolling everything into the loan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Higher upfront cash required</li>
                <li>Reduced liquidity after closing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Underestimating total costs:</strong> Focusing only on the down payment and ignoring fees. Budget for{' '}
              <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">who pays what</Link> and your full cash to close.
            </li>
            <li>
              <strong>Not reviewing the Loan Estimate carefully:</strong> The Loan Estimate provides a breakdown of expected closing costs. Read{' '}
              <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
            </li>
            <li>
              <strong>Not comparing lenders:</strong> Different lenders can have significantly different fee structures. Same for{' '}
              <Link href="/mortgage/what-is-rate-lock" className="text-primary hover:underline font-medium">rate locks</Link> and pricing.
            </li>
            <li>
              <strong>Ignoring prepaid costs:</strong> Taxes and insurance can add thousands to your closing amount. See{' '}
              <Link href="/mortgage/prepaid-costs-vs-closing-costs" className="text-primary hover:underline font-medium">Prepaid Costs vs Closing Costs</Link>.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing Costs vs Loan Estimate vs Closing Disclosure</h2>
          <p className="text-gray-700 mb-4">Understanding these documents is important:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Loan Estimate (LE):</strong> Initial estimate of your loan costs—usually within three business days of application under TRID.
            </li>
            <li>
              <strong>Closing Disclosure (CD):</strong> Final breakdown of actual costs—generally at least three business days before closing.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Comparing these two documents helps ensure there are no unexpected changes. Start with{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is a Loan Estimate</Link> and{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">What Is a Closing Disclosure</Link>.
          </p>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Related Topics</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed mb-3">
            To better understand your mortgage, you may also want to read:
          </p>
          <ul className="list-disc list-inside text-teal-800 space-y-1 text-[15px]">
            <li>
              <Link href="/mortgage/what-is-dti" className="text-teal-700 underline font-medium">
                What Is DTI
              </Link>{' '}
              and{' '}
              <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-teal-700 underline font-medium">
                How DTI Affects Mortgage Approval
              </Link>
            </li>
            <li>
              <Link href="/mortgage/loan-estimate-explained" className="text-teal-700 underline font-medium">
                Loan Estimate Explained
              </Link>
            </li>
            <li>
              <Link href="/mortgage/what-is-rate-lock" className="text-teal-700 underline font-medium">
                Interest Rate Lock Explained
              </Link>
            </li>
          </ul>
        </div>

        <section className="mb-10" aria-label="Frequently asked questions about closing costs in 2026">
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Take the Next Step</h2>
          <p className="text-gray-700 mb-4">
            Want to estimate your closing costs based on your situation? Use our{' '}
            <Link href="/tools/mortgage-calculator" className="text-primary hover:underline font-medium">
              mortgage calculator
            </Link>{' '}
            or connect with a licensed mortgage professional to better understand your options.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Know Before You Owe</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[
            { label: 'Closing Costs', href: '/mortgage-glossary/closing-costs' },
            { label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' },
            { label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' },
          ]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice. Loan terms, costs, and eligibility vary based on individual circumstances, lender requirements, and market conditions.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Figures and examples are illustrative and not a quote or guarantee.
          </p>
        </section>
      </main>
    </div>
  );
}
