import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Processing Fee? | Housentia',
  description:
    'The processing fee covers the cost of preparing your mortgage application for underwriting. Learn what it includes and how it differs from origination fees.',
  openGraph: { title: 'What Is a Processing Fee? | Housentia', description: 'Understand mortgage processing fees.' },
};

const ARTICLE_SLUG = 'what-is-a-processing-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Processing Fee?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-processing-fee';

const FAQ_ITEMS = [
  { question: 'What is a processing fee?', answer: 'The processing fee covers the cost of preparing your mortgage application for underwriting—collecting documents, ordering the appraisal and credit report, and coordinating with third parties. It may be a separate line item or bundled into origination charges.' },
  { question: 'How much does processing cost?', answer: 'Processing fees vary by lender. They may range from a few hundred to over a thousand dollars. Some lenders bundle processing into a single origination charge.' },
  { question: 'Is processing fee the same as origination fee?', answer: 'Not always. Origination typically covers both processing and underwriting. Some lenders itemize them separately. Compare total origination charges across lenders.' },
  { question: 'Can I negotiate the processing fee?', answer: 'Some fees may be negotiable. Compare Loan Estimates from multiple lenders and ask about waivers or credits.' },
];

export default function WhatIsAProcessingFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Processing Fee?', description: 'The processing fee covers preparing your application for underwriting. Learn what it includes.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Processing Fee?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>processing fee</strong> covers the cost of preparing your mortgage application for underwriting. Processors collect documents, order the appraisal and credit report, and coordinate with third parties. See <Link href="/mortgage/mortgage-processing-explained" className="text-primary hover:underline font-medium">Mortgage Processing Explained</Link>.</p>
          <p className="text-gray-700">The fee may appear as a separate line item or be bundled into origination charges. Compare <Link href="/mortgage/what-is-origination-fee" className="text-primary hover:underline font-medium">What Is an Origination Fee</Link> and total lender charges on your Loan Estimate.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about processing fee">
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
          <p className="text-gray-700 text-sm">Processing fees vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
