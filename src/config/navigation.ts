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
    action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    name: "Hizmetler",
    action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    name: "Fiyatlar",
    action: () => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    name: "Referanslar",
    action: () => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    name: "İletişim",
    action: () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }),
  },
]