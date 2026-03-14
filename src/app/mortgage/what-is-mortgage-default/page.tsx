import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Mortgage Default? A Guide for U.S. Homeowners | Housentia',
  description:
    'Mortgage default means failing to meet your loan terms, usually by not making payments. Learn what default is, how it differs from delinquency, and what happens if you default.',
  openGraph: {
    title: 'What Is Mortgage Default? A Guide for U.S. Homeowners | Housentia',
    description: 'Understand what mortgage default means and the consequences.',
  },
};

const ARTICLE_SLUG = 'what-is-mortgage-default';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is Mortgage Default?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-mortgage-default';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage default?',
    answer:
      'Mortgage default means you have failed to meet the terms of your loan. The most common form is non-payment—missing one or more payments. Your loan documents define what constitutes default. Default can lead to late fees, credit damage, and eventually foreclosure.',
  },
  {
    question: 'What is the difference between default and delinquency?',
    answer:
      'Delinquency means you are past due on a payment. Default is a broader term—it can include delinquency but also other breaches of the loan agreement (e.g., not maintaining insurance, not paying property taxes). In practice, people often use them together: delinquency leads to default, and default can lead to foreclosure.',
  },
  {
    question: 'How many missed payments before foreclosure?',
    answer:
      'It varies by lender and state. Many lenders consider you in default after one missed payment. Foreclosure typically does not start immediately—there is usually a process that includes notices and opportunities to cure. Serious delinquency (e.g., 90+ days) often precedes foreclosure. Contact your servicer as soon as you have trouble.',
  },
  {
    question: 'What can I do if I am in default?',
    answer:
      'Contact your servicer immediately. Options may include forbearance (temporary pause), repayment plans, or loan modification. The sooner you reach out, the more options you may have. Do not ignore the situation—it will not go away and can lead to foreclosure.',
  },
  {
    question: 'Does default affect my credit?',
    answer:
      'Yes. Missed payments and default are typically reported to credit bureaus and can significantly damage your credit score. The impact can last for years. Avoiding default or addressing it quickly can limit the damage.',
  },
];

export default function WhatIsMortgageDefaultPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is Mortgage Default? A Guide for U.S. Homeowners',
    description:
      'Mortgage default means failing to meet your loan terms. This guide explains what default is, how it differs from delinquency, and what to do if you are struggling.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Mortgage Default? A Guide for U.S. Homeowners" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage default</strong> means you have failed to meet the terms of your loan agreement. The most common form is non-payment—missing one or more mortgage payments. Default can lead to late fees, damage to your credit, and in the worst case, foreclosure.
          </p>
          <p className="text-gray-700">
            Understanding what default is and what to do if you are struggling can help you protect your home and your finances. This guide explains default, how it relates to delinquency, and the options available if you cannot make your payments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Mortgage Default?</h2>
          <p className="text-gray-700 mb-4">
            <strong>Default</strong> is a breach of your loan contract. Your promissory note and deed of trust (or mortgage) define the terms. Typically, default includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Non-payment</strong> — Failing to make required payments when due</li>
            <li><strong>Failure to maintain insurance</strong> — Not keeping homeowner&apos;s insurance as required</li>
            <li><strong>Failure to pay property taxes</strong> — If not in escrow, not paying taxes when due</li>
            <li><strong>Other breaches</strong> — Such as transferring the property without lender approval in some cases</li>
          </ul>
          <p className="text-gray-700">
            Once you are in default, the lender or servicer may charge late fees, report the delinquency to credit bureaus, and eventually pursue foreclosure. The exact process depends on your loan documents and state law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Default vs. Delinquency</h2>
          <p className="text-gray-700 mb-4">
            <strong>Delinquency</strong> means you are past due on a payment. You become delinquent as soon as you miss a payment (or after the grace period, depending on the loan).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Default</strong> is a broader legal term. Non-payment is a form of default. So delinquency (missing payments) typically leads to or constitutes default. In everyday language, people often use the terms together.
          </p>
          <p className="text-gray-700">
            For more on delinquency—including how many days past due and what servicers may do—see our guide on{' '}
            <Link href="/mortgage/what-is-mortgage-delinquency" className="text-primary hover:underline font-medium">
              What Is Mortgage Delinquency?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens After Default?</h2>
          <p className="text-gray-700 mb-4">
            The typical progression:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Missed payment</strong> — You may receive a reminder or late notice. Late fees may apply.</li>
            <li><strong>30–60 days past due</strong> — Servicer may contact you more frequently. Credit reporting may reflect the delinquency.</li>
            <li><strong>90+ days past due</strong> — Serious delinquency. Servicer may send a demand letter or notice of intent to foreclose. Loss mitigation options may still be available.</li>
            <li><strong>Foreclosure process</strong> — If the default is not cured, the lender may initiate foreclosure. Timeline and process vary by state.</li>
          </ul>
          <p className="text-gray-700">
            CFPB servicing rules require servicers to follow certain procedures before foreclosing, including evaluating borrowers for loss mitigation. Contact your servicer as soon as you know you will have trouble—do not wait.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Options If You Are in Default</h2>
          <p className="text-gray-700 mb-4">
            If you cannot make your payments, contact your servicer immediately. Possible options include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Forbearance</strong> — Temporary pause or reduction of payments</li>
            <li><strong>Repayment plan</strong> — Spreading past-due amounts over future payments</li>
            <li><strong>Loan modification</strong> — Changing loan terms to make payments more affordable</li>
            <li><strong>Short sale or deed-in-lieu</strong> — In some cases, alternatives to foreclosure</li>
          </ul>
          <p className="text-gray-700">
            The servicer must follow loss mitigation procedures when you submit a complete application. You may need to provide financial documents. Be persistent and respond to requests promptly.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage default">
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <p className="text-gray-700 mb-4">This guide is based on publicly available consumer education resources, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>CFPB mortgage servicing rules and loss mitigation</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                consumerfinance.gov
              </a>
            </li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Default', href: '/mortgage-glossary/default' }, { label: 'Foreclosure', href: '/mortgage-glossary/foreclosure' }]}
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
            If you are struggling with your mortgage, contact your servicer or a HUD-approved housing counselor for personalized assistance.
          </p>
        </section>
      </main>
    </div>
  );
}
