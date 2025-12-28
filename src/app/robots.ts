import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.housentia.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/test',
          '/test-amazon',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

