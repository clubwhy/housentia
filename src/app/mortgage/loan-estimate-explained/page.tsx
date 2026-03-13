import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loan Estimate Explained: A Guide for U.S. Homebuyers | Housentia',
  description:
    'A detailed walkthrough of the Loan Estimate form. Learn what each section means: loan terms, projected payments, and closing costs.',
  openGraph: {
    title: 'Loan Estimate Explained: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the Loan Estimate form section by section.',
  },
};

const ARTICLE_SLUG = 'loan-estimate-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Loan Estimate Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/loan-estimate-explained';

const FAQ_ITEMS = [
  {
    question: 'When do I receive the Loan Estimate?',
    answer:
      'Lenders must provide a Loan Estimate within 3 business days of receiving your application (for most residential mortgages under TRID rules).',
  },
  {
    question: 'Is the Loan Estimate binding?',
    answer:
      'The Loan Estimate is an estimate, not a final offer. Some costs can change within tolerance limits. The Closing Disclosure shows the final numbers.',
  },
  {
    question: 'What are the main sections of the Loan Estimate?',
    answer:
      'The form includes: Loan Terms (amount, rate, term), Projected Payments (P&I, mortgage insurance, escrow), and Costs at Closing (origination charges, services you can shop for, services you cannot shop for).',
  },
  {
    question: 'Can I compare Loan Estimates from different lenders?',
    answer:
      'Yes. The standardized format makes it easier to compare offers. Focus on the interest rate, APR, and total closing costs.',
  },
];

export default function LoanEstimateExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Loan Estimate Explained: A Guide for U.S. Homebuyers',
    description:
      'A detailed walkthrough of the Loan Estimate form. Learn what each section means and how to compare offers.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Loan Estimate Explained: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>Loan Estimate</strong> is a standardized form that lenders must provide within 3 business days
            of receiving your mortgage application. It summarizes the loan terms, projected payments, and estimated
            closing costs so you can compare offers.
          </p>
          <p className="text-gray-700 mb-4">
            This guide walks through the main sections of the Loan Estimate. For a general overview, see our{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">
              What is a Loan Estimate?
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Sections</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Loan Terms</strong> — Loan amount, interest rate, monthly P&I, and whether the rate can change</li>
            <li><strong>Projected Payments</strong> — Principal & interest, mortgage insurance, estimated escrow (taxes, insurance)</li>
            <li><strong>Costs at Closing</strong> — Origination charges, services you can shop for, services you cannot shop for</li>
            <li><strong>Comparisons</strong> — How much you will pay in 5 years, total of payments, APR</li>
            <li><strong>Other Considerations</strong> — Appraisal, assumption, homeowner&apos;s insurance, etc.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using the Loan Estimate to Compare</h2>
          <p className="text-gray-700 mb-4">
            When comparing offers, focus on: the interest rate, the APR (which includes some fees), and the total
            closing costs. The &quot;Loan Estimate&quot; and &quot;Closing Disclosure&quot; use the same section
            structure, so you can compare the initial estimate to the final numbers.
          </p>
          <p className="text-gray-700">
            See our{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">
              What is a Closing Disclosure?
            </Link>{' '}
            for how the final disclosure compares.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about the Loan Estimate">
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
          glossary={[{ label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' }]}
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
            Loan Estimate rules are set by the CFPB under TRID. Actual forms may vary slightly.
          </p>
        </section>
      </main>
    </div>
  );
}
