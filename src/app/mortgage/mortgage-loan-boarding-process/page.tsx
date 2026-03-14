import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Loan Boarding Process Explained | Housentia',
  description:
    'Loan boarding is when the servicer adds your loan to their system after closing. Learn what happens during the mortgage loan boarding process and what it means for you.',
  openGraph: {
    title: 'Mortgage Loan Boarding Process Explained | Housentia',
    description: 'Understand the mortgage loan boarding process.',
  },
};

const ARTICLE_SLUG = 'mortgage-loan-boarding-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Loan Boarding Process Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-loan-boarding-process';

const FAQ_ITEMS = [
  {
    question: 'What is loan boarding?',
    answer:
      'Loan boarding is when the mortgage servicer adds your loan to their servicing system after closing. They enter your loan details, set up your account, and prepare to collect payments and send statements. Until boarding is complete, you may not be able to set up online access or make payments.',
  },
  {
    question: 'How long does loan boarding take?',
    answer:
      'Typically a few days to two weeks after closing. The lender sends the loan file to the servicer, and the servicer enters the data and activates the account. Delays can occur during busy periods.',
  },
  {
    question: 'When will I receive my first statement?',
    answer:
      'Usually within a few weeks of closing, after the loan is boarded. Your first statement will show your payment amount, due date, and how to make payments. If you do not receive one, contact your servicer.',
  },
  {
    question: 'Can I make a payment before boarding is complete?',
    answer:
      'It depends. Some servicers accept payments before the account is fully set up; others ask you to wait. Your Closing Disclosure and welcome materials will indicate when and how to make your first payment. When in doubt, contact your servicer.',
  },
];

export default function MortgageLoanBoardingProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Loan Boarding Process Explained',
    description:
      'Loan boarding is when the servicer adds your loan to their system. Learn what it means for you.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Loan Boarding Process Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Loan boarding</strong> is the process of adding your mortgage to the servicer&apos;s system after closing. The servicer receives the loan file from the lender, enters your loan details, and sets up your account so they can collect payments, manage escrow, and send statements. As a borrower, you typically do not need to do anything—but understanding the process helps you know when to expect your first statement and when you can set up payments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens During Boarding</h2>
          <p className="text-gray-700 mb-4">
            The lender sends the closed loan file to the servicer. The servicer then:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Enters loan data (balance, rate, payment, due date)</li>
            <li>Sets up the escrow account if applicable</li>
            <li>Creates your borrower account</li>
            <li>Prepares to send your first statement and welcome materials</li>
          </ul>
          <p className="text-gray-700">
            Once boarding is complete, you can typically register for online access and set up payment options. See{' '}
            <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-primary hover:underline font-medium">
              Mortgage Payment Setup After Closing
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h2>
          <p className="text-gray-700 mb-4">
            Boarding usually takes a few days to two weeks after closing. The exact timing depends on the lender, servicer, and volume. Your first payment is typically not due for at least a month after closing, so there is usually enough time for boarding to complete before your first payment date.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about loan boarding">
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
            Procedures vary by lender and servicer.
          </p>
        </section>
      </main>
    </div>
  );
}
