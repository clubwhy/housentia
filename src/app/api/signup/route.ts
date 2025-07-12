import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }
    // 비밀번호 해시
    const hashed = await bcrypt.hash(password, 10);
    // IP 추출
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '';
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
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
} 