import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Jumbo Loan? | Housentia',
  description:
    'Jumbo loans exceed conforming loan limits set by Fannie Mae and Freddie Mac. Learn about higher down payments, stricter credit requirements, and when they apply.',
  openGraph: { title: 'What Is a Jumbo Loan? | Housentia', description: 'Understand jumbo loans for high-cost areas.' },
};

const ARTICLE_SLUG = 'jumbo-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Jumbo Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/jumbo-loan';

const FAQ_ITEMS = [
  { question: 'What is a jumbo loan?', answer: 'A jumbo loan exceeds the conforming loan limits set by the Federal Housing Finance Agency (FHFA) for Fannie Mae and Freddie Mac. In high-cost areas, limits are higher.' },
  { question: 'What are conforming loan limits?', answer: 'Conforming limits are updated annually. For 2024, the baseline limit is $766,550 for most areas; high-cost areas can go higher (e.g., over $1.1 million).' },
  { question: 'Do jumbo loans require a larger down payment?', answer: 'Often yes. Many jumbo lenders require 10%–20% or more down. Stricter credit and reserve requirements also apply.' },
  { question: 'Are jumbo rates higher?', answer: 'Jumbo rates can be similar to or slightly higher than conforming rates, depending on market conditions. Shop multiple lenders.' },
];

export default function JumboLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Jumbo Loan?', description: 'Jumbo loans exceed conforming limits. Learn requirements and when they apply.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Jumbo Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>jumbo loan</strong> exceeds the conforming loan limits set by the FHFA for Fannie Mae and Freddie Mac. Because jumbo loans are not eligible for GSE purchase, lenders often require larger down payments, stronger credit, and more reserves. See <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link> and <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about jumbo loan">
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
          <p className="text-gray-700 text-sm">Conforming limits and jumbo requirements change annually.</p>
        </section>
      </main>
    </div>
  );
}
