import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { email, token, password } = await req.json();
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
      const [rows] = await conn.query('SELECT id FROM user WHERE email = ?', [email]);
      const user = Array.isArray(rows) ? rows[0] : rows;
      if (!user) {
        return NextResponse.json({ error: 'Invalid reset link or user not found.' }, { status: 400 });
      }
      // 테스트용: 토큰 검증 생략
      const hashed = await bcrypt.hash(password, 10);
      await conn.query('UPDATE user SET password = ? WHERE email = ?', [hashed, email]);
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
} 