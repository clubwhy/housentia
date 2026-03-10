import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';
import { StructuredData, buildBreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Methodology | Housentia',
  description: 'How Housentia researches and develops mortgage and housing content. Our sources and process for educational content.',
  openGraph: {
    title: 'Editorial Methodology | Housentia',
    description: 'How Housentia researches and develops mortgage and housing content.',
  },
};

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'Editorial Methodology' }];

export default function EditorialMethodologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', 'https://housentia.com/editorial-methodology')} />
      <PageHero
        title="Editorial Methodology"
        breadcrumbs={BREADCRUMBS}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Development Process</h2>
          <p className="text-gray-700 mb-4">
            Housentia develops mortgage and housing content for educational purposes only. Our process is designed to 
            ensure accuracy, neutrality, and clarity — not to promote any lender, product, or service.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Topics are chosen based on common borrower questions and publicly relevant housing and mortgage themes.</li>
            <li>Content is researched using authoritative government, regulatory, and industry sources.</li>
            <li>Complex topics are simplified for general understanding while noting that rules and programs can vary by state and lender.</li>
            <li>Content is reviewed for consistency with our positioning as an educational platform (no advice, no recommendations).</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources Used in Research</h2>
          <p className="text-gray-700 mb-4">
            We rely on the following types of sources when researching mortgage and housing content:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Consumer Financial Protection Bureau (CFPB):</strong> Consumer protection rules, mortgage disclosure requirements, and consumer education materials.</li>
            <li><strong>Federal Housing Finance Agency (FHFA):</strong> Housing finance policy, conforming loan limits, and government-sponsored entity oversight.</li>
            <li><strong>U.S. Department of Housing and Urban Development (HUD):</strong> FHA programs, housing policy, and fair housing.</li>
            <li><strong>Freddie Mac:</strong> Primary Mortgage Market Survey, housing research, and program guidelines.</li>
            <li><strong>Fannie Mae:</strong> Housing research, lending standards, and program guidelines.</li>
            <li><strong>Mortgage Bankers Association (MBA):</strong> Industry data and definitions where useful for educational context.</li>
            <li><strong>Federal Reserve:</strong> Housing and mortgage data, interest rate context, and economic indicators.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            For a full list with short descriptions, see our <Link href="/research-sources" className="text-primary hover:underline">Research Sources</Link> page.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Simplifying Complex Topics</h2>
          <p className="text-gray-700 mb-4">
            Mortgage and housing rules are complex and vary by state, loan type, and lender. Our guides simplify concepts 
            for general educational purposes. We do not provide legal, tax, or financial advice. Users should confirm details 
            with licensed professionals and official sources.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Neutrality and No Recommendations</h2>
          <p className="text-gray-700 mb-4">
            We do not recommend specific loan products, lenders, or strategies. Content is written in a neutral, explanatory 
            tone. Where we mention loan types or options, we describe them for education only — not as advice for any 
            individual situation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal and Compliance</h2>
          <p className="text-gray-700 mb-4">
            Housentia is not a licensed mortgage broker, lender, or loan originator. Our editorial methodology supports 
            our commitment to remaining an educational resource only. For our full legal position, see our <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>.
          </p>
        </section>
      </main>
    </div>
  );
}
