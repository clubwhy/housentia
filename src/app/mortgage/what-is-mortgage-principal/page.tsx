import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Mortgage Principal? A Guide for U.S. Homebuyers | Housentia',
  description:
    'Mortgage principal is the amount you borrow. Learn how it differs from interest, how payments reduce it over time, and how extra principal payments can save you money.',
  openGraph: {
    title: 'What Is Mortgage Principal? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand mortgage principal and how it affects your loan balance and payments.',
  },
};

const ARTICLE_SLUG = 'what-is-mortgage-principal';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is Mortgage Principal?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-mortgage-principal';

const FAQ_ITEMS = [
  {
    question: 'What is the difference between principal and interest?',
    answer:
      'Principal is the amount you borrowed. Interest is the cost the lender charges for lending you that money. Each monthly payment covers both: part goes to principal (reducing the balance) and part goes to interest.',
  },
  {
    question: 'How does my payment reduce the principal?',
    answer:
      'With an amortizing mortgage, each payment is split between principal and interest. Early in the loan, more goes to interest and less to principal. Over time, as the balance drops, more of each payment goes to principal.',
  },
  {
    question: 'Can I make extra principal payments?',
    answer:
      'Most U.S. mortgages allow extra principal payments without penalty. Check your loan documents for prepayment terms. Extra payments reduce the balance faster and can lower total interest paid.',
  },
  {
    question: 'Where do I see my principal balance?',
    answer:
      'Your servicer sends periodic statements showing the current principal balance. You can also check online through your servicer\'s portal or request a payoff statement.',
  },
  {
    question: 'Does principal include my down payment?',
    answer:
      'No. The down payment is what you pay upfront toward the purchase price. The principal is only the amount you borrow—the loan amount. If you buy a $400,000 home with $80,000 down, your principal is $320,000.',
  },
];

export default function WhatIsMortgagePrincipalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is Mortgage Principal? A Guide for U.S. Homebuyers',
    description:
      'Mortgage principal is the amount you borrow. This guide explains how it differs from interest, how payments reduce it over time, and how extra principal payments work.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is Mortgage Principal? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            When you take out a mortgage, you borrow a sum of money to buy a home. That borrowed amount is called the <strong>principal</strong>. It is one of the most important concepts in mortgage financing—and it is distinct from interest, which is the cost of borrowing.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding principal helps you see how your monthly payments reduce your loan balance over time, why early payments may not seem to shrink the balance quickly, and how extra principal payments can save you money. This guide explains what mortgage principal is, how it works, and how it appears on your loan documents.
          </p>
          <p className="text-gray-700">
            The U.S. mortgage market is regulated by federal laws such as the Truth in Lending Act (TILA) and the TILA-RESPA Integrated Disclosure (TRID) rules. Your Loan Estimate and Closing Disclosure show the loan amount (principal) and other key terms in a standardized format.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Mortgage Principal?</h2>
          <p className="text-gray-700 mb-4">
            <strong>Principal</strong> is the amount you borrow—the loan balance. If you buy a $400,000 home with an $80,000 down payment, your mortgage principal is $320,000. That is the amount the lender gives you, and the amount you agree to repay over the loan term.
          </p>
          <p className="text-gray-700 mb-4">
            Principal is not the same as your total housing payment. Your monthly payment often includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Principal</strong> — repaying the borrowed amount</li>
            <li><strong>Interest</strong> — the cost of borrowing</li>
            <li><strong>Taxes and insurance</strong> — often collected in an escrow account</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The principal-and-interest (P&amp;I) portion is calculated to pay off the loan over the term. For a 30-year fixed mortgage, you make 360 payments; each payment reduces the principal until the balance reaches zero.
          </p>
          <p className="text-gray-700">
            Your down payment is not part of the principal. The down payment is what you pay upfront toward the purchase price. The principal is only the amount you borrow from the lender.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Principal vs. Interest</h2>
          <p className="text-gray-700 mb-4">
            <strong>Interest</strong> is the fee the lender charges for lending you the principal. It is expressed as a percentage (the interest rate) and is calculated on the outstanding balance. Early in the loan, the balance is high, so the interest portion of each payment is larger. As you repay principal, the balance drops, and the interest portion shrinks.
          </p>
          <p className="text-gray-700 mb-4">
            With a standard amortizing mortgage, the total P&amp;I payment stays the same each month (for a fixed-rate loan), but the split between principal and interest changes. Early payments apply more to interest; later payments apply more to principal. This is called <strong>amortization</strong>—the process of paying down the loan over time.
          </p>
          <p className="text-gray-700">
            For a deeper look at how this works, see our guide on{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">
              What Is Amortization?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Principal Is Reduced Over Time</h2>
          <p className="text-gray-700 mb-4">
            Each time you make a payment, part of it goes to principal. That reduces your loan balance. The next month, interest is calculated on the new (lower) balance, so slightly more of the payment goes to principal. Over time, the principal portion of each payment grows.
          </p>
          <p className="text-gray-700 mb-4">
            An <strong>amortization schedule</strong> shows this month-by-month. It lists each payment, how much goes to interest, how much goes to principal, and the remaining balance. Many lenders provide one at closing, or you can generate one using a mortgage calculator.
          </p>
          <p className="text-gray-700">
            The loan term affects how quickly principal is repaid. A 15-year loan has higher monthly payments but pays down principal faster than a 30-year loan. Over the life of a 30-year loan, you pay significantly more in interest because the principal is repaid more slowly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Extra Principal Payments</h2>
          <p className="text-gray-700 mb-4">
            Many borrowers make extra principal payments to pay off the loan faster and reduce total interest. Most U.S. mortgages do not have prepayment penalties, but you should check your loan documents to confirm.
          </p>
          <p className="text-gray-700 mb-4">
            When you send an extra payment, specify that it should be applied to principal. Some servicers apply extra amounts to the next scheduled payment unless you direct otherwise. Applying to principal reduces the balance immediately, which can shorten the loan term and lower total interest.
          </p>
          <p className="text-gray-700">
            Even small extra principal payments can make a difference over time. A mortgage calculator can show how extra payments affect your payoff date and total interest.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where Principal Appears on Your Disclosures</h2>
          <p className="text-gray-700 mb-4">
            Under TRID, lenders must provide a <strong>Loan Estimate</strong> within three business days of receiving your application. The Loan Estimate shows the loan amount (principal), interest rate, and estimated monthly payment. The <strong>Closing Disclosure</strong>, provided at least three business days before closing, shows the final loan amount and terms.
          </p>
          <p className="text-gray-700">
            After closing, your servicer sends periodic statements showing your current principal balance, payment history, and escrow account (if applicable). You can also access this information through your servicer&apos;s online portal.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage principal">
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
            <li>Truth in Lending Act (TILA) / Regulation Z</li>
            <li>TILA-RESPA Integrated Disclosure (TRID) Rule</li>
            <li>Fannie Mae and Freddie Mac consumer materials</li>
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
          glossary={[{ label: 'Principal', href: '/mortgage-glossary/principal' }, { label: 'Amortization', href: '/mortgage-glossary/amortization' }, { label: 'PITI', href: '/mortgage-glossary/piti' }]}
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
