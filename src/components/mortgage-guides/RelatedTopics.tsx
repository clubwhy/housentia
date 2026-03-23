import Link from 'next/link';
import { getRelatedGuides, getArticlePath } from '@/lib/mortgage-guides';

interface RelatedTopicsProps {
  /** Current article slug (to fetch related guides) */
  articleSlug: string;
  /** Number of links to show (default 6, min 5 for SEO) */
  limit?: number;
  className?: string;
}

/**
 * Related Mortgage Topics — SEO internal linking section for guide pages.
 * Renders H2 "Related Mortgage Topics" with 5+ internal links.
 */
export default function RelatedTopics({
  articleSlug,
  limit = 6,
  className = '',
}: RelatedTopicsProps) {
  const items = getRelatedGuides(articleSlug, limit);
  if (items.length === 0) return null;

  return (
    <section className={className} aria-label="Related mortgage topics">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Mortgage Topics</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={getArticlePath(item.slug)}
              className="text-primary hover:underline font-medium"
            >
              {item.title}
            </Link>
            {item.description && (
              <p className="text-gray-600 text-sm mt-0.5 line-clamp-2">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
