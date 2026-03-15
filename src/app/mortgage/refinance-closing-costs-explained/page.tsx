import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Closing Costs Explained | Housentia',
  description:
    'Refinance closing costs include lender fees, appraisal, title, and more. Learn what to expect and how to reduce or roll costs into the loan.',
  openGraph: { title: 'Refinance Closing Costs Explained | Housentia', description: 'Understand refinance closing costs.' },
};

const ARTICLE_SLUG = 'refinance-closing-costs-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Closing Costs Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-closing-costs-explained';

const FAQ_ITEMS = [
  { question: 'What are refinance closing costs?', answer: 'Similar to purchase: lender fees (origination, processing, underwriting), appraisal, title, recording, and prepaid items. Typically 2%–5% of the loan amount.' },
  { question: 'Can I roll closing costs into the loan?', answer: 'Yes. You can often finance closing costs by increasing the loan amount, which raises your balance and may slightly increase your payment.' },
  { question: 'Are refinance costs lower than purchase?', answer: 'Sometimes. You may avoid some fees (e.g., no real estate commission). Lender credits or no-closing-cost options may be available in exchange for a higher rate.' },
  { question: 'How do I reduce refinance costs?', answer: 'Shop lenders, compare Loan Estimates, ask about lender credits, and consider streamline programs (FHA, VA) that may have reduced costs.' },
];

export default function RefinanceClosingCostsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Closing Costs Explained', description: 'Learn what refinance closing costs include and how to reduce them.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Closing Costs Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Refinance closing costs</strong> are similar to purchase: lender fees, appraisal, title, recording, and prepaid items. See <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>, <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break Even Point Explained</Link>, and <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is a Loan Estimate</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance closing costs">
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
          <p className="text-gray-700 text-sm">Costs vary by lender and transaction.</p>
        </section>
      </main>
    </div>
  );
}
