import Link from 'next/link'
import BlogFeed from '@/components/BlogFeed';
import MortgageRateChart from '@/components/MortgageRateChart';

export const dynamic = "force-dynamic";

export default async function Home() {
  // Products fetching removed - replaced with mortgage-focused content

  // DIY kits fetching removed - replaced with mortgage content

  return (
    <main className="bg-secondary font-sans">
      {/* Modern Minimal Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#7c3aed] relative overflow-hidden">
        {/* Animated Silhouette Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg 
            width="1200" 
            height="800" 
            viewBox="0 0 1200 800" 
            className="w-full max-w-5xl h-auto"
            style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.15))' }}
          >
            {/* Large Building - Multi-story house (moved to left) - Appears first */}
            <g fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 animate-house-fade">
              {/* Building base - Much larger, positioned left */}
              <rect x="100" y="300" width="600" height="400" />
              {/* Roof */}
              <polygon points="100,300 400,100 700,300" />
              {/* Second floor division */}
              <line x1="100" y1="500" x2="700" y2="500" />
              {/* Main door (larger) */}
              <rect x="320" y="580" width="160" height="120" />
              {/* First floor windows (larger) */}
              <rect x="160" y="540" width="100" height="100" />
              <rect x="540" y="540" width="100" height="100" />
              {/* First floor window crosses */}
              <line x1="210" y1="590" x2="250" y2="590" />
              <line x1="230" y1="540" x2="230" y2="640" />
              <line x1="590" y1="590" x2="630" y2="590" />
              <line x1="610" y1="540" x2="610" y2="640" />
              {/* Second floor windows (larger) */}
              <rect x="160" y="360" width="100" height="100" />
              <rect x="320" y="360" width="100" height="100" />
              <rect x="480" y="360" width="100" height="100" />
              {/* Second floor window crosses */}
              <line x1="210" y1="410" x2="250" y2="410" />
              <line x1="230" y1="360" x2="230" y2="460" />
              <line x1="370" y1="410" x2="410" y2="410" />
              <line x1="390" y1="360" x2="390" y2="460" />
              <line x1="530" y1="410" x2="570" y2="410" />
              <line x1="550" y1="360" x2="550" y2="460" />
            </g>
            
            {/* Sun with smile - Top right, appears second */}
            <g fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 animate-sun-fade">
              {/* Sun circle */}
              <circle cx="1000" cy="150" r="80" />
              {/* Sun rays */}
              <line x1="1000" y1="50" x2="1000" y2="30" />
              <line x1="1000" y1="250" x2="1000" y2="270" />
              <line x1="900" y1="150" x2="880" y2="150" />
              <line x1="1100" y1="150" x2="1120" y2="150" />
              <line x1="940" y1="80" x2="925" y2="65" />
              <line x1="1060" y1="80" x2="1075" y2="65" />
              <line x1="940" y1="220" x2="925" y2="235" />
              <line x1="1060" y1="220" x2="1075" y2="235" />
              {/* Smiling face */}
              <ellipse cx="980" cy="140" rx="8" ry="12" />
              <ellipse cx="1020" cy="140" rx="8" ry="12" />
              <path d="M 970 170 Q 1000 185 1030 170" />
            </g>
            
            {/* Family Silhouettes - Together on the right, facing left (towards house) - Appears last */}
            <g fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 animate-family-fade">
              {/* Child (leftmost, smallest) */}
              <circle cx="850" cy="620" r="30" />
              <line x1="850" y1="650" x2="850" y2="720" />
              <line x1="850" y1="680" x2="820" y2="660" />
              <line x1="850" y1="680" x2="880" y2="660" />
              <line x1="850" y1="720" x2="820" y2="750" />
              <line x1="850" y1="720" x2="880" y2="750" />
              
              {/* Parent 1 (center, taller - mother/father) */}
              <circle cx="950" cy="580" r="45" />
              <line x1="950" y1="625" x2="950" y2="720" />
              <line x1="950" y1="670" x2="915" y2="645" />
              <line x1="950" y1="670" x2="985" y2="645" />
              <line x1="950" y1="720" x2="915" y2="750" />
              <line x1="950" y1="720" x2="985" y2="750" />
              
              {/* Parent 2 (rightmost, tallest - father/mother) */}
              <circle cx="1050" cy="560" r="50" />
              <line x1="1050" y1="610" x2="1050" y2="720" />
              <line x1="1050" y1="660" x2="1010" y2="635" />
              <line x1="1050" y1="660" x2="1090" y2="635" />
              <line x1="1050" y1="720" x2="1010" y2="750" />
              <line x1="1050" y1="720" x2="1090" y2="750" />
            </g>
          </svg>
        </div>
        
        <div className="w-full max-w-4xl px-4 mx-auto flex flex-col items-center text-center mb-4 relative z-10">
          <div className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Understand Before You Decide.
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 mt-6 max-w-2xl mx-auto px-4">
            Mortgage guides, calculators, and comparisons — built to help you understand your options, not sell you a loan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="/mortgage"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white text-base font-semibold rounded-md hover:bg-accent-hover transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Explore Mortgage Guides
            </a>
            <a
              href="/tools"
              className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary text-base font-semibold rounded-md hover:bg-primary hover:text-white transition bg-transparent"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              Explore Mortgage Tools
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
                title: 'Conventional Loans',
                description: 'The most common type of mortgage in the U.S. Non-government-backed loans with flexible terms and PMI that can be removed at 80% LTV.',
                href: '/mortgage/conventional-loan',
                icon: '🏡'
              },
              {
                title: 'Non-QM Loan Guide',
                description: 'Alternative loan structures for borrowers whose financial profiles do not fit traditional Qualified Mortgage guidelines.',
                href: '/mortgage/non-qm-loan',
                icon: '📋'
              },
              {
                title: 'FHA Loans',
                description: 'Loans backed by the Federal Housing Administration. Often used by first-time buyers and those with lower credit scores.',
                href: '/mortgage/fha-loan',
                icon: '🔑'
              },
              {
                title: 'VA Loans',
                description: 'Government-backed loans for veterans and service members. Commonly features low or no down payment options.',
                href: '/mortgage/va-loan',
                icon: '🏠'
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
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-center">Smart Ways to Invest in Your Home</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn how homeowners often use financing, incentives, and home equity to improve, upgrade, or power their homes more efficiently.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between relative border-2 border-primary">
              {/* Compliance: Removed "Top Rated" badge - site does not make recommendations */}
              <h3 className="text-lg font-semibold mb-2">Solar Panel Guide</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Learn how solar panels work, what incentives may be available, and how homeowners often evaluate long-term energy savings.</p>
              <a href="/upgrade/solar-guide" className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">Explore Solar Basics</a>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between relative">
              {/* Compliance: Removed "Top Rated" badge - site does not make recommendations */}
              <h3 className="text-lg font-semibold mb-2">DIY Home Projects</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Practical home improvement ideas and DIY projects that homeowners often consider after purchasing a home.</p>
              <a href="/diy-style/home-projects" className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">Explore DIY Projects</a>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between relative">
              {/* Compliance: Removed "Top Rated" badge - site does not make recommendations */}
              <h3 className="text-lg font-semibold mb-2">Garden & Outdoor Ideas</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Outdoor upgrades and landscaping ideas that may improve comfort, usability, and long-term property enjoyment.</p>
              <a href="/diy-style/garden-ideas" className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">Explore Outdoor Ideas</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <div className="flex flex-col items-center gap-2">
              <a href="/tools/solar-savings-estimator" className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg font-semibold hover:bg-accent-hover transition">Estimate Potential Solar Savings</a>
              <span className="text-gray-500 text-xs text-center">Rebates & government incentives may be available<br />(Estimates for informational purposes only)</span>
            </div>
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
          
          {/* Mortgage Rate Trend Chart */}
          <MortgageRateChart />

          {/* CTAs */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <a 
              href="/mortgage/todays-mortgage-rates" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent-hover transition"
            >
              View Today's Mortgage Rates
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/tools/mortgage-calculator" 
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition bg-transparent"
            >
              See How Rates Affect Monthly Payments
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Smart Home Financing Tools */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center">Explore Mortgage Tools and Information</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            {["Mortgage Calculator","Refinance Analyzer","Solar Savings Calculator","Conventional Loan Guide"].map((tool, i) => (
              <div key={i} className="bg-secondary rounded-xl p-6 flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2">
                  {i === 0 && "Mortgage Calculator"}
                  {i === 1 && "Refinance Analyzer"}
                  {i === 2 && "Solar Savings Calculator"}
                  {i === 3 && "Conventional Loan Guide"}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {i === 0 && "Get estimates for monthly mortgage payments. For educational purposes only."}
                  {i === 1 && "Explore refinancing scenarios and potential savings. Estimates only."}
                  {i === 2 && "Estimate potential savings from solar over 20 years. For informational purposes."}
                  {i === 3 && "Learn about conventional mortgages, the most common U.S. loan type."}
                </p>
                <a href={i === 0 ? "/tools/mortgage-calculator" : i === 1 ? "/tools/refinance-analyzer" : i === 2 ? "/tools/solar-savings-estimator" : i === 3 ? "/mortgage/conventional-loan" : "#"} className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">Explore</a>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="/mortgage" className="px-8 py-3 bg-primary text-white text-sm font-medium rounded-xl text-lg font-semibold hover:bg-accent-hover transition">Explore Mortgage Guides</a>
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