import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Mortgage Delinquency? A Guide for U.S. Homeowners | Housentia',
  description:
    'Mortgage delinquency means you are past due on a payment. Learn how delinquency is measured, what happens at 30, 60, and 90 days, and what to do if you fall behind.',
  openGraph: {
    title: 'What Is Mortgage Delinquency? A Guide for U.S. Homeowners | Housentia',
    description: 'Understand what mortgage delinquency means and the steps to take if you fall behind.',
  },
};

const ARTICLE_SLUG = 'what-is-mortgage-delinquency';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is Mortgage Delinquency?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-mortgage-delinquency';

const FAQ_ITEMS = [
  {
    question: 'What is mortgage delinquency?',
    answer:
      'Mortgage delinquency means you are past due on a payment. You are typically considered delinquent when you miss a payment or when the grace period has passed without payment. Delinquency can lead to late fees, credit damage, and eventually default and foreclosure.',
  },
  {
    question: 'When am I considered delinquent?',
    answer:
      'It depends on your loan. Many mortgages have a grace period (e.g., until the 15th of the month). If you do not pay by the end of the grace period, you are usually considered delinquent. Check your loan documents or contact your servicer for your specific terms.',
  },
  {
    question: 'What is serious delinquency?',
    answer:
      'Serious delinquency is often defined as 90 or more days past due. At this stage, the servicer may send stronger notices, and foreclosure may be a risk. Credit impact is significant. Contact your servicer immediately if you are approaching or past 90 days.',
  },
  {
    question: 'Does delinquency affect my credit?',
    answer:
      'Yes. Missed payments are typically reported to credit bureaus. The impact depends on how late you are (30, 60, 90+ days). Delinquency can significantly lower your credit score and stay on your report for years.',
  },
  {
    question: 'What should I do if I am delinquent?',
    answer:
      'Contact your servicer as soon as possible. Explain your situation and ask about options such as forbearance, repayment plans, or loan modification. Do not ignore letters or calls. The sooner you act, the more options you may have.',
  },
];

export default function WhatIsMortgageDelinquencyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is Mortgage Delinquency? A Guide for U.S. Homeowners',
    description:
      'Mortgage delinquency means you are past due on a payment. This guide explains how delinquency is measured and what to do if you fall behind.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Mortgage Delinquency? A Guide for U.S. Homeowners" breadcrumbs={BREADCRUMBS} />
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
            <strong>Mortgage delinquency</strong> means you are past due on a mortgage payment. You become delinquent when you miss a payment or when the grace period (if any) has passed. Delinquency can result in late fees, damage to your credit, and if it continues, default and foreclosure.
          </p>
          <p className="text-gray-700">
            This guide explains what delinquency is, how it is measured (30, 60, 90 days), and what steps to take if you fall behind on your payments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Mortgage Delinquency?</h2>
          <p className="text-gray-700 mb-4">
            <strong>Delinquency</strong> means you have not made a required payment by the due date (or by the end of the grace period). Lenders and servicers track how many days past due you are—commonly 30, 60, 90, or 120+ days.
          </p>
          <p className="text-gray-700 mb-4">
            Delinquency is different from being a few days late within a grace period. Many loans allow payment by the 15th of the month without penalty. After that, you are typically considered delinquent and may be charged a late fee.
          </p>
          <p className="text-gray-700">
            Delinquency typically leads to or is part of <strong>default</strong>—a breach of your loan terms. For more on default, see our{' '}
            <Link href="/mortgage/what-is-mortgage-default" className="text-primary hover:underline font-medium">
              What Is Mortgage Default?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stages of Delinquency</h2>
          <p className="text-gray-700 mb-4">
            Servicers and investors often categorize delinquency by days past due:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>30 days past due</strong> — First missed payment. You may receive a reminder. Late fee may apply. May be reported to credit bureaus.</li>
            <li><strong>60 days past due</strong> — Second missed payment. Servicer may contact you more frequently. Credit impact increases.</li>
            <li><strong>90 days past due (serious delinquency)</strong> — Third missed payment. Risk of foreclosure increases. Servicer may send a demand letter or notice of intent to foreclose. Loss mitigation options may still be available.</li>
            <li><strong>120+ days</strong> — Foreclosure process may be underway, depending on the lender and state.</li>
          </ul>
          <p className="text-gray-700">
            The exact timeline varies. Some loans have longer grace periods or different procedures. State law also affects foreclosure timelines.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Credit Reporting</h2>
          <p className="text-gray-700 mb-4">
            Missed mortgage payments are typically reported to the three major credit bureaus (Equifax, Experian, TransUnion). The report may show:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>30 days late</li>
            <li>60 days late</li>
            <li>90 days late</li>
            <li>120+ days late</li>
          </ul>
          <p className="text-gray-700">
            Each stage can further damage your credit score. Delinquencies can remain on your report for up to seven years. Catching up and staying current can help limit further damage, but the history will still appear.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do If You Are Delinquent</h2>
          <p className="text-gray-700 mb-4">
            If you have missed a payment or know you will:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Contact your servicer immediately</strong> — Do not wait. Explain your situation and ask about options.</li>
            <li><strong>Ask about forbearance</strong> — A temporary pause or reduction of payments may be available.</li>
            <li><strong>Ask about repayment plans</strong> — You may be able to spread past-due amounts over future payments.</li>
            <li><strong>Ask about loan modification</strong> — In some cases, the servicer can change terms to make payments more affordable.</li>
            <li><strong>Consider a HUD-approved housing counselor</strong> — Free or low-cost counseling may help you understand your options.</li>
          </ul>
          <p className="text-gray-700">
            Under CFPB rules, servicers must follow loss mitigation procedures when you submit a complete application. Respond to any requests for documents promptly.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage delinquency">
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
            <li>CFPB mortgage servicing rules</li>
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
          glossary={[{ label: 'Delinquency', href: '/mortgage-glossary/delinquency' }, { label: 'Default', href: '/mortgage-glossary/default' }]}
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
