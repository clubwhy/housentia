import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Qualification Checklist | Housentia',
  description:
    'A checklist of credit, income, assets, and other factors lenders evaluate for mortgage qualification.',
  openGraph: { title: 'Mortgage Qualification Checklist | Housentia', description: 'Use this mortgage qualification checklist.' },
};

const ARTICLE_SLUG = 'mortgage-qualification-checklist';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Qualification Checklist' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-qualification-checklist';

const FAQ_ITEMS = [
  { question: 'What do lenders check for mortgage approval?', answer: 'Credit score, income, employment, DTI, assets, down payment, property, and sometimes reserves. Each factor supports your ability to repay.' },
  { question: 'What documents do I need?', answer: 'ID, pay stubs, W-2s or tax returns, bank statements, and employment verification. Self-employed need additional documentation.' },
  { question: 'What credit score do I need?', answer: 'FHA: 580+ (3.5% down) or 500+ (10% down). Conventional: 620+. VA/USDA: varies by lender.' },
  { question: 'How can I prepare before applying?', answer: 'Check credit, pay down debt, gather documents, and understand your DTI. Use our Loan Qualification Comparison tool.' },
];

export default function MortgageQualificationChecklistPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Qualification Checklist', description: 'A checklist for mortgage qualification.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Qualification Checklist" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>mortgage qualification checklist</strong> helps you prepare. Lenders evaluate credit, income, DTI, assets, down payment, and the property. See <Link href="/mortgage/what-lenders-look-at-mortgage-approval" className="text-primary hover:underline font-medium">What Lenders Look at Mortgage Approval</Link>, <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>, and <Link href="/mortgage/steps-to-get-a-mortgage" className="text-primary hover:underline font-medium">Steps to Get a Mortgage</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about mortgage qualification">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Loan Qualification Comparison', href: '/tools/loan-qualification-comparison' }} className="mb-10" />
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
