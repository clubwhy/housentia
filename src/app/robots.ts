import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://housentia.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/test',
          '/test-amazon',
          '/casinonet/',
          '/virtuals/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

