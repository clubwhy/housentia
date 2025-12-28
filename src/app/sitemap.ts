import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.housentia.com';
  const today = new Date();

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Mortgage rates page (high priority, frequently updated)
    {
      url: `${baseUrl}/mortgage/todays-mortgage-rates`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Loan guides
    {
      url: `${baseUrl}/mortgage/find-the-right-loan`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mortgage/fha-loan`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage/va-loan`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage/non-qm-loan`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Additional important pages
    {
      url: `${baseUrl}/mortgage/conventional-loan`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage/self-employed-borrower`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mortgage/reverse`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Tools
    {
      url: `${baseUrl}/tools/mortgage-calculator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}

