import { Resend } from 'resend'
import ContactEmail from '../../emails/ContactEmail'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    console.log('Attempting to send email with data:', { name, email, message })

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['oethanthemac@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactEmail({ name, email, message }),
    })

    console.log('Email sent successfully:', data)

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to send email',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
