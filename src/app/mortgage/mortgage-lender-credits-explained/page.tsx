import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Lender Credits Explained | Housentia',
  description:
    'Lender credits reduce your closing costs in exchange for a higher interest rate. Learn how they work and when they make sense.',
  openGraph: { title: 'Mortgage Lender Credits Explained | Housentia', description: 'Understand mortgage lender credits.' },
};

const ARTICLE_SLUG = 'mortgage-lender-credits-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Lender Credits Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-lender-credits-explained';

const FAQ_ITEMS = [
  { question: 'What are lender credits?', answer: 'Lender credits are a reduction in your closing costs offered by the lender in exchange for a higher interest rate. They can help reduce cash needed at closing.' },
  { question: 'How do lender credits work?', answer: 'You accept a slightly higher rate, and the lender gives you a credit (often a percentage of the loan amount) that reduces your closing costs. The trade-off is a higher monthly payment over the life of the loan.' },
  { question: 'When do lender credits make sense?', answer: 'Lender credits can make sense if you\'re short on cash at closing, plan to sell or refinance soon, or prefer lower upfront costs. Compare the total cost over your expected ownership period.' },
  { question: 'Are lender credits the opposite of points?', answer: 'Yes. Points (discount points) are paid upfront to lower your rate. Lender credits are received upfront in exchange for a higher rate. Both are rate/cost trade-offs.' },
];

export default function MortgageLenderCreditsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Lender Credits Explained', description: 'Lender credits reduce closing costs in exchange for a higher rate. Learn how they work.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Lender Credits Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Mortgage lender credits</strong> reduce your closing costs in exchange for a higher interest rate. You accept a slightly higher rate, and the lender gives you a credit that lowers your cash to close. It&apos;s the opposite of paying discount points. See <Link href="/mortgage/mortgage-points-vs-rate-trade-off" className="text-primary hover:underline font-medium">Mortgage Points vs Rate Trade Off</Link>, <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>, and <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about lender credits">
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
          <p className="text-gray-700 text-sm">Lender credit offers vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
