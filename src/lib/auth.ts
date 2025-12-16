import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET || 'CHANGE_THIS_IN_PRODUCTION';
const JWT_EXPIRY = '24h';

export interface SessionData {
  userId: number;
  email: string;
  iat?: number;
  exp?: number;
}

/**
 * Create a server-side session using JWT and httpOnly cookie
 */
export async function createSession(userId: number, email: string): Promise<string> {
  const token = jwt.sign(
    { userId, email, iat: Math.floor(Date.now() / 1000) },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRY }
  );
  
  const cookieStore = await cookies();
  cookieStore.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400, // 24 hours in seconds
    path: '/',
  });
  
  return token;
}

/**
 * Validate and return session data from httpOnly cookie
 */
export async function validateSession(): Promise<SessionData | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;
  
  if (!token) {
    return null;
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as SessionData;
    return decoded;
  } catch (error) {
    // Token expired or invalid
    return null;
  }
}

/**
 * Destroy session by clearing cookie
 */
export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

/**
 * Get user ID from session (for API routes)
 */
export async function getUserIdFromSession(): Promise<number | null> {
  const session = await validateSession();
  return session?.userId || null;
}

/**
 * Get email from session (for API routes)
 */
export async function getEmailFromSession(): Promise<string | null> {
  const session = await validateSession();
  return session?.email || null;
}


