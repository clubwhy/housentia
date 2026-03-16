import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Down Payment Requirements Explained | Housentia',
  description:
    'Down payment requirements vary by loan type. Learn conventional, FHA, VA, and USDA down payment rules.',
  openGraph: { title: 'Down Payment Requirements Explained | Housentia', description: 'Understand down payment requirements.' },
};

const ARTICLE_SLUG = 'down-payment-requirements-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Down Payment Requirements Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/down-payment-requirements-explained';

const FAQ_ITEMS = [
  {
    question: 'What is the minimum down payment for a conventional loan?',
    answer:
      'As low as 3% for qualified borrowers (e.g., first-time buyers, HomeReady, Home Possible). PMI is typically required below 20%. Requirements vary by lender and program.',
  },
  {
    question: 'What is the minimum down payment for an FHA loan?',
    answer:
      '3.5% with a 580+ credit score. 10% with 500–579. FHA mortgage insurance is required regardless of down payment size.',
  },
  {
    question: 'Do VA and USDA require a down payment?',
    answer:
      'VA: often 0% for eligible veterans and service members. USDA: 0% for eligible rural properties. Both have funding fees or guarantee fees that can be financed.',
  },
  {
    question: 'How does down payment affect my interest rate?',
    answer:
      'Larger down payments often mean better rates and no PMI at 20% or more. Lenders view lower loan-to-value (LTV) as lower risk. See our What Is LTV guide for details.',
  },
  {
    question: 'Can I use gift funds for my down payment?',
    answer:
      'Yes, many programs allow gift funds from family members. Documentation is required. See our Gift Funds for Down Payment Explained guide.',
  },
  {
    question: 'Where does my down payment appear on the Loan Estimate?',
    answer:
      'The Loan Estimate shows your loan amount and estimated cash to close. Your down payment is part of cash to close. TRID requires lenders to provide this within 3 business days of application.',
  },
];

export default function DownPaymentRequirementsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Down Payment Requirements Explained', description: 'Learn down payment requirements by loan type.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Down Payment Requirements Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Your <strong>down payment</strong> is the portion of the purchase price you pay upfront—it reduces your <strong>loan amount</strong> and affects your <strong>loan-to-value ratio (LTV)</strong>, <strong>interest rate</strong>, and whether you need mortgage insurance. Down payment requirements vary by loan type: conventional can go as low as 3%; FHA 3.5% (or 10% with lower credit); VA and USDA often 0% for eligible borrowers.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), your lender provides a <strong>Loan Estimate</strong> within 3 business days of application. That form shows your estimated <strong>loan amount</strong>, <strong>mortgage payment</strong>, and cash to close—which includes your down payment. Understanding down payment requirements helps you choose the right loan program and plan your savings. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, <Link href="/mortgage/can-you-buy-a-house-with-no-down-payment" className="text-primary hover:underline font-medium">Can You Buy a House with No Down Payment</Link>, and <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            The down payment is the money you put toward the purchase price at closing. If you buy a $300,000 home with 10% down, you pay $30,000 and borrow $270,000. Your <strong>loan amount</strong> is $270,000; your LTV is 90%. A larger down payment means a smaller <strong>loan amount</strong>, lower LTV, and often a lower <strong>interest rate</strong>—because the lender has less risk.
          </p>
          <p className="text-gray-700 mb-4">
            Each loan type has different minimums. Conventional loans (Fannie Mae, Freddie Mac) may allow 3% for qualified borrowers—often first-time buyers or those using programs like HomeReady or Home Possible. FHA allows 3.5% with a 580+ credit score, or 10% with 500–579. VA and USDA often allow 0% for eligible borrowers. These are program minimums; individual lenders may have overlays requiring more.
          </p>
          <p className="text-gray-700">
            Your down payment is separate from <strong>closing costs</strong>. Closing costs cover fees for appraisal, title, origination, and more. You may need to bring your down payment plus closing costs to closing—unless you negotiate seller concessions or roll some costs into the loan where permitted. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link> for how down payment and LTV relate.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply for a mortgage, the lender will <strong>underwrite</strong> your application. They verify your income, assets, and credit—and confirm that your down payment meets the program requirements. For conventional loans below 20% down, private mortgage insurance (PMI) is typically required. For FHA, mortgage insurance is required regardless of down payment. VA and USDA have funding or guarantee fees instead.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Typical down payment requirements by loan type:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Conventional</strong> — As low as 3% (qualified programs); 20% avoids PMI</li>
            <li><strong>FHA</strong> — 3.5% (580+ credit) or 10% (500–579)</li>
            <li><strong>VA</strong> — 0% for eligible veterans; funding fee may apply</li>
            <li><strong>USDA</strong> — 0% for eligible rural properties; guarantee fee applies</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> will show your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and estimated cash to close. Cash to close includes your down payment plus <strong>closing costs</strong> minus any credits. The RESPA (Real Estate Settlement Procedures Act) requires clear disclosure of these amounts. Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link> is calculated using your <strong>mortgage payment</strong>—not your down payment. A larger down payment reduces your <strong>loan amount</strong> and thus your payment, which can help with DTI.
          </p>
          <p className="text-gray-700">
            Down payment sources must be documented. Gifts from family members are allowed under many programs with a gift letter. See <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment Explained</Link>. Savings, investments, and proceeds from a home sale are common sources. <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> explain how your payment is applied over time.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor is buying a $350,000 home. They have $35,000 saved—enough for 10% down ($35,000) plus some <strong>closing costs</strong>. Their <strong>loan amount</strong> would be $315,000. At 6.5% <strong>interest rate</strong>, their <strong>mortgage payment</strong> (principal and interest) would be about $1,991. They would need PMI because they are below 20% down—adding roughly $150–200 per month.
          </p>
          <p className="text-gray-700 mb-4">
            Taylor could instead put 5% down ($17,500) and use the rest for closing costs and reserves. That would increase their <strong>loan amount</strong> to $332,500 and their payment to about $2,102—plus higher PMI. Or they could wait and save for 20% down ($70,000) to avoid PMI and potentially get a better <strong>interest rate</strong>. The tradeoff: waiting means more time renting; buying now with less down means a higher payment and PMI.
          </p>
          <p className="text-gray-700 mb-4">
            Taylor receives their <strong>Loan Estimate</strong> within 3 business days. It shows the <strong>loan amount</strong>, rate, <strong>mortgage payment</strong>, and cash to close for the 10% down scenario. They compare with an FHA offer: 3.5% down ($12,250) but FHA mortgage insurance for the life of the loan if they put less than 10% down. The example is illustrative—actual requirements and costs vary by lender and program.
          </p>
          <p className="text-gray-700">
            The key takeaway: down payment affects your <strong>loan amount</strong>, <strong>mortgage payment</strong>, LTV, and whether you pay PMI or other insurance. Choosing the right program depends on your savings, credit, and goals.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, saving for a down payment is often the biggest hurdle. Understanding that you may not need 20%—and that programs like FHA, VA, USDA, and conventional 3% options exist—can open doors. A smaller down payment means more of your purchase is financed, which increases your <strong>loan amount</strong> and <strong>mortgage payment</strong>. But it also means you can buy sooner with less savings.
          </p>
          <p className="text-gray-700 mb-4">
            Your down payment also affects your <strong>interest rate</strong>. Lenders often offer better rates for lower LTV (higher down payment) because there is less risk. At 20% down, you typically avoid PMI on conventional loans—saving hundreds per month. Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link> is based on your <strong>mortgage payment</strong>; a larger down payment means a smaller loan and lower payment, which can help you qualify for more house or leave room in your budget.
          </p>
          <p className="text-gray-700">
            Plan for both down payment and <strong>closing costs</strong>. The Loan Estimate breaks these out. Some programs allow seller concessions or gift funds to help. See <Link href="/mortgage/can-you-buy-a-house-with-no-down-payment" className="text-primary hover:underline font-medium">Can You Buy a House with No Down Payment</Link> for VA and USDA options. TRID was designed to make costs transparent—use the Loan Estimate to compare offers and understand what you will need at closing.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Different Down Payment Levels</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Larger Down Payment (e.g., 20%+)</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>No PMI on conventional loans</li>
                <li>Often better interest rates</li>
                <li>Smaller loan amount and mortgage payment</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Requires more savings</li>
                <li>May delay buying</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Smaller Down Payment (e.g., 3–10%)</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li>Buy sooner with less savings</li>
                <li>Keep cash for emergencies or repairs</li>
                <li>Programs like FHA, VA, USDA support low down payments</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>PMI or mortgage insurance typically required</li>
                <li>Higher loan amount and payment</li>
                <li>May qualify for less house based on DTI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Forgetting closing costs:</strong> Down payment is not the only cash you need. Budget for <strong>closing costs</strong> too—often 2–5% of the loan amount.</li>
            <li><strong>Assuming 20% is required:</strong> Many programs allow 3%, 3.5%, or 0% down. Check FHA, VA, USDA, and conventional programs.</li>
            <li><strong>Not documenting gift funds:</strong> If you use a gift, the lender will require a gift letter and possibly proof of transfer. Plan ahead.</li>
            <li><strong>Making large withdrawals before closing:</strong> Avoid moving money or making big purchases before <strong>underwriting</strong> is complete. Lenders verify assets.</li>
            <li><strong>Ignoring PMI or mortgage insurance:</strong> Below 20% down on conventional, PMI adds to your <strong>mortgage payment</strong>. Factor it into your budget.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about down payment">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
            <li>U.S. Department of Veterans Affairs (VA) – VA Home Loan Guaranty</li>
            <li>U.S. Department of Agriculture (USDA) – Single Family Housing Guaranteed Loan Program</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }} className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
