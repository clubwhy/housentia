import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { createSession } from '@/lib/auth';
import { validateCSRFToken } from '@/lib/csrf';
import { rateLimiters } from '@/lib/rateLimit';
import { handleError, handleAuthError } from '@/lib/errorHandler';

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
      
      // Check if account is locked
      const [userCheckRows] = await conn.query(
        'SELECT id, password, locked_until FROM user WHERE email = ?',
        [email]
      );
      const userCheck = Array.isArray(userCheckRows) ? userCheckRows[0] : userCheckRows;
      
      if (userCheck && userCheck.locked_until) {
        const lockedUntil = new Date(userCheck.locked_until);
        const now = new Date();
        if (lockedUntil > now) {
          // Account is still locked
          const minutesRemaining = Math.ceil((lockedUntil.getTime() - now.getTime()) / 60000);
          const emailHash = hashEmail(email);
          console.log(`[LOGIN BLOCKED] email_hash=${emailHash}, ip=${ip}, reason=account_locked, minutes_remaining=${minutesRemaining}`);
          return NextResponse.json({ 
            error: `Account is temporarily locked. Please try again in ${minutesRemaining} minute(s) or use Forgot password.` 
          }, { status: 423 }); // 423 Locked
        } else {
          // Lock expired, clear it
          await conn.query('UPDATE user SET locked_until = NULL WHERE email = ?', [email]);
        }
      }
      
      if (failCount >= 10) {
        // Lock account for 30 minutes after 10 failed attempts
        const lockUntil = new Date();
        lockUntil.setMinutes(lockUntil.getMinutes() + 30);
        
        await conn.query(
          'UPDATE user SET locked_until = ? WHERE email = ?',
          [lockUntil, email]
        );
        
        // 기록만 남기고 차단 안내
        await conn.query(
          'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 0, NOW())',
          [email, ip]
        );
        const emailHash = hashEmail(email);
        console.log(`[LOGIN BLOCKED] email_hash=${emailHash}, ip=${ip}, reason=too_many_failures, account_locked_until=${lockUntil.toISOString()}`);
        return NextResponse.json({ 
          error: 'Too many failed attempts. Account locked for 30 minutes. Please use Forgot password to reset.' 
        }, { status: 423 }); // 423 Locked
      }
      
      // 유저 조회 (check lock status was already done above)
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
    return handleError(e, 'LOGIN');
  }
} 