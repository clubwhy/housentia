import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How DTI Affects Mortgage Approval: A Guide for U.S. Homebuyers | Housentia',
  description:
    'DTI (debt-to-income ratio) is a key factor in mortgage approval. Learn how lenders use it, typical limits, and how to improve your DTI.',
  openGraph: {
    title: 'How DTI Affects Mortgage Approval: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand how DTI affects your mortgage approval.',
  },
};

const ARTICLE_SLUG = 'how-dti-affects-mortgage-approval';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'How DTI Affects Mortgage Approval',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-dti-affects-mortgage-approval';

const FAQ_ITEMS = [
  {
    question: 'What DTI do lenders prefer?',
    answer:
      'Many conventional programs prefer a back-end DTI of 36% or below, with a housing ratio of 28% or below. Some programs allow higher DTI with compensating factors.',
  },
  {
    question: 'Can I get a mortgage with a high DTI?',
    answer:
      'Some programs allow DTI above 43%. FHA and VA may have different guidelines. Compensating factors like reserves or a strong credit score may help.',
  },
  {
    question: 'How can I lower my DTI?',
    answer:
      'Pay down debt, increase income, or choose a less expensive home. Paying off a car loan or credit card can reduce your monthly debt obligations.',
  },
  {
    question: 'Is DTI the only factor in approval?',
    answer:
      'No. Lenders also consider credit score, employment history, assets, and the property. DTI is one of several important factors.',
  },
];

export default function HowDTIAffectsMortgageApprovalPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'How DTI Affects Mortgage Approval: A Guide for U.S. Homebuyers',
    description:
      'DTI is a key factor in mortgage approval. Learn how lenders use it, typical limits, and how to improve your DTI.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How DTI Affects Mortgage Approval: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            Your <strong>debt-to-income ratio (DTI)</strong> is one of the most important factors lenders use when
            deciding whether to approve your mortgage. DTI compares your monthly debt payments to your gross monthly
            income.
          </p>
          <p className="text-gray-700 mb-4">
            Lenders use DTI to assess whether you can afford the new mortgage payment along with your existing debts. A
            lower DTI generally improves your chances of approval and may help you qualify for better terms.
          </p>
          <p className="text-gray-700">
            For a detailed explanation of how DTI is calculated, see our{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">
              What is DTI?
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical DTI Limits</h2>
          <p className="text-gray-700 mb-4">
            Many conventional programs prefer a back-end DTI of 36% or below and a front-end (housing) ratio of 28% or
            below. Qualified Mortgage (QM) rules generally cap DTI at 43% for certain loans, though there are
            exceptions. FHA and VA have their own guidelines.
          </p>
          <p className="text-gray-700">
            Lenders may accept higher DTI with compensating factors such as significant reserves, a strong credit
            score, or a low LTV.
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
          glossary={[{ label: 'DTI', href: '/mortgage-glossary/dti' }]}
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
            DTI guidelines vary by lender and program.
          </p>
        </section>
      </main>
    </div>
  );
}
