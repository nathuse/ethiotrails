import { Resend } from 'resend';

// Use a placeholder key during build if not provided
export const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
