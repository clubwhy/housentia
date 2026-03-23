import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { GuideArticleCard, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema } from '@/components/StructuredData';
import {
  getCategory,
  getArticlesByCategory,
  getArticlePath,
  getArticle,
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

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { category } = await params;
  const { page: pageParam } = await searchParams;
  const cat = getCategory(category as Parameters<typeof getCategory>[0]);
  if (!cat) return { title: 'Mortgage Guides | Housentia' };

  const page = Math.max(1, parseInt(String(pageParam || '1'), 10) || 1);
  const displayTitle = cat.slug === 'process' && page === 1 ? 'Mortgage Process Guide' : cat.title;
  const baseMetadata: Metadata = {
    title: `${displayTitle} | Mortgage Guides | Housentia`,
    description: `${cat.description} Browse educational guides in this category.`,
    openGraph: {
      title: `${displayTitle} | Mortgage Guides | Housentia`,
      description: cat.description,
    },
  };

  if (page > 1) {
    return {
      ...baseMetadata,
      robots: { index: false, follow: true },
    };
  }
  return baseMetadata;
}

/** Pillar content for Mortgage Process category — SEO-optimized intro and step links */
function ProcessPillarContent() {
  const steps = [
    {
      slug: 'mortgage-application-process',
      desc: 'The mortgage application process covers pre-approval through submitting your application. Learn what documents you need and how the timeline works.',
    },
    {
      slug: 'loan-estimate-explained',
      desc: 'Your Loan Estimate summarizes the loan terms, projected payments, and closing costs. Lenders must provide it within three business days of application.',
    },
    {
      slug: 'mortgage-underwriting-explained',
      desc: 'Underwriting is when the lender evaluates your credit, income, assets, and the property to decide whether to approve the loan.',
    },
    {
      slug: 'mortgage-approval-process',
      desc: 'The approval process moves from conditional approval to clear to close. Understand the milestones and what conditions you may need to clear.',
    },
    {
      slug: 'mortgage-closing-process',
      desc: 'At closing, you sign the loan documents and complete the transaction. Learn what to expect and what documents you will sign.',
    },
    {
      slug: 'mortgage-funding-process',
      desc: 'Funding is when the lender disburses the loan proceeds. You typically receive the keys after funding and recording.',
    },
  ] as const;

  return (
    <>
      <div className="prose prose-gray max-w-none mb-10">
        <p className="text-gray-700 mb-4">
          Understanding the mortgage process helps you navigate from pre-approval to closing. In the
          United States, the journey typically begins when you apply with a lender or through a
          mortgage broker. Within three business days of application, you receive a Loan Estimate
          that shows your estimated loan terms, interest rate, monthly payment, and closing costs.
          This standardized form, required under TILA-RESPA Integrated Disclosure (TRID) rules, lets
          you compare offers across lenders.
        </p>
        <p className="text-gray-700 mb-4">
          After you choose a loan and lock your rate, the lender moves into underwriting. They
          verify your income, assets, employment, and credit, and order an appraisal to confirm the
          property value. Once all conditions are satisfied, you receive a clear-to-close and a
          Closing Disclosure at least three business days before closing. At the closing table, you
          sign the note, deed of trust (or mortgage), and other settlement documents. The lender
          funds the loan, and you receive the keys to your new home.
        </p>
        <p className="text-gray-700 mb-8">
          This guide walks you through each step so you know what to expect. The process varies by
          lender and loan type, but the general flow from application to closing follows a similar
          path.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview of the Mortgage Process</h2>
      <p className="text-gray-700 mb-6">
        The mortgage process typically spans 30 to 45 days from application to closing. Key stages
        include application, processing, underwriting, conditional approval, final approval (clear
        to close), closing disclosure review, and closing. Your Loan Estimate and Closing
        Disclosure are the main documents that explain your costs and terms under TRID.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Mortgage Process</h2>
      <ul className="space-y-4 mb-10">
        {steps.map(({ slug, desc }) => {
          const article = getArticle(slug);
          if (!article) return null;
          return (
            <li key={slug} className="border-l-2 border-primary/30 pl-4">
              <Link
                href={getArticlePath(slug)}
                className="text-primary hover:underline font-medium block"
              >
                {article.title}
              </Link>
              <p className="text-gray-600 text-[15px] mt-1">{desc}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
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

  const isProcessPillar = category === 'process';
  const pageTitle = isProcessPillar ? 'Mortgage Process Guide' : cat.title;

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema]} />
      <PageHero title={pageTitle} breadcrumbs={breadcrumbs} />
      <main
        className="max-w-5xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        {isProcessPillar ? (
          <ProcessPillarContent />
        ) : (
          <p className="text-gray-700 mb-8">{cat.description}</p>
        )}

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
