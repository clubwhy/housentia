import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Temporary Rate Buydown Explained | Housentia',
  description:
    'A temporary rate buydown (e.g., 2-1 buydown) lowers your rate for the first year or two. Learn how it works and when it makes sense.',
  openGraph: { title: 'Temporary Rate Buydown Explained | Housentia', description: 'Understand temporary rate buydowns.' },
};

const ARTICLE_SLUG = 'temporary-rate-buydown-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Temporary Rate Buydown Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/temporary-rate-buydown-explained';

const FAQ_ITEMS = [
  { question: 'What is a temporary rate buydown?', answer: 'A temporary buydown lowers your interest rate for the first year or two, then it steps up to the full note rate. The most common is the 2-1 buydown: 2% below note rate in year 1, 1% below in year 2, then full rate.' },
  { question: 'How does a 2-1 buydown work?', answer: 'You (or the seller) fund an escrow account at closing. The lender uses it to subsidize your payments: year 1 at 2% below note rate, year 2 at 1% below, year 3+ at full rate.' },
  { question: 'Who typically pays for a temporary buydown?', answer: 'The seller or builder often pays as a concession. Buyers can also pay. The cost is the present value of the payment reduction over the buydown period.' },
  { question: 'When does a temporary buydown make sense?', answer: 'It can help when the buyer expects income to rise (e.g., new graduate, commission-based) or when the seller wants to offer a concession. The buyer must qualify at the full note rate.' },
];

export default function TemporaryRateBuydownExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Temporary Rate Buydown Explained', description: 'A temporary buydown lowers your rate for the first year or two. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Temporary Rate Buydown Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>temporary rate buydown</strong> lowers your interest rate for the first year or two, then steps up to the full note rate. The most common is the <strong>2-1 buydown</strong>: 2% below the note rate in year 1, 1% below in year 2, then the full rate. See <Link href="/mortgage/mortgage-rate-buydown-explained" className="text-primary hover:underline font-medium">Mortgage Rate Buydown Explained</Link> and <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about temporary rate buydown">
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
          <p className="text-gray-700 text-sm">Buydown availability varies by lender.</p>
        </section>
      </main>
    </div>
  );
}
