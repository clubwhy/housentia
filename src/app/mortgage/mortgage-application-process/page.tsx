import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Application Process: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn the steps of the mortgage application process: from pre-approval to closing. Understand Loan Estimate, underwriting, and what to expect.',
  openGraph: {
    title: 'Mortgage Application Process: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the mortgage application process from start to finish.',
  },
};

const ARTICLE_SLUG = 'mortgage-application-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Application Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-application-process';

const FAQ_ITEMS = [
  {
    question: 'How long does the mortgage process take?',
    answer:
      'From application to closing typically takes 30 to 45 days, though it can vary. Delays can occur with appraisals, title issues, document requests, or underwriting conditions. Your loan amount, property type, and responsiveness affect the timeline.',
  },
  {
    question: 'What documents do I need for a mortgage application?',
    answer:
      'Common documents include pay stubs (2 months), W-2s (2 years), tax returns (2 years), bank statements (2 months), and ID. Self-employed borrowers may need profit-and-loss statements and 1099s. See our Mortgage Application Documents guide.',
  },
  {
    question: 'When do I get the Loan Estimate?',
    answer:
      'Under TRID, lenders must provide a Loan Estimate within 3 business days of receiving your application for most residential mortgages. It shows your loan amount, interest rate, mortgage payment, and closing costs.',
  },
  {
    question: "What happens after I'm approved?",
    answer:
      'After conditional approval, the lender may request additional documents. Once clear to close, you receive the Closing Disclosure at least 3 business days before closing, then schedule and attend closing.',
  },
  {
    question: 'Can I lock my interest rate during the process?',
    answer:
      'Yes. Many lenders allow you to lock your rate when you receive the Loan Estimate or at another point. Locking secures your rate for a set period. Ask your lender about lock terms and expiration.',
  },
  {
    question: 'How does underwriting affect my loan terms?',
    answer:
      'During underwriting, the lender verifies your income, assets, credit, and the property. If verified information differs from your application, your loan amount, interest rate, or mortgage payment could change. A revised Loan Estimate may be issued.',
  },
];

export default function MortgageApplicationProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Application Process: A Guide for U.S. Homebuyers',
    description:
      'Learn the steps of the mortgage application process from pre-approval to closing. Understand Loan Estimate, underwriting, and what to expect.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Application Process: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>mortgage application process</strong> moves from pre-approval through formal application,
            <strong> Loan Estimate</strong>, <strong>underwriting</strong>, appraisal, and closing. Under TRID
            (TILA-RESPA Integrated Disclosure), lenders must provide standardized disclosures at key stages—your Loan
            Estimate within 3 business days of application, and your Closing Disclosure at least 3 business days before
            closing. Understanding the flow helps you know when to provide documents and what to expect for your{' '}
            <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) govern how lenders
            disclose the cost of credit. Your <strong>closing costs</strong> are disclosed on the Loan Estimate and
            finalized on the Closing Disclosure. See <Link href="/mortgage/mortgage-pre-approval" className="text-primary hover:underline font-medium">Mortgage Pre-Approval</Link> and{' '}
            <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender uses your information to calculate your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and <strong>mortgage payment</strong>. Your <strong>Loan Estimate</strong> shows
            those terms—but they are based on unverified data. During <strong>underwriting</strong>, the lender verifies
            your income, assets, credit, and the property. If verified information differs, your terms could change. A
            revised Loan Estimate may be issued.
          </p>
          <p className="text-gray-700 mb-4">
            Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link> affect
            qualification. The appraisal helps confirm the property value. The process typically takes 30–45 days from
            application to closing. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Process timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Process Overview</h2>
          <div className="relative">
            <div className="space-y-0">
              {[
                { step: 1, title: 'Pre-approval', desc: 'Estimate what you can borrow before house hunting' },
                { step: 2, title: 'Application', desc: 'Submit application and documents with purchase contract' },
                { step: 3, title: 'Loan Estimate', desc: 'Within 3 business days—terms, rate, payment, and costs' },
                { step: 4, title: 'Underwriting', desc: 'Lender verifies income, assets, credit, and property' },
                { step: 5, title: 'Appraisal', desc: 'Appraiser assesses property value' },
                { step: 6, title: 'Clear to close', desc: 'Conditions satisfied; lender approves for closing' },
                { step: 7, title: 'Closing Disclosure', desc: 'At least 3 days before closing—final numbers' },
                { step: 8, title: 'Closing', desc: 'Sign documents, fund loan, take ownership' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 py-3 border-b border-gray-100 last:border-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You start with pre-approval or prequalification—an estimate of what you can borrow before you house hunt.
            When you have a purchase contract (or for refinance, when you are ready), you submit a formal application
            with the six key pieces of information: name, income, SSN, property address, estimated value, and loan
            amount sought. The lender has 3 business days to send a <strong>Loan Estimate</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            During <strong>underwriting</strong>, the lender verifies your application and orders an appraisal. They may
            request additional documents (conditions). Once conditions are satisfied, you receive a clear-to-close.
            At least 3 business days before closing, you receive the Closing Disclosure with final <strong>closing costs</strong>.
            At closing, you sign the mortgage documents and the loan funds. See{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is a Loan Estimate</Link>,{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">What Is a Closing Disclosure</Link>, and{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link>.
          </p>
          <p className="text-gray-700">
            You can lock your <strong>interest rate</strong> at various points—often when you receive the Loan Estimate.
            Locking secures your rate for a set period. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan gets pre-approved for a $350,000 loan, then finds a home and signs a purchase contract. Morgan
            submits the application on a Monday with documents. By Thursday, Morgan receives the <strong>Loan Estimate</strong>:
            $350,000 <strong>loan amount</strong>, 7% <strong>interest rate</strong>, <strong>mortgage payment</strong> of
            about $2,329 (P&I), and <strong>closing costs</strong> of $8,500. Morgan locks the rate.
          </p>
          <p className="text-gray-700 mb-4">
            Underwriting runs for two weeks. The lender requests an explanation for a large deposit—Morgan provides it.
            The appraisal comes in at value. Morgan receives clear-to-close on day 28. The Closing Disclosure arrives 3
            days before closing. At closing, Morgan signs the documents and the loan funds. Total time: about 35 days.
            The example is illustrative; timelines vary.
          </p>
        </section>

        {/* Design object 2: Typical timeline callout */}
        <div className="mb-10 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-emerald-900 mb-2">Typical Timeline</h3>
          <p className="text-emerald-800 text-[15px] leading-relaxed">
            Application to closing: 30–45 days. Loan Estimate: within 3 business days of application. Closing Disclosure: at least 3 business days before closing. Delays can occur if documents are slow, underwriting finds issues, or the appraisal or title takes longer.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, knowing the process reduces anxiety. Gather documents before you apply; delays in
            providing pay stubs, tax returns, or bank statements can push back your closing. Your purchase contract may
            have a closing date—if the mortgage process runs long, you could risk missing it. Stay responsive to
            document requests.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> and <strong>loan amount</strong> depend on verified information. If
            underwriting finds different income or a lower appraisal, your terms could change. Review the Loan Estimate
            and Closing Disclosure carefully. See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link> and{' '}
            <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Understanding the Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Know when to provide documents</li>
                <li>Understand the Loan Estimate and Closing Disclosure</li>
                <li>Plan for typical 30–45 day timeline</li>
                <li>Respond quickly to conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Process can feel opaque without guidance</li>
                <li>Delays can occur unexpectedly</li>
                <li>Terms can change during underwriting</li>
                <li>Timeline varies by lender and situation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not gathering documents before applying:</strong> Delays can slow <strong>underwriting</strong> and push back closing. Have pay stubs, W-2s, tax returns, and bank statements ready.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Review it carefully. It shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Compare offers if you shop lenders.</li>
            <li><strong>Making big financial changes during the process:</strong> Avoid new debt, job changes, or large purchases. They can affect approval or your <strong>interest rate</strong>.</li>
            <li><strong>Not locking your rate:</strong> Rates can change. Locking secures your rate for a set period. Ask about lock terms and expiration.</li>
            <li><strong>Not reviewing the Closing Disclosure:</strong> Compare it to the Loan Estimate. Ensure the final numbers match what you expect before closing.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about the mortgage process">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage process and timeline</li>
            <li>Fannie Mae – Selling Guide (application and underwriting)</li>
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
            The mortgage process varies by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
