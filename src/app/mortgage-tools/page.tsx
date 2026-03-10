import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';
import { MORTGAGE_TOOLS, getMortgageToolsByCategory, CATEGORY_LABELS } from '@/data/mortgage-tools';
import { StructuredData, buildBreadcrumbSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Tools & Calculators | Payment, Refinance, Affordability | Housentia',
  description: 'Free mortgage calculators: payment, refinance break-even, affordability, DTI, amortization, rent vs buy, ARM vs fixed. Educational estimates only. Housentia is not a lender.',
  openGraph: {
    title: 'Mortgage Tools & Calculators | Housentia',
    description: 'Free mortgage calculators for payment, refinance, and affordability. Educational only.',
  },
};

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'Mortgage Tools' }];
const CATEGORY_ORDER = ['payment', 'refinance', 'affordability', 'comparison', 'specialty'] as const;

export default function MortgageToolsPage() {
  const byCategory = getMortgageToolsByCategory();
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS, 'https://housentia.com', 'https://housentia.com/mortgage-tools');

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={breadcrumbSchema} />
      <PageHero title="Mortgage Tools & Calculators" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-gray-700 mb-2 text-lg">
          Use these tools to estimate payments, compare refinance scenarios, and understand affordability. 
          Results are for <strong>educational and illustrative purposes only</strong> and do not constitute offers or advice.
        </p>
        <p className="text-gray-600 mb-8 text-sm">
          For how our tools work and their limitations, see <Link href="/how-housentia-tools-work" className="text-primary hover:underline">How Housentia Tools Work</Link>.
        </p>

        {/* How it works (SEO section) */}
        <section className="mb-10 bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">How These Tools Work</h2>
          <p className="text-gray-700 mb-3">
            Each calculator uses standard formulas (e.g., amortization, DTI) with the inputs you provide. 
            They do not pull live rates or approve you for a loan. Actual rates, terms, and eligibility depend on 
            your credit, income, property, and lender. We recommend using our tools alongside our{' '}
            <Link href="/mortgage" className="text-primary hover:underline">mortgage guides</Link> and{' '}
            <Link href="/mortgage-glossary" className="text-primary hover:underline">glossary</Link> to understand the concepts.
          </p>
          <p className="text-gray-600 text-sm">
            Housentia is not a lender or mortgage broker. For personalized numbers, consult a licensed mortgage professional.
          </p>
        </section>

        {/* Tools by category */}
        <div className="space-y-10">
          {CATEGORY_ORDER.map((cat) => {
            const tools = byCategory[cat];
            if (!tools?.length) return null;
            const label = CATEGORY_LABELS[cat] || cat;
            return (
              <section key={cat}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{label}</h2>
                <ul className="space-y-4">
                  {tools.map((tool) => (
                    <li key={tool.id} className="border border-gray-200 rounded-lg p-5 hover:border-primary/30 transition">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          {tool.available ? (
                            <Link href={tool.href} className="text-lg font-bold text-primary hover:underline">
                              {tool.title}
                            </Link>
                          ) : (
                            <span className="text-lg font-bold text-gray-500">{tool.title}</span>
                          )}
                          <p className="text-gray-700 mt-1">{tool.description}</p>
                          {tool.available ? (
                            <Link
                              href={tool.href}
                              className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
                            >
                              Use calculator →
                            </Link>
                          ) : (
                            <span className="inline-block mt-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed">
                              Coming soon
                            </span>
                          )}
                        </div>
                      </div>
                      {tool.relatedGuides?.length ? (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <span className="text-sm text-gray-500">Related guides: </span>
                          {tool.relatedGuides.slice(0, 3).map((g) => (
                            <Link key={g.href} href={g.href} className="text-sm text-primary hover:underline mr-2">
                              {g.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* Example scenarios (SEO content) */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Example Uses</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Mortgage payment calculator:</strong> See how a $300,000 loan at 6.5% for 30 years affects your monthly P&I and total interest.</li>
            <li><strong>Refinance analyzer:</strong> Compare your current payment to a new rate and see how many months until savings cover closing costs.</li>
            <li><strong>Affordability calculator:</strong> Enter your income and debts to estimate a comfortable home price and payment.</li>
            <li><strong>DTI calculator:</strong> Check your debt-to-income ratio before you apply, so you know how lenders may view your application.</li>
          </ul>
        </section>

        <nav className="mt-10 text-sm text-gray-600">
          <Link href="/mortgage" className="text-primary hover:underline">Mortgage Guides</Link>
          <span className="mx-2">·</span>
          <Link href="/mortgage-glossary" className="text-primary hover:underline">Mortgage Glossary</Link>
          <span className="mx-2">·</span>
          <Link href="/tools" className="text-primary hover:underline">All Site Tools</Link>
          <span className="mx-2">·</span>
          <Link href="/mortgage/find-the-right-loan" className="text-primary hover:underline">Find the Right Loan (AI)</Link>
        </nav>
      </main>
    </div>
  );
}
