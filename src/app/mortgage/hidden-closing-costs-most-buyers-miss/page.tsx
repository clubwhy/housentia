import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hidden Closing Costs Most Buyers Miss | Housentia',
  description:
    'Prepaids, escrow cushions, per diem interest, HOA and transfer fees, and other line items that show on your Loan Estimate but are easy to overlook when budgeting cash to close.',
  openGraph: {
    title: 'Hidden Closing Costs Most Buyers Miss | Housentia',
    description:
      'Educational guide to commonly overlooked closing and prepaid items—not hidden fees in a legal sense; review your TRID disclosures.',
  },
};

const ARTICLE_SLUG = 'hidden-closing-costs-most-buyers-miss';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Hidden Closing Costs Most Buyers Miss',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/hidden-closing-costs-most-buyers-miss';

const FAQ_ITEMS = [
  {
    question: 'Are these closing costs actually hidden?',
    answer:
      'In most regulated mortgage transactions, costs are disclosed on the Loan Estimate and Closing Disclosure. “Hidden” here means buyers often overlook or misunderstand certain lines—not that lenders can omit required disclosures. Always compare your Loan Estimate to your Closing Disclosure before closing.',
  },
  {
    question: 'Why is my cash to close higher than the closing costs total?',
    answer:
      'Cash to close includes your down payment, closing costs, and prepaid items, minus certain credits. Prepaids and escrow funding can add thousands beyond headline “fees.” See Prepaid Costs vs Closing Costs.',
  },
  {
    question: 'Can prepaid interest surprise me at closing?',
    answer:
      'Prepaid interest from closing through the end of the month (or to your first payment date) is common. The amount depends on your closing date and rate. It appears on your disclosures—review the per diem or prepaid interest lines.',
  },
  {
    question: 'Do HOA or condo fees appear at closing?',
    answer:
      'Depending on the property, you may pay assessments, transfer fees, or upfront HOA dues at closing if required by the association or your contract. These may appear as separate charges; availability varies by property and state.',
  },
  {
    question: 'How do I avoid missing a line item?',
    answer:
      'Read your Loan Estimate section by section when you receive it, then compare to the Closing Disclosure. Ask your lender or closing agent to explain any line you do not understand. This is general education—not a substitute for your loan documents.',
  },
];

export default function HiddenClosingCostsMostBuyersMissPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Hidden Closing Costs Most Buyers Miss',
    description:
      'Overview of prepaid items, escrow setup, and other costs buyers often underestimate—disclosed under TRID, but easy to miss when budgeting.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Hidden Closing Costs Most Buyers Miss" breadcrumbs={BREADCRUMBS} />
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
            Most buyers budget for the down payment and a rough estimate of <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">closing costs</Link>. A surprising number still underestimate <strong>cash to close</strong> because several categories are easy to skim past on paperwork—they are usually <em>disclosed</em> on your{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">
              Loan Estimate
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">
              Closing Disclosure
            </Link>
            , but they do not always feel like “fees” in the everyday sense.
          </p>
          <p className="text-gray-700 mb-4">
            This guide uses “hidden” to mean <strong>commonly overlooked or misunderstood</strong>, not secret or illegal. Under TRID, lenders provide standardized forms so you can review costs in advance. See also{' '}
            <Link href="/mortgage/closing-costs-explained" className="text-primary hover:underline font-medium">
              Closing Costs Explained
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">
              Mortgage Closing Cost Breakdown
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Your total amount due at closing often includes <strong>closing costs</strong> (lender and third-party fees), <strong>prepaid items</strong> (taxes, insurance, interest in advance), and <strong>escrow funding</strong> (money held for future tax and insurance bills). Buyers who focus only on origination and title lines may miss prepaids and escrow—which can be thousands of dollars.
          </p>
          <p className="text-gray-700">
            <Link href="/mortgage/prepaid-costs-vs-closing-costs" className="text-primary hover:underline font-medium">
              Prepaid costs vs closing costs
            </Link>{' '}
            explains how these buckets differ on your disclosures.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prepaid Interest (Per Diem)</h2>
          <p className="text-gray-700 mb-4">
            Mortgage interest usually covers a period <em>after</em> you pay it. At closing, you often prepay interest from the closing date through the end of that month (or to the start of your first payment period, depending on how your loan is structured). A later closing date in the month can mean more prepaid interest due at signing.
          </p>
          <p className="text-gray-700">
            This is not “extra” interest in a deceptive sense—it is disclosed—but buyers comparing only lender fees may not factor it into their checking account. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">
              Interest Rate
            </Link>{' '}
            and your note for how interest accrues.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Escrow Account Setup and Cushion</h2>
          <p className="text-gray-700 mb-4">
            If your loan has an <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">escrow account</Link> for taxes and homeowners insurance, you typically fund it at closing. That can include several months of property taxes and insurance premiums in advance, plus a <strong>cushion</strong> (limited by RESPA rules for most loans) so the account does not run short when bills come due.
          </p>
          <p className="text-gray-700">
            Buyers sometimes assume “escrow” only means the neutral closing agent—it can also mean this ongoing impound account on your disclosures. Review Sections E and F (and related lines) on your Loan Estimate and Closing Disclosure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Taxes and Insurance Prepaids</h2>
          <p className="text-gray-700 mb-4">
            You may pay a portion of annual property taxes and your homeowners insurance premium at closing—even if those are not “fees” to the lender. High-tax areas or expensive insurance (coastal, wildfire, or other risk zones) can move this line significantly.
          </p>
          <p className="text-gray-700">
            Flood insurance may be required in some zones; if applicable, it adds another policy cost to verify early. See{' '}
            <Link href="/mortgage/what-happens-at-closing" className="text-primary hover:underline font-medium">
              What Happens at Closing
            </Link>{' '}
            for how insurance and escrows are often established.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Insurance (When It Applies)</h2>
          <p className="text-gray-700 mb-4">
            Conventional loans with low down payments may require <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">PMI</Link>. FHA loans include upfront and ongoing mortgage insurance premiums. VA loans may have a <Link href="/mortgage/va-loan" className="text-primary hover:underline font-medium">VA</Link> funding fee in many cases unless exempt.
          </p>
          <p className="text-gray-700">
            Upfront premiums or funding fees can appear as significant one-time charges at closing if financed or paid in cash—check your program and your Loan Estimate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HOA, Condo, and Transfer Charges</h2>
          <p className="text-gray-700 mb-4">
            Condos and planned communities may charge transfer fees, move-in deposits, or upfront association dues. Some fees are paid to the association or management company at or before closing. They may not always sit next to “lender fees” on your mental checklist, but they affect cash needed.
          </p>
          <p className="text-gray-700">
            Local <strong>transfer taxes</strong> or mortgage recording taxes vary by state and locality—see{' '}
            <Link href="/mortgage/what-is-a-recording-fee" className="text-primary hover:underline font-medium">
              Recording Fee
            </Link>{' '}
            and your Closing Disclosure for government charges.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate Lock Extensions and Timing Costs</h2>
          <p className="text-gray-700 mb-4">
            If your closing slips past your <Link href="/mortgage/what-is-rate-lock" className="text-primary hover:underline font-medium">rate lock</Link> expiration, your lender may charge an extension fee—or repricing may change your costs or rate. That can show up late in the process if timelines slip.
          </p>
          <p className="text-gray-700">
            This is a reason to read change notices and compare revised disclosures when your lock or closing date moves.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Optional or Situational Items</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Survey:</strong> Some lenders or states expect a survey; it is a separate charge if required.
            </li>
            <li>
              <strong>Home warranty:</strong> If you purchase a warranty at closing, it adds to cash needed (often optional).
            </li>
            <li>
              <strong>Courier or wiring-related fees:</strong> Small line items can add up; verify amounts on your disclosure.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Catch What You Might Miss</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Read <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> when the LE arrives—note prepaids and escrow, not only Sections A–B.
            </li>
            <li>
              Compare to <Link href="/mortgage/closing-disclosure-explained" className="text-primary hover:underline font-medium">Closing Disclosure Explained</Link> before signing; question material changes.
            </li>
            <li>
              Ask your lender for an estimated cash-to-close breakdown early, including prepaids and escrows.
            </li>
            <li>
              For first-time buyers, see{' '}
              <Link href="/mortgage/first-time-buyer-closing-costs" className="text-primary hover:underline font-medium">
                First-Time Buyer Closing Costs
              </Link>
              .
            </li>
          </ul>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            Nothing here replaces your actual Loan Estimate or Closing Disclosure. Costs vary by loan, property, and location.{' '}
            <strong>Housentia is not a lender</strong> and does not provide loan quotes.
          </p>
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
            Use our{' '}
            <Link href="/tools/mortgage-calculator" className="text-primary hover:underline font-medium">
              mortgage calculator
            </Link>{' '}
            for payment planning, and work with a licensed mortgage professional for closing cost figures tied to your application.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – RESPA and escrow rules (overview)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[
            { label: 'Cash to Close', href: '/mortgage-glossary/cash-to-close' },
            { label: 'Prepaid Interest', href: '/mortgage-glossary/prepaid-interest' },
            { label: 'Escrow Account', href: '/mortgage-glossary/escrow-account' },
          ]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice. Loan terms, costs, and eligibility vary based on individual circumstances, lender requirements, and market conditions.
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong> Always rely on your actual loan disclosures and qualified professionals for decisions about your mortgage.
          </p>
        </section>
      </main>
    </div>
  );
}
