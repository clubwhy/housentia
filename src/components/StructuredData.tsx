/**
 * Renders JSON-LD structured data for SEO (E-E-A-T, Article, FAQ, Breadcrumb).
 */

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface StructuredDataProps {
  data: object | object[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json.length === 1 ? json[0] : json),
      }}
    />
  );
}

export function buildBreadcrumbSchema(
  items: BreadcrumbItem[],
  baseUrl: string = 'https://housentia.com',
  currentPageUrl?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const itemUrl = item.href ? `${baseUrl}${item.href}` : isLast && currentPageUrl ? currentPageUrl : undefined;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(itemUrl && { item: itemUrl }),
      };
    }),
  };
}

export function buildArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  url,
  image,
}: {
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
  image?: string;
}) {
  const baseUrl = 'https://housentia.com';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: fullUrl,
    ...(image && { image }),
    publisher: {
      '@type': 'Organization',
      name: 'Housentia',
      url: baseUrl,
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
  };
}

export function buildFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

/** HowTo schema for calculator/tool pages. */
export function buildHowToSchema({
  name,
  description,
  url,
  steps,
}: {
  name: string;
  description: string;
  url: string;
  steps: string[];
}) {
  const baseUrl = 'https://housentia.com';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url: fullUrl,
    step: steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text,
    })),
  };
}
