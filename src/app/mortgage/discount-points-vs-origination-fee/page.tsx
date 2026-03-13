import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discount Points vs Origination Fee: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Discount points lower your rate; origination fees cover processing. Learn the difference and how they appear on your Loan Estimate.',
  openGraph: {
    title: 'Discount Points vs Origination Fee: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the difference between discount points and origination fees.',
  },
};

const ARTICLE_SLUG = 'discount-points-vs-origination-fee';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Discount Points vs Origination Fee',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/discount-points-vs-origination-fee';

const FAQ_ITEMS = [
  {
    question: 'What is the difference between discount points and origination fees?',
    answer:
      'Discount points are optional fees you pay to lower your interest rate. Origination fees are charges for processing the loan. Both appear in the "Origination Charges" section of the Loan Estimate.',
  },
  {
    question: 'Are discount points tax deductible?',
    answer:
      'Discount points on a purchase mortgage may be deductible in the year paid. Origination fees may be deductible over the life of the loan. Consult a tax professional for your situation.',
  },
  {
    question: 'Should I pay discount points?',
    answer:
      'It depends on how long you plan to keep the loan. If you stay long enough, the savings from the lower rate can exceed the cost of the points. Use a break-even analysis.',
  },
  {
    question: 'Can I negotiate origination fees?',
    answer:
      'Some fees may be negotiable. Compare offers from multiple lenders and ask about the breakdown of origination charges.',
  },
];

export default function DiscountPointsVsOriginationFeePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Discount Points vs Origination Fee: A Guide for U.S. Homebuyers',
    description:
      'Discount points lower your rate; origination fees cover processing. Learn the difference and how they appear on your Loan Estimate.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Discount Points vs Origination Fee: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Both <strong>discount points</strong> and <strong>origination fees</strong> appear in the origination
            charges section of your Loan Estimate. But they serve different purposes: discount points are optional
            fees you pay to lower your interest rate; origination fees are charges for processing the loan.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding the difference helps you compare loan offers and decide whether paying points makes sense for
            your situation. Learn more in our{' '}
            <Link href="/mortgage/what-is-mortgage-points" className="text-primary hover:underline font-medium">
              What are Mortgage Points?
            </Link>{' '}
            and{' '}
            <Link href="/mortgage/what-is-origination-fee" className="text-primary hover:underline font-medium">
              What is an Origination Fee?
            </Link>{' '}
            guides.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Discount Points</h2>
          <p className="text-gray-700 mb-4">
            One discount point typically equals 1% of the loan amount and may lower your interest rate by about 0.25%
            (the exact reduction varies). Paying points is optional — you pay more upfront to reduce your rate and
            monthly payment over time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Origination Fee</h2>
          <p className="text-gray-700 mb-4">
            The origination fee is a charge for processing and underwriting the loan. It is not optional in the same
            way — it is a cost of obtaining the loan. Lenders may structure it as a percentage of the loan amount or a
            flat fee.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions">
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
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
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
            Points and fees vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
