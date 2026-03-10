import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';
import { StructuredData, buildBreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Sources | Housentia',
  description: 'Authoritative sources used by Housentia for mortgage and housing research: CFPB, FHFA, HUD, Freddie Mac, Fannie Mae, MBA, Federal Reserve, Census.',
  openGraph: {
    title: 'Research Sources | Housentia',
    description: 'Authoritative sources used by Housentia for mortgage and housing research.',
  },
};

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'Research Sources' }];

const SOURCES = [
  {
    name: 'Consumer Financial Protection Bureau (CFPB)',
    url: 'https://www.consumerfinance.gov',
    description: 'Federal agency responsible for consumer protection in financial products and services. We use CFPB materials for mortgage disclosure rules, consumer rights, and educational guidance on loans and housing.',
  },
  {
    name: 'Federal Housing Finance Agency (FHFA)',
    url: 'https://www.fhfa.gov',
    description: 'Regulator of Fannie Mae and Freddie Mac. We reference FHFA for conforming loan limits, housing finance policy, and oversight of the government-sponsored enterprises.',
  },
  {
    name: 'U.S. Department of Housing and Urban Development (HUD)',
    url: 'https://www.hud.gov',
    description: 'Federal department overseeing housing policy and programs. We use HUD for FHA program information, fair housing, and general housing and community development context.',
  },
  {
    name: 'Freddie Mac',
    url: 'https://www.freddiemac.com',
    description: 'Government-sponsored enterprise that supports the mortgage market. We reference Freddie Mac for the Primary Mortgage Market Survey (PMMS), housing research, and program guidelines where relevant for education.',
  },
  {
    name: 'Fannie Mae',
    url: 'https://www.fanniemae.com',
    description: 'Government-sponsored enterprise that provides liquidity to the mortgage market. We use Fannie Mae housing research, lending standards, and program information for educational content.',
  },
  {
    name: 'Mortgage Bankers Association (MBA)',
    url: 'https://www.mba.org',
    description: 'National association representing the real estate finance industry. We may reference MBA data and definitions for industry context and terminology in educational guides.',
  },
  {
    name: 'Federal Reserve',
    url: 'https://www.federalreserve.gov',
    description: 'Central bank of the United States. We use Federal Reserve data and publications for interest rate context, housing and mortgage market data, and economic indicators (including FRED — Federal Reserve Economic Data).',
  },
  {
    name: 'U.S. Census Bureau — Housing',
    url: 'https://www.census.gov/topics/housing.html',
    description: 'Census housing data and surveys provide context on homeownership, housing stock, and demographic trends. We may reference Census data for general housing statistics in educational content.',
  },
];

export default function ResearchSourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', 'https://housentia.com/research-sources')} />
      <PageHero
        title="Research Sources"
        breadcrumbs={BREADCRUMBS}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-8" />

        <p className="text-gray-700 mb-10">
          Housentia develops mortgage and housing content using publicly available information from authoritative 
          government, regulatory, and industry sources. The list below describes the main sources we reference. 
          Linking to or citing these sources does not imply endorsement by them or by Housentia of any specific 
          product or service.
        </p>

        <ul className="space-y-8">
          {SOURCES.map((source) => (
            <li key={source.name} className="border-b border-gray-200 pb-6 last:border-0">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {source.name}
                </a>
              </h2>
              <p className="text-gray-700">{source.description}</p>
            </li>
          ))}
        </ul>

        <section className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            This content is provided for general educational purposes only and does not constitute financial or 
            mortgage advice. Housentia is not a lender or mortgage broker. For our full disclaimer and how we use 
            these sources in our editorial process, see our <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link> and{' '}
            <Link href="/editorial-methodology" className="text-primary hover:underline">Editorial Methodology</Link>.
          </p>
        </section>
      </main>
    </div>
  );
}
