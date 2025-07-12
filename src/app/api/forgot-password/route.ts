import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT id FROM user WHERE email = ?', [email]);
      const user = Array.isArray(rows) ? rows[0] : rows;
      if (user) {
        // 임시 토큰 생성 (예: 32자리 랜덤)
        const token = crypto.randomBytes(32).toString('hex');
        // 실제 서비스라면 DB에 토큰/만료일 저장 필요
        // 테스트용: 콘솔에 링크 출력
        const resetLink = `http://localhost:3000/reset-password?token=${token}&email=${encodeURIComponent(email)}`;
        console.log(`[RESET PASSWORD LINK] ${resetLink}`);
      }
      // 성공 메시지는 항상 동일하게 반환 (보안상)
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
} 