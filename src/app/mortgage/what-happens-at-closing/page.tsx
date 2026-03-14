import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Happens at Closing? A Guide for U.S. Homebuyers | Housentia',
  description:
    'At closing you sign loan documents, the lender funds the loan, and you receive the keys. Learn what happens at closing, what you sign, and what to bring.',
  openGraph: {
    title: 'What Happens at Closing? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand what happens at the closing table.',
  },
};

const ARTICLE_SLUG = 'what-happens-at-closing';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Happens at Closing?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-happens-at-closing';

const FAQ_ITEMS = [
  {
    question: 'What documents do I sign at closing?',
    answer:
      'You typically sign the promissory note (your promise to repay), the deed of trust or mortgage (securing the loan), the Closing Disclosure, and other settlement documents. The closing agent will guide you through each.',
  },
  {
    question: 'How long does closing take?',
    answer:
      'The signing often takes 30 to 60 minutes. Funding and recording may happen the same day or the next business day. You receive the keys once the loan is funded and the deed is recorded (for a purchase).',
  },
  {
    question: 'What do I need to bring to closing?',
    answer:
      'Bring a government-issued ID, the Closing Disclosure (if you have it), and a certified or cashier\'s check or wire confirmation for the amount due at closing. Your lender or title company will tell you the exact amount.',
  },
  {
    question: 'When do I get the keys?',
    answer:
      'For a purchase, you typically receive the keys after the loan is funded and the deed is recorded. In some states, this happens the same day; in others, it may be the next business day.',
  },
];

export default function WhatHappensAtClosingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Happens at Closing? A Guide for U.S. Homebuyers',
    description:
      'At closing you sign loan documents, the lender funds the loan, and you receive the keys. Learn what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Happens at Closing? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Closing</strong> (or settlement) is when you sign the loan documents, the lender funds the loan, and—for a purchase—you receive the keys and become the owner. Understanding what happens at the closing table helps you know what to expect and what to bring.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Arrive</h2>
          <p className="text-gray-700 mb-4">
            You must receive the Closing Disclosure at least 3 business days before closing. Review it and compare it to your Loan Estimate. Confirm the amount you need to bring (cash to close) and how to pay it—certified check, cashier&apos;s check, or wire. Avoid last-minute wire instructions from unknown sources; verify with your title company or lender.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Sign</h2>
          <p className="text-gray-700 mb-4">
            At closing you typically sign:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Promissory note</strong> — Your promise to repay the loan</li>
            <li><strong>Deed of trust or mortgage</strong> — Secures the loan with the property</li>
            <li><strong>Closing Disclosure</strong> — Acknowledges receipt of the final terms</li>
            <li><strong>Other documents</strong> — May include affidavits, tax forms, or state-specific forms</li>
          </ul>
          <p className="text-gray-700">
            The closing agent (title company or attorney) will walk you through each document. Ask questions if anything is unclear.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Funding and Recording</h2>
          <p className="text-gray-700 mb-4">
            After you sign, the lender funds the loan—sending the money to the closing agent. The deed is then recorded with the county. For a purchase, you receive the keys once funding and recording are complete. In some states this happens the same day; in others, the next business day.
          </p>
          <p className="text-gray-700">
            For more on the funding process, see our{' '}
            <Link href="/mortgage/mortgage-funding-process" className="text-primary hover:underline font-medium">
              Mortgage Funding Process
            </Link>
            {' '}guide.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about closing">
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
          glossary={[{ label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' }]}
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
            Closing procedures vary by state and lender.
          </p>
        </section>
      </main>
    </div>
  );
}
