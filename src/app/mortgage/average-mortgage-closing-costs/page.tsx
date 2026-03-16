import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Average Mortgage Closing Costs | Housentia',
  description:
    'Typical mortgage closing costs range from 2% to 5% of the loan amount. Learn what affects the total and how to estimate your costs.',
  openGraph: { title: 'Average Mortgage Closing Costs | Housentia', description: 'Understand typical mortgage closing costs.' },
};

const ARTICLE_SLUG = 'average-mortgage-closing-costs';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Average Mortgage Closing Costs' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/average-mortgage-closing-costs';

const FAQ_ITEMS = [
  { question: 'What are average mortgage closing costs?', answer: "Closing costs typically range from 2% to 5% of the loan amount. For a $300,000 loan, that's roughly $6,000 to $15,000. Costs vary by location, loan type, and lender. Your Loan Estimate will show estimated costs within 3 business days of application." },
  { question: 'What affects closing cost totals?', answer: 'Loan amount, loan type (FHA, VA, conventional), location (title and recording fees vary by state), whether you pay discount points, and lender pricing all affect the total. Third-party services like appraisal and title can also vary.' },
  { question: 'Can I reduce closing costs?', answer: 'Shop multiple lenders, compare Loan Estimates, ask about lender credits (which may increase your interest rate), and shop for title and escrow services where allowed. Seller concessions can also help cover some costs.' },
  { question: 'Are closing costs included in the loan?', answer: 'Some costs (e.g., upfront FHA MIP, VA funding fee) can be financed into the loan, which increases your loan balance and monthly payment. Prepaid items and most third-party fees are typically paid at closing out of pocket.' },
  { question: 'When do I see my actual closing costs?', answer: 'You receive a Loan Estimate within 3 business days of application (per TRID) and a Closing Disclosure at least 3 business days before closing. The Closing Disclosure shows your final costs.' },
  { question: 'Do closing costs affect my loan amount?', answer: 'Your loan amount is the principal you borrow. Closing costs are separate—you pay them at closing (or finance some, which adds to the loan). A larger loan amount generally means higher closing costs because many fees are percentage-based.' },
];

export default function AverageMortgageClosingCostsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Average Mortgage Closing Costs', description: 'Typical closing costs range from 2% to 5% of the loan. Learn what affects the total.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Average Mortgage Closing Costs" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When you buy a home or refinance, you pay more than the down payment and <strong>loan amount</strong>. You also pay <strong>closing costs</strong>—fees for services like appraisal, title insurance, and loan origination. Understanding average mortgage closing costs helps you budget and avoid surprises at the closing table.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Average mortgage closing costs</strong> typically range from 2% to 5% of the <strong>loan amount</strong>. For a $300,000 loan, that means roughly $6,000 to $15,000. The exact total depends on your loan type, location, lender, and the services involved. Federal rules—including the Truth in Lending Act (TILA), the Real Estate Settlement Procedures Act (RESPA), and TRID (TILA-RESPA Integrated Disclosure)—require lenders to provide a standardized <strong>Loan Estimate</strong> within 3 business days of application and a Closing Disclosure at least 3 business days before closing. These forms help you see and compare costs before you commit.
          </p>
          <p className="text-gray-700">
            This guide explains what drives average closing costs, how they work, and what first-time homebuyers should know. For a detailed breakdown of individual fees, see <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> and <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            Closing costs are the fees and charges you pay to complete a mortgage transaction. They are separate from your down payment and your <strong>loan amount</strong>. Some costs are charged by the lender (origination, underwriting, processing). Others are charged by third parties (appraisal, title search, title insurance, recording fees). Still others are prepaid items—such as property taxes and homeowners insurance—that you fund at closing to establish your <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline font-medium">escrow</Link> account.
          </p>
          <p className="text-gray-700 mb-4">
            The 2%–5% range is a rule of thumb based on typical U.S. transactions. A $200,000 loan might have closing costs of $4,000 to $10,000. A $500,000 loan might have $10,000 to $25,000. Higher-cost areas, certain loan types (such as FHA or VA), and loans with discount points can push costs toward the upper end. Simpler transactions in lower-cost states may fall toward the lower end.
          </p>
          <p className="text-gray-700">
            Your <strong>Loan Estimate</strong> groups costs into sections: loan costs (lender and third-party fees), other costs (title, government recording), and prepaid items. The &quot;Estimated Cash to Close&quot; at the bottom shows how much you will need to bring to closing. This number can change between the Loan Estimate and the Closing Disclosure—but under TRID, certain increases trigger a new disclosure and a new waiting period, giving you time to review.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            When you apply for a mortgage, the lender begins <strong>underwriting</strong>—verifying your income, assets, credit, and the property. As part of this process, the lender orders an appraisal, and you or the lender arrange for title work. Each of these steps generates fees that become part of your closing costs.
          </p>
          <p className="text-gray-700 mb-4">
            Lender fees often include an origination fee (a percentage of the <strong>loan amount</strong> or a flat fee), an underwriting fee, and a processing fee. You may also pay discount points to buy down your <strong>interest rate</strong>—each point typically equals 1% of the loan amount and can lower your rate. Paying points increases your closing costs but can reduce your <strong>mortgage payment</strong> over time. See <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">What Is Mortgage Points</Link> for more.
          </p>
          <p className="text-gray-700 mb-4">
            Third-party fees include the appraisal (to confirm the property value), the credit report, title search and title insurance, and government recording fees. Title and recording fees vary significantly by state and county. In some states, the buyer chooses the title company; in others, the seller or custom dictates. RESPA allows you to shop for certain services where the lender permits it—and shopping can sometimes save money.
          </p>
          <p className="text-gray-700 mb-4">
            Prepaid items are not really &quot;fees&quot;—they are funds you deposit into escrow for property taxes, homeowners insurance, and sometimes mortgage insurance. The lender collects these at closing so that when bills come due, the escrow account can pay them. Your first year of insurance and a few months of taxes are typical.
          </p>
          <p className="text-gray-700">
            Your <strong>Loan Estimate</strong> shows all of these in a standardized format. The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> (annual percentage rate) incorporates some closing costs into the cost of credit, which can help you compare offers. The APR is not your <strong>interest rate</strong>—it reflects the total cost of the loan including certain fees. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> and <Link href="/mortgage/apr-vs-interest-rate" className="text-primary hover:underline font-medium">APR vs Interest Rate</Link> for details.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sarah is buying a $400,000 home with a 20% down payment. Her <strong>loan amount</strong> is $320,000. She receives a <strong>Loan Estimate</strong> from her lender showing estimated closing costs of about $9,600—roughly 3% of the loan amount.
          </p>
          <p className="text-gray-700 mb-4">
            The breakdown: $2,400 in lender fees (origination, underwriting, processing), $600 for the appraisal, $1,200 for the credit report and other third-party services, $2,800 for title search and title insurance, $400 for recording fees, and $2,200 in prepaid items (homeowners insurance, property taxes, and initial escrow). She is not paying discount points, so her <strong>interest rate</strong> is at the par rate.
          </p>
          <p className="text-gray-700 mb-4">
            At closing, Sarah receives her Closing Disclosure. The final number is $9,450—slightly lower than the estimate because the title company&apos;s fee came in under the estimate. Her cash to close includes her $80,000 down payment plus $9,450 in closing costs, minus a $500 lender credit she negotiated. She brings $88,950 to closing (plus any prorations).
          </p>
          <p className="text-gray-700">
            This example is illustrative. Actual costs vary by lender, location, loan type, and transaction. Sarah&apos;s 3% is in the middle of the typical range. In a high-cost area or with an FHA loan (which has upfront mortgage insurance), her costs could have been higher. In a state with lower title and recording fees, they could have been lower.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, closing costs can be a significant expense on top of the down payment. If you are buying a $350,000 home with 10% down, your loan is $315,000. At 3% closing costs, you need roughly $9,450 for fees—plus your $35,000 down payment. That means you need $44,450 or more in cash to close, not counting moving expenses or reserves.
          </p>
          <p className="text-gray-700 mb-4">
            Budgeting for closing costs early helps you avoid last-minute shortfalls. Some buyers negotiate seller concessions—the seller agrees to pay a portion of the buyer&apos;s closing costs. There are limits on how much the seller can contribute (often 3%–6% of the loan amount, depending on the loan type and down payment). In a competitive market, seller concessions may be less common, but they are worth discussing with your agent.
          </p>
          <p className="text-gray-700 mb-4">
            TRID gives you time to review. You must receive the Closing Disclosure at least 3 business days before closing. Use that period to compare the final numbers to your Loan Estimate, ask questions, and ensure you understand what you are paying. If key costs increase beyond allowed tolerances, the lender must provide a revised disclosure and a new 3-day waiting period.
          </p>
          <p className="text-gray-700">
            Your <strong>mortgage payment</strong> is based on your <strong>loan amount</strong>, <strong>interest rate</strong>, and term—not directly on closing costs. But if you finance some closing costs (such as upfront FHA MIP), your <strong>loan amount</strong> increases, which increases your payment. Understanding the full cost of the loan, including closing costs, helps you make an informed decision.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Understanding Average Closing Costs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros of Being Informed</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You can budget accurately and avoid surprises</li>
                <li>TRID gives you a Loan Estimate and Closing Disclosure to compare</li>
                <li>You can shop lenders and compare total costs, not just the rate</li>
                <li>Knowing typical ranges helps you spot outliers or errors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Costs vary widely—the 2%–5% range is broad</li>
                <li>Some fees are not shoppable (e.g., certain lender fees)</li>
                <li>Prepaid items can be substantial in high-tax or high-insurance areas</li>
                <li>Last-minute changes can affect the final number</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Only comparing interest rates:</strong> A lender with a slightly lower rate may have higher closing costs. Compare the full Loan Estimate—APR, total closing costs, and cash to close.</li>
            <li><strong>Not budgeting for closing costs:</strong> Some first-time buyers focus only on the down payment and are surprised by the amount due at closing. Plan for 2%–5% of the loan amount.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Review it carefully. Check that the <strong>loan amount</strong>, rate, and fees match what you discussed. Ask questions before you lock.</li>
            <li><strong>Assuming all costs are negotiable:</strong> Some are (lender fees, possibly title if you can shop). Others are set by third parties or government (recording fees). Know which you can influence.</li>
            <li><strong>Financing too much into the loan:</strong> Rolling upfront MIP or other costs into the loan increases your <strong>loan amount</strong> and <strong>mortgage payment</strong>. Consider whether paying at closing is better for your situation.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about average closing costs">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Know Before You Owe: Mortgage disclosure</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – Real Estate Settlement Procedures Act (RESPA)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Actual costs vary by transaction.</p>
        </section>
      </main>
    </div>
  );
}
