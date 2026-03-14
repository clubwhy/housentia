import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Funding Process: What Happens After You Sign | Housentia',
  description:
    'Mortgage funding is when the lender sends the loan proceeds to the closing agent. Learn how the funding process works and when you get the keys.',
  openGraph: {
    title: 'Mortgage Funding Process: What Happens After You Sign | Housentia',
    description: 'Understand the mortgage funding process and when the loan is funded.',
  },
};

const ARTICLE_SLUG = 'mortgage-funding-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Funding Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-funding-process';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage funding?',
    answer:
      'Mortgage funding is when the lender sends the loan proceeds to the closing agent (title company or attorney). The funds are used to pay off the seller (for a purchase), pay off the old loan (for a refinance), and cover closing costs.',
  },
  {
    question: 'When does funding happen?',
    answer:
      'Funding typically happens after you sign the loan documents. In some cases it is the same day; in others, the next business day. The exact timing depends on the lender and state. You receive the keys (for a purchase) once funding and recording are complete.',
  },
  {
    question: 'What is recording?',
    answer:
      'Recording is when the deed and mortgage (or deed of trust) are filed with the county recorder. This makes the transfer of ownership and the lender\'s lien official. Recording usually happens on or shortly after the funding date.',
  },
  {
    question: 'When do I get the keys?',
    answer:
      'For a purchase, you typically receive the keys after the loan is funded and the deed is recorded. In some states this is the same day as signing; in others, the next business day. Your closing agent will tell you.',
  },
];

export default function MortgageFundingProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Funding Process: What Happens After You Sign',
    description:
      'Mortgage funding is when the lender sends the loan proceeds. Learn how it works and when you get the keys.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Funding Process: What Happens After You Sign" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage funding</strong> is when the lender sends the loan proceeds to the closing agent. For a purchase, the funds pay the seller and cover closing costs. For a refinance, they pay off the old loan. You receive the keys (for a purchase) once funding and recording are complete.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Funding Sequence</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>You sign the loan documents at closing</li>
            <li>The closing agent sends signed documents to the lender</li>
            <li>The lender reviews and wires the loan proceeds to the closing agent</li>
            <li>The closing agent disburses funds (pays seller, old lender, fees)</li>
            <li>The deed and mortgage are recorded with the county</li>
            <li>You receive the keys (for a purchase)</li>
          </ol>
          <p className="text-gray-700 mt-4">
            The timing varies. Some closings fund the same day; others the next business day. Your closing agent will explain the process for your transaction.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recording</h2>
          <p className="text-gray-700 mb-4">
            <strong>Recording</strong> is when the deed (transfer of ownership) and mortgage or deed of trust (lender&apos;s lien) are filed with the county recorder. This makes the transaction official and gives the lender a secured interest in the property. Recording typically happens on or shortly after the funding date.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When You Get the Keys</h2>
          <p className="text-gray-700 mb-4">
            For a purchase, you receive the keys after the loan is funded and the deed is recorded. In some states this happens the same day as signing; in others (e.g., some states with escrow), it may be the next business day. For a refinance, there are no keys—you already own the home.
          </p>
          <p className="text-gray-700">
            See{' '}
            <Link href="/mortgage/what-happens-at-closing" className="text-primary hover:underline font-medium">
              What Happens at Closing
            </Link>
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage funding">
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
            Funding procedures vary by lender and state.
          </p>
        </section>
      </main>
    </div>
  );
}
