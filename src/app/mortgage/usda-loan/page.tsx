import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a USDA Loan? | Housentia',
  description:
    'USDA loans are government-backed mortgages for eligible rural and suburban areas. Learn about zero down payment, income limits, and property requirements.',
  openGraph: { title: 'What Is a USDA Loan? | Housentia', description: 'Understand USDA loans for rural and suburban homebuyers.' },
};

const ARTICLE_SLUG = 'usda-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a USDA Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/usda-loan';

const FAQ_ITEMS = [
  { question: 'What is a USDA loan?', answer: 'A USDA loan is a government-backed mortgage from the U.S. Department of Agriculture for eligible rural and suburban areas. It offers 100% financing (no down payment) and competitive rates for qualified borrowers.' },
  { question: 'Who qualifies for a USDA loan?', answer: 'Borrowers must meet income limits for the area, use the home as a primary residence, and the property must be in an eligible rural or suburban location. Credit and income requirements apply.' },
  { question: 'Is there a down payment required?', answer: 'No. USDA loans offer 100% financing. You may still need to pay closing costs, though some can be financed or covered by seller concessions.' },
  { question: 'What are USDA loan limits?', answer: 'USDA does not set a maximum loan amount, but your income and the property\'s appraised value limit how much you can borrow. Income limits vary by area and household size.' },
];

export default function UsdaLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a USDA Loan?', description: 'USDA loans offer zero down payment for eligible rural and suburban areas. Learn requirements.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a USDA Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>USDA loan</strong> is a government-backed mortgage from the U.S. Department of Agriculture for eligible rural and suburban areas. It offers 100% financing (no down payment), competitive rates, and lower mortgage insurance than many other programs. See <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>, <Link href="/mortgage/va-loan" className="text-primary hover:underline font-medium">What Is a VA Loan</Link>, and <Link href="/mortgage/usda-vs-fha-loan" className="text-primary hover:underline font-medium">USDA vs FHA Loan</Link>.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>100% financing (no down payment)</li>
            <li>Income limits based on area and household size</li>
            <li>Property must be in an eligible rural or suburban location</li>
            <li>Primary residence only</li>
            <li>Upfront and annual guarantee fees (similar to FHA MIP)</li>
          </ul>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about USDA loan">
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
          <p className="text-gray-700 text-sm">USDA program rules and eligibility vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
