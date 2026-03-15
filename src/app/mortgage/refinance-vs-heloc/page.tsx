import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance vs HELOC | Housentia',
  description:
    'Compare refinancing and a HELOC when accessing home equity. Learn when each makes sense for rate reduction vs. flexible borrowing.',
  openGraph: { title: 'Refinance vs HELOC | Housentia', description: 'Compare refinance and HELOC.' },
};

const ARTICLE_SLUG = 'refinance-vs-heloc';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance vs HELOC' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-vs-heloc';

const FAQ_ITEMS = [
  { question: 'What is the main difference?', answer: 'Refinance replaces your first mortgage or adds a new one. A HELOC is a revolving line of credit—you borrow as needed and pay interest only on what you use.' },
  { question: 'When is refinance better?', answer: 'When you want to lower your rate, lock in a fixed payment, or need a large lump sum. Refinance gives you a new first mortgage or cash-out.' },
  { question: 'When is a HELOC better?', answer: 'When you need flexible access to funds over time (e.g., ongoing projects), or when you want to preserve your current first mortgage rate.' },
  { question: 'Do HELOCs have variable rates?', answer: 'Most HELOCs have variable rates tied to an index. Refinances can be fixed or adjustable. Consider rate risk when choosing.' },
];

export default function RefinanceVsHelocPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance vs HELOC', description: 'Compare refinance and HELOC when accessing equity.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance vs HELOC" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Refinance vs HELOC</strong>: Refinance replaces or modifies your first mortgage. A HELOC is a revolving line of credit. Use refinance to lower your rate or get a lump sum; use a HELOC for flexible borrowing. See <Link href="/mortgage/heloc" className="text-primary hover:underline font-medium">HELOC Overview</Link>, <Link href="/mortgage/refinance-vs-home-equity-loan" className="text-primary hover:underline font-medium">Refinance vs Home Equity Loan</Link>, and <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is a Cash Out Refinance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance vs HELOC">
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
          <p className="text-gray-700 text-sm">Compare offers for your situation.</p>
        </section>
      </main>
    </div>
  );
}
