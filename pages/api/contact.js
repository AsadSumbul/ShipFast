import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, website, message } = req.body;

  if (!name || !email || !website) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'AsadBiz Contact Form <noreply@asadbiz.com>',
      to: ['z33zain@gmail.com'],
      subject: `New SEO Audit Request from ${name}`,
      html: `
        <h2>New SEO Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message provided.'}</p>
        
        <hr>
        <p><em>This email was sent from the AsadBiz contact form.</em></p>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}