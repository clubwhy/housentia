import { NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const required = ['type', 'goal', 'consultant', 'method', 'schedule_date', 'schedule_time', 'name', 'zipcode', 'email'];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }
    if ((data.method === 'phone' || data.method === 'text') && !data.phone) {
      return NextResponse.json({ error: 'phone is required for phone/text method' }, { status: 400 });
    }
    // Insert into DB
    const conn = await pool.getConnection();
    try {
      await conn.query(
        `INSERT INTO online_inquiry (type, goal, consultant, method, schedule_date, schedule_time, name, zipcode, email, phone, created_at, user_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NULL)`,
        [
          data.type,
          data.goal,
          data.consultant,
          data.method,
          data.schedule_date,
          data.schedule_time,
          data.name,
          data.zipcode,
          data.email,
          data.phone || null
        ]
      );
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
} 