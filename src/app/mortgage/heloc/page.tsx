"use client";
import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';

export default function HELOCPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="HELOC Overview"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: 'HELOC Overview' }
        ]}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Home Equity Line of Credit (HELOC)</h2>
        <p className="text-center text-gray-600 mb-6">
          Educational information about Home Equity Lines of Credit (HELOC), how they work, 
          their characteristics, and general considerations for homeowners.
        </p>
        
        {/* Compliance: Disclaimer at top of mortgage pages */}
        <Disclaimer variant="compact" className="mb-8" />
        
        {/* What is HELOC */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">What is a HELOC?</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-blue-800 font-medium mb-3">Home Equity Line of Credit (HELOC):</p>
            <p className="text-blue-700">
              A HELOC is a revolving line of credit that uses your home's equity as collateral. It allows homeowners 
              to borrow against the equity they've built up in their home. The credit limit is typically based on 
              the appraised value of your home minus the amount you still owe on your primary mortgage.
            </p>
          </div>
          <p className="mb-4">
            Unlike a traditional loan where you receive a lump sum, a HELOC works more like a credit card. You have 
            access to a credit line that you can draw from as needed, up to your approved limit. You only pay interest 
            on the amount you actually borrow, not the entire credit line.
          </p>
        </section>

        {/* How HELOC Works */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">How HELOCs Work</h3>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">1. Credit Line Establishment</h4>
              <p className="text-gray-700 mb-3">
                When you're approved for a HELOC, the lender establishes a credit line based on your home's appraised 
                value and your existing mortgage balance. You can typically borrow up to 85% of the value of your home 
                minus the amount you still owe on your primary mortgage.
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Example:</strong> If your home's appraised value is $200,000, 85% of that is $170,000. 
                If you still owe $120,000 on your mortgage, you'll subtract that, leaving you with a maximum HELOC 
                of $50,000.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Calculation:</strong> $200,000 (home value) × 85% = $170,000 - $120,000 (mortgage balance) = $50,000 (max HELOC)
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">2. Draw Period (Typically 10 Years)</h4>
              <p className="text-gray-700 mb-3">
                During the draw period, which typically lasts about 10 years, you can withdraw funds as needed up to 
                your credit limit. You can make multiple withdrawals and repayments during this time. As you repay your 
                outstanding balance, the amount of available credit is replenished – much like a credit card. This means 
                you can borrow against it again if you need to.
              </p>
              <p className="text-gray-700 mb-3">
                When you withdraw money from your HELOC, you'll receive monthly bills with minimum payments that include 
                principal and interest. Payments may change based on your balance and interest rate fluctuations, and may 
                also change if you make additional principal payments.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Making additional principal payments when you can will help you save on interest 
                and help you reduce your overall debt more quickly. Draw period terms vary by lender.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">3. Repayment Period (Typically 20 Years)</h4>
              <p className="text-gray-700 mb-3">
                After the draw period ends, you enter the repayment period, which typically lasts about 20 years. 
                During this time, you can no longer withdraw funds and must make payments that cover both principal 
                and interest on the remaining balance.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Monthly payments during the repayment period are typically higher than during 
                the draw period since they include principal repayment.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Key Characteristics of HELOCs</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Variable Interest Rates</h4>
              <p className="text-gray-700 mb-3">
                Most HELOCs have variable interest rates that can change from month to month. The variable rate is 
                calculated from both an index and a margin.
              </p>
              <p className="text-gray-700 mb-3">
                An index is a financial indicator used by banks to set rates on many consumer loan products. Most banks 
                use the U.S. Prime Rate as published in <em>The Wall Street Journal</em> as the index for HELOCs. 
                The index, and consequently the HELOC interest rate, can move up or down.
              </p>
              <p className="text-gray-700 mb-3">
                The other component of a variable interest rate is a margin, which is added to the index. The margin 
                is constant throughout the life of the line of credit.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Some lenders may offer rate discounts for automatic payments (such as 0.25% discount) 
                or based on the funds you initially use when opening the HELOC (up to 1.50% additional discount). 
                Terms vary by lender.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Flexible Access to Funds</h4>
              <p className="text-gray-700 mb-3">
                HELOCs provide flexibility because you can borrow only what you need, when you need it. You're not 
                required to use the entire credit line, and you can make payments to reduce your balance and free up 
                credit for future use.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Some lenders may require an initial draw or have minimum draw requirements. 
                Terms vary by lender.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Fees and Costs</h4>
              <p className="text-gray-700 mb-3">
                Some lenders may offer HELOCs with no application fees, annual fees, or closing costs. However, 
                terms vary significantly by lender, and there may be up-front fees such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3 text-sm">
                <li>Application fees</li>
                <li>Annual fees</li>
                <li>Cancellation or early closure fees (some lenders may charge if you close your HELOC within 36 months of opening it)</li>
                <li>Appraisal fees</li>
                <li>Origination fees</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Important:</strong> Always ask your lender about all fees associated with your HELOC before applying. 
                Review all terms and conditions carefully.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Home as Collateral</h4>
              <p className="text-gray-700 mb-3">
                Because your home serves as collateral for a HELOC, failure to make payments could result in 
                foreclosure. This is an important consideration when deciding whether a HELOC is appropriate for your situation.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Important:</strong> Only borrow what you can afford to repay. Defaulting on a HELOC could 
                put your home at risk.
              </p>
            </div>
          </div>
        </section>

        {/* Common Uses */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Common Uses for HELOCs</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Homeowners may use HELOCs for various purposes. Here are some common uses:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Home Improvements:</strong> Funding renovations, repairs, or upgrades to increase your home's value</li>
              <li><strong>Debt Consolidation:</strong> Paying off high-interest debt, such as credit cards or personal loans</li>
              <li><strong>Education Expenses:</strong> Covering college tuition or other educational costs</li>
              <li><strong>Major Purchases:</strong> Financing large expenses like vehicles or appliances</li>
              <li><strong>Emergency Funds:</strong> Having access to funds for unexpected expenses</li>
              <li><strong>Investment Opportunities:</strong> Some homeowners may use HELOCs for investment purposes</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              <strong>Note:</strong> Using home equity for investments or non-essential expenses carries risks. 
              Consider your financial situation and repayment ability carefully before using a HELOC.
            </p>
          </div>
        </section>

        {/* Eligibility and Requirements */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">General Eligibility Considerations</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              While specific requirements vary by lender, here are some general factors that lenders typically consider 
              for HELOC eligibility:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Available Home Equity:</strong> You need to have available equity in your home, meaning that the amount you owe on your home must be less than the value of your home. You can typically borrow up to 85% of the value of your home minus the amount you owe.</li>
              <li><strong>Credit Score and History:</strong> A lender generally looks at your credit score and history, just as when you first got your mortgage. Requirements vary by lender.</li>
              <li><strong>Employment History:</strong> Proof of stable employment history, typically at least two years</li>
              <li><strong>Monthly Income and Debts:</strong> Lenders review your monthly income and monthly debts to assess your ability to repay</li>
              <li><strong>Property Appraisal:</strong> A professional appraisal to determine your home's current market value</li>
              <li><strong>Primary Residence:</strong> Most HELOCs are for primary residences, though some lenders may offer HELOCs for investment properties</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              <strong>Important:</strong> These are general guidelines. Actual eligibility requirements are determined by 
              individual lenders and may vary based on multiple factors. Always consult with a licensed mortgage professional 
              for personalized information.
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
                <li>Flexible access to funds when needed</li>
                <li>Pay interest only on what you borrow</li>
                <li>Often has a lower interest rate than some other common types of loans</li>
                <li>Some lenders may offer no application fees, closing costs, or annual fees</li>
                <li>The interest may be tax deductible (please consult your tax advisor regarding interest deductibility as tax rules may have changed)</li>
                <li>Can be used for large expenses or to consolidate higher-interest rate debt</li>
                <li>Some lenders may offer rate discounts for automatic payments or based on initial draw amounts</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-yellow-900">Important Considerations</h4>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li>Your home is used as collateral - risk of foreclosure if you can't repay</li>
                <li>Variable interest rates can increase your payments over time</li>
                <li>Repayment period payments are typically higher than draw period payments</li>
                <li>Lenders may freeze or reduce credit lines if property values decline</li>
                <li>Some lenders may charge fees for closing, early closure, or inactivity</li>
                <li>Interest rates may be higher than primary mortgage rates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fixed Rate Option */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Fixed Interest Rate Option</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 mb-3">
              Some lenders offer an option that allows you to convert a portion of the outstanding variable-rate balance 
              on your HELOC to a fixed rate. Payments you make on a balance at a fixed interest rate are predictable 
              and stable and can protect you from rising interest rates.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Fixed rate conversion options vary by lender. Some lenders may require a minimum 
              balance (such as $5,000 or more) to convert to a fixed rate. Terms and availability vary by lender.
            </p>
          </div>
        </section>

        {/* HELOC vs Other Options */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">HELOC vs. Other Home Equity Options</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-4 text-gray-900">HELOC vs. Home Equity Loan</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-semibold text-gray-900 mb-2">HELOC (Line of Credit):</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Revolving credit line</li>
                  <li>Variable interest rate (with fixed rate option available at some lenders)</li>
                  <li>Draw funds as needed during draw period</li>
                  <li>Principal and interest payments during draw period</li>
                  <li>Typically 10-year draw period, 20-year repayment period</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Home Equity Loan (Fixed):</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Lump sum loan</li>
                  <li>Fixed interest rate</li>
                  <li>Receive all funds at once</li>
                  <li>Fixed monthly payments</li>
                  <li>Fixed repayment term</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Note:</strong> The choice between a HELOC and a home equity loan depends on your specific needs, 
              financial situation, and preferences. Each has different characteristics that may be more suitable for 
              different situations. A HELOC may be useful for large expenses or to consolidate higher-interest rate debt 
              on other loans such as credit cards.
            </p>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Exploring HELOC Options</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-blue-800 font-medium mb-3">Next Steps:</p>
            <ul className="list-disc list-inside text-blue-700 space-y-2 mb-4">
              <li>Calculate your available home equity</li>
              <li>Review your credit score and financial situation</li>
              <li>Compare HELOC terms from multiple lenders</li>
              <li>Understand all fees, rates, and terms before applying</li>
              <li>Consider how you'll use the funds and your repayment plan</li>
              <li>Connect with licensed mortgage professionals to discuss your options</li>
            </ul>
            <p className="text-blue-700">
              <strong>Remember:</strong> HELOCs are one option among many for accessing home equity. Each borrower's 
              situation is unique, and what works for one person may not be the best fit for another. Consulting with 
              licensed mortgage professionals can help you understand which option may be appropriate for your circumstances.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Additional Resources</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              For more information about HELOCs and home equity options, you can:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Consult with licensed mortgage professionals who can provide personalized information</li>
              <li>Compare HELOC terms and rates from multiple lenders</li>
              <li>Review educational resources from financial institutions and government agencies</li>
              <li>Consider speaking with a financial advisor about your specific situation</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Ready to Learn More?</h3>
          <p className="text-blue-700 mb-4">
            Connect with licensed mortgage professionals who can provide personalized information about HELOCs 
            and help you explore your home equity options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mortgage/find-the-right-loan" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent-hover transition"
            >
              Estimate Available Home Equity
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