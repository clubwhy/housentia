import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Rate Buydown Explained | Housentia',
  description:
    'A rate buydown lowers your interest rate for a period or the life of the loan. Learn about permanent and temporary buydowns.',
  openGraph: { title: 'Mortgage Rate Buydown Explained | Housentia', description: 'Understand mortgage rate buydowns.' },
};

const ARTICLE_SLUG = 'mortgage-rate-buydown-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Rate Buydown Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-rate-buydown-explained';

const FAQ_ITEMS = [
  { question: 'What is a rate buydown?', answer: 'A rate buydown is when you (or the seller) pay upfront to lower your interest rate. It can be permanent (for the life of the loan, like discount points) or temporary (for the first few years).' },
  { question: 'What is a permanent buydown?', answer: 'A permanent buydown (discount points) lowers your rate for the entire loan term. You pay points at closing in exchange for a lower rate.' },
  { question: 'What is a temporary buydown?', answer: 'A temporary buydown (e.g., 2-1 buydown) lowers your rate for the first year or two, then it steps up to the note rate. Often used when the buyer expects income to rise.' },
  { question: 'Who pays for a buydown?', answer: 'The buyer, seller, or builder can pay. Seller-paid buydowns are sometimes used as a concession to help the buyer qualify or afford the payment.' },
];

export default function MortgageRateBuydownExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Rate Buydown Explained', description: 'A rate buydown lowers your rate. Learn about permanent and temporary buydowns.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Rate Buydown Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>rate buydown</strong> lowers your interest rate by paying upfront. A <strong>permanent buydown</strong> (discount points) lowers the rate for the life of the loan. A <strong>temporary buydown</strong> lowers it for the first year or two, then steps up. See <Link href="/mortgage/temporary-rate-buydown-explained" className="text-primary hover:underline font-medium">Temporary Rate Buydown Explained</Link>, <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>, and <Link href="/mortgage/mortgage-points-vs-rate-trade-off" className="text-primary hover:underline font-medium">Mortgage Points vs Rate Trade Off</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about rate buydown">
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
