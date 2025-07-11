import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: 'No message provided' }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not set' }, { status: 500 });
  }

  // Gemini API endpoint (v1beta/models/gemini-pro:generateContent)
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey;

  const body = {
    contents: [
      {
        parts: [{ text: message }]
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error }, { status: response.status });
    }

    const data = await response.json();
    // Gemini 응답에서 텍스트 추출
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return NextResponse.json({ text });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch from Gemini API' }, { status: 500 });
  }
} 