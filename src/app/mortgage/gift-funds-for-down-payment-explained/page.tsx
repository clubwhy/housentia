import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gift Funds for Down Payment Explained | Housentia',
  description:
    'Gift funds from family can help with down payment and closing costs. Learn gift letter requirements and donor rules.',
  openGraph: { title: 'Gift Funds for Down Payment Explained | Housentia', description: 'Understand gift funds for down payment.' },
};

const ARTICLE_SLUG = 'gift-funds-for-down-payment-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Gift Funds for Down Payment Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/gift-funds-for-down-payment-explained';

const FAQ_ITEMS = [
  { question: 'Who can gift money for a down payment?', answer: 'Family members (spouse, parent, sibling, grandparent, etc.) for most programs. Some programs allow gifts from employers or other sources.' },
  { question: 'What is a gift letter?', answer: 'A signed letter stating the funds are a gift with no repayment expected. Lenders require it and may require proof of transfer.' },
  { question: 'What part of the down payment can be a gift?', answer: 'Conventional: often 100% for primary residence with 20%+ down. FHA/VA: often 100% from eligible donors. Investment property rules differ.' },
  { question: 'Are gift funds taxable?', answer: 'Gift tax may apply to the donor above annual exclusion amounts. Borrowers typically do not owe tax on receiving a gift.' },
];

export default function GiftFundsForDownPaymentExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Gift Funds for Down Payment Explained', description: 'Learn about gift funds for down payment.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Gift Funds for Down Payment Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Gift funds for down payment</strong> allow family members to help with the purchase. Lenders require a gift letter and proof of transfer. Rules vary by loan type. See <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link>, <Link href="/mortgage/what-assets-count-for-mortgage-approval" className="text-primary hover:underline font-medium">What Assets Count for Mortgage Approval</Link>, and <Link href="/mortgage/first-time-home-buyer" className="text-primary hover:underline font-medium">First Time Home Buyer</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about gift funds">
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
          <p className="text-gray-700 text-sm">Requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
