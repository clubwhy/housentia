import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { rateLimiters } from '@/lib/rateLimit';
import { sanitizeName, sanitizeEmail, sanitizeText } from '@/lib/sanitize';
import { validateCSRFToken } from '@/lib/csrf';
import validator from 'validator';
import { handleError, handleDatabaseError } from '@/lib/errorHandler';

// Allowed contact reasons (whitelist approach)
const ALLOWED_CONTACT_REASONS = [
  'General Inquiry',
  'Technical Support',
  'Mortgage Questions',
  'DIY Project Help',
  'Website Feedback',
  'Partnership Inquiry',
  'Other'
];

export async function POST(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = await rateLimiters.contact(request);
  if (rateLimitResponse) {
    return rateLimitResponse;
  }
  
  let connection;
  try {
    const { name, email, contactReason, message, csrfToken } = await request.json();
    
    // Validate CSRF token
    if (!csrfToken || !(await validateCSRFToken(csrfToken))) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }

    // Validate required fields
    if (!name || !email || !contactReason || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate and sanitize inputs
    try {
      const sanitizedName = sanitizeName(name, 100);
      const sanitizedEmail = sanitizeEmail(email);
      const sanitizedMessage = sanitizeText(message, 5000);
      
      // Validate contact reason against whitelist
      if (!ALLOWED_CONTACT_REASONS.includes(contactReason)) {
        return NextResponse.json(
          { error: 'Invalid contact reason' },
          { status: 400 }
        );
      }
      
      const sanitizedContactReason = validator.escape(contactReason.trim());
      
      connection = await pool.getConnection();

      // Insert the contact form submission with sanitized data
      const result = await connection.query(
        'INSERT INTO contactus (name, email, contact_reason, message) VALUES (?, ?, ?, ?)',
        [sanitizedName, sanitizedEmail, sanitizedContactReason, sanitizedMessage]
      );

      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message. We will get back to you soon!',
          id: Number(result.insertId) 
        },
        { status: 201 }
      );
    } catch (validationError: any) {
      return NextResponse.json(
        { error: validationError.message || 'Invalid input data' },
        { status: 400 }
      );
    }

  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && 
        typeof error.code === 'string' && error.code.startsWith('ER_')) {
      return handleDatabaseError(error);
    }
    return handleError(error, 'CONTACT_FORM');
  } finally {
    if (connection) {
      connection.release();
    }
  }
} 