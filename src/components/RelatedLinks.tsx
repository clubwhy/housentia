/**
 * RelatedLinks — internal linking block for guides, glossary, and calculators.
 * Use on mortgage guides: 2 related guides, 1 glossary term, 1 calculator (per SEO architecture).
 */

import Link from 'next/link';

export interface RelatedLinkItem {
  label: string;
  href: string;
}

interface RelatedLinksProps {
  /** Related mortgage guides (e.g. 2) */
  guides?: RelatedLinkItem[];
  /** Related glossary terms (e.g. 1) */
  glossary?: RelatedLinkItem[];
  /** Related calculator/tool (e.g. 1) */
  calculator?: RelatedLinkItem;
  className?: string;
}

export default function RelatedLinks({ guides = [], glossary = [], calculator, className = '' }: RelatedLinksProps) {
  const hasAny = guides.length > 0 || glossary.length > 0 || calculator;

  if (!hasAny) return null;

  return (
    <aside className={`bg-gray-50 rounded-xl p-5 border border-gray-200 ${className}`} aria-label="Related resources">
      <h3 className="text-lg font-bold text-gray-900 mb-3">Related</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {guides.map((g) => (
          <Link key={g.href} href={g.href} className="text-primary hover:underline">
            {g.label}
          </Link>
        ))}
        {glossary.map((g) => (
          <Link key={g.href} href={g.href} className="text-primary hover:underline">
            {g.label} (glossary)
          </Link>
        ))}
        {calculator && (
          <Link href={calculator.href} className="text-primary hover:underline">
            {calculator.label}
          </Link>
        )}
      </div>
    </aside>
  );
}
