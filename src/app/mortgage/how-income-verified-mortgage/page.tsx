import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Income Is Verified for a Mortgage: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Lenders verify income through pay stubs, W-2s, tax returns, and more. Learn what documents are needed for employed and self-employed borrowers.',
  openGraph: {
    title: 'How Income Is Verified for a Mortgage: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand how lenders verify income for mortgage approval.',
  },
};

const ARTICLE_SLUG = 'how-income-verified-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'How Income Is Verified for a Mortgage',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-income-verified-mortgage';

const FAQ_ITEMS = [
  {
    question: 'What documents do I need to verify income?',
    answer:
      'Typically: recent pay stubs (often 2 months), W-2s (2 years), and tax returns (2 years). Self-employed borrowers may need profit-and-loss statements and 1099s.',
  },
  {
    question: 'Do lenders verify employment?',
    answer:
      'Yes. Lenders often call your employer to confirm employment, job title, and income. They may also request a verbal verification of employment (VOE) or written form.',
  },
  {
    question: 'What if I am self-employed?',
    answer:
      'Self-employed borrowers typically provide tax returns (2 years), profit-and-loss statements, and possibly 1099s. Lenders may average income over 2 years. See our Self-Employed Borrower guide.',
  },
  {
    question: 'What income counts for a mortgage?',
    answer:
      'Lenders typically use stable, documented income: salary, wages, bonuses, overtime (if consistent), self-employment income, rental income, and certain other sources. Unstable or one-time income may not count.',
  },
];

export default function HowIncomeVerifiedMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'How Income Is Verified for a Mortgage: A Guide for U.S. Homebuyers',
    description:
      'Lenders verify income through pay stubs, W-2s, tax returns, and more. Learn what documents are needed for employed and self-employed borrowers.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Income Is Verified for a Mortgage: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Lenders must verify that you have sufficient income to repay the mortgage. They do this by reviewing
            documents such as pay stubs, W-2s, and tax returns, and often by contacting your employer.
          </p>
          <p className="text-gray-700 mb-4">
            The verification process varies for employed vs. self-employed borrowers. Self-employed borrowers often
            face additional documentation requirements because income can be more variable.
          </p>
          <p className="text-gray-700">
            For self-employed scenarios, see our{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">
              Self-Employed Borrower Scenarios
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Documents</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Pay stubs</strong> — Typically 2 months, showing year-to-date income</li>
            <li><strong>W-2s</strong> — Usually 2 years</li>
            <li><strong>Tax returns</strong> — Usually 2 years, with all schedules</li>
            <li><strong>Employment verification</strong> — VOE form or employer contact</li>
          </ul>
          <p className="text-gray-700">
            Self-employed borrowers may need profit-and-loss statements, 1099s, and business tax returns.
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
          calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }}
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
            Income verification requirements vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
