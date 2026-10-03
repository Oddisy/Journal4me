import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { reference } = await request.json();

    if (!reference) {
      return NextResponse.json({ error: 'Transaction reference is required' }, { status: 400 });
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY || 'sk_test_placeholder';

    const paystackRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await paystackRes.json();

    if (data.status && data.data.status === 'success') {
      // Payment verified successfully
      // Normally, here you would create a record in the database, generate a secure signed URL, etc.
      return NextResponse.json({ 
        success: true, 
        message: 'Payment verified successfully',
        notionUrl: process.env.NEXT_PUBLIC_NOTION_TEMPLATE_URL || 'https://notion.so/template-placeholder'
      }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Payment verification failed' }, { status: 400 });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
