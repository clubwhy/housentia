import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Pre-Approval: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Pre-approval means a lender has reviewed your finances and conditionally approved a loan amount. Learn how it differs from prequalification and why it matters when house hunting.',
  openGraph: {
    title: 'Mortgage Pre-Approval: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage pre-approval and how it strengthens your offer.',
  },
};

const ARTICLE_SLUG = 'mortgage-pre-approval';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Pre-Approval',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-pre-approval';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage pre-approval?',
    answer:
      'Pre-approval means a lender has reviewed your income, assets, credit, and debt and has conditionally approved you for a specific loan amount, subject to property and final underwriting.',
  },
  {
    question: 'How is pre-approval different from prequalification?',
    answer:
      'Prequalification is typically a quick estimate based on self-reported information. Pre-approval involves verification of your financial documents and a credit check, making it stronger.',
  },
  {
    question: 'How long does pre-approval last?',
    answer:
      'Pre-approval letters often have an expiration date, such as 60 or 90 days. You may need to update if your situation changes or the letter expires.',
  },
  {
    question: 'Does pre-approval guarantee a loan?',
    answer:
      'No. Pre-approval is conditional. Final approval depends on the property, appraisal, and final underwriting review.',
  },
];

export default function MortgagePreApprovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Pre-Approval: A Guide for U.S. Homebuyers',
    description:
      'Pre-approval means a lender has reviewed your finances and conditionally approved a loan amount. Learn how it differs from prequalification and why it matters.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Pre-Approval: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage pre-approval</strong> means a lender has reviewed your financial information — income,
            assets, credit, and debt — and has conditionally approved you for a specific loan amount. A pre-approval
            letter can strengthen your offer when competing for a home.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-approval is different from prequalification. Prequalification is typically a quick estimate based on
            self-reported information. Pre-approval involves verification of documents and a credit check, making it
            more meaningful to sellers and real estate agents.
          </p>
          <p className="text-gray-700">
            This guide explains what pre-approval is, how to get one, and how it fits into the home buying process. For
            more on prequalification, see our{' '}
            <Link href="/mortgage/prequalify" className="text-primary hover:underline font-medium">
              Mortgage Prequalification
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you are pre-approved, the lender has typically verified your income (pay stubs, W-2s, tax returns),
            assets (bank statements), and credit report. The lender then issues a letter stating the loan amount you are
            conditionally approved for, subject to the property meeting requirements and final underwriting.
          </p>
          <p className="text-gray-700">
            Pre-approval is not a guarantee. The property must appraise, and final underwriting may uncover additional
            conditions. But it shows sellers you are a serious, qualified buyer.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Pre-Approval Matters</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Stronger offers</strong> — Sellers often prefer buyers with pre-approval</li>
            <li><strong>Know your budget</strong> — You know the price range you can afford</li>
            <li><strong>Faster process</strong> — Much of the verification is already done</li>
            <li><strong>Identify issues early</strong> — Credit or income issues can be addressed before you find a home</li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about pre-approval">
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
          calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }}
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
            Pre-approval requirements and processes vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
