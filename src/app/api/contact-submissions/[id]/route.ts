import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { eq } from 'drizzle-orm';

// Mark as dynamic to prevent build-time execution
export const dynamic = 'force-dynamic';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { 
          error: 'Valid ID is required',
          code: 'INVALID_ID'
        },
        { status: 400 }
      );
    }

    const submissionId = parseInt(id);

    // Parse request body
    const body = await request.json();
    const { status } = body;

    // Validate status field is provided
    if (!status) {
      return NextResponse.json(
        {
          error: 'Status is required',
          code: 'MISSING_STATUS'
        },
        { status: 400 }
      );
    }

    // Validate status value
    if (status !== 'unread' && status !== 'read') {
      return NextResponse.json(
        {
          error: 'Status must be either "unread" or "read"',
          code: 'INVALID_STATUS'
        },
        { status: 400 }
      );
    }

    // Check if submission exists
    const existingSubmission = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, submissionId))
      .limit(1);

    if (existingSubmission.length === 0) {
      return NextResponse.json(
        {
          error: 'Submission not found',
          code: 'NOT_FOUND'
        },
        { status: 404 }
      );
    }

    // Update the submission status
    const updated = await db
      .update(contactSubmissions)
      .set({
        status: status
      })
      .where(eq(contactSubmissions.id, submissionId))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });

  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        {
          error: 'Valid ID is required',
          code: 'INVALID_ID'
        },
        { status: 400 }
      );
    }

    const submissionId = parseInt(id);

    // Check if submission exists
    const existingSubmission = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, submissionId))
      .limit(1);

    if (existingSubmission.length === 0) {
      return NextResponse.json(
        {
          error: 'Submission not found',
          code: 'NOT_FOUND'
        },
        { status: 404 }
      );
    }

    // Delete the submission
    const deleted = await db
      .delete(contactSubmissions)
      .where(eq(contactSubmissions.id, submissionId))
      .returning();

    return NextResponse.json(
      {
        message: 'Submission deleted successfully',
        deleted: deleted[0]
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
      },
      { status: 500 }
    );
  }
}