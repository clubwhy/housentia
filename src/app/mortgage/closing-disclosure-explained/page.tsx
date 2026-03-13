import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Closing Disclosure Explained: A Guide for U.S. Homebuyers | Housentia',
  description:
    'A detailed walkthrough of the Closing Disclosure. Learn what each section means and how to compare it to your Loan Estimate.',
  openGraph: {
    title: 'Closing Disclosure Explained: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the Closing Disclosure form section by section.',
  },
};

const ARTICLE_SLUG = 'closing-disclosure-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Closing Disclosure Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/closing-disclosure-explained';

const FAQ_ITEMS = [
  {
    question: 'When do I receive the Closing Disclosure?',
    answer:
      'You must receive the Closing Disclosure at least 3 business days before closing. This gives you time to review the final terms and costs.',
  },
  {
    question: 'How does the Closing Disclosure compare to the Loan Estimate?',
    answer:
      'The Closing Disclosure uses a similar structure to the Loan Estimate. Compare the two to see if any costs changed. Some changes may trigger a new 3-day waiting period.',
  },
  {
    question: 'What are the main sections of the Closing Disclosure?',
    answer:
      'The form includes: Loan Terms, Projected Payments, Costs at Closing (with a comparison to the Loan Estimate), and Cash to Close.',
  },
  {
    question: 'What if I find errors on the Closing Disclosure?',
    answer:
      'Contact your lender or settlement agent immediately. Do not proceed to closing until you understand and accept the terms.',
  },
];

export default function ClosingDisclosureExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Closing Disclosure Explained: A Guide for U.S. Homebuyers',
    description:
      'A detailed walkthrough of the Closing Disclosure form. Learn what each section means and how to compare it to your Loan Estimate.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Closing Disclosure Explained: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>Closing Disclosure</strong> is the final disclosure you receive before closing. It shows the
            actual loan terms and closing costs. You must receive it at least 3 business days before closing to allow
            time for review.
          </p>
          <p className="text-gray-700 mb-4">
            This guide walks through the main sections. For a general overview, see our{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">
              What is a Closing Disclosure?
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Sections</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Loan Terms</strong> — Final loan amount, interest rate, monthly P&I</li>
            <li><strong>Projected Payments</strong> — Principal & interest, mortgage insurance, escrow</li>
            <li><strong>Costs at Closing</strong> — Detailed breakdown with comparison to Loan Estimate</li>
            <li><strong>Cash to Close</strong> — Total amount you need to bring to closing</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparing to the Loan Estimate</h2>
          <p className="text-gray-700 mb-4">
            The Closing Disclosure includes a comparison table showing the Loan Estimate figures alongside the final
            figures. Review this carefully. Some costs have tolerance limits — they cannot increase beyond a certain
            amount. Other costs may change.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about the Closing Disclosure">
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
          glossary={[{ label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' }]}
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
            Closing Disclosure rules are set by the CFPB under TRID.
          </p>
        </section>
      </main>
    </div>
  );
}
