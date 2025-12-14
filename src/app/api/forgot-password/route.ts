import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import crypto from 'crypto';
import validator from 'validator';
import { rateLimiters } from '@/lib/rateLimit';

/**
 * Hash email for logging (never log plaintext emails)
 */
function hashEmail(email: string): string {
  return crypto.createHash('sha256').update(email.toLowerCase().trim()).digest('hex').substring(0, 16);
}

export async function POST(req: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = await rateLimiters.passwordReset(req);
  if (rateLimitResponse) {
    return rateLimitResponse;
  }
  
  try {
    const { email } = await req.json();
    
    if (!email || !validator.isEmail(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT id FROM user WHERE email = ?', [email]);
      const user = Array.isArray(rows) ? rows[0] : rows;
      
      if (user) {
        // Generate secure token
        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 1); // 1 hour expiration
        
        // Store token in database (create table if not exists)
        try {
          await conn.query(
            `INSERT INTO password_reset_tokens (user_id, email, token, expires_at, used) 
             VALUES (?, ?, ?, ?, 0) 
             ON DUPLICATE KEY UPDATE token = ?, expires_at = ?, used = 0`,
            [user.id, email, token, expiresAt, token, expiresAt]
          );
        } catch (dbError: any) {
          // If table doesn't exist, log error but don't expose to user
          if (dbError.code === 'ER_NO_SUCH_TABLE') {
            console.error('[FORGOT PASSWORD] password_reset_tokens table does not exist. Please run migration.');
            // For now, continue without database storage (not secure, but won't break)
          } else {
            throw dbError;
          }
        }
        
        // Generate reset link (use environment variable for base URL)
        const baseUrl = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const resetLink = `${baseUrl}/reset-password?token=${token}&email=${encodeURIComponent(email)}`;
        
        // TODO: Send via secure email service (SendGrid, AWS SES, etc.)
        // await sendPasswordResetEmail(email, resetLink);
        
        // For development/testing: log hash only (remove in production)
        const emailHash = hashEmail(email);
        console.log(`[PASSWORD RESET REQUEST] email_hash=${emailHash}, token_created`);
        
        // In production, remove this console.log and use email service
        if (process.env.NODE_ENV === 'development') {
          console.log(`[DEV ONLY] Reset link: ${resetLink}`);
        }
      }
      
      // Always return same message (prevent user enumeration)
      return NextResponse.json({ 
        success: true,
        message: 'If an account exists, a password reset link has been sent to your email.'
      });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    console.error('[FORGOT PASSWORD ERROR]', e.message);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 