import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Mortgages Work: A Complete Guide for U.S. Homebuyers | Housentia',
  description: 'Learn how mortgages work from application to payoff. Understand principal, interest, amortization, how monthly payments work, and the process from application through closing.',
  openGraph: {
    title: 'How Mortgages Work: A Complete Guide for U.S. Homebuyers | Housentia',
    description: 'Understand how mortgages work—from application to payoff—for U.S. homebuyers.',
  },
};

const ARTICLE_SLUG = 'how-mortgages-work';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'How Mortgages Work',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-mortgages-work';

const FAQ_ITEMS = [
  {
    question: 'How does a mortgage payment get applied each month?',
    answer: 'Each payment goes toward principal and interest. Early in the loan, most of the payment goes to interest; over time, more goes to principal. If you have escrow, part also goes to taxes and insurance.',
  },
  {
    question: 'What happens to my mortgage after closing?',
    answer: 'The loan may be sold to an investor, but your terms do not change. A servicer collects your payments and manages your account. You may receive a notice if servicing is transferred.',
  },
  {
    question: 'Can I pay off my mortgage early?',
    answer: 'Most U.S. mortgages do not have prepayment penalties. You can make extra principal payments or pay off the loan early. Check your loan documents for any prepayment terms.',
  },
  {
    question: 'How long does it take to get a mortgage?',
    answer: 'Typically 30–45 days from application to closing. The timeline depends on the lender, loan type, and how quickly you provide required documents.',
  },
  {
    question: 'What documents do I receive when getting a mortgage?',
    answer: 'Under TRID, you receive a Loan Estimate within 3 business days of application and a Closing Disclosure at least 3 business days before closing.',
  },
];

export default function HowMortgagesWorkPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'How Mortgages Work: A Complete Guide for U.S. Homebuyers',
    description: 'Learn how mortgages work from application to payoff. Understand principal, interest, amortization, how monthly payments work, and the process from application through closing.',
    url: PAGE_URL,
    datePublished: '2026-03-13',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Mortgages Work: A Complete Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A mortgage is a loan secured by your home. Understanding how mortgages work—from the moment you apply to the day you make your last payment—can help you navigate the process with confidence and make informed decisions. This guide walks through the mechanics: how you borrow, how payments are applied, and what happens at each stage.
          </p>
          <p className="text-gray-700 mb-4">
            The U.S. mortgage market is regulated by federal laws such as the Truth in Lending Act (TILA) and the TILA-RESPA Integrated Disclosure (TRID) rules. These regulations require lenders to provide clear, standardized disclosures. The Consumer Financial Protection Bureau (CFPB) oversees many of these requirements to protect consumers.
          </p>
          <p className="text-gray-700">
            This content is for general educational purposes only. Mortgage terms and requirements vary by lender and borrower circumstances. Consult a licensed mortgage professional for advice specific to your situation.
          </p>
        </section>

        {/* The Basics: Principal, Interest, Amortization */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Basics: Principal, Interest, and Amortization</h2>
          <p className="text-gray-700 mb-4">
            When you take out a mortgage, you borrow a sum of money called the <strong>principal</strong>. For example, if you buy a $400,000 home with an $80,000 down payment, your principal is $320,000. The lender charges you <strong>interest</strong>—a percentage of the principal—as the cost of borrowing. Your interest rate determines how much you pay in interest over the life of the loan.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Amortization</strong> is the process of paying off the loan over time. With a standard amortizing mortgage, each monthly payment covers both principal and interest. Early in the loan, most of the payment goes to interest and only a small portion to principal. As the balance decreases, the interest portion shrinks and the principal portion grows. By the end of the term, the loan is fully paid off.
          </p>
          <p className="text-gray-700 mb-4">
            For a 30-year fixed mortgage, you make 360 payments. Each payment is the same amount (for principal and interest), but the split between principal and interest changes over time. An amortization schedule shows this breakdown for every payment. Lenders often provide one at closing, or you can generate one using a mortgage calculator.
          </p>
          <p className="text-gray-700">
            Understanding amortization helps you see why extra principal payments early in the loan can significantly reduce total interest paid. Even small additional payments can shorten the loan term and save thousands of dollars over time. Check your loan documents for any prepayment terms.
          </p>
        </section>

        {/* The Mortgage Process: Application to Closing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mortgage Process: From Application to Closing</h2>
          <p className="text-gray-700 mb-4">
            Getting a mortgage typically follows a predictable path. Here is how it works from start to finish.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>1. Application.</strong> You submit an application with your lender or mortgage broker. You provide personal information, income, assets, debts, and the property. Under TRID, once the lender has received your application (including name, income, SSN, property address, and loan amount), they must send you a Loan Estimate within three business days. This form shows estimated terms, rates, and closing costs.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>2. Processing and underwriting.</strong> The lender verifies your information (income, employment, assets, credit) and orders an appraisal of the property. Lenders must make a reasonable, good-faith determination that you can repay the loan (Ability to Repay / Qualified Mortgage rules). They may request additional documents. Once approved, you receive a &quot;clear to close&quot; or similar notice.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>3. Closing disclosure.</strong> At least three business days before closing, you receive the Closing Disclosure. It mirrors the Loan Estimate format and shows the final terms. Compare it to your Loan Estimate to catch changes. You have the right to ask questions before closing.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>4. Closing.</strong> At the closing table, you sign the promissory note (your promise to repay), the mortgage or deed of trust (the security instrument that creates the lien), and other documents. The lender funds the loan, and the title is transferred to you. You receive the keys and begin making payments.
          </p>
          <p className="text-gray-700">
            The entire process typically takes 30–45 days, though it can vary by lender, loan type, and market conditions.
          </p>
        </section>

        {/* How Monthly Payments Work */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Monthly Payments Work</h2>
          <p className="text-gray-700 mb-4">
            Your monthly mortgage payment often includes more than principal and interest. Many lenders require an <strong>escrow account</strong> for property taxes and homeowner&apos;s insurance. They collect a portion of these costs each month and pay them when due. Your total housing payment is often described as <strong>PITI</strong>: Principal, Interest, Taxes, and Insurance.
          </p>
          <p className="text-gray-700 mb-4">
            If you have a conventional loan with less than 20% down, you may also pay <strong>private mortgage insurance (PMI)</strong> until you reach about 80% loan-to-value. FHA loans require mortgage insurance premiums (MIP). These costs are typically included in your monthly payment.
          </p>
          <p className="text-gray-700 mb-4">
            Your payment is due on the same date each month (e.g., the 1st). There is usually a grace period (often 15 days) before you are considered late. Late payments can result in fees and damage your credit. If you miss payments, the lender may eventually foreclose. Federal and state laws provide certain protections and procedures that lenders must follow.
          </p>
          <p className="text-gray-700">
            You can set up automatic payments through your servicer or bank. Many servicers also offer online portals where you can view your balance, payment history, and escrow account.
          </p>
        </section>

        {/* What Happens After Closing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens After Closing</h2>
          <p className="text-gray-700 mb-4">
            Your loan may be sold to another investor shortly after closing. This is common and does not change your terms—your interest rate, payment amount, and due date stay the same. If the loan is sold, you will receive a notice with the new servicer&apos;s contact information. The servicer is the company that collects your payments and manages your account.
          </p>
          <p className="text-gray-700 mb-4">
            Servicers must comply with CFPB servicing rules. They must send you periodic statements, apply payments correctly, and handle errors and disputes. If you have trouble making payments, contact your servicer early. They may offer options such as forbearance or payment plans. Do not ignore missed payments.
          </p>
          <p className="text-gray-700">
            When you pay off the loan—whether by making all scheduled payments or paying early—the lender or servicer releases the lien. You receive a satisfaction of mortgage or similar document. You then hold clear title to the property with no mortgage obligation.
          </p>
        </section>

        {/* Key Parties Involved */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Parties Involved</h2>
          <p className="text-gray-700 mb-4">
            Several parties play roles in how mortgages work. The <strong>lender</strong> (or mortgagee) provides the loan—a bank, credit union, or mortgage company. The <strong>borrower</strong> (or mortgagor) is you—the person who receives the loan and agrees to repay it. You sign the promissory note and the mortgage or deed of trust.
          </p>
          <p className="text-gray-700 mb-4">
            A <strong>mortgage broker</strong> acts as an intermediary, shopping multiple lenders to find loan options. Brokers do not fund the loan; they are compensated through fees or lender-paid commissions, which must be disclosed under RESPA.
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>mortgage servicer</strong> collects your payments, manages your escrow account, and handles customer service after the loan is funded. The servicer may be the same as the lender, or the loan may be sold and servicing transferred.
          </p>
          <p className="text-gray-700">
            The <strong>title company</strong> or settlement agent conducts the closing, ensures clear title, and records the mortgage with the local government. They play a neutral role in the transaction.
          </p>
        </section>

        {/* The Secondary Market */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Secondary Market</h2>
          <p className="text-gray-700 mb-4">
            Many mortgages are sold to investors in the secondary market. Fannie Mae and Freddie Mac (government-sponsored enterprises) purchase conforming loans that meet their guidelines. Ginnie Mae securitizes FHA, VA, and USDA loans. Other investors buy non-conforming or jumbo loans.
          </p>
          <p className="text-gray-700 mb-4">
            When your loan is sold, your terms do not change. The new owner holds the rights to the loan, but you still make payments to the servicer (which may or may not change). The sale of mortgages allows lenders to free up capital to make new loans, which helps keep rates competitive.
          </p>
          <p className="text-gray-700">
            You can check your loan&apos;s current owner through your servicer or by reviewing your mortgage documents. If you have an FHA or VA loan, the loan may be backed by the government even if the lender is a private bank.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Mortgages are amortizing loans: each payment covers principal and interest, with the principal portion growing over time.</li>
            <li>The process typically takes 30–45 days: application, Loan Estimate, underwriting, Closing Disclosure, and closing.</li>
            <li>Your monthly payment often includes PITI (principal, interest, taxes, insurance) and may include mortgage insurance.</li>
            <li>Your loan may be sold after closing, but your terms do not change. The servicer collects payments and manages your account.</li>
            <li>Lenders must provide a Loan Estimate and Closing Disclosure under TRID rules.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions">
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

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <p className="text-gray-700 mb-4">
            Information in this guide is based on publicly available educational materials from:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>U.S. Department of Housing and Urban Development (HUD)</li>
            <li>Federal Housing Administration (FHA)</li>
            <li>Department of Veterans Affairs (VA)</li>
            <li>Fannie Mae and Freddie Mac</li>
            <li>Truth in Lending Act (TILA) / Regulation Z</li>
            <li>TILA-RESPA Integrated Disclosure (TRID) Rule</li>
          </ul>
          <p className="text-gray-700 mb-4">Readers may consult consumerfinance.gov, hud.gov, and fanniemae.com for additional information.</p>
        </section>

        {/* Related Guides */}
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />

        {/* Related links */}
        <RelatedLinks
          glossary={[{ label: 'PITI', href: '/mortgage-glossary/piti' }, { label: 'Amortization', href: '/mortgage-glossary/amortization' }, { label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' }]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        {/* Educational Disclaimer */}
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
