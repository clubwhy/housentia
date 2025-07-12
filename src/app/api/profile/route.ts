import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';

export async function PATCH(req: NextRequest) {
  try {
    const { email, name, phone, address1, address2, city, state, zipcode } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT id FROM user WHERE email = ?', [email]);
      const user = Array.isArray(rows) ? rows[0] : rows;
      if (!user) {
        return NextResponse.json({ error: 'User not found.' }, { status: 404 });
      }
      await conn.query(
        `UPDATE user SET name = ?, phone = ?, address1 = ?, address2 = ?, city = ?, state = ?, zipcode = ? WHERE email = ?`,
        [name || null, phone || null, address1 || null, address2 || null, city || null, state || null, zipcode || null, email]
      );
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT name, phone, address1, address2, city, state, zipcode FROM user WHERE email = ?', [email]);
      const user = Array.isArray(rows) ? rows[0] : rows;
      if (!user) {
        return NextResponse.json({ error: 'User not found.' }, { status: 404 });
      }
      return NextResponse.json(user);
    } finally {
      conn.release();
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
} 