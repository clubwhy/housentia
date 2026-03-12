import Link from 'next/link';
import { getRelatedGuides, getArticlePath } from '@/lib/mortgage-guides';

interface RelatedGuidesProps {
  /** Current article slug (to fetch related guides) */
  articleSlug: string;
  /** Max number of related guides to show (default 4) */
  limit?: number;
  className?: string;
}

export default function RelatedGuides({ articleSlug, limit = 4, className = '' }: RelatedGuidesProps) {
  const related = getRelatedGuides(articleSlug, limit);
  if (related.length === 0) return null;

  return (
    <aside
      className={`bg-gray-50 rounded-xl p-6 border border-gray-200 ${className}`}
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
  );
}
