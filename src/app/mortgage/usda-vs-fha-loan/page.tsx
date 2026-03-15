import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'USDA vs FHA Loan | Housentia',
  description:
    'Compare USDA and FHA loans: zero down vs 3.5% down, property location, income limits, and when each makes sense.',
  openGraph: { title: 'USDA vs FHA Loan | Housentia', description: 'Compare USDA and FHA loans.' },
};

const ARTICLE_SLUG = 'usda-vs-fha-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'USDA vs FHA Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/usda-vs-fha-loan';

const FAQ_ITEMS = [
  { question: 'What is the main difference?', answer: 'USDA offers 100% financing (zero down) for eligible rural/suburban areas with income limits. FHA allows 3.5% down with more flexible location and no income limits.' },
  { question: 'Which has lower down payment?', answer: 'USDA has zero down. FHA requires 3.5% minimum (or 10% with lower credit).' },
  { question: 'Where can I use each?', answer: 'USDA is limited to eligible rural and suburban areas. FHA can be used almost anywhere for primary residences.' },
  { question: 'When is USDA better?', answer: 'USDA can be better if the property qualifies, you meet income limits, and you want zero down. FHA is better if the property is not USDA-eligible or you exceed income limits.' },
];

export default function UsdaVsFhaLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'USDA vs FHA Loan', description: 'Compare USDA and FHA: zero down vs 3.5%, location, income limits.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="USDA vs FHA Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>USDA vs FHA</strong>: USDA offers zero down for eligible rural/suburban areas with income limits. FHA allows 3.5% down with no income limits and broader location eligibility. See <Link href="/mortgage/usda-loan" className="text-primary hover:underline font-medium">What Is a USDA Loan</Link>, <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>, and <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about USDA vs FHA">
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
          <p className="text-gray-700 text-sm">Program rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
