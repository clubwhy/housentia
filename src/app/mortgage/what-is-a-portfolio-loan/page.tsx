import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Portfolio Loan? | Housentia',
  description:
    'A portfolio loan is held by the lender instead of being sold to investors. Learn about flexible guidelines and when they may help.',
  openGraph: { title: 'What Is a Portfolio Loan? | Housentia', description: 'Understand portfolio loans.' },
};

const ARTICLE_SLUG = 'what-is-a-portfolio-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Portfolio Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-portfolio-loan';

const FAQ_ITEMS = [
  { question: 'What is a portfolio loan?', answer: 'A portfolio loan is one the lender keeps in its own portfolio instead of selling to Fannie Mae, Freddie Mac, or other investors. The lender sets its own guidelines.' },
  { question: 'Why would a lender offer portfolio loans?', answer: 'Lenders may offer portfolio loans to serve borrowers who do not fit conforming or government guidelines, or to retain profitable loans.' },
  { question: 'Are portfolio loans more flexible?', answer: 'Often yes. Because the lender sets its own rules, they may accept non-standard income, higher DTI, or unique property types. Terms vary by lender.' },
  { question: 'Are portfolio loans more expensive?', answer: 'Rates and fees can be higher than conforming loans because the lender bears the risk. Compare offers.' },
];

export default function WhatIsAPortfolioLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Portfolio Loan?', description: 'A portfolio loan is held by the lender. Learn about flexible guidelines.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Portfolio Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>portfolio loan</strong> is held by the lender in its own portfolio instead of being sold to investors. The lender sets its own guidelines, which can be more flexible than conforming or government programs. See <Link href="/mortgage/non-qm-loan" className="text-primary hover:underline font-medium">What Is a Non-QM Loan</Link>, <Link href="/mortgage/mortgage-loan-delivery-process" className="text-primary hover:underline font-medium">Mortgage Loan Delivery Process</Link>, and <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about portfolio loan">
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
          <p className="text-gray-700 text-sm">Portfolio loan availability and terms vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
