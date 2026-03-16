import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Self Employed Income Is Verified | Housentia',
  description:
    'Self-employed borrowers typically need tax returns, P&L statements, and 1099s. Learn how lenders verify self-employed income.',
  openGraph: { title: 'How Self Employed Income Is Verified | Housentia', description: 'Understand self-employed income verification.' },
};

const ARTICLE_SLUG = 'how-self-employed-income-is-verified';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'How Self Employed Income Is Verified' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-self-employed-income-is-verified';

const FAQ_ITEMS = [
  { question: 'How do lenders verify self-employed income?', answer: 'Typically 2 years of personal and business tax returns, P&L statements, 1099s, and bank statements. Lenders often average income over 2 years.' },
  { question: 'Why is self-employed income harder to qualify?', answer: 'Lenders use taxable income from tax returns, which may be lower due to deductions. Income can vary year to year.' },
  { question: 'Can I use bank statements instead of tax returns?', answer: 'Some non-QM bank statement programs accept bank statements. Conventional and FHA loans typically require tax returns.' },
  { question: 'What if my income dropped recently?', answer: 'Lenders may average 2 years or use the most recent year. Declining income can affect qualification.' },
];

export default function HowSelfEmployedIncomeIsVerifiedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'How Self Employed Income Is Verified', description: 'Learn how lenders verify self-employed income.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Self Employed Income Is Verified" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4"><strong>Self-employed income verification</strong> typically uses tax returns, profit-and-loss statements, and 1099s. Lenders often average 2 years of income because self-employed earnings can vary. See <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower</Link>, <Link href="/mortgage/mortgage-income-verification" className="text-primary hover:underline font-medium">Mortgage Income Verification</Link>, and <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline font-medium">How Income Is Verified for Mortgage</Link>.</p>
        </section>
        <section className="mb-10" aria-label="Frequently asked questions about self-employed income verification">
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
          <p className="text-gray-700 text-sm">Requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
