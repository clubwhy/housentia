import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Loan Delivery Process Explained | Housentia',
  description:
    'Loan delivery is when the lender sells or delivers the mortgage to an investor. Learn how the mortgage loan delivery process works and what it means for you.',
  openGraph: {
    title: 'Mortgage Loan Delivery Process Explained | Housentia',
    description: 'Understand the mortgage loan delivery process.',
  },
};

const ARTICLE_SLUG = 'mortgage-loan-delivery-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Loan Delivery Process Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-loan-delivery-process';

const FAQ_ITEMS = [
  {
    question: 'What is loan delivery?',
    answer:
      'Loan delivery is when the lender sells or delivers the mortgage to an investor (Fannie Mae, Freddie Mac, Ginnie Mae, or private investors) in the secondary market. The lender receives funds to make more loans. Your loan amount, interest rate, mortgage payment, and other terms do not change.',
  },
  {
    question: 'Does loan delivery affect my mortgage?',
    answer:
      'No. Your interest rate, mortgage payment, due date, and loan amount stay the same. The investor may have different servicing requirements, and servicing may be transferred. If servicing transfers, you receive a RESPA notice. Your Loan Estimate and Closing Disclosure terms remain in effect.',
  },
  {
    question: 'Who are the main investors?',
    answer:
      'Fannie Mae and Freddie Mac purchase conventional conforming loans. Ginnie Mae securitizes FHA, VA, and USDA loans. Private investors purchase jumbo or non-QM loans. The lender chooses the investor based on the loan type and guidelines. See Mortgage Investor Guidelines Explained.',
  },
  {
    question: 'When does loan delivery happen?',
    answer:
      'Typically within days to a few months after closing. The lender packages the loan with others and delivers them to the investor. This happens behind the scenes; you do not need to take any action. Your first mortgage payment is still due as shown on your Closing Disclosure.',
  },
  {
    question: 'Does loan delivery affect my Loan Estimate or closing costs?',
    answer:
      'No. Loan delivery happens after closing. Your Loan Estimate and Closing Disclosure (provided under TRID) set your terms before closing. Delivery does not change your loan amount, interest rate, closing costs, or mortgage payment.',
  },
  {
    question: 'Will I know when my loan is delivered?',
    answer:
      'Usually not. Delivery happens behind the scenes. If servicing is transferred to a new company, you will receive a notice under RESPA. Until then, you make payments to the servicer shown on your Closing Disclosure. See Mortgage Servicing Transfer Explained.',
  },
];

export default function MortgageLoanDeliveryProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Loan Delivery Process Explained',
    description:
      'Loan delivery is when the lender sells the mortgage to an investor. Learn what it means for you.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Loan Delivery Process Explained" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Loan delivery</strong> is when the lender sells or delivers your mortgage to an investor in the
            secondary market. Most lenders do not keep loans on their books—they sell them to Fannie Mae, Freddie Mac,
            Ginnie Mae, or private investors to free up capital. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, <strong>mortgage payment</strong>, and other terms do not change.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> and Closing Disclosure (provided under TRID before closing) set your
            terms. Delivery happens after closing. Understanding this process helps you see why servicing may transfer
            and how the mortgage market works. RESPA (Real Estate Settlement Procedures Act) governs servicing
            transfers. See{' '}
            <Link href="/mortgage/mortgage-investor-guidelines-explained" className="text-primary hover:underline font-medium">Mortgage Investor Guidelines Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-funding-process" className="text-primary hover:underline font-medium">Mortgage Funding Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you close, your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>closing costs</strong>,
            and <strong>mortgage payment</strong> are set. The lender may sell the loan to an investor shortly after. The
            investor (or a servicer) collects your payments. Your contract does not change—you still owe the same
            amount at the same rate.
          </p>
          <p className="text-gray-700 mb-4">
            The only thing that may change is who collects your payments. If servicing transfers to a new company, you
            will receive a notice under RESPA. You make payments to the servicer shown on your Closing Disclosure until
            you are told otherwise. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Delivery flow table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Loan Delivery Flow</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Stage</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You sign; lender funds; loan amount, rate, payment set</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Post-closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender packages loan for delivery</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Delivery</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender sells/delivers to investor (Fannie, Freddie, Ginnie, etc.)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Servicing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Investor or servicer collects mortgage payments; may transfer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your terms do not change. Delivery happens behind the scenes.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After closing, the lender packages your loan with others and delivers them to an investor. The investor
            purchases the loans (or the rights to them) and may pool them into mortgage-backed securities. The lender
            receives funds to originate more loans. The loan was originated to meet the investor&apos;s guidelines during{' '}
            <strong>underwriting</strong>—see <Link href="/mortgage/mortgage-investor-guidelines-explained" className="text-primary hover:underline font-medium">Mortgage Investor Guidelines Explained</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            The investor (or a servicer acting on their behalf) may service the loan or transfer servicing to another
            company. Under RESPA, you must receive a transfer notice if servicing changes. Your <strong>mortgage payment</strong>, <strong>interest rate</strong>, and <strong>loan amount</strong> stay the same. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/mortgage-servicing-transfer-explained" className="text-primary hover:underline font-medium">Mortgage Servicing Transfer Explained</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Taylor closes on a $320,000 conforming loan at 6.5% <strong>interest rate</strong>. The{' '}
            <strong>mortgage payment</strong> (P&I) is about $2,022. The <strong>Loan Estimate</strong> and Closing
            Disclosure set these terms before closing. Two weeks after closing, the lender delivers the loan to Fannie
            Mae. Fannie Mae purchases it and the lender&apos;s servicing arm continues to collect payments.
          </p>
          <p className="text-gray-700 mb-4">
            Taylor&apos;s <strong>loan amount</strong>, rate, and payment do not change. Six months later, servicing
            is transferred to another company. Taylor receives a RESPA notice and begins making payments to the new
            servicer. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-rose-500 bg-rose-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-rose-900 mb-2">Key Takeaway</h3>
          <p className="text-rose-800 text-[15px] leading-relaxed">
            Loan delivery does not change your terms. Your loan amount, interest rate, mortgage payment, and closing
            costs were set at closing. If servicing transfers, you will receive a RESPA notice. Make payments to the
            servicer shown on your Closing Disclosure until you are told otherwise.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding loan delivery helps you know why your loan may be sold and why servicing may transfer.
            First-time buyers may receive a notice that their loan was sold—this is normal. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, and <strong>mortgage payment</strong> do not change.
          </p>
          <p className="text-gray-700 mb-4">
            The secondary market (Fannie, Freddie, Ginnie) allows lenders to offer competitive rates by selling loans.
            Your <strong>Loan Estimate</strong> and Closing Disclosure (TRID) set your terms before closing. Delivery
            happens after. See <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Loan Delivery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Secondary market supports liquidity and competitive rates</li>
                <li>Your terms do not change</li>
                <li>RESPA protects you if servicing transfers</li>
                <li>Lenders can offer more loans</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Servicing may transfer—new company collects payments</li>
                <li>You may receive multiple notices (sale, transfer)</li>
                <li>Borrowers do not choose the investor</li>
                <li>Delivery happens behind the scenes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Thinking the sale changes your terms:</strong> It does not. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> stay the same. The investor owns the loan; your contract is unchanged.</li>
            <li><strong>Ignoring a servicing transfer notice:</strong> Under RESPA, you must receive notice. Update your payment information. Make payments to the new servicer as instructed.</li>
            <li><strong>Assuming you can refuse the sale:</strong> Your loan documents typically allow the lender to sell or transfer the loan. You cannot prevent it. Your terms do not change.</li>
            <li><strong>Confusing the investor with the servicer:</strong> The investor owns the loan. The servicer collects payments. They may be the same company or different. Your Closing Disclosure shows the servicer.</li>
            <li><strong>Worrying that delivery affects your Loan Estimate:</strong> Delivery happens after closing. Your <strong>Loan Estimate</strong> and <strong>closing costs</strong> were set before closing under TRID. They do not change.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about loan delivery">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage servicing transfer rules</li>
            <li>Federal Housing Finance Agency (FHFA) – Conforming loan limits and secondary market context</li>
            <li>Fannie Mae – Selling Guide (loan delivery and investor guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (delivery requirements)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
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
          <p className="text-gray-700 text-sm">
            Procedures vary by lender and investor.
          </p>
        </section>
      </main>
    </div>
  );
}
