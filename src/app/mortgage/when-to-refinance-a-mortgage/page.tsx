import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'When to Refinance a Mortgage | Housentia',
  description:
    'Learn when refinancing makes sense: lower rates, shorter term, cash-out needs, or removing PMI. Compare break-even and total cost.',
  openGraph: { title: 'When to Refinance a Mortgage | Housentia', description: 'Understand when refinancing makes sense.' },
};

const ARTICLE_SLUG = 'when-to-refinance-a-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'When to Refinance a Mortgage' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/when-to-refinance-a-mortgage';

const FAQ_ITEMS = [
  { question: 'When does refinancing make sense?', answer: 'When you can lower your rate enough to recoup closing costs, want to shorten your term, need cash out, or want to remove PMI. Calculate your break-even point.' },
  { question: 'What is the refinance rule of thumb?', answer: 'A common rule is to refinance when you can lower your rate by at least 0.75%–1%. The real test is whether you will stay long enough to break even on closing costs.' },
  { question: 'Should I refinance to a shorter term?', answer: 'A shorter term (e.g., 30 to 15 years) can save interest but increases your monthly payment. Compare total cost and affordability.' },
  { question: 'When should I avoid refinancing?', answer: 'Avoid if you plan to move soon (before break-even), if closing costs outweigh savings, or if it would extend your payoff date significantly without benefit.' },
];

export default function WhenToRefinanceAMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'When to Refinance a Mortgage', description: 'Learn when refinancing makes sense and when to avoid it.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="When to Refinance a Mortgage" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>When to refinance</strong> depends on your goals: lower rate, shorter term, cash out, or removing PMI. Calculate your <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break Even Point</Link> to see how long it takes to recoup closing costs. See <Link href="/mortgage/refinance-after-interest-rates-drop" className="text-primary hover:underline font-medium">Refinance After Interest Rates Drop</Link> and <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is Refinance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about when to refinance">
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
          <p className="text-gray-700 text-sm">Your situation is unique. Use a refinance calculator to compare.</p>
        </section>
      </main>
    </div>
  );
}
