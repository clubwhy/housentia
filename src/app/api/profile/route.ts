import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import { validateSession } from '@/lib/auth';
import { validateCSRFToken } from '@/lib/csrf';
import validator from 'validator';

export async function PATCH(req: NextRequest) {
  try {
    // Validate session first
    const session = await validateSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { name, phone, address1, address2, city, state, zipcode, csrfToken } = await req.json();
    
    // Validate CSRF token
    if (!csrfToken || !(await validateCSRFToken(csrfToken))) {
      return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });
    }
    
    // Use email from session, not from request body
    const email = session.email;
    
    // Input validation and sanitization
    const errors: string[] = [];
    
    if (name !== undefined && name !== null) {
      if (typeof name !== 'string' || name.length > 100) {
        errors.push('Name must be a string with max 100 characters');
      }
    }
    
    if (phone !== undefined && phone !== null && phone !== '') {
      if (typeof phone !== 'string' || !validator.isMobilePhone(phone, 'en-US', { strictMode: false })) {
        errors.push('Invalid phone number format');
      }
    }
    
    if (zipcode !== undefined && zipcode !== null && zipcode !== '') {
      if (typeof zipcode !== 'string' || !validator.isPostalCode(zipcode, 'US')) {
        errors.push('Invalid zipcode format');
      }
    }
    
    if (state !== undefined && state !== null && state !== '') {
      // Basic state validation (2-letter code)
      if (typeof state !== 'string' || state.length !== 2 || !/^[A-Z]{2}$/i.test(state)) {
        errors.push('Invalid state code');
      }
    }
    
    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(', ') }, { status: 400 });
    }
    
    const conn = await pool.getConnection();
    try {
      // Verify user exists and session matches
      const [rows] = await conn.query('SELECT id FROM user WHERE email = ? AND id = ?', [email, session.userId]);
      const user = Array.isArray(rows) ? rows[0] : rows;
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      
      // Sanitize inputs
      const sanitizedName = name ? validator.escape(name.trim()) : null;
      const sanitizedPhone = phone ? validator.escape(phone.trim()) : null;
      const sanitizedAddress1 = address1 ? validator.escape(address1.trim()) : null;
      const sanitizedAddress2 = address2 ? validator.escape(address2.trim()) : null;
      const sanitizedCity = city ? validator.escape(city.trim()) : null;
      const sanitizedState = state ? state.toUpperCase().trim() : null;
      const sanitizedZipcode = zipcode ? validator.escape(zipcode.trim()) : null;
      
      await conn.query(
        `UPDATE user SET name = ?, phone = ?, address1 = ?, address2 = ?, city = ?, state = ?, zipcode = ? WHERE email = ? AND id = ?`,
        [sanitizedName, sanitizedPhone, sanitizedAddress1, sanitizedAddress2, sanitizedCity, sanitizedState, sanitizedZipcode, email, session.userId]
      );
      return NextResponse.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (e: any) {
    console.error('[PROFILE UPDATE ERROR]', e.message);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    // Validate session - get user from session, not query parameter
    const session = await validateSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const conn = await pool.getConnection();
    try {
      // Use session email and userId, not query parameter
      const [rows] = await conn.query(
        'SELECT name, phone, address1, address2, city, state, zipcode FROM user WHERE email = ? AND id = ?',
        [session.email, session.userId]
      );
      const user = Array.isArray(rows) ? rows[0] : rows;
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      return NextResponse.json(user);
    } finally {
      conn.release();
    }
  } catch (e: any) {
    console.error('[PROFILE GET ERROR]', e.message);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 