import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Can You Refinance with Bad Credit? | Housentia',
  description:
    'Refinancing with bad credit is possible but options are limited. Learn about FHA streamline, VA IRRRL, and improving your credit first.',
  openGraph: { title: 'Can You Refinance with Bad Credit? | Housentia', description: 'Understand refinancing with bad credit.' },
};

const ARTICLE_SLUG = 'can-you-refinance-with-bad-credit';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Can You Refinance with Bad Credit?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/can-you-refinance-with-bad-credit';

const FAQ_ITEMS = [
  { question: 'Can I refinance with bad credit?', answer: 'It depends. FHA streamline and VA IRRRL may not require a credit check or have relaxed requirements. Conventional refinance typically requires good credit.' },
  { question: 'What are my options with low credit?', answer: 'FHA streamline (if you have FHA), VA IRRRL (if you have VA), or work on improving your credit before applying for a conventional refinance.' },
  { question: 'Should I wait to improve my credit?', answer: 'If you can raise your score in a few months, waiting may get you a better rate. If you have an FHA or VA loan, streamline/IRRRL may not need a credit check.' },
  { question: 'Will refinancing hurt my credit?', answer: 'A refinance application causes a hard inquiry. Paying off the old loan and opening a new one can temporarily affect your score, but long-term impact is usually minimal.' },
];

export default function CanYouRefinanceWithBadCreditPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Can You Refinance with Bad Credit?', description: 'Learn refinance options when you have bad credit.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Can You Refinance with Bad Credit?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Refinancing with bad credit</strong> is possible in some cases. FHA streamline and VA IRRRL may have relaxed or no credit requirements. Conventional refinance typically needs good credit. See <Link href="/mortgage/fha-streamline-refinance" className="text-primary hover:underline font-medium">FHA Streamline Refinance</Link>, <Link href="/mortgage/va-irrrl-refinance" className="text-primary hover:underline font-medium">VA IRRRL Refinance</Link>, and <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinancing with bad credit">
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
          <p className="text-gray-700 text-sm">Eligibility varies by program and lender.</p>
        </section>
      </main>
    </div>
  );
}
