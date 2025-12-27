import Link from 'next/link'
import BlogFeed from '@/components/BlogFeed';

export const dynamic = "force-dynamic";

export default async function Home() {
  // Products fetching removed - replaced with mortgage-focused content

  // DIY kits fetching removed - replaced with mortgage content

  return (
    <main className="bg-secondary font-sans">
      {/* Modern Minimal Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#7c3aed]">
        <div className="w-full max-w-4xl px-4 mx-auto flex flex-col items-center text-center mb-4">
          <div className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Turn Your House
          </div>
          <div className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            into the Home You Love
          </div>
          <div className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 leading-tight">
            &
          </div>
          <div className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Learn How to Afford It Too.
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 mt-6 max-w-2xl mx-auto px-4">
            Discover smart home upgrades, DIY tips, and financing tools to help you build a better living space — and save money along the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="/diy-style"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white text-base font-semibold rounded-md hover:bg-accent-hover transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4.5V15" /></svg>
              Explore DIY & Upgrades
            </a>
            <a
              href="/tools"
              className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary text-base font-semibold rounded-md hover:bg-primary hover:text-white transition bg-transparent"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Explore Financing Tools
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Mortgage Loan Types Guide */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center">Explore Mortgage Loan Types</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn about different mortgage options available to homeowners. Each loan type has unique characteristics and eligibility requirements.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            {[
              {
                title: 'VA Loans',
                description: 'Government-backed loans for veterans and service members. Commonly features low or no down payment options.',
                href: '/mortgage/va-loan',
                icon: '🏠'
              },
              {
                title: 'FHA Loans',
                description: 'Loans backed by the Federal Housing Administration. Often used by first-time buyers and those with lower credit scores.',
                href: '/mortgage/fha-loan',
                icon: '🔑'
              },
              {
                title: 'Refinance',
                description: 'Explore options to potentially lower your rate, change your term, or access home equity. Learn about refinancing considerations.',
                href: '/mortgage/refinance',
                icon: '💼'
              },
              {
                title: 'HELOC',
                description: 'Home Equity Line of Credit: a type of borrowing that uses your home\'s equity. Some borrowers use HELOCs for projects or expenses.',
                href: '/mortgage/heloc',
                icon: '📊'
              },
              {
                title: 'Reverse Mortgage',
                description: 'A loan type that converts home equity into cash. Available to homeowners age 62 and older.',
                href: '/mortgage/reverse',
                icon: '🔄'
              },
              {
                title: 'First-Time Home Buyer',
                description: 'Educational guide for first-time home buyers covering loan programs, down payment assistance, and the home buying process.',
                href: '/mortgage/first-time-home-buyer',
                icon: '✨'
              }
            ].map((loan, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between border border-blue-100">
                <div>
                  <div className="text-3xl mb-3">{loan.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{loan.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{loan.description}</p>
                </div>
                <a href={loan.href} className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="/mortgage" className="bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-accent-hover transition">View All Mortgage Guides</a>
            <a href="/mortgage/todays-mortgage-rates" className="bg-accent text-white font-semibold px-6 py-2 rounded-md hover:bg-accent-hover transition">Today's Mortgage Rates</a>
            <a href="/mortgage/find-the-right-loan" className="border-2 border-primary text-primary font-semibold px-6 py-2 rounded-md hover:bg-primary hover:text-white transition">Explore Your Options Further</a>
          </div>
        </div>
      </section>

      {/* Section 2: Solar & Home Upgrades */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center">Power Up Your Home the Smart Way</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            {["Solar Panel Guide","DIY Home Projects","Garden & Outdoor Ideas"].map((title, i) => (
              <div key={i} className={`bg-white rounded-xl shadow p-6 flex flex-col justify-between relative ${i === 0 ? 'border-2 border-primary' : ''}`}>
                {/* Compliance: Removed "Top Rated" badge - site does not make recommendations */}
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">Quick intro or tip about {title === 'DIY Home Projects' ? 'diy home projects' : title === 'Garden & Outdoor Ideas' ? 'garden & outdoor ideas' : title.toLowerCase()}.</p>
                <a href={i === 0 ? "/upgrade/solar-guide" : i === 1 ? "/diy-style/home-projects" : i === 2 ? "/diy-style/garden-ideas" : "#"} className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">Learn More</a>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <a href="/tools/solar-savings-estimator" className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg font-semibold hover:bg-accent-hover transition">Get a Solar Savings Estimate</a>
            <span className="text-gray-500 text-sm">Rebates & government incentives may be available</span>
          </div>
        </div>
      </section>

      {/* Section 3: Today's Mortgage Rates (Simplified) */}
      <section className="py-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-center">Current Mortgage Rate Information</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            View current mortgage rate information for informational purposes. Actual rates may vary based on your credit score, loan amount, and other factors.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 mb-4">
                <strong>Note:</strong> Rates shown are for informational purposes only and do not constitute an offer or commitment from any lender.
              </p>
              <a 
                href="/mortgage/todays-mortgage-rates" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent-hover transition"
              >
                View Today's Mortgage Rates
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Smart Home Financing Tools */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center">Explore Mortgage Tools and Information</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            {["Mortgage Calculator","Refinance Analyzer","Remodeling Cost Estimator","Explore Loan Options"].map((tool, i) => (
              <div key={i} className="bg-secondary rounded-xl p-6 flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2">
                  {i === 0 && "Mortgage Calculator"}
                  {i === 1 && "Refinance Analyzer"}
                  {i === 2 && "Solar Savings Calculator"}
                  {i === 3 && "Explore Loan Options"}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {i === 0 && "Get estimates for monthly mortgage payments. For educational purposes only."}
                  {i === 1 && "Explore refinancing scenarios and potential savings. Estimates only."}
                  {i === 2 && "Estimate potential savings from solar over 20 years. For informational purposes."}
                  {i === 3 && "Learn about different loan types and their characteristics."}
                </p>
                <a href={i === 0 ? "/tools/mortgage-calculator" : i === 1 ? "/tools/refinance-analyzer" : i === 2 ? "/tools/solar-savings-estimator" : i === 3 ? "/mortgage/find-the-right-loan" : "#"} className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">Explore</a>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="/mortgage/find-the-right-loan" className="px-8 py-3 bg-primary text-white text-sm font-medium rounded-xl text-lg font-semibold hover:bg-accent-hover transition">Explore Your Options Further</a>
          </div>
        </div>
      </section>

      {/* Section 5: Blog Highlights */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">Latest Tips from the Housentia Blog</h2>
            <p className="text-gray-600 mb-6">Discover smart home upgrades, DIY tips, and financing insights</p>

          </div>
          <BlogFeed />
          <div className="text-center mb-8">
          <a 
              href="/blog" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors mb-6"
            >
              View All Blog Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:flex md:items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exploring Home Financing Options?</h2>
            <p className="text-gray-700 mb-6">Learn about different loan types — mortgage, HELOC, or cash-out refinancing — and connect with licensed professionals who can help.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="/mortgage/find-the-right-loan" className="px-8 py-3 bg-primary text-white text-base font-semibold rounded-md hover:bg-accent-hover transition">Explore Your Options Further</a>
              <a href="/mortgage" className="px-8 py-3 border-2 border-primary text-primary text-base font-semibold rounded-md hover:bg-primary hover:text-white transition bg-transparent">Explore Mortgage Guides</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/house-illustration.png" alt="Finance" className="max-w-xs" />
          </div>
        </div>
      </section>
    </main>
  )
}