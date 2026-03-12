import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Amortization? A Guide for U.S. Homebuyers | Housentia',
  description:
    'Amortization explains how a mortgage is paid down over time through scheduled payments. Learn how amortization works, what an amortization schedule shows, and why early payments are mostly interest.',
  openGraph: {
    title: 'What Is Amortization? A Guide for U.S. Homebuyers | Housentia',
    description:
      'Learn how amortization works in a mortgage and how to read an amortization schedule.',
  },
};

const ARTICLE_SLUG = 'what-is-amortization';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is Amortization?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-amortization';

const FAQ_ITEMS = [
  {
    question: 'What does amortization mean in a mortgage?',
    answer:
      'Amortization is the process of paying off a loan through scheduled payments over time. Each payment includes interest and principal, and the balance declines as principal is repaid.',
  },
  {
    question: 'Why do early mortgage payments feel like “mostly interest”?',
    answer:
      'Interest is calculated on the remaining loan balance. Early in the loan, the balance is highest, so the interest portion is larger. Over time, as the balance drops, more of each payment goes to principal.',
  },
  {
    question: 'What is an amortization schedule?',
    answer:
      'An amortization schedule is a table showing each payment, how much goes to interest and principal, and the remaining balance after each payment.',
  },
  {
    question: 'Does amortization work the same for adjustable-rate mortgages?',
    answer:
      'The concept is similar, but if the interest rate changes, the payment and the interest/principal split can change as well. The exact behavior depends on the loan terms.',
  },
  {
    question: 'Do extra principal payments change amortization?',
    answer:
      'They can. Extra principal payments reduce the balance faster, which can lower total interest and shorten the payoff timeline, depending on the loan’s terms and how payments are applied.',
  },
];

export default function WhatIsAmortizationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is Amortization? A Guide for U.S. Homebuyers',
    description:
      'Amortization describes how a mortgage balance is paid down over time through scheduled payments. This educational guide explains amortization schedules and why payments shift from mostly interest to more principal over time.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Amortization? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or
          mortgage advice.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Mortgage payments can feel confusing at first — especially when you notice that early payments may not seem
            to reduce the balance very quickly. The concept that explains this is <strong>amortization</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Amortization is the structured process of paying down a loan over time through scheduled payments. It’s a
            core concept in U.S. home financing and is commonly represented by an <strong>amortization schedule</strong>
            .
          </p>
          <p className="text-gray-700">
            This guide explains amortization in plain language and shows how it affects principal, interest, and the
            remaining loan balance over time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>Amortization</strong> is the method by which a loan is repaid through a series of payments over a
            set term (for example, 30 years). For many fixed-rate mortgages, the monthly principal-and-interest (P&amp;I)
            payment is designed to be consistent, while the internal split changes over time.
          </p>
          <p className="text-gray-700 mb-4">A typical mortgage payment may include:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>
              <strong>Principal</strong> (repaying the borrowed amount)
            </li>
            <li>
              <strong>Interest</strong> (the cost of borrowing)
            </li>
            <li>
              Taxes and insurance (often paid through escrow, depending on the loan)
            </li>
          </ul>
          <p className="text-gray-700">
            Amortization primarily describes how the P&amp;I portion changes: early payments often apply more to interest,
            and later payments apply more to principal.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Interest is generally calculated on the outstanding loan balance. In the early years, the balance is high,
            so the interest portion of the payment is larger. As principal is repaid, the balance decreases, and the
            interest portion becomes smaller — so more of each payment goes to principal.
          </p>
          <p className="text-gray-700 mb-4">
            An <strong>amortization schedule</strong> shows this month-by-month. It typically includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Payment number and date</li>
            <li>Payment amount (P&amp;I)</li>
            <li>Interest portion</li>
            <li>Principal portion</li>
            <li>Remaining balance</li>
          </ul>
          <p className="text-gray-700">
            Many consumer protection rules (including TILA disclosures and TRID forms) aim to present loan terms and
            costs clearly, but the amortization schedule is a separate, often-requested document that helps borrowers
            understand how repayment progresses over time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">Here is a simplified illustration of amortization for a fixed-rate loan:</p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-4">
            <ul className="text-gray-700 space-y-1">
              <li>Loan amount: $300,000</li>
              <li>Term: 30 years</li>
              <li>Interest rate: 6.5%</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Early payments in this type of scenario typically allocate a larger portion to interest. Over time, the
              principal portion increases as the balance decreases.
            </p>
          </div>
          <p className="text-gray-700">
            Exact numbers depend on rate, term, and start date. Tools like an amortization calculator can illustrate
            the schedule using the inputs you provide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li>
                  <strong>Predictable structure</strong> — Amortization makes repayment progress measurable and
                  transparent.
                </li>
                <li>
                  <strong>Helpful for planning</strong> — Schedules show how balances change, supporting comparisons
                  across scenarios.
                </li>
                <li>
                  <strong>Supports cost understanding</strong> — Seeing total interest over time can help borrowers
                  evaluate tradeoffs (rate, term, points).
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li>
                  <strong>Often misunderstood</strong> — Borrowers may expect the balance to fall quickly early on.
                </li>
                <li>
                  <strong>Not identical across products</strong> — ARMs and special products can change payment dynamics.
                </li>
                <li>
                  <strong>Doesn’t include all housing costs</strong> — Taxes/insurance and escrow are separate from the
                  amortization of principal and interest.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Thinking the payment is “all interest”</strong>
              <p className="text-gray-700 mt-1">
                Early payments often include more interest, but principal is still being repaid (unless the loan has
                special features).
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Confusing amortization with escrow</strong>
              <p className="text-gray-700 mt-1">
                Escrow handles taxes and insurance. Amortization describes principal and interest repayment.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Forgetting term length</strong>
              <p className="text-gray-700 mt-1">
                A longer term spreads repayment over more months, which changes total interest and how quickly principal
                declines.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Assuming extra payments are always applied to principal</strong>
              <p className="text-gray-700 mt-1">
                Servicers generally apply extra amounts to principal when instructed, but borrowers should verify how
                payments are applied and whether there are any restrictions.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Treating an amortization schedule as a quote</strong>
              <p className="text-gray-700 mt-1">
                Schedules are math-based illustrations using inputs. Actual terms are defined by loan documents and
                disclosures.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about amortization">
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
            <li>Freddie Mac consumer education materials</li>
            <li>Fannie Mae consumer education materials</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                consumerfinance.gov
              </a>
            </li>
            <li>
              <a href="https://myhome.freddiemac.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                myhome.freddiemac.com
              </a>
            </li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Amortization', href: '/mortgage-glossary/amortization' }]}
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
