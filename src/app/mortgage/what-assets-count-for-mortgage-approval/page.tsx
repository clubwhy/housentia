import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Assets Count for Mortgage Approval? | Housentia',
  description:
    'Lenders verify assets for down payment, closing costs, and reserves. Learn what assets count and how they are documented.',
  openGraph: { title: 'What Assets Count for Mortgage Approval? | Housentia', description: 'Understand which assets count for mortgage approval.' },
};

const ARTICLE_SLUG = 'what-assets-count-for-mortgage-approval';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Assets Count for Mortgage Approval' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-assets-count-for-mortgage-approval';

const FAQ_ITEMS = [
  { question: 'What assets count for a mortgage?', answer: 'Checking, savings, money market, stocks, bonds, retirement accounts (often partial), and other liquid assets. Gifts with proper documentation may count for down payment.' },
  { question: 'Do retirement accounts count?', answer: 'Yes, often at 60–70% of vested balance. Some programs require proof you can access funds.' },
  { question: 'Do gift funds count?', answer: 'Yes, for down payment and closing costs if documented with a gift letter and proof of transfer. Lenders have specific rules.' },
  { question: 'What assets do not count?', answer: 'Borrowed funds (unless from a 401k loan with repayment plan), unsecured loans, and assets that cannot be verified.' },
];

export default function WhatAssetsCountForMortgageApprovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Assets Count for Mortgage Approval?', description: 'Learn which assets count for mortgage approval.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Assets Count for Mortgage Approval?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Assets that count for mortgage approval</strong> include cash, savings, investments, and retirement accounts. Lenders verify assets for down payment, closing costs, and reserves. See <Link href="/mortgage/mortgage-asset-verification" className="text-primary hover:underline font-medium">Mortgage Asset Verification</Link>, <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment Explained</Link>, and <Link href="/mortgage/what-is-mortgage-reserve-requirement" className="text-primary hover:underline font-medium">What Is Mortgage Reserve Requirement</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about mortgage assets">
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
