import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { GuideArticleCard, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema } from '@/components/StructuredData';
import {
  getCategory,
  getArticlesByCategory,
  VALID_CATEGORY_SLUGS,
  getCategoryPath,
} from '@/lib/mortgage-guides';
import Link from 'next/link';
import type { Metadata } from 'next';

const ARTICLES_PER_PAGE = 12;
const BASE_URL = 'https://housentia.com';

type Props = { params: Promise<{ category: string }>; searchParams: Promise<{ page?: string }> };

export async function generateStaticParams() {
  return VALID_CATEGORY_SLUGS.map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category as Parameters<typeof getCategory>[0]);
  if (!cat) return { title: 'Mortgage Guides | Housentia' };
  return {
    title: `${cat.title} | Mortgage Guides | Housentia`,
    description: `${cat.description} Browse educational guides in this category.`,
    openGraph: {
      title: `${cat.title} | Mortgage Guides | Housentia`,
      description: cat.description,
    },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { page: pageParam } = await searchParams;

  if (!VALID_CATEGORY_SLUGS.includes(category as (typeof VALID_CATEGORY_SLUGS)[number])) {
    notFound();
  }

  const cat = getCategory(category as Parameters<typeof getCategory>[0]);
  if (!cat) notFound();

  const allArticles = getArticlesByCategory(category as Parameters<typeof getArticlesByCategory>[0]);
  const page = Math.max(1, parseInt(pageParam || '1', 10) || 1);
  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE) || 1;
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * ARTICLES_PER_PAGE;
  const articles = allArticles.slice(start, start + ARTICLES_PER_PAGE);

  const breadcrumbs = buildGuideBreadcrumbs({
    categorySlug: cat.slug,
    categoryTitle: cat.title,
    currentTitle: cat.title,
    isCategoryPage: true,
  });

  const pageUrl = `${BASE_URL}${getCategoryPath(cat.slug)}`;
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, { label: 'Mortgage Guides', href: '/mortgage-guides' }, { label: cat.title }],
    BASE_URL,
    pageUrl
  );
  const articleSchema = buildArticleSchema({
    headline: `${cat.title} | Mortgage Guides`,
    description: cat.description,
    url: pageUrl,
  });

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema]} />
      <PageHero title={cat.title} breadcrumbs={breadcrumbs} />
      <main
        className="max-w-5xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <p className="text-gray-700 mb-8">{cat.description}</p>

        {/* Article grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <GuideArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            className="mt-10 flex items-center justify-center gap-2"
            aria-label="Category pagination"
          >
            {currentPage > 1 && (
              <Link
                href={currentPage === 2 ? getCategoryPath(cat.slug) : `${getCategoryPath(cat.slug)}?page=${currentPage - 1}`}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                ← Previous
              </Link>
            )}
            <span className="px-4 py-2 text-gray-600 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <Link
                href={`${getCategoryPath(cat.slug)}?page=${currentPage + 1}`}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Next →
              </Link>
            )}
          </nav>
        )}

        {/* Back to hub */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <Link href="/mortgage-guides" className="text-primary hover:underline font-medium">
            ← Back to Mortgage Guides
          </Link>
        </div>
      </main>
    </div>
  );
}
