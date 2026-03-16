import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monthly Mortgage Insurance Explained | Housentia',
  description:
    'Monthly mortgage insurance is paid with each payment. Learn how FHA annual MIP and conventional PMI work.',
  openGraph: { title: 'Monthly Mortgage Insurance Explained | Housentia', description: 'Understand monthly mortgage insurance.' },
};

const ARTICLE_SLUG = 'monthly-mortgage-insurance-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Monthly Mortgage Insurance Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/monthly-mortgage-insurance-explained';

const FAQ_ITEMS = [
  {
    question: 'What is monthly mortgage insurance?',
    answer:
      'Monthly mortgage insurance is paid with each mortgage payment. For FHA loans, it\'s the annual MIP (Mortgage Insurance Premium) spread over 12 months. For conventional loans, it\'s PMI (private mortgage insurance). Both protect the lender when you put down less than 20%. Your Loan Estimate shows the estimated amount.',
  },
  {
    question: 'How much is monthly MI?',
    answer:
      'FHA annual MIP varies by loan term, amount, and LTV—typically 0.45% to 1.05% of the loan amount per year, divided by 12. Conventional PMI varies by lender, credit score, and LTV. Your mortgage payment includes this amount.',
  },
  {
    question: 'When can I remove monthly PMI?',
    answer:
      'Conventional PMI can typically be removed when you reach 80% LTV through payments or appreciation, or at the midpoint of the amortization schedule. FHA MIP often lasts for the life of the loan (or 11 years in some cases). See What Is LTV.',
  },
  {
    question: 'Is monthly MI included in PITI?',
    answer:
      'Yes. Mortgage insurance is part of your monthly housing payment and is included in PITI (Principal, Interest, Taxes, Insurance). It affects your DTI calculation. See What Is PITI.',
  },
  {
    question: 'How does monthly MI appear on my Loan Estimate?',
    answer:
      'Under TRID, your Loan Estimate shows the projected monthly payment including mortgage insurance. The form breaks out principal and interest, and may show MI separately or as part of the total payment. Closing costs may also include upfront MI for FHA.',
  },
  {
    question: 'Does credit score affect monthly mortgage insurance?',
    answer:
      'For conventional PMI, yes—lenders use risk-based pricing. Lower credit scores may mean higher PMI premiums. FHA MIP rates are set by HUD but your interest rate can vary by credit. See How Credit Score Affects Mortgage Rates.',
  },
];

export default function MonthlyMortgageInsuranceExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Monthly Mortgage Insurance Explained', description: 'Monthly mortgage insurance is paid with each payment. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Monthly Mortgage Insurance Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Monthly mortgage insurance</strong> is paid with each <strong>mortgage payment</strong>. When you put
            down less than 20%, lenders typically require it to protect against default. For FHA loans, it&apos;s the
            annual MIP (Mortgage Insurance Premium) spread over 12 months. For conventional loans, it&apos;s PMI (private
            mortgage insurance). Both add to your monthly housing cost and affect your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), your <strong>Loan Estimate</strong> shows the projected
            monthly payment including mortgage insurance. The amount depends on your <strong>loan amount</strong>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>, and for
            conventional loans, your credit score. See <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">What Is PMI</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-insurance-premium" className="text-primary hover:underline font-medium">What Is Mortgage Insurance Premium</Link>, and{' '}
            <Link href="/mortgage/upfront-mortgage-insurance-explained" className="text-primary hover:underline font-medium">Upfront Mortgage Insurance Explained</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> is more than principal and interest. It typically includes taxes,
            insurance, and—when your <strong>loan amount</strong> exceeds 80% of the home&apos;s value—mortgage
            insurance. Monthly MI is a recurring cost that increases your payment until you reach a certain <strong>loan-to-value</strong> threshold or meet other removal conditions.
          </p>
          <p className="text-gray-700 mb-4">
            For conventional loans, PMI can often be removed when you reach 80% LTV through payments or appreciation.
            FHA MIP has different rules—it often lasts for the life of the loan or a set period. The TILA (Truth in
            Lending Act) requires clear disclosure of the cost of credit; your <strong>Loan Estimate</strong> and{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> reflect
            the full cost. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Design object 1: PMI vs MIP comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PMI vs MIP: At a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Conventional PMI</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">FHA MIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">When required</td>
                  <td className="px-4 py-3 text-sm text-gray-700">LTV &gt; 80%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">All FHA loans</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Monthly cost</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies by lender, credit, LTV</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.45%–1.05% of loan per year ÷ 12</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Removal</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often at 80% LTV or midpoint</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often life of loan or 11 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Upfront premium</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Sometimes optional</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Typically 1.75% of loan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Rates and rules vary by lender and program.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply, the lender calculates your <strong>loan amount</strong> and <strong>LTV</strong>. If LTV
            exceeds 80% (or for FHA, always), mortgage insurance is required. For conventional loans, the lender or
            a private MI company sets the PMI rate based on your credit score, LTV, and other factors. For FHA, HUD
            sets MIP rates by loan term and LTV. The monthly amount is typically a percentage of the outstanding
            <strong> loan amount</strong>, divided by 12.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> shows the projected <strong>mortgage payment</strong> including MI.
            During <strong>underwriting</strong>, the lender confirms your <strong>interest rate</strong>, LTV, and
            credit—all of which affect the MI amount. RESPA (Real Estate Settlement Procedures Act) governs settlement
            and closing; your <strong>closing costs</strong> may include upfront MI for FHA. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
          <p className="text-gray-700">
            For conventional PMI, the Homeowners Protection Act (HPA) sets rules for cancellation and automatic
            termination. FHA MIP follows HUD rules. Refinancing can remove MI if you reach 80% LTV or switch to a
            loan that does not require it.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam buys a $300,000 home with 10% down. The <strong>loan amount</strong> is $270,000—LTV 90%. Sam chooses
            a conventional loan. At a 7% <strong>interest rate</strong>, principal and interest are about $1,796. PMI
            adds roughly $135 per month (illustrative rate). Taxes and insurance add $400. Total <strong>mortgage payment</strong>: about $2,331.
          </p>
          <p className="text-gray-700 mb-4">
            If Sam had put 20% down ($60,000), the loan would be $240,000 and LTV 80%—no PMI. The payment would drop
            to about $1,597 (P&I) plus $400 (taxes/insurance) = $1,997. The 10% down option costs Sam about $334 more
            per month in this example—partly from the larger loan, partly from PMI.
          </p>
          <p className="text-gray-700">
            Sam receives a <strong>Loan Estimate</strong> showing the full payment and <strong>closing costs</strong>.
            The example is illustrative. Actual PMI rates vary by lender and credit. See{' '}
            <Link href="/mortgage/what-is-piti" className="text-primary hover:underline font-medium">What Is PITI</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout box */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            Monthly mortgage insurance adds to your payment until you reach 80% LTV (conventional) or meet FHA removal
            rules. It is included in PITI and affects your DTI. Your Loan Estimate shows the estimated amount—compare
            offers to see how MI impacts your total cost.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, a smaller down payment can make homeownership possible—but it usually means
            paying MI. Factor MI into your budget when estimating affordability. A $150–$200 monthly MI payment can
            add up over 5–10 years. Consider whether paying down the loan faster or refinancing when you reach 80% LTV
            could save money.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>mortgage payment</strong> (including MI) affects your DTI. A higher payment can reduce the
            <strong> loan amount</strong> you qualify for. Improving your credit score can lower conventional PMI
            premiums. See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link> and{' '}
            <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Monthly Mortgage Insurance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Enables purchase with less than 20% down</li>
                <li>Conventional PMI can be removed at 80% LTV</li>
                <li>Disclosed clearly on Loan Estimate and Closing Disclosure</li>
                <li>May be tax-deductible in some cases (consult a tax professional)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Adds to monthly payment and total cost</li>
                <li>FHA MIP often lasts longer than conventional PMI</li>
                <li>Lower credit can mean higher conventional PMI</li>
                <li>Must reach 80% LTV to remove (conventional)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not factoring MI into your budget:</strong> Your <strong>mortgage payment</strong> includes MI when LTV &gt; 80%. Use the full payment when calculating affordability.</li>
            <li><strong>Assuming FHA and conventional MI work the same:</strong> FHA MIP has different rules—often life of loan. Conventional PMI can typically be removed.</li>
            <li><strong>Ignoring the impact on DTI:</strong> MI affects your monthly housing cost and thus your DTI. A higher payment can reduce the <strong>loan amount</strong> you qualify for.</li>
            <li><strong>Not shopping lenders for conventional PMI:</strong> PMI rates vary by lender. Get multiple <strong>Loan Estimates</strong> and compare the total payment.</li>
            <li><strong>Forgetting about upfront MIP on FHA:</strong> FHA charges upfront MIP (often 1.75%) at closing. It can be rolled into the loan but increases your <strong>loan amount</strong> and payment.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about monthly mortgage insurance">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Mortgage Insurance Premiums</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Homeowners Protection Act (HPA) and PMI</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }} className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">MI rates and removal rules vary by loan type.</p>
        </section>
      </main>
    </div>
  );
}
