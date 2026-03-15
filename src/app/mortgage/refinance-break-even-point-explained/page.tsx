import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Break Even Point Explained | Housentia',
  description:
    'The refinance break-even point is when your monthly savings equal your closing costs. Learn how to calculate it and why it matters.',
  openGraph: { title: 'Refinance Break Even Point Explained | Housentia', description: 'Understand refinance break-even.' },
};

const ARTICLE_SLUG = 'refinance-break-even-point-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Break Even Point Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-break-even-point-explained';

const FAQ_ITEMS = [
  { question: 'What is the refinance break-even point?', answer: 'The break-even point is when your total monthly savings from the refinance equal the closing costs you paid. After that, you are ahead.' },
  { question: 'How do I calculate break-even?', answer: 'Divide your closing costs by your monthly payment savings. Example: $4,000 in costs ÷ $150/month savings = about 27 months to break even.' },
  { question: 'Why does break-even matter?', answer: 'If you plan to move or refinance again before break-even, you may not recoup your costs. Refinancing makes more sense if you will stay longer.' },
  { question: 'What if I roll costs into the loan?', answer: 'If you finance closing costs, your loan balance increases. Factor that into your true savings. The break-even concept still applies to net savings.' },
];

export default function RefinanceBreakEvenPointExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Break Even Point Explained', description: 'Learn how to calculate refinance break-even and why it matters.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Break Even Point Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>refinance break-even point</strong> is when your monthly savings equal your closing costs. Before that, you have not yet recouped what you paid. See <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>, <Link href="/mortgage/when-to-refinance-a-mortgage" className="text-primary hover:underline font-medium">When to Refinance a Mortgage</Link>, and <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is Refinance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance break-even">
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
          <p className="text-gray-700 text-sm">Use our refinance analyzer tool to compare scenarios.</p>
        </section>
      </main>
    </div>
  );
}
