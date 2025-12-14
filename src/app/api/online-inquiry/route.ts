import { NextResponse, NextRequest } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import { sanitizeName, sanitizeEmail, sanitizeZipcode, sanitizePhone, sanitizeText } from '@/lib/sanitize';
import { validateCSRFToken } from '@/lib/csrf';
import validator from 'validator';

// Allowed values for method field
const ALLOWED_METHODS = ['phone', 'text', 'email', 'video'];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { csrfToken, ...formData } = data;
    
    // Validate CSRF token
    if (!csrfToken || !(await validateCSRFToken(csrfToken))) {
      return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });
    }
    
    const required = ['type', 'goal', 'consultant', 'method', 'schedule_date', 'schedule_time', 'name', 'zipcode', 'email'];
    for (const field of required) {
      if (!formData[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }
    
    if ((formData.method === 'phone' || formData.method === 'text') && !formData.phone) {
      return NextResponse.json({ error: 'phone is required for phone/text method' }, { status: 400 });
    }
    
    // Validate method against whitelist
    if (!ALLOWED_METHODS.includes(formData.method)) {
      return NextResponse.json({ error: 'Invalid method' }, { status: 400 });
    }
    
    // Validate and sanitize inputs
    try {
      const sanitizedName = sanitizeName(formData.name, 100);
      const sanitizedEmail = sanitizeEmail(formData.email);
      const sanitizedZipcode = sanitizeZipcode(formData.zipcode);
      const sanitizedPhone = formData.phone ? sanitizePhone(formData.phone) : null;
      
      // Validate date format (YYYY-MM-DD)
      if (!validator.isISO8601(formData.schedule_date) && !/^\d{4}-\d{2}-\d{2}$/.test(formData.schedule_date)) {
        return NextResponse.json({ error: 'Invalid date format' }, { status: 400 });
      }
      
      // Validate time format (HH:MM)
      if (!/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/.test(formData.schedule_time)) {
        return NextResponse.json({ error: 'Invalid time format' }, { status: 400 });
      }
      
      // Sanitize other text fields
      const sanitizedType = sanitizeText(formData.type, 50);
      const sanitizedGoal = sanitizeText(formData.goal, 100);
      const sanitizedConsultant = sanitizeText(formData.consultant, 100);
      const sanitizedMethod = validator.escape(formData.method.trim());
      
      // Insert into DB with sanitized data
      const conn = await pool.getConnection();
      try {
        await conn.query(
          `INSERT INTO online_inquiry (type, goal, consultant, method, schedule_date, schedule_time, name, zipcode, email, phone, created_at, user_id)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NULL)`,
          [
            sanitizedType,
            sanitizedGoal,
            sanitizedConsultant,
            sanitizedMethod,
            formData.schedule_date, // Already validated format
            formData.schedule_time, // Already validated format
            sanitizedName,
            sanitizedZipcode,
            sanitizedEmail,
            sanitizedPhone
          ]
        );
        return NextResponse.json({ success: true });
      } finally {
        conn.release();
      }
    } catch (validationError: any) {
      return NextResponse.json(
        { error: validationError.message || 'Invalid input data' },
        { status: 400 }
      );
    }
  } catch (e: any) {
    console.error('[ONLINE INQUIRY ERROR]', e.message);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 