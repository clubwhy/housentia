import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Mortgage Refinancing Works | Housentia',
  description:
    'Learn how mortgage refinancing works: application, underwriting, closing, and payoff of your old loan. Understand the steps from start to finish.',
  openGraph: { title: 'How Mortgage Refinancing Works | Housentia', description: 'Understand the refinance process.' },
};

const ARTICLE_SLUG = 'how-mortgage-refinancing-works';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'How Mortgage Refinancing Works' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-mortgage-refinancing-works';

const FAQ_ITEMS = [
  { question: 'What are the steps to refinance?', answer: 'Apply with a lender, get a Loan Estimate, lock your rate, complete underwriting, satisfy conditions, schedule closing, sign documents, and the new lender pays off your old loan.' },
  { question: 'How long does refinancing take?', answer: 'Typically 30–45 days, similar to a purchase. See Refinance Timeline Explained for details.' },
  { question: 'Do I need an appraisal to refinance?', answer: 'Often yes, unless you qualify for a waiver (e.g., streamline, appraisal waiver). See Refinance Appraisal Requirements.' },
  { question: 'What happens to my old mortgage?', answer: 'The new lender pays it off at closing. Your old loan is satisfied and you begin making payments on the new loan.' },
];

export default function HowMortgageRefinancingWorksPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'How Mortgage Refinancing Works', description: 'Learn the refinance process from application to payoff.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Mortgage Refinancing Works" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Mortgage refinancing</strong> replaces your current loan with a new one. The process is similar to a purchase: apply, get a Loan Estimate, complete underwriting, close, and the new lender pays off your old loan. See <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is Refinance</Link>, <Link href="/mortgage/refinance-timeline-explained" className="text-primary hover:underline font-medium">Refinance Timeline Explained</Link>, and <Link href="/mortgage/refinance-documentation-requirements" className="text-primary hover:underline font-medium">Refinance Documentation Requirements</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about how refinancing works">
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
          <p className="text-gray-700 text-sm">Refinance processes vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
