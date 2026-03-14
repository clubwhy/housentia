import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Average Mortgage Closing Costs | Housentia',
  description:
    'Typical mortgage closing costs range from 2% to 5% of the loan amount. Learn what affects the total and how to estimate your costs.',
  openGraph: { title: 'Average Mortgage Closing Costs | Housentia', description: 'Understand typical mortgage closing costs.' },
};

const ARTICLE_SLUG = 'average-mortgage-closing-costs';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Average Mortgage Closing Costs' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/average-mortgage-closing-costs';

const FAQ_ITEMS = [
  { question: 'What are average closing costs?', answer: 'Closing costs typically range from 2% to 5% of the loan amount. For a $300,000 loan, that\'s roughly $6,000 to $15,000. Costs vary by location, loan type, and lender.' },
  { question: 'What affects closing cost totals?', answer: 'Loan amount, loan type (FHA, VA, conventional), location (title/recording fees vary by state), whether you pay points, and lender pricing all affect the total.' },
  { question: 'Can I reduce closing costs?', answer: 'Shop lenders, compare Loan Estimates, negotiate lender credits, and shop for title/escrow where allowed. Seller concessions can also help.' },
  { question: 'Are closing costs included in the loan?', answer: 'Some costs (e.g., upfront MIP, certain fees) can be financed into the loan, which increases your loan balance. Prepaid items and most third-party fees are typically paid at closing.' },
];

export default function AverageMortgageClosingCostsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Average Mortgage Closing Costs', description: 'Typical closing costs range from 2% to 5% of the loan. Learn what affects the total.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Average Mortgage Closing Costs" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Average mortgage closing costs</strong> typically range from 2% to 5% of the loan amount. For a $300,000 loan, expect roughly $6,000 to $15,000. Costs vary by loan type, location, and lender. See <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> and <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about average closing costs">
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
          <p className="text-gray-700 text-sm">Actual costs vary by transaction.</p>
        </section>
      </main>
    </div>
  );
}
