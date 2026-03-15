import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Streamline Refinance Explained | Housentia',
  description:
    'Streamline refinances simplify the process with reduced documentation and sometimes no appraisal. Learn about FHA and VA streamline programs.',
  openGraph: { title: 'Streamline Refinance Explained | Housentia', description: 'Understand streamline refinancing.' },
};

const ARTICLE_SLUG = 'streamline-refinance-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Streamline Refinance Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/streamline-refinance-explained';

const FAQ_ITEMS = [
  { question: 'What is a streamline refinance?', answer: 'A streamline refinance simplifies the process with reduced documentation, sometimes no appraisal, and faster underwriting. FHA and VA offer streamline programs.' },
  { question: 'Who qualifies for streamline?', answer: 'You must have an existing FHA or VA loan and meet payment history requirements. FHA streamline and VA IRRRL have specific eligibility rules.' },
  { question: 'Is there a net tangible benefit?', answer: 'FHA and VA require a net tangible benefit (e.g., lower payment, lower rate, or shorter term). The lender must document that the refinance helps the borrower.' },
  { question: 'Can I get cash out with a streamline?', answer: 'FHA streamline and VA IRRRL are typically rate-and-term only—no cash out. VA IRRRL has limited cash-out options in some cases.' },
];

export default function StreamlineRefinanceExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Streamline Refinance Explained', description: 'Learn about streamline refinancing and its benefits.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Streamline Refinance Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>streamline refinance</strong> simplifies the process with reduced documentation and sometimes no appraisal. FHA and VA offer streamline programs. See <Link href="/mortgage/fha-streamline-refinance" className="text-primary hover:underline font-medium">FHA Streamline Refinance</Link>, <Link href="/mortgage/va-irrrl-refinance" className="text-primary hover:underline font-medium">VA IRRRL Refinance</Link>, and <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is Refinance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about streamline refinance">
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
          <p className="text-gray-700 text-sm">Streamline eligibility varies by program.</p>
        </section>
      </main>
    </div>
  );
}
