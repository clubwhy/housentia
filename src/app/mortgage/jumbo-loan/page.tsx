import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Jumbo Loan? | Housentia',
  description:
    'Jumbo loans exceed conforming loan limits set by Fannie Mae and Freddie Mac. Learn about higher down payments, stricter credit requirements, and when they apply.',
  openGraph: { title: 'What Is a Jumbo Loan? | Housentia', description: 'Understand jumbo loans for high-cost areas.' },
};

const ARTICLE_SLUG = 'jumbo-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Jumbo Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/jumbo-loan';

const FAQ_ITEMS = [
  {
    question: 'What is a jumbo loan?',
    answer:
      'A jumbo loan exceeds the conforming loan limits set by the Federal Housing Finance Agency (FHFA) for Fannie Mae and Freddie Mac. In high-cost areas, limits are higher. Jumbo loans are not eligible for GSE purchase, so lenders hold them in portfolio or sell to other investors. Your loan amount determines whether you need a jumbo.',
  },
  {
    question: 'What are conforming loan limits?',
    answer:
      'Conforming limits are updated annually by the FHFA. The baseline limit applies to most areas; high-cost areas can go higher (e.g., 150% of baseline). Limits change each year. Check the FHFA website for current limits in your county.',
  },
  {
    question: 'Do jumbo loans require a larger down payment?',
    answer:
      'Often yes. Many jumbo lenders require 10%–20% or more down, which means a lower LTV. Stricter credit scores, DTI limits, and reserve requirements also apply. Underwriting is typically more rigorous than for conforming loans.',
  },
  {
    question: 'Are jumbo rates higher?',
    answer:
      'Jumbo rates can be similar to or slightly higher than conforming rates, depending on market conditions. Your Loan Estimate shows the interest rate and mortgage payment. Shop multiple lenders to compare rates and closing costs.',
  },
  {
    question: 'How does DTI work for jumbo loans?',
    answer:
      'Many jumbo lenders prefer a lower DTI than conforming—often 36%–43% or stricter. Your mortgage payment must fit within the lender\'s DTI limits. See our What Is DTI and How DTI Affects Mortgage Approval guides.',
  },
  {
    question: 'Do I need an appraisal for a jumbo loan?',
    answer:
      'Yes. Jumbo loans typically require a full appraisal. The lender uses the property value to determine LTV and loan amount. See What Is LTV for how loan-to-value affects qualification.',
  },
];

export default function JumboLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Jumbo Loan?', description: 'Jumbo loans exceed conforming limits. Learn requirements and when they apply.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Jumbo Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>jumbo loan</strong> exceeds the conforming <strong>loan amount</strong> limits set by the Federal
            Housing Finance Agency (FHFA) for Fannie Mae and Freddie Mac. Conforming loans can be sold to the GSEs;
            jumbo loans cannot, so lenders hold them in portfolio or sell to other investors. Because of the higher risk
            and larger balance, lenders often require larger down payments, stronger credit, more reserves, and stricter{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">DTI</Link> limits.
          </p>
          <p className="text-gray-700 mb-4">
            Conforming limits are updated annually and vary by county—high-cost areas have higher limits. If your purchase
            price or refinance balance exceeds the limit for your area, you need a jumbo loan. Under TRID (TILA-RESPA
            Integrated Disclosure), your <strong>Loan Estimate</strong> shows the <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and <strong>closing costs</strong> for the <strong>loan amount</strong> you
            request. See <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When your <strong>loan amount</strong> exceeds the conforming limit, you enter jumbo territory. The conforming
            limit is a dollar cap—not a percentage. For example, if the limit in your county is $766,550 and you need a
            $900,000 loan, the entire $900,000 is a jumbo loan. Your <strong>mortgage payment</strong> and{' '}
            <strong>interest rate</strong> are based on that full amount.
          </p>
          <p className="text-gray-700 mb-4">
            Jumbo lenders typically require a lower <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>—often
            80%–90% or less—meaning a larger down payment. They may require higher credit scores (e.g., 700+), lower DTI
            (e.g., 36%–43%), and more reserves (e.g., 18–24 months of <strong>mortgage payment</strong> in liquid assets).
            <strong> Underwriting</strong> is more rigorous because the lender bears more risk.
          </p>
          <p className="text-gray-700">
            The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) apply to jumbo loans. Your{' '}
            <strong>Loan Estimate</strong> and Closing Disclosure show the cost of credit. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The FHFA sets conforming limits each year based on home price changes. The baseline limit applies to most
            counties; high-cost areas (where median home values exceed 115% of the baseline) get higher limits—up to
            150% of the baseline. Limits vary by property type (1-unit, 2–4 unit). Check the FHFA website for your
            county&apos;s limit.
          </p>
          <p className="text-gray-700 mb-4">
            When you apply for a jumbo loan, the lender evaluates your income, credit, assets, and the property. You
            receive a <strong>Loan Estimate</strong> within 3 business days under TRID. During <strong>underwriting</strong>,
            the lender verifies your application and may require additional documentation. Jumbo loans often need a full
            appraisal. Your <strong>closing costs</strong> may be higher than for conforming loans—origination fees,
            appraisal, and other fees can add up on a large <strong>loan amount</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Jumbo <strong>interest rates</strong> can be similar to or slightly higher than conforming. Rates vary by
            lender and market. Some lenders specialize in jumbos; others have stricter overlays. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan is buying a $1.2 million home in a county where the conforming limit is $766,550. Morgan puts 20%
            down ($240,000), so the <strong>loan amount</strong> is $960,000—well above the conforming limit. Morgan
            needs a jumbo loan.
          </p>
          <p className="text-gray-700 mb-4">
            The lender requires 20% down (LTV 80%), credit score 700+, and DTI below 43%. Morgan has a 720 score, $180,000
            gross income, and $3,000 in monthly debt. At 7% <strong>interest rate</strong> on a 30-year loan, the{' '}
            <strong>mortgage payment</strong> (principal and interest) is about $6,387. Adding taxes and insurance of
            $1,200, housing is $7,587. Back-end DTI: ($7,587 + $3,000) / $15,000 = 70%—too high. Morgan would need to
            pay down debt or increase the down payment to lower the payment and DTI.
          </p>
          <p className="text-gray-700">
            Morgan receives a <strong>Loan Estimate</strong> showing the rate, payment, and <strong>closing costs</strong>.
            The example is illustrative. Actual limits and requirements vary by lender, county, and market.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If you are buying in a high-cost area—or a home that exceeds conforming limits—you will need a jumbo loan.
            Prepare for stricter requirements: stronger credit, lower DTI, more reserves, and a larger down payment. Your{' '}
            <strong>mortgage payment</strong> on a jumbo is larger simply because the <strong>loan amount</strong> is
            larger—ensure your income and DTI can support it. See{' '}
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            Conforming limits change annually. If your purchase is close to the limit, a small increase in the limit (or a
            slightly lower purchase price) could push you into conforming territory—which may mean easier qualification
            and sometimes better rates. Check the FHFA limits for your county before you shop.
          </p>
          <p className="text-gray-700">
            Jumbo lenders vary. Some offer competitive rates; others have overlays that make qualification harder. Shop
            multiple lenders and compare <strong>Loan Estimates</strong>. See{' '}
            <Link href="/mortgage/how-credit-score-affects-mortgage-rates" className="text-primary hover:underline font-medium">How Credit Score Affects Mortgage Rates</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Jumbo Loans</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Potential Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Enables purchase of higher-priced homes</li>
                <li>Rates can be competitive with conforming</li>
                <li>No loan limit ceiling—borrow what you qualify for</li>
                <li>Available for purchase and refinance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Stricter credit, DTI, and reserve requirements</li>
                <li>Larger down payment typically required</li>
                <li>Higher closing costs on larger loan amounts</li>
                <li>Fewer lenders offer jumbos; shop carefully</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming conforming limits are the same everywhere:</strong> High-cost areas have higher limits. Check your county before assuming you need a jumbo.</li>
            <li><strong>Not preparing for stricter underwriting:</strong> Jumbo lenders often require stronger credit, lower DTI, and more reserves. Get your documents and finances in order early.</li>
            <li><strong>Ignoring the impact of a larger mortgage payment:</strong> A $1 million loan at 7% is about $6,650 per month (P&I). Ensure your income and DTI support it.</li>
            <li><strong>Not shopping lenders:</strong> Jumbo requirements and <strong>interest rates</strong> vary. Get multiple <strong>Loan Estimates</strong> and compare.</li>
            <li><strong>Forgetting that limits change annually:</strong> Conforming limits are updated each year. A home that was jumbo last year might be conforming this year—or vice versa.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about jumbo loan">
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
            <li>Federal Housing Finance Agency (FHFA) – Conforming loan limits</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Fannie Mae – Conforming vs. jumbo loan guidelines</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }} className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Conforming limits and jumbo requirements change annually.</p>
        </section>
      </main>
    </div>
  );
}
