import Link from 'next/link';
import type { GuideCategory } from '@/lib/mortgage-guides';
import { getCategoryPath, getArticlePath, getArticle } from '@/lib/mortgage-guides';

interface GuideCategoryCardProps {
  category: GuideCategory;
}

export default function GuideCategoryCard({ category }: GuideCategoryCardProps) {
  const href = getCategoryPath(category.slug);
  const topGuides = (category.topSlugs ?? [])
    .map((slug) => getArticle(slug))
    .filter((a): a is NonNullable<typeof a> => a != null)
    .slice(0, 5);

  return (
    <div className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md">
      <Link href={href} className="block">
        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
          {category.title}
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          {category.description}
        </p>
      </Link>
      {topGuides.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Top guides
          </p>
          <ul className="space-y-1">
            {topGuides.map((article) => (
              <li key={article.slug}>
                <Link
                  href={getArticlePath(article.slug)}
                  className="text-sm text-primary hover:underline"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link
        href={href}
        className="mt-3 inline-flex items-center text-sm font-medium text-primary group-hover:underline"
      >
        Explore guides →
      </Link>
    </div>
  );
}
