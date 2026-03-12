"use client";
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';

const ARTICLE_SLUG = 'reverse';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Reverse Mortgage Guide',
  });
})();

export default function ReverseMortgagePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Reverse Mortgage Guide"
        breadcrumbs={BREADCRUMBS}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Reverse Mortgage Overview</h2>
        <p className="text-center text-gray-600 mb-6">
          Educational information about Reverse Mortgages (HECM), their characteristics, 
          eligibility requirements, and general considerations for homeowners age 62 and older.
        </p>
        
        {/* Compliance: Disclaimer at top of mortgage pages */}
        <Disclaimer variant="compact" className="mb-8" />
        
        {/* What is Reverse Mortgage */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">What is a Reverse Mortgage?</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-blue-800 font-medium mb-3">Home Equity Conversion Mortgage (HECM):</p>
            <p className="text-blue-700">
              A reverse mortgage is a type of home loan that allows homeowners age 62 and older to convert part of their 
              home equity into cash. Unlike a traditional mortgage where you make monthly payments to the lender, a reverse 
              mortgage allows you to receive payments from the lender while you continue to live in your home.
            </p>
          </div>
          <p className="mb-4">
            The only reverse mortgage program insured by the U.S. federal government is the Home Equity Conversion Mortgage (HECM), 
            which is available only through FHA-approved lenders. HECM loans are insured by the Federal Housing Administration (FHA), 
            a division of the U.S. Department of Housing and Urban Development (HUD).
          </p>
          <p className="mb-4">
            With a reverse mortgage, you typically don't have to make monthly mortgage payments as long as you live in the home, 
            pay property taxes and homeowners insurance, and maintain the property. The loan becomes due when you move out, 
            sell the home, or pass away.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Key Characteristics of Reverse Mortgages</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Age Requirement</h4>
              <p className="text-gray-700 mb-3">
                Reverse mortgages are available to homeowners who are 62 years of age or older. All borrowers listed on 
                the home's title must meet this age requirement.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> If you have a spouse who is under 62, they may not be able to be on the loan, 
                which could affect their ability to remain in the home if you pass away first.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Loan Amount Factors</h4>
              <p className="text-gray-700 mb-3">
                The amount you can borrow depends on several factors, including your age (or the age of the youngest borrower), 
                the current interest rate, the appraised value of your home, and the FHA mortgage limit in your area.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Generally, the older you are and the more valuable your home, the more you may be able to borrow.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">No Monthly Mortgage Payments</h4>
              <p className="text-gray-700 mb-3">
                As long as you live in the home and meet your obligations (property taxes, insurance, maintenance), you typically 
                don't have to make monthly mortgage payments. The loan balance grows over time as interest accrues.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Important:</strong> You must continue to pay property taxes, homeowners insurance, and maintain the property. 
                Failure to do so could result in default and foreclosure.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Home Ownership Retained</h4>
              <p className="text-gray-700 mb-3">
                You retain ownership of your home with a reverse mortgage. The lender has a lien on your home, but you remain 
                the owner and can live in the home as long as you meet the loan requirements.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> The loan becomes due when you move out permanently, sell the home, or pass away. 
                At that time, the loan balance (principal plus accrued interest) must be repaid.
              </p>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">How You Can Receive Funds</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              With a reverse mortgage, you can typically choose how to receive your funds. Common options include:
            </p>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2 text-gray-900">1. Line of Credit</h4>
                <p className="text-gray-700 text-sm">
                  Access funds as needed, up to your credit limit. The unused portion of your line of credit may grow over time, 
                  potentially increasing the amount available to you.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2 text-gray-900">2. Monthly Payments</h4>
                <p className="text-gray-700 text-sm">
                  Receive fixed monthly payments for a specific period (term payments) or for as long as you live in the home 
                  (tenure payments).
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2 text-gray-900">3. Lump Sum</h4>
                <p className="text-gray-700 text-sm">
                  Receive all available funds in a single payment at closing.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2 text-gray-900">4. Combination</h4>
                <p className="text-gray-700 text-sm">
                  Combine any of the above options to meet your specific needs.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              <strong>Note:</strong> Payment options and availability vary by lender and loan program. 
              Consult with your lender about which option may be best for your situation.
            </p>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Eligibility Requirements</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              To be eligible for a HECM reverse mortgage, you must generally meet the following requirements:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Age Requirement:</strong> You must be 62 years of age or older. All borrowers listed on the home's title must meet this requirement.</li>
              <li><strong>Home Ownership:</strong> You must own your home outright or have a significant amount of equity. 
                If you have an existing mortgage, the reverse mortgage proceeds may be used to pay it off.</li>
              <li><strong>Primary Residence:</strong> The home must be your primary residence. Investment properties and vacation homes are not eligible.</li>
              <li><strong>Property Type:</strong> Eligible property types include single-family homes, 2-4 unit properties (if you live in one unit), 
                FHA-approved condominiums, and manufactured homes that meet FHA requirements.</li>
              <li><strong>Financial Assessment:</strong> You must demonstrate the ability to pay property taxes, homeowners insurance, 
                and maintain the property. Lenders will review your credit history and residual income.</li>
              <li><strong>HUD-Approved Counseling:</strong> You must complete counseling with a HUD-approved housing counseling agency 
                before applying for a reverse mortgage. This counseling helps ensure you understand the loan terms and alternatives.</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              <strong>Important:</strong> These are general guidelines. Actual eligibility requirements may vary by lender and situation. 
              Always consult with HUD-approved counselors and licensed mortgage professionals for personalized information.
            </p>
          </div>
        </section>

        {/* Costs and Fees */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Costs and Fees</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <p className="text-yellow-800 font-medium mb-3">Understanding Reverse Mortgage Costs:</p>
            <p className="text-yellow-700 mb-3">
              Reverse mortgages can have various costs and fees, similar to traditional mortgages. It's important to understand 
              all costs before proceeding.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 mb-3">
              Common costs associated with reverse mortgages may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Origination Fee:</strong> A fee charged by the lender for processing the loan</li>
              <li><strong>Mortgage Insurance Premium (MIP):</strong> An upfront premium and ongoing annual premium paid to FHA</li>
              <li><strong>Third-Party Fees:</strong> Appraisal fees, title insurance, recording fees, and other closing costs</li>
              <li><strong>Servicing Fee:</strong> A monthly fee charged by the loan servicer</li>
              <li><strong>Interest:</strong> Interest that accrues on the loan balance over time</li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Many of these costs can be financed into the loan, meaning you don't have to pay them 
              out of pocket. However, financing costs reduces the amount of cash available to you. Always review the loan 
              estimate and closing disclosure carefully to understand all costs.
            </p>
          </div>
        </section>

        {/* When Loan Becomes Due */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">When the Loan Becomes Due</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 mb-4">
              A reverse mortgage loan becomes due and payable when one of the following occurs:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Last Surviving Borrower Moves Out:</strong> If you (and your spouse, if applicable) move out of the home permanently, 
                the loan becomes due. This includes moving to a nursing home or assisted living facility on a permanent basis.</li>
              <li><strong>Last Surviving Borrower Passes Away:</strong> When the last borrower on the loan passes away, the loan becomes due.</li>
              <li><strong>Property is Sold:</strong> If you sell the home, the loan must be repaid from the sale proceeds.</li>
              <li><strong>Default on Loan Obligations:</strong> If you fail to pay property taxes, homeowners insurance, or maintain the property, 
                the lender may declare the loan due.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Repayment Options:</strong> When the loan becomes due, you or your heirs typically have several options:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Pay off the loan balance and keep the home</li>
              <li>Sell the home and use the proceeds to pay off the loan (any remaining equity goes to you or your heirs)</li>
              <li>Sign over the property to the lender (if the loan balance equals or exceeds the home's value)</li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Important:</strong> You or your heirs are never required to pay more than the home's value, even if the loan 
              balance exceeds it. This is because HECM loans are non-recourse loans, meaning the lender's only recourse is the property itself.
            </p>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Considerations for Homeowners</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-green-900">Potential Advantages</h4>
              <ul className="list-disc list-inside text-green-800 space-y-2">
                <li>Access to home equity without monthly mortgage payments</li>
                <li>Can remain in your home as long as you meet loan obligations</li>
                <li>Flexible payment options (line of credit, monthly payments, lump sum, or combination)</li>
                <li>Loan proceeds are generally not taxable as income</li>
                <li>Does not typically affect Social Security or Medicare benefits</li>
                <li>Non-recourse loan (you or your heirs won't owe more than the home's value)</li>
                <li>Can use funds for various purposes (home repairs, living expenses, healthcare, etc.)</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-yellow-900">Important Considerations</h4>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li>Loan balance grows over time as interest accrues, reducing home equity</li>
                <li>Must continue to pay property taxes, homeowners insurance, and maintain the property</li>
                <li>May affect eligibility for need-based government programs (SSI, Medicaid)</li>
                <li>Upfront and ongoing costs (MIP, origination fees, servicing fees)</li>
                <li>Less equity available for heirs when you pass away</li>
                <li>If you move out permanently, the loan becomes due</li>
                <li>Spouse under 62 may not be able to remain in home if you pass away first (unless they're on the loan)</li>
                <li>Requires HUD-approved counseling before application</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Alternatives */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Alternatives to Consider</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-blue-800 font-medium mb-3">Other Options to Explore:</p>
            <p className="text-blue-700 mb-3">
              Before deciding on a reverse mortgage, you may want to explore other options for accessing home equity or 
              supplementing retirement income:
            </p>
            <ul className="list-disc list-inside text-blue-700 space-y-2 mb-4">
              <li><strong>Home Equity Loan or HELOC:</strong> Traditional home equity borrowing options</li>
              <li><strong>Downsizing:</strong> Selling your current home and purchasing a smaller, less expensive home</li>
              <li><strong>Renting Out a Portion:</strong> If you have extra space, renting out a room or unit</li>
              <li><strong>Government Assistance Programs:</strong> Programs for seniors that may help with housing costs</li>
              <li><strong>Family Support:</strong> Discussing financial needs with family members</li>
            </ul>
            <p className="text-blue-700">
              <strong>Remember:</strong> A reverse mortgage is one option among many. Each person's situation is unique, 
              and what works for one person may not be appropriate for another. Consulting with HUD-approved counselors, 
              financial advisors, and family members can help you make an informed decision.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Additional Resources</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              For official reverse mortgage information and resources, you can visit:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a href="https://www.hud.gov/program_offices/housing/sfh/hecm/hecmhome" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  HUD - Home Equity Conversion Mortgage (HECM) Information
                </a>
              </li>
              <li>
                <a href="https://www.consumerfinance.gov/consumer-tools/reverse-mortgages/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  Consumer Financial Protection Bureau - Reverse Mortgages
                </a>
              </li>
              <li>
                <a href="https://www.hud.gov/hud-partners/housing_counseling" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  HUD - Find a Housing Counselor
                </a>
              </li>
              <li>
                <a href="https://www.hud.gov/sites/dfiles/OCHCO/documents/76101HSGHBK.pdf" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  HUD - Reverse Mortgage Guide for Senior Homeowners
                </a>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Important:</strong> HUD requires that all reverse mortgage applicants complete counseling with a 
              HUD-approved housing counseling agency before applying. This counseling is designed to help you understand 
              reverse mortgages and explore alternatives.
            </p>
          </div>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Ready to Learn More?</h3>
          <p className="text-blue-700 mb-4">
            Connect with licensed mortgage professionals who specialize in reverse mortgages and can provide personalized 
            information about your eligibility and options. Remember, HUD-approved counseling is required before applying.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mortgage/find-the-right-loan" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent-hover transition"
            >
              Explore Reverse Mortgage Options
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
