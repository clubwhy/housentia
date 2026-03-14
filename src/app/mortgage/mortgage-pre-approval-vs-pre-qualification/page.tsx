import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Pre-Approval vs Pre-Qualification: What\'s the Difference? | Housentia',
  description:
    'Pre-approval and prequalification both estimate how much you can borrow, but they differ in rigor. Learn the key differences and when each matters for home buying.',
  openGraph: {
    title: 'Mortgage Pre-Approval vs Pre-Qualification: What\'s the Difference? | Housentia',
    description: 'Understand how pre-approval and prequalification differ and which one strengthens your offer.',
  },
};

const ARTICLE_SLUG = 'mortgage-pre-approval-vs-pre-qualification';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Pre-Approval vs Pre-Qualification',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-pre-approval-vs-pre-qualification';

const FAQ_ITEMS = [
  {
    question: 'What is the main difference between pre-approval and prequalification?',
    answer:
      'Prequalification is typically a quick estimate based on self-reported information. Pre-approval involves verification of your income, assets, and credit. Lenders pull your credit and review documents for pre-approval, making it stronger and more meaningful to sellers.',
  },
  {
    question: 'Which one should I get before house hunting?',
    answer:
      'Pre-approval is generally recommended. It shows sellers and real estate agents that a lender has verified your finances and conditionally approved a loan amount. A pre-approval letter can strengthen your offer when competing for a home.',
  },
  {
    question: 'Does prequalification affect my credit score?',
    answer:
      'It depends. A soft inquiry (pre-qual) typically does not affect your score. A pre-approval usually involves a hard credit pull, which may have a small, temporary effect. Multiple mortgage inquiries within a short window (e.g., 14–45 days) are often counted as one for scoring.',
  },
  {
    question: 'Is pre-approval a guarantee I will get a loan?',
    answer:
      'No. Pre-approval is conditional. Final approval depends on the property (appraisal, title), final verification of your finances, and underwriting. Your situation or the property could change before closing.',
  },
  {
    question: 'Can I have both pre-approval and prequalification?',
    answer:
      'Yes. Some borrowers get prequalified first to get a rough idea of their budget, then pursue pre-approval when they are ready to make offers. Pre-approval is the one that matters most when you are serious about buying.',
  },
];

export default function MortgagePreApprovalVsPreQualificationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Pre-Approval vs Pre-Qualification: What\'s the Difference?',
    description:
      'Pre-approval and prequalification both estimate how much you can borrow. This guide explains the key differences and when each matters for home buying.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Pre-Approval vs Pre-Qualification: What's the Difference?" breadcrumbs={BREADCRUMBS} />
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
            <strong>Prequalification</strong> and <strong>pre-approval</strong> are both ways to estimate how much you might borrow for a mortgage. They sound similar, but they differ in rigor. Prequalification is typically a quick estimate based on what you tell the lender. Pre-approval involves verification of your income, assets, and credit—making it stronger and more meaningful when you are ready to make an offer.
          </p>
          <p className="text-gray-700">
            This guide explains the key differences and when each matters for home buying.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Prequalification?</h2>
          <p className="text-gray-700 mb-4">
            <strong>Prequalification</strong> is usually a preliminary estimate based on self-reported information. You tell the lender about your income, assets, debts, and credit, and they give you an estimated loan amount and rate. There is typically no formal verification or credit pull at this stage.
          </p>
          <p className="text-gray-700 mb-4">
            Prequalification is useful for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Getting a rough idea of your budget before you start house hunting</li>
            <li>Understanding what loan types might work for you</li>
            <li>Identifying what you may need to improve (e.g., paying down debt, building credit)</li>
          </ul>
          <p className="text-gray-700">
            Because it is not verified, prequalification does not carry the same weight as pre-approval with sellers or real estate agents. For more on prequalification, see our{' '}
            <Link href="/mortgage/prequalify" className="text-primary hover:underline font-medium">
              Mortgage Prequalification
            </Link>
            {' '}guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Pre-Approval?</h2>
          <p className="text-gray-700 mb-4">
            <strong>Pre-approval</strong> means a lender has reviewed your financial documents—pay stubs, tax returns, bank statements, W-2s—and performed a credit check. Based on that verification, they conditionally approve you for a specific loan amount. You receive a pre-approval letter that you can show to sellers and agents.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-approval is stronger because:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Your income and assets are verified</li>
            <li>Your credit has been pulled and reviewed</li>
            <li>You have a conditional commitment for a specific amount</li>
            <li>Sellers and agents view it as more reliable</li>
          </ul>
          <p className="text-gray-700">
            Pre-approval is still conditional. Final approval depends on the property (appraisal, title) and final underwriting. For more on pre-approval, see our{' '}
            <Link href="/mortgage/mortgage-pre-approval" className="text-primary hover:underline font-medium">
              Mortgage Pre-Approval
            </Link>
            {' '}guide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Factor</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Prequalification</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Pre-Approval</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">Verification</td>
                  <td className="px-4 py-3">Typically self-reported</td>
                  <td className="px-4 py-3">Documents verified</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">Credit check</td>
                  <td className="px-4 py-3">Usually soft or none</td>
                  <td className="px-4 py-3">Hard pull typically</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">Time to obtain</td>
                  <td className="px-4 py-3">Quick (minutes to hours)</td>
                  <td className="px-4 py-3">Days (document review)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">Strength for offers</td>
                  <td className="px-4 py-3">Lower</td>
                  <td className="px-4 py-3">Higher</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Letter</td>
                  <td className="px-4 py-3">May or may not provide</td>
                  <td className="px-4 py-3">Pre-approval letter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Get Each</h2>
          <p className="text-gray-700 mb-4">
            <strong>Prequalification</strong> can be a good first step when you are just starting to explore. It helps you understand your budget and what you might need to do to qualify. It does not require a credit pull in many cases.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Pre-approval</strong> is the next step when you are ready to make offers. Get pre-approved before or early in your house hunt. Many real estate agents and sellers expect to see a pre-approval letter with an offer. It shows you are a serious buyer and have been vetted by a lender.
          </p>
          <p className="text-gray-700">
            Pre-approval letters often expire (e.g., 60–90 days). If your situation changes or the letter expires, you may need to update or renew your pre-approval.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about pre-approval vs prequalification">
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
          <p className="text-gray-700 mb-4">This guide is based on publicly available consumer education resources, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>Consumer education on mortgage pre-approval and prequalification</li>
          </ul>
          <p className="text-gray-700 mb-4">Additional resources:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                consumerfinance.gov
              </a>
            </li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Pre-approval', href: '/mortgage-glossary/pre-approval' }, { label: 'Prequalification', href: '/mortgage-glossary/prequalification' }]}
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
          <p className="text-gray-700 text-sm mb-2">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and borrower circumstances.
          </p>
          <p className="text-gray-700 text-sm">
            Readers should consult a licensed mortgage professional or financial advisor for advice specific to their situation.
          </p>
        </section>
      </main>
    </div>
  );
}
