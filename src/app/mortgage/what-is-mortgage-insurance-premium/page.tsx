import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Mortgage Insurance Premium (MIP)? | Housentia',
  description:
    'Mortgage insurance premium (MIP) protects the lender when you put down less than 20%. Learn about upfront and annual MIP for FHA and other loans.',
  openGraph: { title: 'What Is Mortgage Insurance Premium? | Housentia', description: 'Understand mortgage insurance premium (MIP).' },
};

const ARTICLE_SLUG = 'what-is-mortgage-insurance-premium';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is Mortgage Insurance Premium?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-mortgage-insurance-premium';

const FAQ_ITEMS = [
  { question: 'What is mortgage insurance premium (MIP)?', answer: 'MIP is the fee paid for mortgage insurance. For FHA loans, it includes an upfront premium (paid at closing) and an annual premium (paid monthly). For conventional loans, the equivalent is PMI.' },
  { question: 'When is MIP required?', answer: 'FHA loans typically require MIP for the life of the loan if you put down less than 10%, or for 11 years if you put down 10% or more. Conventional loans use PMI when LTV exceeds 80%.' },
  { question: 'How much does MIP cost?', answer: 'FHA upfront MIP is typically 1.75% of the loan amount. Annual MIP varies by loan term, amount, and LTV. See Upfront Mortgage Insurance Explained and Monthly Mortgage Insurance Explained.' },
  { question: 'Can I remove MIP?', answer: 'FHA MIP is often required for the life of the loan on high-LTV loans. Refinancing to a conventional loan (once you have 20%+ equity) can eliminate it. Conventional PMI can be removed at 80% LTV.' },
];

export default function WhatIsMortgageInsurancePremiumPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is Mortgage Insurance Premium?', description: 'MIP protects the lender when you put down less than 20%. Learn upfront and annual MIP.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Mortgage Insurance Premium?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>mortgage insurance premium (MIP)</strong> is the fee paid for mortgage insurance when you put down less than 20%. For FHA loans, MIP includes an <strong>upfront premium</strong> (paid at closing) and an <strong>annual premium</strong> (paid monthly). For conventional loans, the equivalent is PMI. See <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link> and <Link href="/mortgage/what-is-mortgage-insurance" className="text-primary hover:underline font-medium">What Is Mortgage Insurance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about mortgage insurance premium">
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
          <p className="text-gray-700 text-sm">MIP rates and rules vary by loan type and program.</p>
        </section>
      </main>
    </div>
  );
}
