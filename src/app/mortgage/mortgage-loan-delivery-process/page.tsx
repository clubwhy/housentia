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
      'Loan delivery is when the lender sells or delivers the mortgage to an investor (such as Fannie Mae, Freddie Mac, or Ginnie Mae) in the secondary market. The lender receives funds to make more loans, and the investor owns the loan. Your terms do not change.',
  },
  {
    question: 'Does loan delivery affect my mortgage?',
    answer:
      'No. Your interest rate, payment amount, due date, and other terms stay the same. The investor may have different servicing requirements, and servicing may be transferred to a different company, but your loan contract does not change.',
  },
  {
    question: 'Who are the main investors?',
    answer:
      'Fannie Mae and Freddie Mac purchase conventional conforming loans. Ginnie Mae securitizes FHA, VA, and USDA loans. Private investors also purchase loans. The lender chooses the investor based on the loan type and guidelines.',
  },
  {
    question: 'When does loan delivery happen?',
    answer:
      'Typically within days to a few months after closing. The lender packages the loan with others and delivers them to the investor. This happens behind the scenes; you do not need to take any action.',
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Loan delivery</strong> is when the lender sells or delivers your mortgage to an investor in the secondary market. Most lenders do not keep loans on their books—they sell them to Fannie Mae, Freddie Mac, Ginnie Mae, or private investors to free up capital. Your loan terms do not change. Understanding this process helps you see why servicing may transfer and how the mortgage market works.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Loan Delivery Works</h2>
          <p className="text-gray-700 mb-4">
            After closing, the lender packages your loan with others and delivers them to an investor. The investor purchases the loans (or the rights to them) and may pool them into mortgage-backed securities. The lender receives funds to originate more loans. The investor (or a servicer acting on their behalf) may service the loan or transfer servicing to another company.
          </p>
          <p className="text-gray-700">
            See{' '}
            <Link href="/mortgage/mortgage-investor-guidelines-explained" className="text-primary hover:underline font-medium">
              Mortgage Investor Guidelines Explained
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What It Means for You</h2>
          <p className="text-gray-700 mb-4">
            Your loan contract does not change. You still owe the same amount at the same rate. The only thing that may change is who collects your payments (the servicer). If servicing transfers, you will receive a notice. See{' '}
            <Link href="/mortgage/mortgage-servicing-transfer-explained" className="text-primary hover:underline font-medium">
              Mortgage Servicing Transfer Explained
            </Link>
          </p>
        </section>

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
