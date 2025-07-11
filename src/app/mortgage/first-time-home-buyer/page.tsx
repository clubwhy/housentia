"use client";
import PageHero from '@/components/PageHero';
import InquiryWizard from '@/components/InquiryWizard';

export default function FirstTimeHomeBuyerPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="First time home buyer"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: 'First time home buyer' }
        ]}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Your Guide to Buying Your First Home</h2>
        <p className="text-center text-gray-600 mb-10">Learn about first-time buyer programs, down payment assistance, and tips for a smooth home buying process.</p>
        
        {/* Why Start with Mortgage Planning */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Why You Should Plan Your Mortgage Before House Hunting</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-blue-800 font-medium mb-3">Important Reality Check:</p>
            <p className="text-blue-700">Many first-time buyers make the mistake of falling in love with a house first, then trying to figure out how to pay for it. This often leads to disappointment and frustration when they realize the house is beyond their budget.</p>
          </div>
          <p className="mb-4">The smart approach is to understand your financial capacity first, then look for homes within your budget. This way, you'll avoid the heartbreak of finding your dream home only to discover you can't afford it.</p>
          <p>By planning your mortgage first, you'll have a clear budget range and can focus your house hunting on properties you can actually afford, making the entire process much smoother and less stressful.</p>
        </section>

        {/* Mortgage Process Steps */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">The Mortgage Process: Step by Step</h3>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="sm:basis-2/3">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Step 1: Check Your Credit Score</h4>
                  <p className="mb-3">Your credit score is crucial for getting approved and securing the best rates. Aim for a score of 740 or higher for the best terms.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Get your free credit report from AnnualCreditReport.com</li>
                    <li>Check for errors and dispute any inaccuracies</li>
                    <li>Pay down existing debt to improve your score</li>
                  </ul>
                </div>
                <div className="flex justify-center sm:basis-1/3">
                  <img
                    src="/checkyourcreditscore.png"
                    alt="Check your credit score illustration"
                    className="w-44 h-44 object-contain"
                    width={176}
                    height={176}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="sm:basis-2/3">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Step 2: Calculate Your Budget</h4>
                  <p className="mb-3">Determine how much house you can afford based on your income, debt, and savings.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Use our <a href="/tools/affordability-calculator" className="text-blue-600 hover:underline">Affordability Calculator</a></li>
                    <li>Consider all costs: mortgage, taxes, insurance, maintenance</li>
                    <li>Leave room for emergency savings</li>
                  </ul>
                </div>
                <div className="flex justify-center sm:basis-1/3">
                  <img
                    src="/calculateyourbudget.png"
                    alt="Calculate your budget illustration"
                    className="w-44 h-44 object-contain"
                    width={176}
                    height={176}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="sm:basis-2/3">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Step 3: Save for Down Payment</h4>
                  <p className="mb-3">While 20% down is ideal, many programs allow much less. Explore your options:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Conventional loans: 3-5% down</li>
                    <li>FHA loans: 3.5% down</li>
                    <li>VA loans: 0% down (for veterans)</li>
                    <li>USDA loans: 0% down (rural areas)</li>
                  </ul>
                </div>
                <div className="flex justify-center sm:basis-1/3">
                  <img
                    src="/savefordownpayment.png"
                    alt="Save for down payment illustration"
                    className="w-44 h-44 object-contain"
                    width={176}
                    height={176}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="sm:basis-2/3">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Step 4: Get Pre-Approved</h4>
                  <p className="mb-3">A pre-approval letter shows sellers you're serious and tells you exactly how much you can borrow.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Compare rates from multiple lenders</li>
                    <li>Get pre-approval before house hunting</li>
                    <li>Keep your financial situation stable during the process</li>
                  </ul>
                </div>
                <div className="flex justify-center sm:basis-1/3">
                  <img
                    src="/getpreapproved.png"
                    alt="Get pre-approved illustration"
                    className="w-44 h-44 object-contain"
                    width={176}
                    height={176}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="sm:basis-2/3">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Step 5: Find Your Home</h4>
                  <p className="mb-3">Now you can confidently search for homes within your pre-approved budget.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Work with a trusted real estate agent</li>
                    <li>Consider location, schools, and future resale value</li>
                    <li>Get a thorough home inspection</li>
                  </ul>
                </div>
                <div className="flex justify-center sm:basis-1/3">
                  <img
                    src="/findyourhome.png"
                    alt="Find your home illustration"
                    className="w-44 h-44 object-contain"
                    width={176}
                    height={176}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="sm:basis-2/3">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Step 6: Close the Deal</h4>
                  <p className="mb-3">The final step involves paperwork, final approval, and transferring ownership.</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Review all loan documents carefully</li>
                    <li>Bring required funds to closing</li>
                    <li>Get your keys and move in!</li>
                  </ul>
                </div>
                <div className="flex justify-center sm:basis-1/3">
                  <img
                    src="/closethedeal.png"
                    alt="Close the deal illustration"
                    className="w-44 h-44 object-contain"
                    width={176}
                    height={176}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Down Payment Assistance Programs */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Down Payment Assistance Programs</h3>
          <p className="mb-6">Don't let a lack of savings prevent you from buying a home. There are many programs designed to help first-time buyers with down payments and closing costs.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-green-800">CalHFA (California Housing Finance Agency)</h4>
              <p className="text-green-700 mb-3">California's state housing agency offers several programs for first-time buyers:</p>
              <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                <li>MyHome Assistance Program: Up to 3.5% of purchase price</li>
                <li>CalHFA Conventional: Low down payment options</li>
                <li>CalHFA FHA: Government-backed loans with assistance</li>
                <li>CalHFA VA: For veterans and service members</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-blue-800">Chenoa Fund</h4>
              <p className="text-blue-700 mb-3">A national down payment assistance program:</p>
              <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                <li>Up to 3.5% down payment assistance</li>
                <li>Available with FHA loans</li>
                <li>No repayment required (forgivable after 3 years)</li>
                <li>Available in most states</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Low Down Payment Options */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Low Down Payment Loan Options</h3>
          <p className="mb-6">You don't need 20% down to buy a home. Here are programs that make homeownership more accessible:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Loan Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Key Features</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Requirements/Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-4 align-top font-bold text-blue-900 whitespace-nowrap">FHA Loans<br/><span className='font-normal'>(3.5% Down)</span></td>
                  <td className="px-4 py-4 align-top">
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>For lower credit or limited savings</li>
                      <li>Lower interest rates than many conventional loans</li>
                      <li>Mortgage insurance required</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Minimum credit score: 580 (with 3.5% down)</li>
                      <li>Credit scores 500-579: 10% down required</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-4 align-top font-bold text-blue-900 whitespace-nowrap">Conventional Loans<br/><span className='font-normal'>(3% Down)</span></td>
                  <td className="px-4 py-4 align-top">
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>HomeReady and Home Possible programs</li>
                      <li>Lower mortgage insurance costs than FHA</li>
                      <li>Can be combined with down payment assistance</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Minimum credit score: 620</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-bold text-blue-900 whitespace-nowrap">VA Loans<br/><span className='font-normal'>(0% Down)</span></td>
                  <td className="px-4 py-4 align-top">
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>For veterans, active duty service members, and eligible spouses</li>
                      <li>No down payment required</li>
                      <li>No mortgage insurance</li>
                      <li>Competitive interest rates</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Funding fee may apply</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-4 align-top font-bold text-blue-900 whitespace-nowrap">USDA Loans<br/><span className='font-normal'>(0% Down)</span></td>
                  <td className="px-4 py-4 align-top">
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>For homes in eligible rural areas</li>
                      <li>No down payment required</li>
                      <li>Guarantee fee instead of mortgage insurance</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Income limits apply</li>
                      <li>Property must be in USDA-eligible area</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips for Success */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Tips for First-Time Home Buyers</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-4 text-yellow-800">Key Success Factors:</h4>
            <ul className="list-disc list-inside text-yellow-700 space-y-2">
              <li><strong>Start early:</strong> Begin saving and improving your credit at least 6-12 months before buying</li>
              <li><strong>Get educated:</strong> Understand the process and your options before making decisions</li>
              <li><strong>Work with professionals:</strong> Choose experienced real estate agents and mortgage lenders</li>
              <li><strong>Don't rush:</strong> Take time to find the right home and loan for your situation</li>
              <li><strong>Plan for the future:</strong> Consider how your needs might change in 5-10 years</li>
              <li><strong>Emergency fund:</strong> Keep savings for unexpected repairs and expenses</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ready to Start Your Home Buying Journey?</h3>
          <p className="text-gray-600 mb-6">Use our tools to calculate your budget and explore your mortgage options.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/tools/affordability-calculator" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Calculate What You Can Afford
            </a>
            <a href="/tools/mortgage-calculator" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Mortgage Payment Calculator
            </a>
          </div>
        </section>

        {/* Inquiry Wizard Section */}
        <div className="mt-16">
          <InquiryWizard />
        </div>
      </main>
    </div>
  );
} 