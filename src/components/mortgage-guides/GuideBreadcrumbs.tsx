import type { Breadcrumb } from '@/components/PageHero';

interface GuideBreadcrumbsProps {
  /** Category slug (e.g. 'basics') */
  categorySlug?: string;
  /** Category title for display (e.g. 'Mortgage Basics') */
  categoryTitle?: string;
  /** Current page title (e.g. 'What is APR') */
  currentTitle: string;
  /** Whether current page is the category page (no article) */
  isCategoryPage?: boolean;
}

/**
 * Build breadcrumb array for Mortgage Education pages.
 * Format: Home (icon) > Mortgage Guides > [Category] > [Article]
 * PageHero renders Home icon separately; this array is the trail after it.
 */
export function buildGuideBreadcrumbs({
  categorySlug,
  categoryTitle,
  currentTitle,
  isCategoryPage = false,
}: GuideBreadcrumbsProps): Breadcrumb[] {
  const base: Breadcrumb[] = [{ label: 'Mortgage Guides', href: '/mortgage-guides' }];

  if (isCategoryPage) {
    return [...base, { label: currentTitle }];
  }

  if (categorySlug && categoryTitle) {
    return [
      ...base,
      { label: categoryTitle, href: `/mortgage-guides/${categorySlug}` },
      { label: currentTitle },
    ];
  }

  return [...base, { label: currentTitle }];
}
