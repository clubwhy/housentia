import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Happens After Closing? A Guide for U.S. Homeowners | Housentia',
  description:
    'After closing you receive the keys, set up payments, and your loan is boarded with the servicer. Learn what to expect in the days and weeks after closing.',
  openGraph: {
    title: 'What Happens After Closing? A Guide for U.S. Homeowners | Housentia',
    description: 'Understand what happens after you close on your mortgage.',
  },
};

const ARTICLE_SLUG = 'what-happens-after-closing';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Happens After Closing?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-happens-after-closing';

const FAQ_ITEMS = [
  {
    question: 'When do I make my first mortgage payment?',
    answer:
      'Your first payment is typically due the month after the month in which you closed. For example, if you closed in March, your first payment may be due May 1. Your closing documents will specify the due date.',
  },
  {
    question: 'When will I receive my first statement?',
    answer:
      'You typically receive your first statement from the servicer within a few weeks of closing. It will show your payment amount, due date, and how to make payments. If you do not receive one, contact your servicer.',
  },
  {
    question: 'Can my servicer change after closing?',
    answer:
      'Yes. Lenders often sell loans to investors, and servicing may be transferred. Your loan terms do not change. You will receive a notice with the new servicer\'s contact information. See our Mortgage Servicing Transfer Explained guide.',
  },
  {
    question: 'What documents should I keep after closing?',
    answer:
      'Keep your Closing Disclosure, promissory note, deed of trust or mortgage, and proof of title insurance. Store them in a safe place. You may need them for taxes, refinancing, or selling.',
  },
];

export default function WhatHappensAfterClosingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Happens After Closing? A Guide for U.S. Homeowners',
    description:
      'After closing you receive the keys, set up payments, and your loan is boarded. Learn what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Happens After Closing? A Guide for U.S. Homeowners" breadcrumbs={BREADCRUMBS} />
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
            After you close on your mortgage, several things happen behind the scenes and on your end. You receive the keys (for a purchase), your loan is boarded with the servicer, and you set up your payment method. Understanding what to expect helps you stay on track.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Immediately After Closing</h2>
          <p className="text-gray-700 mb-4">
            For a purchase, you receive the keys once the loan is funded and the deed is recorded. The closing agent or your real estate agent will hand them over. For a refinance, you already have the keys—the new loan replaces the old one.
          </p>
          <p className="text-gray-700 mb-4">
            The lender sends the loan file to the servicer (or the servicer is the same as the lender). The servicer &quot;boards&quot; your loan—adds it to their system—so they can collect payments and send statements. See{' '}
            <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-primary hover:underline font-medium">
              Mortgage Payment Setup After Closing
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your First Payment</h2>
          <p className="text-gray-700 mb-4">
            Your first payment is typically due the month after the month in which you closed. There is often a period of prepaid interest (per diem) that you paid at closing. Your Closing Disclosure and welcome letter from the servicer will show your due date and payment amount.
          </p>
          <p className="text-gray-700">
            Set up automatic payments or a reminder so you do not miss the first payment. See{' '}
            <Link href="/mortgage/what-is-a-mortgage-payment" className="text-primary hover:underline font-medium">
              What Is a Mortgage Payment?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome Package and Statements</h2>
          <p className="text-gray-700 mb-4">
            Within a few weeks of closing, you should receive a welcome letter or package from your servicer. It will include your account number, how to make payments, and how to set up online access. You will receive a monthly statement each billing cycle.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Documents to Keep</h2>
          <p className="text-gray-700 mb-4">
            Keep your Closing Disclosure, promissory note, deed of trust or mortgage, and proof of title insurance in a safe place. You may need them for tax purposes, refinancing, or when you sell. Consider making digital copies as backup.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about what happens after closing">
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
          glossary={[{ label: 'Mortgage Servicing', href: '/mortgage-glossary/servicing' }]}
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
            Procedures vary by lender and servicer.
          </p>
        </section>
      </main>
    </div>
  );
}
