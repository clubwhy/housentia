import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Lender Credits Explained | Housentia',
  description:
    'Lender credits reduce your closing costs in exchange for a higher interest rate. Learn how they work and when they make sense.',
  openGraph: { title: 'Mortgage Lender Credits Explained | Housentia', description: 'Understand mortgage lender credits.' },
};

const ARTICLE_SLUG = 'mortgage-lender-credits-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Lender Credits Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-lender-credits-explained';

const FAQ_ITEMS = [
  {
    question: 'What are lender credits?',
    answer:
      'Lender credits are a reduction in your closing costs offered by the lender in exchange for a higher interest rate. They appear on your Loan Estimate and Closing Disclosure under TRID. They can help reduce cash needed at closing. Your mortgage payment will be higher than with a lower rate.',
  },
  {
    question: 'How do lender credits work?',
    answer:
      'You accept a slightly higher rate, and the lender gives you a credit (often a percentage of the loan amount) that reduces your closing costs. The trade-off is a higher monthly mortgage payment over the life of the loan. See What Is Interest Rate and What Is Amortization.',
  },
  {
    question: 'When do lender credits make sense?',
    answer:
      'Lender credits can make sense if you are short on cash at closing, plan to sell or refinance soon, or prefer lower upfront costs. Compare the total cost over your expected ownership period. Use APR as one comparison tool—see What Is APR.',
  },
  {
    question: 'Are lender credits the opposite of points?',
    answer:
      'Yes. Points (discount points) are paid upfront to lower your rate. Lender credits are received upfront in exchange for a higher rate. Both are rate/cost trade-offs. See What Are Mortgage Points and Mortgage Points vs Rate Trade Off.',
  },
  {
    question: 'Do lender credits affect my Loan Estimate or APR?',
    answer:
      'Yes. Lender credits reduce your closing costs on the Loan Estimate and Closing Disclosure. Your APR will be higher than with a par (no-credit) rate because you are paying more interest over the life of the loan. The Loan Estimate shows the credit in Section A.',
  },
  {
    question: 'Can I get lender credits with any loan amount?',
    answer:
      'Lender credits are typically expressed as a percentage of the loan amount. A larger loan amount may mean a larger credit in dollars, but the trade-off (higher rate, higher mortgage payment) applies regardless of loan size. See What Is LTV and What Is Mortgage Principal.',
  },
];

export default function MortgageLenderCreditsExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Lender Credits Explained', description: 'Lender credits reduce closing costs in exchange for a higher rate. Learn how they work.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Lender Credits Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Mortgage lender credits</strong> reduce your <strong>closing costs</strong> in exchange for a higher{' '}
            <strong>interest rate</strong>. You accept a slightly higher rate, and the lender gives you a credit that
            lowers your cash to close. It is the opposite of paying discount points. Your <strong>mortgage payment</strong> will
            be higher than with a lower rate, but you need less cash at closing.
          </p>
          <p className="text-gray-700 mb-4">
            Lender credits appear on your <strong>Loan Estimate</strong> and Closing Disclosure under TRID (TILA-RESPA
            Integrated Disclosure). They are shown in Section A (origination charges). See{' '}
            <Link href="/mortgage/mortgage-points-vs-rate-trade-off" className="text-primary hover:underline font-medium">Mortgage Points vs Rate Trade Off</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Are Mortgage Points</Link>, and{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you lock your rate, the lender may offer options: par rate (no points, no credits), discount points
            (pay upfront to lower the rate), or lender credits (accept a higher rate to receive a credit). The credit
            reduces your <strong>closing costs</strong>—often expressed as a percentage of your <strong>loan amount</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            The trade-off: a higher <strong>interest rate</strong> means a higher <strong>mortgage payment</strong> over
            the life of the loan. If you plan to sell or refinance in a few years, the higher payment may not matter as
            much. If you plan to stay long-term, the extra interest can add up. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Design object 1: Rate/cost trade-off table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate and Cost Trade-Offs at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Option</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">At Closing</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Monthly Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Discount points</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay more (lower closing costs credit)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lower (lower rate)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Par (no points, no credits)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Standard closing costs</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Standard</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender credits</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay less (credit reduces costs)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Higher (higher rate)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Compare total cost over your expected ownership period.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            During <strong>underwriting</strong>, when you lock your rate, the lender presents pricing options. You may
            see a rate sheet with par rate, points (to buy down), and credits (to reduce <strong>closing costs</strong>).
            If you choose a credit, the lender applies it to your closing costs—reducing the amount you pay at closing.
          </p>
          <p className="text-gray-700 mb-4">
            The credit appears on your <strong>Loan Estimate</strong> and Closing Disclosure in Section A. Under TRID,
            the forms use the same structure so you can compare. Your <strong>loan amount</strong> and{' '}
            <strong>interest rate</strong> are set at lock. The credit does not change the <strong>loan amount</strong>—it
            reduces what you pay in fees. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>,{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>, and{' '}
            <Link href="/mortgage/loan-estimate-explained" className="text-primary hover:underline font-medium">Loan Estimate Explained</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan is buying a home with a $280,000 <strong>loan amount</strong>. Par rate is 6.5% with $4,200 in
            <strong> closing costs</strong>. The lender offers a 6.75% rate with a $2,800 lender credit—reducing closing
            costs to $1,400. Jordan chooses the credit to preserve cash. The <strong>mortgage payment</strong> (P&I) at
            6.75% is about $1,815 vs. $1,770 at 6.5%—about $45 more per month.
          </p>
          <p className="text-gray-700 mb-4">
            Over 30 years, the extra $45/month adds up. If Jordan plans to refinance or sell in 5 years, the trade-off
            may be acceptable. If Jordan stays 30 years, the higher rate costs more. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-sky-500 bg-sky-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-sky-900 mb-2">Key Takeaway</h3>
          <p className="text-sky-800 text-[15px] leading-relaxed">
            Lender credits reduce cash at closing but increase your mortgage payment. Compare the total cost over your
            expected ownership period. Use the Loan Estimate and APR to compare offers. There is no single &quot;best&quot;
            choice—it depends on your cash situation and how long you plan to keep the loan.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers often focus on the <strong>interest rate</strong> alone. Lender credits offer a way to
            reduce upfront cash when you are short on funds. Understanding the trade-off helps you make an informed
            choice. A higher rate means a higher <strong>mortgage payment</strong>—factor that into your budget.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> shows the credit and the rate. Compare multiple offers—different
            lenders may have different credit amounts for similar rates. See{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Lender Credits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Reduces cash needed at closing</li>
                <li>Can help when short on funds</li>
                <li>May make sense if you plan to refinance or sell soon</li>
                <li>Disclosed on Loan Estimate and Closing Disclosure (TRID)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Higher interest rate and mortgage payment</li>
                <li>More interest paid over life of loan</li>
                <li>May cost more if you stay long-term</li>
                <li>APR will be higher</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Choosing credits without considering the long-term cost:</strong> A higher rate means a higher <strong>mortgage payment</strong> for the life of the loan. If you stay 30 years, the extra interest can exceed the credit.</li>
            <li><strong>Ignoring APR:</strong> APR reflects the cost of credit, including some fees. A loan with lender credits will have a higher APR. Use it to compare offers. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>.</li>
            <li><strong>Not comparing multiple offers:</strong> Different lenders offer different credit amounts for similar rates. Get multiple <strong>Loan Estimates</strong> and compare.</li>
            <li><strong>Assuming credits are always bad:</strong> For some borrowers—especially those short on cash or planning to move soon—credits can make sense. It depends on your situation.</li>
            <li><strong>Confusing lender credits with seller credits:</strong> Lender credits come from the lender in exchange for a higher rate. Seller credits are negotiated with the seller and do not change your rate.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about lender credits">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Know before you owe: closing costs</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Lender credit offers vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
