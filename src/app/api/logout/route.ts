import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '';
    const conn = await pool.getConnection();
    try {
      await conn.query(
        'INSERT INTO login_log (email, ip, success, created_at) VALUES (?, ?, 2, NOW())',
        [email, ip]
      );
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
} 