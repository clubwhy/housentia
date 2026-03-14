import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Title Insurance Fee? | Housentia',
  description:
    'Title insurance protects against defects in the property title. Learn about lender and owner policies, typical costs, and where the fee appears on your Loan Estimate.',
  openGraph: {
    title: 'What Is a Title Insurance Fee? | Housentia',
    description: 'Understand title insurance fees for mortgages.',
  },
};

const ARTICLE_SLUG = 'what-is-a-title-insurance-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Title Insurance Fee?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-title-insurance-fee';

const FAQ_ITEMS = [
  {
    question: 'What is title insurance?',
    answer:
      'Title insurance protects against defects in the property title—such as liens, errors in public records, or ownership disputes. Lenders typically require a lender\'s policy; buyers may optionally purchase an owner\'s policy.',
  },
  {
    question: 'How much does title insurance cost?',
    answer:
      'Costs vary by state and loan amount. Lender\'s title insurance often ranges from a few hundred to over a thousand dollars. Owner\'s title insurance, if purchased, is typically a one-time premium. Rates may be regulated by state.',
  },
  {
    question: 'Can I shop for title insurance?',
    answer:
      'Yes. Title services and insurance are often in the "Services You Can Shop For" section of your Loan Estimate. Shopping can save money; compare quotes from different title companies.',
  },
  {
    question: 'Is owner\'s title insurance required?',
    answer:
      'Lender\'s title insurance is typically required. Owner\'s title insurance is optional but recommended—it protects you if a title defect arises after closing.',
  },
];

export default function WhatIsATitleInsuranceFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Title Insurance Fee?',
    description:
      'Title insurance protects against defects in the property title. Learn about lender and owner policies and typical costs.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Title Insurance Fee?" breadcrumbs={BREADCRUMBS} />
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
            The <strong>title insurance fee</strong> pays for title insurance, which protects against defects in the property title—such as liens, errors in public records, or ownership disputes. Lenders typically require a <strong>lender&apos;s policy</strong> to protect their interest. Buyers may optionally purchase an <strong>owner&apos;s policy</strong> to protect themselves.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lender vs. Owner Policy</h2>
          <p className="text-gray-700 mb-4">
            The <strong>lender&apos;s policy</strong> protects the lender up to the loan amount and is usually required. The <strong>owner&apos;s policy</strong> protects you up to the purchase price and is optional but recommended. In some states, sellers pay for the owner&apos;s policy by custom.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Costs and Shopping</h2>
          <p className="text-gray-700 mb-4">
            Title insurance costs vary by state and loan amount. In many states, rates are regulated. Title services often appear under &quot;Services You Can Shop For&quot; on your Loan Estimate—shopping can save money. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">
              What Are Closing Costs
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">
              What Is a Loan Estimate
            </Link>
            .
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about title insurance fee">
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
            Title insurance rates and requirements vary by state.
          </p>
        </section>
      </main>
    </div>
  );
}
