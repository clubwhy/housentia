import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Asset Verification: What Lenders Check | Housentia',
  description:
    'Lenders verify assets through bank statements and investment accounts. Learn how mortgage asset verification works, what documents you need, and how large deposits are handled.',
  openGraph: {
    title: 'Mortgage Asset Verification: What Lenders Check | Housentia',
    description: 'Understand how lenders verify assets for mortgage approval.',
  },
};

const ARTICLE_SLUG = 'mortgage-asset-verification';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Asset Verification',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-asset-verification';

const FAQ_ITEMS = [
  {
    question: 'What assets do lenders verify?',
    answer:
      'Lenders verify the accounts you use for your down payment and closing costs, plus reserves (extra savings). This typically includes checking, savings, and sometimes investment or retirement accounts.',
  },
  {
    question: 'How far back do bank statements need to go?',
    answer:
      'Most lenders request 2 months of bank statements. They want to see the source of funds and that balances are consistent. Large or unusual deposits may require a letter of explanation.',
  },
  {
    question: 'What is a large deposit?',
    answer:
      'A large deposit is typically any deposit that is not from your regular paycheck or a recurring source. Lenders may ask for a letter of explanation and documentation (e.g., sale of asset, gift letter) to verify the source.',
  },
  {
    question: 'Can I use gift funds for my down payment?',
    answer:
      'Yes, in many cases. You will need a gift letter stating the amount, that it is a gift (not a loan), and the donor\'s relationship to you. The donor may need to provide bank statements showing the funds.',
  },
];

export default function MortgageAssetVerificationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Asset Verification: What Lenders Check',
    description:
      'Lenders verify assets through bank statements and investment accounts. Learn how it works and what you need.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Asset Verification: What Lenders Check" breadcrumbs={BREADCRUMBS} />
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
            Lenders verify your <strong>assets</strong> to ensure you have funds for the down payment, closing costs, and reserves. Asset verification typically involves reviewing bank statements and sometimes investment or retirement account statements. Lenders also want to know the source of large deposits.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Lenders Look At</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Checking and savings</strong> — 2 months of statements; source of down payment and closing costs</li>
            <li><strong>Investment accounts</strong> — If used for down payment or reserves</li>
            <li><strong>Retirement accounts</strong> — If used; some lenders allow a percentage of vested balance</li>
            <li><strong>Gift funds</strong> — Gift letter and donor&apos;s ability to give</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Large Deposits</h2>
          <p className="text-gray-700 mb-4">
            Lenders may question deposits that are not from your regular paycheck. They want to ensure the money is not a loan (which would add debt). You may need to provide a letter of explanation and documentation—for example, a copy of a check from a gift, or a sale agreement for an asset.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Reserves</h2>
          <p className="text-gray-700 mb-4">
            <strong>Reserves</strong> are liquid assets you have after closing. Lenders may require 2–24 months of PITI in reserves, depending on the loan type and your profile. Reserves show you can make payments if your income is temporarily disrupted.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about asset verification">
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
          glossary={[{ label: 'Cash to Close', href: '/mortgage-glossary/cash-to-close' }]}
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
            Asset verification requirements vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
