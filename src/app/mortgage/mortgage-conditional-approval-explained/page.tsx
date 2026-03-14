import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Conditional Approval Explained | Housentia',
  description:
    'Conditional approval means the lender has approved you subject to certain conditions. Learn what conditions are, how to satisfy them, and what happens next.',
  openGraph: {
    title: 'Mortgage Conditional Approval Explained | Housentia',
    description: 'Understand mortgage conditional approval and how to clear conditions.',
  },
};

const ARTICLE_SLUG = 'mortgage-conditional-approval-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Conditional Approval Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-conditional-approval-explained';

const FAQ_ITEMS = [
  {
    question: 'What is conditional approval?',
    answer:
      'Conditional approval means the lender has approved your application based on the information provided, but certain items must be completed before you can close. Once conditions are satisfied, you may receive clear to close.',
  },
  {
    question: 'What are common conditions?',
    answer:
      'Common conditions include: appraisal satisfactory to the lender, title clear, additional documentation (e.g., letter of explanation, updated bank statement), and verification of employment.',
  },
  {
    question: 'How long does it take to clear conditions?',
    answer:
      'It depends on the conditions. Providing documents promptly can take a few days. Appraisal and title work may take a week or more. Respond quickly to minimize delays.',
  },
  {
    question: 'Can conditional approval be denied?',
    answer:
      'Yes. If conditions are not met—for example, the appraisal comes in low, title issues cannot be resolved, or your financial situation changes—the lender may withdraw or deny the approval.',
  },
];

export default function MortgageConditionalApprovalExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Conditional Approval Explained',
    description:
      'Conditional approval means the lender has approved you subject to conditions. Learn what to expect and how to clear them.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Conditional Approval Explained" breadcrumbs={BREADCRUMBS} />
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
            <strong>Conditional approval</strong> (or &quot;approval with conditions&quot;) means the lender has approved your application based on the information provided, but certain items must be completed before you can close. Once you satisfy the conditions, the lender can issue clear to close.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Conditions</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Appraisal satisfactory to the lender (value supports the loan)</li>
            <li>Title search and insurance clear (no liens or defects)</li>
            <li>Additional documentation (letter of explanation, updated bank statement, etc.)</li>
            <li>Verification of employment (VOE)</li>
            <li>Source of funds for large deposits</li>
          </ul>
          <p className="text-gray-700">
            Your lender will send you a list of conditions. Provide each item as requested. See{' '}
            <Link href="/mortgage/mortgage-approval-process" className="text-primary hover:underline font-medium">
              Mortgage Approval Process
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Clearing Conditions</h2>
          <p className="text-gray-700 mb-4">
            Respond to condition requests as soon as possible. Submit documents through the channel your lender specifies (portal, email, etc.). The processor or underwriter will review and, once all conditions are satisfied, issue clear to close. Delays in providing documents can push back your closing date.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about conditional approval">
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
            Conditions vary by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
