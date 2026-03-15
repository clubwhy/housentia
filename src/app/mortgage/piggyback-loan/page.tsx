import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Piggyback Loan? | Housentia',
  description:
    'A piggyback loan combines a first mortgage with a second mortgage to avoid PMI. Learn how 80-10-10 and 80-15-5 structures work.',
  openGraph: { title: 'What Is a Piggyback Loan? | Housentia', description: 'Understand piggyback loans to avoid PMI.' },
};

const ARTICLE_SLUG = 'piggyback-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Piggyback Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/piggyback-loan';

const FAQ_ITEMS = [
  { question: 'What is a piggyback loan?', answer: 'A piggyback loan combines a first mortgage (e.g., 80% LTV) with a second mortgage (e.g., 10% or 15%) so you can avoid PMI while putting down less than 20%.' },
  { question: 'What is 80-10-10?', answer: '80-10-10 means: 80% first mortgage, 10% second mortgage, 10% down payment. The combined LTV is 90%, so no PMI on the first mortgage.' },
  { question: 'What is 80-15-5?', answer: '80-15-5 means: 80% first mortgage, 15% second mortgage, 5% down payment. The second mortgage covers the gap so you avoid PMI.' },
  { question: 'When does a piggyback make sense?', answer: 'When the cost of the second mortgage (rate + fees) is less than PMI over the time you expect to have it. Compare total costs.' },
];

export default function PiggybackLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Piggyback Loan?', description: 'A piggyback loan combines first and second mortgages to avoid PMI. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Piggyback Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>piggyback loan</strong> combines a first mortgage with a second mortgage so you can put down less than 20% and avoid PMI. Common structures: 80-10-10 (80% first, 10% second, 10% down) or 80-15-5. See <Link href="/mortgage/what-is-a-second-mortgage" className="text-primary hover:underline font-medium">What Is a Second Mortgage</Link>, <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>, and <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about piggyback loan">
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
          <p className="text-gray-700 text-sm">Piggyback availability varies by lender.</p>
        </section>
      </main>
    </div>
  );
}
