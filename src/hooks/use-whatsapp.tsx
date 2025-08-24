"use client"

import { contactInfo } from "@/config/contact-info"

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export function useWhatsApp() {
  const trackWhatsAppClick = (location: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        button_location: location
      })
    }
  }

  const openWhatsApp = (message?: string, location?: string) => {
    if (location) {
      trackWhatsAppClick(location)
    }
    
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
    trackWhatsAppClick,
    openWhatsApp,
    formatWhatsAppMessage,
    contactInfo
  }
}