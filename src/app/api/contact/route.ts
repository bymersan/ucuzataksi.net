import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error('Gmail credentials not configured')
    }

    // Gmail SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Gmail adresiniz
        pass: process.env.GMAIL_PASS  // Gmail App Password
      }
    })

    // Mail gönder
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'burakozerweb@gmail.com',
      subject: `İletişim Formu - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #ffb900; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Kişi Bilgileri:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background-color: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold; width: 30%;">Ad Soyad:</td>
                <td style="padding: 8px; border: 1px solid #dee2e6;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">E-posta:</td>
                <td style="padding: 8px; border: 1px solid #dee2e6;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">Telefon:</td>
                <td style="padding: 8px; border: 1px solid #dee2e6;">${phone}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Mesaj:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #ffb900;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center;">
            Bu mesaj ucuzataksi.net iletişim formundan gönderilmiştir.
          </div>
        </div>
      `
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Email başarıyla gönderildi',
      // Include tracking data for client-side event firing
      tracking: {
        form_submitted: true,
        form_type: 'contact',
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Email gönderimi hatası:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Email gönderilirken hata oluştu' 
      },
      { status: 500 }
    )
  }
}