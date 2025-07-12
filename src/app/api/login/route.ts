import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import bcrypt from 'bcryptjs';

function getToday() {
  const now = new Date();
  return now.toISOString().slice(0, 10); // YYYY-MM-DD
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '';
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
        return NextResponse.json({ error: 'Too many failed attempts today. Please use Forgot password.' }, { status: 429 });
      }
      // 유저 조회
      const [rows] = await conn.query('SELECT id, password FROM user WHERE email = ?', [email]);
      console.log('[LOGIN USER ROWS]', rows);
      const user = Array.isArray(rows) ? rows[0] : rows;
      if (!user) {
        await conn.query(
          'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 0, NOW())',
          [email, ip]
        );
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
      // 디버깅: 입력값, 해시, 비교 결과 출력
      const match = await bcrypt.compare(password, user.password);
      console.log('[LOGIN DEBUG]', { email, inputPassword: password, dbHash: user.password, match });
      if (!match) {
        await conn.query(
          'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 0, NOW())',
          [email, ip]
        );
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
      // 성공 기록
      await conn.query(
        'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 1, NOW())',
        [email, ip]
      );
      // (세션/쿠키 등은 추후 구현)
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
} 