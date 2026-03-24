import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Equity Loan vs HELOC: Compare Options | Housentia',
  description:
    'Compare home equity loans and HELOCs: lump sum vs revolving credit, fixed vs variable rate, and when each may make sense for your situation.',
  openGraph: {
    title: 'Home Equity Loan vs HELOC | Housentia',
    description: 'Compare lump-sum home equity loans and HELOCs to choose the right option for you.',
  },
};

const ARTICLE_SLUG = 'home-equity-loan-vs-heloc';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Home Equity Loan vs HELOC',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/home-equity-loan-vs-heloc';

const FAQ_ITEMS = [
  {
    question: 'What is the main difference between a home equity loan and a HELOC?',
    answer:
      'A home equity loan is a lump-sum loan with a fixed rate and fixed payments. A HELOC is a revolving line of credit—you draw only what you need, when you need it, and pay interest on the amount borrowed. HELOCs often have variable rates.',
  },
  {
    question: 'Which has a lower interest rate?',
    answer:
      'It depends on market conditions. Home equity loans usually have fixed rates; HELOCs often have variable rates tied to an index (e.g., Prime). At times HELOC initial rates may be lower, but they can rise. Compare APRs and terms from multiple lenders.',
  },
  {
    question: 'When does a home equity loan make more sense than a HELOC?',
    answer:
      'A home equity loan can make sense when you need a known lump sum (e.g., one-time project, debt consolidation) and prefer fixed monthly payments. If you want payment certainty and a set payoff term, a fixed home equity loan may suit you better.',
  },
  {
    question: 'When does a HELOC make more sense than a home equity loan?',
    answer:
      'A HELOC can make sense when you need flexibility—drawing over time as expenses arise (e.g., ongoing renovations) or when you are unsure of the total amount. You only pay interest on what you borrow, and you can repay and re-borrow during the draw period.',
  },
  {
    question: 'Are both secured by my home?',
    answer:
      'Yes. Both are second liens—they are secured by your home equity and rank behind your first mortgage. Default can lead to foreclosure. See What Is a Second Mortgage for more context.',
  },
];

export default function HomeEquityLoanVsHELOCPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Home Equity Loan vs HELOC',
    description: 'Compare home equity loans and HELOCs: lump sum vs revolving credit, fixed vs variable rate.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Home Equity Loan vs HELOC" breadcrumbs={BREADCRUMBS} />
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
            A <strong>home equity loan</strong> and a <strong>HELOC</strong> (Home Equity Line of Credit) are both ways to borrow against your <Link href="/mortgage/what-is-mortgage-equity" className="text-primary hover:underline font-medium">home equity</Link>. The main difference: a home equity loan is a lump-sum loan with a <strong>fixed interest rate</strong> and fixed monthly payments; a HELOC is a revolving line of credit—you draw as needed, and typically pay interest only on the amount you owe. HELOCs often have <strong>variable rates</strong> and a draw period followed by a repayment period.
          </p>
          <p className="text-gray-700">
            See <Link href="/mortgage/heloc" className="text-primary hover:underline font-medium">HELOC Overview</Link>,{' '}
            <Link href="/mortgage/what-is-a-second-mortgage" className="text-primary hover:underline font-medium">What Is a Second Mortgage</Link>, and{' '}
            <Link href="/mortgage/refinance-vs-heloc" className="text-primary hover:underline font-medium">Refinance vs HELOC</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Equity Loan vs HELOC: Key Differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left font-semibold">Feature</th>
                  <th className="border border-gray-200 p-3 text-left font-semibold">Home Equity Loan</th>
                  <th className="border border-gray-200 p-3 text-left font-semibold">HELOC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3 font-medium">Structure</td>
                  <td className="border border-gray-200 p-3">Lump sum at closing</td>
                  <td className="border border-gray-200 p-3">Revolving line of credit; draw as needed</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3 font-medium">Interest rate</td>
                  <td className="border border-gray-200 p-3">Usually fixed</td>
                  <td className="border border-gray-200 p-3">Usually variable (e.g., Prime + margin)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3 font-medium">Payments</td>
                  <td className="border border-gray-200 p-3">Fixed monthly principal + interest</td>
                  <td className="border border-gray-200 p-3">Interest-only during draw period; then principal + interest</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3 font-medium">Repayment term</td>
                  <td className="border border-gray-200 p-3">Fixed (e.g., 5–20 years)</td>
                  <td className="border border-gray-200 p-3">Draw period (e.g., 10 yrs) + repayment period (e.g., 20 yrs)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Terms vary by lender. Compare the <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link>, fees, and <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">closing costs</Link> before deciding.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When a Home Equity Loan May Make Sense</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>You need a known lump sum:</strong> One-time project, debt consolidation, or major expense.</li>
            <li><strong>You want fixed payments:</strong> Easier to budget with a consistent monthly payment.</li>
            <li><strong>You prefer a fixed rate:</strong> No adjustment risk if rates rise.</li>
          </ul>
          <p className="text-gray-700">
            A <Link href="/mortgage/refinance-vs-home-equity-loan" className="text-primary hover:underline font-medium">cash-out refinance</Link> or home equity loan may be compared depending on your first mortgage rate and how much you need.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When a HELOC May Make Sense</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>You need flexibility:</strong> Ongoing expenses (e.g., renovations) or unsure of total amount.</li>
            <li><strong>You want to pay only on what you borrow:</strong> Interest accrues on the balance drawn, not the full credit line.</li>
            <li><strong>You may draw and repay repeatedly:</strong> During the draw period, repaid amounts can be borrowed again.</li>
          </ul>
          <p className="text-gray-700">
            HELOCs have variable rates—if the index rises, your rate and payment can increase. Some lenders offer fixed-rate options on portions of the balance.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">CLTV and Lien Position</h2>
          <p className="text-gray-700 mb-4">
            Lenders typically limit total borrowing to a percentage of your home&apos;s value—often 80–85% <strong>CLTV</strong> (Combined Loan-to-Value: first mortgage + second lien). Both home equity loans and HELOCs are second liens behind your first mortgage. Your existing <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link> and home value affect how much you can borrow.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about home equity loan vs HELOC">
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Home equity loans and lines of credit</li>
            <li>Federal Reserve – Consumer credit disclosure rules</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Mortgage Calculators', href: '/mortgage-tools' }}
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
            Terms, rates, and eligibility for home equity loans and HELOCs vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
