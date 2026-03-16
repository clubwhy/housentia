import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Credit Score Affects Mortgage Rates | Housentia',
  description:
    'Higher credit scores often qualify for lower mortgage rates. Learn how lenders use risk-based pricing and credit tiers.',
  openGraph: { title: 'How Credit Score Affects Mortgage Rates | Housentia', description: 'Understand how credit score affects your mortgage rate.' },
};

const ARTICLE_SLUG = 'how-credit-score-affects-mortgage-rates';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'How Credit Score Affects Mortgage Rates' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-credit-score-affects-mortgage-rates';

const FAQ_ITEMS = [
  { question: 'How much does credit score affect mortgage rate?', answer: 'Scores can move rates by 0.25%–1% or more. A 740+ score often gets the best pricing; lower scores may see higher rates.' },
  { question: 'What credit score gets the best mortgage rate?', answer: 'Typically 740 or higher for conventional loans. FHA and VA may have different tiers.' },
  { question: 'Can I get a lower rate by improving my score?', answer: 'Yes. Improving your score before applying can qualify you for better pricing. Even small improvements can help.' },
  { question: 'What is risk-based pricing?', answer: 'Lenders adjust rates and fees based on risk factors. Higher credit scores often mean lower rates and fees.' },
];

export default function HowCreditScoreAffectsMortgageRatesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'How Credit Score Affects Mortgage Rates', description: 'Learn how credit score affects your mortgage rate.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Credit Score Affects Mortgage Rates" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">Your <strong>credit score</strong> is a major factor in the mortgage rate you receive. Lenders use risk-based pricing: higher scores often mean lower rates. A 740+ score typically qualifies for the best conventional rates. See <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>, <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>, and <Link href="/mortgage/apr-vs-interest-rate" className="text-primary hover:underline font-medium">APR vs Interest Rate</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about credit score and rates">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }} className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Rates vary by lender and loan type.</p>
        </section>
      </main>
    </div>
  );
}
