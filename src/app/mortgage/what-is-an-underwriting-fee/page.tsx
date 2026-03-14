import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an Underwriting Fee? | Housentia',
  description:
    'The underwriting fee pays for the lender to evaluate your application and approve the loan. Learn what it covers and how it appears on your Loan Estimate.',
  openGraph: { title: 'What Is an Underwriting Fee? | Housentia', description: 'Understand mortgage underwriting fees.' },
};

const ARTICLE_SLUG = 'what-is-an-underwriting-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is an Underwriting Fee?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-an-underwriting-fee';

const FAQ_ITEMS = [
  { question: 'What is an underwriting fee?', answer: 'The underwriting fee pays for the lender to evaluate your application, verify income and assets, assess risk, and approve or deny the loan. It compensates for the underwriting process.' },
  { question: 'How much does underwriting cost?', answer: 'Underwriting fees vary by lender. They may range from a few hundred to over a thousand dollars. Many lenders bundle underwriting into a single origination charge.' },
  { question: 'Is underwriting fee separate from origination?', answer: 'Sometimes. Some lenders itemize processing and underwriting separately; others combine them into one origination charge. Compare total lender fees on your Loan Estimate.' },
  { question: 'Can I avoid an underwriting fee?', answer: 'Lenders must underwrite every loan. Some offer "no lender fees" options, but the cost may be reflected in a higher rate. Compare APR and total costs.' },
];

export default function WhatIsAnUnderwritingFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is an Underwriting Fee?', description: 'The underwriting fee pays for evaluating your application. Learn what it covers.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is an Underwriting Fee?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>underwriting fee</strong> pays for the lender to evaluate your application, verify income and assets, assess credit risk, and approve or deny the loan. See <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link>.</p>
          <p className="text-gray-700">The fee may appear as a separate line item or be bundled into origination charges. Compare <Link href="/mortgage/what-is-origination-fee" className="text-primary hover:underline font-medium">What Is an Origination Fee</Link> and <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about underwriting fee">
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
          <p className="text-gray-700 text-sm">Underwriting fees vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
