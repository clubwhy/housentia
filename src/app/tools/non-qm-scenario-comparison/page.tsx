"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import { useState } from 'react';
import Disclaimer from '@/components/Disclaimer';

type ScenarioType = 'self-employed' | 'high-dti' | 'asset-based' | 'investor' | null;

export default function NonQMScenarioComparisonPage() {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioType>(null);
  const [incomeRange, setIncomeRange] = useState<number>(100000);
  const [dtiRange, setDtiRange] = useState<number>(40);
  const [assetRange, setAssetRange] = useState<number>(200000);
  const [creditScoreRange, setCreditScoreRange] = useState<number>(700);

  const scenarios = {
    'self-employed': {
      title: 'Self-Employed Borrower',
      description: 'Explore how income documentation differs for self-employed individuals',
      conventional: {
        approach: 'Income Documentation',
        method: 'Uses tax returns (2 years) with Schedule C or business returns. Income calculated from net income after all business deductions.',
        documentation: ['2 years of tax returns', 'Schedule C or business tax returns', 'Bank statements (2 months for reserves)', 'Profit & Loss statements (if requested)'],
        calculation: 'Net income from tax returns, averaged over 2 years if income declined',
        considerations: 'Business deductions reduce qualifying income. If income declined year-over-year, the lower year may be used.'
      },
      nonqm: {
        approach: 'Alternative Income Documentation',
        method: 'May use bank statement deposits (12-24 months) instead of tax returns. Calculates average monthly deposits, often using 50-70% of deposits as qualifying income.',
        documentation: ['12-24 months of bank statements', 'Business bank statements', 'Profit & Loss statements', 'May not require tax returns'],
        calculation: 'Average monthly bank deposits × percentage (varies by lender, typically 50-70%)',
        considerations: 'May capture income that doesn\'t appear on tax returns due to deductions. Cash flow analysis may differ from taxable income.'
      }
    },
    'high-dti': {
      title: 'High Debt-to-Income Ratio',
      description: 'Understand how different loan types approach higher DTI ratios',
      conventional: {
        approach: 'Standard DTI Limits',
        method: 'DTI typically capped at 43% for Qualified Mortgages. Some exceptions may allow up to 45% with strong compensating factors (high credit score, large down payment, reserves).',
        documentation: ['Pay stubs or tax returns', 'All debt documentation', 'Reserve account statements', 'Credit report'],
        calculation: 'Total monthly debts ÷ Total monthly income = DTI ratio',
        considerations: 'High income alone doesn\'t override DTI limits. Compensating factors may allow slightly higher DTI but guidelines are standardized.'
      },
      nonqm: {
        approach: 'Flexible DTI Evaluation',
        method: 'May allow DTI ratios of 45-50% or higher, depending on lender and program. High income may be viewed more favorably. Guidelines vary significantly by lender.',
        documentation: ['Income documentation (varies by program)', 'Debt documentation', 'Reserve documentation', 'Credit report'],
        calculation: 'DTI calculation method similar, but acceptable limits may be higher',
        considerations: 'Lender-specific guidelines. Some programs may be more flexible with high-income borrowers. Less standardized than conventional loans.'
      }
    },
    'asset-based': {
      title: 'Asset-Based Qualification',
      description: 'Learn how assets may be used differently in qualification',
      conventional: {
        approach: 'Income-Focused Qualification',
        method: 'Assets primarily used for down payment and reserves. Income is the primary qualification factor. Assets supplement but typically don\'t replace income requirements.',
        documentation: ['2 months of bank statements', 'Investment account statements', 'Retirement account statements', 'Income documentation (primary)'],
        calculation: 'Income-based qualification. Assets used for down payment and reserves (typically 2-6 months of payments).',
        considerations: 'Having substantial assets doesn\'t replace income requirements. Assets help with down payment and may provide reserves, but income must still qualify.'
      },
      nonqm: {
        approach: 'Asset-Based Qualification Options',
        method: 'Some programs allow qualification based on substantial assets rather than traditional income. Asset requirements and calculation methods vary by lender and program.',
        documentation: ['Asset statements (varies by program)', 'Bank statements', 'Investment account statements', 'May require less income documentation'],
        calculation: 'Asset-based calculation (varies by lender). May use a percentage of liquid assets or require assets to cover loan amount plus reserves.',
        considerations: 'Not all Non-QM lenders offer asset-based programs. Requirements vary significantly. May be suitable for retirees, high-net-worth individuals, or those with irregular income.'
      }
    },
    'investor': {
      title: 'Real Estate Investor',
      description: 'Explore qualification approaches for investment property borrowers',
      conventional: {
        approach: 'Standard Investment Property Guidelines',
        method: 'Uses rental income from investment properties, typically requiring 75% of rental income to count toward qualification. All properties count toward DTI.',
        documentation: ['Tax returns (2 years)', 'Rental agreements', 'Property tax statements', 'Insurance statements', 'All property documentation'],
        calculation: 'Rental income (75% of gross) + other income - all debts (including all properties) = DTI',
        considerations: 'All investment properties count toward DTI. May be limited by number of financed properties (typically 4-10 conventional loans).'
      },
      nonqm: {
        approach: 'Portfolio-Based Evaluation',
        method: 'May evaluate investment portfolio differently, potentially using higher percentage of rental income or portfolio cash flow analysis. Guidelines vary by lender.',
        documentation: ['Rental income documentation', 'Portfolio financial statements', 'Property documentation', 'May use alternative income methods'],
        calculation: 'May use higher percentage of rental income or portfolio cash flow. Evaluation methods vary significantly by lender.',
        considerations: 'May be more flexible with multiple properties. Some programs specialize in investor loans. Less standardized than conventional guidelines.'
      }
    }
  };

  const getScenarioData = () => {
    if (!selectedScenario) return null;
    return scenarios[selectedScenario];
  };

  const scenarioData = getScenarioData();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-10 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white font-sans mb-2 md:mb-0 drop-shadow">
            Non-QM Qualification Scenario Comparison
          </h1>
          <nav className="flex items-center text-xs text-slate-200 gap-1 md:self-end md:mb-1">
            <Link href="/" className="hover:text-accent flex items-center gap-1">
              <HiHome className="inline-block w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-slate-300" />
            <Link href="/tools" className="hover:text-accent">Tools</Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-slate-300" />
            <span className="text-white font-semibold">Non-QM Scenario Comparison</span>
          </nav>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <Disclaimer variant="compact" />
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding Qualification Approach Differences</h2>
          <p className="text-gray-700 mb-4">
            Conventional loans (Qualified Mortgages, or QM) and Non-QM loans use fundamentally different approaches to evaluate borrowers. If you are self-employed, have a high debt-to-income ratio, rely on assets rather than traditional income, or are a real estate investor, you may find that conventional guidelines do not fit your situation. This educational tool helps you understand how documentation requirements, income calculation methods, and underwriting approaches differ between these loan types.
          </p>
          <p className="text-gray-700 mb-4">
            Non-QM loans are designed for borrowers whose financial profiles do not fit traditional Qualified Mortgage standards but who may still have the ability to repay. They can offer alternative income documentation (such as bank statements instead of tax returns), more flexible DTI limits, and asset-based qualification options. However, they are typically more expensive and less standardized. See{' '}
            <Link href="/mortgage/non-qm-loan" className="text-primary hover:underline font-medium">Non-QM Loan Guide</Link> for a full overview.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="text-blue-800 font-medium mb-2">What This Tool Explains:</p>
            <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
              <li>How income documentation requirements differ between Conventional and Non-QM</li>
              <li>How underwriting approaches may vary by loan type and lender</li>
              <li>What documentation each loan type typically requires</li>
              <li>How qualification structures may differ conceptually for self-employed, high DTI, asset-based, and investor scenarios</li>
            </ul>
            <p className="text-blue-800 font-medium mt-3 mb-2">What This Tool Does NOT Do:</p>
            <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
              <li>Determine if you meet qualification requirements</li>
              <li>Provide approval or eligibility decisions</li>
              <li>Quote rates or loan terms</li>
              <li>Recommend specific loan types or lenders</li>
            </ul>
          </div>
        </section>

        {/* QM vs Non-QM Basics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What Are QM and Non-QM Loans?</h2>
          <p className="text-gray-700 mb-4">
            <strong>Qualified Mortgages (QM)</strong> are loans that meet standards set by the Consumer Financial Protection Bureau (CFPB). They typically require standard income documentation (W-2s, pay stubs, or tax returns), a debt-to-income ratio of 43% or less (with limited exceptions), and no risky loan features. Conventional conforming loans, FHA loans, and VA loans generally fall under QM. They follow predictable, standardized guidelines. See{' '}
            <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">Conventional Loan Guide</Link> and{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Non-Qualified Mortgages (Non-QM)</strong> do not meet those QM standards. They are designed for borrowers who may not fit the traditional profile—self-employed individuals with significant deductions, retirees with assets but limited taxable income, investors with portfolio cash flow, or borrowers with higher DTI. Non-QM lenders use alternative methods to assess ability to repay, such as bank statement income, asset depletion, or portfolio analysis. Requirements vary significantly by lender and program.
          </p>
        </section>

        {/* Who Might Consider Non-QM */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Who Might Consider Non-QM?</h2>
          <p className="text-gray-700 mb-4">
            Non-QM loans may be worth exploring if you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Are self-employed</strong> and your tax returns show low net income due to business deductions, even though your actual cash flow is higher. Bank statement loans may use 12–24 months of deposits instead of tax returns. See <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower Scenarios</Link>.</li>
            <li><strong>Have a higher DTI</strong> than conventional limits (typically 43–45%). Some Non-QM programs allow 50% or higher with compensating factors. See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>.</li>
            <li><strong>Have substantial assets but limited or irregular income</strong> (e.g., retirees, high-net-worth individuals). Asset-based programs may use liquid assets to qualify. See <Link href="/mortgage/what-assets-count-for-mortgage-approval" className="text-primary hover:underline font-medium">What Assets Count for Mortgage Approval</Link>.</li>
            <li><strong>Are a real estate investor</strong> with multiple properties. Non-QM programs may use a higher percentage of rental income or portfolio cash flow than conventional guidelines allow.</li>
            <li><strong>Have recent credit events</strong> (e.g., short sale, foreclosure) outside conventional waiting periods. Some Non-QM programs have shorter lookbacks.</li>
          </ul>
          <p className="text-gray-700">
            Non-QM loans are generally more expensive—higher interest rates and fees—and less standardized. Always compare options and consult licensed mortgage professionals.
          </p>
        </section>

        {/* Scenario Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Select a Scenario to Explore</h2>
          <p className="text-gray-700 mb-6">
            Click a scenario below to compare how Conventional (QM) and Non-QM loans typically approach each situation. The comparison shows evaluation methods, typical documentation, and key considerations. Actual requirements vary by lender.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedScenario('self-employed')}
              className={`p-6 rounded-lg border-2 transition text-left ${
                selectedScenario === 'self-employed'
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 bg-white hover:border-primary/50'
              }`}
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Self-Employed Borrower</h3>
              <p className="text-sm text-gray-600">
                Conventional uses tax returns (Schedule C); Non-QM may use bank statement deposits. Compare documentation and income calculation methods.
              </p>
            </button>
            
            <button
              onClick={() => setSelectedScenario('high-dti')}
              className={`p-6 rounded-lg border-2 transition text-left ${
                selectedScenario === 'high-dti'
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 bg-white hover:border-primary/50'
              }`}
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-900">High Debt-to-Income Ratio</h3>
              <p className="text-sm text-gray-600">
                Conventional typically caps DTI at 43–45%; Non-QM may allow 50%+ with compensating factors. See how limits differ.
              </p>
            </button>
            
            <button
              onClick={() => setSelectedScenario('asset-based')}
              className={`p-6 rounded-lg border-2 transition text-left ${
                selectedScenario === 'asset-based'
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 bg-white hover:border-primary/50'
              }`}
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Asset-Based Qualification</h3>
              <p className="text-sm text-gray-600">
                Conventional focuses on income; Non-QM may qualify based on liquid assets. Compare approaches for retirees and high-net-worth borrowers.
              </p>
            </button>
            
            <button
              onClick={() => setSelectedScenario('investor')}
              className={`p-6 rounded-lg border-2 transition text-left ${
                selectedScenario === 'investor'
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 bg-white hover:border-primary/50'
              }`}
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Real Estate Investor</h3>
              <p className="text-sm text-gray-600">
                Conventional uses 75% of rental income; Non-QM may use higher percentages or portfolio cash flow. Explore investor qualification differences.
              </p>
            </button>
          </div>
        </section>

        {/* Scenario Parameters (Optional - for context only) */}
        {selectedScenario && (
          <section className="mb-12">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Scenario Parameters (For Educational Context Only)</h3>
              <p className="text-sm text-gray-600 mb-4">
                These sliders help illustrate how different factors may be evaluated. They do not determine 
                qualification or eligibility.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Income Range: ${incomeRange.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="50000"
                    max="500000"
                    step="10000"
                    value={incomeRange}
                    onChange={(e) => setIncomeRange(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$50k</span>
                    <span>$500k</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Debt-to-Income Ratio: {dtiRange}%
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="60"
                    step="1"
                    value={dtiRange}
                    onChange={(e) => setDtiRange(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20%</span>
                    <span>60%</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Assets: ${assetRange.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="10000"
                    value={assetRange}
                    onChange={(e) => setAssetRange(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$50k</span>
                    <span>$2M</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Credit Score: {creditScoreRange}
                  </label>
                  <input
                    type="range"
                    min="580"
                    max="850"
                    step="10"
                    value={creditScoreRange}
                    onChange={(e) => setCreditScoreRange(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>580</span>
                    <span>850</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
                <p className="text-xs text-yellow-800">
                  <strong>Educational Note:</strong> These parameters are for illustrative purposes only. 
                  They help show how different factors may be considered, but do not represent actual 
                  qualification requirements or outcomes.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Comparison Output */}
        {scenarioData && (
          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-900">{scenarioData.title}</h3>
              <p className="text-blue-800 text-sm">{scenarioData.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Conventional Approach */}
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <h4 className="text-lg font-semibold text-blue-900">Conventional (QM) Approach</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Evaluation Method:</p>
                    <p className="text-sm text-gray-600">{scenarioData.conventional.method}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Typical Documentation:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {scenarioData.conventional.documentation.map((doc, i) => (
                        <li key={i}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Income/Qualification Calculation:</p>
                    <p className="text-sm text-gray-600 italic">{scenarioData.conventional.calculation}</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <p className="text-sm font-medium text-blue-900 mb-1">Key Considerations:</p>
                    <p className="text-xs text-blue-800">{scenarioData.conventional.considerations}</p>
                  </div>
                </div>
              </div>

              {/* Non-QM Approach */}
              <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <h4 className="text-lg font-semibold text-purple-900">Non-QM Approach</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Evaluation Method:</p>
                    <p className="text-sm text-gray-600">{scenarioData.nonqm.method}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Typical Documentation:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {scenarioData.nonqm.documentation.map((doc, i) => (
                        <li key={i}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Income/Qualification Calculation:</p>
                    <p className="text-sm text-gray-600 italic">{scenarioData.nonqm.calculation}</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <p className="text-sm font-medium text-purple-900 mb-1">Key Considerations:</p>
                    <p className="text-xs text-purple-800">{scenarioData.nonqm.considerations}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Educational Reminder:</strong> This comparison illustrates general differences in 
                approach. Actual requirements, documentation needs, and evaluation methods vary by lender, 
                loan program, and individual circumstances. This information does not indicate whether any 
                loan type would be available or appropriate for a specific situation.
              </p>
            </div>
          </section>
        )}

        {/* Key Differences Summary */}
        {scenarioData && (
          <section className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Key Conceptual Differences</h3>
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg">
              <ul className="list-disc list-inside text-indigo-800 space-y-2 text-sm">
                <li><strong>Documentation:</strong> Conventional loans typically require standardized documentation (W-2s, tax returns), while Non-QM loans may accept alternative documentation methods.</li>
                <li><strong>Income Calculation:</strong> Conventional loans use tax return income (after deductions), while Non-QM loans may use bank statement deposits or other alternative calculations.</li>
                <li><strong>Standardization:</strong> Conventional loans follow standardized guidelines, while Non-QM programs vary significantly by lender.</li>
                <li><strong>Flexibility:</strong> Non-QM loans may offer more flexibility in evaluation methods, but this comes with less predictability and typically higher costs.</li>
              </ul>
            </div>
          </section>
        )}

        {/* Tradeoffs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Tradeoffs: Flexibility vs Cost</h2>
          <p className="text-gray-700 mb-4">
            Non-QM loans can provide options when conventional loans do not fit, but they come with tradeoffs. Interest rates and fees are typically higher because Non-QM lenders take on more risk and cannot sell many of these loans to government-sponsored entities (Fannie Mae, Freddie Mac). Down payment requirements may also be higher—often 20–30% for some programs.
          </p>
          <p className="text-gray-700 mb-4">
            If you qualify for a conventional loan, it will usually be the more affordable choice. Explore conventional options first. Use this tool to understand when Non-QM might be relevant for your situation, then discuss both paths with a licensed mortgage professional. See{' '}
            <Link href="/mortgage/find-the-right-loan" className="text-primary hover:underline font-medium">Find the Right Loan</Link> for guidance on comparing loan types.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12" aria-label="Frequently asked questions about Non-QM qualification">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">What is a Non-QM loan?</h3>
              <p className="text-gray-700 text-sm">
                A Non-QM (Non-Qualified Mortgage) loan does not meet CFPB Qualified Mortgage standards. It offers alternative qualification methods—such as bank statement income or asset-based qualification—for borrowers who may not fit conventional guidelines. Rates and fees are typically higher.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Who typically uses Non-QM loans?</h3>
              <p className="text-gray-700 text-sm">
                Self-employed borrowers with significant tax deductions, those with higher DTI, retirees or high-net-worth individuals with substantial assets but limited taxable income, and real estate investors often explore Non-QM when conventional options are limited.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Does this tool determine if I qualify?</h3>
              <p className="text-gray-700 text-sm">
                No. This tool is for education only. It explains how qualification approaches may differ. Actual eligibility depends on your specific situation, the lender, and the program. Always consult with licensed mortgage professionals.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Are Non-QM loans riskier?</h3>
              <p className="text-gray-700 text-sm">
                Non-QM loans are designed with alternative documentation and evaluation methods. They can be appropriate when you have the ability to repay but your profile does not fit QM standards. They typically cost more. Work with reputable lenders and understand the terms before committing.
              </p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Educational Resources</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Explore these related guides and tools to deepen your understanding of qualification approaches:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Loan Guides</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/mortgage/non-qm-loan" className="text-primary hover:underline">
                      Non-QM Loan Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/mortgage/conventional-loan" className="text-primary hover:underline">
                      Conventional Loan Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline">
                      Self-Employed Borrower Scenarios
                    </Link>
                  </li>
                  <li>
                    <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline">
                      How DTI Affects Mortgage Approval
                    </Link>
                  </li>
                  <li>
                    <Link href="/mortgage/what-assets-count-for-mortgage-approval" className="text-primary hover:underline">
                      What Assets Count for Mortgage Approval
                    </Link>
                  </li>
                  <li>
                    <Link href="/mortgage/find-the-right-loan" className="text-primary hover:underline">
                      Find the Right Loan
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tools</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/tools/loan-qualification-comparison" className="text-primary hover:underline">
                      Loan Qualification Scenario Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/mortgage-calculator" className="text-primary hover:underline">
                      Mortgage Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/affordability-calculator" className="text-primary hover:underline">
                      Home Affordability Calculator
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaway */}
        <div className="mb-12 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            Conventional (QM) loans use standardized income documentation and DTI limits. Non-QM loans offer alternative approaches—bank statements, higher DTI, asset-based qualification—for borrowers who do not fit the traditional profile. Non-QM is typically more expensive. Use this tool to understand the conceptual differences, then consult a licensed mortgage professional to explore your options. See{' '}
            <Link href="/mortgage/non-qm-loan" className="text-teal-700 underline font-medium">Non-QM Loan Guide</Link>.
          </p>
        </div>

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-900">Continue Your Learning</h3>
          <p className="text-blue-700 mb-4">
            Understanding how qualification approaches differ is one part of exploring mortgage options. 
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


