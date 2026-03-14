import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Flood Certification Fee? | Housentia',
  description:
    'The flood certification fee pays to determine whether the property is in a flood zone. Learn what it covers and why lenders require it.',
  openGraph: { title: 'What Is a Flood Certification Fee? | Housentia', description: 'Understand flood certification fees for mortgages.' },
};

const ARTICLE_SLUG = 'what-is-a-flood-certification-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Flood Certification Fee?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-flood-certification-fee';

const FAQ_ITEMS = [
  { question: 'What is a flood certification fee?', answer: 'The flood certification fee pays for a determination of whether the property is in a Special Flood Hazard Area (SFHA). Lenders require this to decide if flood insurance is mandatory.' },
  { question: 'How much does flood certification cost?', answer: 'Flood certification fees are typically $15 to $25. The fee appears on your Loan Estimate under "Services You Cannot Shop For."' },
  { question: 'Why do lenders require flood certification?', answer: 'Federal law requires lenders to determine flood zone status for properties securing federally regulated loans. If the property is in a flood zone, flood insurance is usually required.' },
  { question: 'Can I shop for flood certification?', answer: 'Usually no. Lenders typically order the flood determination from a designated provider. The fee is generally non-negotiable.' },
];

export default function WhatIsAFloodCertificationFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Flood Certification Fee?', description: 'The flood certification fee determines if the property is in a flood zone. Learn what it covers.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Flood Certification Fee?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>flood certification fee</strong> pays for a determination of whether the property is in a Special Flood Hazard Area (SFHA) as defined by FEMA. Lenders require this to decide if flood insurance is mandatory. See <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about flood certification fee">
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
          <p className="text-gray-700 text-sm">Flood certification fees vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
