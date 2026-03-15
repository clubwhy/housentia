import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cash Out vs Rate and Term Refinance | Housentia',
  description:
    'Compare cash-out and rate-and-term refinancing. Learn when each makes sense and how they differ in underwriting and cost.',
  openGraph: { title: 'Cash Out vs Rate and Term Refinance | Housentia', description: 'Compare cash-out and rate-and-term refinancing.' },
};

const ARTICLE_SLUG = 'cash-out-vs-rate-and-term-refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Cash Out vs Rate and Term Refinance' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/cash-out-vs-rate-and-term-refinance';

const FAQ_ITEMS = [
  { question: 'What is the main difference?', answer: 'Rate and term: you refinance for the payoff amount (or less). Cash-out: you borrow more than you owe and receive the difference in cash.' },
  { question: 'When is cash-out used?', answer: 'When you need funds for home improvements, debt consolidation, or other expenses. You tap home equity.' },
  { question: 'Which has stricter underwriting?', answer: 'Cash-out often has stricter LTV limits, credit requirements, and may have higher rates. Rate and term can be simpler, especially for streamline programs.' },
  { question: 'Can I do a small cash-out?', answer: 'Yes. Some borrowers take a small amount of cash out (e.g., to cover closing costs) while primarily doing a rate-and-term refinance.' },
];

export default function CashOutVsRateAndTermRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Cash Out vs Rate and Term Refinance', description: 'Compare cash-out and rate-and-term refinancing.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Cash Out vs Rate and Term Refinance" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Cash-out vs rate and term</strong>: Rate and term changes your rate or term without taking cash. Cash-out lets you borrow more than you owe and receive the difference. See <Link href="/mortgage/what-is-a-rate-and-term-refinance" className="text-primary hover:underline font-medium">What Is a Rate and Term Refinance</Link>, <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is a Cash Out Refinance</Link>, and <Link href="/mortgage/refinance-vs-heloc" className="text-primary hover:underline font-medium">Refinance vs HELOC</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about cash out vs rate and term">
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
          <p className="text-gray-700 text-sm">Compare offers for your situation.</p>
        </section>
      </main>
    </div>
  );
}
