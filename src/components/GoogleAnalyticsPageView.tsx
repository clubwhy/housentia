'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const GA_MEASUREMENT_ID = 'G-2FTZDTF1BN';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends page_view to GA4 on client-side route changes (Next.js Link navigation).
 * Initial page load is already tracked by gtag config in layout; this avoids double-counting.
 */
export default function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const isInitial = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;

    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    window.gtag('event', 'page_view', {
      page_path: pathname || window.location.pathname,
      page_title: typeof document !== 'undefined' ? document.title : '',
    });
  }, [pathname]);

  return null;
}
