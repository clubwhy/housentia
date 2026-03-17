import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Quality Control Process Explained | Housentia',
  description:
    'Lenders use quality control to verify loan files before and after closing. Learn how the mortgage quality control process works and what it means for borrowers.',
  openGraph: {
    title: 'Mortgage Quality Control Process Explained | Housentia',
    description: 'Understand the mortgage quality control process.',
  },
};

const ARTICLE_SLUG = 'mortgage-quality-control-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Quality Control Process Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-quality-control-process';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage quality control?',
    answer:
      'Quality control (QC) is a process lenders use to review loan files before and after closing. QC teams verify that documentation is complete, underwriting decisions are supported, and the loan meets investor and regulatory requirements. It helps lenders catch errors and reduce repurchase risk. Your loan amount, interest rate, and mortgage payment are not changed by QC—they were set in your Loan Estimate and Closing Disclosure (TRID).',
  },
  {
    question: 'When does QC happen?',
    answer:
      'QC can happen pre-funding (before the loan closes) or post-funding (after closing). Pre-funding QC may review a sample of loans before they fund. Post-funding QC typically reviews a percentage of closed loans, often within 30–90 days of closing. Most borrowers are unaware of QC—it happens behind the scenes.',
  },
  {
    question: 'Does QC affect borrowers?',
    answer:
      'Most borrowers never interact with QC. If QC finds an issue before closing, the lender may request additional documentation or make corrections—which could delay closing. Post-funding QC usually does not affect borrowers unless a significant defect is found, which is rare. Your loan terms do not change.',
  },
  {
    question: 'Why do lenders do QC?',
    answer:
      'Lenders perform QC to ensure loan quality, meet investor requirements (Fannie Mae, Freddie Mac, etc.), and reduce the risk of buybacks (when an investor requires the lender to repurchase a defective loan). QC also supports TILA, RESPA, and TRID compliance and helps identify training needs.',
  },
  {
    question: 'Does QC change my Loan Estimate or closing costs?',
    answer:
      'No. Your Loan Estimate (TRID) and Closing Disclosure set your interest rate, loan amount, mortgage payment, and closing costs. QC reviews that these were properly disclosed and that the loan file is complete. QC does not change your terms—it verifies the lender followed the rules.',
  },
  {
    question: 'What if QC finds an error in my file?',
    answer:
      'Pre-funding: The lender may request additional documentation or correct the error before closing. This could delay closing. Post-funding: The lender typically remediates internally. In rare cases of significant defects, the lender may contact you. Your loan contract and terms generally remain unchanged.',
  },
];

export default function MortgageQualityControlProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Quality Control Process Explained',
    description:
      'Lenders use quality control to verify loan files. Learn how the process works and what it means for borrowers.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Quality Control Process Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage quality control (QC)</strong> is a process lenders use to review loan files before and after
            closing. QC teams verify that documentation is complete, <strong>underwriting</strong> decisions are
            supported, and the loan meets investor and regulatory requirements. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> were set
            in your <strong>Loan Estimate</strong> and Closing Disclosure (TRID)—QC does not change them.
          </p>
          <p className="text-gray-700 mb-4">
            As a borrower, you typically do not interact with QC. First-time homebuyers may never hear about it. QC
            happens behind the scenes to ensure loan quality before the lender delivers the loan to investors. See{' '}
            <Link href="/mortgage/mortgage-loan-delivery-process" className="text-primary hover:underline font-medium">Mortgage Loan Delivery Process</Link> and{' '}
            <Link href="/mortgage/mortgage-investor-guidelines-explained" className="text-primary hover:underline font-medium">Mortgage Investor Guidelines Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            QC reviews the same information <strong>underwriting</strong> used: income, assets, credit, appraisal, title,
            and disclosures. QC verifies that the <strong>Loan Estimate</strong> and Closing Disclosure (TRID) were
            properly provided and that the <strong>loan amount</strong>, <strong>interest rate</strong>, and{' '}
            <strong>closing costs</strong> match the file. QC also checks compliance with TILA, RESPA, and investor
            guidelines (Fannie Mae, Freddie Mac, etc.).
          </p>
          <p className="text-gray-700 mb-4">
            QC can happen before closing (pre-funding) or after (post-funding). Most borrowers never know their loan
            was reviewed. If QC finds an issue before closing, the lender may request additional documentation—which
            could delay closing. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 1: QC stages table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: QC Stages</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Stage</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">When</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What QC Reviews</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Pre-funding</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Before closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Sample of loans; docs, underwriting, disclosures</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Post-funding</td>
                  <td className="px-4 py-3 text-sm text-gray-700">30–90 days after closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Closed loans; investor compliance, repurchase risk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your loan terms do not change. QC verifies the lender followed the rules.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            QC teams typically review: income and asset documentation, credit report, appraisal and property valuation,
            title and legal documents, and disclosures (<strong>Loan Estimate</strong>, Closing Disclosure). They verify
            that <strong>underwriting</strong> decisions are supported and that the loan meets investor guidelines.
            Lenders sell loans to Fannie Mae, Freddie Mac, Ginnie Mae, or private investors—QC helps ensure the loan
            can be delivered without defects.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Pre-funding QC</strong> may review a sample of loans before they close. If issues are found, the
            lender may request additional documentation or correct errors before funding. <strong>Post-funding QC</strong>{' '}
            reviews closed loans, often within 30–90 days. Investors require post-funding QC as part of purchase
            agreements. Defects can result in buybacks (lender repurchases the loan)—rarely affecting the borrower. Your{' '}
            <strong>mortgage payment</strong> and <strong>closing costs</strong> were set at closing. See{' '}
            <Link href="/mortgage/mortgage-file-review-process" className="text-primary hover:underline font-medium">Mortgage File Review Process</Link>,{' '}
            <Link href="/mortgage/mortgage-compliance-checks-explained" className="text-primary hover:underline font-medium">Mortgage Compliance Checks Explained</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan closes on a $320,000 loan at 6.5% <strong>interest rate</strong>, $2,022{' '}
            <strong>mortgage payment</strong> (P&I), $10,500 <strong>closing costs</strong>. The <strong>Loan Estimate</strong> and
            Closing Disclosure (TRID) set these terms. Two weeks later, the lender&apos;s QC team randomly selects
            Jordan&apos;s loan for post-funding review.
          </p>
          <p className="text-gray-700 mb-4">
            QC verifies income, assets, credit, appraisal, title, and disclosures. The file is complete. The loan is
            delivered to Fannie Mae. Jordan never knows QC was performed. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-slate-600 bg-slate-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Key Takeaway</h3>
          <p className="text-slate-800 text-[15px] leading-relaxed">
            QC is a behind-the-scenes process. Lenders review loan files before and after closing to verify
            documentation, <strong>underwriting</strong>, and compliance. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> are
            not changed by QC—they were set in your <strong>Loan Estimate</strong> and Closing Disclosure (TRID). Most
            borrowers never interact with QC.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers may wonder what happens after closing. QC is one of many processes—loan boarding,
            delivery to investors, servicing setup. Understanding QC helps you know that lenders have systems to verify
            loan quality. If QC finds an issue before closing, the lender may request additional documentation or
            correct errors. That could delay closing—but it is rare. Most loans close without QC-related delays.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) and Closing Disclosure set your terms. QC verifies the lender
            followed the rules. It does not change your <strong>mortgage payment</strong> or <strong>closing costs</strong>.
            See <Link href="/mortgage/mortgage-loan-boarding-process" className="text-primary hover:underline font-medium">Mortgage Loan Boarding Process</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of QC</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lenders catch errors before or after closing</li>
                <li>Supports TILA, RESPA, TRID compliance</li>
                <li>Reduces investor buyback risk</li>
                <li>Borrowers rarely affected</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Pre-funding QC may delay closing if issues found</li>
                <li>Borrowers typically do not interact with QC</li>
                <li>Post-funding QC happens after you close</li>
                <li>Rare defects could require lender contact</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Thinking QC affects your loan terms:</strong> Your loan amount, interest rate, mortgage payment, and closing costs were set in the Loan Estimate and Closing Disclosure (TRID). QC verifies the file—it does not change your terms.</li>
            <li><strong>Worrying about post-funding QC:</strong> Post-funding QC happens after you close. Your loan is funded; you make payments. QC reviews the closed file for investor compliance. Rarely does it affect borrowers.</li>
            <li><strong>Assuming you will be contacted:</strong> Most borrowers never hear from QC. If pre-funding QC finds an issue, the lender (or processor) may request documents—not necessarily labeled as QC. Respond promptly to any request.</li>
            <li><strong>Confusing QC with underwriting:</strong> Underwriting approves or denies the loan. QC reviews the file for completeness and compliance. They are different processes. Both happen before you close (for pre-funding QC).</li>
            <li><strong>Ignoring document requests:</strong> If the lender requests additional documentation during processing, it could be related to pre-funding QC or underwriting. Respond quickly to avoid delays.</li>
            <li><strong>Assuming QC is optional:</strong> Lenders and investors require QC. It is part of the mortgage pipeline. Understanding it helps you know the process—not that you need to do anything.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about quality control">
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
            <li>Fannie Mae – Selling Guide (quality control requirements)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (QC standards)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
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
            QC procedures vary by lender and investor.
          </p>
        </section>
      </main>
    </div>
  );
}
