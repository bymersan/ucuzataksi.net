"use client"

import { ArrowRight, Car, Package, Calendar, MapPin, PawPrint, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta-button"
import { useWhatsApp } from "@/hooks/use-whatsapp"

const services = [
  {
    title: "İzmir Şehir İçi Ekonomik Transfer",
    icon: MapPin,
    description: "Ekonomik transfer İzmir ve tüm ilçelerine ucuza taksi hizmeti",
    features: [
      "İzmir ekonomik transfer 7/24 hizmet",
      "Transfer hizmetleri İzmir tüm ilçeler",
      "Ucuza taksi fiyat garantisi",
      "Güvenilir transfer sürücüleri"
    ],
    popular: false
  },
  {
    title: "Havaalanı Ekonomik Transfer İzmir",
    icon: Calendar,
    description: "İzmir ekonomik transfer ile Adnan Menderes Havaalanı ucuza transfer",
    features: [
      "Transfer hizmetleri İzmir 24 saat",
      "İzmir havaalanı ucuza taksi",
      "Ekonomik transfer sabit fiyat",
      "Bagaj yardımı dahil"
    ],
    popular: true
  },
  {
    title: "7/24 Ekonomik Transfer İzmir",
    icon: Star,
    description: "Ekonomik transfer İzmir'de gece gündüz ucuza taksi hizmeti",
    features: [
      "İzmir ekonomik transfer anında çağrı",
      "Acil transfer hizmeti İzmir",
      "Hızlı ucuza taksi tahsisi",
      "Güvenilir transfer hizmeti"
    ],
    popular: false
  },
  {
    title: "Kargo Taşımacılığı",
    icon: Package,
    description: "Özel kargo ve paket teslimatı için güvenli taşıma hizmeti",
    features: [
      "Sigortalı taşıma",
      "Hızlı teslimat",
      "Takip sistemi",
      "Dikkatli taşıma"
    ],
    popular: false
  },
  {
    title: "Evcil Hayvan Transferi",
    icon: PawPrint,
    description: "Pet dostu araçlarımızla evcil dostlarınızın güvenli yolculuğu",
    features: [
      "Pet dostu araçlar",
      "Güvenli taşıma kafesleri",
      "Veteriner desteği",
      "Özel bakım"
    ],
    popular: true
  },
  {
    title: "VIP Transfer",
    icon: Car,
    description: "Özel araç ve VIP transfer hizmetleri ile konforlu yolculuk",
    features: [
      "Lüks araç filosu",
      "Profesyonel şoförler",
      "Özel güzergah planlama",
      "Premium hizmet"
    ],
    popular: false
  }
]

export default function Services() {
  const { contactInfo } = useWhatsApp()
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-pretty text-3xl font-black lg:text-5xl text-primary">
            Hizmetlerimiz
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            İzmir&apos;de 7/24 güvenli ve ekonomik taksi hizmetleri. İhtiyacınıza özel çözümlerle yanınızdayız.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              {service.popular && (
                <Badge className="absolute right-4 top-4 bg-secondary text-secondary-foreground">
                  Popüler
                </Badge>
              )}
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <WhatsAppCTAButton
                  className="mt-6 w-full group/btn"
                  variant={service.popular ? "default" : "outline"}
                  message={`Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`}
                  showArrow={false}
                >
                  Hemen Ara
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </WhatsAppCTAButton>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">
            İzmir&apos;in Her Noktasına 7/24 Hizmet
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Uygun fiyatlarla, güvenli ve konforlu taksi hizmeti için bizi arayın. 
            %100 yasal sürücüler ve sigortalı araçlarla hizmetinizdeyiz.
          </p>
          <WhatsAppCTAButton
            message={contactInfo.whatsappMessages.reservation}
            size="lg"
            className="font-bold"
          >
            Şimdi Taksi Çağır
          </WhatsAppCTAButton>
        </div>
      </div>
    </section>
  )
}