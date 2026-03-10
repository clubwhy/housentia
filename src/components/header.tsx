"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Compliance Note: Navigation structure updated to reflect educational/informational positioning
// Avoids terms like "Apply", "Get Approved", "Best Loan", "Recommended"
const navMenus = [
  {
    label: 'Mortgage Guides',
    href: '/mortgage',
    submenu: [
      { label: 'Mortgage Education Guides', href: '/mortgage-guides' },
      { label: "Today's Mortgage Rates", href: '/mortgage/todays-mortgage-rates' },
      { label: 'Conventional Loan Guide', href: '/mortgage/conventional-loan' },
      { label: 'FHA Loan Guide', href: '/mortgage/fha-loan' },
      { label: 'VA Loan Guide', href: '/mortgage/va-loan' },
      { label: 'Non-QM Loan Guide', href: '/mortgage/non-qm-loan' },
      { label: 'Self-Employed Borrower Scenarios', href: '/mortgage/self-employed-borrower' },
      { label: 'Refinance Overview', href: '/mortgage/refinance-cashout' },
      { label: 'First-Time Home Buyer Guide', href: '/mortgage/first-time-home-buyer' },
      { label: 'HELOC Overview', href: '/mortgage/heloc' },
      { label: 'Reverse Mortgage Guide', href: '/mortgage/reverse' },
    ],
  },
  {
    label: 'Mortgage Tools',
    href: '/mortgage-tools',
    submenu: [
      { label: 'Mortgage Calculators Hub', href: '/mortgage-tools' },
      { label: 'Mortgage Glossary', href: '/mortgage-glossary' },
      { label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' },
      { label: 'Refinance Analyzer', href: '/tools/refinance-analyzer' },
      { label: 'Affordability Calculator', href: '/tools/affordability-calculator' },
      { label: 'Loan Qualification Comparison', href: '/tools/loan-qualification-comparison' },
      { label: 'Non-QM Scenario Comparison', href: '/tools/non-qm-scenario-comparison' },
      { label: 'Solar Savings Estimator', href: '/tools/solar-savings-estimator' },
    ],
  },
  {
    label: 'Compare Options',
    href: '/mortgage',
    submenu: [
      { label: 'Conventional vs FHA', href: '/mortgage/conventional-loan' },
      { label: 'Rate Information', href: '/mortgage/todays-mortgage-rates' },
    ],
  },
  {
    label: 'Partner Professionals',
    href: '/mortgage/prequalify',
    submenu: [
      { label: 'Connect with Licensed Professionals', href: '/mortgage/prequalify' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    submenu: [
      { label: 'Smart Financing Tips', href: '/blog?label=Smart%20Financing%20Tips' },
      { label: 'Home Maintenance Guides', href: '/blog?label=Home%20Maintenance%20Guides' },
      { label: 'Interior & Style Trends', href: '/blog?label=Interior%20%26%20Style%20Trends' },
      { label: 'DIY & Gardening Tips', href: '/blog?label=DIY%20%26%20Gardening%20Tips' },
      { label: 'News & Regulations', href: '/blog?label=News%20%26%20Regulations' },
    ],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status from server
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/check', {
          credentials: 'include', // Important: include cookies
        });
        const data = await res.json();
        setIsLoggedIn(data.authenticated === true);
      } catch (err) {
        setIsLoggedIn(false);
      }
    }
    checkAuth();
    
    // Check auth on page focus (in case session expired)
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', checkAuth);
      return () => window.removeEventListener('focus', checkAuth);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important: include cookies
      });
    } catch (err) {
      console.error('Logout error:', err);
    }
    setIsLoggedIn(false);
    router.push('/');
  };

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
        {/* Left: Logo with Home Icon */}
        <div className="flex-1 flex items-center">
          <a href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-label="Home">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Housentia</span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center space-x-1">
          {navMenus.map((menu) =>
            menu.submenu ? (
              <div
                key={menu.label}
                className="relative inline-block whitespace-nowrap"
                onMouseEnter={() => handleMouseEnter(menu.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary focus:outline-none flex items-center transition whitespace-nowrap"
                  aria-haspopup="true"
                  aria-expanded={openMenu === menu.label}
                  onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                  type="button"
                >
                  {menu.label}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 mt-2 min-w-[360px] max-w-[420px] bg-white border border-gray-200 rounded-lg shadow-lg z-20 transition-opacity duration-150 ${openMenu === menu.label ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  onClick={() => setOpenMenu(null)}
                  onMouseEnter={() => handleMouseEnter(menu.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {menu.submenu.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-secondary hover:text-primary first:rounded-t-lg last:rounded-b-lg transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={menu.label} href={menu.href} className="px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary transition whitespace-nowrap">
                {menu.label}
              </a>
            )
          )}
        </nav>
        
        {/* Right: Auth Buttons & Mobile Menu Button */}
        <div className="flex-1 flex justify-end items-center space-x-2">
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-2">
            {isLoggedIn ? (
              <>
                <a href="/profile" className="border border-primary text-primary font-semibold px-4 py-2 rounded-md hover:bg-primary hover:text-white transition text-sm whitespace-nowrap bg-white">My Profile</a>
                <button onClick={handleLogout} className="bg-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-accent-hover transition text-sm shadow whitespace-nowrap">Logout</button>
              </>
            ) : (
              <>
                <a href="/signup" className="bg-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-accent-hover transition text-sm shadow whitespace-nowrap">Sign up</a>
                <a href="/login" className="border border-primary text-primary font-semibold px-4 py-2 rounded-md hover:bg-primary hover:text-white transition text-sm whitespace-nowrap bg-white">Log in</a>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navMenus.map((menu) => (
              <div key={menu.label}>
                <button
                  className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md flex items-center justify-between"
                  onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                  type="button"
                >
                  {menu.label}
                  {menu.submenu && (
                    <svg className={`w-4 h-4 transition-transform ${openMenu === menu.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {menu.submenu && openMenu === menu.label && (
                  <div className="pl-4 space-y-1">
                    {menu.submenu.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 pb-2 border-t border-gray-200">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <a href="/profile" className="block w-full text-center border border-primary text-primary font-semibold px-4 py-2 rounded-md hover:bg-primary hover:text-white transition text-sm bg-white">My Profile</a>
                  <button onClick={handleLogout} className="block w-full bg-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-accent-hover transition text-sm shadow">Logout</button>
                </div>
              ) : (
                <div className="space-y-2">
                  <a href="/signup" className="block w-full text-center bg-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-accent-hover transition text-sm shadow">Sign up</a>
                  <a href="/login" className="block w-full text-center border border-primary text-primary font-semibold px-4 py-2 rounded-md hover:bg-primary hover:text-white transition text-sm bg-white">Log in</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}  