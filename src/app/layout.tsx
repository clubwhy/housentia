import '@fontsource/inter/index.css'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SiteStructuredData from '@/components/SiteStructuredData'
import GoogleAnalyticsPageView from '@/components/GoogleAnalyticsPageView'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Housentia - Smarter Mortgage & Home Insights',
  description: 'Compare mortgage rates, explore home ideas, and save smarter. Housentia is your all-in-one home platform.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT
  // Use Next.js usePathname to conditionally set background
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isRefiPage = pathname.startsWith('/mortgage/refinance-cashout');
  return (
    <html lang="en">
      <head>
        {adsenseClient && (
          <Script
            id="google-adsense"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            strategy="beforeInteractive"
            async
            crossOrigin="anonymous"
          />
        )}
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
        <SiteStructuredData />
        <GoogleAnalyticsPageView />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}