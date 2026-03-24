import { MetadataRoute } from 'next';
import { getAllGlossarySlugs } from '@/data/glossary';
import { GUIDE_ARTICLES, VALID_CATEGORY_SLUGS } from '@/lib/mortgage-guides';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://housentia.com';

/** YYYY-MM-DD format for lastmod - Google compliant */
const currentDate = new Date().toISOString().split('T')[0];

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface SitemapRoute {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}

function createEntry(route: SitemapRoute): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: SitemapRoute[] = [
    // Homepage
    { path: '/', changeFrequency: 'daily', priority: 1.0 },

    // Tool pages
    { path: '/tools', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/tools/mortgage-calculator', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/tools/affordability-calculator', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/tools/refinance-analyzer', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/tools/solar-savings-estimator', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/tools/loan-qualification-comparison', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/tools/non-qm-scenario-comparison', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/tools/remodeling-cost', changeFrequency: 'weekly', priority: 0.9 },

    // Blog
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },

    // Mortgage hub and guides
    { path: '/mortgage', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/mortgage-guides', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/mortgage-glossary', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/mortgage-tools', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/mortgage-tools/amortization', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/mortgage-tools/extra-payment', changeFrequency: 'weekly', priority: 0.8 },

    // Static pages
    { path: '/about-housentia', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/editorial-methodology', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/research-sources', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/how-housentia-tools-work', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/disclaimer', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/contactus', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/opt-out', changeFrequency: 'yearly', priority: 0.7 },

    // Upgrade and shop
    { path: '/upgrade/solar-guide', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/upgrade/contractor-finder', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/shop', changeFrequency: 'weekly', priority: 0.7 },

    // DIY
    { path: '/diy-style', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/diy-style/home-projects', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/diy-style/garden-ideas', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/diy-style/decor-kits', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/diy-style/before-after', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/diy-style/interior-decor', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/garden', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/remodeling', changeFrequency: 'weekly', priority: 0.7 },
  ];

  // Mortgage guide articles from GUIDE_ARTICLES
  const mortgageGuideRoutes: SitemapRoute[] = GUIDE_ARTICLES.map((article) => ({
    path: `/mortgage/${article.slug}`,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  }));

  // Mortgage guide category pages
  const mortgageCategoryRoutes: SitemapRoute[] = VALID_CATEGORY_SLUGS.map((slug) => ({
    path: `/mortgage-guides/${slug}`,
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.7,
  }));

  // Glossary pages
  const glossaryRoutes: SitemapRoute[] = getAllGlossarySlugs().map((slug) => ({
    path: `/mortgage-glossary/${slug}`,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  }));

  const allRoutes = [
    ...routes,
    ...mortgageGuideRoutes,
    ...mortgageCategoryRoutes,
    ...glossaryRoutes,
  ];

  return allRoutes.map((route) => createEntry(route));
}
