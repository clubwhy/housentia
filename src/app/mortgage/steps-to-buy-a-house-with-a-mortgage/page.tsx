import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steps to Buy a House with a Mortgage: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn the steps to buy a house with a mortgage: from getting pre-approved to closing. Understand the full home buying process and how the mortgage fits in.',
  openGraph: {
    title: 'Steps to Buy a House with a Mortgage: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the full process of buying a house with a mortgage.',
  },
};

const ARTICLE_SLUG = 'steps-to-buy-a-house-with-a-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Steps to Buy a House with a Mortgage',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/steps-to-buy-a-house-with-a-mortgage';

const FAQ_ITEMS = [
  {
    question: 'What is the first step to buying a house with a mortgage?',
    answer:
      'Many buyers start by checking their finances and getting pre-approved for a mortgage. This tells you how much you can borrow and strengthens your offer when you find a home.',
  },
  {
    question: 'When do I apply for the mortgage?',
    answer:
      'You typically apply for the mortgage after your offer is accepted. You may have a contingency period (e.g., 14–21 days) to obtain financing. Get pre-approved before making offers so you are ready.',
  },
  {
    question: 'How long does it take to buy a house?',
    answer:
      'From offer to closing often takes 30 to 45 days, depending on the contract and mortgage timeline. The mortgage process usually takes 30–45 days from application to closing.',
  },
  {
    question: 'Do I need a real estate agent?',
    answer:
      'You can buy without an agent (for sale by owner), but most buyers use an agent. Agents help find homes, negotiate, and navigate the process. For the mortgage, you work with a lender or broker.',
  },
];

export default function StepsToBuyAHouseWithAMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Steps to Buy a House with a Mortgage: A Guide for U.S. Homebuyers',
    description:
      'Learn the steps to buy a house with a mortgage from pre-approval to closing. Understand how the mortgage fits into the home buying process.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Steps to Buy a House with a Mortgage: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Buying a house with a mortgage combines two processes: finding and securing a home, and obtaining financing. The steps overlap—you get pre-approved before or while house hunting, make an offer, then apply for the mortgage once your offer is accepted.
          </p>
          <p className="text-gray-700">
            This guide walks through the full process from preparation to closing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Prepare Your Finances</h2>
          <p className="text-gray-700 mb-4">
            Check your credit, calculate how much you can afford, and save for a down payment and closing costs. Use our{' '}
            <Link href="/tools/affordability-calculator" className="text-primary hover:underline font-medium">
              Affordability Calculator
            </Link>
            {' '}to estimate. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">
              What Is DTI?
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">
              What Is LTV?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Get Pre-Approved</h2>
          <p className="text-gray-700 mb-4">
            Get pre-approved before or early in your house hunt. A pre-approval letter shows sellers you are a serious buyer. See{' '}
            <Link href="/mortgage/mortgage-pre-approval-process" className="text-primary hover:underline font-medium">
              Mortgage Pre-Approval Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Find a Home and Make an Offer</h2>
          <p className="text-gray-700 mb-4">
            Work with a real estate agent (or on your own) to find a home. When you find one you want, make an offer. Your offer may include contingencies—for example, financing contingency (mortgage approval) and inspection contingency.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Apply for the Mortgage</h2>
          <p className="text-gray-700 mb-4">
            Once your offer is accepted, apply formally with your lender. You will provide documents and receive a Loan Estimate within 3 business days. The mortgage process runs in parallel with other steps (inspection, appraisal, title). See{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">
              Mortgage Application Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Home Inspection and Appraisal</h2>
          <p className="text-gray-700 mb-4">
            A home inspection (optional but recommended) assesses the property&apos;s condition. The lender orders an appraisal to verify value. If the appraisal comes in low, you may need to renegotiate or bring more cash to close.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Clear to Close</h2>
          <p className="text-gray-700 mb-4">
            Once underwriting is complete and conditions are met, you receive clear to close. You get the Closing Disclosure at least 3 business days before closing. Review it carefully.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 7: Closing</h2>
          <p className="text-gray-700 mb-4">
            At closing, you sign the loan and purchase documents, the lender funds the loan, and you receive the keys. See{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">
              Mortgage Closing Process
            </Link>
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about buying a house with a mortgage">
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
          calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }}
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
            The process varies by location, lender, and transaction.
          </p>
        </section>
      </main>
    </div>
  );
}
