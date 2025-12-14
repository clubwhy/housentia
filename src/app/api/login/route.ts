import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { createSession } from '@/lib/auth';
import { validateCSRFToken } from '@/lib/csrf';
import { rateLimiters } from '@/lib/rateLimit';

function getToday() {
  const now = new Date();
  return now.toISOString().slice(0, 10); // YYYY-MM-DD
}

/**
 * Hash email for logging (never log plaintext emails)
 */
function hashEmail(email: string): string {
  return crypto.createHash('sha256').update(email.toLowerCase().trim()).digest('hex').substring(0, 16);
}

export async function POST(req: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = await rateLimiters.login(req);
  if (rateLimitResponse) {
    return rateLimitResponse;
  }
  
  try {
    const { email, password, csrfToken } = await req.json();
    
    // Validate CSRF token
    if (!csrfToken || !(await validateCSRFToken(csrfToken))) {
      return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });
    }
    
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }
    
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    const conn = await pool.getConnection();
    try {
      // 오늘 실패 횟수 조회
      const [failRows] = await conn.query(
        `SELECT COUNT(*) as failCount FROM login_log WHERE email = ? AND success = 0 AND DATE(created_at) = ?`,
        [email, getToday()]
      );
      const failCount = failRows[0]?.failCount || 0;
      if (failCount >= 10) {
        // 기록만 남기고 차단 안내
        await conn.query(
          'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 0, NOW())',
          [email, ip]
        );
        const emailHash = hashEmail(email);
        console.log(`[LOGIN BLOCKED] email_hash=${emailHash}, ip=${ip}, reason=too_many_failures`);
        return NextResponse.json({ error: 'Too many failed attempts today. Please use Forgot password.' }, { status: 429 });
      }
      
      // 유저 조회
      const [rows] = await conn.query('SELECT id, password FROM user WHERE email = ?', [email]);
      const user = Array.isArray(rows) ? rows[0] : rows;
      
      if (!user) {
        await conn.query(
          'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 0, NOW())',
          [email, ip]
        );
        const emailHash = hashEmail(email);
        console.log(`[LOGIN FAIL] email_hash=${emailHash}, ip=${ip}, reason=user_not_found`);
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
      
      // Password verification (NEVER log password or hash)
      const match = await bcrypt.compare(password, user.password);
      
      if (!match) {
        await conn.query(
          'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 0, NOW())',
          [email, ip]
        );
        const emailHash = hashEmail(email);
        console.log(`[LOGIN FAIL] email_hash=${emailHash}, ip=${ip}, reason=invalid_password`);
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
      
      // 성공 기록
      await conn.query(
        'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 1, NOW())',
        [email, ip]
      );
      
      // Create server-side session
      await createSession(user.id, email);
      
      // Log success with hash only
      const emailHash = hashEmail(email);
      console.log(`[LOGIN SUCCESS] email_hash=${emailHash}, ip=${ip}, user_id=${user.id}`);
      
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    console.error('[LOGIN ERROR]', e.message);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 