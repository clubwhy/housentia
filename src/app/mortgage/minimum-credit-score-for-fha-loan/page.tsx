import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minimum Credit Score for FHA Loan | Housentia',
  description:
    'FHA loans may accept credit scores as low as 500 with 10% down or 580 for 3.5% down. Learn FHA credit requirements and lender overlays.',
  openGraph: { title: 'Minimum Credit Score for FHA Loan | Housentia', description: 'Understand FHA credit score requirements.' },
};

const ARTICLE_SLUG = 'minimum-credit-score-for-fha-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Minimum Credit Score for FHA Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/minimum-credit-score-for-fha-loan';

const FAQ_ITEMS = [
  { question: 'What is the minimum credit score for an FHA loan?', answer: 'FHA allows 580+ for 3.5% down or 500–579 with 10% down. Many lenders set higher overlays (e.g., 620).' },
  { question: 'Can I get an FHA loan with a 500 credit score?', answer: 'FHA permits it with 10% down, but lenders may require higher scores. Shop around and consider improving your score.' },
  { question: 'Do lenders require higher scores than FHA?', answer: 'Yes. Lender overlays often require 620 or higher even for FHA. Requirements vary by lender.' },
  { question: 'How does credit score affect FHA mortgage insurance?', answer: 'Lower scores may result in higher MIP premiums. FHA uses risk-based pricing for some factors.' },
];

export default function MinimumCreditScoreForFHALoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Minimum Credit Score for FHA Loan', description: 'Learn FHA credit score requirements and lender overlays.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Minimum Credit Score for FHA Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>minimum credit score for an FHA loan</strong> varies by FHA guidelines and lender overlays. FHA allows 580+ for 3.5% down or 500–579 with 10% down. Many lenders require higher scores. See <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">FHA Loan</Link>, <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>, and <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about FHA credit score">
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
          <p className="text-gray-700 text-sm">FHA and lender requirements vary.</p>
        </section>
      </main>
    </div>
  );
}
