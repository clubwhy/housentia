import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VA IRRRL Refinance | Housentia',
  description:
    'VA IRRRL (Interest Rate Reduction Refinance Loan) is a streamlined refinance for VA borrowers. Learn eligibility and benefits.',
  openGraph: { title: 'VA IRRRL Refinance | Housentia', description: 'Understand VA IRRRL refinancing.' },
};

const ARTICLE_SLUG = 'va-irrrl-refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'VA IRRRL Refinance' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/va-irrrl-refinance';

const FAQ_ITEMS = [
  { question: 'What is a VA IRRRL?', answer: 'VA IRRRL (Interest Rate Reduction Refinance Loan) is a streamlined refinance for existing VA borrowers. It typically requires minimal documentation and no appraisal.' },
  { question: 'Who qualifies?', answer: 'You must have an existing VA loan and be current on payments. The new rate must be lower than your current rate (with limited exceptions).' },
  { question: 'Is there a funding fee?', answer: 'VA IRRRL has a reduced funding fee (0.5% as of 2024). Veterans with disability may be exempt. The fee can be financed into the loan.' },
  { question: 'Can I get cash out with IRRRL?', answer: 'IRRRL is typically rate-and-term only. You may be able to refinance up to the amount of your existing loan plus closing costs and the funding fee.' },
];

export default function VaIrrrlRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'VA IRRRL Refinance', description: 'Learn about VA IRRRL eligibility and benefits.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="VA IRRRL Refinance" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>VA IRRRL</strong> (Interest Rate Reduction Refinance Loan) is a streamlined refinance for existing VA borrowers. It typically requires minimal documentation and no appraisal. See <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link>, <Link href="/mortgage/va-loan" className="text-primary hover:underline font-medium">What Is a VA Loan</Link>, and <Link href="/mortgage/can-you-refinance-with-bad-credit" className="text-primary hover:underline font-medium">Can You Refinance with Bad Credit</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about VA IRRRL">
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
          <p className="text-gray-700 text-sm">VA IRRRL rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
