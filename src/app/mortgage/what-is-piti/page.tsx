import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is PITI? A Guide for U.S. Homebuyers | Housentia',
  description:
    'PITI stands for Principal, Interest, Taxes, and Insurance—the four parts of a typical mortgage payment. Learn how PITI is calculated and how lenders use it to assess affordability.',
  openGraph: {
    title: 'What Is PITI? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand PITI—Principal, Interest, Taxes, and Insurance—and how it affects your mortgage payment.',
  },
};

const ARTICLE_SLUG = 'what-is-piti';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is PITI?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-piti';

const FAQ_ITEMS = [
  {
    question: 'What does PITI stand for?',
    answer:
      'PITI stands for Principal, Interest, Taxes, and Insurance. These are the four components of a typical monthly mortgage payment. Principal and interest go to the lender; taxes and insurance are often collected in an escrow account.',
  },
  {
    question: 'Does PITI include HOA fees?',
    answer:
      'No. PITI does not include HOA fees, condo fees, or other assessments. Lenders may consider these separately when evaluating affordability. If you have HOA fees, add them to your total housing cost.',
  },
  {
    question: 'How do lenders use PITI?',
    answer:
      'Lenders use PITI to calculate your housing expense ratio (front-end DTI). Typically, your PITI should not exceed a certain percentage of your gross monthly income—often 28% to 31% for conventional loans, though guidelines vary.',
  },
  {
    question: 'Is my PITI payment fixed?',
    answer:
      'Principal and interest are fixed for a fixed-rate mortgage. Taxes and insurance can change over time, so your total PITI may increase if property taxes or insurance premiums rise. Your servicer will adjust your escrow accordingly.',
  },
  {
    question: 'Do I always pay taxes and insurance through escrow?',
    answer:
      'Not always. Some lenders require escrow; others allow you to pay taxes and insurance directly. If you have a high loan-to-value ratio, escrow is often required. Check your loan terms.',
  },
];

export default function WhatIsPitiPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is PITI? A Guide for U.S. Homebuyers',
    description:
      'PITI stands for Principal, Interest, Taxes, and Insurance. This guide explains each component and how lenders use PITI to assess affordability.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is PITI? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            When you hear about a &quot;mortgage payment,&quot; it often means more than just principal and interest. For most homeowners, the total monthly housing cost includes four parts: <strong>Principal</strong>, <strong>Interest</strong>, <strong>Taxes</strong>, and <strong>Insurance</strong>. Together, these are called <strong>PITI</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding PITI helps you budget accurately and understand how lenders evaluate whether you can afford a loan. Lenders use your PITI (and other debts) to calculate your debt-to-income ratio (DTI), which is a key factor in mortgage approval.
          </p>
          <p className="text-gray-700">
            This guide explains what each part of PITI means, how they are combined into one payment, and how lenders use PITI when underwriting your application.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Does PITI Mean?</h2>
          <p className="text-gray-700 mb-4">
            <strong>P</strong> — <strong>Principal</strong> is the amount you borrow. Each payment reduces the loan balance. For more detail, see our guide on{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">
              What Is Mortgage Principal?
            </Link>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>I</strong> — <strong>Interest</strong> is the cost the lender charges for lending you the principal. Your interest rate determines how much you pay in interest each month. Over time, the interest portion of each payment decreases as the principal balance drops.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>T</strong> — <strong>Taxes</strong> refers to property taxes. Local governments assess property taxes based on the value of your home. Taxes are typically paid once or twice a year, but many lenders collect a portion each month in an escrow account and pay the bill when it is due.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>I</strong> — <strong>Insurance</strong> refers to homeowner&apos;s insurance (hazard insurance). Lenders require it to protect their collateral. If you are in a flood zone, you may also need flood insurance. Like taxes, insurance is often collected monthly through escrow.
          </p>
          <p className="text-gray-700">
            Not every loan includes taxes and insurance in the monthly payment. Some borrowers pay them directly. But when lenders talk about &quot;housing expense&quot; or &quot;PITI,&quot; they typically mean all four components, whether paid through escrow or separately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How PITI Is Calculated</h2>
          <p className="text-gray-700 mb-4">
            <strong>Principal and interest</strong> are determined by your loan amount, interest rate, and loan term. For a fixed-rate mortgage, this portion stays the same for the life of the loan. You can estimate it using a mortgage calculator.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Taxes</strong> are based on your property&apos;s assessed value and local tax rates. The lender typically divides the annual tax bill by 12 and collects that amount each month. Property taxes can change when the assessment or tax rate changes.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Insurance</strong> is based on your policy premium. The lender divides the annual premium by 12 and collects that amount each month. Insurance costs can change when you renew the policy or if the insurer adjusts rates.
          </p>
          <p className="text-gray-700">
            If you have <strong>private mortgage insurance (PMI)</strong> or <strong>mortgage insurance premiums (MIP)</strong> on an FHA loan, those are often included in the monthly payment as well. Some definitions of PITI include mortgage insurance; others treat it separately. For affordability calculations, lenders typically include it in the housing expense.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Lenders Use PITI</h2>
          <p className="text-gray-700 mb-4">
            Lenders use PITI to assess whether you can afford the loan. The <strong>front-end ratio</strong> (or housing ratio) is your monthly PITI divided by your gross monthly income. Conventional loan guidelines often cap this at 28% to 31%, though some programs allow higher ratios with compensating factors.
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>back-end ratio</strong> (total DTI) includes PITI plus all other monthly debt payments—car loans, student loans, credit cards, etc.—divided by gross income. Lenders typically prefer a total DTI of 36% to 43% or lower, depending on the loan type.
          </p>
          <p className="text-gray-700">
            For more on how DTI affects approval, see our guide on{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">
              What Is DTI?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Escrow and PITI</h2>
          <p className="text-gray-700 mb-4">
            When your lender requires an <strong>escrow account</strong>, they collect the tax and insurance portions of PITI each month along with your principal and interest. The servicer holds these funds and pays your property taxes and insurance when they are due.
          </p>
          <p className="text-gray-700 mb-4">
            Escrow can make budgeting easier because you pay a consistent amount each month instead of large lump sums. However, if taxes or insurance increase, your servicer will adjust your monthly payment to cover the shortfall. You will receive an escrow analysis at least once a year.
          </p>
          <p className="text-gray-700">
            For more on how escrow works, see our guide on{' '}
            <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">
              What Is Escrow?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What PITI Does Not Include</h2>
          <p className="text-gray-700 mb-4">
            PITI does not include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>HOA or condo fees</strong> — If your property has these, add them to your total housing cost when budgeting.</li>
            <li><strong>Utilities</strong> — Electric, gas, water, internet, etc. are not part of PITI.</li>
            <li><strong>Maintenance and repairs</strong> — Budget separately for ongoing upkeep.</li>
            <li><strong>Closing costs</strong> — One-time fees paid at settlement, not part of the monthly payment.</li>
          </ul>
          <p className="text-gray-700">
            When estimating affordability, consider your full housing cost, not just PITI.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about PITI">
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
            <li>Fannie Mae and Freddie Mac underwriting guidelines</li>
            <li>Federal Housing Administration (FHA) guidelines</li>
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
          glossary={[{ label: 'PITI', href: '/mortgage-glossary/piti' }, { label: 'Escrow Account', href: '/mortgage-glossary/escrow-account' }]}
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
