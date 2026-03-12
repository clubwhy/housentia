import PageHero from '@/components/PageHero';
import { GuideCategoryCard } from '@/components/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema } from '@/components/StructuredData';
import { GUIDE_CATEGORIES } from '@/lib/mortgage-guides';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Education Guides | Housentia',
  description: 'Central index of educational mortgage guides. Learn about mortgage basics, loan types, refinancing, and the home buying process. For educational purposes only.',
  openGraph: {
    title: 'Mortgage Education Guides | Housentia',
    description: 'Educational mortgage guides to help homebuyers understand mortgage concepts, loan types, and the home financing process.',
  },
};

const BREADCRUMBS = [{ label: 'Mortgage Guides' }];
const PAGE_URL = 'https://housentia.com/mortgage-guides';

/**
 * Main hub page for Mortgage Education.
 * Shows only high-level categories — supports 200+ articles via topic clusters.
 */
export default function MortgageGuidesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Education Guides',
    description:
      'Central index of educational mortgage guides for U.S. homebuyers. Covers mortgage basics, loan types, refinancing, and the home financing process. Educational content only; not financial or mortgage advice.',
    url: PAGE_URL,
  });

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema]} />
      <PageHero title="Mortgage Education Guides" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-5xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        {/* Required educational disclaimer */}
        <div
          className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mb-8"
          role="region"
          aria-label="Disclaimer"
        >
          <p className="text-gray-700 text-sm mb-2">
            This website provides general mortgage and financial information for educational purposes
            only. It does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a licensed mortgage broker, lender, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and
            borrower circumstances.
          </p>
        </div>

        {/* Introduction */}
        <p className="text-gray-700 mb-10">
          Explore mortgage education by topic. Each category contains guides designed to help
          homebuyers understand mortgage concepts, loan types, and the home financing process. For
          general education only.
        </p>

        {/* Category cards — scalable for 200+ guides */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {GUIDE_CATEGORIES.map((category) => (
            <GuideCategoryCard key={category.slug} category={category} />
          ))}
        </div>

        {/* Internal linking: related hubs */}
        <nav
          className="mt-12 pt-8 border-t border-gray-200"
          aria-label="Related resources"
        >
          <p className="text-gray-600 text-sm mb-2">Explore more educational resources:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/mortgage" className="text-primary hover:underline">
              Mortgage overview
            </Link>
            <Link href="/mortgage-glossary" className="text-primary hover:underline">
              Mortgage Glossary
            </Link>
            <Link href="/mortgage-tools" className="text-primary hover:underline">
              Mortgage Tools
            </Link>
            <Link href="/about-housentia" className="text-primary hover:underline">
              About Housentia
            </Link>
            <Link href="/editorial-methodology" className="text-primary hover:underline">
              Editorial Methodology
            </Link>
          </div>
        </nav>
      </main>
    </div>
  );
}
