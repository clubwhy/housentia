import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who Pays Closing Costs? | Housentia',
  description:
    'Buyers typically pay most closing costs, but sellers may contribute through concessions. Learn how closing costs are split and what\'s negotiable.',
  openGraph: { title: 'Who Pays Closing Costs? | Housentia', description: 'Understand who typically pays closing costs.' },
};

const ARTICLE_SLUG = 'who-pays-closing-costs';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Who Pays Closing Costs?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/who-pays-closing-costs';

const FAQ_ITEMS = [
  { question: 'Who typically pays closing costs?', answer: 'Buyers usually pay most closing costs—lender fees, appraisal, title, etc. Sellers may pay some costs (e.g., transfer taxes, owner\'s title policy in some states) or contribute via seller concessions.' },
  { question: 'What are seller concessions?', answer: 'Seller concessions are when the seller agrees to pay a portion of the buyer\'s closing costs. Limits apply based on loan type and down payment (e.g., FHA typically allows up to 6% of the sale price).' },
  { question: 'Can the seller pay all closing costs?', answer: 'No. Concession limits cap how much the seller can contribute. Excess seller credits may need to be applied to the purchase price or other allowed uses.' },
  { question: 'How much can the seller contribute?', answer: 'Conventional loans typically limit seller contributions to 3%–9% depending on down payment. FHA allows up to 6%. VA may allow more. Check your loan program.' },
];

export default function WhoPaysClosingCostsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Who Pays Closing Costs?', description: 'Buyers typically pay most closing costs; sellers may contribute. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Who Pays Closing Costs?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Who pays closing costs</strong> is negotiable. Buyers typically pay most costs—lender fees, appraisal, title, etc. Sellers may pay some costs (e.g., transfer taxes, owner&apos;s title in some states) or contribute via seller concessions. See <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link> and <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about who pays closing costs">
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
