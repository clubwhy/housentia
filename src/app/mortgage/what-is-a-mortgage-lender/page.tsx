import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Mortgage Lender? A Guide for U.S. Homebuyers | Housentia',
  description:
    'A mortgage lender is the company that funds your loan. Learn the difference between lenders, brokers, and servicers, and how to choose the right lender for your mortgage.',
  openGraph: {
    title: 'What Is a Mortgage Lender? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand what a mortgage lender does and how lenders differ from brokers and servicers.',
  },
};

const ARTICLE_SLUG = 'what-is-a-mortgage-lender';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Mortgage Lender?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-mortgage-lender';

const FAQ_ITEMS = [
  {
    question: 'What is a mortgage lender?',
    answer:
      'A mortgage lender is the company that approves your application and provides the funds for your loan at closing. The lender may be a bank, credit union, mortgage company, or other financial institution that originates mortgages.',
  },
  {
    question: 'Is the lender the same as the servicer?',
    answer:
      'Not always. The lender originates and funds the loan. The servicer collects payments and manages your account after closing. They can be the same company, or your loan may be sold and servicing transferred to another company.',
  },
  {
    question: 'What is the difference between a lender and a mortgage broker?',
    answer:
      'A lender funds the loan directly. A mortgage broker acts as an intermediary—they work with multiple lenders to find you a loan but do not fund it themselves. Brokers earn a commission or fee from the lender or you.',
  },
  {
    question: 'Can I choose any lender?',
    answer:
      'Yes. You can apply with banks, credit unions, online lenders, or work through a mortgage broker. Shopping multiple lenders can help you compare rates and fees. Your real estate agent may suggest lenders but cannot require you to use a specific one.',
  },
  {
    question: 'What should I look for when choosing a lender?',
    answer:
      'Consider interest rate, APR, closing costs, customer service, and responsiveness. Compare Loan Estimates from multiple lenders. Check reviews and ask about their process, timeline, and communication style.',
  },
];

export default function WhatIsAMortgageLenderPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Mortgage Lender? A Guide for U.S. Homebuyers',
    description:
      'A mortgage lender is the company that funds your loan. This guide explains how lenders work, how they differ from brokers and servicers, and how to choose the right lender.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Mortgage Lender? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            When you take out a mortgage, the <strong>lender</strong> is the company that approves your application and provides the money at closing. Lenders can be banks, credit unions, mortgage companies, or other financial institutions. Understanding the role of the lender—and how it differs from a mortgage broker or servicer—helps you navigate the mortgage process.
          </p>
          <p className="text-gray-700">
            This guide explains what a mortgage lender is, the types of lenders available, and how to compare and choose one.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Mortgage Lender?</h2>
          <p className="text-gray-700 mb-4">
            A <strong>mortgage lender</strong> is the entity that originates and funds your loan. They evaluate your application, set your interest rate and terms, and provide the funds at closing. The lender may keep the loan in its portfolio or sell it to an investor (such as Fannie Mae or Freddie Mac) in the secondary market.
          </p>
          <p className="text-gray-700 mb-4">
            Key responsibilities of a lender include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Underwriting</strong> — Evaluating your credit, income, assets, and the property</li>
            <li><strong>Setting terms</strong> — Interest rate, loan amount, and loan type</li>
            <li><strong>Providing disclosures</strong> — Loan Estimate and Closing Disclosure under TRID</li>
            <li><strong>Funding the loan</strong> — Providing the money at closing</li>
          </ul>
          <p className="text-gray-700">
            The lender is the party you sign the promissory note with. Even if the loan is later sold, your original contract terms (rate, payment, due date) typically do not change.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lender vs. Broker vs. Servicer</h2>
          <p className="text-gray-700 mb-4">
            Three different parties may be involved in your mortgage:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Lender</strong> — Funds the loan. You borrow directly from them.</li>
            <li><strong>Mortgage broker</strong> — Acts as an intermediary. They shop multiple lenders on your behalf but do not fund the loan. The lender pays them a commission or you pay a fee.</li>
            <li><strong>Servicer</strong> — Collects payments and manages your account after closing. May be the same as the lender or a different company if servicing was transferred.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            For more on brokers, see our guide on{' '}
            <Link href="/mortgage/what-is-a-mortgage-broker" className="text-primary hover:underline font-medium">
              What Is a Mortgage Broker?
            </Link>
            {' '}For servicers, see{' '}
            <Link href="/mortgage/what-is-a-mortgage-servicer" className="text-primary hover:underline font-medium">
              What Is a Mortgage Servicer?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Mortgage Lenders</h2>
          <p className="text-gray-700 mb-4">
            Common types of mortgage lenders include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Banks and credit unions</strong> — Traditional institutions that may offer competitive rates and in-person service</li>
            <li><strong>Mortgage companies</strong> — Non-bank lenders that specialize in mortgages; often sell loans to investors</li>
            <li><strong>Online lenders</strong> — Digital-first lenders that may offer streamlined applications and competitive rates</li>
            <li><strong>Portfolio lenders</strong> — Lenders that keep loans in their own portfolio rather than selling them; may offer more flexible terms</li>
          </ul>
          <p className="text-gray-700">
            Each type has pros and cons. Shopping multiple lenders—including different types—can help you find the best fit for your situation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Compare Lenders</h2>
          <p className="text-gray-700 mb-4">
            When comparing lenders, consider:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Interest rate and APR</strong> — APR includes fees and gives a better picture of total cost</li>
            <li><strong>Closing costs</strong> — Compare Loan Estimates; fees can vary significantly</li>
            <li><strong>Loan programs</strong> — Conventional, FHA, VA, USDA, jumbo, etc.</li>
            <li><strong>Customer service</strong> — Responsiveness, clarity, and support during the process</li>
            <li><strong>Timeline</strong> — How quickly they can close, especially if you have a tight deadline</li>
          </ul>
          <p className="text-gray-700">
            Apply with multiple lenders within a short window (e.g., 14–45 days) so credit inquiries are typically counted as one for scoring purposes. Compare the Loan Estimates you receive.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage lenders">
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
            <li>TRID (TILA-RESPA Integrated Disclosures)</li>
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
          glossary={[{ label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' }]}
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
