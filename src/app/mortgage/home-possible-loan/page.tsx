import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Home Possible Loan? | Housentia',
  description:
    'Home Possible is a Freddie Mac program for low- to moderate-income borrowers. Learn about 3% down, reduced MI, and income limits.',
  openGraph: { title: 'What Is a Home Possible Loan? | Housentia', description: 'Understand Freddie Mac Home Possible loans.' },
};

const ARTICLE_SLUG = 'home-possible-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a Home Possible Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/home-possible-loan';

const FAQ_ITEMS = [
  { question: 'What is a Home Possible loan?', answer: 'Home Possible is a Freddie Mac program for low- to moderate-income borrowers. It offers 3% down payment, reduced mortgage insurance, and flexible funding (e.g., gifts, grants).' },
  { question: 'Who qualifies for Home Possible?', answer: 'Borrowers must meet income limits (typically 80% of area median income) and complete homebuyer education. The property must be owner-occupied.' },
  { question: 'How does Home Possible differ from conventional?', answer: 'Home Possible allows 3% down with reduced PMI. Income limits apply. It is designed for first-time and repeat buyers in eligible areas.' },
  { question: 'Is Home Possible the same as HomeReady?', answer: 'No. Home Possible is Freddie Mac; HomeReady is Fannie Mae. Both offer low down payment options for eligible borrowers but have different eligibility rules.' },
];

export default function HomePossibleLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a Home Possible Loan?', description: 'Home Possible offers 3% down for eligible borrowers. Learn requirements.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a Home Possible Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">A <strong>Home Possible loan</strong> is a Freddie Mac program for low- to moderate-income borrowers. It offers 3% down payment, reduced mortgage insurance, and flexible funding. See <Link href="/mortgage/homeready-loan" className="text-primary hover:underline font-medium">What Is a HomeReady Loan</Link>, <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link>, and <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about Home Possible">
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
          <p className="text-gray-700 text-sm">Home Possible eligibility and rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
