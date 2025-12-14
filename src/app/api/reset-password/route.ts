import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import bcrypt from 'bcryptjs';
import { validateCSRFToken } from '@/lib/csrf';

export async function POST(req: NextRequest) {
  try {
    const { email, token, password, csrfToken } = await req.json();
    
    // Validate CSRF token
    if (!csrfToken || !(await validateCSRFToken(csrfToken))) {
      return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });
    }
    
    if (!email || !token || !password) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    
    // 비밀번호 규칙 검증
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,15}$/;
    if (!passwordRule.test(password)) {
      return NextResponse.json({ error: 'Password must be 8-15 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.' }, { status: 400 });
    }
    
    const conn = await pool.getConnection();
    try {
      // Validate reset token exists, is not expired, and not used
      const [tokenRows] = await conn.query(
        `SELECT user_id, expires_at, used 
         FROM password_reset_tokens 
         WHERE token = ? AND email = ? AND used = 0 AND expires_at > NOW()`,
        [token, email]
      );
      
      if (!tokenRows || (Array.isArray(tokenRows) && tokenRows.length === 0)) {
        return NextResponse.json({ error: 'Invalid or expired reset token' }, { status: 400 });
      }
      
      const tokenData = Array.isArray(tokenRows) ? tokenRows[0] : tokenRows;
      
      // Verify user exists and matches token
      const [userRows] = await conn.query('SELECT id FROM user WHERE email = ? AND id = ?', [email, tokenData.user_id]);
      const user = Array.isArray(userRows) ? userRows[0] : userRows;
      
      if (!user) {
        return NextResponse.json({ error: 'Invalid reset link or user not found.' }, { status: 400 });
      }
      
      // Hash new password with increased rounds (12 instead of 10)
      const hashed = await bcrypt.hash(password, 12);
      
      // Update password and mark token as used in a transaction
      await conn.query('START TRANSACTION');
      try {
        await conn.query('UPDATE user SET password = ? WHERE id = ?', [hashed, user.id]);
        await conn.query('UPDATE password_reset_tokens SET used = 1 WHERE token = ?', [token]);
        await conn.query('COMMIT');
      } catch (error) {
        await conn.query('ROLLBACK');
        throw error;
      }
      
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    console.error('[RESET PASSWORD ERROR]', e.message);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 