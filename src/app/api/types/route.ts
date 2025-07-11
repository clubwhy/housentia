import { NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  if (!category) {
    return NextResponse.json([], { status: 200 });
  }
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query(
      'SELECT code, label FROM types WHERE category = ? AND active = 1 ORDER BY sort_order, label',
      [category]
    );
    return NextResponse.json(rows);
  } finally {
    conn.release();
  }
} 