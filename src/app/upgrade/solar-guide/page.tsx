"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight, HiLightBulb, HiCurrencyDollar, HiBuildingOffice2, HiCheckCircle } from 'react-icons/hi2';

export default function SolarGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f9fc] border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sans mb-2 md:mb-0">2025 Solar Installation Guide</h1>
          <nav className="flex items-center text-xs text-gray-500 gap-1 md:self-end md:mb-1">
            <Link href="/" className="hover:text-primary flex items-center gap-1">
              <HiHome className="inline-block w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-gray-400" />
            <Link href="/upgrade" className="hover:text-primary">Upgrade</Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-gray-400" />
            <span className="text-gray-700 font-semibold">Solar Guide</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Top Providers, Incentives, and Installation Tips</h2>
        <p className="text-center text-gray-600 mb-10">Thinking about going solar? This guide covers what to know before you install, how to maximize incentives, and which companies are leading the way in 2025.</p>

        {/* Section 1: Solar Installation Tips */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2">What to Know Before Installing Solar at Home</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Check your <span className="font-semibold">roof condition</span> (age, angle, shade)</li>
            <li>Ask about <span className="font-semibold">net metering</span> in your area</li>
            <li>Research <span className="font-semibold">local permit timelines</span></li>
            <li>Decide whether to <span className="font-semibold">lease, buy, or use a PPA</span></li>
            <li>Choose between <span className="font-semibold">microinverters</span> and <span className="font-semibold">string inverters</span></li>
          </ul>
          <div className="bg-[#f9fafb] border-l-4 border-yellow-300 p-4 rounded text-sm text-gray-700">
            <span className="font-semibold">Tip:</span> A quick roof inspection and a call to your utility can save you time and money!
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Section 2: Incentives */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2">Government Rebates and Tax Credits You Should Know</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li><span className="font-semibold">Federal Solar Tax Credit (ITC):</span> 30% off your system cost in 2025 (may expire after 2032)</li>
            <li><span className="font-semibold">Average savings:</span> $6,000–$9,000 for most homes</li>
            <li><span className="font-semibold">State programs:</span> e.g., California SGIP, New York-SUN, Massachusetts SMART</li>
            <li>Some utilities offer <span className="font-semibold">extra rebates</span> for battery storage</li>
          </ul>

          {/* Custom Eligibility and Program Links */}
          <div className="mt-4 space-y-3">
            <div className="font-semibold text-gray-800">Federal Solar Tax Credit (ITC): 30% off your system cost in 2025 (available through 2032+)</div>
            <div className="flex items-center gap-2 text-[16px]">
              <span className="font-semibold">➤ Check My Eligibility:</span>
              <a href="https://www.ecowatch.com/solar/ev-appliance-solar-tax-credit-calculator" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">EcoWatch Solar Tax Credit Calculator</a>
            </div>
            <div className="font-semibold mt-2 text-gray-800">State Programs:</div>
            <div className="flex items-center gap-2 text-[16px]">
              <span>California SGIP (battery rebates) via DSIRE →</span>
              <a href="https://programs.dsireusa.org/system/program/detail/552" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">View SGIP Incentives</a>
            </div>
            <div className="flex items-center gap-2 text-[16px]">
              <span>Federal Guidelines and instructions →</span>
              <a href="https://ttlc.intuit.com/turbotax-support/en-us/help-article/tax-credits-deductions/whats-solar-energy-tax-credit/L1kBuTx7a_US_en_US" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">TurboTax Guide to Solar Tax Credit</a>
            </div>
            <div className="bg-[#f9fafb] border-l-4 border-green-300 p-4 rounded text-sm text-gray-700 mt-4">
              <span className="font-semibold">Note:</span> Incentives change often—check your state's energy office or DSIRE for the latest info.
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Section 3: Top 5 Solar Companies */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2">Industry Leaders in Residential Solar</h3>
          <ul className="space-y-6">
            <li>
              <span className="font-semibold">Sunrun</span> – Flexible financing, 25-year warranty, best for first-time solar buyers
              <div className="ml-2 text-sm text-gray-600">
                <a href="https://www.sunrun.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sunrun.com</a> |
                <span className="ml-1">☎ 1-855-478-6786</span> |
                <a href="mailto:customerservice@sunrun.com" className="text-blue-600 hover:underline ml-1">customerservice@sunrun.com</a>
              </div>
            </li>
            <li>
              <span className="font-semibold">Tesla Solar</span> – Sleek panels, Powerwall battery, best for tech-savvy & smart home users
              <div className="ml-2 text-sm text-gray-600">
                <a href="https://www.tesla.com/energy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tesla.com/energy</a> |
                <span className="ml-1">☎ 1-877-798-3752</span> |
                <a href="mailto:energycustomersupport@tesla.com" className="text-blue-600 hover:underline ml-1">energycustomersupport@tesla.com</a>
              </div>
            </li>
            <li>
              <span className="font-semibold">ADT Solar</span> – Strong monitoring, nationwide service, best for reliability
              <div className="ml-2 text-sm text-gray-600">
                <a href="https://www.adtsolar.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">adtsolar.com</a> |
                <span className="ml-1">☎ 1-833-409-1007</span> |
                <a href="mailto:info@adtsolar.com" className="text-blue-600 hover:underline ml-1">info@adtsolar.com</a>
              </div>
            </li>
            <li>
              <span className="font-semibold">SunPower</span> – High-efficiency panels, premium warranty, best for premium homes
              <div className="ml-2 text-sm text-gray-600">
                <a href="https://us.sunpower.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">us.sunpower.com</a> |
                <span className="ml-1">☎ 1-800-786-7693</span> |
                <a href="mailto:customercare@sunpower.com" className="text-blue-600 hover:underline ml-1">customercare@sunpower.com</a>
              </div>
            </li>
            <li>
              <span className="font-semibold">Momentum Solar</span> – Personalized service, good for budget-conscious homeowners
              <div className="ml-2 text-sm text-gray-600">
                <a href="https://www.momentumsolar.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">momentumsolar.com</a> |
                <span className="ml-1">☎ 1-888-666-3588</span> |
                <a href="mailto:info@momentumsolar.com" className="text-blue-600 hover:underline ml-1">info@momentumsolar.com</a>
              </div>
            </li>
          </ul>
        </section>

        {/* Summary Callout */}
        <div className="mt-12 flex justify-center">
          <div className="bg-[#f5f9fc] border border-blue-200 rounded-lg px-6 py-5 text-base text-gray-700 font-medium shadow-sm flex items-center gap-3 max-w-2xl">
            <HiCheckCircle className="w-7 h-7 text-green-500 flex-shrink-0" />
            <span>Solar is a long-term investment. Choosing the right system, company, and incentive plan can save you thousands and help power your home sustainably for decades.</span>
          </div>
        </div>
      </main>
    </div>
  );
} 