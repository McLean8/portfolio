import { Resend } from 'resend'
import ContactEmail from '../../emails/ContactEmail'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export async function POST({ request }) {
  try {
    console.log('Received contact form submission')
    const { name, email, message } = await request.json()
    console.log('Form data:', { name, email, message })

    if (!import.meta.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      throw new Error('Email service is not configured')
    }

    console.log('Attempting to send email...')
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['oethanthemac@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactEmail({ name, email, message }),
    })
    console.log('Email sent successfully:', data)

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        details: error,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
