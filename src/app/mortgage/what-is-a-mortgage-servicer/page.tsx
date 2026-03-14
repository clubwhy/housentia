import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Mortgage Servicer? A Guide for U.S. Homebuyers | Housentia',
  description:
    'A mortgage servicer collects your payments, manages your escrow account, and handles customer service. Learn how servicers work, when servicing can transfer, and your rights under CFPB rules.',
  openGraph: {
    title: 'What Is a Mortgage Servicer? A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand what a mortgage servicer does and your rights when servicing is transferred.',
  },
};

const ARTICLE_SLUG = 'what-is-a-mortgage-servicer';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Mortgage Servicer?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-mortgage-servicer';

const FAQ_ITEMS = [
  {
    question: 'Is the servicer the same as my lender?',
    answer:
      'Not always. The lender is the company that originated your loan. The servicer is the company that collects payments and manages your account. They can be the same, or your loan may have been sold and servicing transferred to another company.',
  },
  {
    question: 'Can my servicer change?',
    answer:
      'Yes. Lenders often sell loans to investors, and servicing may be transferred to a different company. Your loan terms do not change. You will receive a notice with the new servicer\'s contact information and the date the transfer takes effect.',
  },
  {
    question: 'What if I have a problem with my servicer?',
    answer:
      'Contact your servicer first. If the issue is not resolved, you can file a complaint with the Consumer Financial Protection Bureau (CFPB). Servicers must comply with CFPB servicing rules, including error resolution and loss mitigation procedures.',
  },
  {
    question: 'Do I make payments to the servicer or the lender?',
    answer:
      'You make payments to the servicer. The servicer is the company that collects your monthly payment, applies it to principal and interest, manages your escrow account, and sends you statements. Your closing documents will show who your servicer is.',
  },
  {
    question: 'What happens to my escrow account if servicing transfers?',
    answer:
      'Your escrow balance and account transfer to the new servicer. The new servicer will notify you about the transfer and any changes to how you make payments. Your tax and insurance payments continue to be made on your behalf.',
  },
];

export default function WhatIsAMortgageServicerPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Mortgage Servicer? A Guide for U.S. Homebuyers',
    description:
      'A mortgage servicer collects your payments, manages your escrow account, and handles customer service. This guide explains how servicers work and your rights under CFPB rules.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Mortgage Servicer? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            When you take out a mortgage, you may receive your loan from one company (the <strong>lender</strong>) but make your monthly payments to another (the <strong>mortgage servicer</strong>). The servicer is the company that administers your loan after it is funded—collecting payments, managing your escrow account, sending statements, and handling customer service.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding the role of the mortgage servicer can help you know who to contact for payment questions, escrow issues, or if you have trouble making payments. Servicers are regulated by the Consumer Financial Protection Bureau (CFPB), which has established rules to protect borrowers.
          </p>
          <p className="text-gray-700">
            This guide explains what a mortgage servicer does, how servicing can be transferred, and your rights as a borrower.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Mortgage Servicer?</h2>
          <p className="text-gray-700 mb-4">
            A <strong>mortgage servicer</strong> is the company responsible for collecting your monthly payments and managing your loan account after closing. The servicer may be the same company that lent you the money, or it may be a different company that specializes in servicing.
          </p>
          <p className="text-gray-700 mb-4">
            Key responsibilities of a mortgage servicer include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Collecting payments</strong> — Processing your monthly principal, interest, taxes, and insurance (PITI)</li>
            <li><strong>Managing escrow</strong> — Holding funds for property taxes and homeowner&apos;s insurance and paying them when due</li>
            <li><strong>Sending statements</strong> — Providing periodic account statements showing balance, payment history, and escrow activity</li>
            <li><strong>Handling payoffs</strong> — Processing requests for payoff quotes and releasing the lien when the loan is paid off</li>
            <li><strong>Customer service</strong> — Answering questions about your account, payment options, and modifications</li>
          </ul>
          <p className="text-gray-700">
            The servicer does not own your loan. They act on behalf of the owner (investor) of the loan. When your loan is sold to Fannie Mae, Freddie Mac, or another investor, the servicing rights may be transferred to a different company.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Servicer vs. Lender</h2>
          <p className="text-gray-700 mb-4">
            The <strong>lender</strong> (or originator) is the company that approved your application and funded the loan at closing. The <strong>servicer</strong> is the company that collects payments and manages your account afterward. They can be the same—many banks both originate and service loans—or they can be different.
          </p>
          <p className="text-gray-700 mb-4">
            When you close on a mortgage, your closing documents will identify your initial servicer. If servicing is transferred later, you will receive a notice from both the old and new servicer. Your loan terms (rate, payment amount, due date) do not change when servicing transfers. Only the company you send payments to may change.
          </p>
          <p className="text-gray-700">
            For more on the parties involved in a mortgage, see our guide on{' '}
            <Link href="/mortgage/what-is-a-mortgage" className="text-primary hover:underline font-medium">
              What Is a Mortgage?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When Servicing Is Transferred</h2>
          <p className="text-gray-700 mb-4">
            Lenders often sell loans to investors in the secondary market. When a loan is sold, the right to service it may be transferred to another company. This is common and does not affect your loan terms.
          </p>
          <p className="text-gray-700 mb-4">
            Under CFPB rules, you must receive:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>A notice from your <strong>current servicer</strong> at least 15 days before the transfer (or with the next statement)</li>
            <li>A notice from your <strong>new servicer</strong> within 15 days after the transfer</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The notices must include the effective date of the transfer, the new servicer&apos;s contact information, and information about your payment. You cannot be charged a fee for the transfer. During a 60-day period after the transfer, the new servicer cannot report you as late if you sent a timely payment to the old servicer.
          </p>
          <p className="text-gray-700">
            Make sure to update any automatic payments or online bill pay when you receive a servicing transfer notice.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under CFPB Servicing Rules</h2>
          <p className="text-gray-700 mb-4">
            The CFPB has established mortgage servicing rules that protect borrowers. Key protections include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Periodic statements</strong> — Servicers must send you a statement each billing cycle with balance, payment breakdown, and transaction history</li>
            <li><strong>Payment application</strong> — Payments must be applied as of the date received, and excess payments must be applied to principal unless you direct otherwise</li>
            <li><strong>Error resolution</strong> — Servicers must acknowledge written error notices within 5 days and resolve or explain within 30 days</li>
            <li><strong>Loss mitigation</strong> — If you are struggling to pay, servicers must follow procedures for evaluating you for options such as forbearance or loan modification</li>
            <li><strong>Payoff statements</strong> — You can request a payoff statement, and the servicer must provide it within a reasonable time</li>
          </ul>
          <p className="text-gray-700">
            If you believe your servicer has violated these rules, you can file a complaint with the CFPB at consumerfinance.gov.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Escrow and the Servicer</h2>
          <p className="text-gray-700 mb-4">
            If your loan has an escrow account for property taxes and insurance, the servicer manages it. They collect a portion of your annual tax and insurance costs each month, hold the funds, and pay the bills when they are due.
          </p>
          <p className="text-gray-700 mb-4">
            Servicers must conduct an escrow analysis at least once a year. If there is a shortfall (e.g., because taxes increased), they may increase your monthly payment to cover it. If there is a surplus, they may refund it or apply it to future payments. You have the right to receive an escrow account statement.
          </p>
          <p className="text-gray-700">
            For more on how escrow works, see our guide on{' '}
            <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">
              What Is Escrow?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">If You Have Trouble Making Payments</h2>
          <p className="text-gray-700 mb-4">
            If you are struggling to make your mortgage payment, contact your servicer as soon as possible. Do not wait until you are behind. Servicers may offer options such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Forbearance</strong> — Temporary pause or reduction of payments</li>
            <li><strong>Repayment plans</strong> — Spreading past-due amounts over future payments</li>
            <li><strong>Loan modification</strong> — Changing loan terms to make payments more affordable</li>
          </ul>
          <p className="text-gray-700">
            The servicer must follow loss mitigation procedures when you submit a complete application. Ignoring missed payments can lead to late fees, damage to your credit, and eventually foreclosure. Reach out early.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage servicers">
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
            <li>Consumer Financial Protection Bureau (CFPB) — Mortgage Servicing Rules</li>
            <li>Real Estate Settlement Procedures Act (RESPA)</li>
            <li>CFPB consumer guides on mortgage servicing</li>
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
          glossary={[{ label: 'Mortgage Servicing', href: '/mortgage-glossary/servicing' }, { label: 'Escrow Account', href: '/mortgage-glossary/escrow-account' }]}
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
