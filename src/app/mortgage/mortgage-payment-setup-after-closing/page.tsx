import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Payment Setup After Closing | Housentia',
  description:
    'After closing, set up your mortgage payment with your servicer. Learn how to set up automatic payments, online access, and when your first payment is due.',
  openGraph: {
    title: 'Mortgage Payment Setup After Closing | Housentia',
    description: 'Understand how to set up your mortgage payment after closing.',
  },
};

const ARTICLE_SLUG = 'mortgage-payment-setup-after-closing';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Payment Setup After Closing',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-payment-setup-after-closing';

const FAQ_ITEMS = [
  {
    question: 'When can I set up my mortgage payment?',
    answer:
      'You can typically set up payments once your loan is boarded with the servicer—usually within a few days to a couple of weeks of closing. Your welcome letter or first statement will include instructions and a link to register for online access.',
  },
  {
    question: 'Should I set up automatic payments?',
    answer:
      'Automatic payments can help you avoid missing a due date. Many servicers offer autopay, and some may offer a small rate discount for enrolling. Ensure you have sufficient funds in your account before the payment date.',
  },
  {
    question: 'When is my first payment due?',
    answer:
      'Your first payment is typically due the month after the month in which you closed. For example, a March closing often means a May 1 first payment. Your Closing Disclosure and welcome letter will specify the exact date.',
  },
  {
    question: 'What if I do not receive a welcome letter?',
    answer:
      'Contact your servicer. Your Closing Disclosure shows who your servicer is. You can also find your servicer by checking the Mortgage Electronic Registration Systems (MERS) or by contacting your lender.',
  },
];

export default function MortgagePaymentSetupAfterClosingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Payment Setup After Closing',
    description:
      'After closing, set up your mortgage payment with your servicer. Learn how to set up autopay and when your first payment is due.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Payment Setup After Closing" breadcrumbs={BREADCRUMBS} />
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
            After closing, your loan is boarded with the servicer and you need to set up how you will make payments. Most servicers offer online access, automatic payments, and other options. Setting this up early helps you avoid missing your first payment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When You Can Set Up Payments</h2>
          <p className="text-gray-700 mb-4">
            Your loan must be boarded (added to the servicer&apos;s system) before you can set up payments. This typically happens within a few days to two weeks of closing. Your welcome letter or first statement will include a link to register for online access and set up payment options.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Options</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Online</strong> — Log in to the servicer&apos;s website and make a one-time payment or set up recurring payments</li>
            <li><strong>Automatic debit</strong> — Authorize the servicer to withdraw the payment from your bank account each month</li>
            <li><strong>Check or money order</strong> — Mail a check to the address on your statement</li>
            <li><strong>Phone</strong> — Some servicers allow payments by phone</li>
          </ul>
          <p className="text-gray-700">
            Automatic payments can help you avoid late fees. Ensure you have sufficient funds before the payment date. See{' '}
            <Link href="/mortgage/what-is-a-mortgage-payment" className="text-primary hover:underline font-medium">
              What Is a Mortgage Payment?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your First Payment</h2>
          <p className="text-gray-700 mb-4">
            Your first payment is typically due the month after the month in which you closed. The Closing Disclosure shows your first payment date. Set a reminder or enroll in autopay before that date. Missing the first payment can result in late fees and may affect your credit.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about payment setup">
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
            Payment options vary by servicer.
          </p>
        </section>
      </main>
    </div>
  );
}
