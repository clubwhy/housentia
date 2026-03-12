import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';

const ARTICLE_SLUG = 'refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Refinance Overview',
  });
})();

export default function RefinancePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero title="Refinance Overview" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Disclaimer variant="compact" className="mb-8" />
        <p className="text-gray-700 mb-8">Find out how refinancing your mortgage can save you money or help you access home equity. Details and calculators coming soon.</p>
        <div className="bg-gray-100 rounded-xl p-6 text-gray-500 text-center mb-10">[Refinance content coming soon]</div>
        <RelatedGuides articleSlug={ARTICLE_SLUG} />
      </main>
    </div>
  );
} 