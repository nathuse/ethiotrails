import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;
    const name = body.name || `${firstName} ${lastName}`;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required', code: 'MISSING_EMAIL' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required', code: 'MISSING_MESSAGE' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email format', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPhone = phone ? phone.trim() : null;
    const sanitizedMessage = message.trim();

    // Create new contact submission
    const newSubmission = await db
      .insert(contactSubmissions)
      .values({
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        message: sanitizedMessage,
        status: 'unread',
        createdAt: new Date().toISOString(),
      })
      .returning();

    // Send email via EmailJS
    try {
      const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (emailjsPublicKey && emailjsServiceId && emailjsTemplateId) {
        // EmailJS API endpoint
        const emailjsUrl = 'https://api.emailjs.com/api/v1.0/email/send';
        
        // Prepare form data (EmailJS expects form-urlencoded or JSON)
        const emailData = {
          service_id: emailjsServiceId,
          template_id: emailjsTemplateId,
          user_id: emailjsPublicKey,
          template_params: {
            from_name: sanitizedName,
            from_email: sanitizedEmail,
            phone: sanitizedPhone || 'Not provided',
            message: sanitizedMessage,
            reply_to: sanitizedEmail,
          },
        };

        const response = await fetch(emailjsUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        if (!response.ok) {
          throw new Error(`EmailJS API error: ${response.statusText}`);
        }
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We don't fail the whole request if email fails, as we stored it in the DB
    }

    return NextResponse.json(newSubmission[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '50'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');

    // Validate status if provided
    if (status && status !== 'unread' && status !== 'read') {
      return NextResponse.json(
        { error: 'Invalid status. Must be "unread" or "read"', code: 'INVALID_STATUS' },
        { status: 400 }
      );
    }

    // Build and execute query
    const results = status
      ? await db
          .select()
          .from(contactSubmissions)
          .where(eq(contactSubmissions.status, status))
          .orderBy(desc(contactSubmissions.createdAt))
          .limit(limit)
          .offset(offset)
      : await db
          .select()
          .from(contactSubmissions)
          .orderBy(desc(contactSubmissions.createdAt))
          .limit(limit)
          .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}