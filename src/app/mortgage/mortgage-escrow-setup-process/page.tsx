import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Escrow Setup Process | Housentia',
  description:
    'If your loan has an escrow account, the servicer sets it up after closing. Learn how the mortgage escrow setup process works and what to expect.',
  openGraph: {
    title: 'Mortgage Escrow Setup Process | Housentia',
    description: 'Understand how your escrow account is set up after closing.',
  },
};

const ARTICLE_SLUG = 'mortgage-escrow-setup-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Escrow Setup Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-escrow-setup-process';

const FAQ_ITEMS = [
  {
    question: 'When is my escrow account set up?',
    answer:
      'If your loan requires an escrow account, it is typically set up at or before closing. You pay initial escrow funds at closing, and your monthly payment includes an escrow portion for taxes and insurance. The servicer manages the account after closing.',
  },
  {
    question: 'What are initial escrow deposits?',
    answer:
      'At closing, you may pay initial escrow deposits—funds to establish a cushion for upcoming tax and insurance payments. The amount is shown on your Closing Disclosure. The servicer holds these funds and pays your taxes and insurance when due.',
  },
  {
    question: 'Can my escrow payment change?',
    answer:
      'Yes. The servicer conducts an escrow analysis at least once a year. If taxes or insurance increase, your monthly escrow payment may increase. If there is a surplus, you may receive a refund or it may be applied to future payments.',
  },
  {
    question: 'Do I have to have an escrow account?',
    answer:
      'It depends on your loan type and LTV. Many loans require escrow when you put down less than 20%. Some borrowers can waive escrow once they reach a certain LTV, depending on the lender and loan program.',
  },
];

export default function MortgageEscrowSetupProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Escrow Setup Process',
    description:
      'If your loan has an escrow account, the servicer sets it up after closing. Learn how it works.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Escrow Setup Process" breadcrumbs={BREADCRUMBS} />
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
            If your mortgage includes an <strong>escrow account</strong>, the servicer collects a portion of your annual property taxes and homeowner&apos;s insurance with each monthly payment, holds the funds, and pays the bills when due. The escrow account is typically established at closing, and you pay initial escrow deposits as part of your closing costs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">At Closing</h2>
          <p className="text-gray-700 mb-4">
            Your Closing Disclosure shows initial escrow deposits—funds to establish the account and build a cushion for upcoming tax and insurance payments. These are part of your cash to close. The servicer receives these funds and sets up the escrow account when the loan is boarded.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Monthly Escrow Portion</h2>
          <p className="text-gray-700 mb-4">
            Your monthly payment includes an escrow portion—typically one-twelfth of your estimated annual taxes and insurance. The servicer holds these funds and pays your property taxes and homeowner&apos;s insurance when they are due. This spreads the cost over 12 months instead of large lump sums.
          </p>
          <p className="text-gray-700">
            For more on how escrow works, see{' '}
            <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">
              What Is Escrow?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Escrow Analysis</h2>
          <p className="text-gray-700 mb-4">
            The servicer must conduct an escrow analysis at least once a year. If taxes or insurance have increased, your monthly escrow payment may increase. If there is a surplus, you may receive a refund. You have the right to receive an escrow account statement.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about escrow setup">
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
          glossary={[{ label: 'Escrow Account', href: '/mortgage-glossary/escrow-account' }]}
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
            Escrow requirements vary by loan type and lender.
          </p>
        </section>
      </main>
    </div>
  );
}
