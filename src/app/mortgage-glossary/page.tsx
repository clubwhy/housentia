import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';
import { getAllGlossaryEntries, getGlossaryEntriesByLetter } from '@/data/glossary';
import { StructuredData, buildBreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Glossary | Definitions & Terms | Housentia',
  description: 'Definitions of mortgage and housing terms: APR, DTI, LTV, Loan Estimate, Closing Disclosure, PMI, escrow, amortization, and more. Educational resource from Housentia.',
  openGraph: {
    title: 'Mortgage Glossary | Housentia',
    description: 'Definitions of mortgage and housing terms. Educational resource.',
  },
};

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'Mortgage Glossary' }];
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function MortgageGlossaryPage() {
  const entries = getAllGlossaryEntries();
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', 'https://housentia.com/mortgage-glossary');

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={breadcrumbSchema} />
      <PageHero title="Mortgage Glossary" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-gray-700 mb-8 text-lg">
          Clear definitions of mortgage and housing terms. Use this glossary to understand loan types, ratios, documents, and processes. 
          This content is for general educational purposes only and does not constitute financial or mortgage advice.
        </p>

        {/* A–Z quick nav */}
        <nav className="flex flex-wrap gap-2 mb-10" aria-label="Glossary A–Z">
          {LETTERS.map((letter) => {
            const count = getGlossaryEntriesByLetter(letter).length;
            if (count === 0) return null;
            return (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="px-3 py-1.5 rounded bg-gray-100 hover:bg-primary hover:text-white text-gray-700 text-sm font-medium transition"
              >
                {letter}
              </a>
            );
          })}
        </nav>

        {/* Terms by letter */}
        <div className="space-y-10">
          {LETTERS.map((letter) => {
            const byLetter = getGlossaryEntriesByLetter(letter);
            if (byLetter.length === 0) return null;
            return (
              <section key={letter} id={`letter-${letter}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">{letter}</h2>
                <ul className="space-y-3">
                  {byLetter.map((entry) => (
                    <li key={entry.slug}>
                      <Link
                        href={`/mortgage-glossary/${entry.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {entry.term}
                      </Link>
                      {entry.definition && (
                        <span className="text-gray-600 ml-2 text-sm">— {entry.definition.slice(0, 120)}{entry.definition.length > 120 ? '…' : ''}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <section className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-4">
            For full guides on loan types, refinancing, and more, see our <Link href="/mortgage" className="text-primary hover:underline">Mortgage Guides</Link> and{' '}
            <Link href="/mortgage-tools" className="text-primary hover:underline">Mortgage Tools</Link>. 
            <Link href="/about-housentia" className="text-primary hover:underline ml-1">About Housentia</Link> · <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>
          </p>
        </section>
      </main>
    </div>
  );
}
