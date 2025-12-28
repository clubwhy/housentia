import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://housentia.com';
  const today = new Date();

  return [
    // HOME & CORE
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    
    // TOOLS
    {
      url: `${baseUrl}/tools`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/mortgage-calculator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/affordability-calculator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/refinance-analyzer`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/solar-savings-estimator`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // MORTGAGE CONTENT
    {
      url: `${baseUrl}/mortgage/todays-mortgage-rates`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mortgage/find-the-right-loan`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage/conventional-loan`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage/fha-loan`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage/va-loan`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage/non-qm-loan`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage/reverse`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    
    // GUIDES / BLOG
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}

