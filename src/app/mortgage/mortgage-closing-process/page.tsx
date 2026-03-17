import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Closing Process: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn what happens at mortgage closing: signing documents, funding the loan, and taking ownership. Understand the 3-day rule and what to bring.',
  openGraph: {
    title: 'Mortgage Closing Process: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the mortgage closing process and what to expect.',
  },
};

const ARTICLE_SLUG = 'mortgage-closing-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Closing Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-closing-process';

const FAQ_ITEMS = [
  {
    question: 'What happens at closing?',
    answer:
      'At closing, you sign the loan documents (promissory note, mortgage or deed of trust, Closing Disclosure) and other paperwork. The lender funds the loan, the deed is recorded, and for a purchase you receive the keys and become the owner. Your loan amount, interest rate, and mortgage payment are set at closing.',
  },
  {
    question: 'What is the 3-day rule?',
    answer:
      'Under TRID, you must receive the Closing Disclosure at least 3 business days before closing. This gives you time to review the final terms, closing costs, and cash to close. Certain changes (e.g., APR increase, loan product change) may trigger a new 3-day waiting period.',
  },
  {
    question: 'What do I need to bring to closing?',
    answer:
      'Typically: a government-issued ID, the Closing Disclosure (if you have it), and a certified or cashier\'s check for the amount due at closing—or wire instructions if the lender requires a wire. Bring any documents the lender requested.',
  },
  {
    question: 'How long does closing take?',
    answer:
      'The signing itself often takes 30 to 60 minutes. Funding and recording may happen the same day or shortly after. You typically cannot move in until the deed is recorded and funds have cleared.',
  },
  {
    question: 'Can closing be delayed?',
    answer:
      'Yes. Underwriting issues, title problems, or changes to the loan (rate lock, loan product) can delay closing. A revised Closing Disclosure may reset the 3-day rule. Stay in touch with your lender and settlement agent.',
  },
  {
    question: 'What is the difference between the Loan Estimate and Closing Disclosure?',
    answer:
      'The Loan Estimate is provided within 3 business days of application and shows estimated terms and closing costs. The Closing Disclosure is the final form, provided at least 3 days before closing, with actual numbers. Compare them to spot changes. See our Loan Estimate Explained guide.',
  },
];

export default function MortgageClosingProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Closing Process: A Guide for U.S. Homebuyers',
    description:
      'Learn what happens at mortgage closing: signing documents, funding the loan, and taking ownership.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Closing Process: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Closing</strong> (also called settlement) is the final step in the mortgage process. At closing, you
            sign the loan documents, the lender funds the <strong>loan amount</strong>, and—for a purchase—you receive
            the keys and become the owner of the home. Your <strong>interest rate</strong>, <strong>mortgage payment</strong>,
            and <strong>closing costs</strong> are finalized at this stage.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), you must receive the Closing Disclosure at least 3 business
            days before closing. This gives you time to review the final terms and compare them to your{' '}
            <strong>Loan Estimate</strong>. Understanding the closing process helps you know what to expect, what to
            bring, and what happens after you sign. See{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            After <strong>underwriting</strong> approves your loan, the lender schedules closing. A settlement agent
            (title company or closing attorney, depending on your state) coordinates the signing. You will sign the
            promissory note (your promise to repay the <strong>loan amount</strong>), the mortgage or deed of trust
            (securing the loan with the property), and the Closing Disclosure.
          </p>
          <p className="text-gray-700 mb-4">
            You pay your down payment plus <strong>closing costs</strong> and prepaid items (cash to close). The lender
            then funds the loan, the deed is recorded, and you receive the keys. Your first <strong>mortgage payment</strong> is
            typically due about a month after closing. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Closing timeline table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing Timeline at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">When</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">At least 3 days before</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Receive Closing Disclosure (TRID rule)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Before closing day</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Review Closing Disclosure, arrange funds, final walkthrough</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">At closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Sign documents, pay cash to close</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">After signing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender funds loan, deed recorded, keys (purchase)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Procedures vary by state and lender.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            <strong>Before closing:</strong> The lender sends the Closing Disclosure at least 3 business days before
            closing. Review it and compare to your <strong>Loan Estimate</strong>. Confirm your cash to close (down
            payment plus <strong>closing costs</strong> minus credits). Arrange for funds—wire or certified check, as
            instructed. Schedule a final walkthrough for a purchase. See{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link> for down payment context.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>At closing:</strong> The settlement agent guides you through each document. You sign the promissory
            note, mortgage or deed of trust, and Closing Disclosure. You pay cash to close. The settlement agent
            disburses funds to the seller, lender, and other parties. After signing, the lender funds the loan and the
            deed is recorded. For a purchase, you receive the keys. TILA and RESPA (via TRID) require the 3-day
            disclosure period.
          </p>
          <p className="text-gray-700">
            <strong>After closing:</strong> Your first <strong>mortgage payment</strong> is typically due about a month
            later. The loan is based on your <strong>loan amount</strong>, <strong>interest rate</strong>, and term. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex is buying a $320,000 home with a $256,000 <strong>loan amount</strong> at 6.75% <strong>interest rate</strong>.
            <strong> Underwriting</strong> clears. On Tuesday, Alex receives the Closing Disclosure. Closing is set for
            Friday—more than 3 business days later, so the TRID rule is satisfied. Alex reviews the form, confirms cash
            to close is $72,500 (down payment plus <strong>closing costs</strong>), and arranges a wire.
          </p>
          <p className="text-gray-700 mb-4">
            At closing on Friday, Alex signs the promissory note, deed of trust, and Closing Disclosure. The wire
            clears. The lender funds the loan, the deed is recorded, and Alex receives the keys. The first{' '}
            <strong>mortgage payment</strong> is due in about a month. The example is illustrative; procedures vary by
            state and lender.
          </p>
        </section>

        {/* Design object 2: What to bring callout */}
        <div className="mb-10 rounded-xl border-l-4 border-violet-500 bg-violet-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-violet-900 mb-2">What to Bring to Closing</h3>
          <p className="text-violet-800 text-[15px] leading-relaxed mb-3">
            Bring a government-issued ID, the Closing Disclosure (if you have a copy), and funds for cash to close—a
            certified or cashier&apos;s check, or follow wire instructions from the settlement agent. Do not wire funds
            based on instructions received only by email without verifying by phone. Your lender may request additional
            documents.
          </p>
          <p className="text-violet-800 text-[15px] leading-relaxed">
            Confirm the exact amount and payment method with your lender or settlement agent before closing day.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Knowing the closing process reduces stress and helps you avoid last-minute surprises. The 3-day rule gives
            you time to review the Closing Disclosure and compare it to your <strong>Loan Estimate</strong>. If numbers
            changed, you can ask why. If you see an error, you can raise it before signing.
          </p>
          <p className="text-gray-700 mb-4">
            First-time buyers may not know what to expect. The settlement agent will guide you, but understanding the
            flow—receive Closing Disclosure, review, arrange funds, sign, fund, record—helps you stay on track. Your{' '}
            <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are locked
            in at closing. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> for how income and debt affect qualification.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of the Closing Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>TRID 3-day rule gives time to review</li>
                <li>Standardized Closing Disclosure for comparison</li>
                <li>Settlement agent guides you through signing</li>
                <li>Clear path from approval to keys</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Certain changes can reset the 3-day period</li>
                <li>Wire fraud risk—verify instructions by phone</li>
                <li>Closing can be delayed by title or underwriting issues</li>
                <li>Procedures vary by state (attorney vs. title)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not reviewing the Closing Disclosure:</strong> Use the 3-day period to compare it to your <strong>Loan Estimate</strong>. Ask about increases in <strong>closing costs</strong> or changes to your <strong>interest rate</strong> or <strong>loan amount</strong>.</li>
            <li><strong>Wiring funds without verifying:</strong> Wire fraud is a risk. Confirm wire instructions by calling a known number—never rely solely on email.</li>
            <li><strong>Skipping the final walkthrough:</strong> For a purchase, do a final walkthrough to ensure the property is in the agreed condition.</li>
            <li><strong>Assuming closing cannot be delayed:</strong> Underwriting, title, or loan changes can delay closing. Stay in touch with your lender.</li>
            <li><strong>Not bringing proper ID or funds:</strong> Bring a government-issued ID and the correct payment method. Arriving without funds can postpone closing.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about closing">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe: closing</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Closing', href: '/mortgage-glossary/closing' }]}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Closing procedures vary by state and lender.
          </p>
        </section>
      </main>
    </div>
  );
}
