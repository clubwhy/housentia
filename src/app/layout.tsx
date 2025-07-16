import '@fontsource/inter/index.css'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Housentia - Smarter Mortgage & Home Insights',
  description: 'Compare mortgage rates, explore home ideas, and save smarter. Housentia is your all-in-one home platform.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Use Next.js usePathname to conditionally set background
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isRefiPage = pathname.startsWith('/mortgage/refinance-cashout');
  return (
    <html lang="en">
      <body className={isRefiPage ? 'min-h-screen flex flex-col bg-white' : 'min-h-screen flex flex-col bg-gray-100'}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}