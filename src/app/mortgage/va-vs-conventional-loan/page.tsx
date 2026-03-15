import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VA vs Conventional Loan | Housentia',
  description:
    'Compare VA and conventional loans: zero down for eligible veterans, no PMI, funding fee vs. down payment, and when each makes sense.',
  openGraph: { title: 'VA vs Conventional Loan | Housentia', description: 'Compare VA and conventional loans.' },
};

const ARTICLE_SLUG = 'va-vs-conventional-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'VA vs Conventional Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/va-vs-conventional-loan';

const FAQ_ITEMS = [
  { question: 'What is the main difference?', answer: 'VA loans offer zero down payment and no PMI for eligible veterans and service members. Conventional typically requires a down payment and PMI if LTV exceeds 80%.' },
  { question: 'Does VA have a funding fee?', answer: 'Yes. VA charges a funding fee (can be financed) unless you are exempt (e.g., disability). The fee helps fund the program. No monthly mortgage insurance.' },
  { question: 'Who qualifies for VA?', answer: 'Active duty, veterans, and certain spouses. You need a Certificate of Eligibility (COE). Service requirements apply.' },
  { question: 'When is VA better?', answer: 'VA is often better for eligible borrowers who want zero down and no PMI. Conventional may be better if you have a down payment and want to avoid the funding fee.' },
];

export default function VaVsConventionalLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'VA vs Conventional Loan', description: 'Compare VA and conventional: zero down, no PMI, funding fee.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="VA vs Conventional Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>VA vs conventional</strong>: VA loans offer zero down and no PMI for eligible veterans and service members. Conventional requires a down payment and PMI when LTV exceeds 80%. VA has a funding fee; conventional has no funding fee. See <Link href="/mortgage/va-loan" className="text-primary hover:underline font-medium">What Is a VA Loan</Link>, <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link>, and <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about VA vs conventional">
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
          <p className="text-gray-700 text-sm">VA eligibility and fees vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
