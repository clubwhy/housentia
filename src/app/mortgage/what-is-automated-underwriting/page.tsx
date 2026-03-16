import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Automated Underwriting? | Housentia',
  description:
    'Automated underwriting systems evaluate loan applications. Learn how DU and LPA work and what approve/refer means.',
  openGraph: { title: 'What Is Automated Underwriting? | Housentia', description: 'Understand automated underwriting.' },
};

const ARTICLE_SLUG = 'what-is-automated-underwriting';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is Automated Underwriting' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-automated-underwriting';

const FAQ_ITEMS = [
  { question: 'What is automated underwriting?', answer: 'Systems that evaluate loan applications against investor guidelines. Fannie Mae uses Desktop Underwriter (DU); Freddie Mac uses Loan Product Advisor (LPA).' },
  { question: 'What does approve/eligible mean?', answer: 'The system found the loan meets guidelines. Lenders may still require documentation and conditions.' },
  { question: 'What does refer mean?', answer: 'The loan did not get an automated approve. It may go to manual underwriting for further review.' },
  { question: 'Can I get approved with a refer?', answer: 'Yes. Manual underwriting can approve loans that automated systems refer. Additional documentation may be needed.' },
];

export default function WhatIsAutomatedUnderwritingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is Automated Underwriting?', description: 'Learn about automated underwriting systems.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Automated Underwriting?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Automated underwriting</strong> uses software to evaluate loan applications against Fannie Mae and Freddie Mac guidelines. Desktop Underwriter (DU) and Loan Product Advisor (LPA) return approve, refer, or ineligible. See <Link href="/mortgage/what-is-desktop-underwriter" className="text-primary hover:underline font-medium">What Is Desktop Underwriter</Link>, <Link href="/mortgage/what-is-loan-product-advisor" className="text-primary hover:underline font-medium">What Is Loan Product Advisor</Link>, and <Link href="/mortgage/what-is-manual-underwriting" className="text-primary hover:underline font-medium">What Is Manual Underwriting</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about automated underwriting">
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
          <p className="text-gray-700 text-sm">Systems and guidelines change.</p>
        </section>
      </main>
    </div>
  );
}
