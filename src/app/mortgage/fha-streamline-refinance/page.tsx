import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FHA Streamline Refinance | Housentia',
  description:
    'FHA streamline refinance simplifies the process with reduced documentation and no appraisal. Learn eligibility and net tangible benefit requirements.',
  openGraph: { title: 'FHA Streamline Refinance | Housentia', description: 'Understand FHA streamline refinancing.' },
};

const ARTICLE_SLUG = 'fha-streamline-refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'FHA Streamline Refinance' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/fha-streamline-refinance';

const FAQ_ITEMS = [
  { question: 'What is an FHA streamline refinance?', answer: 'An FHA streamline refinance is a simplified refinance for existing FHA borrowers. It typically requires minimal documentation, no appraisal, and no credit check in many cases.' },
  { question: 'Who qualifies?', answer: 'You must have an existing FHA loan and be current on payments. The refinance must provide a net tangible benefit (e.g., lower payment, lower rate, or shorter term).' },
  { question: 'Is there a credit check?', answer: 'Credit-qualified streamline may require a credit check. Non-credit-qualified streamline may not. Check with your lender for current FHA requirements.' },
  { question: 'Can I get cash out?', answer: 'FHA streamline is typically rate-and-term only—no cash out. For cash out, you would need a standard FHA refinance.' },
];

export default function FhaStreamlineRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'FHA Streamline Refinance', description: 'Learn about FHA streamline refinance eligibility and benefits.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="FHA Streamline Refinance" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">An <strong>FHA streamline refinance</strong> simplifies refinancing for existing FHA borrowers. It typically requires minimal documentation, no appraisal, and may not require a credit check. See <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link>, <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>, and <Link href="/mortgage/can-you-refinance-with-bad-credit" className="text-primary hover:underline font-medium">Can You Refinance with Bad Credit</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about FHA streamline">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">FHA streamline rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
