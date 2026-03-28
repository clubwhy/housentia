import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Closing Disclosure Explained (Line-by-Line Guide) | Housentia',
  description:
    'Walk through the five-page Closing Disclosure: loan terms, projected payments, closing costs by section (A–H), cash to close, APR, escrow, and what to verify before closing.',
  openGraph: {
    title: 'Closing Disclosure Explained (Line-by-Line Guide) | Housentia',
    description:
      'Educational page-by-page guide to the TRID Closing Disclosure—not a substitute for your actual loan documents.',
  },
};

const ARTICLE_SLUG = 'closing-disclosure-line-by-line-guide';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Closing Disclosure (Line-by-Line)',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/closing-disclosure-line-by-line-guide';

const FAQ_ITEMS = [
  {
    question: 'When will I receive the Closing Disclosure?',
    answer:
      'For many closed-end mortgage transactions, you must receive the Closing Disclosure at least three business days before closing (excluding Sundays and certain holidays). Timing rules can vary by transaction type; confirm with your lender.',
  },
  {
    question: 'Can the numbers change after I receive it?',
    answer:
      'Certain changes to the loan or costs may require a revised Closing Disclosure and, in some cases, a new three-business-day waiting period. Your lender should explain material changes. This guide is educational only.',
  },
  {
    question: 'What is the difference between Loan Estimate and Closing Disclosure?',
    answer:
      'The Loan Estimate provides early estimates after you apply. The Closing Disclosure shows final (or near-final) terms and costs before closing. Compare them line by line. See Loan Estimate Explained.',
  },
  {
    question: 'Do I have to sign the Closing Disclosure?',
    answer:
      'You may be asked to sign to acknowledge receipt. Signing to confirm receipt does not by itself obligate you to close—but you should not sign loan documents at closing if you do not understand or accept the terms. Ask questions first.',
  },
  {
    question: 'What should I do if something looks incorrect?',
    answer:
      'Contact your lender or settlement agent immediately. Do not assume errors will correct themselves. For legal or tax questions, consult a qualified professional.',
  },
];

export default function ClosingDisclosureLineByLineGuidePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Closing Disclosure Explained (Line-by-Line Guide)',
    description:
      'Educational walkthrough of the standard five-page Closing Disclosure under TRID: sections, costs buckets, and comparisons to the Loan Estimate.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Closing Disclosure Explained (Line-by-Line Guide)" breadcrumbs={BREADCRUMBS} />
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
            The <strong>Closing Disclosure</strong> is one of the most important documents you will receive before finalizing your mortgage. Many borrowers review it quickly and miss key details that affect their total loan cost.
          </p>
          <p className="text-gray-700 mb-4">
            This guide walks through the Closing Disclosure step by step so you can understand what each section means before closing. Exact form layouts follow{' '}
            <a
              href="https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              CFPB
            </a>{' '}
            standards; your form may include minor variations. For a shorter overview, see{' '}
            <Link href="/mortgage/closing-disclosure-explained" className="text-primary hover:underline font-medium">
              Closing Disclosure Explained
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">
              What Is a Closing Disclosure
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            The Closing Disclosure (often called the <strong>CD</strong>) is typically a <strong>five-page</strong> document that outlines the final terms and costs of your mortgage loan. It is required under federal regulations for many mortgage transactions and must be provided to you at least{' '}
            <strong>three business days before closing</strong> in many cases.
          </p>
          <p className="text-gray-700">
            This gives you time to review the final numbers and compare them to your original{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">
              Loan Estimate
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Read the Closing Disclosure (Line by Line)</h2>
          <p className="text-gray-700 mb-6">
            Below is a page-by-page overview. Section letters (A–L on later pages) match the common TRID Closing Disclosure structure.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Page 1: Loan Terms and Summary</h3>
          <p className="text-gray-700 mb-4">This page provides a snapshot of your loan.</p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Loan Terms</h4>
          <p className="text-gray-700 mb-2">This section shows:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Loan amount</li>
            <li>Interest rate</li>
            <li>Monthly principal and interest payment</li>
            <li>Prepayment penalty (if applicable)</li>
            <li>Balloon payment (if applicable)</li>
          </ul>
          <p className="text-gray-700 mb-6">Make sure these match what you expected and what you discussed with your lender—especially if you used a <Link href="/mortgage/what-is-rate-lock" className="text-primary hover:underline font-medium">rate lock</Link>.</p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Projected Payments</h4>
          <p className="text-gray-700 mb-2">This section shows how your payment may change over time.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            <li>Principal and interest</li>
            <li>Estimated taxes and insurance (and mortgage insurance if applicable)</li>
            <li>Total estimated monthly payment</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Costs at Closing</h4>
          <p className="text-gray-700 mb-2">This section shows:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Total closing costs</li>
            <li>Cash required to close</li>
          </ul>
          <p className="text-gray-700 mb-8">
            This is the amount you should be prepared to pay at closing (subject to your payment method and any last-minute adjustments disclosed properly). See{' '}
            <Link href="/mortgage/what-happens-at-closing" className="text-primary hover:underline font-medium">
              What Happens at Closing
            </Link>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Page 2: Closing Cost Details</h3>
          <p className="text-gray-700 mb-4">This page breaks down costs in detail.</p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Loan Costs</h4>
          <p className="text-gray-700 mb-4">These are fees related to your mortgage.</p>

          <p className="text-gray-700 font-medium mb-1">A. Origination Charges</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Origination fee</li>
            <li>Points (if any)</li>
          </ul>

          <p className="text-gray-700 font-medium mb-1">B. Services You Cannot Shop For</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Appraisal fee</li>
            <li>Credit report</li>
          </ul>

          <p className="text-gray-700 font-medium mb-1">C. Services You Can Shop For</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Title services</li>
            <li>Survey fees (if applicable)</li>
          </ul>

          <p className="text-gray-700 mb-4">
            Section D may list optional services you could shop for but did not, depending on your form. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">
              Mortgage Closing Cost Breakdown
            </Link>
            .
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Other Costs</h4>

          <p className="text-gray-700 font-medium mb-1">E. Taxes and Government Fees</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Recording fees</li>
            <li>Transfer taxes (if applicable)</li>
          </ul>

          <p className="text-gray-700 font-medium mb-1">F. Prepaids</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Homeowners insurance</li>
            <li>Property taxes</li>
            <li>Prepaid interest</li>
          </ul>

          <p className="text-gray-700 font-medium mb-1">G. Initial Escrow Payment at Closing</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Initial deposits for taxes and insurance</li>
          </ul>

          <p className="text-gray-700 font-medium mb-1">H. Other</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Optional or situational fees (e.g., certain third-party items), as listed on your form</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Page 3: Cash to Close and Comparisons</h3>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Calculating Cash to Close</h4>
          <p className="text-gray-700 mb-4">
            This section shows how your final cash amount is calculated. It often compares Loan Estimate vs Closing Disclosure figures and highlights changes in fees.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Summaries of Transactions</h4>
          <p className="text-gray-700 mb-4">
            Purchase transactions often include a summary of borrower and seller debits and credits. Review this with your closing agent if you are unsure how the bottom line was reached.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Comparisons</h4>
          <p className="text-gray-700 mb-2">This section helps you understand the long-term cost of your loan.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Total paid over time (if shown)</li>
            <li>
              Annual Percentage Rate (<Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link>)
            </li>
            <li>Total Interest Percentage (TIP)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Page 4: Additional Loan Information</h3>
          <p className="text-gray-700 mb-4">This page includes important details about your loan, such as:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Assumption (whether the loan may be transferred)</li>
            <li>Demand feature (if applicable)</li>
            <li>Late payment terms</li>
            <li>Negative amortization (if applicable)</li>
            <li>Escrow account details</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Page 5: Final Details</h3>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Loan Calculations</h4>
          <p className="text-gray-700 mb-2">This section summarizes:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            <li>Total payments</li>
            <li>Finance charge</li>
            <li>Amount financed</li>
            <li>APR</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Other Disclosures</h4>
          <p className="text-gray-700 mb-2">May include:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            <li>Appraisal information</li>
            <li>Contract details</li>
            <li>Liability after foreclosure (where applicable)</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h4>
          <p className="text-gray-700 mb-2">Lists:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            <li>Lender</li>
            <li>Mortgage broker (if applicable)</li>
            <li>Real estate agents (as shown)</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Confirm Receipt</h4>
          <p className="text-gray-700">
            You may be asked to sign to confirm that you received the Closing Disclosure. This is typically an acknowledgment of receipt—still read every page before closing on the loan.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Check Carefully</h2>
          <p className="text-gray-700 mb-4">Before closing, review these items carefully:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Interest rate and loan terms</li>
            <li>Monthly payment</li>
            <li>Total closing costs</li>
            <li>Cash required to close</li>
            <li>Differences from your Loan Estimate</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Not comparing the Loan Estimate and Closing Disclosure</li>
            <li>
              Overlooking prepaid costs—see{' '}
              <Link href="/mortgage/prepaid-costs-vs-closing-costs" className="text-primary hover:underline font-medium">
                Prepaid Costs vs Closing Costs
              </Link>
            </li>
            <li>Ignoring small fee changes that add up</li>
            <li>Not asking questions before closing</li>
          </ul>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Related Topics</h3>
          <ul className="list-disc list-inside text-teal-800 space-y-1 text-[15px]">
            <li>
              <Link href="/mortgage/closing-costs-explained" className="text-teal-700 underline font-medium">
                Closing Costs Explained
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
            Review your Closing Disclosure carefully and compare it with your Loan Estimate to ensure accuracy before closing. If anything is unclear, pause and get answers from your lender or closing agent.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>
              <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Consumer Financial Protection Bureau (CFPB)
              </a>
              {' — '}TILA-RESPA Integrated Disclosure (TRID)
            </li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[
            { label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' },
            { label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' },
            { label: 'APR', href: '/mortgage-glossary/apr' },
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
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong> Rely on your actual disclosures and qualified professionals for your transaction.
          </p>
        </section>
      </main>
    </div>
  );
}
