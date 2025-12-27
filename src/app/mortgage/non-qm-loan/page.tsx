"use client";
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';

export default function NonQMLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Non-QM Loan Guide"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: 'Non-QM Loan Guide' }
        ]}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Non-QM Loan Overview</h2>
        <p className="text-center text-gray-600 mb-6">
          Educational information about Non-QM (Non-Qualified Mortgage) loans, alternative loan structures designed 
          for borrowers whose financial profiles do not fit traditional Qualified Mortgage guidelines. Learn about 
          when Non-QM loans may be explored and important considerations.
        </p>
        
        {/* Enhanced Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
          <p className="text-yellow-800 font-medium mb-2">Important Educational Disclaimer:</p>
          <p className="text-yellow-700 text-sm">
            This website provides general mortgage and financial information for educational purposes only. It does not 
            constitute financial, legal, or mortgage advice. Housentia is not a licensed mortgage broker, lender, or 
            loan originator. Non-QM loans are complex financial products with unique risks and requirements. Always 
            consult with licensed mortgage professionals to understand your options.
          </p>
        </div>
        
        {/* Compliance: Standard Disclaimer */}
        <Disclaimer variant="compact" className="mb-8" />
        
        {/* What is Non-QM Loan */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">What is a Non-QM Loan?</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-blue-800 font-medium mb-3">Non-Qualified Mortgage (Non-QM) Loans:</p>
            <p className="text-blue-700">
              Non-QM loans are mortgage products that do not meet the Qualified Mortgage (QM) standards established 
              by the Consumer Financial Protection Bureau (CFPB). These loans are designed for borrowers whose financial 
              situations don't fit traditional lending guidelines but who may still have the ability to repay a mortgage.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">Understanding Qualified Mortgages (QM)</h4>
            <p className="text-gray-700 mb-4">
              Qualified Mortgages are loans that meet specific standards designed to ensure borrowers have the ability 
              to repay. QM loans typically require:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Standard documentation of income and assets</li>
              <li>Debt-to-income ratios of 43% or less (with some exceptions)</li>
              <li>No risky loan features (like negative amortization or interest-only payments)</li>
              <li>Limits on points and fees</li>
            </ul>
            <p className="text-gray-700">
              Non-QM loans operate outside these QM guidelines, offering alternative qualification methods for borrowers 
              who don't fit the standard profile.
            </p>
          </div>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg mb-6">
            <h4 className="font-semibold text-lg mb-3 text-indigo-900">Key Takeaway</h4>
            <p className="text-indigo-800 text-sm">
              Non-QM loans provide alternative qualification paths for borrowers who don't fit standard QM requirements, 
              but they still require ability-to-repay assessment and come with higher costs and risks.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">Important to Know</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Non-QM loans are NOT unregulated:</strong> They are still subject to federal lending laws and regulations, including the Ability-to-Repay (ATR) rule.</li>
              <li><strong>Lenders still evaluate ability to repay:</strong> Non-QM lenders must assess a borrower's ability to repay, though they may use alternative methods to do so.</li>
              <li><strong>Non-QM does not mean "no qualification":</strong> These loans still require documentation and evaluation, just through different criteria than QM loans.</li>
              <li><strong>Not risk-free:</strong> Non-QM loans often come with higher interest rates and may require larger down payments to compensate for perceived risk.</li>
            </ul>
          </div>
        </section>

        {/* Early Self-Identification Section */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Is a Non-QM Loan Something You May Explore?</h3>
          <div className="bg-white border-2 border-primary/30 rounded-lg p-6 shadow-sm mb-4">
            <p className="text-gray-700 mb-4">
              Consider these situations where Non-QM loans <em>may</em> be worth exploring. This checklist is for 
              educational awareness only:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-primary mt-0.5"></div>
                <p className="text-gray-700 text-sm">You are self-employed and income varies year to year</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-primary mt-0.5"></div>
                <p className="text-gray-700 text-sm">You rely on bank statements rather than W-2 income</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-primary mt-0.5"></div>
                <p className="text-gray-700 text-sm">You own multiple investment properties</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-primary mt-0.5"></div>
                <p className="text-gray-700 text-sm">You were recently declined for a conventional loan</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-primary mt-0.5"></div>
                <p className="text-gray-700 text-sm">Your income or assets don't fit standard documentation</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> This checklist is for educational awareness only and does not indicate loan 
              approval. Non-QM loans are complex products with unique requirements and costs. Always consult with 
              licensed mortgage professionals to understand your options.
            </p>
          </div>
        </section>

        {/* Common Non-QM Scenarios */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Common Non-QM Scenarios</h3>
          <p className="text-gray-700 mb-6">
            Non-QM loans may be explored by borrowers in specific situations. The following scenarios represent 
            situations where Non-QM options <em>may</em> be available—not guaranteed approvals:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Self-Employed Borrowers</h4>
              <p className="text-gray-700 text-sm">
                Self-employed individuals may have difficulty documenting income through traditional W-2 forms. 
                Non-QM lenders may use bank statements, profit-and-loss statements, or other documentation to 
                assess income and ability to repay.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Bank Statement Loans</h4>
              <p className="text-gray-700 text-sm">
                Some Non-QM programs allow qualification based on bank statements rather than tax returns. 
                Lenders analyze cash flow patterns over a period (typically 12-24 months) to assess ability to repay.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Real Estate Investors</h4>
              <p className="text-gray-700 text-sm">
                Investors who own multiple properties may not qualify under standard QM guidelines due to debt-to-income 
                ratios. Non-QM loans may consider rental income and portfolio cash flow differently.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Asset-Based Qualification</h4>
              <p className="text-gray-700 text-sm">
                Some Non-QM programs allow borrowers to qualify based on substantial assets rather than traditional 
                income documentation. This may be relevant for retirees, high-net-worth individuals, or those with 
                irregular income streams.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm md:col-span-2">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Recent Credit Events</h4>
              <p className="text-gray-700 text-sm mb-2">
                Borrowers who have experienced bankruptcy, foreclosure, or short sale may find Non-QM options available 
                sooner than traditional QM programs allow. However, these loans typically come with:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                <li>Higher interest rates</li>
                <li>Larger down payment requirements</li>
                <li>Stricter terms and conditions</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-blue-800">
              <strong>Educational Note:</strong> These scenarios represent situations where Non-QM loans <em>may</em> be 
              explored. Loan availability, terms, and qualification requirements vary significantly by lender and 
              individual borrower circumstances. Non-QM loans are not guaranteed approvals.
            </p>
          </div>
        </section>

        {/* Non-QM vs Conventional Comparison */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Non-QM vs. Conventional Loans: Educational Comparison</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <p className="text-gray-700 mb-4">
              Understanding the differences between Non-QM and conventional (QM) loans can help you make informed decisions. 
              Here's an educational comparison:
            </p>
            <p className="text-sm text-gray-600 italic">
              <strong>Note:</strong> This comparison is for educational purposes only. Loan availability and terms vary by 
              lender and borrower profile.
            </p>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Conventional (QM) Loans</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-purple-900">Non-QM Loans</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Documentation</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Standard income documentation (W-2s, tax returns)</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Alternative income documentation (bank statements, assets)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Down Payment</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">As low as 3-5% for qualified borrowers</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Typically 20-30% or more</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Interest Rates</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Generally lower rates</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Generally higher rates</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Underwriting Standards</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Standardized guidelines (DTI typically 43% or less)</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Lender-specific guidelines (may allow higher DTI)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Availability</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Widely available from many lenders</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Available from specialized Non-QM lenders</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Risk Considerations</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">PMI required if down payment &lt; 20% (removable at 80% LTV)</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">Higher rates and larger down payments reflect increased risk</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Educational Note:</strong> This comparison is for informational purposes only. The right loan 
              type depends on your individual financial situation, credit profile, and goals. Suitability varies by 
              borrower circumstances. Non-QM loans are complex products with unique risks and requirements. Consider 
              speaking with licensed mortgage professionals to understand which option may be appropriate for your circumstances.
            </p>
          </div>
        </section>

        {/* Important Trade-Offs */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Important Trade-Offs to Understand</h3>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">!</span>
                </div>
              </div>
              <div>
                <h4 className="text-red-900 font-bold text-lg mb-2">Important Summary</h4>
                <p className="text-red-800 font-medium">
                  Non-QM loans trade flexibility for higher cost and complexity.
                </p>
                <p className="text-red-700 text-sm mt-2">
                  While Non-QM loans offer alternative qualification methods, they come with significantly higher 
                  interest rates, larger down payment requirements, and more complex terms than conventional loans.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div className="bg-white border-l-4 border-orange-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-400 rounded"></div>
                <h4 className="font-bold text-lg text-gray-900">Higher Interest Rates</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Non-QM loans typically carry higher interest rates than conventional QM loans. This reflects the 
                additional risk lenders assume when using alternative qualification methods. Borrowers should carefully 
                consider whether the higher cost is justified by their circumstances.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-orange-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-400 rounded"></div>
                <h4 className="font-bold text-lg text-gray-900">Larger Down Payment Requirements</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Many Non-QM programs require down payments of 20-30% or more, compared to 3-5% for some conventional 
                loans. This larger equity requirement helps protect lenders but requires borrowers to have more cash available.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-orange-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-400 rounded"></div>
                <h4 className="font-bold text-lg text-gray-900">Investor-Driven Guidelines</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Non-QM loans are often held by private investors or sold to non-agency investors, which means guidelines 
                can change based on market conditions and investor appetite. This can lead to less predictable availability 
                compared to agency-backed loans.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-orange-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-orange-400 rounded"></div>
                <h4 className="font-bold text-lg text-gray-900">Less Uniform Standards</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Unlike QM loans which follow standardized guidelines, Non-QM programs vary significantly by lender. 
                Terms, rates, and qualification criteria can differ substantially, making it important to compare multiple 
                lenders and programs carefully.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-6 bg-gray-400 rounded"></div>
              <h4 className="font-semibold text-gray-900">Additional Considerations</h4>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm ml-4">
              <li>Non-QM loans may have prepayment penalties or other restrictive terms</li>
              <li>Refinancing options may be more limited than with conventional loans</li>
              <li>Some Non-QM programs may require reserves (additional cash beyond down payment)</li>
              <li>Documentation requirements, while alternative, are still substantial</li>
            </ul>
          </div>
        </section>

        {/* Who May Explore Non-QM Loans */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Who May Explore Non-QM Loans</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 mb-4">
              Non-QM loans may be worth exploring for borrowers in specific situations. These borrower profiles represent 
              scenarios where Non-QM options <em>may</em> be available:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-4">
              <li><strong>Self-employed individuals:</strong> Those with non-traditional income documentation who cannot 
                qualify through standard W-2 and tax return requirements.</li>
              <li><strong>Borrowers with non-traditional income:</strong> Individuals with income from sources like 
                investments, rental properties, or business ownership that don't fit standard documentation requirements.</li>
              <li><strong>Real estate investors:</strong> Investors who own multiple properties and may exceed standard 
                debt-to-income ratios but have strong cash flow from rental properties.</li>
              <li><strong>Borrowers who do not qualify for QM programs:</strong> Those who don't meet conventional, FHA, 
                or VA loan requirements but may still have the ability to repay a mortgage.</li>
              <li><strong>Borrowers seeking alternative qualification structures:</strong> Those who prefer or need 
                qualification methods based on assets, bank statements, or other non-standard documentation.</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Important Reminder:</strong> Suitability depends on individual circumstances. Non-QM loans are 
                complex financial products with unique risks and costs. These loans are not suitable for all borrowers, 
                even if they fit one of the profiles above. Always consult with licensed mortgage professionals to 
                understand your options, compare costs, and assess whether Non-QM loans align with your financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Educational CTAs */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Explore Non-QM Loan Scenarios</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-blue-800 font-medium mb-4">Use these educational resources to understand Non-QM loans:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/tools/mortgage-calculator" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition text-center"
              >
                <h4 className="font-semibold text-blue-900 mb-2">See How Non-QM Payments Compare to Conventional Loans</h4>
                <p className="text-sm text-blue-700">
                  Use the mortgage calculator to understand how higher rates and different terms affect monthly payments
                </p>
              </Link>
              <Link 
                href="/tools/mortgage-calculator" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition text-center"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Explore How Different Qualification Methods Affect Payments</h4>
                <p className="text-sm text-blue-700">
                  Understand how alternative qualification structures may impact loan terms and costs
                </p>
              </Link>
              <Link 
                href="/mortgage/conventional-loan" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition text-center md:col-span-2"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Understand Non-QM Trade-Offs Through Examples</h4>
                <p className="text-sm text-blue-700">
                  Compare Non-QM and conventional loans side-by-side to see how trade-offs affect long-term costs
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Related Resources</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              For more information about mortgage options and related topics:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <Link href="/mortgage/conventional-loan" className="text-blue-600 hover:underline">
                  Conventional Loan Guide →
                </Link>
              </li>
              <li>
                <Link href="/mortgage/fha-loan" className="text-blue-600 hover:underline">
                  FHA Loan Guide →
                </Link>
              </li>
              <li>
                <Link href="/mortgage/va-loan" className="text-blue-600 hover:underline">
                  VA Loan Guide →
                </Link>
              </li>
              <li>
                <Link href="/tools/mortgage-calculator" className="text-blue-600 hover:underline">
                  Mortgage Calculator →
                </Link>
              </li>
              <li>
                <Link href="/mortgage/todays-mortgage-rates" className="text-blue-600 hover:underline">
                  View Current Mortgage Rates →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Continue Your Learning</h3>
          <p className="text-blue-700 mb-4">
            Non-QM loans are complex financial products. Use these educational resources to deepen your understanding 
            and explore how they compare to other mortgage options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/mortgage-calculator" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent-hover transition"
            >
              See How Non-QM Payments Compare
            </Link>
            <Link 
              href="/mortgage/conventional-loan" 
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition"
            >
              Compare with Conventional Loans
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

