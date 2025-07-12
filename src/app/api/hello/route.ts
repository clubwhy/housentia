import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent?key=' + apiKey;
  const response = await fetch(url);
  const data = await response.json();
  return NextResponse.json(data);
} 