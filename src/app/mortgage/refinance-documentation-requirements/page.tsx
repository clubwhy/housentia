import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Documentation Requirements | Housentia',
  description:
    'Refinance documentation typically includes income, assets, and identification. Streamline programs may require less. Learn what to prepare.',
  openGraph: { title: 'Refinance Documentation Requirements | Housentia', description: 'Understand refinance documentation.' },
};

const ARTICLE_SLUG = 'refinance-documentation-requirements';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Documentation Requirements' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-documentation-requirements';

const FAQ_ITEMS = [
  { question: 'What documents do I need to refinance?', answer: 'Typically: pay stubs, W-2s, tax returns, bank statements, ID, and your current mortgage statement. Requirements vary by loan type and lender.' },
  { question: 'Do streamline refinances need less documentation?', answer: 'Yes. FHA streamline and VA IRRRL often require minimal documentation—sometimes just proof of on-time payments and a few items.' },
  { question: 'Why does the lender need my mortgage statement?', answer: 'To verify your current balance, payment history, and that the loan is in good standing. This helps determine payoff and eligibility.' },
  { question: 'What if I am self-employed?', answer: 'You may need business tax returns, profit-and-loss statements, and other documentation. See Self-Employed Borrower for more.' },
];

export default function RefinanceDocumentationRequirementsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Documentation Requirements', description: 'Learn what documents you need for a refinance.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Documentation Requirements" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Refinance documentation</strong> typically includes income, assets, and ID. Streamline programs require less. See <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>, <Link href="/mortgage/fha-streamline-refinance" className="text-primary hover:underline font-medium">FHA Streamline Refinance</Link>, and <Link href="/mortgage/va-irrrl-refinance" className="text-primary hover:underline font-medium">VA IRRRL Refinance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance documentation">
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
          <p className="text-gray-700 text-sm">Documentation requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
