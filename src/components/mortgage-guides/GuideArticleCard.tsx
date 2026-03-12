import Link from 'next/link';
import type { GuideArticle } from '@/lib/mortgage-guides';
import { getArticlePath } from '@/lib/mortgage-guides';

interface GuideArticleCardProps {
  article: GuideArticle;
}

export default function GuideArticleCard({ article }: GuideArticleCardProps) {
  const href = getArticlePath(article.slug);
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-gray-200 bg-white p-5 transition hover:border-primary/30 hover:shadow-md"
    >
      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {article.description}
      </p>
      <span className="mt-2 inline-block text-sm font-medium text-primary group-hover:underline">
        Read guide →
      </span>
    </Link>
  );
}
