import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upfront Mortgage Insurance Explained | Housentia',
  description:
    'Upfront mortgage insurance is paid at closing. Learn how FHA upfront MIP works and how it affects your closing costs.',
  openGraph: { title: 'Upfront Mortgage Insurance Explained | Housentia', description: 'Understand upfront mortgage insurance.' },
};

const ARTICLE_SLUG = 'upfront-mortgage-insurance-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Upfront Mortgage Insurance Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/upfront-mortgage-insurance-explained';

const FAQ_ITEMS = [
  { question: 'What is upfront mortgage insurance?', answer: 'Upfront mortgage insurance is a one-time premium paid at closing. For FHA loans, the upfront MIP is typically 1.75% of the loan amount. It can be financed into the loan.' },
  { question: 'Do all loans have upfront MI?', answer: 'FHA loans have upfront MIP. VA loans have a funding fee (different from MI). Conventional loans typically have only monthly PMI, not upfront.' },
  { question: 'Can I finance the upfront MIP?', answer: 'Yes. For FHA loans, you can add the upfront MIP to your loan amount instead of paying it in cash at closing. This increases your loan balance and monthly payment.' },
  { question: 'Is upfront MIP refundable?', answer: 'FHA used to offer partial refunds when refinancing to another FHA loan within three years. That program has been discontinued. Check current FHA rules.' },
];

export default function UpfrontMortgageInsuranceExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Upfront Mortgage Insurance Explained', description: 'Upfront mortgage insurance is paid at closing. Learn how FHA upfront MIP works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Upfront Mortgage Insurance Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Upfront mortgage insurance</strong> is a one-time premium paid at closing. For FHA loans, the upfront MIP is typically 1.75% of the base loan amount. You can pay it in cash or finance it into the loan. See <Link href="/mortgage/what-is-mortgage-insurance-premium" className="text-primary hover:underline font-medium">What Is Mortgage Insurance Premium</Link> and <Link href="/mortgage/monthly-mortgage-insurance-explained" className="text-primary hover:underline font-medium">Monthly Mortgage Insurance Explained</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about upfront mortgage insurance">
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
          <p className="text-gray-700 text-sm">MIP rates and rules are subject to change.</p>
        </section>
      </main>
    </div>
  );
}
