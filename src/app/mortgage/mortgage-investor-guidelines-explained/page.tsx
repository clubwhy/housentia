import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Investor Guidelines Explained | Housentia',
  description:
    'Fannie Mae, Freddie Mac, and other investors set guidelines that lenders follow. Learn how mortgage investor guidelines affect loan eligibility and terms.',
  openGraph: {
    title: 'Mortgage Investor Guidelines Explained | Housentia',
    description: 'Understand mortgage investor guidelines and how they affect your loan.',
  },
};

const ARTICLE_SLUG = 'mortgage-investor-guidelines-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Investor Guidelines Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-investor-guidelines-explained';

const FAQ_ITEMS = [
  {
    question: 'What are mortgage investor guidelines?',
    answer:
      'Investor guidelines are the rules that Fannie Mae, Freddie Mac, Ginnie Mae, and other investors set for the loans they purchase. Lenders must originate loans that meet these guidelines if they want to sell them to the investor. Guidelines cover credit, income, LTV, property type, and more.',
  },
  {
    question: 'Who are the main mortgage investors?',
    answer:
      'Fannie Mae and Freddie Mac purchase conventional conforming loans. Ginnie Mae securitizes government-backed loans (FHA, VA, USDA). Private investors purchase non-conforming or jumbo loans. Each has different guidelines.',
  },
  {
    question: 'How do investor guidelines affect me?',
    answer:
      'Lenders use investor guidelines to determine loan eligibility, pricing, and terms. If your loan meets Fannie or Freddie guidelines, you may get a conforming rate. If it does not, you may need a different program (FHA, VA, jumbo, non-QM) with different guidelines.',
  },
  {
    question: 'Can lender guidelines be stricter than investor guidelines?',
    answer:
      'Yes. Lenders can impose overlays—stricter requirements than the investor minimum. For example, an investor may allow a 620 credit score, but a lender might require 640. Overlays vary by lender.',
  },
];

export default function MortgageInvestorGuidelinesExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Investor Guidelines Explained',
    description:
      'Investors set guidelines that lenders follow. Learn how they affect your loan eligibility and terms.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Investor Guidelines Explained" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage investor guidelines</strong> are the rules that Fannie Mae, Freddie Mac, Ginnie Mae, and other investors set for the loans they purchase. Lenders originate loans that meet these guidelines so they can sell them in the secondary market. As a borrower, you may not deal with investors directly—but their guidelines influence your eligibility, loan options, and pricing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Investors and Their Guidelines</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Fannie Mae & Freddie Mac</strong> — Purchase conventional conforming loans. Guidelines cover credit score, DTI, LTV, loan limits, property type, and documentation. Loans must meet &quot;conforming&quot; criteria.</li>
            <li><strong>Ginnie Mae</strong> — Securitizes FHA, VA, and USDA loans. Guidelines align with those agency programs.</li>
            <li><strong>Private investors</strong> — Purchase jumbo, non-QM, or other non-conforming loans. Guidelines vary.</li>
          </ul>
          <p className="text-gray-700">
            See{' '}
            <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">
              Conventional Loan Guide
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/mortgage-loan-delivery-process" className="text-primary hover:underline font-medium">
              Mortgage Loan Delivery Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Guidelines Affect You</h2>
          <p className="text-gray-700 mb-4">
            Lenders use investor guidelines to decide which loan programs to offer and what terms to set. If your profile fits Fannie/Freddie guidelines, you may qualify for a conforming loan. If not, you may need FHA, VA, jumbo, or non-QM. Lenders can also add overlays—stricter requirements than the investor minimum.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about investor guidelines">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
                <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
                <dd className="text-gray-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Conforming Loan', href: '/mortgage-glossary/conforming-loan' }]}
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Guidelines change over time. Consult a lender for current requirements.
          </p>
        </section>
      </main>
    </div>
  );
}
