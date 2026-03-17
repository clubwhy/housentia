import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Reduce Closing Costs Legally | Housentia',
  description:
    'Learn legal ways to reduce mortgage closing costs: shop lenders, negotiate fees, use lender credits, and request seller concessions. Educational guide for U.S. homebuyers.',
  openGraph: {
    title: 'How to Reduce Closing Costs Legally | Housentia',
    description: 'Legal strategies to reduce your mortgage closing costs.',
  },
};

const ARTICLE_SLUG = 'how-to-reduce-closing-costs-legally';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'How to Reduce Closing Costs Legally',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-to-reduce-closing-costs-legally';

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
];

export default function HowToReduceClosingCostsLegallyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'How to Reduce Closing Costs Legally',
    description:
      'Legal strategies to reduce mortgage closing costs: shop lenders, negotiate fees, use lender credits, and request seller concessions.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How to Reduce Closing Costs Legally" breadcrumbs={BREADCRUMBS} />
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
            <strong>Closing costs</strong> can add thousands of dollars to your home purchase or refinance. The good news is there are legal ways to reduce them. Understanding your options helps you negotiate, shop wisely, and lower the amount you bring to closing.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a Loan Estimate that lets you compare offers. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> for a full overview of what closing costs include.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            &quot;Reducing closing costs legally&quot; means using strategies that are permitted by loan programs and consumer protection rules. You are not avoiding required costs—you are finding ways to pay less through negotiation, shopping, or credits.
          </p>
          <p className="text-gray-700 mb-4">
            Some fees are negotiable. Lender fees (origination, processing, underwriting) may be reduced or offset. Third-party services you can shop for (title, homeowner insurance) let you compare and choose lower-cost providers. Lender credits reduce closing costs in exchange for a higher interest rate. Seller concessions allow the seller to pay a portion of your closing costs.
          </p>
          <p className="text-gray-700">
            Not all costs can be reduced. Government recording fees, appraisal fees, and prepaid interest are set by law, the appraiser, or your loan terms. But you can still lower your total mortgage closing costs by focusing on what is negotiable or shoppable.
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
            <Link href="/mortgage/seller-paid-closing-costs-explained" className="text-primary hover:underline font-medium">Seller Paid Closing Costs Explained</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Shop for title and insurance.</strong> When the lender allows you to choose, compare title companies and homeowner insurance quotes. You may find lower-cost options. See{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Are Closing Costs</Link> for which services are shoppable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Morgan is buying a $320,000 home. Morgan applies to three lenders and receives two Loan Estimates with similar rates. Lender A: $4,200 in lender fees. Lender B: $2,800 in lender fees. Morgan chooses Lender B, saving $1,400.
          </p>
          <p className="text-gray-700 mb-4">
            Morgan also negotiates a $5,000 seller concession in the purchase agreement. The seller credit reduces Morgan&apos;s cash to close by $5,000. Morgan shops for homeowner insurance and finds a policy $200 cheaper than the first quote. Total savings: about $6,600. This is illustrative.
          </p>
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
