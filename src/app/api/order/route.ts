import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function POST(request: Request) {
  try {
    const { formData, items, deliveryMethod, totalPrice, deliveryCost, finalPrice } = await request.json()

    const itemsList = items.map((item: { id: string; name: string; price: string; quantity: number; weight?: string }) => {
      const itemTotal = parseFloat(item.price.replace('€', '').replace(',', '.').trim()) * item.quantity
      const weightInfo = item.weight ? ` (${item.weight})` : ''
      return `<tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name}${weightInfo}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${item.price}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right; font-weight: bold;">${itemTotal.toFixed(2)} €</td>
      </tr>`
    }).join('')

    const data = await resend.emails.send({
      from: 'Culinar Bestellung <onboarding@resend.dev>',
      to: 'culinar.potsdam@gmx.de',
      replyTo: formData.email,
      subject: `🛒 Neue Bestellung von ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">
            🛒 Neue Bestellung
          </h2>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Kundendaten</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>E-Mail:</strong> ${formData.email}</p>
            <p><strong>Telefon:</strong> ${formData.phone}</p>
            <p><strong>Liefermethode:</strong> ${deliveryMethod === 'delivery' ? '🚗 Lieferung' : '🏪 Selbstabholung'}</p>
            ${deliveryMethod === 'delivery' ? `<p><strong>Adresse:</strong> ${formData.address}</p>` : ''}
            ${formData.message ? `<p><strong>Nachricht:</strong> ${formData.message}</p>` : ''}
          </div>

          <h3 style="color: #333;">Bestellte Artikel</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background: #8B4513; color: white;">
                <th style="padding: 10px; text-align: left;">Artikel</th>
                <th style="padding: 10px; text-align: center;">Menge</th>
                <th style="padding: 10px; text-align: right;">Preis</th>
                <th style="padding: 10px; text-align: right;">Gesamt</th>
              </tr>
            </thead>
            <tbody>
              ${itemsList}
            </tbody>
          </table>

          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Zwischensumme:</span>
              <span>${totalPrice.toFixed(2)} €</span>
            </div>
            ${deliveryMethod === 'delivery' ? `
              <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                <span>Lieferkosten:</span>
                <span>+${deliveryCost.toFixed(2)} €</span>
              </div>
            ` : ''}
            <div style="display: flex; justify-content: space-between; margin-top: 10px; padding-top: 10px; border-top: 2px solid #8B4513; font-size: 18px; font-weight: bold;">
              <span>Gesamtsumme:</span>
              <span style="color: #8B4513;">${finalPrice.toFixed(2)} €</span>
            </div>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 15px;">
            Diese Bestellung wurde über die Culinar Website aufgegeben.
          </p>
        </div>
      `
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Order email error:', error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
