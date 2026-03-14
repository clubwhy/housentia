import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seller Paid Closing Costs Explained | Housentia',
  description:
    'Seller concessions allow the seller to pay part of the buyer\'s closing costs. Learn the limits, how they work, and when they make sense.',
  openGraph: { title: 'Seller Paid Closing Costs Explained | Housentia', description: 'Understand seller-paid closing costs and concessions.' },
};

const ARTICLE_SLUG = 'seller-paid-closing-costs-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Seller Paid Closing Costs Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/seller-paid-closing-costs-explained';

const FAQ_ITEMS = [
  { question: 'What are seller-paid closing costs?', answer: 'Seller-paid closing costs (seller concessions) are when the seller agrees to pay a portion of the buyer\'s closing costs. The amount is typically negotiated in the purchase agreement and limited by loan program rules.' },
  { question: 'How much can the seller pay?', answer: 'FHA typically allows up to 6% of the sale price. Conventional limits vary by down payment (often 3%–9%). VA may allow more. The lender must verify the sale price supports the concession.' },
  { question: 'Do seller concessions affect the sale price?', answer: 'Seller concessions reduce the buyer\'s cash to close but do not change the sale price. The appraised value must support the purchase price.' },
  { question: 'When do sellers agree to pay closing costs?', answer: 'Sellers may agree in slower markets, when the buyer is short on cash, or when it helps close the deal. It can be a negotiating point.' },
];

export default function SellerPaidClosingCostsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Seller Paid Closing Costs Explained', description: 'Seller concessions allow the seller to pay part of the buyer\'s closing costs. Learn the limits.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Seller Paid Closing Costs Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Seller-paid closing costs</strong> (seller concessions) are when the seller agrees to pay a portion of the buyer&apos;s closing costs. The amount is negotiated in the purchase agreement and limited by loan program rules. See <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link> and <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about seller paid closing costs">
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
          <p className="text-gray-700 text-sm">Concession limits vary by loan program.</p>
        </section>
      </main>
    </div>
  );
}
