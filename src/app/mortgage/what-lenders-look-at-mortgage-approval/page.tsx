import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Lenders Look at When Approving a Mortgage: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Lenders evaluate credit, income, assets, debt, and the property. Learn the key factors in mortgage approval.',
  openGraph: {
    title: 'What Lenders Look at When Approving a Mortgage: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand what lenders evaluate when approving a mortgage.',
  },
};

const ARTICLE_SLUG = 'what-lenders-look-at-mortgage-approval';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Lenders Look at When Approving a Mortgage',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-lenders-look-at-mortgage-approval';

const FAQ_ITEMS = [
  {
    question: 'What are the main factors in mortgage approval?',
    answer:
      'Lenders typically evaluate: credit score and history, income and employment, assets and reserves, debt-to-income ratio, and the property (appraisal, title).',
  },
  {
    question: 'How important is credit score?',
    answer:
      'Credit score affects both approval and the interest rate. Higher scores often qualify for better terms. See our credit score guide for typical requirements.',
  },
  {
    question: 'What is the 3 C\'s of underwriting?',
    answer:
      'Credit (score and history), Capacity (income and DTI), and Collateral (property value and condition).',
  },
  {
    question: 'Can I get approved with a low credit score?',
    answer:
      'Some programs, such as FHA, may accept lower scores. You may pay a higher rate or need a larger down payment.',
  },
];

export default function WhatLendersLookAtMortgageApprovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Lenders Look at When Approving a Mortgage: A Guide for U.S. Homebuyers',
    description:
      'Lenders evaluate credit, income, assets, debt, and the property. Learn the key factors in mortgage approval.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Lenders Look at When Approving a Mortgage: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            When you apply for a mortgage, lenders evaluate several factors to decide whether to approve your loan and
            on what terms. Understanding what lenders look at helps you prepare and address potential issues before
            applying.
          </p>
          <p className="text-gray-700 mb-4">
            The main areas are often summarized as the <strong>3 C&apos;s</strong>: Credit, Capacity, and Collateral.
            Lenders also consider employment stability, assets, and the specific loan program.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Factors</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Credit</strong> — Score and payment history. See <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline">Credit Score for Mortgage</Link></li>
            <li><strong>Capacity</strong> — Income and DTI. See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline">How DTI Affects Approval</Link></li>
            <li><strong>Collateral</strong> — Property value (appraisal) and condition</li>
            <li><strong>Assets</strong> — Reserves for down payment, closing costs, and post-closing</li>
            <li><strong>Employment</strong> — Stable income. See <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline">How Income Is Verified</Link></li>
          </ul>
        </section>

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

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Loan Qualification Comparison', href: '/tools/loan-qualification-comparison' }}
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
            Approval criteria vary by lender and program.
          </p>
        </section>
      </main>
    </div>
  );
}
