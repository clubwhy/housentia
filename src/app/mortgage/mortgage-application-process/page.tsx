import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Application Process: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn the steps of the mortgage application process: from pre-approval to closing. Understand Loan Estimate, underwriting, and what to expect.',
  openGraph: {
    title: 'Mortgage Application Process: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand the mortgage application process from start to finish.',
  },
};

const ARTICLE_SLUG = 'mortgage-application-process';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Application Process',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-application-process';

const FAQ_ITEMS = [
  {
    question: 'How long does the mortgage process take?',
    answer:
      'From application to closing typically takes 30 to 45 days, though it can vary. Delays can occur with appraisals, title issues, or document requests.',
  },
  {
    question: 'What documents do I need for a mortgage application?',
    answer:
      'Common documents include pay stubs, W-2s, tax returns, bank statements, and ID. Self-employed borrowers may need additional documentation.',
  },
  {
    question: 'When do I get the Loan Estimate?',
    answer:
      'Lenders must provide a Loan Estimate within 3 business days of receiving your application (for most residential mortgages).',
  },
  {
    question: "What happens after I'm approved?",
    answer:
      'After conditional approval, the lender orders an appraisal and may request additional documents. Once clear to close, you receive the Closing Disclosure and schedule closing.',
  },
];

export default function MortgageApplicationProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Application Process: A Guide for U.S. Homebuyers',
    description:
      'Learn the steps of the mortgage application process from pre-approval to closing. Understand Loan Estimate, underwriting, and what to expect.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Application Process: A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            The <strong>mortgage application process</strong> typically involves several steps: pre-approval or
            prequalification, formal application, Loan Estimate, underwriting, appraisal, conditional approval, Closing
            Disclosure, and finally closing.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding this process helps you know what to expect, when to provide documents, and how long it may
            take. TRID rules (Loan Estimate and Closing Disclosure) require lenders to provide standardized disclosures
            at key stages.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Steps</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong>Pre-approval or prequalification</strong> — Get an estimate of what you can borrow before house hunting.
            </li>
            <li>
              <strong>Formal application</strong> — Submit application and documents when you have a purchase contract (or for refinance).
            </li>
            <li>
              <strong>Loan Estimate</strong> — Within 3 business days, you receive a Loan Estimate with estimated terms and costs.
            </li>
            <li>
              <strong>Underwriting</strong> — The lender reviews your application, credit, income, assets, and the property.
            </li>
            <li>
              <strong>Appraisal</strong> — An appraiser assesses the property value.
            </li>
            <li>
              <strong>Conditional approval / Clear to close</strong> — Lender approves subject to conditions, then clears for closing.
            </li>
            <li>
              <strong>Closing Disclosure</strong> — At least 3 business days before closing, you receive the final disclosure.
            </li>
            <li>
              <strong>Closing</strong> — Sign documents, fund the loan, and take ownership.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <p className="text-gray-700 mb-4">
            For more detail on specific steps, see:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><Link href="/mortgage/mortgage-pre-approval" className="text-primary hover:underline">Mortgage Pre-Approval</Link></li>
            <li><Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline">What is a Loan Estimate</Link></li>
            <li><Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline">What is a Closing Disclosure</Link></li>
            <li><Link href="/mortgage/mortgage-underwriting-explained" className="text-primary hover:underline">Mortgage Underwriting Explained</Link></li>
          </ul>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about the mortgage process">
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
            The mortgage process varies by lender and loan type.
          </p>
        </section>
      </main>
    </div>
  );
}
