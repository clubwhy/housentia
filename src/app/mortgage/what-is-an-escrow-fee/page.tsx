import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an Escrow Fee? | Housentia',
  description:
    'The escrow fee pays for the neutral third party that holds funds and documents during a real estate closing. Learn what it covers and typical costs.',
  openGraph: { title: 'What Is an Escrow Fee? | Housentia', description: 'Understand escrow fees for real estate closings.' },
};

const ARTICLE_SLUG = 'what-is-an-escrow-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is an Escrow Fee?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-an-escrow-fee';

const FAQ_ITEMS = [
  { question: 'What is an escrow fee?', answer: 'The escrow fee pays for the escrow or title company that holds funds and documents during the closing process. They ensure all conditions are met before releasing money and transferring ownership.' },
  { question: 'How much does escrow cost?', answer: 'Escrow fees vary by state and transaction size. They often range from a few hundred to over a thousand dollars. The fee may appear under "Services You Can Shop For" on your Loan Estimate.' },
  { question: 'Can I shop for escrow?', answer: 'In many states, yes. Escrow and title services are often shoppable. Compare quotes from different companies to potentially save money.' },
  { question: 'Is escrow fee the same as escrow account?', answer: 'No. The escrow fee is a closing cost for the closing process. An escrow account (or impound account) holds funds for property taxes and insurance after closing. See What Is Escrow for the account.' },
];

export default function WhatIsAnEscrowFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is an Escrow Fee?', description: 'The escrow fee pays for the neutral third party during closing. Learn what it covers.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is an Escrow Fee?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>escrow fee</strong> pays for the escrow or title company that acts as a neutral third party during the closing process. They hold funds and documents, coordinate with all parties, and ensure conditions are met before releasing money and transferring ownership.</p>
          <p className="text-gray-700">This is different from an <strong>escrow account</strong> (impound account), which holds funds for property taxes and insurance after closing. See <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">What Is Escrow</Link> and <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about escrow fee">
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
          <p className="text-gray-700 text-sm">Escrow fees vary by state and provider.</p>
        </section>
      </main>
    </div>
  );
}
