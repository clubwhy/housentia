"use client";
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';

export default function SelfEmployedBorrowerPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Self-Employed Borrower Scenarios"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: 'Self-Employed Borrower Scenarios' }
        ]}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Self-Employed Borrower Overview</h2>
        <p className="text-center text-gray-600 mb-6">
          Educational information about income documentation challenges and scenarios for self-employed borrowers. 
          Learn about different documentation approaches and how they may affect mortgage qualification options.
        </p>
        
        {/* Compliance: Disclaimer at top of mortgage pages */}
        <Disclaimer variant="compact" className="mb-8" />
        
        {/* Introduction */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Understanding Self-Employed Income Documentation</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-blue-800 font-medium mb-3">Self-Employed Borrowers:</p>
            <p className="text-blue-700">
              Self-employed borrowers often face unique challenges when documenting income for mortgage qualification. 
              Unlike W-2 employees who receive regular pay stubs, self-employed individuals may have variable income, 
              business deductions that reduce taxable income, or income that doesn't fit standard documentation formats.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            This guide provides educational scenarios to help you understand how different employment structures 
            and income documentation methods may be evaluated by lenders. It does not determine eligibility or 
            provide qualification guarantees.
          </p>
        </section>

        {/* Common Scenarios */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Common Self-Employed Scenarios</h3>
          
          <div className="space-y-6">
            {/* Scenario 1: W-2 Employee */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-green-700 font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">W-2 Employee (Traditional Employment)</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Employees who receive W-2 forms from an employer typically have the most straightforward 
                    income documentation process.
                  </p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-800 font-medium mb-2">Documentation Typically Required:</p>
                <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                  <li>Recent pay stubs (typically 1-2 months)</li>
                  <li>W-2 forms from the past 2 years</li>
                  <li>Tax returns (if required)</li>
                  <li>Employment verification letter</li>
                </ul>
                <p className="text-sm text-green-700 mt-3 italic">
                  <strong>Note:</strong> This is the standard documentation path for most conventional loans. 
                  Income is typically calculated from current pay stubs or W-2 forms.
                </p>
              </div>
            </div>

            {/* Scenario 2: 1099 Independent Contractor */}
            <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-orange-700 font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">1099 Independent Contractor</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Independent contractors who receive 1099 forms face different documentation requirements 
                    than W-2 employees.
                  </p>
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <p className="text-sm text-orange-800 font-medium mb-2">Documentation Challenges:</p>
                <ul className="list-disc list-inside text-orange-700 text-sm space-y-1 mb-3">
                  <li>No traditional pay stubs</li>
                  <li>Income may vary month-to-month</li>
                  <li>Business expenses reduce taxable income</li>
                  <li>May need to show 2 years of consistent income</li>
                </ul>
                <p className="text-sm text-orange-800 font-medium mb-2">What Lenders Typically Review:</p>
                <ul className="list-disc list-inside text-orange-700 text-sm space-y-1">
                  <li>1099 forms from the past 2 years</li>
                  <li>Tax returns with Schedule C</li>
                  <li>Bank statements showing deposits</li>
                  <li>Income averaging (may use lower of two years if income declined)</li>
                </ul>
                <p className="text-sm text-orange-700 mt-3 italic">
                  <strong>Educational Note:</strong> Conventional loans typically use tax return income (after 
                  deductions). Non-QM loans may use bank statement deposits or other alternative methods.
                </p>
              </div>
            </div>

            {/* Scenario 3: Business Owner */}
            <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-purple-700 font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Owner (Sole Proprietor, LLC, Corporation)</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Business owners face the most complex income documentation requirements, as lenders must 
                    evaluate both personal and business finances.
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-purple-800 font-medium mb-2">Documentation Challenges:</p>
                <ul className="list-disc list-inside text-purple-700 text-sm space-y-1 mb-3">
                  <li>Business income may be reinvested rather than taken as salary</li>
                  <li>Business deductions significantly reduce taxable income</li>
                  <li>Income may be shown on business tax returns rather than personal returns</li>
                  <li>May need to show both personal and business financial statements</li>
                </ul>
                <p className="text-sm text-purple-800 font-medium mb-2">What Lenders Typically Review:</p>
                <ul className="list-disc list-inside text-purple-700 text-sm space-y-1 mb-3">
                  <li>Personal tax returns (2 years)</li>
                  <li>Business tax returns (if applicable)</li>
                  <li>Profit and Loss (P&L) statements</li>
                  <li>Business bank statements</li>
                  <li>Balance sheets (for established businesses)</li>
                </ul>
                <p className="text-sm text-purple-800 font-medium mb-2">Income Calculation Approaches:</p>
                <ul className="list-disc list-inside text-purple-700 text-sm space-y-1">
                  <li><strong>Conventional:</strong> Typically uses net income from tax returns (after all deductions)</li>
                  <li><strong>Non-QM:</strong> May use bank statement deposits, add back certain deductions, or use 
                    alternative calculation methods</li>
                </ul>
                <p className="text-sm text-purple-700 mt-3 italic">
                  <strong>Educational Note:</strong> Business owners often find that tax returns show lower income 
                  than actual cash flow due to business deductions. This is where Non-QM bank statement programs 
                  may offer alternative qualification methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Income Documentation Comparison */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Income Documentation: Conventional vs Non-QM</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              Understanding how different loan types evaluate self-employed income can help you understand 
              your options. This comparison is for educational purposes only:
            </p>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Documentation Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Conventional Loans</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-purple-900">Non-QM Loans</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Tax Returns</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Typically required (2 years). Uses net income after all deductions.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May not be required. Some programs use bank statements instead.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Bank Statements</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Used primarily to verify down payment source and reserves (typically 2 months).
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May be used as primary income documentation (typically 12-24 months). Average monthly 
                    deposits calculated as qualifying income.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Profit & Loss Statements</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May be requested but typically supplements tax returns rather than replaces them.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May be accepted as primary documentation, especially for recent business formations.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Business Tax Returns</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Required for business owners. Combined with personal returns to determine qualifying income.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    May not be required if using bank statement or alternative documentation programs.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Income Calculation</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Net income from tax returns (after deductions). May average 2 years if income declined.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">
                    Varies by program: bank statement deposits (often 50-70% of deposits), add-back methods, 
                    or alternative calculations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Educational Note:</strong> This comparison illustrates general differences. Actual requirements 
              vary by lender, loan program, and individual circumstances. Neither approach guarantees approval, 
              and both require ability-to-repay assessment.
            </p>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Common Documentation Challenges</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-3 text-gray-900">Challenge: High Deductions</h4>
              <p className="text-gray-700 text-sm mb-3">
                Self-employed borrowers often maximize business deductions to reduce tax liability, which 
                also reduces qualifying income for conventional loans.
              </p>
              <p className="text-xs text-gray-600 italic">
                <strong>Educational Note:</strong> This is a common reason self-employed borrowers explore 
                Non-QM bank statement programs, which may use deposits rather than tax return income.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-3 text-gray-900">Challenge: Variable Income</h4>
              <p className="text-gray-700 text-sm mb-3">
                Income that varies significantly month-to-month or year-to-year can make qualification more 
                complex, as lenders typically look for consistent income patterns.
              </p>
              <p className="text-xs text-gray-600 italic">
                <strong>Educational Note:</strong> Lenders may average income over time periods or use the 
                lower of two years if income declined.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-3 text-gray-900">Challenge: New Business</h4>
              <p className="text-gray-700 text-sm mb-3">
                Businesses in operation for less than 2 years may not have sufficient tax return history 
                for conventional loan qualification.
              </p>
              <p className="text-xs text-gray-600 italic">
                <strong>Educational Note:</strong> Some Non-QM programs may accept shorter business history 
                or use alternative documentation methods.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-3 text-gray-900">Challenge: Mixed Income Sources</h4>
              <p className="text-gray-700 text-sm mb-3">
                Borrowers with income from multiple sources (W-2, 1099, business, investments) may need to 
                document each source separately.
              </p>
              <p className="text-xs text-gray-600 italic">
                <strong>Educational Note:</strong> Lenders typically evaluate each income source and may 
                require documentation for all sources used in qualification.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Related Educational Resources</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-blue-800 font-medium mb-4">Explore these related guides and tools:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/tools/loan-qualification-comparison" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Loan Qualification Scenario Comparison</h4>
                <p className="text-sm text-blue-700">
                  Compare how Conventional and Non-QM loans evaluate income documentation and underwriting
                </p>
              </Link>
              <Link 
                href="/mortgage/non-qm-loan" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Non-QM Loan Guide</h4>
                <p className="text-sm text-blue-700">
                  Learn about alternative qualification structures that may use bank statements or other methods
                </p>
              </Link>
              <Link 
                href="/mortgage/conventional-loan" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Conventional Loan Guide</h4>
                <p className="text-sm text-blue-700">
                  Understand standard qualification requirements and documentation expectations
                </p>
              </Link>
              <Link 
                href="/tools/mortgage-calculator" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Mortgage Calculator</h4>
                <p className="text-sm text-blue-700">
                  Estimate monthly payments based on different loan scenarios
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Continue Your Learning</h3>
          <p className="text-blue-700 mb-4">
            Understanding income documentation is one part of exploring mortgage options. Use these educational 
            resources to learn more about qualification structures and loan types.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/loan-qualification-comparison" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent-hover transition"
            >
              Compare Qualification Structures
            </Link>
            <Link 
              href="/mortgage/non-qm-loan" 
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition"
            >
              Learn About Non-QM Options
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

