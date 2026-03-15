import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance After Interest Rates Drop | Housentia',
  description:
    'When interest rates drop, refinancing can lower your monthly payment. Learn when it makes sense and how to calculate savings.',
  openGraph: { title: 'Refinance After Interest Rates Drop | Housentia', description: 'Understand refinancing when rates drop.' },
};

const ARTICLE_SLUG = 'refinance-after-interest-rates-drop';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance After Interest Rates Drop' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-after-interest-rates-drop';

const FAQ_ITEMS = [
  { question: 'When should I refinance after rates drop?', answer: 'When the new rate is low enough to recoup your closing costs within your expected ownership period. Calculate your break-even point.' },
  { question: 'How much lower should the rate be?', answer: 'A common rule is 0.75%–1% lower, but the real test is: will your monthly savings cover closing costs before you move or refinance again?' },
  { question: 'Should I wait for rates to drop more?', answer: 'Rates are unpredictable. If you can save now and plan to stay long enough to break even, refinancing may make sense. Waiting risks rates rising.' },
  { question: 'What if I just refinanced?', answer: 'Check refinance waiting periods. Some programs require 6–12 months before another refinance. See Refinance Waiting Periods.' },
];

export default function RefinanceAfterInterestRatesDropPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance After Interest Rates Drop', description: 'Learn when to refinance when rates drop and how to calculate savings.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance After Interest Rates Drop" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Refinancing after interest rates drop</strong> can lower your monthly payment. Calculate your <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break Even Point</Link> to see if it pays off. See <Link href="/mortgage/when-to-refinance-a-mortgage" className="text-primary hover:underline font-medium">When to Refinance a Mortgage</Link>, <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>, and <Link href="/mortgage/refinance-waiting-periods" className="text-primary hover:underline font-medium">Refinance Waiting Periods</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance after rates drop">
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
          <p className="text-gray-700 text-sm">Use our refinance analyzer to compare scenarios.</p>
        </section>
      </main>
    </div>
  );
}
