import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Credit Report Fee? | Housentia',
  description:
    'The credit report fee covers the cost of pulling your credit report for mortgage underwriting. Learn what it includes and typical costs.',
  openGraph: {
    title: 'What Is a Credit Report Fee? | Housentia',
    description: 'Understand mortgage credit report fees.',
  },
};

const ARTICLE_SLUG = 'what-is-a-credit-report-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Credit Report Fee?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-credit-report-fee';

const FAQ_ITEMS = [
  {
    question: 'What is a credit report fee?',
    answer:
      'The credit report fee covers the cost of obtaining your credit report from one or more credit bureaus (Equifax, Experian, TransUnion) for mortgage underwriting. Lenders use the report to assess creditworthiness.',
  },
  {
    question: 'How much does a credit report cost?',
    answer:
      'Typical credit report fees range from about $25 to $50. Some lenders absorb this cost or include it in other fees. It appears on your Loan Estimate under "Origination Charges" or "Services You Cannot Shop For."',
  },
  {
    question: 'Can I avoid paying a credit report fee?',
    answer:
      'The fee is typically non-negotiable because the lender must pull your credit. Some lenders may waive or reduce it as part of a promotion. Compare loan estimates from multiple lenders.',
  },
  {
    question: 'Does pulling my credit affect my score?',
    answer:
      'Multiple mortgage-related credit pulls within a short window (typically 14–45 days) are usually counted as one inquiry for scoring purposes, so shopping around generally does not hurt your score.',
  },
];

export default function WhatIsACreditReportFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Credit Report Fee?',
    description:
      'The credit report fee covers the cost of pulling your credit report for mortgage underwriting. Learn typical costs.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Credit Report Fee?" breadcrumbs={BREADCRUMBS} />
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
            The <strong>credit report fee</strong> covers the cost of obtaining your credit report from one or more credit bureaus (Equifax, Experian, TransUnion) for mortgage underwriting. Lenders use the report to assess your creditworthiness and determine loan eligibility. See{' '}
            <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">
              Credit Score for Mortgage
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/what-lenders-look-at-mortgage-approval" className="text-primary hover:underline font-medium">
              What Lenders Look at When Approving a Mortgage
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Costs</h2>
          <p className="text-gray-700 mb-4">
            Credit report fees typically range from about $25 to $50. Some lenders absorb this cost or bundle it into other charges. The fee appears on your Loan Estimate under Origination Charges or Services You Cannot Shop For.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about credit report fee">
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
        <RelatedLinks className="mb-10" />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Credit report fees vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
