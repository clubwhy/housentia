import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Timeline Explained | Housentia',
  description:
    'A typical refinance takes 30–45 days. Learn the timeline: application, underwriting, appraisal, and closing.',
  openGraph: { title: 'Refinance Timeline Explained | Housentia', description: 'Understand the refinance timeline.' },
};

const ARTICLE_SLUG = 'refinance-timeline-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Timeline Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-timeline-explained';

const FAQ_ITEMS = [
  { question: 'How long does a refinance take?', answer: 'Typically 30–45 days from application to closing. Streamline programs (FHA, VA) may be faster—sometimes 2–3 weeks.' },
  { question: 'What are the main steps?', answer: 'Apply, get Loan Estimate, lock rate, submit documents, underwriting, appraisal (if required), clear conditions, schedule closing, sign, and funding.' },
  { question: 'What can delay a refinance?', answer: 'Missing documents, appraisal issues, title problems, or high volume at the lender. Respond quickly to requests to avoid delays.' },
  { question: 'Can streamline refinances be faster?', answer: 'Yes. FHA streamline and VA IRRRL often skip full underwriting and appraisal, which can shorten the timeline significantly.' },
];

export default function RefinanceTimelineExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Timeline Explained', description: 'Learn the typical refinance timeline and what affects it.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Timeline Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>refinance timeline</strong> typically runs 30–45 days. Streamline programs can be faster. See <Link href="/mortgage/how-mortgage-refinancing-works" className="text-primary hover:underline font-medium">How Mortgage Refinancing Works</Link>, <Link href="/mortgage/mortgage-loan-timeline" className="text-primary hover:underline font-medium">Mortgage Loan Timeline</Link>, and <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance timeline">
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
          <p className="text-gray-700 text-sm">Timelines vary by lender and loan type.</p>
        </section>
      </main>
    </div>
  );
}
