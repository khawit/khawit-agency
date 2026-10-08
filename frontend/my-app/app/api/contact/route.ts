import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const ALLOWED_SERVICES = [
  'Web Development',
  'AI Solutions',
  'AI Agents & Automation',
  'SaaS & Product',
  'AI-powered Systems',
  'Deployment',
  'Digital Marketing',
  'Other'
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      name, email, contactNumber, service, 
      otherService, description, budget, timeline, honeypot 
    } = body;

    // Honeypot check for bots
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json({ error: 'Invalid name provided' }, { status: 400 });
    }
    
    if (!email || typeof email !== 'string' || email.trim().length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (!contactNumber || typeof contactNumber !== 'string' || contactNumber.trim().length < 5 || contactNumber.trim().length > 30) {
      return NextResponse.json({ error: 'Invalid contact number' }, { status: 400 });
    }

    if (!service || !ALLOWED_SERVICES.includes(service)) {
      return NextResponse.json({ error: 'Invalid service selected' }, { status: 400 });
    }

    if (service === 'Other') {
      if (!otherService || typeof otherService !== 'string' || otherService.trim().length > 200) {
        return NextResponse.json({ error: 'Please describe the other service' }, { status: 400 });
      }
    }

    if (!description || typeof description !== 'string' || description.trim().length < 10) {
      return NextResponse.json({ error: 'Project description must be at least 10 characters long' }, { status: 400 });
    }
    if (description.trim().length > 5000) {
      return NextResponse.json({ error: 'Project description must be under 5000 characters' }, { status: 400 });
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: parseInt(process.env.SMTP_PORT || '465') === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      connectionTimeout: 4000,
      greetingTimeout: 4000,
      socketTimeout: 4000,
    });

    // Setup mail options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `New Project Inquiry - ${name.trim()} - ${service}`,
      text: `NEW PROJECT INQUIRY\n\nCONTACT INFORMATION\nName: ${name.trim()}\nEmail: ${email.trim()}\nContact Number: ${contactNumber.trim()}\n\nPROJECT INFORMATION\nService: ${service}\n${service === 'Other' ? `Custom Requirement: ${otherService.trim()}\n` : ''}Description:\n${description.trim()}\n\n${budget ? `Budget: ${budget}\n` : ''}${timeline ? `Timeline: ${timeline}\n` : ''}\nSource: KHAWIT Website`
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact us directly.' }, 
      { status: 500 }
    );
  }
}
