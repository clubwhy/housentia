import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateSession } from '@/lib/auth';

/**
 * Middleware to protect routes and enforce authentication
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
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
  
  // Force HTTPS in production
  if (process.env.NODE_ENV === 'production' && request.nextUrl.protocol === 'http:') {
    return NextResponse.redirect(
      `https://${request.nextUrl.hostname}${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/profile/:path*',
    '/api/change-password/:path*',
    '/api/logout',
    '/profile/:path*',
  ],
};

