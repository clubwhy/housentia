"use client";
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';

export default function VALoanPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="VA Loan Guide"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: 'VA Loan Guide' }
        ]}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">VA Loan Overview</h2>
        <p className="text-center text-gray-600 mb-6">
          Educational information about VA (Veterans Affairs) home loans, their characteristics, 
          eligibility requirements, and general considerations for eligible borrowers.
        </p>
        
        {/* Compliance: Disclaimer at top of mortgage pages */}
        <Disclaimer variant="compact" className="mb-8" />
        
        {/* What is VA Loan */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">What is a VA Loan?</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-blue-800 font-medium mb-3">Veterans Affairs (VA) Home Loans:</p>
            <p className="text-blue-700">
              VA home loans are mortgage loans guaranteed by the U.S. Department of Veterans Affairs. These loans are 
              designed to help veterans, active-duty service members, and eligible surviving spouses purchase, build, 
              improve, or refinance homes. VA loans are provided through private lenders such as banks, mortgage companies, 
              or credit unions, with the VA guaranteeing a portion of the loan.
            </p>
          </div>
          <p className="mb-4">
            The VA does not directly lend money. Instead, the VA guarantees loans made by private lenders, which allows 
            these lenders to offer more favorable terms to eligible borrowers, such as no down payment requirements and 
            no private mortgage insurance (PMI).
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Key Characteristics of VA Loans</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">No Down Payment Required</h4>
              <p className="text-gray-700 mb-3">
                One of the most significant benefits of VA loans is that eligible borrowers may be able to purchase a 
                home with no down payment, as long as the purchase price is not higher than the appraised value of the home.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> While no down payment is required, making a down payment may reduce the VA funding 
                fee and lower your monthly payments.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">No Private Mortgage Insurance (PMI)</h4>
              <p className="text-gray-700 mb-3">
                Unlike conventional loans, VA loans do not require private mortgage insurance (PMI), even with no down payment. 
                This can result in lower monthly payments compared to conventional loans.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> While there's no PMI, VA loans do require a funding fee (see below), which serves 
                a similar purpose of protecting the VA program.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Competitive Interest Rates</h4>
              <p className="text-gray-700 mb-3">
                VA loans often feature competitive interest rates compared to conventional loans. The VA guarantee allows 
                lenders to offer favorable terms to eligible borrowers.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Actual interest rates vary by lender and depend on various factors including credit 
                score, loan amount, and market conditions.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Limited Closing Costs</h4>
              <p className="text-gray-700 mb-3">
                VA loans have restrictions on the closing costs that veterans can pay. Some closing costs may be paid by 
                the seller, and certain fees are not allowed to be charged to veterans.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Closing cost restrictions and seller contributions vary by transaction. 
                Consult with your lender for specific details.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">No Prepayment Penalty</h4>
              <p className="text-gray-700 mb-3">
                VA loans do not have prepayment penalties, meaning you can pay off your loan early or make extra payments 
                without incurring additional fees.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> This flexibility allows borrowers to pay down their loan faster if they choose.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Flexible Credit Requirements</h4>
              <p className="text-gray-700 mb-3">
                VA loans may have more flexible credit requirements compared to conventional loans. The VA does not set 
                a minimum credit score, though individual lenders may have their own requirements.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> While the VA doesn't require a specific credit score, lenders typically look for 
                credit scores of 620 or higher, though requirements vary by lender.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Eligibility Requirements</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              To be eligible for a VA loan, you must meet certain service requirements and obtain a Certificate of Eligibility (COE). 
              Here are the general eligibility criteria:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Certificate of Eligibility (COE):</strong> You must obtain a COE from the VA, which verifies your 
                eligibility based on your service record and duty status.</li>
              <li><strong>Service Requirements:</strong> Eligibility is generally based on:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                  <li>Active duty service members (90 days continuous service during wartime, 181 days during peacetime)</li>
                  <li>Veterans who served and were discharged under conditions other than dishonorable</li>
                  <li>National Guard and Reserve members (6 years of service)</li>
                  <li>Surviving spouses of veterans who died in service or from service-connected disabilities</li>
                </ul>
              </li>
              <li><strong>Credit and Income Standards:</strong> You must meet both VA and lender credit and income standards. 
                The VA does not set a minimum credit score, but lenders typically have their own requirements.</li>
              <li><strong>Occupancy Requirement:</strong> You must intend to occupy the home as your primary residence.</li>
              <li><strong>Loan Limits:</strong> VA loans have limits on the amount that can be guaranteed without a down payment, 
                though these limits vary by location and are adjusted annually.</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              <strong>Important:</strong> Service requirements and eligibility criteria can be complex. The VA provides 
              detailed information about eligibility on their website. Always consult with the VA or a licensed mortgage 
              professional to determine your specific eligibility.
            </p>
          </div>
        </section>

        {/* VA Funding Fee */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">VA Funding Fee</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <p className="text-yellow-800 font-medium mb-3">Understanding the VA Funding Fee:</p>
            <p className="text-yellow-700 mb-3">
              Most VA loans require a funding fee, which is a one-time fee paid to the VA. This fee helps keep the VA 
              loan program operating without taxpayer funding. The funding fee is calculated as a percentage of the loan 
              amount and varies based on several factors.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 mb-3">
              The funding fee amount depends on:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Whether this is your first use of a VA loan or a subsequent use</li>
              <li>Your down payment amount (if any)</li>
              <li>Your service category (regular military, National Guard, or Reserve)</li>
              <li>The type of loan (purchase, refinance, etc.)</li>
            </ul>
            <p className="text-gray-700 mb-3">
              <strong>Funding Fee Exemptions:</strong> Some borrowers may be exempt from the funding fee, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Veterans who receive VA disability compensation</li>
              <li>Veterans who are entitled to receive VA disability compensation but are receiving retirement or active duty pay instead</li>
              <li>Surviving spouses of veterans who died in service or from service-connected disabilities</li>
              <li>Veterans with service-connected disabilities rated at 10% or more</li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Funding fee rates and exemptions are subject to change. The funding fee can be paid 
              upfront at closing or financed into the loan amount. Consult with your lender or the VA for current funding 
              fee rates and exemption criteria.
            </p>
          </div>
        </section>

        {/* Types of VA Loans */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Types of VA Loan Programs</h3>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">VA Purchase Loan</h4>
              <p className="text-gray-700">
                The most common VA loan program, used for purchasing a home. This program allows eligible borrowers to 
                buy a home with no down payment (as long as the purchase price doesn't exceed the appraised value) and 
                no PMI requirement.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">VA Cash-Out Refinance</h4>
              <p className="text-gray-700">
                Allows you to refinance your existing mortgage (VA or non-VA) and take cash out from your home's equity. 
                This can be used to pay off debt, make home improvements, or for other purposes.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">VA Interest Rate Reduction Refinance Loan (IRRRL)</h4>
              <p className="text-gray-700">
                Also known as a "VA Streamline Refinance," this program allows you to refinance an existing VA loan to 
                obtain a lower interest rate or convert from an adjustable-rate to a fixed-rate mortgage. This program 
                typically has simplified underwriting requirements.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">VA Native American Direct Loan (NADL)</h4>
              <p className="text-gray-700">
                A program for Native American veterans or Native American veterans' spouses to purchase, build, or improve 
                homes on Federal Trust Land. This is a direct loan from the VA, not a guaranteed loan.
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
                <li>No down payment required (in most cases)</li>
                <li>No private mortgage insurance (PMI)</li>
                <li>Competitive interest rates</li>
                <li>Limited closing costs</li>
                <li>No prepayment penalties</li>
                <li>More flexible credit requirements</li>
                <li>Can be used multiple times (with some restrictions)</li>
                <li>Assumable loans (under certain conditions)</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-yellow-900">Important Considerations</h4>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li>VA funding fee required (unless exempt)</li>
                <li>Property must meet VA minimum property requirements</li>
                <li>Property must be used as primary residence</li>
                <li>Loan limits may apply in high-cost areas</li>
                <li>Some lenders may have stricter requirements than VA minimums</li>
                <li>Funding fee increases for subsequent use of VA loan benefit</li>
                <li>May have restrictions on certain property types (condos, manufactured homes)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">General Application Process</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-blue-800 font-medium mb-3">Steps to Apply for a VA Loan:</p>
            <ol className="list-decimal list-inside text-blue-700 space-y-2 mb-4">
              <li><strong>Obtain Your Certificate of Eligibility (COE):</strong> Apply for your COE through the VA website 
                or work with your lender who can help obtain it.</li>
              <li><strong>Review Your Financial Situation:</strong> Check your credit score, review your income and debts, 
                and determine your budget.</li>
              <li><strong>Choose a VA-Approved Lender:</strong> Work with a lender that is approved to make VA loans. 
                Compare rates and terms from multiple lenders.</li>
              <li><strong>Get Pre-approved:</strong> Obtain a pre-approval letter to understand how much you may be able to borrow.</li>
              <li><strong>Find a Home:</strong> Work with a real estate agent to find a home that meets your needs and VA requirements.</li>
              <li><strong>Make an Offer:</strong> Submit an offer on the property.</li>
              <li><strong>VA Appraisal:</strong> The property must undergo a VA appraisal to ensure it meets minimum property requirements.</li>
              <li><strong>Loan Processing and Underwriting:</strong> Your lender will process your application and submit it to the VA for guarantee.</li>
              <li><strong>Closing:</strong> Complete the closing process and take ownership of your home.</li>
            </ol>
            <p className="text-blue-700">
              <strong>Note:</strong> The actual process may vary by lender and situation. Working with experienced VA loan 
              specialists can help guide you through the process.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Additional Resources</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              For official VA loan information and resources, you can visit:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a href="https://www.va.gov/housing-assistance/home-loans/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  U.S. Department of Veterans Affairs - Home Loans
                </a>
              </li>
              <li>
                <a href="https://www.va.gov/housing-assistance/home-loans/eligibility/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  VA - Loan Eligibility Information
                </a>
              </li>
              <li>
                <a href="https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  VA - Funding Fee and Closing Costs
                </a>
              </li>
              <li>
                <a href="https://www.benefits.va.gov/HOMELOANS/contact.asp" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  VA - Contact Information for Home Loans
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Ready to Learn More?</h3>
          <p className="text-blue-700 mb-4">
            Connect with licensed mortgage professionals who specialize in VA loans and can provide personalized information 
            about your eligibility and options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mortgage/prequalify" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent-hover transition"
            >
              Connect with Licensed Professionals
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