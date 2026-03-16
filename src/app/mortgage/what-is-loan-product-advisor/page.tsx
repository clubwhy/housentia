import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Loan Product Advisor? | Housentia',
  description:
    "Loan Product Advisor (LPA) is Freddie Mac's automated underwriting system. Learn how LPA evaluates conventional loans.",
  openGraph: { title: 'What Is Loan Product Advisor? | Housentia', description: 'Understand Loan Product Advisor.' },
};

const ARTICLE_SLUG = 'what-is-loan-product-advisor';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is Loan Product Advisor' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-loan-product-advisor';

const FAQ_ITEMS = [
  { question: 'What is Loan Product Advisor?', answer: "Freddie Mac's automated underwriting system. It evaluates conventional loan applications and returns approve, refer, or ineligible." },
  { question: 'What does LPA approve mean?', answer: 'The loan meets Freddie Mac guidelines. Lenders still verify documentation and may have conditions.' },
  { question: 'How is LPA different from DU?', answer: 'LPA is for Freddie Mac; Desktop Underwriter (DU) is for Fannie Mae. Both evaluate conventional loans but use different guidelines.' },
  { question: 'Do lenders use both DU and LPA?', answer: 'Yes. Lenders may run both to find the best fit. They sell loans to either Fannie or Freddie.' },
];

export default function WhatIsLoanProductAdvisorPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is Loan Product Advisor?', description: 'Learn about Freddie Mac Loan Product Advisor.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Loan Product Advisor?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Loan Product Advisor (LPA)</strong> is Freddie Mac's automated underwriting system for conventional loans. Lenders submit application data and LPA returns a decision. See <Link href="/mortgage/what-is-automated-underwriting" className="text-primary hover:underline font-medium">What Is Automated Underwriting</Link>, <Link href="/mortgage/what-is-desktop-underwriter" className="text-primary hover:underline font-medium">What Is Desktop Underwriter</Link>, and <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about Loan Product Advisor">
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
          <p className="text-gray-700 text-sm">Guidelines change.</p>
        </section>
      </main>
    </div>
  );
}
