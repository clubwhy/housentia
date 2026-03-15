import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an FHA 203k Loan? | Housentia',
  description:
    'FHA 203k loans finance purchase and renovation in one mortgage. Learn about limited vs. standard 203k and typical requirements.',
  openGraph: { title: 'What Is an FHA 203k Loan? | Housentia', description: 'Understand FHA 203k renovation loans.' },
};

const ARTICLE_SLUG = 'fha-203k-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is an FHA 203k Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/fha-203k-loan';

const FAQ_ITEMS = [
  { question: 'What is an FHA 203k loan?', answer: 'An FHA 203k loan is an FHA-insured mortgage that finances both the purchase and renovation of a home. The loan amount is based on the home\'s value after improvements.' },
  { question: 'What is limited vs. standard 203k?', answer: 'Limited 203k: smaller renovations (up to $35,000), simpler process. Standard 203k: larger renovations, structural work allowed, requires a HUD consultant.' },
  { question: 'What are the down payment requirements?', answer: 'Same as regular FHA: 3.5% down with a 580+ credit score, or 10% with lower credit. The down payment is based on the purchase price plus renovation costs.' },
  { question: 'What work can be financed?', answer: 'Structural repairs, kitchen/bath remodels, HVAC, roofing, and more. Luxury items (e.g., pools) may not be eligible. Limited 203k has caps on certain repairs.' },
];

export default function Fha203kLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is an FHA 203k Loan?', description: 'FHA 203k finances purchase and renovation. Learn limited vs. standard.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is an FHA 203k Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">An <strong>FHA 203k loan</strong> is an FHA-insured mortgage that finances both the purchase and renovation of a home. It comes in two types: <strong>limited</strong> (smaller projects, up to $35,000) and <strong>standard</strong> (larger renovations). See <Link href="/mortgage/renovation-loan" className="text-primary hover:underline font-medium">What Is a Renovation Loan</Link>, <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>, and <Link href="/mortgage/construction-loan" className="text-primary hover:underline font-medium">What Is a Construction Loan</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about FHA 203k">
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
          <p className="text-gray-700 text-sm">FHA 203k rules and eligibility vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
