import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W2 vs Self Employed Mortgage Qualification | Housentia',
  description:
    'W-2 employees and self-employed borrowers face different documentation and qualification paths. Compare requirements and options.',
  openGraph: { title: 'W2 vs Self Employed Mortgage Qualification | Housentia', description: 'Compare W-2 vs self-employed mortgage qualification.' },
};

const ARTICLE_SLUG = 'w2-vs-self-employed-mortgage-qualification';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'W2 vs Self Employed Mortgage Qualification' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/w2-vs-self-employed-mortgage-qualification';

const FAQ_ITEMS = [
  { question: 'Is it harder to get a mortgage if I am self-employed?', answer: 'Often yes. Lenders use tax returns for self-employed income, which may show lower taxable income due to deductions. Documentation can be more complex.' },
  { question: 'What documents do W-2 employees need?', answer: 'Pay stubs, W-2s, and often employment verification. Income is typically calculated from current pay.' },
  { question: 'What documents do self-employed borrowers need?', answer: '2 years of personal and business tax returns, P&L statements, 1099s, and sometimes bank statements.' },
  { question: 'Can self-employed borrowers use bank statement programs?', answer: 'Yes. Non-QM bank statement loans use bank deposits instead of tax returns. These may have different rates and terms.' },
];

export default function W2VsSelfEmployedMortgageQualificationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'W2 vs Self Employed Mortgage Qualification', description: 'Compare W-2 and self-employed mortgage qualification.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="W2 vs Self Employed Mortgage Qualification" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>W-2 vs self-employed mortgage qualification</strong> differs mainly in income documentation. W-2 employees use pay stubs and W-2s; self-employed borrowers typically need tax returns and P&L statements. See <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower</Link>, <Link href="/mortgage/how-self-employed-income-is-verified" className="text-primary hover:underline font-medium">How Self Employed Income Is Verified</Link>, and <Link href="/mortgage/non-qm-loan" className="text-primary hover:underline font-medium">Non-QM Loan</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about W2 vs self-employed">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Non-QM Scenario Comparison', href: '/tools/non-qm-scenario-comparison' }} className="mb-10" />
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
