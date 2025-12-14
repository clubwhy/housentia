import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import bcrypt from 'bcryptjs';
import { validateCSRFToken } from '@/lib/csrf';
import { rateLimiters } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = await rateLimiters.signup(req);
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
    const emailRule = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRule.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,15}$/;
    if (!passwordRule.test(password)) {
      return NextResponse.json({ error: 'Password must be 8-15 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.' }, { status: 400 });
    }
    // 비밀번호 해시 (increased rounds for security)
    const hashed = await bcrypt.hash(password, 12);
    // IP 추출
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';
    const conn = await pool.getConnection();
    try {
      // 중복 이메일 체크
      const [rows] = await conn.query('SELECT id FROM user WHERE email = ?', [email]);
      if (Array.isArray(rows) && rows.length > 0) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
      }
      await conn.query(
        'INSERT INTO user (email, password, type, register_ip, created_at) VALUES (?, ?, ?, ?, NOW())',
        [email, hashed, 'user', ip]
      );
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    console.error('[SIGNUP ERROR]', e.message);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 