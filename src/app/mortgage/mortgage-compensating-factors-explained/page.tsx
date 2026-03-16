import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Compensating Factors Explained | Housentia',
  description:
    'Compensating factors can offset risk. Learn how reserves, credit, and other factors may help with approval.',
  openGraph: { title: 'Mortgage Compensating Factors Explained | Housentia', description: 'Understand mortgage compensating factors.' },
};

const ARTICLE_SLUG = 'mortgage-compensating-factors-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Compensating Factors Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-compensating-factors-explained';

const FAQ_ITEMS = [
  { question: 'What are compensating factors?', answer: 'Positive factors that offset risk: strong reserves, high credit score, low LTV, stable employment, or extra income not used in DTI.' },
  { question: 'Can compensating factors help with high DTI?', answer: 'Yes. Lenders may approve higher DTI when compensating factors are present, such as 18+ months of reserves.' },
  { question: 'What compensating factors do lenders look for?', answer: 'Reserves, credit score above minimum, low LTV, minimal payment shock, stable income, and documented history.' },
  { question: 'Do compensating factors guarantee approval?', answer: 'No. They support approval but do not override program requirements. Each lender evaluates differently.' },
];

export default function MortgageCompensatingFactorsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Compensating Factors Explained', description: 'Learn about mortgage compensating factors.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Compensating Factors Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Mortgage compensating factors</strong> are positive attributes that can offset risk. Examples include strong reserves, high credit score, low LTV, and stable employment. They may help when DTI is high or other risk factors exist. See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>, <Link href="/mortgage/what-is-mortgage-reserve-requirement" className="text-primary hover:underline font-medium">What Is Mortgage Reserve Requirement</Link>, and <Link href="/mortgage/what-is-automated-underwriting" className="text-primary hover:underline font-medium">What Is Automated Underwriting</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about compensating factors">
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
