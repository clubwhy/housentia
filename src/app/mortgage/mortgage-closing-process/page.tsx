import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Closing Process: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn what happens at mortgage closing: signing documents, funding the loan, and taking ownership. Understand the 3-day rule and what to bring.',
  openGraph: {
    title: 'Mortgage Closing Process: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the mortgage closing process and what to expect.',
  },
};

const ARTICLE_SLUG = 'mortgage-closing-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Closing Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-closing-process';

const FAQ_ITEMS = [
  {
    question: 'What happens at closing?',
    answer:
      'At closing, you sign the loan documents and other paperwork, the lender funds the loan, and the title is transferred. You receive the keys (for a purchase) and become the owner.',
  },
  {
    question: 'What is the 3-day rule?',
    answer:
      'You must receive the Closing Disclosure at least 3 business days before closing. This gives you time to review the final terms. Certain changes may trigger a new 3-day period.',
  },
  {
    question: 'What do I need to bring to closing?',
    answer:
      'Typically: a government-issued ID, the Closing Disclosure (if you have it), and a certified or cashier\'s check for the amount due at closing (if not wired).',
  },
  {
    question: 'How long does closing take?',
    answer:
      'The signing itself often takes 30 to 60 minutes. Funding and recording may happen the same day or shortly after.',
  },
];

export default function MortgageClosingProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Closing Process: A Guide for U.S. Homebuyers',
    description:
      'Learn what happens at mortgage closing: signing documents, funding the loan, and taking ownership.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Closing Process: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Closing</strong> (also called settlement) is the final step in the mortgage process. At closing, you
            sign the loan documents, the lender funds the loan, and — for a purchase — you receive the keys and become
            the owner of the home.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding the closing process helps you know what to expect, what to bring, and what happens after you
            sign. TRID rules require you to receive the Closing Disclosure at least 3 business days before closing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Before Closing</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Receive and review the Closing Disclosure (at least 3 business days before)</li>
            <li>Confirm the amount due at closing (cash to close)</li>
            <li>Arrange for funds (wire or certified check, as instructed)</li>
            <li>Schedule a final walkthrough of the property (for purchases)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">At Closing</h2>
          <p className="text-gray-700 mb-4">
            You will sign several documents, including the promissory note (your promise to repay), the mortgage or deed
            of trust (securing the loan with the property), and the Closing Disclosure. The settlement agent or closing
            attorney will guide you through each form.
          </p>
          <p className="text-gray-700">
            After signing, the lender funds the loan, and the deed is recorded. For a purchase, you receive the keys.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about closing">
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
          glossary={[{ label: 'Closing', href: '/mortgage-glossary/closing' }]}
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
            Closing procedures vary by state and lender.
          </p>
        </section>
      </main>
    </div>
  );
}
