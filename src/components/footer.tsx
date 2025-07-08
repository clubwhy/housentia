import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-slate-300 py-10 px-6 mt-0 border-t-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-1">
              <li><Link href="/privacy-center" className="hover:text-white">Privacy Center</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="/opt-out" className="hover:text-white">Opt-Out</Link></li>
            </ul>
          </div>
          {/* Main Menu */}
          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-1">
              <li><Link href="/diy-style" className="hover:text-white">DIY & Style</Link></li>
              <li><Link href="/upgrade" className="hover:text-white">Upgrade</Link></li>
              <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link href="/tools" className="hover:text-white">Tools</Link></li>
              <li><Link href="/mortgage" className="hover:text-white">Mortgage</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <ul className="flex space-x-4 mt-1">
              <li>
                <a href="/blog" aria-label="Blog" className="hover:text-white">
                  <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l7 7v9a2 2 0 01-2 2z" /></svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-white">
                  <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-white">
                  <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-white">
                  <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="4" /><path d="M10 9l5 3-5 3V9z" /></svg>
                </a>
              </li>
            </ul>
          </div>
          {/* Copyright */}
          <div className="md:col-span-1 flex flex-col justify-end md:items-end items-start">
            <div className="text-slate-500 mt-6 md:mt-0">&copy; {new Date().getFullYear()} Housentia. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}  