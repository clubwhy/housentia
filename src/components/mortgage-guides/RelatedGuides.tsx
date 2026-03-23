import Link from 'next/link';
import { getRelatedGuides, getArticlePath } from '@/lib/mortgage-guides';

interface RelatedGuidesProps {
  /** Current article slug (to fetch related guides) */
  articleSlug: string;
  /** Max number of related guides in card section (default 4) */
  limit?: number;
  /** Include "Related Mortgage Topics" link section with 5+ links (default true for SEO) */
  includeRelatedTopics?: boolean;
  /** Number of links in Related Topics section (default 6) */
  relatedTopicsLimit?: number;
  className?: string;
}

export default function RelatedGuides({
  articleSlug,
  limit = 4,
  includeRelatedTopics = true,
  relatedTopicsLimit = 6,
  className = '',
}: RelatedGuidesProps) {
  const related = getRelatedGuides(articleSlug, limit);
  const topicLinks = includeRelatedTopics ? getRelatedGuides(articleSlug, relatedTopicsLimit) : [];

  if (related.length === 0 && topicLinks.length === 0) return null;

  return (
    <div className={className}>
      {topicLinks.length > 0 && (
        <section className="mb-8" aria-label="Related mortgage topics">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Mortgage Topics</h2>
          <ul className="space-y-3 mb-8">
            {topicLinks.map((article) => (
              <li key={article.slug}>
                <Link
                  href={getArticlePath(article.slug)}
                  className="text-primary hover:underline font-medium"
                >
                  {article.title}
                </Link>
                {article.description && (
                  <p className="text-gray-600 text-sm mt-0.5 line-clamp-2">{article.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
      {related.length > 0 && (
        <aside
          className="bg-gray-50 rounded-xl p-6 border border-gray-200"
          aria-label="Related guides"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
          <ul className="space-y-3">
            {related.map((article) => (
              <li key={article.slug}>
                <Link
                  href={getArticlePath(article.slug)}
                  className="text-primary hover:underline font-medium block"
                >
                  {article.title}
                </Link>
                <p className="text-gray-600 text-sm mt-0.5 line-clamp-1">{article.description}</p>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}
