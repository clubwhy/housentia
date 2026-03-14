import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monthly Mortgage Insurance Explained | Housentia',
  description:
    'Monthly mortgage insurance is paid with each payment. Learn how FHA annual MIP and conventional PMI work.',
  openGraph: { title: 'Monthly Mortgage Insurance Explained | Housentia', description: 'Understand monthly mortgage insurance.' },
};

const ARTICLE_SLUG = 'monthly-mortgage-insurance-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Monthly Mortgage Insurance Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/monthly-mortgage-insurance-explained';

const FAQ_ITEMS = [
  { question: 'What is monthly mortgage insurance?', answer: 'Monthly mortgage insurance is paid with each mortgage payment. For FHA loans, it\'s the annual MIP (spread over 12 months). For conventional loans, it\'s PMI. Both protect the lender when you put down less than 20%.' },
  { question: 'How much is monthly MI?', answer: 'FHA annual MIP varies by loan term, amount, and LTV—typically 0.45% to 1.05% of the loan amount per year, divided by 12. Conventional PMI varies by lender and credit profile.' },
  { question: 'When can I remove monthly PMI?', answer: 'Conventional PMI can typically be removed when you reach 80% LTV (loan-to-value) through payments or appreciation, or at the midpoint of an amortization schedule. FHA MIP often lasts longer.' },
  { question: 'Is monthly MI included in PITI?', answer: 'Yes. Mortgage insurance is part of your monthly housing payment and is included in PITI (Principal, Interest, Taxes, Insurance). See What Is PITI.' },
];

export default function MonthlyMortgageInsuranceExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Monthly Mortgage Insurance Explained', description: 'Monthly mortgage insurance is paid with each payment. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Monthly Mortgage Insurance Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Monthly mortgage insurance</strong> is paid with each mortgage payment. For FHA loans, it&apos;s the annual MIP spread over 12 months. For conventional loans, it&apos;s PMI. Both protect the lender when you put down less than 20%. See <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>, <Link href="/mortgage/what-is-mortgage-insurance-premium" className="text-primary hover:underline font-medium">What Is Mortgage Insurance Premium</Link>, and <Link href="/mortgage/upfront-mortgage-insurance-explained" className="text-primary hover:underline font-medium">Upfront Mortgage Insurance Explained</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about monthly mortgage insurance">
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
          <p className="text-gray-700 text-sm">MI rates and removal rules vary by loan type.</p>
        </section>
      </main>
    </div>
  );
}
