import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import { destroySession, validateSession } from '@/lib/auth';
import crypto from 'crypto';
import { handleError, handleDatabaseError } from '@/lib/errorHandler';

/**
 * Hash email for logging (never log plaintext emails)
 */
function hashEmail(email: string): string {
  return crypto.createHash('sha256').update(email.toLowerCase().trim()).digest('hex').substring(0, 16);
}

export async function POST(req: NextRequest) {
  try {
    // Validate session first
    const session = await validateSession();
    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    // Log logout
    const conn = await pool.getConnection();
    try {
      await conn.query(
        'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 2, NOW())',
        [session.email, ip]
      );
      
      // Destroy server-side session
      await destroySession();
      
      const emailHash = hashEmail(session.email);
      console.log(`[LOGOUT] email_hash=${emailHash}, ip=${ip}`);
      
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    if (e.code && e.code.startsWith('ER_')) {
      return handleDatabaseError(e);
    }
    return handleError(e, 'LOGOUT');
  }
} 