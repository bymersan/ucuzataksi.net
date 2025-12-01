"use client"

import { contactInfo } from "@/config/contact-info"
import { trackConversion } from "@/lib/gtm-events"

export function useWhatsApp() {
  const openWhatsApp = (message?: string) => {
    // Track conversion
    trackConversion()

    const whatsappMessage = message || contactInfo.whatsappMessages.default
    const url = `https://api.whatsapp.com/send/?phone=${contactInfo.phone.whatsapp}&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`
    window.open(url, '_blank')
  }

  const formatWhatsAppMessage = (formData: {
    name: string
    email: string
    phone: string
    message: string
  }) => {
    return `Merhaba, web sitenizden iletişim kuruyorum.

Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}
Mesaj: ${formData.message}`
  }

  return {
    openWhatsApp,
    formatWhatsAppMessage,
    contactInfo
  }
}
