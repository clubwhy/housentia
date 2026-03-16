import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Down Payment Requirements Explained | Housentia',
  description:
    'Down payment requirements vary by loan type. Learn conventional, FHA, VA, and USDA down payment rules.',
  openGraph: { title: 'Down Payment Requirements Explained | Housentia', description: 'Understand down payment requirements.' },
};

const ARTICLE_SLUG = 'down-payment-requirements-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Down Payment Requirements Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/down-payment-requirements-explained';

const FAQ_ITEMS = [
  { question: 'What is the minimum down payment for a conventional loan?', answer: 'As low as 3% for qualified borrowers (e.g., first-time buyers, certain programs). PMI typically required below 20%.' },
  { question: 'What is the minimum down payment for an FHA loan?', answer: '3.5% with a 580+ credit score. 10% with 500–579. FHA mortgage insurance is required.' },
  { question: 'Do VA and USDA require a down payment?', answer: 'VA: often 0% for eligible veterans. USDA: 0% for eligible rural properties. Both have funding fees or guarantee fees.' },
  { question: 'How does down payment affect my rate?', answer: 'Larger down payments often mean better rates and no PMI at 20% or more. Lenders view lower LTV as lower risk.' },
];

export default function DownPaymentRequirementsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Down Payment Requirements Explained', description: 'Learn down payment requirements by loan type.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Down Payment Requirements Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Down payment requirements</strong> vary by loan type. Conventional can go as low as 3%; FHA 3.5% (or 10% with lower credit); VA and USDA often 0%. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, <Link href="/mortgage/can-you-buy-a-house-with-no-down-payment" className="text-primary hover:underline font-medium">Can You Buy a House with No Down Payment</Link>, and <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment Explained</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about down payment">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }} className="mb-10" />
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
