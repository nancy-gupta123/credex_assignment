'use Client';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful AI assistant for a license selling platform.' },
        { role: 'user', content: message },
      ],
    });

    const reply = chatCompletion.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('OpenAI Error:', error);
    return NextResponse.json({ reply: 'Internal Server Error' }, { status: 500 });
  }
}
