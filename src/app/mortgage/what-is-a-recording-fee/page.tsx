import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Recording Fee? | Housentia',
  description:
    'The recording fee pays the county or local government to record your deed and mortgage in public records. Learn typical costs and where it appears on your Loan Estimate.',
  openGraph: {
    title: 'What Is a Recording Fee? | Housentia',
    description: 'Understand mortgage recording fees.',
  },
};

const ARTICLE_SLUG = 'what-is-a-recording-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Recording Fee?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-recording-fee';

const FAQ_ITEMS = [
  {
    question: 'What is a recording fee?',
    answer:
      'The recording fee is paid to the county or local government to record your deed and mortgage (or deed of trust) in public records. Recording establishes your ownership and the lender\'s lien on the property.',
  },
  {
    question: 'How much does recording cost?',
    answer:
      'Recording fees vary by county and state. They often range from about $50 to $300 or more, depending on the number of pages and local rates. Some jurisdictions charge per page.',
  },
  {
    question: 'Can I shop for recording fees?',
    answer:
      'Recording fees are set by the government and are typically non-negotiable. The title or escrow company usually handles the recording and passes the fee to you at closing.',
  },
  {
    question: 'Who pays the recording fee?',
    answer:
      'In many transactions, the buyer pays to record the deed and mortgage. In some areas, the seller pays to record the deed of release. Custom varies by location and negotiation.',
  },
];

export default function WhatIsARecordingFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Recording Fee?',
    description:
      'The recording fee pays the county to record your deed and mortgage in public records. Learn typical costs.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Recording Fee?" breadcrumbs={BREADCRUMBS} />
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
            The <strong>recording fee</strong> is paid to the county or local government to record your deed and mortgage (or deed of trust) in public records. Recording establishes your ownership and the lender&apos;s lien on the property. The fee typically appears on your Loan Estimate and Closing Disclosure under government recording charges.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Gets Recorded</h2>
          <p className="text-gray-700 mb-4">
            The deed transfers ownership to you and is recorded. The mortgage or deed of trust secures the loan and is also recorded. Both documents become part of the public record, which helps protect your ownership and the lender&apos;s interest.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Costs</h2>
          <p className="text-gray-700 mb-4">
            Recording fees vary by county and state. They often range from about $50 to $300 or more, depending on the number of pages and local rates. The title or escrow company typically handles recording and passes the fee to you at closing. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">
              What Are Closing Costs
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/what-happens-at-closing" className="text-primary hover:underline font-medium">
              What Happens at Closing
            </Link>
            .
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about recording fee">
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
            Recording fees vary by county and state.
          </p>
        </section>
      </main>
    </div>
  );
}
