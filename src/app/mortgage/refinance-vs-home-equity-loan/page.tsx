import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance vs Home Equity Loan | Housentia',
  description:
    'Compare refinancing and home equity loans when you need to access home equity. Learn when each makes sense.',
  openGraph: { title: 'Refinance vs Home Equity Loan | Housentia', description: 'Compare refinance and home equity loan.' },
};

const ARTICLE_SLUG = 'refinance-vs-home-equity-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance vs Home Equity Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-vs-home-equity-loan';

const FAQ_ITEMS = [
  { question: 'What is the main difference?', answer: 'Refinance replaces your first mortgage. A home equity loan is a second mortgage—you keep your first loan and add a new one secured by your equity.' },
  { question: 'When is refinance better?', answer: 'When you want to lower your rate, change your term, or do a large cash-out. Refinancing can simplify to one payment.' },
  { question: 'When is a home equity loan better?', answer: 'When you have a low rate on your first mortgage and only need a smaller amount. You avoid refinancing the entire balance.' },
  { question: 'Which has lower closing costs?', answer: 'Home equity loans may have lower costs than a full refinance. Compare total cost and monthly payment for your situation.' },
];

export default function RefinanceVsHomeEquityLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance vs Home Equity Loan', description: 'Compare refinance and home equity loan when accessing equity.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance vs Home Equity Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Refinance vs home equity loan</strong>: Refinance replaces your first mortgage; a home equity loan adds a second. If your current rate is low, a home equity loan may preserve it. See <Link href="/mortgage/refinance-vs-heloc" className="text-primary hover:underline font-medium">Refinance vs HELOC</Link>, <Link href="/mortgage/what-is-a-second-mortgage" className="text-primary hover:underline font-medium">What Is a Second Mortgage</Link>, and <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is a Cash Out Refinance</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance vs home equity loan">
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
