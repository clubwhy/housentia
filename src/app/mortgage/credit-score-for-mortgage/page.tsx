import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Credit Score Is Needed for a Mortgage? A Guide for U.S. Homebuyers | Housentia',
  description:
    'Credit score requirements vary by loan type. Learn the typical ranges for conventional, FHA, and VA loans and how to improve your score.',
  openGraph: {
    title: 'What Credit Score Is Needed for a Mortgage? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand credit score requirements for different mortgage types.',
  },
};

const ARTICLE_SLUG = 'credit-score-for-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Credit Score Is Needed for a Mortgage?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/credit-score-for-mortgage';

const FAQ_ITEMS = [
  {
    question: 'What credit score do I need for a conventional loan?',
    answer:
      'Conventional loans often prefer scores of 620 or higher, though 740+ may qualify for better rates. Requirements vary by lender and loan program.',
  },
  {
    question: 'What credit score do I need for an FHA loan?',
    answer:
      'FHA loans may accept scores as low as 500 with a larger down payment, or 580 for 3.5% down. Requirements vary by lender.',
  },
  {
    question: 'Does a higher credit score get a better rate?',
    answer:
      'Generally yes. Higher scores often qualify for lower interest rates and better terms. Lenders use risk-based pricing.',
  },
  {
    question: 'How can I improve my credit score before applying?',
    answer:
      'Pay bills on time, reduce credit card balances, avoid new credit inquiries, and check your report for errors. Improvement takes time.',
  },
];

export default function CreditScoreForMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Credit Score Is Needed for a Mortgage? A Guide for U.S. Homebuyers',
    description:
      'Credit score requirements vary by loan type. Learn the typical ranges for conventional, FHA, and VA loans.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Credit Score Is Needed for a Mortgage? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Your <strong>credit score</strong> is one of the key factors lenders use when evaluating your mortgage
            application. It affects whether you qualify, what loan programs you can access, and what interest rate you
            receive.
          </p>
          <p className="text-gray-700 mb-4">
            Credit score requirements vary by loan type. Conventional loans typically prefer higher scores; FHA and VA
            loans may be more flexible. This guide outlines typical ranges and how credit fits into the overall
            qualification picture.
          </p>
          <p className="text-gray-700">
            Credit is one of several factors. Lenders also consider income, debt-to-income ratio, and the property. See
            our{' '}
            <Link href="/mortgage/what-lenders-look-at-mortgage-approval" className="text-primary hover:underline font-medium">
              What Lenders Look at When Approving a Mortgage
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Credit Score Ranges</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Conventional</strong> — Often 620+; 740+ for best rates</li>
            <li><strong>FHA</strong> — May accept 580+ (3.5% down) or 500+ with 10% down</li>
            <li><strong>VA</strong> — No minimum score set by VA; lenders set their own</li>
          </ul>
          <p className="text-gray-700">
            These are general guidelines. Actual requirements vary by lender and program.
          </p>
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
            Credit score requirements vary by lender and program.
          </p>
        </section>
      </main>
    </div>
  );
}
