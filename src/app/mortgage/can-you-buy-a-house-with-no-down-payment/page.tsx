import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Can You Buy a House with No Down Payment? | Housentia',
  description:
    'VA and USDA loans can allow 0% down. Learn eligibility and other options for low or no down payment.',
  openGraph: { title: 'Can You Buy a House with No Down Payment? | Housentia', description: 'Understand no-down-payment options.' },
};

const ARTICLE_SLUG = 'can-you-buy-a-house-with-no-down-payment';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Can You Buy a House with No Down Payment' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/can-you-buy-a-house-with-no-down-payment';

const FAQ_ITEMS = [
  { question: 'Can I buy a house with no down payment?', answer: 'Yes. VA loans often allow 0% down for eligible veterans. USDA loans allow 0% for eligible rural properties. You still need closing costs.' },
  { question: 'What about conventional loans?', answer: 'Conventional typically requires at least 3% down. Some programs help with down payment assistance.' },
  { question: 'Do I still need money for closing?', answer: 'Yes. Even with 0% down, you typically need closing costs (2–5% of loan amount). Seller credits or lender credits may help.' },
  { question: 'What is down payment assistance?', answer: 'Programs (grants, loans, forgivable loans) that help eligible buyers with down payment or closing costs. Often for first-time buyers.' },
];

export default function CanYouBuyAHouseWithNoDownPaymentPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Can You Buy a House with No Down Payment?', description: 'Learn about no-down-payment options.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Can You Buy a House with No Down Payment?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">You <strong>can buy a house with no down payment</strong> using VA or USDA loans if you qualify. VA offers 0% down for eligible veterans; USDA offers 0% for eligible rural properties. You still need funds for closing costs. See <Link href="/mortgage/va-loan" className="text-primary hover:underline font-medium">VA Loan</Link>, <Link href="/mortgage/usda-loan" className="text-primary hover:underline font-medium">USDA Loan</Link>, and <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about no down payment">
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
          <p className="text-gray-700 text-sm">Eligibility varies by program.</p>
        </section>
      </main>
    </div>
  );
}
