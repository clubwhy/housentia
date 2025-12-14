import crypto from 'crypto';
import { cookies } from 'next/headers';

/**
 * Generate a CSRF token and store it in httpOnly cookie
 */
export async function generateCSRFToken(): Promise<string> {
  const token = crypto.randomBytes(32).toString('hex');
  const cookieStore = await cookies();
  cookieStore.set('csrf-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600, // 1 hour
    path: '/',
  });
  return token;
}

/**
 * Validate CSRF token from request against cookie
 */
export async function validateCSRFToken(token: string): Promise<boolean> {
  if (!token || typeof token !== 'string' || token.length !== 64) {
    return false;
  }
  
  const cookieStore = await cookies();
  const storedToken = cookieStore.get('csrf-token')?.value;
  
  if (!storedToken || storedToken.length !== 64) {
    return false;
  }
  
  // Use constant-time comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(token, 'utf8'),
      Buffer.from(storedToken, 'utf8')
    );
  } catch {
    return false;
  }
}

/**
 * Get CSRF token from cookie (for client-side requests)
 */
export async function getCSRFToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get('csrf-token')?.value || null;
}

