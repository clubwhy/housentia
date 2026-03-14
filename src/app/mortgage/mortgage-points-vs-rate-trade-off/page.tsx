import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Points vs Rate Trade Off | Housentia',
  description:
    'Paying discount points lowers your rate but increases closing costs. Learn the trade-off and how to decide whether points make sense.',
  openGraph: { title: 'Mortgage Points vs Rate Trade Off | Housentia', description: 'Understand the points vs rate trade-off.' },
};

const ARTICLE_SLUG = 'mortgage-points-vs-rate-trade-off';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Points vs Rate Trade Off' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-points-vs-rate-trade-off';

const FAQ_ITEMS = [
  { question: 'What is the points vs rate trade-off?', answer: 'Paying discount points (upfront) lowers your interest rate and monthly payment. The trade-off: higher closing costs now vs. lower payments over time. The opposite is lender credits—accept a higher rate to reduce closing costs.' },
  { question: 'When do points make sense?', answer: 'Points can make sense if you plan to keep the loan long enough to recoup the upfront cost through lower payments. Calculate the break-even period and compare to your expected ownership.' },
  { question: 'How do I calculate break-even?', answer: 'Divide the cost of the points by the monthly payment savings. The result is the number of months to break even. If you\'ll own the home longer, points may pay off.' },
  { question: 'What about lender credits?', answer: 'Lender credits are the reverse: accept a higher rate to get a credit that reduces closing costs. They can make sense if you\'re short on cash or plan to refinance soon.' },
];

export default function MortgagePointsVsRateTradeOffPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Points vs Rate Trade Off', description: 'Paying points lowers your rate. Learn the trade-off and when it makes sense.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Points vs Rate Trade Off" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">The <strong>mortgage points vs rate trade-off</strong> is the choice between paying discount points upfront (to lower your rate) or accepting a higher rate (and possibly receiving lender credits). Points increase closing costs but reduce your monthly payment. See <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>, <Link href="/mortgage/what-is-a-loan-discount-fee" className="text-primary hover:underline font-medium">What Is a Loan Discount Fee</Link>, and <Link href="/mortgage/mortgage-lender-credits-explained" className="text-primary hover:underline font-medium">Mortgage Lender Credits Explained</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about points vs rate trade-off">
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
          <p className="text-gray-700 text-sm">Point pricing varies by lender.</p>
        </section>
      </main>
    </div>
  );
}
