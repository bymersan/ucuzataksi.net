"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Shield,
  Star,
  MapPin,
  CheckCircle2,
  Zap
} from "lucide-react"
import { useWhatsApp } from "@/hooks/use-whatsapp"

export default function ContactForm() {
  const { trackWhatsAppClick, contactInfo } = useWhatsApp()

  const features = [
    {
      icon: Clock,
      title: "7/24 Hizmet",
      description: "Gece gündüz kesintisiz taksi hizmeti"
    },
    {
      icon: Shield,
      title: "Güvenli Yolculuk",
      description: "Lisanslı sürücüler ve sigortalı araçlar"
    },
    {
      icon: Zap,
      title: "Hızlı Ulaşım",
      description: "5 dakikada kapınızda oluyoruz"
    },
    {
      icon: Star,
      title: "Uygun Fiyat",
      description: "Şeffaf ve rekabetçi fiyatlandırma"
    }
  ]

  const serviceAreas = [
    "Konak", "Karşıyaka", "Bornova", "Balçova",
    "Bayraklı", "Çiğli", "Gaziemir", "Narlıdere"
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="text-sm px-4 py-2">
            Taksi Çağır
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            <span className="text-primary">7/24 Taksi</span> Hizmetimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Güvenli ve ekonomik taksi hizmeti için hemen rezervasyon yapın. 7/24 hizmetinizdeyiz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 shadow-lg h-full">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-semibold flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  İletişim Bilgileri
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Telefon</p>
                    <p className="text-muted-foreground">{contactInfo.phone.display}</p>
                    <p className="text-sm text-muted-foreground">Anında arayın</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">
                      <span className="font-medium">WhatsApp:</span> 
                    </p>
                    <a 
                      href={`https://api.whatsapp.com/send/?phone=${contactInfo.phone.whatsapp}&text=${encodeURIComponent(contactInfo.whatsappMessages.support)}&type=phone_number&app_absent=0`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                      onClick={() => trackWhatsAppClick('contact_form_link')}
                    >
                      Hemen taksi çağır
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">{contactInfo.email.primary}</p>
                    <p className="text-sm text-muted-foreground">Genel sorularınız için</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Hizmet Özellikleri */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 shadow-lg h-full">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-semibold flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  Hizmet Avantajları
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <feature.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Hizmet Alanları */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 shadow-lg h-full">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-semibold flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  Hizmet Verdiğimiz Bölgeler
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <strong>Ve daha fazlası!</strong> İzmir&apos;in tüm ilçelerine hizmet veriyoruz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Alt Bilgi */}
        <motion.div
          className="text-center mt-12 p-8 bg-muted/30 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Hemen Taksi Çağırın!</h3>
          <p className="text-muted-foreground mb-4">
            WhatsApp veya telefon ile anında rezervasyon yapın. Taksiniz 5 dakika içinde adresinizde!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Uygun fiyat garantisi</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Güvenli sürücüler</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Temiz araçlar</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}