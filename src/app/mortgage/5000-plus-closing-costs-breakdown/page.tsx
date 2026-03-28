import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '$5,000+ in Closing Costs? Here’s the Breakdown | Housentia',
  description:
    'See where several thousand dollars in closing costs go: lender, title, prepaid, and recording fees—with typical dollar ranges and a sample $6,000 total.',
  openGraph: {
    title: '$5,000+ in Closing Costs? Here’s the Breakdown | Housentia',
    description:
      'Fee-by-fee breakdown, why totals surprise buyers, and how to compare Loan Estimates and lower costs.',
  },
};

const ARTICLE_SLUG = '5000-plus-closing-costs-breakdown';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: '$5,000+ in Closing Costs?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/5000-plus-closing-costs-breakdown';

const FAQ_ITEMS = [
  {
    question: 'Is $5,000 normal for closing costs?',
    answer:
      'Yes—for many loans, closing costs often start around this range and can go higher depending on loan size, location, taxes, insurance, and lender fees. Your Loan Estimate will show your expected total.',
  },
  {
    question: 'Why are closing costs so high?',
    answer:
      'They include multiple required services: lender processing and underwriting, title search and insurance, escrow, prepaid taxes and insurance, recording, and sometimes transfer taxes. See Mortgage Closing Cost Breakdown.',
  },
  {
    question: 'Can closing costs change before closing?',
    answer:
      'Yes. Some costs may change between the initial Loan Estimate and the final Closing Disclosure within TRID rules—for example, if loan details or certain third-party charges change. Compare both forms line by line.',
  },
  {
    question: 'Can closing costs be negotiated?',
    answer:
      'Some lender fees may be negotiable, and you can shop some third-party services where allowed. Seller concessions and lender credits can also offset cash due at closing, subject to limits.',
  },
  {
    question: 'Do refinance loans have similar costs?',
    answer:
      'Yes. Refinance loans typically have closing costs too, though the mix may differ from a purchase (for example, no seller side). See Refinance Closing Costs Explained.',
  },
];

export default function FiveThousandPlusClosingCostsBreakdownPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: '$5,000+ in Closing Costs? Here’s the Breakdown',
    description:
      'Educational breakdown of typical closing cost buckets—lender, title, prepaid, and government fees—with illustrative dollar ranges and a purchase example.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="$5,000+ in Closing Costs? Here’s the Breakdown" breadcrumbs={BREADCRUMBS} />
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
            Many homebuyers are surprised when they see their final numbers at closing. Even if you planned for your down payment,{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">
              closing costs
            </Link>{' '}
            can add several thousand dollars more to what you need upfront.
          </p>
          <p className="text-gray-700">
            Here is a clear breakdown of where that $5,000 or more actually goes. For broader context, see also{' '}
            <Link href="/mortgage/closing-costs-explained" className="text-primary hover:underline font-medium">
              Closing Costs Explained
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/how-much-are-closing-costs-2026" className="text-primary hover:underline font-medium">
              How Much Are Closing Costs in 2026
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> are the total fees required to finalize your mortgage loan. They are typically between{' '}
            <strong>2 percent and 5 percent of your loan amount</strong>, which means most buyers will pay several thousand dollars at closing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where the $5,000+ Goes</h2>
          <p className="text-gray-700 mb-6">
            Closing costs are not one single fee. They are made up of multiple components. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">
              Mortgage Closing Cost Breakdown
            </Link>{' '}
            for a full walkthrough.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Lender Fees</h3>
          <p className="text-gray-700 mb-4">
            Fees charged by your lender to process your loan. See{' '}
            <Link href="/mortgage/what-is-origination-fee" className="text-primary hover:underline font-medium">
              Origination Fee
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">
              Mortgage Underwriting Explained
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Origination fee</li>
            <li>Underwriting fee</li>
            <li>Processing fee</li>
          </ul>
          <p className="text-gray-700 mb-8">
            <strong>Estimated range:</strong> $1,000 to $3,000
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Title and Escrow Fees</h3>
          <p className="text-gray-700 mb-4">
            Fees that cover the transfer of ownership and handling of funds. See{' '}
            <Link href="/mortgage/what-is-a-title-insurance-fee" className="text-primary hover:underline font-medium">
              Title Insurance Fee
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">
              What Is Escrow
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Title search</li>
            <li>Title insurance</li>
            <li>Escrow services</li>
          </ul>
          <p className="text-gray-700 mb-8">
            <strong>Estimated range:</strong> $1,500 to $3,000
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Prepaid Costs</h3>
          <p className="text-gray-700 mb-4">
            Upfront payments for ongoing homeownership expenses. See{' '}
            <Link href="/mortgage/prepaid-costs-vs-closing-costs" className="text-primary hover:underline font-medium">
              Prepaid Costs vs Closing Costs
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Property taxes</li>
            <li>Homeowners insurance</li>
            <li>Prepaid interest</li>
          </ul>
          <p className="text-gray-700 mb-8">
            <strong>Estimated range:</strong> $1,000 to $3,000
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Government and Recording Fees</h3>
          <p className="text-gray-700 mb-4">
            Required by local or state agencies. See{' '}
            <Link href="/mortgage/what-is-a-recording-fee" className="text-primary hover:underline font-medium">
              Recording Fee
            </Link>
            .
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Recording fees</li>
            <li>Transfer taxes</li>
          </ul>
          <p className="text-gray-700">
            <strong>Estimated range:</strong> $300 to $1,500
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Real Example</h2>
          <ul className="list-none text-gray-700 space-y-1 mb-4">
            <li>
              <strong>Home price:</strong> $450,000
            </li>
            <li>
              <strong>Loan amount:</strong> $360,000
            </li>
          </ul>
          <p className="text-gray-700 mb-4">Estimated breakdown:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Lender fees: $2,000</li>
            <li>Title and escrow: $2,500</li>
            <li>Prepaids: $1,500</li>
          </ul>
          <p className="text-gray-700">
            <strong>Total closing costs: approximately $6,000</strong> (illustrative; your transaction may differ.)
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Costs Can Be Higher Than Expected</h2>
          <p className="text-gray-700 mb-4">Several factors can increase your total closing costs:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Higher property taxes</li>
            <li>Insurance requirements</li>
            <li>Loan type and lender pricing</li>
            <li>Location-specific fees</li>
          </ul>
          <p className="text-gray-700 mt-4">
            <Link href="/mortgage/average-mortgage-closing-costs" className="text-primary hover:underline font-medium">
              Average Mortgage Closing Costs
            </Link>{' '}
            explains how loan size and market affect the total.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can You Lower Closing Costs?</h2>
          <p className="text-gray-700 mb-4">There are ways to reduce or offset some of these costs.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <Link href="/mortgage/how-to-reduce-closing-costs" className="text-primary hover:underline font-medium">
                Compare multiple lenders
              </Link>
            </li>
            <li>
              Ask about{' '}
              <Link href="/mortgage/mortgage-lender-credits-explained" className="text-primary hover:underline font-medium">
                lender credits
              </Link>
            </li>
            <li>Negotiate certain fees where possible</li>
            <li>
              <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">
                Request seller concessions
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Paying Closing Costs Upfront</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower long-term interest cost (when you pay cash instead of financing fees)</li>
                <li>Lower monthly payment</li>
                <li>More equity from the start</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Higher upfront cash requirement</li>
                <li>Less cash available after closing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Focusing only on the down payment</li>
            <li>
              Not reviewing fee breakdowns carefully—use your{' '}
              <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">
                Loan Estimate
              </Link>{' '}
              and{' '}
              <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">
                Closing Disclosure
              </Link>
            </li>
            <li>Ignoring prepaid expenses</li>
            <li>Not comparing loan offers</li>
          </ul>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Related Topics</h3>
          <ul className="list-disc list-inside text-teal-800 space-y-1 text-[15px]">
            <li>
              <Link href="/mortgage/closing-disclosure-explained" className="text-teal-700 underline font-medium">
                Closing Disclosure Explained
              </Link>
            </li>
            <li>
              <Link href="/mortgage/loan-estimate-explained" className="text-teal-700 underline font-medium">
                Loan Estimate Explained
              </Link>
            </li>
            <li>
              <Link href="/mortgage/what-is-ltv" className="text-teal-700 underline font-medium">
                What Is CLTV
              </Link>
              : combined loan-to-value is explained in our{' '}
              <Link href="/mortgage/what-is-ltv" className="text-teal-700 underline font-medium">
                LTV guide
              </Link>{' '}
              and{' '}
              <Link href="/mortgage-glossary/cltv" className="text-teal-700 underline font-medium">
                CLTV glossary
              </Link>{' '}
              entry.
            </li>
          </ul>
        </div>

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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Take the Next Step</h2>
          <p className="text-gray-700">
            Want to estimate your closing costs based on your situation? Use our{' '}
            <Link href="/tools/mortgage-calculator" className="text-primary hover:underline font-medium">
              mortgage calculator
            </Link>{' '}
            or connect with a licensed mortgage professional.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[
            { label: 'Closing Costs', href: '/mortgage-glossary/closing-costs' },
            { label: 'Cash to Close', href: '/mortgage-glossary/cash-to-close' },
            { label: 'CLTV', href: '/mortgage-glossary/cltv' },
          ]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice. Loan terms, costs, and eligibility vary based on individual circumstances, lender requirements, and market conditions.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong> Dollar ranges and examples are illustrative, not quotes or guarantees.
          </p>
        </section>
      </main>
    </div>
  );
}
