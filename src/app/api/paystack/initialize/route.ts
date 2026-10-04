import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json(
                { error: 'A valid email address is required' },
                { status: 400 }
            );
        }

        const secretKey = process.env.PAYSTACK_SECRET_KEY;

        if (!secretKey) {
            console.error('PAYSTACK_SECRET_KEY is not configured');

            return NextResponse.json(
                { error: 'Payment service is not configured' },
                { status: 500 }
            );
        }

        // IMPORTANT:
        // The price is determined on the server.
        // Do not accept the amount from the frontend.
        const amount = Number(process.env.PRODUCT_PRICE);

        if (!amount || amount <= 0) {
            console.error('PRODUCT_PRICE is not configured correctly');

            return NextResponse.json(
                { error: 'Product price is not configured' },
                { status: 500 }
            );
        }

        // Paystack expects the amount in the smallest currency unit.
        // For USD, this would be cents.
        // For NGN, this would be kobo.
        const amountInSubunit = Math.round(amount * 100);

        const paystackResponse = await fetch(
            'https://api.paystack.co/transaction/initialize',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${secretKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    amount: amountInSubunit,
                    metadata: {
                        product: 'Journal4me & Performance Dashboard',
                    },
                }),
            }
        );

        const data = await paystackResponse.json();

        if (!paystackResponse.ok || !data.status) {
            console.error('Paystack initialization failed:', data);

            return NextResponse.json(
                {
                    error: data.message || 'Unable to initialize payment',
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                authorization_url: data.data.authorization_url,
                access_code: data.data.access_code,
                reference: data.data.reference,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Payment initialization error:', error);

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
