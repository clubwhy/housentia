import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Renovation Loan? | Housentia',
  description:
    'A renovation loan finances both the purchase and renovation of a home. Learn about FHA 203k, Fannie Mae HomeStyle, and other renovation programs.',
  openGraph: { title: 'What Is a Renovation Loan? | Housentia', description: 'Understand renovation loans for homebuyers.' },
};

const ARTICLE_SLUG = 'renovation-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Renovation Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/renovation-loan';

const FAQ_ITEMS = [
  { question: 'What is a renovation loan?', answer: 'A renovation loan finances both the purchase (or refinance) and the cost of renovating a home. The loan amount is based on the home\'s value after improvements.' },
  { question: 'What are common renovation loan programs?', answer: 'FHA 203k (limited and standard), Fannie Mae HomeStyle Renovation, and Freddie Mac CHOICERenovation are common. Each has different requirements and limits.' },
  { question: 'How are renovation funds disbursed?', answer: 'Funds are typically held in escrow and released as work is completed. An inspector may verify completion before each draw.' },
  { question: 'Can I use a renovation loan for a refinance?', answer: 'Yes. Programs like HomeStyle and CHOICERenovation allow refinancing to include renovation costs. FHA 203k can be used for purchase or refinance.' },
];

export default function RenovationLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Renovation Loan?', description: 'A renovation loan finances purchase and renovation. Learn how it works.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Renovation Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>renovation loan</strong> finances both the purchase (or refinance) and the cost of renovating a home. The loan amount is based on the &quot;as-completed&quot; value. See <Link href="/mortgage/fha-203k-loan" className="text-primary hover:underline font-medium">What Is an FHA 203k Loan</Link>, <Link href="/mortgage/construction-loan" className="text-primary hover:underline font-medium">What Is a Construction Loan</Link>, and <Link href="/mortgage/fha-loan" className="text-primary hover:underline font-medium">What Is an FHA Loan</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about renovation loan">
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
          <p className="text-gray-700 text-sm">Renovation loan programs vary by lender.</p>
        </section>
      </main>
    </div>
  );
}
