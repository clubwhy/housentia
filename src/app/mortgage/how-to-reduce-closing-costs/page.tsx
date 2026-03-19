import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Reduce Closing Costs (Legally & Safely) | Housentia',
  description:
    'Legal ways to reduce mortgage closing costs: lender credits, negotiation, shopping services. Educational guide for U.S. homebuyers. No financial advice.',
  openGraph: {
    title: 'How to Reduce Closing Costs (Legally & Safely) | Housentia',
    description: 'Legal ways to reduce mortgage closing costs. Educational guide for U.S. homebuyers.',
  },
};

const ARTICLE_SLUG = 'how-to-reduce-closing-costs';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'How to Reduce Closing Costs (Legally & Safely)',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-to-reduce-closing-costs';

const FAQ_ITEMS = [
  {
    question: 'Can I negotiate closing costs?',
    answer:
      'Yes. Some fees are negotiable. Lender fees (origination, processing, underwriting) may be reduced or offset with lender credits. Third-party services you can shop for (e.g., title, homeowner insurance) let you compare and choose lower-cost providers. See What Are Closing Costs for a breakdown.',
  },
  {
    question: 'What are lender credits?',
    answer:
      'Lender credits reduce your closing costs in exchange for a higher interest rate. The lender effectively pays some of your fees; you pay more interest over the life of the loan. This can lower cash needed at closing. See Mortgage Lender Credits Explained.',
  },
  {
    question: 'Can the seller pay my closing costs?',
    answer:
      'Yes, through seller concessions. The seller agrees to pay a portion of your closing costs; the amount is negotiated and limited by loan program rules. FHA allows up to 6% of the sale price; conventional limits vary. See Who Pays Closing Costs and Seller Paid Closing Costs Explained.',
  },
  {
    question: 'Does shopping lenders help reduce closing costs?',
    answer:
      'Yes. Lenders have different fee structures. Under TRID, you receive a Loan Estimate within three business days of applying. Compare Loan Estimates from multiple lenders to find lower fees. Multiple applications for the same loan purpose within a short window are often counted as one inquiry for credit scoring.',
  },
  {
    question: 'Are there costs I cannot reduce?',
    answer:
      'Some costs are fixed or third-party. Government recording fees are set by the county. Appraisal fees are typically set by the appraiser or lender. Prepaid interest is based on your loan amount and closing date. You can still reduce total closing costs by negotiating lender fees, shopping for title and insurance, and using credits.',
  },
  {
    question: 'Is it safe to use lender credits?',
    answer:
      'Lender credits are a standard, legal option. You trade a higher interest rate for lower upfront costs. Whether it makes sense depends on how long you plan to keep the loan and your cash situation. This is a trade-off, not a discount; you pay more interest over time.',
  },
];

export default function HowToReduceClosingCostsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'How to Reduce Closing Costs (Legally & Safely)',
    description:
      'Legal ways to reduce mortgage closing costs: lender credits, negotiation, shopping services. Educational guide for U.S. homebuyers.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How to Reduce Closing Costs (Legally & Safely)" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Closing costs</strong> can add thousands of dollars to your home purchase or refinance. The good news is there are legal, safe ways to reduce them. Understanding your options helps you negotiate, shop wisely, and lower the amount you bring to closing.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate that lets you compare offers. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> for a full overview of mortgage closing costs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            &quot;Reducing closing costs legally and safely&quot; means using strategies permitted by loan programs and consumer protection rules. You are not avoiding required costs—you are finding ways to pay less through negotiation, shopping, or credits, without violating RESPA or other regulations.
          </p>
          <p className="text-gray-700 mb-4">
            Some fees are negotiable. Lender fees (origination, processing, underwriting) may be reduced or offset. Third-party services you can shop for (title, homeowner insurance) let you compare and choose lower-cost providers. Lender credits reduce closing costs in exchange for a higher interest rate. Seller concessions allow the seller to pay a portion of your closing costs in a purchase. See{' '}
            <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link> for how costs are typically split.
          </p>
          <p className="text-gray-700">
            Not all costs can be reduced. Government recording fees, appraisal fees, and prepaid interest are set by law, the appraiser, or your loan terms. But you can still lower your total home buying costs by focusing on what is negotiable or shoppable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            <strong>Shop multiple lenders.</strong> Apply to several lenders within a short window (e.g., 14–45 days). Each will send a Loan Estimate. Compare the fees, interest rate, and APR. Lenders compete on both rate and fees; some offer lower origination fees or no points. Multiple applications for the same loan purpose are often counted as one inquiry for credit scoring.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Negotiate lender fees.</strong> Ask if the lender can reduce origination, processing, or underwriting fees. Some lenders may match a competitor&apos;s offer. If you have a strong application or are a repeat customer, you may have leverage.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Use lender credits.</strong> Lender credits reduce your closing costs in exchange for a higher interest rate. The lender pays some of your fees; you pay more interest over time. This can lower cash needed at closing. See{' '}
            <Link href="/mortgage/mortgage-lender-credits-explained" className="text-primary hover:underline font-medium">Mortgage Lender Credits Explained</Link>. The opposite—paying points to lower your rate—increases upfront costs but reduces total interest.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Request seller concessions.</strong> In a purchase, negotiate for the seller to pay a portion of your closing costs. The amount is limited by loan program rules. See{' '}
            <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link> and{' '}
            <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Shop for title and insurance.</strong> When the lender allows you to choose, compare title companies and homeowner insurance quotes. You may find lower-cost options. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> for which services are shoppable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategies at a Glance</h2>
          <p className="text-gray-700 mb-4">
            The table below summarizes legal ways to reduce closing costs. Each has trade-offs; none involve avoiding required costs or violating consumer protection rules.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Strategy</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Does</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Trade-Off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Shop lenders</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Compare Loan Estimates for lower fees</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Time to apply and compare</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Negotiate lender fees</td>
                  <td className="px-4 py-3 text-sm text-gray-700">May reduce origination, processing, underwriting</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Not all lenders negotiate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender credits</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender pays some fees; you pay higher rate</td>
                  <td className="px-4 py-3 text-sm text-gray-700">More interest over life of loan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Seller concessions</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Seller credits reduce your cash to close</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Negotiated; limits by loan program</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Shop title and insurance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Choose lower-cost providers when allowed</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender may restrict choices for some services</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan is buying a $320,000 home. Morgan applies to three lenders and receives two Loan Estimates with similar rates. Lender A: $4,200 in lender fees. Lender B: $2,800 in lender fees. Morgan chooses Lender B, saving $1,400.
          </p>
          <p className="text-gray-700 mb-4">
            Morgan also negotiates a $5,000 seller concession in the purchase agreement. The seller credit reduces Morgan&apos;s cash to close by $5,000. Morgan shops for homeowner insurance and finds a policy $200 cheaper than the first quote. Total savings: about $6,600. This is illustrative. See{' '}
            <Link href="/mortgage/prepaid-costs-vs-closing-costs" className="text-primary hover:underline font-medium">Prepaid Costs vs Closing Costs</Link> for how prepaids affect your total.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li><strong>Focusing only on rate.</strong> A lower rate with high fees may cost more than a slightly higher rate with lower fees. Compare APR and total closing costs, not just the interest rate.</li>
            <li><strong>Assuming lender credits are free.</strong> Lender credits reduce upfront costs but increase your rate and total interest. Consider how long you plan to keep the loan before choosing credits over a lower rate.</li>
            <li><strong>Not shopping when you can.</strong> TRID identifies services you can shop for. If the lender allows you to choose a title company or insurance provider, compare quotes.</li>
            <li><strong>Ignoring seller concessions.</strong> In a purchase, seller credits can significantly reduce your cash to close. See <Link href="/mortgage/who-pays-closing-costs" className="text-primary hover:underline font-medium">Who Pays Closing Costs</Link> for how to negotiate.</li>
          </ul>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaways</h3>
          <ul className="text-teal-800 text-[15px] leading-relaxed space-y-2">
            <li>Shop multiple lenders and compare Loan Estimates to find lower fees.</li>
            <li>Negotiate lender fees; some lenders may match or reduce offers.</li>
            <li>Lender credits reduce closing costs in exchange for a higher rate.</li>
            <li>Seller concessions can lower your cash to close; limits apply by program.</li>
            <li>Shop for title and insurance when the lender allows you to choose.</li>
          </ul>
        </div>

        <section className="mb-10" aria-label="Frequently asked questions about reducing closing costs">
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

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Closing Costs', href: '/mortgage-glossary/closing-costs' }]}
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
            Fee structures and negotiation options vary by lender and transaction.
          </p>
        </section>
      </main>
    </div>
  );
}
