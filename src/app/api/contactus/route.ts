import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: NextRequest) {
  let connection;
  try {
    const { name, email, contactReason, message } = await request.json();
    
    console.log('Received form data:', { name, email, contactReason, message });

    // Validate required fields
    if (!name || !email || !contactReason || !message) {
      console.log('Validation failed: missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: invalid email format');
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    console.log('Attempting database connection...');
    connection = await pool.getConnection();
    console.log('Database connection successful');

    // Insert the contact form submission
    console.log('Inserting data into contactus table...');
    const result = await connection.query(
      'INSERT INTO contactus (name, email, contact_reason, message) VALUES (?, ?, ?, ?)',
      [name, email, contactReason, message]
    );

    console.log('Data inserted successfully, insertId:', result.insertId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!',
        id: Number(result.insertId) 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again. Error: ' + (error as Error).message },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
      console.log('Database connection released');
    }
  }
} 