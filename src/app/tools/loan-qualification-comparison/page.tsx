"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import Disclaimer from '@/components/Disclaimer';

export default function LoanQualificationComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-10 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white font-sans mb-2 md:mb-0 drop-shadow">
            Loan Qualification Scenario Comparison
          </h1>
          <nav className="flex items-center text-xs text-slate-200 gap-1 md:self-end md:mb-1">
            <Link href="/" className="hover:text-accent flex items-center gap-1">
              <HiHome className="inline-block w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-slate-300" />
            <Link href="/tools" className="hover:text-accent">Tools</Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-slate-300" />
            <span className="text-white font-semibold">Loan Qualification Comparison</span>
          </nav>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Disclaimer */}
        <div className="mb-8">
          <Disclaimer variant="compact" />
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 rounded-r-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Educational Purpose Only:</strong> This tool provides educational comparisons between 
              Conventional and Non-QM qualification structures. It does not determine eligibility, provide approvals, 
              or make recommendations. Actual qualification requirements vary by lender and individual circumstances.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding Qualification Differences</h2>
          <p className="text-gray-700 mb-4">
            Conventional and Non-QM loans use different approaches to assess a borrower's ability to repay. 
            This educational comparison tool helps you understand how income documentation and underwriting 
            methods differ between these loan types.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="text-blue-800 font-medium mb-2">Key Educational Focus:</p>
            <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
              <li>How income documentation requirements differ</li>
              <li>How underwriting approaches vary</li>
              <li>What documentation each loan type typically requires</li>
              <li>How qualification structures may differ</li>
            </ul>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Qualification Structure Comparison</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Qualification Aspect</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Conventional (QM) Loans</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-purple-900">Non-QM Loans</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Income Documentation</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Typically requires W-2 forms, tax returns (2 years), and pay stubs. Income is calculated 
                    using standard formulas based on reported taxable income.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May accept alternative documentation such as bank statements (12-24 months), profit-and-loss 
                    statements, or asset-based qualification. Income calculation methods vary by lender.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Self-Employed Income</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Uses tax returns with Schedule C or business tax returns. Income may be averaged over 2 years, 
                    and deductions reduce qualifying income.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May use bank statement deposits, cash flow analysis, or business bank statements. Some programs 
                    may not require tax returns or may use different income calculation methods.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Debt-to-Income (DTI) Ratio</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Typically capped at 43% for Qualified Mortgages, though some exceptions may allow up to 45% 
                    or higher with compensating factors.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May allow higher DTI ratios (often 45-50% or more) depending on the lender and program. 
                    Guidelines vary significantly by lender.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Asset Documentation</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Typically requires 2 months of bank statements, investment account statements, and verification 
                    of down payment source. Assets are used primarily for down payment and reserves.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May allow asset-based qualification where substantial assets can substitute for income 
                    documentation. Asset requirements and documentation vary by program.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Underwriting Approach</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Standardized underwriting guidelines (Fannie Mae/Freddie Mac). Automated underwriting systems 
                    are commonly used. Predictable qualification criteria.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Manual underwriting is more common. Lender-specific guidelines. More flexible evaluation of 
                    individual circumstances. Less standardized across lenders.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Credit History Evaluation</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Standard credit score requirements (typically 620+). Recent credit events (bankruptcy, foreclosure) 
                    have standard waiting periods.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May be more flexible with credit history. Some programs may accept lower credit scores or have 
                    shorter waiting periods after credit events. Varies significantly by lender.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-gray-700 text-sm mb-3">
              <strong>Educational Note:</strong> This comparison illustrates general differences in qualification 
              approaches. Actual requirements vary by lender, loan program, and individual borrower circumstances. 
              Neither loan type guarantees approval, and both require ability-to-repay assessment.
            </p>
          </div>
        </section>

        {/* Scenario Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Educational Scenario Examples</h2>
          
          <div className="space-y-6">
            {/* Scenario 1 */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">Scenario 1: Self-Employed with Variable Income</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Conventional Approach</h4>
                  <p className="text-sm text-blue-800 mb-2">
                    Would typically use 2 years of tax returns, averaging income. If income declined year-over-year, 
                    the lower year may be used. Business deductions reduce qualifying income.
                  </p>
                  <p className="text-xs text-blue-700 italic">
                    Example: $100k gross, $30k deductions = $70k qualifying income
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Non-QM Approach</h4>
                  <p className="text-sm text-purple-800 mb-2">
                    May use 12-24 months of bank statements, calculating average monthly deposits. Business expenses 
                    may be handled differently. Some programs may use a percentage of deposits as qualifying income.
                  </p>
                  <p className="text-xs text-purple-700 italic">
                    Example: $8k average monthly deposits × 50-70% = qualifying income (varies by lender)
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">Scenario 2: High Income, High DTI</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Conventional Approach</h4>
                  <p className="text-sm text-blue-800 mb-2">
                    DTI typically capped at 43% (or 45% with compensating factors). High income alone doesn't 
                    override DTI limits. May require larger down payment or reserves.
                  </p>
                  <p className="text-xs text-blue-700 italic">
                    Example: $200k income, $90k debts = 45% DTI (may require compensating factors)
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Non-QM Approach</h4>
                  <p className="text-sm text-purple-800 mb-2">
                    May allow DTI up to 50% or higher, depending on lender and program. High income may be viewed 
                    more favorably. Guidelines vary significantly.
                  </p>
                  <p className="text-xs text-purple-700 italic">
                    Example: $200k income, $100k debts = 50% DTI (may be acceptable, varies by lender)
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">Scenario 3: Asset-Rich, Lower Income</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Conventional Approach</h4>
                  <p className="text-sm text-blue-800 mb-2">
                    Assets primarily used for down payment and reserves. Income is the primary qualification factor. 
                    Assets may supplement but typically don't replace income requirements.
                  </p>
                  <p className="text-xs text-blue-700 italic">
                    Example: $500k assets, $40k income = income-based qualification (assets help with down payment)
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Non-QM Approach</h4>
                  <p className="text-sm text-purple-800 mb-2">
                    Some programs allow asset-based qualification. Substantial assets may be used to qualify instead 
                    of or in addition to income. Requirements vary by lender.
                  </p>
                  <p className="text-xs text-purple-700 italic">
                    Example: $500k assets may qualify for certain loan amounts (varies by lender and program)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> These scenarios are for educational purposes only. They illustrate general 
              differences in approach but do not represent actual qualification decisions. Actual requirements, 
              calculations, and outcomes vary by lender, program, and individual circumstances.
            </p>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Educational Takeaways</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-3 text-indigo-900">Conventional Loans</h3>
              <ul className="list-disc list-inside text-indigo-800 text-sm space-y-2">
                <li>Standardized income documentation (W-2s, tax returns)</li>
                <li>Predictable qualification criteria</li>
                <li>DTI typically capped at 43-45%</li>
                <li>Income is primary qualification factor</li>
                <li>Widely available from many lenders</li>
              </ul>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-3 text-purple-900">Non-QM Loans</h3>
              <ul className="list-disc list-inside text-purple-800 text-sm space-y-2">
                <li>Alternative income documentation options</li>
                <li>Lender-specific qualification criteria</li>
                <li>May allow higher DTI ratios</li>
                <li>May use asset-based qualification</li>
                <li>Available from specialized lenders</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Educational Resources</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Explore these related guides and tools to deepen your understanding:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Loan Guides</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/mortgage/conventional-loan" className="text-blue-600 hover:underline">
                      Conventional Loan Guide →
                    </Link>
                  </li>
                  <li>
                    <Link href="/mortgage/non-qm-loan" className="text-blue-600 hover:underline">
                      Non-QM Loan Guide →
                    </Link>
                  </li>
                  <li>
                    <Link href="/mortgage/self-employed-borrower" className="text-blue-600 hover:underline">
                      Self-Employed Borrower Scenarios →
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tools</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/tools/mortgage-calculator" className="text-blue-600 hover:underline">
                      Mortgage Calculator →
                    </Link>
                  </li>
                  <li>
                    <Link href="/mortgage/todays-mortgage-rates" className="text-blue-600 hover:underline">
                      Today's Mortgage Rates →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Continue Your Learning</h3>
          <p className="text-blue-700 mb-4">
            Understanding qualification differences is just one part of exploring mortgage options. 
            Use these educational resources to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mortgage/self-employed-borrower" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent-hover transition"
            >
              Explore Self-Employed Scenarios
            </Link>
            <Link 
              href="/mortgage/non-qm-loan" 
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition"
            >
              Learn About Non-QM Loans
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

