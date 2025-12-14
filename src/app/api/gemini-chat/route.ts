import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/upgrade/contractor-finder/db';
import { rateLimiters } from '@/lib/rateLimit';
import { sanitizeText } from '@/lib/sanitize';

export async function POST(req: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = await rateLimiters.chat(req);
  if (rateLimitResponse) {
    return rateLimitResponse;
  }
  
  const { message, email } = await req.json();

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'No message provided' }, { status: 400 });
  }
  
  // Sanitize message input (max 5000 characters)
  const sanitizedMessage = sanitizeText(message, 5000);
  if (!sanitizedMessage || sanitizedMessage.length === 0) {
    return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not set' }, { status: 500 });
  }

  // IP 추출
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '';

  // Gemini API endpoint (API key in header, not URL)
  const url = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent';

  const body = {
    contents: [
      {
        parts: [{ text: sanitizedMessage }]
      }
    ]
  };

  try {
    // 1. 유저 메시지 로그 저장 (sanitized message)
    if (email) {
      const conn = await pool.getConnection();
      try {
        await conn.query(
          'INSERT INTO habi_chat_log (email, ip, message, role, created_at) VALUES (?, ?, ?, ?, NOW())',
          [email, ip, sanitizedMessage, 'user']
        );
      } finally {
        conn.release();
      }
    }

    // 2. Gemini API 호출 (API key in header, not URL)
    const response = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: typeof error === 'string' ? error : JSON.stringify(error) }, { status: response.status });
    }

    const data = await response.json();
    // Gemini 응답에서 텍스트 추출
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // 3. AI 답변 로그 저장
    if (email && text) {
      const conn = await pool.getConnection();
      try {
        await conn.query(
          'INSERT INTO habi_chat_log (email, ip, message, role, created_at) VALUES (?, ?, ?, ?, NOW())',
          [email, ip, text, 'ai']
        );
      } finally {
        conn.release();
      }
    }

    return NextResponse.json({ text });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch from Gemini API' }, { status: 500 });
  }
} 