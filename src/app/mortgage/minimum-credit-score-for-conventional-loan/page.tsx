import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minimum Credit Score for Conventional Loan | Housentia',
  description:
    'Conventional loans typically require 620 or higher. Learn minimum credit score requirements and how scores affect rates.',
  openGraph: { title: 'Minimum Credit Score for Conventional Loan | Housentia', description: 'Understand conventional loan credit score requirements.' },
};

const ARTICLE_SLUG = 'minimum-credit-score-for-conventional-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Minimum Credit Score for Conventional Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/minimum-credit-score-for-conventional-loan';

const FAQ_ITEMS = [
  { question: 'What is the minimum credit score for a conventional loan?', answer: 'Fannie Mae and Freddie Mac allow 620 in many cases. Some programs may require 640 or higher. Lenders can set overlays.' },
  { question: 'What score do I need for the best conventional rates?', answer: '740+ often qualifies for the best pricing. 720–739 is also strong. Below 720 may see higher rates.' },
  { question: 'Can I get a conventional loan with 620 credit?', answer: 'Yes, in many cases. DTI, down payment, and reserves matter. Some programs have stricter requirements.' },
  { question: 'How does credit score affect PMI on conventional loans?', answer: 'Lower scores may result in higher PMI premiums. Lenders use risk-based pricing.' },
];

export default function MinimumCreditScoreForConventionalLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Minimum Credit Score for Conventional Loan', description: 'Learn conventional loan credit score requirements.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Minimum Credit Score for Conventional Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>minimum credit score for a conventional loan</strong> is typically 620 or higher. Fannie Mae and Freddie Mac allow 620 in many programs; higher scores often qualify for better rates. See <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan</Link>, <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>, and <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about conventional credit score">
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
