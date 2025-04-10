import EmailTemplate from 'components/email/templates/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY); // Cambiado a RESEND_API_KEY sin NEXT_PUBLIC_

export async function POST(request: Request) {
  try {
    // Obtener los datos del body
    const { email, message, subject, name, phone } = await request.json();

    // Validar los datos requeridos
    if (!email || !message || !subject) {
      return NextResponse.json(
        { error: 'Email, message and subject are required' },
        { status: 400 }
      );
    }

    // Enviar el email
    const resp = await resend.emails.send({
      from: 'Spilup <hi@spilup.com>',
      to: process.env.EMAIL_TO.split(','),
      subject: subject,
      react: EmailTemplate({
        message,
        email,
        subject,
        name,
        phone,
      }),
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data: resp },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
} 