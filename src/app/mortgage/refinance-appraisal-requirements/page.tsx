import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Appraisal Requirements | Housentia',
  description:
    'Refinance appraisals verify your home\'s value. Learn when they are required, appraisal waivers, and what to expect.',
  openGraph: { title: 'Refinance Appraisal Requirements | Housentia', description: 'Understand refinance appraisal requirements.' },
};

const ARTICLE_SLUG = 'refinance-appraisal-requirements';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance Appraisal Requirements' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-appraisal-requirements';

const FAQ_ITEMS = [
  { question: 'Do I need an appraisal to refinance?', answer: 'Often yes. Conventional and cash-out refinances typically require an appraisal. FHA streamline and VA IRRRL usually do not.' },
  { question: 'What is an appraisal waiver?', answer: 'Some lenders offer appraisal waivers for rate-and-term refinances when the loan meets certain criteria (e.g., LTV, payment history). You may not need a new appraisal.' },
  { question: 'Who orders the appraisal?', answer: 'The lender orders it through an appraisal management company. You typically pay the fee upfront or at closing.' },
  { question: 'What if the appraisal comes in low?', answer: 'A low appraisal can affect your LTV and may limit how much you can refinance or cash out. You may need to bring more to closing or adjust the loan amount.' },
];

export default function RefinanceAppraisalRequirementsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance Appraisal Requirements', description: 'Learn when refinance appraisals are required and about waivers.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance Appraisal Requirements" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"> <strong>Refinance appraisal requirements</strong> vary by loan type. Conventional and cash-out typically require an appraisal; streamline programs often do not. Appraisal waivers may be available. See <Link href="/mortgage/what-is-an-appraisal-fee" className="text-primary hover:underline font-medium">What Is an Appraisal Fee</Link>, <Link href="/mortgage/streamline-refinance-explained" className="text-primary hover:underline font-medium">Streamline Refinance Explained</Link>, and <Link href="/mortgage/refinance-after-home-value-increase" className="text-primary hover:underline font-medium">Refinance After Home Value Increase</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about refinance appraisal">
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
          <p className="text-gray-700 text-sm">Appraisal requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
