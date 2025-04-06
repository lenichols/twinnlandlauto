import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = { message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure the transporter using your SMTP credentials.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL, // Email address to receive messages
        subject: `New Contact Form Message from ${name}`,
        text: `You received a new message from ${name} (${email}):\n\n${message}`,
      });

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ message: 'Method not allowed' });
  }
}
