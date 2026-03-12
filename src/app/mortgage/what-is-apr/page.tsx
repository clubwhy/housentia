import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is APR? A Guide for U.S. Homebuyers | Housentia',
  description: 'APR (Annual Percentage Rate) helps you compare mortgage costs. Learn how APR works, how it differs from the interest rate, and where to find it on Loan Estimate and Closing Disclosure.',
  openGraph: {
    title: 'What Is APR? A Guide for U.S. Homebuyers | Housentia',
    description: 'APR helps you compare mortgage costs. Learn how it works and where to find it on your loan disclosures.',
  },
};

const ARTICLE_SLUG = 'what-is-apr';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Is APR?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-is-apr';

const FAQ_ITEMS = [
  {
    question: 'Is APR the same as the interest rate?',
    answer: 'No. The interest rate reflects the cost of borrowing the loan principal, while APR includes the interest rate plus certain additional finance charges required by law.',
  },
  {
    question: 'Why is APR usually higher than the interest rate?',
    answer: 'APR often includes certain fees and finance charges associated with the mortgage. These costs increase the calculated annual borrowing cost.',
  },
  {
    question: 'Where can borrowers see the APR?',
    answer: 'APR appears on official mortgage disclosure forms including the Loan Estimate (LE) and Closing Disclosure (CD) required under TRID regulations.',
  },
  {
    question: 'Does APR include property taxes and insurance?',
    answer: 'No. Property taxes and homeowner\'s insurance are typically not included in APR calculations.',
  },
  {
    question: 'Why do regulators require APR disclosures?',
    answer: 'APR disclosures help improve transparency in lending. Under the Truth in Lending Act, lenders must provide standardized cost information so consumers can better understand loan terms.',
  },
];

export default function WhatIsAPRPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Is APR? A Guide for U.S. Homebuyers',
    description: 'APR (Annual Percentage Rate) is a standardized measure of the yearly cost of borrowing for a mortgage, including interest and certain fees. This guide explains how APR works and how to use it when comparing loan offers.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is APR? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When shopping for a mortgage in the United States, homebuyers will encounter many financial terms that may seem confusing at first. One of the most commonly misunderstood terms is APR, which stands for Annual Percentage Rate.
          </p>
          <p className="text-gray-700 mb-4">
            APR is a standardized measure designed to help consumers understand the true yearly cost of borrowing money for a mortgage. Unlike the interest rate alone, APR includes certain additional loan costs required by federal disclosure rules.
          </p>
          <p className="text-gray-700 mb-4">
            The concept of APR exists largely because of consumer protection laws such as the Truth in Lending Act (TILA) and the TILA-RESPA Integrated Disclosure (TRID) rules. These regulations require lenders to present loan costs in a clear and consistent format so borrowers can compare mortgage offers more easily.
          </p>
          <p className="text-gray-700">
            Understanding APR does not require advanced financial knowledge. With a basic explanation, most homebuyers can use it as a helpful reference when reviewing mortgage disclosures.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            APR represents the annual cost of borrowing money, expressed as a percentage.
          </p>
          <p className="text-gray-700 mb-4">
            While the interest rate reflects the cost of borrowing the loan principal, APR generally includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>The interest rate</li>
            <li>Certain loan origination fees</li>
            <li>Mortgage insurance (in some cases)</li>
            <li>Discount points (if applicable)</li>
            <li>Other specific finance charges required by regulation</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Because APR includes these additional costs, it is often higher than the stated interest rate.
          </p>
          <p className="text-gray-700 mb-4">
            The purpose of APR is not to predict future costs or guarantee loan affordability. Instead, it provides a standardized way to compare loan offers, as required under federal consumer protection laws.
          </p>
          <p className="text-gray-700 mb-4">
            APR disclosures appear in several official mortgage documents, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Loan Estimate (LE)</strong> — required under TRID</li>
            <li><strong>Closing Disclosure (CD)</strong> — provided before closing</li>
          </ul>
          <p className="text-gray-700">
            These documents are regulated by the Consumer Financial Protection Bureau (CFPB) to ensure borrowers receive transparent information about loan costs.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            APR is calculated using a formula defined under the Truth in Lending Act (TILA). The calculation spreads certain loan costs over the life of the loan and converts them into an annual percentage.
          </p>
          <p className="text-gray-700 mb-4">
            In simple terms, the calculation considers:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Loan Amount</li>
            <li>Interest Rate</li>
            <li>Loan Term</li>
            <li>Upfront Finance Charges</li>
          </ul>
          <p className="text-gray-700 mb-4">
            These finance charges may include items such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Loan origination fees</li>
            <li>Discount points</li>
            <li>Certain underwriting or processing fees</li>
            <li>Mortgage insurance in specific loan types</li>
          </ul>
          <p className="text-gray-700 mb-4">
            However, not every closing cost is included in APR. For example, APR typically does not include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Property taxes</li>
            <li>Homeowner&apos;s insurance</li>
            <li>Title insurance</li>
            <li>Escrow deposits</li>
            <li>Recording fees</li>
            <li>Some third-party service fees</li>
          </ul>
          <p className="text-gray-700">
            Federal disclosure rules determine exactly which costs must be included in APR calculations. Because APR includes more costs than the interest rate alone, it can help illustrate how fees influence the overall cost of borrowing.
          </p>
        </section>

        {/* Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Consider a simplified example involving two hypothetical mortgage offers.
          </p>
          <div className="grid gap-6 md:grid-cols-2 mb-4">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Loan Offer A</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Loan amount: $400,000</li>
                <li>Interest rate: 6.25%</li>
                <li>Loan term: 30 years</li>
                <li>Origination fees: $2,000</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">APR might be approximately <strong>6.35%</strong>.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Loan Offer B</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Loan amount: $400,000</li>
                <li>Interest rate: 6.10%</li>
                <li>Loan term: 30 years</li>
                <li>Origination fees: $8,000</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">APR might be approximately <strong>6.45%</strong>.</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Although Loan B shows a lower interest rate, the higher upfront fees increase the APR. In this example, APR helps illustrate that higher fees may increase the overall borrowing cost, even if the interest rate appears lower. This type of standardized disclosure helps consumers compare mortgage offers more consistently, which is a core goal of federal mortgage transparency regulations.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">Pros</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Standardized Comparison Tool</strong> — APR was created to help consumers compare loans more easily. Because the calculation method is defined by federal law, lenders must follow consistent rules.</li>
                <li><strong>Greater Cost Transparency</strong> — APR includes certain finance charges, which helps illustrate how fees affect the cost of borrowing.</li>
                <li><strong>Consumer Protection</strong> — APR disclosures are required under TILA and TRID, which are designed to improve transparency in mortgage lending.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-amber-900 mb-4">Cons</h3>
              <ul className="space-y-2 text-amber-800">
                <li><strong>Not All Costs Are Included</strong> — APR does not include every expense associated with buying a home. Costs such as property taxes, insurance, and escrow payments are excluded.</li>
                <li><strong>Assumes the Full Loan Term</strong> — APR calculations typically assume the borrower keeps the loan for its full term. In reality, many homeowners refinance or sell before the loan matures.</li>
                <li><strong>Can Be Misinterpreted</strong> — Some borrowers mistakenly assume APR represents the exact future cost of a loan. However, it is primarily a comparison tool, not a prediction.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <p className="text-gray-700 mb-4">
            Understanding APR can help avoid several common misunderstandings among homebuyers.
          </p>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Assuming APR Is the Monthly Payment</strong>
              <p className="text-gray-700 mt-1">APR is not the monthly mortgage payment. Monthly payments depend on several factors including loan balance, interest rate, loan term, taxes, and insurance.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Believing the Lowest Interest Rate Is Always the Lowest Cost</strong>
              <p className="text-gray-700 mt-1">Some loans advertise lower interest rates but include higher fees. APR helps reflect those costs in a standardized percentage.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Ignoring Loan Fees</strong>
              <p className="text-gray-700 mt-1">Focusing only on interest rates may cause borrowers to overlook significant upfront costs. APR includes some of these charges for transparency.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Assuming APR Includes Taxes and Insurance</strong>
              <p className="text-gray-700 mt-1">APR typically does not include property taxes or homeowner&apos;s insurance, which are often part of the monthly payment.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 5: Assuming APR Predicts Long-Term Outcomes</strong>
              <p className="text-gray-700 mt-1">APR reflects costs based on the loan&apos;s terms at the time of disclosure. Changes such as refinancing, early payoff, or loan modification may affect the overall cost.</p>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about APR">
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
            <li>Fannie Mae</li>
            <li>Freddie Mac</li>
            <li>Truth in Lending Act (TILA)</li>
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

        {/* Related Guides — topic cluster internal linking */}
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />

        {/* Related links: glossary, calculator */}
        <RelatedLinks
          glossary={[{ label: 'APR', href: '/mortgage-glossary/apr' }]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        {/* Educational Disclaimer (repeated for compliance) */}
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
