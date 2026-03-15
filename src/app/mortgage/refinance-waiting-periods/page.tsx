import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Waiting Periods | Housentia',
  description:
    'Refinance waiting periods vary by program. Learn about FHA, VA, and conventional refinance seasoning requirements.',
  openGraph: { title: 'Refinance Waiting Periods | Housentia', description: 'Understand refinance waiting periods.' },
};

const ARTICLE_SLUG = 'refinance-waiting-periods';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Waiting Periods' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-waiting-periods';

const FAQ_ITEMS = [
  { question: 'What are refinance waiting periods?', answer: 'Waiting periods (seasoning) are rules that require you to have had your current loan for a certain time before refinancing. They vary by program and loan type.' },
  { question: 'What is the FHA streamline waiting period?', answer: 'FHA streamline typically requires at least 6 months of payments and 210 days from the original closing date. Some lenders may have additional requirements.' },
  { question: 'What is the VA IRRRL waiting period?', answer: 'VA IRRRL typically requires at least 6 months of payments. Check current VA guidelines for exact seasoning requirements.' },
  { question: 'Are there conventional waiting periods?', answer: 'Conventional loans may have waiting periods for rate-and-term refinance (e.g., 6 months) or cash-out (e.g., 6–12 months from purchase or last refinance). Investor guidelines vary.' },
];

export default function RefinanceWaitingPeriodsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Waiting Periods', description: 'Learn about refinance waiting periods and seasoning requirements.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Waiting Periods" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Refinance waiting periods</strong> (seasoning) require you to have had your loan for a certain time before refinancing. FHA, VA, and conventional have different rules. See <Link href="/mortgage/fha-streamline-refinance" className="text-primary hover:underline font-medium">FHA Streamline Refinance</Link>, <Link href="/mortgage/va-irrrl-refinance" className="text-primary hover:underline font-medium">VA IRRRL Refinance</Link>, and <Link href="/mortgage/refinance-after-interest-rates-drop" className="text-primary hover:underline font-medium">Refinance After Interest Rates Drop</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance waiting periods">
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
          <p className="text-gray-700 text-sm">Waiting period rules vary by program and lender.</p>
        </section>
      </main>
    </div>
  );
}
