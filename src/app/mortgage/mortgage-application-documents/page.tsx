import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Application Documents: What You Need | Housentia',
  description:
    'Learn what documents you need for a mortgage application: income, assets, identification, and more. A checklist for employed and self-employed borrowers.',
  openGraph: {
    title: 'Mortgage Application Documents: What You Need | Housentia',
    description: 'Understand what documents you need for a mortgage application.',
  },
};

const ARTICLE_SLUG = 'mortgage-application-documents';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Application Documents',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-application-documents';

const FAQ_ITEMS = [
  {
    question: 'What documents do I need for a mortgage application?',
    answer:
      'Typically: pay stubs (2 months), W-2s (2 years), tax returns (2 years), bank statements (2 months), and a government-issued ID. Self-employed borrowers may need profit-and-loss statements and 1099s. The lender uses these during underwriting to verify income and assets for your loan amount.',
  },
  {
    question: 'How far back do bank statements need to go?',
    answer:
      'Most lenders request 2 months of bank statements. They look for consistent balances and may ask about large deposits. Have statements ready for all accounts you use for down payment, closing costs, or reserves.',
  },
  {
    question: 'Do I need to provide documents for a co-borrower?',
    answer:
      'Yes. All borrowers on the loan must provide income, asset, and identification documents. Their income and debt are included in the DTI calculation for qualification.',
  },
  {
    question: 'What if I cannot find a document?',
    answer:
      'Contact your lender or processor. They may accept alternatives (e.g., IRS transcript instead of tax return) or have workarounds. Do not delay—ask early to avoid slowing underwriting.',
  },
  {
    question: 'How do documents affect my Loan Estimate?',
    answer:
      'Under TRID, your Loan Estimate shows the loan amount, interest rate, and mortgage payment based on the information you provide. The lender verifies that information with your documents during underwriting. If verified data differs, your terms could change.',
  },
  {
    question: 'When should I gather my documents?',
    answer:
      'Before you apply. Having documents ready can speed up the process. Delays in providing pay stubs, tax returns, or bank statements can slow underwriting and push back your closing date.',
  },
];

export default function MortgageApplicationDocumentsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Application Documents: What You Need',
    description:
      'Learn what documents you need for a mortgage application: income, assets, identification, and more.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Application Documents: What You Need" breadcrumbs={BREADCRUMBS} />
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
            Lenders need to verify your income, assets, and identity before approving your mortgage. Having the right
            documents ready can speed up <strong>underwriting</strong> and help you receive your <strong>Loan Estimate</strong> on
            time. Under TRID (TILA-RESPA Integrated Disclosure), you get a Loan Estimate within 3 business days of
            application—but the lender relies on the information you provide to calculate your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and <strong>mortgage payment</strong>. Your documents back up that information.
          </p>
          <p className="text-gray-700 mb-4">
            This guide covers the typical documents for employed and self-employed borrowers. Requirements vary by
            lender and loan type. See <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline font-medium">How Income Is Verified for a Mortgage</Link> and{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">Mortgage Application Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Your documents help the lender verify your income (for <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>), assets (for down
            payment and reserves), and identity. Incomplete or delayed documents can slow underwriting, push back your
            closing, or—if the lender finds discrepancies—change your loan terms. The TILA (Truth in Lending Act) and
            RESPA (Real Estate Settlement Procedures Act) require accurate disclosure of the cost of credit; your Loan
            Estimate reflects the terms based on verified information.
          </p>
          <p className="text-gray-700">
            Your <strong>closing costs</strong> are disclosed on the Loan Estimate. The lender may request additional
            documents if they find issues during underwriting. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Document checklist card */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Checklist</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-3">Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Pay stubs (2 months)</li>
                <li>• W-2s (2 years)</li>
                <li>• Tax returns (2 years, all pages)</li>
                <li>• Self-employed: P&L, 1099s</li>
              </ul>
            </div>
            <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-3">Assets & ID</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Bank statements (2 months)</li>
                <li>• Investment/retirement (if used)</li>
                <li>• Gift letter (if applicable)</li>
                <li>• Government-issued ID</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, you provide income, asset, and identity information. The lender requests documents to
            verify it. For income: pay stubs (typically 2 months), W-2s (2 years), and tax returns (2 years). For
            assets: bank statements (2 months), investment statements if used for down payment or reserves, and a gift
            letter if you receive gift funds. For identification: a government-issued ID (driver&apos;s license or passport).
          </p>
          <p className="text-gray-700 mb-4">
            During <strong>underwriting</strong>, the lender reconciles your documents with your application. They may
            ask about large deposits, employment gaps, or other items. Delays in providing documents can delay your
            <strong> Loan Estimate</strong> or closing. See <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline font-medium">How Income Is Verified</Link>,{' '}
            <Link href="/mortgage/mortgage-asset-verification" className="text-primary hover:underline font-medium">Mortgage Asset Verification</Link>, and{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower</Link>.
          </p>
          <p className="text-gray-700">
            Depending on your situation, you may need: divorce decree, bankruptcy paperwork, proof of child support or
            alimony, rental agreements (if you have rental income), or business license (self-employed). Ask your lender
            early what they need. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan applies for a $320,000 conventional loan. Jordan gathers documents before applying: 2 months of pay
            stubs, 2 years of W-2s, 2 years of tax returns, 2 months of bank statements. Jordan submits the application
            and provides the documents within 24 hours. The lender processes quickly and sends a <strong>Loan Estimate</strong> within 3 business days showing a 7% <strong>interest rate</strong> and <strong>mortgage payment</strong> of about $2,129 (P&I).
          </p>
          <p className="text-gray-700 mb-4">
            The lender notices a $5,000 deposit in Jordan&apos;s bank statement. Jordan provides a letter of explanation—it
            was a tax refund. Underwriting clears the condition. Jordan closes on schedule. If Jordan had delayed
            providing documents by a week, the process could have pushed back the closing date and risked the rate lock
            expiring. The example is illustrative.
          </p>
          <p className="text-gray-700">
            See <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how the payment is applied.
          </p>
        </section>

        {/* Design object 2: Before you apply callout */}
        <div className="mb-10 rounded-xl border-l-4 border-indigo-500 bg-indigo-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-indigo-900 mb-2">Before You Apply</h3>
          <p className="text-indigo-800 text-[15px] leading-relaxed">
            Gather pay stubs, W-2s, tax returns, and bank statements before you apply. Have a government-issued ID ready.
            If you use gift funds, get a gift letter template from your lender. Co-borrowers need the same documents.
            Missing documents can delay your Loan Estimate and closing.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, the document list can feel overwhelming. Start early. Request copies of your tax
            returns from the IRS if you do not have them. Pull bank statements from your online portal. Order a credit
            report to check for errors. Having everything ready before you apply can shave days or weeks off the process.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> and <strong>loan amount</strong> depend on verified income and assets.
            If your documents show different numbers than you stated, the lender may adjust your terms. Be accurate on
            your application. See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link> and{' '}
            <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Being Prepared</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Faster underwriting and approval</li>
                <li>Receive Loan Estimate on time</li>
                <li>Fewer surprises during the process</li>
                <li>May avoid rate lock expiration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Gathering documents takes time</li>
                <li>Self-employed need more paperwork</li>
                <li>Large deposits may need explanation</li>
                <li>Requirements vary by lender</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Waiting to gather documents until after applying:</strong> Delays can slow <strong>underwriting</strong> and push back your closing. Get documents ready before you apply.</li>
            <li><strong>Providing incomplete tax returns:</strong> Lenders need all pages and schedules. Missing pages can trigger conditions.</li>
            <li><strong>Not explaining large deposits:</strong> Bank statements with unexplained deposits may require a letter of explanation. Provide it proactively.</li>
            <li><strong>Forgetting co-borrower documents:</strong> All borrowers must provide income, asset, and ID documents. Their income and debt affect your <strong>loan amount</strong>.</li>
            <li><strong>Not asking about alternatives:</strong> If you cannot find a document (e.g., old W-2), ask your lender. IRS transcripts or employer letters may work.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about mortgage documents">
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
            <li>Fannie Mae – Selling Guide (documentation requirements)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (income and asset documentation)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
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
            Document requirements vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
