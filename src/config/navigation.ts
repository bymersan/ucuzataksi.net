const scrollToSection = (sectionId: string) => {
  // Eğer /anasayfa sayfasında değilsek önce oraya git
  if (window.location.pathname !== '/anasayfa') {
    window.location.href = '/anasayfa'
    // URL değişimi sonrası scroll için kısa bir bekleme
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  } else {
    // Zaten /anasayfa'daysa direkt scroll yap
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export const navigationItems = [
  {
    name: "Ana Sayfa",
    action: () => {
      if (window.location.pathname !== '/anasayfa') {
        window.location.href = '/anasayfa'
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
  },
  {
    name: "Hakkımızda", 
    action: () => scrollToSection('about'),
  },
  {
    name: "Hizmetler",
    action: () => scrollToSection('services'),
  },
  {
    name: "Fiyatlar",
    action: () => scrollToSection('benefits'),
  },
  {
    name: "Referanslar",
    action: () => scrollToSection('testimonials'),
  },
  {
    name: "İletişim",
    action: () => scrollToSection('contact-form'),
  },
]