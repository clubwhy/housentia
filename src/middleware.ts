import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateSession } from '@/lib/auth';

/**
 * Middleware to protect routes and enforce authentication
 */
/** Legacy spam URL patterns — return 410 Gone so search engines drop them from index. */
const GONE_PATH_PREFIXES = ['/casinoet', '/casinonet', '/virtuals'];

/** Query params that indicate spam (e.g. /blog?casino=xxx) — block with 410. */
const SPAM_QUERY_KEYS = ['casino', 'casinoet', 'gambling', 'bet', 'poker', 'slots', 'virtuals'];

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Block spam paths
  if (GONE_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  // Block query spam (e.g. /blog?casino=xxx)
  if (searchParams.size > 0 && SPAM_QUERY_KEYS.some((key) => searchParams.has(key))) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  // Protected API routes
  const protectedApiPaths = [
    '/api/profile',
    '/api/change-password',
    '/api/logout',
  ];
  
  // Protected page routes
  const protectedPagePaths = [
    '/profile',
  ];
  
  const isProtectedApi = protectedApiPaths.some(path => pathname.startsWith(path));
  const isProtectedPage = protectedPagePaths.some(path => pathname.startsWith(path));
  
  if (isProtectedApi || isProtectedPage) {
    // For API routes, we need to check session in the route handler
    // because middleware can't access cookies() in Next.js 15
    // So we'll handle auth in each route handler
    if (isProtectedPage) {
      // For pages, redirect to login if not authenticated
      // Note: Actual session check happens in the page component
      return NextResponse.next();
    }
  }
  
  // Create response
  const response = NextResponse.next();
  
  // Force HTTPS only in production AND not on localhost
  const isProduction = process.env.NODE_ENV === 'production';
  const isLocalhost = request.nextUrl.hostname === 'localhost' || 
                      request.nextUrl.hostname === '127.0.0.1' ||
                      request.nextUrl.hostname.startsWith('192.168.');
  
  // Never force HTTPS on localhost (development)
  if (isProduction && !isLocalhost) {
    // Check if request is HTTP (not HTTPS)
    const protocol = request.headers.get('x-forwarded-proto') || 
                     (request.nextUrl.protocol === 'https:' ? 'https' : 'http');
    
    if (protocol === 'http') {
      const httpsUrl = new URL(request.url);
      httpsUrl.protocol = 'https:';
      return NextResponse.redirect(httpsUrl, 301);
    }
    
    // Add HSTS header only in production and not on localhost
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }
  
  // Add security headers for all responses
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};

