import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Construction Loan? | Housentia',
  description:
    'A construction loan finances building a new home. Learn how draw schedules work, one-time vs. two-time close, and typical requirements.',
  openGraph: { title: 'What Is a Construction Loan? | Housentia', description: 'Understand construction loans for new home builds.' },
};

const ARTICLE_SLUG = 'construction-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Construction Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/construction-loan';

const FAQ_ITEMS = [
  { question: 'What is a construction loan?', answer: 'A construction loan finances building a new home. Funds are typically disbursed in draws as construction milestones are met. The loan may convert to a permanent mortgage or require a separate closing.' },
  { question: 'How do construction draws work?', answer: 'The lender releases funds in stages (draws) as construction progresses—e.g., foundation, framing, rough-in, final. An inspector usually verifies each stage before the next draw.' },
  { question: 'What is one-time vs. two-time close?', answer: 'A one-time close (construction-to-permanent) combines construction and permanent financing in one loan. A two-time close has separate construction and permanent loans.' },
  { question: 'What are typical requirements?', answer: 'Lenders typically require a construction contract, detailed budget, approved plans, and often a larger down payment. Credit and income requirements may be stricter than for a purchase.' },
];

export default function ConstructionLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Construction Loan?', description: 'A construction loan finances building a new home. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Construction Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>construction loan</strong> finances building a new home. Funds are disbursed in draws as construction progresses. The loan may convert to a permanent mortgage (one-time close) or require a separate closing (two-time close). See <Link href="/mortgage/renovation-loan" className="text-primary hover:underline font-medium">What Is a Renovation Loan</Link>, <Link href="/mortgage/fha-203k-loan" className="text-primary hover:underline font-medium">What Is an FHA 203k Loan</Link>, and <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about construction loan">
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
          <p className="text-gray-700 text-sm">Construction loan terms vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
