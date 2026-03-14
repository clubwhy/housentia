import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Closing Cost Breakdown | Housentia',
  description:
    'A breakdown of mortgage closing costs: lender fees, third-party fees, prepaid items, and escrow. Learn what each category includes.',
  openGraph: { title: 'Mortgage Closing Cost Breakdown | Housentia', description: 'Understand the breakdown of mortgage closing costs.' },
};

const ARTICLE_SLUG = 'mortgage-closing-cost-breakdown';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Closing Cost Breakdown' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-closing-cost-breakdown';

const FAQ_ITEMS = [
  { question: 'What are the main categories of closing costs?', answer: 'Closing costs typically include: (1) Origination charges (lender fees), (2) Services you cannot shop for (appraisal, credit report, flood cert), (3) Services you can shop for (title, escrow), (4) Prepaid items (insurance, taxes, interest), (5) Initial escrow payment.' },
  { question: 'Where do I see the breakdown?', answer: 'The Loan Estimate and Closing Disclosure break down costs by category. Section A is origination charges; Sections B–E cover other services and prepaid items.' },
  { question: 'Which costs can I shop for?', answer: 'Title insurance, escrow, and some other services are often shoppable. The Loan Estimate indicates which services you can shop for. Compare quotes to save.' },
  { question: 'What are prepaid items?', answer: 'Prepaid items include homeowner\'s insurance, property taxes, and prepaid interest (from closing to first payment). These are not fees but funds held in escrow or paid in advance.' },
];

export default function MortgageClosingCostBreakdownPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Closing Cost Breakdown', description: 'A breakdown of lender fees, third-party fees, prepaid items, and escrow.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Closing Cost Breakdown" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>mortgage closing cost breakdown</strong> organizes fees into categories: origination charges, services you cannot shop for, services you can shop for, and prepaid items. See <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> and <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Categories</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Origination charges</strong> — Lender fees (processing, underwriting, points)</li>
            <li><strong>Services you cannot shop for</strong> — Appraisal, credit report, flood cert, tax service</li>
            <li><strong>Services you can shop for</strong> — Title, escrow, survey (where applicable)</li>
            <li><strong>Prepaid items</strong> — Insurance, taxes, prepaid interest</li>
            <li><strong>Initial escrow</strong> — Reserves for taxes and insurance</li>
          </ul>
          <p className="text-gray-700">See <Link href="/mortgage/average-mortgage-closing-costs" className="text-primary hover:underline font-medium">Average Mortgage Closing Costs</Link> and <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about closing cost breakdown">
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
          <p className="text-gray-700 text-sm">Closing cost structures vary by lender and transaction.</p>
        </section>
      </main>
    </div>
  );
}
