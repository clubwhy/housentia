import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    console.log('[HABI LOG API] email param:', email);
    const rows = await pool.query(
      'SELECT id, message, role, created_at, ip FROM habi_chat_log WHERE LOWER(TRIM(email)) = LOWER(TRIM(?)) ORDER BY created_at DESC LIMIT 100',
      [email]
    );
    console.log('[HABI LOG API] rows:', rows);
    const logs = Array.isArray(rows) ? rows : rows ? [rows] : [];
    return NextResponse.json({ logs });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
} 