import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Mortgage? A Complete Guide for U.S. Homebuyers | Housentia',
  description: 'A mortgage is a loan secured by real property. Learn how mortgages work, key terms, types of loans, and the regulatory framework that protects borrowers in the United States.',
  openGraph: {
    title: 'What Is a Mortgage? A Complete Guide for U.S. Homebuyers | Housentia',
    description: 'Learn how mortgages work, key terms, loan types, and the regulatory framework that protects U.S. borrowers.',
  },
};

const ARTICLE_SLUG = 'what-is-a-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is a Mortgage?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-a-mortgage';

const FAQ_ITEMS = [
  {
    question: 'What is the difference between a mortgage and a loan?',
    answer: 'A mortgage is a specific type of loan secured by real property. If you fail to repay, the lender can foreclose on the property. Other loans may be unsecured or secured by different collateral.',
  },
  {
    question: 'Who owns the home when you have a mortgage?',
    answer: 'You own the home. The mortgage is a lien on the property, giving the lender the right to foreclose if you default. Once the loan is paid off, the lien is released and you hold clear title.',
  },
  {
    question: 'What documents do I receive when getting a mortgage?',
    answer: 'Under TRID rules, you receive a Loan Estimate within 3 business days of application and a Closing Disclosure at least 3 business days before closing. These forms standardize cost and term disclosures.',
  },
  {
    question: 'Can I pay off my mortgage early?',
    answer: 'Most mortgages in the U.S. do not have prepayment penalties. You can typically make extra principal payments or pay off the loan early. Check your loan documents for any prepayment terms.',
  },
  {
    question: 'What happens if I default on my mortgage?',
    answer: 'Default can lead to foreclosure, where the lender takes possession of the property to recover the debt. Federal and state laws provide certain protections and procedures that lenders must follow.',
  },
];

export default function WhatIsAMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is a Mortgage? A Complete Guide for U.S. Homebuyers',
    description: 'A mortgage is a loan secured by real property. This guide explains how mortgages work, key terms, types of loans, and the regulatory framework that protects borrowers in the United States.',
    url: PAGE_URL,
    datePublished: '2025-03-12',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Mortgage? A Complete Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            For most Americans, buying a home is the largest financial transaction they will ever make. Because few people can pay the full purchase price in cash, mortgages have become the primary way to finance homeownership in the United States. Understanding what a mortgage is and how it works can help you navigate the home buying process with greater confidence.
          </p>
          <p className="text-gray-700 mb-4">
            A mortgage is a loan secured by real property—typically a house or condominium. When you take out a mortgage, you borrow money from a lender and agree to repay it over time, usually with interest. The property itself serves as collateral: if you fail to make payments, the lender may have the right to foreclose and take possession of the home to recover the debt.
          </p>
          <p className="text-gray-700 mb-4">
            The U.S. mortgage market is heavily regulated to protect consumers. Federal laws such as the Truth in Lending Act (TILA), the Real Estate Settlement Procedures Act (RESPA), and the TILA-RESPA Integrated Disclosure (TRID) rules require lenders to provide clear, standardized disclosures about loan terms and costs. The Consumer Financial Protection Bureau (CFPB) oversees many of these requirements.
          </p>
          <p className="text-gray-700">
            This guide provides a foundational overview of mortgages for U.S. homebuyers. It covers the basic definition, how mortgages work, common types of loans, key parties involved, and the regulatory framework that shapes the industry.
          </p>
        </section>

        {/* What Is a Mortgage Defined */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Mortgage?</h2>
          <p className="text-gray-700 mb-4">
            In legal and financial terms, a mortgage is a secured loan used to purchase or refinance real estate. The word &quot;mortgage&quot; comes from Old French and Latin roots meaning &quot;death pledge&quot;—historically, the obligation ended when the debt was paid or the property was forfeited. Today, a mortgage is simply an agreement between a borrower and a lender: you receive funds to buy a home, and in exchange you promise to repay the loan plus interest over a set period.
          </p>
          <p className="text-gray-700 mb-4">
            The mortgage creates a lien on the property. A lien is a legal claim that gives the lender the right to seize and sell the property if you default on the loan. Importantly, you—the borrower—are the owner of the home. The lender does not own your house; they hold a security interest in it until the loan is paid in full. When you make your final payment, the lender releases the lien, and you hold clear title to the property.
          </p>
          <p className="text-gray-700 mb-4">
            Mortgages in the United States are typically amortizing loans. This means each monthly payment covers both principal (the amount borrowed) and interest (the cost of borrowing). Over time, the principal balance decreases until the loan is fully repaid. A standard 30-year fixed-rate mortgage, for example, is designed to be paid off completely after 360 monthly payments.
          </p>
          <p className="text-gray-700">
            Mortgages can be used for several purposes: purchasing a new home, refinancing an existing loan to lower the rate or change the term, or accessing home equity through a cash-out refinance. Each scenario has different implications for terms, costs, and qualification requirements.
          </p>
        </section>

        {/* How Mortgages Work—Key Concepts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Mortgages Work: Key Concepts</h2>
          <p className="text-gray-700 mb-4">
            To understand mortgages, it helps to know a few core concepts that appear throughout the lending process.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Principal</strong> is the amount you borrow. If you buy a $400,000 home with a $80,000 down payment, your mortgage principal is $320,000. Your monthly payment is calculated to pay off this principal over the loan term, plus interest.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Interest rate</strong> is the cost of borrowing, expressed as a percentage. Lenders charge interest to compensate for the risk of lending and the time value of money. Rates can be fixed (unchanged for the life of the loan) or adjustable (can change after an initial period). Your interest rate directly affects your monthly payment and total interest paid over the life of the loan.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Loan term</strong> is the length of time you have to repay. Common terms are 15, 20, or 30 years. A shorter term usually means higher monthly payments but less total interest. A longer term spreads payments over more time, reducing the monthly amount but increasing total interest.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Down payment</strong> is the amount you pay upfront toward the purchase price. Lenders typically require a minimum down payment, which varies by loan type. Conventional loans often require 3% to 20% or more; FHA loans may allow as little as 3.5%; VA and USDA loans can offer zero down payment for eligible borrowers. A larger down payment generally improves your loan terms and may eliminate the need for mortgage insurance.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>PITI</strong> stands for Principal, Interest, Taxes, and Insurance. Many lenders collect property taxes and homeowner&apos;s insurance in an escrow account and include them in your monthly payment. Your total housing cost is often described in terms of PITI when evaluating affordability.
          </p>
          <p className="text-gray-700">
            <strong>Closing costs</strong> are fees paid at settlement to finalize the loan. They can include origination fees, appraisal fees, title insurance, recording fees, and other third-party charges. Under TRID, lenders must provide a Loan Estimate and Closing Disclosure that itemize these costs in a standardized format.
          </p>
        </section>

        {/* Types of Mortgages */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Mortgages</h2>
          <p className="text-gray-700 mb-4">
            Mortgages come in many forms. The right type for you depends on your financial situation, how long you plan to stay in the home, and your risk tolerance.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Conventional loans</strong> are not backed by the federal government. They follow guidelines set by Fannie Mae and Freddie Mac (or non-conforming &quot;jumbo&quot; limits for larger loans). Conventional loans often require higher credit scores and down payments but can offer competitive rates and flexible terms.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>FHA loans</strong> are insured by the Federal Housing Administration. They are designed to help first-time and lower-credit borrowers with more lenient qualification requirements and lower down payments. Borrowers pay mortgage insurance premiums (MIP) to protect the lender.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>VA loans</strong> are guaranteed by the Department of Veterans Affairs for eligible veterans, active-duty service members, and certain spouses. They often require no down payment and no private mortgage insurance, with competitive rates.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>USDA loans</strong> are backed by the U.S. Department of Agriculture for eligible rural and suburban properties. They can offer 100% financing for qualified borrowers.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Fixed-rate mortgages</strong> lock in your interest rate for the entire loan term. Your principal and interest payment stays the same from month to month (excluding changes in taxes and insurance). This predictability appeals to many borrowers.
          </p>
          <p className="text-gray-700">
            <strong>Adjustable-rate mortgages (ARMs)</strong> have an interest rate that can change after an initial fixed period (e.g., 5, 7, or 10 years). ARMs often start with a lower rate than fixed loans but carry the risk of future rate increases. Lenders must disclose how the rate can change under TILA and Regulation Z.
          </p>
        </section>

        {/* Parties Involved */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Parties Involved in a Mortgage</h2>
          <p className="text-gray-700 mb-4">
            Several parties play roles in the mortgage process. Understanding who does what can help you navigate the journey from application to closing.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Lender</strong> (or mortgagee) is the institution that provides the loan. Lenders can be banks, credit unions, mortgage companies, or non-bank lenders. They evaluate your application, set loan terms, and fund the loan at closing.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Borrower</strong> (or mortgagor) is you—the person who receives the loan and agrees to repay it. You sign the promissory note (the promise to repay) and the mortgage or deed of trust (the security instrument that creates the lien).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage broker</strong> acts as an intermediary between you and lenders. Brokers shop multiple lenders to find loan options but do not fund the loan themselves. They are compensated through fees or lender-paid commissions, which must be disclosed under RESPA.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage servicer</strong> is the company that collects your monthly payments, manages your escrow account, and handles customer service after the loan is funded. The servicer may be the same as the lender, or the loan may be sold and servicing transferred to another company. Servicers must comply with CFPB servicing rules.
          </p>
          <p className="text-gray-700">
            <strong>Title company</strong> or settlement agent conducts the closing, ensures clear title, and records the mortgage with the local government. They play a neutral role in the transaction and are regulated under RESPA.
          </p>
        </section>

        {/* Regulatory Framework */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Framework and Consumer Protection</h2>
          <p className="text-gray-700 mb-4">
            The U.S. mortgage market operates under a robust regulatory framework designed to protect borrowers and ensure transparency. Key laws and rules include:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Truth in Lending Act (TILA)</strong> requires lenders to disclose the cost of credit in a clear, standardized way. Key disclosures include the annual percentage rate (APR), finance charges, and total amount financed. TILA is implemented through Regulation Z, which is enforced by the CFPB.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Real Estate Settlement Procedures Act (RESPA)</strong> governs the closing process and prohibits kickbacks and referral fees that could inflate costs. RESPA requires a standardized Good Faith Estimate (now integrated into the Loan Estimate) and HUD-1 Settlement Statement (now integrated into the Closing Disclosure) so borrowers can compare offers.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>TILA-RESPA Integrated Disclosure (TRID)</strong> rules, effective since 2015, combined and simplified the disclosure requirements. Lenders must provide a Loan Estimate within three business days of receiving a complete application, and a Closing Disclosure at least three business days before closing. These forms use consistent terminology and layout so consumers can more easily compare loan offers and understand costs.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Qualified Mortgage (QM)</strong> rules establish standards for &quot;ability to repay.&quot; Lenders must make a reasonable, good-faith determination that you can repay the loan before extending credit. QM loans have certain legal protections for lenders and must meet specific criteria regarding debt-to-income ratios, loan features, and fees.
          </p>
          <p className="text-gray-700">
            These regulations do not guarantee loan approval or specific terms. They ensure that when you apply for a mortgage, you receive clear, comparable information so you can make informed decisions.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Mortgages</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Enables Homeownership</strong> — Most people cannot pay cash for a home. Mortgages make it possible to buy with a down payment and manageable monthly payments.</li>
                <li><strong>Build Equity</strong> — As you pay down principal, you build ownership in the property. Over time, your equity can grow as the home appreciates.</li>
                <li><strong>Potential Tax Benefits</strong> — Mortgage interest and property taxes may be deductible for those who itemize on federal tax returns. Tax rules change; consult a tax professional.</li>
                <li><strong>Predictable Payments</strong> — With a fixed-rate mortgage, your principal and interest payment stays the same for the life of the loan.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>Long-Term Commitment</strong> — A 30-year mortgage is a decades-long obligation. Your financial situation may change.</li>
                <li><strong>Interest Costs</strong> — Over the life of the loan, you pay significantly more than the principal amount due to interest.</li>
                <li><strong>Risk of Foreclosure</strong> — If you cannot make payments, you could lose the home. Default and foreclosure have serious financial and credit consequences.</li>
                <li><strong>Closing Costs</strong> — Origination fees, appraisal, title insurance, and other costs add to the total expense of obtaining a mortgage.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Misconceptions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Misconceptions</h2>
          <p className="text-gray-700 mb-4">
            Several myths about mortgages persist. Clarifying them can help you approach the process more realistically.
          </p>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Myth: The bank owns your home.</strong>
              <p className="text-gray-700 mt-1">You own the home. The mortgage is a lien that gives the lender the right to foreclose if you default. Once the loan is paid off, the lien is released and you hold full ownership.</p>
            </li>
            <li>
              <strong className="text-gray-900">Myth: You need 20% down to buy a house.</strong>
              <p className="text-gray-700 mt-1">Many loan programs allow lower down payments. FHA loans can go as low as 3.5%; VA and USDA loans may allow 0% down for eligible borrowers. Conventional loans can start at 3% in some programs. A larger down payment can improve terms but is not always required.</p>
            </li>
            <li>
              <strong className="text-gray-900">Myth: Shopping for rates will hurt your credit.</strong>
              <p className="text-gray-700 mt-1">Credit scoring models typically treat multiple mortgage inquiries within a short window (often 14–45 days) as a single inquiry. Shopping multiple lenders for the best rate generally has minimal impact on your score.</p>
            </li>
            <li>
              <strong className="text-gray-900">Myth: The Loan Estimate is a final offer.</strong>
              <p className="text-gray-700 mt-1">The Loan Estimate is an estimate based on the information you provide. Terms can change if your application changes or if you choose different options. The Closing Disclosure reflects the final terms before closing.</p>
            </li>
            <li>
              <strong className="text-gray-900">Myth: You must use the lender your real estate agent recommends.</strong>
              <p className="text-gray-700 mt-1">You have the right to choose your own lender. While agent recommendations can be helpful, you should shop and compare offers from multiple lenders to find the best terms for your situation.</p>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about mortgages">
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
            Information in this guide is based on publicly available educational materials and regulatory resources from:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>U.S. Department of Housing and Urban Development (HUD)</li>
            <li>Federal Housing Administration (FHA)</li>
            <li>Department of Veterans Affairs (VA)</li>
            <li>U.S. Department of Agriculture (USDA)</li>
            <li>Fannie Mae</li>
            <li>Freddie Mac</li>
            <li>Truth in Lending Act (TILA) / Regulation Z</li>
            <li>Real Estate Settlement Procedures Act (RESPA)</li>
            <li>TILA-RESPA Integrated Disclosure (TRID) Rule</li>
          </ul>
          <p className="text-gray-700 mb-4">Readers may consult the following resources for additional information:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
            <li><a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hud.gov</a></li>
            <li><a href="https://www.fanniemae.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">fanniemae.com</a></li>
            <li><a href="https://www.freddiemac.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">freddiemac.com</a></li>
          </ul>
        </section>

        {/* Related Guides */}
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />

        {/* Related links */}
        <RelatedLinks
          glossary={[{ label: 'PITI', href: '/mortgage-glossary/piti' }, { label: 'Amortization', href: '/mortgage-glossary/amortization' }]}
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
