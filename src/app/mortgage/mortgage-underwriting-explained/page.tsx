import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Underwriting Explained: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Underwriting is when the lender evaluates your application, credit, income, and the property. Learn what underwriters look for and what to expect.',
  openGraph: {
    title: 'Mortgage Underwriting Explained: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage underwriting and what lenders evaluate.',
  },
};

const ARTICLE_SLUG = 'mortgage-underwriting-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Underwriting Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-underwriting-explained';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage underwriting?',
    answer:
      'Underwriting is the process where the lender evaluates your credit, income, assets, debt, and the property to decide whether to approve the loan and on what terms.',
  },
  {
    question: 'How long does underwriting take?',
    answer:
      'Typically a few days to a couple of weeks, depending on the lender, loan type, and whether additional documents are requested.',
  },
  {
    question: 'What do underwriters look for?',
    answer:
      'Underwriters evaluate the 3 C\'s: Credit (score and history), Capacity (income and DTI), and Collateral (property value and condition).',
  },
  {
    question: 'What if the underwriter requests more documents?',
    answer:
      'Conditional approval often includes a list of conditions. Provide the requested documents promptly to avoid delays.',
  },
];

export default function MortgageUnderwritingExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Underwriting Explained: A Guide for U.S. Homebuyers',
    description:
      'Underwriting is when the lender evaluates your application. This guide explains what underwriters look for and what to expect during the process.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Underwriting Explained: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage underwriting</strong> is the process where the lender evaluates your loan application to
            decide whether to approve it and on what terms. The underwriter reviews your credit, income, assets, debt,
            and the property to assess risk.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding underwriting helps you know what to expect after you submit your application, why the lender
            may request additional documents, and what factors influence the decision.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The 3 C&apos;s of Underwriting</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Credit</strong> — Credit score, payment history, and existing debt. See{' '}
              <Link href="/mortgage/what-is-dti" className="text-primary hover:underline">What is DTI</Link>.
            </li>
            <li>
              <strong>Capacity</strong> — Ability to repay, based on income and debt-to-income ratio.
            </li>
            <li>
              <strong>Collateral</strong> — The property value (from appraisal) and condition.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
          <p className="text-gray-700 mb-4">
            After you submit your application and documents, the lender assigns an underwriter. The underwriter may
            approve, deny, or issue a conditional approval (approve subject to providing additional documents or
            meeting conditions).
          </p>
          <p className="text-gray-700">
            Responding quickly to document requests can help keep the process on track. For more on the overall process,
            see our{' '}
            <Link href="/mortgage/mortgage-application-process" className="text-primary hover:underline font-medium">
              Mortgage Application Process
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about underwriting">
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
            Underwriting criteria vary by lender and loan program.
          </p>
        </section>
      </main>
    </div>
  );
}
