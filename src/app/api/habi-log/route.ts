import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import { validateSession } from '@/lib/auth';
import crypto from 'crypto';

/**
 * Hash email for logging (never log plaintext emails)
 */
function hashEmail(email: string): string {
  return crypto.createHash('sha256').update(email.toLowerCase().trim()).digest('hex').substring(0, 16);
}

export async function GET(req: NextRequest) {
  try {
    // Validate session - get email from session, not query parameter
    const session = await validateSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Use session email, not query parameter (prevents IDOR)
    const email = session.email;
    
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query(
        'SELECT id, message, role, created_at, ip FROM habi_chat_log WHERE LOWER(TRIM(email)) = LOWER(TRIM(?)) ORDER BY created_at DESC LIMIT 100',
        [email]
      );
      
      const logs = Array.isArray(rows) ? rows : rows ? [rows] : [];
      
      // Log access with hash only
      const emailHash = hashEmail(email);
      console.log(`[HABI LOG ACCESS] email_hash=${emailHash}, logs_count=${logs.length}`);
      
      return NextResponse.json({ logs });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    console.error('[HABI LOG ERROR]', e.message);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 