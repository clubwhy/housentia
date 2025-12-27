"use client";
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';

export default function FHALoanPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="FHA Loan Guide"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: 'FHA Loan Guide' }
        ]}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">FHA Loan Overview</h2>
        <p className="text-center text-gray-600 mb-6">
          Educational information about FHA (Federal Housing Administration) loans, their characteristics, 
          eligibility requirements, and general considerations for borrowers.
        </p>
        
        {/* Compliance: Disclaimer at top of mortgage pages */}
        <Disclaimer variant="compact" className="mb-8" />
        
        {/* What is FHA Loan */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">What is an FHA Loan?</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-blue-800 font-medium mb-3">Federal Housing Administration (FHA) Loans:</p>
            <p className="text-blue-700">
              FHA loans are mortgage loans insured by the Federal Housing Administration, a division of the U.S. 
              Department of Housing and Urban Development (HUD). These loans are designed to help make homeownership 
              more accessible by providing lenders with insurance protection against borrower default.
            </p>
          </div>
          <p className="mb-4">
            FHA loans are not directly issued by the FHA. Instead, the FHA insures loans made by FHA-approved lenders, 
            which allows these lenders to offer more favorable terms to borrowers who might not qualify for conventional loans.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Key Characteristics of FHA Loans</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Lower Down Payment Requirements</h4>
              <p className="text-gray-700 mb-3">
                FHA loans typically allow down payments as low as 3.5% of the purchase price for borrowers who meet 
                certain credit score requirements. This is lower than the 20% down payment often required for conventional loans.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Down payment requirements may vary based on credit score and other factors. 
                Borrowers with credit scores below 580 may be required to make a larger down payment.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">More Flexible Credit Requirements</h4>
              <p className="text-gray-700 mb-3">
                FHA loans may be available to borrowers with lower credit scores compared to conventional loans. 
                While specific requirements vary by lender, FHA loans generally have more lenient credit score requirements.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Credit score requirements are set by individual lenders, not the FHA. 
                Actual eligibility depends on multiple factors beyond credit score alone.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Mortgage Insurance Premiums (MIP)</h4>
              <p className="text-gray-700 mb-3">
                FHA loans require mortgage insurance premiums, which include both an upfront premium and an annual premium. 
                These premiums protect the lender in case of borrower default.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> MIP rates and duration vary based on loan amount, down payment, and loan term. 
                Some FHA loans may require MIP for the life of the loan.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Property Requirements</h4>
              <p className="text-gray-700 mb-3">
                FHA loans can be used to purchase primary residences, including single-family homes, condominiums, 
                and multi-unit properties (up to 4 units). The property must meet FHA minimum property standards.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> FHA loans cannot be used for investment properties or vacation homes. 
                The borrower must intend to occupy the property as their primary residence.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">General Eligibility Considerations</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              While specific requirements vary by lender, here are some general factors that lenders typically consider 
              for FHA loan eligibility:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Credit Score:</strong> Minimum credit score requirements vary by lender, but FHA guidelines allow 
                for more flexibility than conventional loans. Generally, scores of 580 or higher may qualify for the 3.5% 
                down payment option.</li>
              <li><strong>Debt-to-Income Ratio (DTI):</strong> Lenders typically look for a DTI ratio of 43% or less, 
                though some lenders may allow higher ratios with compensating factors.</li>
              <li><strong>Employment History:</strong> Stable employment history, typically at least two years, is generally required.</li>
              <li><strong>Down Payment:</strong> Minimum down payment of 3.5% for credit scores of 580 or higher, 
                or 10% for scores below 580 (lender requirements may vary).</li>
              <li><strong>Property Type:</strong> Must be a primary residence that meets FHA property standards.</li>
              <li><strong>Loan Limits:</strong> FHA loan limits vary by location and are adjusted annually. 
                Limits are typically higher in high-cost areas.</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              <strong>Important:</strong> These are general guidelines. Actual eligibility requirements are determined by 
              individual FHA-approved lenders and may vary based on multiple factors. Always consult with a licensed 
              mortgage professional for personalized information.
            </p>
          </div>
        </section>

        {/* Types of FHA Loans */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Types of FHA Loan Programs</h3>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">FHA 203(b) - Basic Home Mortgage</h4>
              <p className="text-gray-700">
                The most common FHA loan program, used for purchasing or refinancing 1-4 unit properties. 
                This is the standard FHA loan program that most borrowers use.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">FHA 203(k) - Rehabilitation Loan</h4>
              <p className="text-gray-700">
                Allows borrowers to finance both the purchase (or refinance) of a home and the cost of repairs or 
                improvements in a single loan. This program can be useful for properties that need significant work.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">FHA 203(h) - Disaster Relief</h4>
              <p className="text-gray-700">
                Available to victims of presidentially declared disasters who lost their homes. This program helps 
                eligible borrowers purchase or rebuild homes in disaster-affected areas.
              </p>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Considerations for Borrowers</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-green-900">Potential Advantages</h4>
              <ul className="list-disc list-inside text-green-800 space-y-2">
                <li>Lower down payment requirements (as low as 3.5%)</li>
                <li>More flexible credit score requirements</li>
                <li>May allow higher debt-to-income ratios than conventional loans</li>
                <li>Can be used for various property types (single-family, condos, multi-unit)</li>
                <li>Gift funds may be allowed for down payment</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-yellow-900">Important Considerations</h4>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li>Mortgage insurance premiums (MIP) required, which may be for the life of the loan</li>
                <li>Loan limits vary by location and may be lower than conventional loan limits</li>
                <li>Property must meet FHA minimum property standards</li>
                <li>Property must be used as primary residence (not for investment)</li>
                <li>Some lenders may have stricter requirements than FHA minimums</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Exploring FHA Loan Options</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-blue-800 font-medium mb-3">Next Steps:</p>
            <ul className="list-disc list-inside text-blue-700 space-y-2 mb-4">
              <li>Research FHA loan requirements and current loan limits for your area</li>
              <li>Review your credit score and financial situation</li>
              <li>Compare FHA loans with other loan types to understand your options</li>
              <li>Connect with FHA-approved lenders to discuss your specific situation</li>
            </ul>
            <p className="text-blue-700">
              <strong>Remember:</strong> FHA loans are one option among many. Each borrower's situation is unique, 
              and what works for one person may not be the best fit for another. Consulting with licensed mortgage 
              professionals can help you understand which loan type may be appropriate for your circumstances.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Additional Resources</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              For official FHA loan information and resources, you can visit:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a href="https://www.hud.gov/program_offices/housing/fhahistory" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  U.S. Department of Housing and Urban Development (HUD) - FHA Information
                </a>
              </li>
              <li>
                <a href="https://www.hud.gov/program_offices/housing/sfh/ins/203b" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  HUD - FHA 203(b) Program Details
                </a>
              </li>
              <li>
                <a href="https://entp.hud.gov/idapp/html/hicostlook.cfm" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  HUD - FHA Loan Limits by Area
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Ready to Learn More?</h3>
          <p className="text-blue-700 mb-4">
            Connect with licensed mortgage professionals who can provide personalized information about FHA loans 
            and help you explore your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mortgage/find-the-right-loan" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent-hover transition"
            >
              Explore FHA Scenarios
            </Link>
            <Link 
              href="/mortgage" 
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition"
            >
              Explore Other Loan Types
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 