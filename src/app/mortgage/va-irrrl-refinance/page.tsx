import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VA IRRRL Refinance | Housentia',
  description:
    'VA IRRRL (Interest Rate Reduction Refinance Loan) is a streamlined refinance for VA borrowers. Learn eligibility and benefits.',
  openGraph: { title: 'VA IRRRL Refinance | Housentia', description: 'Understand VA IRRRL refinancing.' },
};

const ARTICLE_SLUG = 'va-irrrl-refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'VA IRRRL Refinance' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/va-irrrl-refinance';

const FAQ_ITEMS = [
  {
    question: 'What is a VA IRRRL?',
    answer:
      'VA IRRRL (Interest Rate Reduction Refinance Loan) is a streamlined refinance for existing VA borrowers. It typically requires minimal documentation and no appraisal. Your Loan Estimate (TRID) shows the new loan amount, interest rate, mortgage payment, and closing costs. See Streamline Refinance Explained and VA Loan.',
  },
  {
    question: 'Who qualifies for a VA IRRRL?',
    answer:
      'You must have an existing VA loan and be current on payments. The new rate must be lower than your current rate (with limited exceptions). Underwriting is streamlined—income and asset verification may be reduced. See What Is DTI and What Is LTV.',
  },
  {
    question: 'Is there a funding fee for VA IRRRL?',
    answer:
      'VA IRRRL has a reduced funding fee (0.5% as of 2024). Veterans with disability may be exempt. The fee can be financed into the loan, which increases your loan amount and mortgage payment. See What Is APR.',
  },
  {
    question: 'Can I get cash out with a VA IRRRL?',
    answer:
      'IRRRL is typically rate-and-term only—no cash out. You may refinance up to your existing loan balance plus closing costs and the funding fee. For cash out, you would need a VA cash-out refinance instead. See What Is Refinance.',
  },
  {
    question: 'How long does a VA IRRRL take?',
    answer:
      'VA IRRRL often takes 2–4 weeks from application to closing—faster than a standard refinance because it typically skips full underwriting and appraisal. Your Loan Estimate arrives within 3 business days (TRID). See Refinance Timeline Explained.',
  },
  {
    question: 'Does VA IRRRL use the same Loan Estimate as other refinances?',
    answer:
      'Yes. Under TRID (TILA-RESPA Integrated Disclosure), VA IRRRL lenders provide a Loan Estimate within 3 business days. It shows your loan amount, interest rate, mortgage payment, and closing costs. Compare to the Closing Disclosure before closing.',
  },
];

export default function VaIrrrlRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'VA IRRRL Refinance', description: 'Learn about VA IRRRL eligibility and benefits.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="VA IRRRL Refinance" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>VA IRRRL</strong> (Interest Rate Reduction Refinance Loan) is a streamlined refinance for veterans and service members who already have a VA loan. It typically requires minimal documentation and no appraisal. The goal is to lower your <strong>interest rate</strong> and <strong>mortgage payment</strong> with a simpler process than a standard refinance.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Loan Estimate</strong> within 3 business days of application. It shows your new <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link>,{' '}
            <Link href="/mortgage/va-loan" className="text-primary hover:underline font-medium">What Is a VA Loan</Link>, and{' '}
            <Link href="/mortgage/can-you-refinance-with-bad-credit" className="text-primary hover:underline font-medium">Can You Refinance with Bad Credit</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            VA IRRRL replaces your existing VA loan with a new one at a lower <strong>interest rate</strong>. Your <strong>loan amount</strong> typically stays the same or increases slightly if you finance <strong>closing costs</strong> and the funding fee. Your <strong>mortgage payment</strong> should drop if the rate is lower. <strong>Underwriting</strong> is streamlined—the lender may not require full income or asset verification, and an appraisal is usually not needed.
          </p>
          <p className="text-gray-700 mb-4">
            The new loan must provide a net tangible benefit—typically a lower rate or payment. VA charges a reduced funding fee (0.5%); veterans with disability may be exempt. The fee can be financed into the <strong>loan amount</strong>. Your <strong>Loan Estimate</strong> (TRID) shows the breakdown. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: VA IRRRL vs standard refinance table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">VA IRRRL vs Standard Refinance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">VA IRRRL</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Standard Refinance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Documentation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Minimal (streamlined)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Full income, assets, employment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Appraisal</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Typically not required</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Usually required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Timeline</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often 2–4 weeks</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Typically 30–45 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Funding fee</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5% (reduced); disability exempt</td>
                  <td className="px-4 py-3 text-sm text-gray-700">N/A (conventional) or varies</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Cash out</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No (rate-and-term only)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Yes (if cash-out refinance)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">VA IRRRL rules are set by the U.S. Department of Veterans Affairs. Funding fee rates may change.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply through a VA-approved lender. The lender verifies you have an existing VA loan and are current on payments. The new <strong>interest rate</strong> must be lower than your current rate (with limited exceptions, such as moving from adjustable to fixed). <strong>Underwriting</strong> is streamlined—income and asset documentation may be reduced or waived.
          </p>
          <p className="text-gray-700 mb-4">
            You receive a <strong>Loan Estimate</strong> within 3 business days (TRID). The new <strong>loan amount</strong> is typically your current balance plus <strong>closing costs</strong> and the funding fee (if financed). Your <strong>mortgage payment</strong> should be lower. At closing, the new loan pays off the old one. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Chris has a VA loan with a $280,000 balance at 7% <strong>interest rate</strong>. Current <strong>mortgage payment</strong>: about $1,863. Chris applies for a VA IRRRL at 6.25%. New <strong>loan amount</strong>: $280,000 plus $1,400 funding fee (0.5%) plus $3,200 <strong>closing costs</strong> = $284,600 (all financed). New payment: about $1,752—saving $111/month.
          </p>
          <p className="text-gray-700 mb-4">
            Chris receives the <strong>Loan Estimate</strong> in 2 days. No appraisal is required. <strong>Underwriting</strong> is streamlined. Chris closes in 18 days. Break-even: $4,600 ÷ $111 ≈ 42 months. If Chris plans to stay 5+ years, the refinance may make sense. This is illustrative. See{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link> and{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>VA IRRRL</strong> is a streamlined refinance for existing VA borrowers. Minimal documentation, typically no appraisal, reduced funding fee (0.5%). Your new <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> appear on your <strong>Loan Estimate</strong> (TRID). Compare <strong>closing costs</strong> to your monthly savings—calculate break-even before refinancing. See{' '}
            <Link href="/mortgage/streamline-refinance-explained" className="text-teal-700 underline font-medium">Streamline Refinance Explained</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            VA IRRRL can help veterans and service members lower their <strong>mortgage payment</strong> with less hassle than a standard refinance. The streamlined process means fewer documents and often no appraisal—which can speed up the timeline and reduce costs. If <strong>interest rates</strong> have dropped since you got your VA loan, IRRRL may be worth considering.
          </p>
          <p className="text-gray-700 mb-4">
            Compare your <strong>closing costs</strong> to your monthly savings. If you save $150/month and your costs are $4,500, break-even is 30 months. If you plan to move or refinance again before then, the refinance may not pay off. Your <strong>Loan Estimate</strong> (TRID) shows the numbers. See{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link> and{' '}
            <Link href="/mortgage/refinance-timeline-explained" className="text-primary hover:underline font-medium">Refinance Timeline Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advantages</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Minimal documentation</li>
                <li>Typically no appraisal</li>
                <li>Faster than standard refinance (2–4 weeks)</li>
                <li>Reduced funding fee (0.5%)</li>
                <li>Lower mortgage payment if rate drops</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>New rate must be lower (with limited exceptions)</li>
                <li>No cash out—rate-and-term only</li>
                <li>Closing costs still apply</li>
                <li>Break-even period—may not pay off if you move soon</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Refinancing without calculating break-even:</strong> Compare your <strong>closing costs</strong> to your monthly savings. If you save $100/month and costs are $5,000, break-even is 50 months. See <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break-Even Point Explained</Link>.</li>
            <li><strong>Expecting cash out:</strong> VA IRRRL is rate-and-term only. You cannot take cash out. For cash out, you need a VA cash-out refinance.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Your <strong>Loan Estimate</strong> (TRID) shows the new <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Compare it to the Closing Disclosure before closing.</li>
            <li><strong>Financing all costs without considering impact:</strong> Financing the funding fee and <strong>closing costs</strong> increases your <strong>loan amount</strong> and <strong>mortgage payment</strong>. You pay interest on that amount. Weigh the trade-off.</li>
            <li><strong>Assuming you qualify without checking:</strong> You must have an existing VA loan and be current on payments. The new rate must be lower. Verify eligibility with your lender.</li>
            <li><strong>Not comparing to FHA streamline:</strong> If you have an FHA loan, FHA streamline may be an option. VA IRRRL is only for existing VA loans. See <Link href="/mortgage/fha-streamline-refinance" className="text-primary hover:underline font-medium">FHA Streamline Refinance</Link> and <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about VA IRRRL">
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
            <li>U.S. Department of Veterans Affairs (VA) – VA Lenders Handbook</li>
            <li>U.S. Department of Veterans Affairs (VA) – IRRRL (Interest Rate Reduction Refinance Loan)</li>
            <li>U.S. Department of Veterans Affairs (VA) – Funding Fee tables</li>
          </ul>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">VA IRRRL rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
