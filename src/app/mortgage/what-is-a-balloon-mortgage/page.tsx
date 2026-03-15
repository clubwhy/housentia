import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Balloon Mortgage? | Housentia',
  description:
    'A balloon mortgage has small payments for a period, then a large balloon payment due at the end. Learn how it works and the risks.',
  openGraph: { title: 'What Is a Balloon Mortgage? | Housentia', description: 'Understand balloon mortgages.' },
};

const ARTICLE_SLUG = 'what-is-a-balloon-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Balloon Mortgage?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-balloon-mortgage';

const FAQ_ITEMS = [
  { question: 'What is a balloon mortgage?', answer: 'A balloon mortgage has relatively small monthly payments for a set period (e.g., 5 or 7 years), then a large "balloon" payment of the remaining balance is due at the end.' },
  { question: 'What happens at the balloon date?', answer: 'You must pay off the remaining balance. Options include refinancing, selling the property, or paying in cash. If you cannot pay, you may default.' },
  { question: 'Are balloon mortgages common?', answer: 'Balloon mortgages are less common today. They are sometimes used in commercial real estate or when the borrower expects to sell or refinance before the balloon date.' },
  { question: 'What are the risks?', answer: 'The main risk is being unable to refinance or sell when the balloon comes due. Rates could be higher, or you might not qualify for a new loan.' },
];

export default function WhatIsABalloonMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Balloon Mortgage?', description: 'A balloon mortgage has a large payment due at the end. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Balloon Mortgage?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>balloon mortgage</strong> has small monthly payments for a set period, then a large balloon payment of the remaining balance is due. You typically plan to refinance or sell before the balloon date. See <Link href="/mortgage/what-is-an-interest-only-mortgage" className="text-primary hover:underline font-medium">What Is an Interest Only Mortgage</Link>, <Link href="/mortgage/what-is-a-fixed-rate-mortgage" className="text-primary hover:underline font-medium">What Is a Fixed Rate Mortgage</Link>, and <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about balloon mortgage">
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
          <p className="text-gray-700 text-sm">Balloon mortgages are less common. Consult a lender for availability.</p>
        </section>
      </main>
    </div>
  );
}
