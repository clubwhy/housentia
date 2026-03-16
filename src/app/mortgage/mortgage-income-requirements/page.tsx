import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Income Requirements | Housentia',
  description:
    'Lenders verify income to ensure you can repay. Learn typical income requirements, DTI limits, and documentation needs.',
  openGraph: { title: 'Mortgage Income Requirements | Housentia', description: 'Understand mortgage income requirements.' },
};

const ARTICLE_SLUG = 'mortgage-income-requirements';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Mortgage Income Requirements' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-income-requirements';

const FAQ_ITEMS = [
  { question: 'Is there a minimum income for a mortgage?', answer: 'No set minimum. Lenders use DTI—your income must support the payment plus other debts. Income must be stable and documented.' },
  { question: 'What income counts for mortgage qualification?', answer: 'W-2 wages, salary, bonuses, overtime, commission, self-employment, rental income, investments, alimony, child support (if counted), and other verifiable income.' },
  { question: 'How much income do I need for a mortgage?', answer: 'It depends on the loan amount, rate, and your debts. Use DTI: housing payment + debts divided by gross income. Many programs cap DTI around 43–50%.' },
  { question: 'What if my income is irregular?', answer: 'Lenders may average 2 years of income for self-employed or variable earners. Bonuses and overtime often need a 2-year history.' },
];

export default function MortgageIncomeRequirementsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Mortgage Income Requirements', description: 'Learn mortgage income requirements and documentation.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Income Requirements" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Mortgage income requirements</strong> ensure you can afford the loan. Lenders verify income and use DTI to assess affordability. There is no universal minimum income—what matters is that income supports the payment and other debts. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>, <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>, and <Link href="/mortgage/mortgage-income-verification" className="text-primary hover:underline font-medium">Mortgage Income Verification</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about mortgage income">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Affordability Calculator', href: '/tools/affordability-calculator' }} className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
