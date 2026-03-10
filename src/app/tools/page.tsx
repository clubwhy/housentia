import Link from 'next/link';

export default function ToolsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-4">Tools & Calculators</h1>
      <p className="text-gray-700 mb-6">
        Access helpful tools and calculators for your mortgage and home projects.
      </p>
      <div className="mb-6">
        <Link
          href="/mortgage-tools"
          className="inline-block px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90"
        >
          Mortgage calculators hub →
        </Link>
      </div>
      <ul className="space-y-2 text-gray-700">
        <li><Link href="/tools/mortgage-calculator" className="text-primary hover:underline">Mortgage Calculator</Link></li>
        <li><Link href="/tools/refinance-analyzer" className="text-primary hover:underline">Refinance Analyzer</Link></li>
        <li><Link href="/tools/affordability-calculator" className="text-primary hover:underline">Affordability Calculator</Link></li>
        <li><Link href="/tools/loan-qualification-comparison" className="text-primary hover:underline">Loan Qualification Comparison</Link></li>
        <li><Link href="/tools/non-qm-scenario-comparison" className="text-primary hover:underline">Non-QM Scenario Comparison</Link></li>
        <li><Link href="/tools/solar-savings-estimator" className="text-primary hover:underline">Solar Savings Estimator</Link></li>
        <li><Link href="/tools/remodeling-cost" className="text-primary hover:underline">Remodeling Cost</Link></li>
      </ul>
    </main>
  );
} 