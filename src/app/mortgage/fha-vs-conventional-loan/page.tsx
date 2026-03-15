import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FHA vs Conventional Loan | Housentia',
  description:
    'Compare FHA and conventional loans: down payment, credit requirements, mortgage insurance, and when each makes sense.',
  openGraph: { title: 'FHA vs Conventional Loan | Housentia', description: 'Compare FHA and conventional loans.' },
};

const ARTICLE_SLUG = 'fha-vs-conventional-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'FHA vs Conventional Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/fha-vs-conventional-loan';

const FAQ_ITEMS = [
  { question: 'What is the main difference?', answer: 'FHA is government-backed with lower down payment (3.5%) and more flexible credit; conventional is not government-backed, often requires 3%–20% down, and PMI can be removed at 80% LTV.' },
  { question: 'Which has lower down payment?', answer: 'FHA allows 3.5% down with a 580+ credit score. Conventional can go as low as 3% for qualified buyers but often requires stronger credit.' },
  { question: 'Which has cheaper mortgage insurance?', answer: 'Conventional PMI can be removed at 80% LTV. FHA MIP often lasts for the life of the loan on high-LTV loans, which can make FHA more expensive long-term.' },
  { question: 'When is FHA better?', answer: 'FHA can be better for first-time buyers with lower credit or limited down payment. Conventional may be better if you have strong credit and can put 5%+ down.' },
];

export default function FhaVsConventionalLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'FHA vs Conventional Loan', description: 'Compare FHA and conventional: down payment, credit, MI.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="FHA vs Conventional Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>FHA vs conventional</strong> is a common comparison. FHA offers lower down payment and more flexible credit but often has mortgage insurance for the life of the loan. Conventional may require more down but allows PMI removal at 80% LTV. See <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>, <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link>, and <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about FHA vs conventional">
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
          <p className="text-gray-700 text-sm">Program rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
