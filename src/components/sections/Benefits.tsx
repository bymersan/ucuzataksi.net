"use client"

import { Clock, DollarSign, Shield, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta-button"
import { useWhatsApp } from "@/hooks/use-whatsapp"

const benefits = [
  {
    icon: DollarSign,
    title: "Uygun Fiyat Garantisi",
    description: "Piyasanın en uygun fiyatlarıyla kaliteli hizmet. Sabit fiyat politikası ile sürpriz ücret yok.",
    highlight: "En Ekonomik"
  },
  {
    icon: Clock,
    title: "7/24 Kesintisiz Hizmet",
    description: "Gece gündüz demeden, yılın her günü hizmetinizdeyiz. Anında araç tahsisi ile bekletmiyoruz.",
    highlight: "Her Zaman"
  },
  {
    icon: Shield,
    title: "Güvenli ve Sigortalı",
    description: "%100 yasal sürücüler ve tam sigortalı araçlarla güvenli yolculuk garantisi.",
    highlight: "Tam Güvenlik"
  },
  {
    icon: Star,
    title: "Müşteri Memnuniyeti",
    description: "50.000+ mutlu müşteri ile İzmir&apos;in tercih edilen taksi hizmeti. Güler yüzlü hizmet anlayışı.",
    highlight: "5 Yıldız"
  }
]

const stats = [
  { value: "95%", label: "Müşteri Memnuniyeti" },
  { value: "%30", label: "Daha Uygun Fiyat" },
  { value: "5 dk", label: "Ortalama Bekleme" },
  { value: "24/7", label: "Hizmet Süresi" }
]

export default function Benefits() {
  const { contactInfo } = useWhatsApp()
  return (
    <section id="benefits" className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-pretty text-3xl font-black lg:text-5xl">
            Neden <span className="text-primary">UcuzaTaksi</span>?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            İzmir&apos;de taksi hizmeti denilince akla gelen ilk isim olmamızın sebepleri
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="absolute top-2 right-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {benefit.highlight}
                </span>
              </div>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-3xl font-black text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              İzmir&apos;in En Güvenilir Taksi Hizmeti
            </h3>
            <p className="text-muted-foreground">
              Yılların deneyimi ve müşteri odaklı hizmet anlayışımızla İzmir&apos;de taksi sektöründe 
              fark yaratıyoruz. Modern araç filomuz, profesyonel sürücü kadromuz ve uygun fiyat 
              politikamızla her zaman yanınızdayız.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                Anında WhatsApp üzerinden iletişim
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                GPS takip sistemi ile güvenli yolculuk
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                Kredi kartı ve nakit ödeme seçenekleri
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                Fatura kesme imkanı
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/5 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">
            Hemen Taksi Çağırın, Güvenle Yolculuk Edin!
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            İzmir&apos;in her noktasına 7/24 ulaşım. WhatsApp üzerinden bize ulaşın, 
            en yakın aracımız 5 dakika içinde kapınızda olsun.
          </p>
          <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTAButton
              message={contactInfo.whatsappMessages.reservation}
              size="lg"
              className="font-bold"
            >
              WhatsApp&apos;tan Taksi Çağır
            </WhatsAppCTAButton>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open(`tel:${contactInfo.phone.call}`, '_self')}
            >
              Hemen Ara: {contactInfo.phone.display}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}