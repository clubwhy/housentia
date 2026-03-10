import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import { StructuredData, buildBreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Housentia | Mortgage Education Platform',
  description: 'Housentia is an educational mortgage and home financing platform. Learn about our mission, tools, and commitment to providing neutral, informational content.',
  openGraph: {
    title: 'About Housentia | Mortgage Education Platform',
    description: 'Housentia is an educational mortgage and home financing platform.',
  },
};

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'About Housentia' }];

export default function AboutHousentiaPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Housentia',
    url: 'https://housentia.com',
    description: 'Educational mortgage and home financing information platform. Not a lender or mortgage broker.',
    knowsAbout: ['Mortgage education', 'Home financing', 'Mortgage calculators', 'Loan types'],
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[organizationSchema, buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', 'https://housentia.com/about-housentia')]} />
      <PageHero
        title="About Housentia"
        breadcrumbs={BREADCRUMBS}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Housentia is an educational platform designed to help users understand mortgage and home financing topics. 
            Our mission is to provide clear, neutral, and accurate information so that visitors can make informed decisions 
            — not to sell loans or recommend specific products.
          </p>
          <p className="text-gray-700">
            We believe that understanding your options before you decide leads to better outcomes. Housentia does not originate 
            loans, broker mortgages, or provide personalized financial or mortgage advice.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Provide</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Mortgage guides:</strong> Educational content on loan types (FHA, VA, conventional, refinance, HELOC, reverse mortgage, and more).</li>
            <li><strong>Tools and calculators:</strong> Mortgage payment calculators, affordability estimators, and refinance analysis tools for illustrative and educational purposes.</li>
            <li><strong>Rate information:</strong> Display of publicly available mortgage rate data (e.g., from FRED) for context only — not offers or quotes.</li>
            <li><strong>Blog and articles:</strong> Articles on home financing, maintenance, and related topics, written for general education.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Our Content Is Built</h2>
          <p className="text-gray-700 mb-4">
            Our content is based on publicly available housing and mortgage data, regulatory guidance, and widely accepted 
            industry definitions. We draw from sources such as the Consumer Financial Protection Bureau (CFPB), the Federal 
            Housing Finance Agency (FHFA), the U.S. Department of Housing and Urban Development (HUD), and other authoritative 
            housing and finance institutions.
          </p>
          <p className="text-gray-700">
            The platform is built and maintained by professionals with experience in mortgage technology, including systems 
            used in pricing, origination, and housing data — with a focus on making complex topics accessible for educational 
            purposes only.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Are Not</h2>
          <p className="text-gray-700 mb-4">
            Housentia is not a lender, mortgage broker, or loan originator. We do not provide mortgage advice, recommend 
            specific loan products, or facilitate applications. Any connection to licensed professionals is optional and 
            user-initiated; we do not endorse or recommend any particular professional or lender.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparency and Trust</h2>
          <p className="text-gray-700 mb-4">
            We are committed to transparency. Our editorial methodology, research sources, and how our tools work are 
            documented on this site. We encourage users to review our Disclaimer, Editorial Methodology, and Research 
            Sources pages for full context.
          </p>
          <p className="text-gray-700">
            For questions about our platform, you can contact us through the site. For personalized mortgage or financial 
            guidance, please consult a licensed professional in your state.
          </p>
        </section>
      </main>
    </div>
  );
}
