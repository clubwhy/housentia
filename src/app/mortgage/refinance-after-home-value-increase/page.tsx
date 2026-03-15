import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance After Home Value Increase | Housentia',
  description:
    'When your home value increases, you may qualify to remove PMI, get a better rate, or do a cash-out refinance. Learn your options.',
  openGraph: { title: 'Refinance After Home Value Increase | Housentia', description: 'Understand refinancing after home value increases.' },
};

const ARTICLE_SLUG = 'refinance-after-home-value-increase';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance After Home Value Increase' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-after-home-value-increase';

const FAQ_ITEMS = [
  { question: 'Why refinance after home value increases?', answer: 'Higher value can lower your LTV, which may let you remove PMI, qualify for a better rate, or access equity through a cash-out refinance.' },
  { question: 'Can I remove PMI with a refinance?', answer: 'Yes. If your new LTV is 80% or below (based on a new appraisal), you can refinance into a loan without PMI.' },
  { question: 'Do I need an appraisal?', answer: 'Usually. The lender will order an appraisal to confirm the new value. See Refinance Appraisal Requirements.' },
  { question: 'When does a cash-out make sense after appreciation?', answer: 'When you need funds and your LTV is low enough to qualify. Cash-out limits vary by program (e.g., conventional often caps at 80% LTV).' },
];

export default function RefinanceAfterHomeValueIncreasePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance After Home Value Increase', description: 'Learn refinance options when your home value has increased.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance After Home Value Increase" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Refinancing after home value increase</strong> can help you remove PMI, get a better rate, or access equity. A new appraisal establishes the value. See <Link href="/mortgage/what-is-mortgage-equity" className="text-primary hover:underline font-medium">What Is Mortgage Equity</Link>, <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>, and <Link href="/mortgage/refinance-appraisal-requirements" className="text-primary hover:underline font-medium">Refinance Appraisal Requirements</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance after value increase">
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
          <p className="text-gray-700 text-sm">Appraisal and LTV requirements vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
