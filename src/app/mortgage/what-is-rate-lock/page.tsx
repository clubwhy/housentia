import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Rate Lock? A Guide for U.S. Homebuyers | Housentia',
  description:
    'A mortgage rate lock can hold your interest rate for a set period while you close. Learn what a rate lock is, where to find it on a Loan Estimate, and what can change your rate.',
  openGraph: {
    title: 'What Is a Rate Lock? A Guide for U.S. Homebuyers | Housentia',
    description: 'Learn what a mortgage rate lock is and how it relates to your Loan Estimate and closing timeline.',
  },
};

const ARTICLE_SLUG = 'what-is-rate-lock';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Rate Lock?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-rate-lock';

const FAQ_ITEMS = [
  {
    question: 'What is a rate lock on a mortgage?',
    answer:
      'A rate lock (sometimes called a lock-in) is a lender’s commitment to hold your interest rate for a specified period while your loan is processed and closed, subject to the lock terms and any change in circumstances.',
  },
  {
    question: 'Where can I see if my rate is locked?',
    answer:
      'The Loan Estimate generally indicates whether your rate is locked and the lock expiration date/timeframe.',
  },
  {
    question: 'Can a locked rate still change?',
    answer:
      'It can in certain situations, such as if key details change (loan amount, down payment, verified income, credit profile) or if the lock expires before closing. Exact rules depend on the lender and lock agreement.',
  },
  {
    question: 'How long do rate locks last?',
    answer:
      'Common lock periods are 30, 45, or 60 days, though availability varies. Longer locks may have different pricing or fees.',
  },
  {
    question: 'Is a rate lock the same as APR?',
    answer:
      'No. A rate lock relates to holding an interest rate during processing. APR is a standardized annual cost measure that includes interest plus certain finance charges.',
  },
];

export default function WhatIsRateLockPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Rate Lock? A Guide for U.S. Homebuyers',
    description:
      'A rate lock is a lender commitment to hold a mortgage interest rate for a set period. This educational guide explains how locks work, where to find lock details on a Loan Estimate, and what can affect lock outcomes.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Rate Lock? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Mortgage interest rates can change day-to-day. Because a home purchase or refinance usually takes time to close,
            borrowers often hear about “locking” a rate. A <strong>rate lock</strong> is a common feature that can help
            create more predictable loan terms during the closing process.
          </p>
          <p className="text-gray-700">
            This guide explains what a rate lock is, how it shows up on mortgage disclosures, and what limitations or conditions can apply.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>rate lock</strong> generally means your interest rate will not change between the time you receive a loan offer
            and closing — <em>as long as</em> you close within the lock period and the loan details remain consistent with the lock agreement.
          </p>
          <p className="text-gray-700">
            A rate lock is not the same as a final promise to lend, and it does not replace the terms shown in your legally required
            disclosures. It is a time-bound condition related to pricing while the loan is processed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Many lenders offer different lock periods (for example, 30/45/60 days). The lock period is intended to cover the time needed
            to complete underwriting, appraisal, title work, and closing.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosures), your <strong>Loan Estimate</strong> includes a section that typically indicates:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Whether the interest rate is locked</li>
            <li>When the lock expires (or the date by which the lock must be confirmed)</li>
            <li>Whether the rate can increase after closing</li>
          </ul>
          <p className="text-gray-700 mb-4">
            A locked rate may still change if there is a “changed circumstance” (for example, key application details change) or if the
            lock expires before closing and must be extended. Extension policies vary and may include additional fees or pricing changes.
          </p>
          <p className="text-gray-700">
            If you receive a <strong>Closing Disclosure</strong>, you can compare it to your Loan Estimate and confirm the final interest rate,
            APR, and other terms before signing. The timing rules are designed to give borrowers time to review.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            A borrower receives a Loan Estimate that shows the rate is locked for 45 days. The closing is scheduled within that window.
            If the closing is delayed beyond 45 days, the borrower may need a lock extension or a new lock, depending on the lender’s policy.
          </p>
          <p className="text-gray-700">
            This example illustrates timing, not a recommendation. Actual lock terms and fees depend on the lender and the transaction.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Rate certainty during processing</strong> — Helps reduce uncertainty if rates rise before closing.</li>
                <li><strong>Transparency on disclosures</strong> — Lock status is commonly shown on the Loan Estimate.</li>
                <li><strong>Planning support</strong> — Can help borrowers plan payments based on a known rate (subject to lock terms).</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>Timing risk</strong> — If closing is delayed, extensions may be needed and may have costs.</li>
                <li><strong>Market drop risk</strong> — If rates drop after locking, the locked rate may be higher than new market rates (depending on lock options).</li>
                <li><strong>Conditions apply</strong> — Changes to the application can affect pricing even during a lock period.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Assuming a rate is locked automatically</strong>
              <p className="text-gray-700 mt-1">Some lenders require a specific lock confirmation. Always check the Loan Estimate.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Ignoring the lock expiration date</strong>
              <p className="text-gray-700 mt-1">If the lock expires before closing, pricing may change or extensions may be required.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Treating the lock as a guarantee of approval</strong>
              <p className="text-gray-700 mt-1">A lock relates to pricing; underwriting and program eligibility still apply.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Not comparing LE to CD</strong>
              <p className="text-gray-700 mt-1">Comparing disclosures helps identify changes before signing final documents.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Confusing interest rate with APR</strong>
              <p className="text-gray-700 mt-1">APR includes certain finance charges; the rate lock relates to the interest rate and timing.</p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about rate locks">
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
          <p className="text-gray-700 mb-4">This guide is based on publicly available consumer education and regulatory resources, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>TRID (TILA-RESPA Integrated Disclosures) resources</li>
            <li>Federal Reserve consumer education materials</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
            <li><a href="https://www.federalreserve.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">federalreserve.gov</a></li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Rate Lock', href: '/mortgage-glossary/rate-lock' }]}
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
          <p className="text-gray-700 text-sm mb-2">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and borrower circumstances.
          </p>
          <p className="text-gray-700 text-sm">
            Readers should consult a licensed mortgage professional or financial advisor for advice specific to their situation.
          </p>
        </section>
      </main>
    </div>
  );
}
