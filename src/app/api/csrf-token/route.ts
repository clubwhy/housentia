import { NextResponse } from 'next/server';
import { generateCSRFToken } from '@/lib/csrf';

/**
 * GET endpoint to generate and return CSRF token for client-side forms
 */
export async function GET() {
  try {
    const token = await generateCSRFToken();
    return NextResponse.json({ csrfToken: token });
  } catch (error) {
    console.error('[CSRF TOKEN ERROR]', error);
    return NextResponse.json({ error: 'Failed to generate CSRF token' }, { status: 500 });
  }
}




