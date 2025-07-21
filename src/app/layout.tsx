import '@fontsource/inter/index.css'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Housentia - Smarter Mortgage & Home Insights',
  description: 'Compare mortgage rates, explore home ideas, and save smarter. Housentia is your all-in-one home platform.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Use Next.js usePathname to conditionally set background
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isRefiPage = pathname.startsWith('/mortgage/refinance-cashout');
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2FTZDTF1BN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2FTZDTF1BN');
          `}
        </Script>
      </head>
      <body className={isRefiPage ? 'min-h-screen flex flex-col bg-white' : 'min-h-screen flex flex-col bg-gray-100'}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}