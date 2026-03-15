import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fixed vs Adjustable Rate Mortgage | Housentia',
  description:
    'Compare fixed and adjustable rate mortgages. Learn the pros and cons of each and when to choose one over the other.',
  openGraph: { title: 'Fixed vs Adjustable Rate Mortgage | Housentia', description: 'Compare fixed and ARM mortgages.' },
};

const ARTICLE_SLUG = 'fixed-vs-adjustable-rate-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Fixed vs Adjustable Rate Mortgage' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/fixed-vs-adjustable-rate-mortgage';

const FAQ_ITEMS = [
  { question: 'What is the main difference?', answer: 'A fixed rate stays the same for the entire term; an ARM has an initial fixed period, then the rate can adjust. Fixed offers predictability; ARMs may start with a lower rate.' },
  { question: 'When is a fixed rate better?', answer: 'Fixed rates are often better when you plan to stay long-term, want payment certainty, or when fixed rates are already low.' },
  { question: 'When is an ARM better?', answer: 'ARMs can be better if you plan to sell or refinance before the first adjustment, or expect to move within a few years. The lower initial rate can save money short-term.' },
  { question: 'Are ARM initial rates always lower?', answer: 'Often yes, but not always. Compare the APR and total cost over your expected ownership period.' },
];

export default function FixedVsAdjustableRateMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Fixed vs Adjustable Rate Mortgage', description: 'Compare fixed and ARM. Learn when each makes sense.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Fixed vs Adjustable Rate Mortgage" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Fixed vs adjustable rate</strong> is a key choice. Fixed rates offer predictability; ARMs may start lower but can change. Your decision depends on how long you plan to keep the loan and your tolerance for payment uncertainty. See <Link href="/mortgage/what-is-a-fixed-rate-mortgage" className="text-primary hover:underline font-medium">What Is a Fixed Rate Mortgage</Link>, <Link href="/mortgage/what-is-an-adjustable-rate-mortgage" className="text-primary hover:underline font-medium">What Is an Adjustable Rate Mortgage</Link>, and <Link href="/mortgage/what-is-loan-term" className="text-primary hover:underline font-medium">What Is a Loan Term</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about fixed vs ARM">
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
          <p className="text-gray-700 text-sm">Rates and terms vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
