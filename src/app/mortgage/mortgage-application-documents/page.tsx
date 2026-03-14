import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Application Documents: What You Need | Housentia',
  description:
    'Learn what documents you need for a mortgage application: income, assets, identification, and more. A checklist for employed and self-employed borrowers.',
  openGraph: {
    title: 'Mortgage Application Documents: What You Need | Housentia',
    description: 'Understand what documents you need for a mortgage application.',
  },
};

const ARTICLE_SLUG = 'mortgage-application-documents';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Application Documents',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-application-documents';

const FAQ_ITEMS = [
  {
    question: 'What documents do I need for a mortgage application?',
    answer:
      'Typically: pay stubs (2 months), W-2s (2 years), tax returns (2 years), bank statements (2 months), and a government-issued ID. Self-employed borrowers may need additional documentation such as profit-and-loss statements.',
  },
  {
    question: 'How far back do bank statements need to go?',
    answer:
      'Most lenders request 2 months of bank statements. They look for consistent balances and may ask about large deposits. Have statements ready for all accounts you use for down payment or reserves.',
  },
  {
    question: 'Do I need to provide documents for a co-borrower?',
    answer:
      'Yes. All borrowers on the loan must provide income, asset, and identification documents. Their income and debt are included in the qualification.',
  },
  {
    question: 'What if I cannot find a document?',
    answer:
      'Contact your lender or processor. They may accept alternatives (e.g., IRS transcript instead of tax return) or have workarounds. Do not delay—ask early.',
  },
];

export default function MortgageApplicationDocumentsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Application Documents: What You Need',
    description:
      'Learn what documents you need for a mortgage application: income, assets, identification, and more.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Application Documents: What You Need" breadcrumbs={BREADCRUMBS} />
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
            Lenders need to verify your income, assets, and identity. Having the right documents ready can speed up your application. This checklist covers the typical documents for employed and self-employed borrowers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Income Documents</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Pay stubs (2–4 weeks, sometimes 2 months)</li>
            <li>W-2s (2 years)</li>
            <li>Tax returns (2 years, all pages)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            For self-employed borrowers: tax returns (2 years), profit-and-loss statements, 1099s. See{' '}
            <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline font-medium">
              How Income Is Verified for a Mortgage
            </Link>
            {' '}and{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">
              Self-Employed Borrower Scenarios
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Asset Documents</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Bank statements (2 months for checking and savings)</li>
            <li>Investment account statements (if used for down payment or reserves)</li>
            <li>Retirement account statements (if used)</li>
            <li>Gift letter (if using gift funds for down payment)</li>
          </ul>
          <p className="text-gray-700">
            Lenders want to see the source of your down payment and that you have reserves. Large deposits may require a letter of explanation. See{' '}
            <Link href="/mortgage/mortgage-asset-verification" className="text-primary hover:underline font-medium">
              Mortgage Asset Verification
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Identification</h2>
          <p className="text-gray-700 mb-4">
            Government-issued ID (driver&apos;s license or passport). Some lenders may request a second form of ID.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Documents</h2>
          <p className="text-gray-700 mb-4">
            Depending on your situation: divorce decree, bankruptcy paperwork, proof of child support or alimony, rental agreements (if you have rental income), business license (self-employed).
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage documents">
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
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
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
            Document requirements vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
