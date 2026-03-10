/**
 * Site-wide structured data: WebSite + Organization (E-E-A-T).
 * Rendered once in root layout.
 */

const BASE_URL = 'https://housentia.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Housentia',
  url: BASE_URL,
  description: 'Educational mortgage and home financing information platform. Not a lender or mortgage broker.',
  knowsAbout: ['Mortgage education', 'Home financing', 'Mortgage calculators', 'Loan types'],
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Housentia',
  url: BASE_URL,
  description: 'Mortgage guides, calculators, and housing education. Understand before you decide.',
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'en-US',
};

export default function SiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, webSiteSchema]),
      }}
    />
  );
}
