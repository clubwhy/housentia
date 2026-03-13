import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Escrow? A Guide for U.S. Homebuyers | Housentia',
  description:
    'Escrow holds funds for property taxes and insurance. Learn how mortgage escrow accounts work, what they pay for, and how they appear on your Loan Estimate.',
  openGraph: {
    title: 'What Is Escrow? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand escrow accounts for property taxes and insurance.',
  },
};

const ARTICLE_SLUG = 'what-is-escrow';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is Escrow?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-escrow';

const FAQ_ITEMS = [
  {
    question: 'What is an escrow account?',
    answer:
      'An escrow account is a separate account where the lender holds funds to pay property taxes and homeowner\'s insurance on your behalf. Part of your monthly payment goes into escrow.',
  },
  {
    question: 'Is escrow required?',
    answer:
      'Lenders often require escrow when the down payment is less than 20%, or when the loan is backed by FHA or VA. Some conventional loans allow you to pay taxes and insurance directly.',
  },
  {
    question: 'What does escrow pay for?',
    answer:
      'Typically property taxes and homeowner\'s insurance (and sometimes mortgage insurance). It does not pay for the loan principal and interest.',
  },
  {
    question: 'Can my escrow payment change?',
    answer:
      'Yes. If property taxes or insurance premiums increase, the lender may adjust your escrow payment. You may receive an annual escrow analysis.',
  },
];

export default function WhatIsEscrowPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is Escrow? A Guide for U.S. Homebuyers',
    description:
      'Escrow accounts hold funds for property taxes and insurance. This guide explains how mortgage escrow works and how it affects your monthly payment.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Escrow? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Escrow</strong> in a mortgage context refers to an account where the lender holds funds to pay
            property taxes and homeowner&apos;s insurance on your behalf. When you have an escrow account, part of your
            monthly mortgage payment goes into this account, and the lender pays these bills when they come due.
          </p>
          <p className="text-gray-700 mb-4">
            Escrow helps ensure that property taxes and insurance are paid on time, which protects both you and the
            lender. This guide explains how escrow works, what it pays for, and how it appears on your Loan Estimate and
            Closing Disclosure.
          </p>
          <p className="text-gray-700">
            Escrow is different from mortgage insurance. For information about PMI or FHA MIP, see our{' '}
            <Link href="/mortgage/what-is-mortgage-insurance" className="text-primary hover:underline font-medium">
              What Is Mortgage Insurance?
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Your total monthly mortgage payment may include: <strong>principal</strong>, <strong>interest</strong>,{' '}
            <strong>taxes</strong>, and <strong>insurance</strong> — often called PITI. The taxes and insurance portion
            may be collected through an escrow account.
          </p>
          <p className="text-gray-700 mb-4">
            The lender estimates your annual property taxes and insurance, divides by 12, and adds that amount to your
            monthly payment. The funds are held in escrow until the bills are due, then the lender pays them.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Escrow Pays For</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Property taxes</strong> — Paid to your local government</li>
            <li><strong>Homeowner&apos;s insurance</strong> — Protects against fire, theft, and other hazards</li>
            <li><strong>Flood insurance</strong> — When required by the lender</li>
          </ul>
          <p className="text-gray-700">
            Escrow does not pay for mortgage insurance (PMI or MIP), though those may also be part of your monthly
            payment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When Is Escrow Required?</h2>
          <p className="text-gray-700 mb-4">
            Lenders often require escrow when the down payment is less than 20% (LTV above 80%), or when the loan is
            backed by FHA or VA. Some conventional loans allow borrowers to pay taxes and insurance directly, but
            escrow is common.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about escrow">
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
          glossary={[{ label: 'Escrow', href: '/mortgage-glossary/escrow' }]}
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
            Escrow requirements and practices vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
