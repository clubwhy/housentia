import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Manual Underwriting? | Housentia',
  description:
    'Manual underwriting is human review of loan applications. Learn when it is used and how it differs from automated underwriting.',
  openGraph: { title: 'What Is Manual Underwriting? | Housentia', description: 'Understand manual underwriting.' },
};

const ARTICLE_SLUG = 'what-is-manual-underwriting';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is Manual Underwriting' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-manual-underwriting';

const FAQ_ITEMS = [
  { question: 'What is manual underwriting?', answer: 'A human underwriter reviews the loan file instead of relying solely on automated systems. Used when DU or LPA refer or for non-conforming loans.' },
  { question: 'When is manual underwriting used?', answer: 'When automated systems refer, for jumbo loans, non-QM loans, or when the loan does not fit standard automated guidelines.' },
  { question: 'Does manual underwriting take longer?', answer: 'Often yes. Human review can add time. Documentation requests may be more extensive.' },
  { question: 'Can manual underwriting approve a referred loan?', answer: 'Yes. Underwriters can approve loans that automated systems refer, with compensating factors and proper documentation.' },
];

export default function WhatIsManualUnderwritingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is Manual Underwriting?', description: 'Learn about manual underwriting.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Manual Underwriting?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Manual underwriting</strong> is human review of a loan application. It is used when automated systems refer, for jumbo or non-QM loans, or when the loan does not fit standard guidelines. See <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">Mortgage Underwriting Explained</Link>, <Link href="/mortgage/what-is-automated-underwriting" className="text-primary hover:underline font-medium">What Is Automated Underwriting</Link>, and <Link href="/mortgage/mortgage-compensating-factors-explained" className="text-primary hover:underline font-medium">Mortgage Compensating Factors Explained</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about manual underwriting">
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
          <p className="text-gray-700 text-sm">Requirements vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
