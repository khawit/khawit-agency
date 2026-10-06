require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' }
});

app.use(express.json({ limit: '10kb' }));
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['POST']
}));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: parseInt(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  connectionTimeout: 4000,
  greetingTimeout: 4000,
  socketTimeout: 4000,
});

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

app.post('/api/contact', apiLimiter, async (req, res) => {
  try {
    const { 
      name, email, contactNumber, service, 
      otherService, description, budget, timeline, honeypot 
    } = req.body;

    if (honeypot) {
      return res.status(200).json({ success: true });
    }

    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return res.status(400).json({ error: 'Invalid name provided' });
    }
    
    if (!email || typeof email !== 'string' || email.trim().length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    if (!contactNumber || typeof contactNumber !== 'string' || contactNumber.trim().length < 5 || contactNumber.trim().length > 30) {
      return res.status(400).json({ error: 'Invalid contact number' });
    }

    if (!service || !ALLOWED_SERVICES.includes(service)) {
      return res.status(400).json({ error: 'Invalid service selected' });
    }

    if (service === 'Other') {
      if (!otherService || typeof otherService !== 'string' || otherService.trim().length > 200) {
        return res.status(400).json({ error: 'Please describe the other service' });
      }
    }

    if (!description || typeof description !== 'string' || description.trim().length < 10) {
      return res.status(400).json({ error: 'Project description must be at least 10 characters long' });
    }
    if (description.trim().length > 5000) {
      return res.status(400).json({ error: 'Project description must be under 5000 characters' });
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `New Project Inquiry — ${name.trim()} — ${service}`,
      text: `NEW PROJECT INQUIRY\n\nCONTACT INFORMATION\nName: ${name.trim()}\nEmail: ${email.trim()}\nContact Number: ${contactNumber.trim()}\n\nPROJECT INFORMATION\nService: ${service}\n${service === 'Other' ? `Custom Requirement: ${otherService.trim()}\n` : ''}Description:\n${description.trim()}\n\n${budget ? `Budget: ${budget}\n` : ''}${timeline ? `Timeline: ${timeline}\n` : ''}\nSource: KHAWIT Website`
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again or contact us directly.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
