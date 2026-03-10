import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';
import { getGlossaryEntryBySlug, getAllGlossarySlugs } from '@/data/glossary';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

const BASE_URL = 'https://housentia.com';

type Props = { params: Promise<{ term: string }> };

export async function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ term: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term } = await params;
  const entry = getGlossaryEntryBySlug(term);
  if (!entry) return { title: 'Term Not Found | Housentia' };
  return {
    title: `${entry.term} — Mortgage Glossary | Housentia`,
    description: entry.definition?.slice(0, 155) || `Definition of ${entry.term} in the Housentia mortgage glossary.`,
    openGraph: {
      title: `${entry.term} | Mortgage Glossary | Housentia`,
      description: entry.definition?.slice(0, 155),
    },
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: slug } = await params;
  const entry = getGlossaryEntryBySlug(slug);
  if (!entry) notFound();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Mortgage Glossary', href: '/mortgage-glossary' },
    { label: entry.term },
  ];
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs, BASE_URL, `${BASE_URL}/mortgage-glossary/${entry.slug}`);
  const articleSchema = buildArticleSchema({
    headline: entry.term,
    description: entry.definition,
    url: `${BASE_URL}/mortgage-glossary/${entry.slug}`,
  });

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema]} />
      <PageHero title={entry.term} breadcrumbs={breadcrumbs} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 italic mb-6">
          This content is provided for general educational purposes only and does not constitute financial or mortgage advice.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Definition</h2>
          <p className="text-gray-700">{entry.definition}</p>
        </section>

        {entry.explanation && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Explanation</h2>
            <p className="text-gray-700">{entry.explanation}</p>
          </section>
        )}

        {entry.example && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Example</h2>
            <p className="text-gray-700">{entry.example}</p>
          </section>
        )}

        {(entry.relatedGuides?.length || entry.relatedTerms?.length) ? (
          <section className="mb-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related</h2>
            <div className="flex flex-wrap gap-4">
              {entry.relatedGuides?.map((g) => (
                <Link key={g.href} href={g.href} className="text-primary hover:underline">
                  {g.label}
                </Link>
              ))}
              {entry.relatedTerms?.map((t) => (
                <Link key={t} href={`/mortgage-glossary/${t}`} className="text-primary hover:underline">
                  {t.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <nav className="text-sm text-gray-600">
          <Link href="/mortgage-glossary" className="text-primary hover:underline">← Back to Mortgage Glossary</Link>
          <span className="mx-2">·</span>
          <Link href="/mortgage" className="text-primary hover:underline">Mortgage Guides</Link>
          <span className="mx-2">·</span>
          <Link href="/mortgage-tools" className="text-primary hover:underline">Mortgage Tools</Link>
        </nav>
      </main>
    </div>
  );
}
