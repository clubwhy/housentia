import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upfront Mortgage Insurance Explained | Housentia',
  description:
    'Upfront mortgage insurance is paid at closing. Learn how FHA upfront MIP works and how it affects your closing costs.',
  openGraph: { title: 'Upfront Mortgage Insurance Explained | Housentia', description: 'Understand upfront mortgage insurance.' },
};

const ARTICLE_SLUG = 'upfront-mortgage-insurance-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Upfront Mortgage Insurance Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/upfront-mortgage-insurance-explained';

const FAQ_ITEMS = [
  {
    question: 'What is upfront mortgage insurance?',
    answer:
      'Upfront mortgage insurance is a one-time premium paid at closing. For FHA loans, the upfront MIP is typically 1.75% of the base loan amount. It can be paid in cash or financed into the loan. It appears on your Loan Estimate and Closing Disclosure (TRID) as part of closing costs. See What Is Mortgage Insurance Premium and Monthly Mortgage Insurance Explained.',
  },
  {
    question: 'Do all loans have upfront MI?',
    answer:
      'FHA loans have upfront MIP. VA loans have a funding fee (different from mortgage insurance). Conventional loans typically have only monthly PMI, not upfront. See FHA vs Conventional Loan and What Is Mortgage Insurance.',
  },
  {
    question: 'Can I finance the upfront MIP?',
    answer:
      'Yes. For FHA loans, you can add the upfront MIP to your loan amount instead of paying it in cash at closing. This increases your loan balance and monthly mortgage payment. You pay interest on the financed amount. See What Is APR and What Is Mortgage Principal.',
  },
  {
    question: 'Is upfront MIP refundable?',
    answer:
      'FHA used to offer partial refunds when refinancing to another FHA loan within three years. That program has been discontinued. Check current FHA rules with HUD or your lender.',
  },
  {
    question: 'Where does upfront MIP appear on the Loan Estimate?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), the upfront MIP appears on your Loan Estimate and Closing Disclosure as part of closing costs. It may be shown in the services you cannot shop for, or in a separate section. The form shows your total cash to close including the MIP.',
  },
  {
    question: 'Does financing the upfront MIP affect my mortgage payment?',
    answer:
      'Yes. If you finance the upfront MIP into your loan amount, your principal increases. That raises your monthly mortgage payment (principal and interest) and the total interest you pay over the life of the loan. See What Is Amortization.',
  },
];

export default function UpfrontMortgageInsuranceExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Upfront Mortgage Insurance Explained', description: 'Upfront mortgage insurance is paid at closing. Learn how FHA upfront MIP works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Upfront Mortgage Insurance Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Upfront mortgage insurance</strong> is a one-time premium paid at closing. For FHA loans, the upfront MIP (Mortgage Insurance Premium) is typically 1.75% of the base <strong>loan amount</strong>. You can pay it in cash or finance it into the loan. It is part of your <strong>closing costs</strong> and appears on your <strong>Loan Estimate</strong> and Closing Disclosure (TRID).
          </p>
          <p className="text-gray-700 mb-4">
            FHA loans require both upfront MIP and annual MIP (paid monthly). Conventional loans typically have only monthly PMI, not upfront. Understanding upfront MIP helps first-time homebuyers budget for <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-mortgage-insurance-premium" className="text-primary hover:underline font-medium">What Is Mortgage Insurance Premium</Link> and{' '}
            <Link href="/mortgage/monthly-mortgage-insurance-explained" className="text-primary hover:underline font-medium">Monthly Mortgage Insurance Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you take an FHA loan with less than 20% down, you pay two types of mortgage insurance: upfront MIP at closing and annual MIP with each <strong>mortgage payment</strong>. The upfront MIP is a lump sum—1.75% of the base <strong>loan amount</strong>—paid once. The annual MIP is spread over 12 months and added to your payment.
          </p>
          <p className="text-gray-700 mb-4">
            You can pay the upfront MIP in cash at closing or add it to your <strong>loan amount</strong>. If you finance it, your principal increases, which raises your <strong>mortgage payment</strong> and total interest. Your <strong>Loan Estimate</strong> (TRID) shows the upfront MIP as part of <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Upfront MIP by loan type table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Upfront MIP by Loan Type</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Loan Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Upfront MI</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">FHA</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.75% of base loan amount</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Can be paid in cash or financed; plus annual MIP</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Conventional</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Typically none</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Monthly PMI only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">VA</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Funding fee (not MI)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Different structure; no mortgage insurance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Rates and rules are set by HUD for FHA. Conventional and VA follow different guidelines.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            For FHA loans, the upfront MIP is calculated as 1.75% of the base <strong>loan amount</strong> (before adding the MIP itself if financed). For example, on a $250,000 base loan, the upfront MIP is $4,375. You can pay that at closing in cash or add it to your loan—if financed, your new <strong>loan amount</strong> becomes $254,375, and you pay interest on the extra principal.
          </p>
          <p className="text-gray-700 mb-4">
            The upfront MIP is paid to HUD (or the FHA). It protects the lender in case of default. <strong>Underwriting</strong> will verify the loan meets FHA requirements. Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID, your <strong>Loan Estimate</strong> and Closing Disclosure show the upfront MIP as part of <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan buys a $300,000 home with an FHA loan (3.5% down). Base <strong>loan amount</strong>: $289,500. Upfront MIP: 1.75% × $289,500 = $5,066. Jordan finances the upfront MIP. New <strong>loan amount</strong>: $294,566. Jordan&apos;s <strong>mortgage payment</strong> (principal, interest, annual MIP) is based on $294,566. Jordan pays interest on the extra $5,066 over the life of the loan.
          </p>
          <p className="text-gray-700 mb-4">
            The upfront MIP appears on Jordan&apos;s <strong>Loan Estimate</strong> and Closing Disclosure (TRID) as part of <strong>closing costs</strong>. Jordan&apos;s cash to close does not include the $5,066 (it was financed), but the loan balance is higher. This is illustrative. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link> and{' '}
            <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Upfront mortgage insurance</strong> (FHA upfront MIP) is 1.75% of the base <strong>loan amount</strong>, paid at closing. You can pay in cash or finance it into the loan. Financing increases your <strong>loan amount</strong> and <strong>mortgage payment</strong>. It appears on your <strong>Loan Estimate</strong> (TRID) as part of <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-mortgage-insurance-premium" className="text-teal-700 underline font-medium">What Is Mortgage Insurance Premium</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Upfront MIP adds to your <strong>closing costs</strong>. If you pay it in cash, you need more at closing. If you finance it, your <strong>loan amount</strong> and <strong>mortgage payment</strong> increase. First-time homebuyers using FHA often finance the upfront MIP to reduce cash to close—but that means paying interest on it for the life of the loan.
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>Loan Estimate</strong> (TRID) shows the upfront MIP and your total cash to close. Compare the cost of financing vs. paying in cash. Consider how it affects your <strong>interest rate</strong> and <strong>mortgage payment</strong>. See{' '}
            <Link href="/mortgage/what-is-mortgage-insurance" className="text-primary hover:underline font-medium">What Is Mortgage Insurance</Link> and{' '}
            <Link href="/mortgage/monthly-mortgage-insurance-explained" className="text-primary hover:underline font-medium">Monthly Mortgage Insurance Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Paying Upfront MIP in Cash</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lower loan amount and mortgage payment</li>
                <li>No interest on the MIP amount</li>
                <li>Requires more cash at closing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Financing Upfront MIP</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Less cash needed at closing</li>
                <li>Higher loan amount and monthly payment</li>
                <li>You pay interest on the financed amount</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Forgetting the upfront MIP when budgeting:</strong> FHA loans require both upfront and annual MIP. The upfront MIP (1.75%) adds to your <strong>closing costs</strong>. Review your <strong>Loan Estimate</strong> (TRID) to see the total.</li>
            <li><strong>Assuming financing is free:</strong> Financing the upfront MIP reduces cash to close but increases your <strong>loan amount</strong> and <strong>mortgage payment</strong>. You pay interest on the financed amount over the life of the loan.</li>
            <li><strong>Confusing upfront MIP with annual MIP:</strong> Upfront MIP is paid once at closing. Annual MIP is paid monthly with your <strong>mortgage payment</strong>. FHA requires both. See <Link href="/mortgage/monthly-mortgage-insurance-explained" className="text-primary hover:underline font-medium">Monthly Mortgage Insurance Explained</Link>.</li>
            <li><strong>Not comparing FHA vs. conventional:</strong> Conventional loans typically do not have upfront MI—only monthly PMI. Compare total costs including <strong>closing costs</strong> and <strong>interest rate</strong>. See <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Under TRID, your <strong>Loan Estimate</strong> shows the upfront MIP and total cash to close. Compare it to the Closing Disclosure before closing.</li>
            <li><strong>Expecting a refund:</strong> FHA used to offer partial refunds when refinancing to another FHA loan within three years. That program has been discontinued. Check current HUD rules.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about upfront mortgage insurance">
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
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Mortgage Insurance Premiums</li>
            <li>Fannie Mae – Selling Guide (conventional loan guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide</li>
          </ul>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">MIP rates and rules are subject to change.</p>
        </section>
      </main>
    </div>
  );
}
