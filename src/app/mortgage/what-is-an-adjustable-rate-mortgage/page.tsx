import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an Adjustable Rate Mortgage (ARM)? | Housentia',
  description:
    'An ARM has an interest rate that can change after an initial fixed period. Learn how ARMs work, caps, and when they may make sense.',
  openGraph: { title: 'What Is an Adjustable Rate Mortgage? | Housentia', description: 'Understand adjustable rate mortgages.' },
};

const ARTICLE_SLUG = 'what-is-an-adjustable-rate-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is an Adjustable Rate Mortgage?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-an-adjustable-rate-mortgage';

const FAQ_ITEMS = [
  { question: 'What is an adjustable rate mortgage (ARM)?', answer: 'An ARM has an interest rate that can change after an initial fixed period (e.g., 5, 7, or 10 years). The rate is tied to an index plus a margin and adjusts periodically.' },
  { question: 'What does 5/1 or 7/1 ARM mean?', answer: 'The first number is the initial fixed period in years; the second is how often the rate can adjust after that (e.g., 5/1 = fixed for 5 years, then adjusts annually).' },
  { question: 'What are rate caps?', answer: 'ARMs have caps that limit how much the rate can change at each adjustment and over the life of the loan. These protect you from large payment spikes.' },
  { question: 'When does an ARM make sense?', answer: 'ARMs can make sense if you plan to sell or refinance before the first adjustment, or expect rates to stay low. Compare with fixed rates. See Fixed vs Adjustable Rate Mortgage.' },
];

export default function WhatIsAnAdjustableRateMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is an Adjustable Rate Mortgage?', description: 'An ARM rate can change after an initial fixed period. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is an Adjustable Rate Mortgage?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">An <strong>adjustable rate mortgage (ARM)</strong> has an interest rate that can change after an initial fixed period. Common types include 5/1, 7/1, and 10/1 ARMs. The rate is tied to an index (e.g., SOFR) plus a margin. See <Link href="/mortgage/what-is-a-fixed-rate-mortgage" className="text-primary hover:underline font-medium">What Is a Fixed Rate Mortgage</Link> and <Link href="/mortgage/fixed-vs-adjustable-rate-mortgage" className="text-primary hover:underline font-medium">Fixed vs Adjustable Rate Mortgage</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about adjustable rate mortgage">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">ARM terms and caps vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
