import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '15 vs 30 Year Mortgage | Housentia',
  description:
    'Compare 15-year and 30-year mortgages: monthly payment, total interest, and when each makes sense.',
  openGraph: { title: '15 vs 30 Year Mortgage | Housentia', description: 'Compare 15-year and 30-year mortgages.' },
};

const ARTICLE_SLUG = '15-vs-30-year-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: '15 vs 30 Year Mortgage' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/15-vs-30-year-mortgage';

const FAQ_ITEMS = [
  { question: 'What is the main difference?', answer: 'A 15-year loan has higher monthly payments but pays off faster and costs less in total interest. A 30-year loan has lower monthly payments but more total interest over time.' },
  { question: 'Which has lower monthly payment?', answer: 'The 30-year has a lower monthly payment because you spread the loan over twice as long. The 15-year payment is roughly 25%–35% higher for the same loan amount.' },
  { question: 'Which saves more interest?', answer: 'The 15-year saves significant interest because you pay off the loan faster. You also build equity quicker.' },
  { question: 'When does a 15-year make sense?', answer: 'A 15-year can make sense if you can afford the higher payment and want to pay off the loan sooner. A 30-year offers flexibility and lower payments if cash flow is a concern.' },
];

export default function FifteenVsThirtyYearMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: '15 vs 30 Year Mortgage', description: 'Compare 15-year and 30-year: payment, interest, and when each makes sense.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="15 vs 30 Year Mortgage" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>15 vs 30 year</strong> is a common choice. The 15-year has higher monthly payments but pays off faster and costs less in total interest. The 30-year has lower payments and more flexibility. See <Link href="/mortgage/what-is-loan-term" className="text-primary hover:underline font-medium">What Is a Loan Term</Link>, <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>, and <Link href="/mortgage/what-is-a-fixed-rate-mortgage" className="text-primary hover:underline font-medium">What Is a Fixed Rate Mortgage</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about 15 vs 30 year">
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
          <p className="text-gray-700 text-sm">Use a mortgage calculator to compare scenarios.</p>
        </section>
      </main>
    </div>
  );
}
