import { NextResponse } from 'next/server';
import { validateSession } from '@/lib/auth';

/**
 * Check if user is authenticated
 */
export async function GET() {
  try {
    const session = await validateSession();
    if (session) {
      return NextResponse.json({ 
        authenticated: true,
        email: session.email,
        userId: session.userId
      });
    }
    return NextResponse.json({ authenticated: false });
  } catch (error) {
    console.error('[AUTH CHECK ERROR]', error);
    return NextResponse.json({ authenticated: false });
  }
}




