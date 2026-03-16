import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Desktop Underwriter? | Housentia',
  description:
    "Desktop Underwriter (DU) is Fannie Mae's automated underwriting system. Learn how DU evaluates conventional loans.",
  openGraph: { title: 'What Is Desktop Underwriter? | Housentia', description: 'Understand Desktop Underwriter.' },
};

const ARTICLE_SLUG = 'what-is-desktop-underwriter';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is Desktop Underwriter' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-desktop-underwriter';

const FAQ_ITEMS = [
  { question: 'What is Desktop Underwriter?', answer: "Fannie Mae's automated underwriting system. It evaluates conventional loan applications and returns approve, refer, or ineligible." },
  { question: 'What does DU approve mean?', answer: 'The loan meets Fannie Mae guidelines. Lenders still verify documentation and may have conditions.' },
  { question: 'How is DU different from LPA?', answer: 'DU is for Fannie Mae; Loan Product Advisor (LPA) is for Freddie Mac. Both evaluate conventional loans but use different guidelines.' },
  { question: 'Can I get a loan if DU refers?', answer: 'Yes. The loan may go to manual underwriting. Lenders can still approve with additional review and documentation.' },
];

export default function WhatIsDesktopUnderwriterPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is Desktop Underwriter?', description: 'Learn about Fannie Mae Desktop Underwriter.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Desktop Underwriter?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Desktop Underwriter (DU)</strong> is Fannie Mae's automated underwriting system for conventional loans. Lenders submit application data and DU returns a decision. See <Link href="/mortgage/what-is-automated-underwriting" className="text-primary hover:underline font-medium">What Is Automated Underwriting</Link>, <Link href="/mortgage/what-is-loan-product-advisor" className="text-primary hover:underline font-medium">What Is Loan Product Advisor</Link>, and <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about Desktop Underwriter">
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
