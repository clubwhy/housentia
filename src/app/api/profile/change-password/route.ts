import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import bcrypt from 'bcryptjs';
import { validateSession } from '@/lib/auth';
import { validateCSRFToken } from '@/lib/csrf';
import { handleError, handleDatabaseError } from '@/lib/errorHandler';

export async function POST(req: NextRequest) {
  try {
    // Validate session first
    const session = await validateSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { current, password, csrfToken } = await req.json();
    
    // Validate CSRF token
    if (!csrfToken || !(await validateCSRFToken(csrfToken))) {
      return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });
    }
    
    if (!current || !password) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,15}$/;
    if (!passwordRule.test(password)) {
      return NextResponse.json({ error: 'Password must be 8-15 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.' }, { status: 400 });
    }
    
    // Use email from session, not from request body
    const email = session.email;
    
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT id, password FROM user WHERE email = ? AND id = ?', [email, session.userId]);
      const user = Array.isArray(rows) ? rows[0] : rows;
      if (!user) {
        return NextResponse.json({ error: 'User not found.' }, { status: 404 });
      }
      
      const match = await bcrypt.compare(current, user.password);
      if (!match) {
        return NextResponse.json({ error: 'Current password is incorrect. Please contact support if you need help.' }, { status: 401 });
      }
      
      // Hash with increased rounds for security
      const hashed = await bcrypt.hash(password, 12);
      await conn.query('UPDATE user SET password = ? WHERE email = ? AND id = ?', [hashed, email, session.userId]);
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    if (e.code && e.code.startsWith('ER_')) {
      return handleDatabaseError(e);
    }
    return handleError(e, 'CHANGE_PASSWORD');
  }
} 