import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query(
        'SELECT id, message, role, created_at, ip FROM habi_chat_log WHERE email = ? ORDER BY created_at DESC LIMIT 100',
        [email]
      );
      return NextResponse.json({ logs: rows });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
} 