import { MetadataRoute } from 'next';
import { getAllGlossarySlugs } from '@/data/glossary';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://housentia.com';

type SitemapEntry = MetadataRoute.Sitemap[number];

function url(path: string, opts?: { lastmod?: string; changefreq?: SitemapEntry['changeFrequency']; priority?: number }): SitemapEntry {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: opts?.lastmod ? new Date(opts.lastmod) : undefined,
    changeFrequency: opts?.changefreq,
    priority: opts?.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const glossarySlugs = getAllGlossarySlugs();
  const glossaryUrls: SitemapEntry[] = glossarySlugs.map((slug) =>
    url(`/mortgage-glossary/${slug}`, { changefreq: 'monthly', priority: 0.7 })
  );

  const staticEntries: SitemapEntry[] = [
    url('/', { lastmod: '2025-12-28', changefreq: 'daily', priority: 1.0 }),
    url('/blog', { lastmod: '2025-12-28', changefreq: 'daily', priority: 0.9 }),
    url('/mortgage', { lastmod: '2025-02-12', changefreq: 'weekly', priority: 0.95 }),
    url('/mortgage-guides', { lastmod: '2025-02-12', changefreq: 'weekly', priority: 0.9 }),
    url('/mortgage-glossary', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.9 }),
    url('/mortgage-tools', { lastmod: '2025-02-12', changefreq: 'weekly', priority: 0.9 }),
    url('/about-housentia', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.7 }),
    url('/editorial-methodology', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.6 }),
    url('/research-sources', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.6 }),
    url('/how-housentia-tools-work', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.6 }),
    url('/disclaimer', { lastmod: '2025-02-12', changefreq: 'yearly', priority: 0.5 }),
    url('/tools', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.9 }),
    url('/tools/mortgage-calculator', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.9 }),
    url('/tools/affordability-calculator', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.9 }),
    url('/tools/refinance-analyzer', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.9 }),
    url('/tools/solar-savings-estimator', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.8 }),
    url('/tools/loan-qualification-comparison', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.8 }),
    url('/tools/non-qm-scenario-comparison', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.8 }),
    url('/tools/remodeling-cost', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.7 }),
    url('/mortgage/todays-mortgage-rates', { lastmod: '2025-12-28', changefreq: 'daily', priority: 0.95 }),
    url('/mortgage/find-the-right-loan', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.9 }),
    url('/mortgage/fha-loan', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/va-loan', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/conventional-loan', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/non-qm-loan', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/refinance', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-apr', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-dti', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-ltv', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-pmi', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-amortization', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-rate-lock', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-mortgage-points', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-closing-costs', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-loan-estimate', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-closing-disclosure', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-refinance', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/what-is-cash-out-refinance', { lastmod: '2025-02-12', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/refinance-cashout', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.85 }),
    url('/mortgage/heloc', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.8 }),
    url('/mortgage/reverse', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.8 }),
    url('/mortgage/first-time-home-buyer', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.85 }),
    url('/mortgage/self-employed-borrower', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.8 }),
    url('/mortgage/prequalify', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.75 }),
    url('/upgrade/solar-guide', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.7 }),
    url('/upgrade/contractor-finder', { lastmod: '2025-12-28', changefreq: 'monthly', priority: 0.6 }),
    url('/shop', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.7 }),
    url('/diy-style', { lastmod: '2025-12-28', changefreq: 'weekly', priority: 0.6 }),
    url('/contactus', { lastmod: '2025-12-28', changefreq: 'yearly', priority: 0.3 }),
    url('/privacy-policy', { lastmod: '2025-12-28', changefreq: 'yearly', priority: 0.2 }),
    url('/terms', { lastmod: '2025-12-28', changefreq: 'yearly', priority: 0.2 }),
    url('/opt-out', { lastmod: '2025-12-28', changefreq: 'yearly', priority: 0.2 }),
  ];

  return [...staticEntries, ...glossaryUrls];
}
