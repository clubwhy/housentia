"use client";
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';

const ARTICLE_SLUG = 'conventional-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Conventional Loan Guide',
  });
})();

export default function ConventionalLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Conventional Loan Guide"
        breadcrumbs={BREADCRUMBS}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Conventional Loan Overview</h2>
        <p className="text-center text-gray-600 mb-6">
          Educational information about conventional mortgages, the most common type of home loan in the United States. 
          Learn how conventional loans differ from government-backed options and what to consider when exploring this loan type.
        </p>
        
        {/* Compliance: Disclaimer at top of mortgage pages */}
        <Disclaimer variant="compact" className="mb-8" />
        
        {/* Jump to Section Menu */}
        <nav className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-3">Jump to section:</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#down-payment-credit" className="text-blue-600 hover:underline">Down Payment & Credit</a>
            <a href="#pmi-explained" className="text-blue-600 hover:underline">PMI Explained</a>
            <a href="#conventional-vs-fha" className="text-blue-600 hover:underline">Conventional vs FHA</a>
            <a href="#self-assessment" className="text-blue-600 hover:underline">Is It Right for You?</a>
            <a href="#loan-terms" className="text-blue-600 hover:underline">Loan Types & Terms</a>
          </div>
        </nav>
        
        {/* What is Conventional Loan */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">What is a Conventional Loan?</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-blue-800 font-medium mb-3">Conventional Mortgages:</p>
            <p className="text-blue-700">
              A conventional loan is a mortgage that is not insured or guaranteed by a government agency such as the 
              Federal Housing Administration (FHA), the U.S. Department of Veterans Affairs (VA), or the U.S. Department 
              of Agriculture (USDA). Instead, conventional loans are backed by private lenders and typically sold to 
              government-sponsored enterprises (GSEs) like Fannie Mae and Freddie Mac.
            </p>
          </div>
          <p className="mb-4">
            Conventional loans are the most common type of mortgage in the United States. They offer flexibility in terms 
            of loan amounts, property types, and can be used for primary residences, second homes, and investment properties.
          </p>
        </section>

        {/* Why Conventional Loans Are So Common */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Why Conventional Loans Are So Common</h3>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20 mb-6">
            <p className="text-gray-700 mb-4">
              Conventional loans have become the default choice for many U.S. borrowers for several practical reasons:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Long-Term Cost Efficiency</h4>
                <p className="text-sm text-gray-700">
                  Unlike FHA loans where mortgage insurance may last for the life of the loan, conventional loans allow 
                  PMI removal at 80% loan-to-value. This means your monthly payment can decrease over time as you build 
                  equity, potentially saving thousands of dollars over the life of the loan.
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Flexibility and Options</h4>
                <p className="text-sm text-gray-700">
                  Conventional loans offer flexibility in property types (primary residence, second home, investment property), 
                  loan amounts (including jumbo loans), and terms (15-year, 30-year, ARMs). This versatility makes them 
                  suitable for a wide range of borrowers and situations.
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Competitive Pricing with Strong Credit</h4>
                <p className="text-sm text-gray-700">
                  Borrowers with strong credit scores (typically 740+) often receive competitive interest rates on conventional 
                  loans. The absence of government insurance premiums can also result in lower overall costs compared to 
                  government-backed loans for qualified borrowers.
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Wide Availability</h4>
                <p className="text-sm text-gray-700">
                  Conventional loans are offered by virtually all mortgage lenders, from large banks to credit unions to 
                  online lenders. This widespread availability gives borrowers more options to compare rates and terms.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> While conventional loans are common, they're not the right fit for everyone. Government-backed 
            loans like FHA and VA may offer advantages for certain borrowers, such as lower down payment requirements or more 
            flexible credit standards.
          </p>
        </section>

        {/* Key Features */}
        <section id="down-payment-credit" className="mb-12 scroll-mt-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Key Characteristics of Conventional Loans</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Down Payment Requirements</h4>
              <p className="text-gray-700 mb-3">
                Conventional loans typically require a down payment of at least 3% to 5% for qualified borrowers. 
                However, putting down 20% or more allows you to avoid private mortgage insurance (PMI), which can 
                reduce your monthly payment.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Down payment requirements vary by lender, credit score, and loan program. 
                Some conventional loan programs may allow down payments as low as 3% for first-time home buyers.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Credit Score Considerations</h4>
              <p className="text-gray-700 mb-3">
                Conventional loans generally require higher credit scores compared to government-backed loans like FHA. 
                Most lenders look for credit scores of 620 or higher, though better rates may be available for scores 
                of 740 or above.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Credit score requirements are set by individual lenders and may vary. 
                Your credit score is one of many factors lenders consider when evaluating your application.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Private Mortgage Insurance (PMI)</h4>
              <p className="text-gray-700 mb-3">
                If you put down less than 20%, conventional loans typically require private mortgage insurance (PMI). 
                PMI protects the lender in case of default. The good news is that PMI can be removed once you reach 
                80% loan-to-value (LTV) ratio, either through payments or property appreciation.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> PMI removal typically requires a request to your lender and may involve a 
                new appraisal. Some loans may have automatic PMI removal at 78% LTV.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Loan Limits</h4>
              <p className="text-gray-700 mb-3">
                Conventional loans have conforming loan limits set by Fannie Mae and Freddie Mac. For 2024, the 
                conforming loan limit is $766,550 for most areas, with higher limits in high-cost areas. Loans 
                above these limits are considered "jumbo loans" and may have different requirements.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Loan limits are adjusted annually and vary by location. 
                Check current limits for your area when considering a conventional loan.
              </p>
            </div>
          </div>
        </section>

        {/* PMI Explanation */}
        <section id="pmi-explained" className="mb-12 scroll-mt-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Understanding Private Mortgage Insurance (PMI)</h3>
          
          {/* Visually Emphasized PMI Removal Callout */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 mb-6 border-2 border-emerald-300 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 rounded-full p-2 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2 text-emerald-900">Key Advantage: PMI Can Be Removed at 80% LTV</h4>
                <p className="text-emerald-800 mb-3">
                  One of the significant advantages of conventional loans is that PMI can be removed once you reach 80% 
                  loan-to-value ratio. This means your monthly payment can decrease over time, potentially saving you 
                  money as you build equity in your home.
                </p>
                <div className="bg-white/70 rounded-lg p-3 border border-emerald-200">
                  <p className="text-sm text-emerald-900 font-medium mb-1">How this differs from FHA loans:</p>
                  <p className="text-xs text-emerald-800">
                    FHA loans typically require Mortgage Insurance Premium (MIP) for the life of the loan if you put down 
                    less than 10%. With conventional loans, PMI removal at 80% LTV can result in lower long-term costs for 
                    borrowers who plan to stay in their home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200">
            <h4 className="font-bold text-lg mb-3 text-gray-900">What is PMI?</h4>
            <p className="text-gray-700 mb-4">
              Private Mortgage Insurance (PMI) is insurance that protects the lender if you default on your loan. 
              It's typically required when your down payment is less than 20% of the home's purchase price.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-gray-900 mt-6">PMI Removal at 80% Loan-to-Value (LTV)</h4>
            <p className="text-gray-700 mb-4">
              Once you've paid down your loan to 80% of the home's original value (or the current appraised value, 
              whichever is lower), you can request to have PMI removed. This can happen through:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Regular payments:</strong> As you make monthly payments, your loan balance decreases and your LTV ratio improves.</li>
              <li><strong>Property appreciation:</strong> If your home's value increases, your LTV ratio may drop below 80% even if you haven't paid down the loan significantly.</li>
              <li><strong>Additional payments:</strong> Making extra principal payments can help you reach 80% LTV faster.</li>
            </ul>
            <p className="text-sm text-gray-600 bg-white/50 p-3 rounded border border-indigo-200">
              <strong>Important:</strong> PMI removal typically requires contacting your lender and may involve a 
              new appraisal. Some loans automatically remove PMI at 78% LTV. Check your loan documents for specific 
              PMI removal terms.
            </p>
          </div>
        </section>

        {/* Conventional vs FHA Comparison */}
        <section id="conventional-vs-fha" className="mb-12 scroll-mt-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Conventional vs. FHA: Educational Comparison</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <p className="text-gray-700 mb-4">
              Understanding the differences between conventional and FHA loans can help you make informed decisions. 
              Here's an educational comparison:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-4 text-blue-900">Conventional Loans</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Not government-backed</li>
                <li>Typically requires 3-20% down payment</li>
                <li>PMI required if down payment &lt; 20% (can be removed at 80% LTV)</li>
                <li>Generally requires credit score of 620+</li>
                <li>Can be used for primary residence, second home, or investment property</li>
                <li>Higher loan limits available (jumbo loans)</li>
                <li>No upfront mortgage insurance premium</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-4 text-green-900">FHA Loans</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Government-backed (FHA insured)</li>
                <li>Down payment as low as 3.5%</li>
                <li>Mortgage Insurance Premium (MIP) required (may be for life of loan)</li>
                <li>More flexible credit score requirements</li>
                <li>Primary residence only</li>
                <li>Lower loan limits than conventional</li>
                <li>Upfront MIP premium required</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800">
              <strong>Educational Note:</strong> This comparison is for informational purposes only. The right loan 
              type depends on your individual financial situation, credit profile, and goals. Consider speaking with 
              licensed mortgage professionals to understand which option may be appropriate for your circumstances.
            </p>
          </div>
        </section>

        {/* Self-Assessment Section */}
        <section id="self-assessment" className="mb-12 scroll-mt-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Is a Conventional Loan Right for You?</h3>
          <div className="bg-white border-2 border-primary/30 rounded-lg p-6 shadow-sm mb-6">
            <p className="text-gray-700 mb-4">
              Consider these factors to help you understand if a conventional loan may align with your situation. 
              This is a self-assessment tool, not financial advice:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Credit Score Range</h4>
                  <p className="text-sm text-gray-700">
                    Do you have a credit score of 620 or higher? Scores of 740+ may qualify for better rates. 
                    If your score is below 620, FHA loans may offer more flexibility.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Down Payment Considerations</h4>
                  <p className="text-sm text-gray-700">
                    Can you make a down payment of 3-5% or more? Putting down 20% avoids PMI entirely. 
                    If you can only afford 3.5% down, FHA may be an option to consider.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Property Type Flexibility</h4>
                  <p className="text-sm text-gray-700">
                    Are you buying a primary residence, second home, or investment property? Conventional loans 
                    offer flexibility for all three, while FHA and VA loans are typically limited to primary residences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="text-primary font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Long-Term Ownership Plans</h4>
                  <p className="text-sm text-gray-700">
                    Do you plan to stay in the home long enough to benefit from PMI removal at 80% LTV? 
                    If you plan to move or refinance within a few years, the PMI removal benefit may be less relevant.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <span className="text-primary font-bold text-sm">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Loan Amount Needs</h4>
                  <p className="text-sm text-gray-700">
                    Do you need a loan amount above conforming limits? Conventional jumbo loans are available, 
                    though they may have different requirements than conforming loans.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Educational Note:</strong> This self-assessment is for informational purposes only. 
              Every borrower's situation is unique. Consider speaking with licensed mortgage professionals 
              to understand which loan type may be appropriate for your specific circumstances.
            </p>
          </div>
        </section>

        {/* Loan Terms */}
        <section id="loan-terms" className="mb-12 scroll-mt-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Common Conventional Loan Terms</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">30-Year Fixed</h4>
              <p className="text-gray-700">
                The most common conventional loan term. Offers lower monthly payments spread over 30 years, 
                making it easier to qualify and manage monthly expenses. You'll pay more interest over the 
                life of the loan compared to shorter terms.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">15-Year Fixed</h4>
              <p className="text-gray-700">
                Shorter term with higher monthly payments but significantly less interest paid over time. 
                May be suitable if you can afford the higher payment and want to build equity faster.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Adjustable-Rate (ARM)</h4>
              <p className="text-gray-700">
                Conventional ARMs offer an initial fixed rate period (e.g., 5/1 ARM, 7/6 ARM) followed by 
                adjustable rates. May start with lower rates but can increase over time.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Jumbo Loans</h4>
              <p className="text-gray-700">
                Conventional loans that exceed conforming loan limits. Typically require larger down payments, 
                higher credit scores, and may have different interest rates than conforming loans.
              </p>
            </div>
          </div>
        </section>

        {/* Considerations */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Important Considerations</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-green-900">Potential Advantages</h4>
              <ul className="list-disc list-inside text-green-800 space-y-2">
                <li>PMI can be removed at 80% LTV</li>
                <li>Flexible property types (primary, second home, investment)</li>
                <li>Higher loan limits available (jumbo loans)</li>
                <li>No upfront mortgage insurance premium</li>
                <li>Competitive interest rates for qualified borrowers</li>
                <li>Widely available from many lenders</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-yellow-900">Things to Consider</h4>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li>Higher credit score requirements than FHA</li>
                <li>PMI required if down payment &lt; 20%</li>
                <li>Larger down payment typically needed for best rates</li>
                <li>Stricter debt-to-income ratio requirements</li>
                <li>May require more documentation than government loans</li>
                <li>Loan limits may restrict borrowing in high-cost areas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Educational CTAs */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Explore Conventional Loan Scenarios</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-blue-800 font-medium mb-4">Use these educational tools to understand how conventional loans work:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Link 
                href="/tools/mortgage-calculator" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition text-center"
              >
                <h4 className="font-semibold text-blue-900 mb-2">See How PMI Affects Monthly Payments</h4>
                <p className="text-sm text-blue-700">
                  Understand how PMI impacts your payment and when it can be removed at 80% LTV
                </p>
              </Link>
              <Link 
                href="/tools/mortgage-calculator" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition text-center"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Compare Conventional vs FHA Costs Over Time</h4>
                <p className="text-sm text-blue-700">
                  See how PMI removal compares to FHA's lifetime MIP in long-term scenarios
                </p>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/mortgage/find-the-right-loan" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition text-center"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Explore Fixed vs ARM Scenarios</h4>
                <p className="text-sm text-blue-700">
                  Learn about different conventional loan terms and how they affect payments
                </p>
              </Link>
              <Link 
                href="/mortgage/todays-mortgage-rates" 
                className="bg-white border-2 border-blue-300 rounded-lg p-4 hover:bg-blue-50 transition text-center"
              >
                <h4 className="font-semibold text-blue-900 mb-2">View Current Conventional Rates</h4>
                <p className="text-sm text-blue-700">
                  See current market rates for conventional loans and understand rate trends
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Additional Resources</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              For more information about conventional loans and related topics:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <Link href="/mortgage/fha-loan" className="text-blue-600 hover:underline">
                  Compare with FHA Loan Guide →
                </Link>
              </li>
              <li>
                <Link href="/mortgage/va-loan" className="text-blue-600 hover:underline">
                  Compare with VA Loan Guide →
                </Link>
              </li>
              <li>
                <Link href="/mortgage/non-qm-loan" className="text-blue-600 hover:underline">
                  Learn About Non-QM Loan Guide →
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

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Continue Your Learning</h3>
          <p className="text-blue-700 mb-4">
            Use these educational resources to deepen your understanding of conventional loans and explore how they 
            compare to other mortgage options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/mortgage-calculator" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent-hover transition"
            >
              See How PMI Affects Monthly Payments
            </Link>
            <Link 
              href="/mortgage/fha-loan" 
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition"
            >
              Compare with FHA Loan Guide
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

