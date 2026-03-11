import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_LJ59AmSE_6xx1ZDjVtT6CmiFfjnbiDCXb')
// allow overriding the from address via env variable after domain verification
const FROM_ADDRESS = process.env.EMAIL_FROM || 'noreply@resend.dev'

// warn if still using test domain, makes debugging easier
if (FROM_ADDRESS.endsWith('@resend.dev')) {
  console.warn('EMAIL_FROM not set – using resend.dev test address which only sends to your own email. Verify domain and set EMAIL_FROM to a verified address.');
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    const data = await resend.emails.send({
      from: `Culinar Website <${FROM_ADDRESS}>`,
      to: 'culinar.potsdam@gmx.de',
      replyTo: email,
      subject: subject || 'Neue Nachricht von Website',
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject || 'Keine Angabe'}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
