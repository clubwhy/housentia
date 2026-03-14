import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steps to Get a Mortgage: A Checklist for U.S. Homebuyers | Housentia',
  description:
    'A step-by-step checklist for getting a mortgage: from checking your credit to closing. Know what to do at each stage and what documents you need.',
  openGraph: {
    title: 'Steps to Get a Mortgage: A Checklist for U.S. Homebuyers | Housentia',
    description: 'Follow this step-by-step guide to get a mortgage.',
  },
};

const ARTICLE_SLUG = 'steps-to-get-a-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Steps to Get a Mortgage',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/steps-to-get-a-mortgage';

const FAQ_ITEMS = [
  {
    question: 'How many steps are there to get a mortgage?',
    answer:
      'The process typically has 6–8 main steps: check credit, get pre-approved, find a home and make an offer, apply formally, receive Loan Estimate, go through underwriting, receive Closing Disclosure, and close. The exact flow can vary by lender.',
  },
  {
    question: 'What is the first step to get a mortgage?',
    answer:
      'Many borrowers start by checking their credit and getting pre-approved or prequalified. This helps you know how much you can borrow and identifies any issues to address before applying.',
  },
  {
    question: 'How long does it take to get a mortgage?',
    answer:
      'From application to closing typically takes 30 to 45 days. Pre-approval can take a few days. Delays can occur with appraisals, title, or document requests.',
  },
  {
    question: 'Can I get a mortgage with bad credit?',
    answer:
      'It depends. FHA and some other programs may accept lower credit scores. You may pay a higher rate or need a larger down payment. See our guide on credit score requirements for more.',
  },
];

export default function StepsToGetAMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Steps to Get a Mortgage: A Checklist for U.S. Homebuyers',
    description:
      'A step-by-step checklist for getting a mortgage from credit check to closing. Know what to do at each stage.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Steps to Get a Mortgage: A Checklist for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Getting a mortgage involves several steps from preparation to closing. This checklist walks you through each stage so you know what to expect and what to do. For a purchase, you may get pre-approved before or while house hunting; for a refinance, you apply when you are ready.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Check Your Credit</h2>
          <p className="text-gray-700 mb-4">
            Review your credit report and score. Lenders use credit to qualify you and set your rate. Fix errors, pay down debt if possible, and avoid new credit inquiries before applying. See our guide on{' '}
            <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">
              What Credit Score Is Needed for a Mortgage
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Get Pre-Approved or Prequalified</h2>
          <p className="text-gray-700 mb-4">
            Pre-approval involves verification of your finances and a credit check. Prequalification is typically a quick estimate. For house hunting, pre-approval is stronger. See{' '}
            <Link href="/mortgage/mortgage-pre-approval-process" className="text-primary hover:underline font-medium">
              Mortgage Pre-Approval Process
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-pre-approval-vs-pre-qualification" className="text-primary hover:underline font-medium">
              Pre-Approval vs Pre-Qualification
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Shop Lenders (Optional but Recommended)</h2>
          <p className="text-gray-700 mb-4">
            Compare rates and fees from multiple lenders. Apply within a short window (e.g., 14–45 days) so credit inquiries are typically counted as one. Compare Loan Estimates when you receive them.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Submit Your Application</h2>
          <p className="text-gray-700 mb-4">
            When you have a purchase contract (or for refinance, when you are ready), submit your formal application. Provide pay stubs, W-2s, tax returns, bank statements, and ID. The lender will provide a Loan Estimate within 3 business days. See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">
              Mortgage Application Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Underwriting and Appraisal</h2>
          <p className="text-gray-700 mb-4">
            The lender reviews your application (underwriting) and orders an appraisal. Respond quickly to any document requests. You may receive conditional approval. See{' '}
            <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">
              Mortgage Underwriting Explained
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">
              Mortgage Approval Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Clear to Close and Closing Disclosure</h2>
          <p className="text-gray-700 mb-4">
            Once conditions are met, you receive clear to close. The lender sends the Closing Disclosure at least 3 business days before closing. Review it and compare to your Loan Estimate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 7: Closing</h2>
          <p className="text-gray-700 mb-4">
            At closing, you sign the loan documents, the lender funds the loan, and you receive the keys (for a purchase). Bring ID and funds for closing if required. See{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">
              Mortgage Closing Process
            </Link>
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about steps to get a mortgage">
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
            The process varies by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
