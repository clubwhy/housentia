import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Approval Process: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn how mortgage approval works: conditional approval, final approval, and clear to close. Understand what lenders evaluate and what happens at each stage.',
  openGraph: {
    title: 'Mortgage Approval Process: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the mortgage approval process from conditional to final approval.',
  },
};

const ARTICLE_SLUG = 'mortgage-approval-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Approval Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-approval-process';

const FAQ_ITEMS = [
  {
    question: 'What is conditional approval?',
    answer:
      'Conditional approval means the lender has approved you subject to certain conditions—for example, providing additional documents, a satisfactory appraisal, or clearing title issues. Once conditions are met, you may receive clear to close.',
  },
  {
    question: 'What is clear to close?',
    answer:
      'Clear to close means the lender has approved the loan and all conditions have been satisfied. You can proceed to closing. You will receive the Closing Disclosure and schedule the signing.',
  },
  {
    question: 'How long does mortgage approval take?',
    answer:
      'From application to conditional approval often takes one to two weeks. Final approval (clear to close) depends on how quickly conditions are met—typically a few days to a week after conditional approval.',
  },
  {
    question: 'Can my approval be denied after conditional approval?',
    answer:
      'Yes. If conditions are not met—for example, the appraisal comes in low, your financial situation changes, or new credit issues appear—the lender may withdraw or deny the approval. Stay in contact with your lender and avoid major financial changes.',
  },
  {
    question: 'What should I avoid after conditional approval?',
    answer:
      'Avoid major purchases, new credit, job changes, or large deposits that cannot be explained. These can affect your qualification and delay or derail approval.',
  },
];

export default function MortgageApprovalProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Approval Process: A Guide for U.S. Homebuyers',
    description:
      'Learn how mortgage approval works from conditional approval to clear to close. Understand what lenders evaluate and what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Approval Process: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>mortgage approval process</strong> moves from application through underwriting to conditional approval, then final approval (clear to close). Understanding each stage helps you know what to expect, when to provide documents, and what to avoid during the process.
          </p>
          <p className="text-gray-700">
            This guide explains conditional approval, final approval, clear to close, and what happens if conditions are not met.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stages of Mortgage Approval</h2>
          <p className="text-gray-700 mb-4">
            Approval typically follows these stages:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong>Application submitted</strong> — You have applied and the lender has received your documents. Underwriting begins.
            </li>
            <li>
              <strong>Underwriting review</strong> — The lender evaluates credit, income, assets, debt, and the property. See{' '}
              <Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline font-medium">
                Mortgage Underwriting Explained
              </Link>
            </li>
            <li>
              <strong>Conditional approval</strong> — The lender approves you subject to conditions (e.g., appraisal, title, additional documents).
            </li>
            <li>
              <strong>Conditions satisfied</strong> — You submit requested items; appraisal and title are completed.
            </li>
            <li>
              <strong>Clear to close</strong> — All conditions are met. The lender approves the loan for closing. You receive the Closing Disclosure.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conditional Approval</h2>
          <p className="text-gray-700 mb-4">
            <strong>Conditional approval</strong> (or &quot;approval with conditions&quot;) means the lender has approved your application based on the information provided, but certain items must be completed before you can close. Common conditions include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Appraisal satisfactory to the lender</li>
            <li>Title search and insurance clear</li>
            <li>Additional documentation (e.g., letter of explanation, updated bank statement)</li>
            <li>Verification of employment (VOE) or other verifications</li>
          </ul>
          <p className="text-gray-700">
            Respond to condition requests promptly. Delays in providing documents can push back your closing date.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Clear to Close</h2>
          <p className="text-gray-700 mb-4">
            <strong>Clear to close</strong> means the lender has approved the loan and all conditions have been satisfied. You can proceed to closing. You will receive the Closing Disclosure at least 3 business days before closing. Review it carefully and compare it to your Loan Estimate.
          </p>
          <p className="text-gray-700">
            For more on what happens at closing, see our{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">
              Mortgage Closing Process
            </Link>
            {' '}guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Avoid After Conditional Approval</h2>
          <p className="text-gray-700 mb-4">
            Lenders may perform a final credit check or verification before closing. To avoid derailing your approval:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Do not make large purchases or open new credit</li>
            <li>Do not change jobs without discussing with your lender</li>
            <li>Do not make large, unexplained deposits into your bank accounts</li>
            <li>Do not miss payments on existing debts</li>
          </ul>
          <p className="text-gray-700">
            If your situation changes, inform your lender. Transparency helps avoid surprises at closing.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about mortgage approval">
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
          <p className="text-gray-700 mb-4">This guide is based on publicly available consumer education resources.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">consumerfinance.gov</a></li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Underwriting', href: '/mortgage-glossary/underwriting' }]}
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
            The approval process varies by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
