import Link from 'next/link';
import type { GuideCategory } from '@/lib/mortgage-guides';
import { getCategoryPath } from '@/lib/mortgage-guides';

interface GuideCategoryCardProps {
  category: GuideCategory;
}

export default function GuideCategoryCard({ category }: GuideCategoryCardProps) {
  const href = getCategoryPath(category.slug);
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
        {category.title}
      </h2>
      <p className="text-gray-600 text-[15px] leading-relaxed">
        {category.description}
      </p>
      <span className="mt-3 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
        Explore guides →
      </span>
    </Link>
  );
}
