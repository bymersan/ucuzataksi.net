"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { HelpCircle, MessageCircle } from "lucide-react"
import { useWhatsApp } from "@/hooks/use-whatsapp"

export default function FAQ() {
  const { trackWhatsAppClick, contactInfo } = useWhatsApp()
  const faqs = [
    {
      question: "Taksi hizmet alanlarınız nerelerdir?",
      answer: "İzmir merkez ve tüm ilçelerinde hizmet veriyoruz. Havaalanı transferleri, şehir içi ulaşım ve çevre illere özel transfer hizmetlerimiz mevcuttur. 7/24 kesintisiz hizmet sağlıyoruz."
    },
    {
      question: "Rezervasyon nasıl yapabilirim?",
      answer: `WhatsApp üzerinden ${contactInfo.phone.display} numarasından hızlıca rezervasyon yapabilirsiniz. Telefon ile de arayabilir, online olarak ulaşım talebinizi iletebilirsiniz. Acil durumlar için 7/24 ulaşabilirsiniz.`
    },
    {
      question: "Ücretlendirme nasıl yapılıyor?",
      answer: "Ekonomik ve rekabetçi fiyatlarımız mesafeye göre belirlenir. Havaalanı transferleri ve özel hizmetler için sabit tarifelerimiz mevcuttur. Detaylı fiyat bilgisi için bizi arayabilirsiniz."
    },
    {
      question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      answer: "Nakit, kredi kartı ve dijital ödeme yöntemlerini kabul ediyoruz. Kurumsal müşterilerimiz için fatura ve havale seçenekleri de bulunmaktadır."
    },
    {
      question: "Araçlarınız güvenli mi?",
      answer: "Tüm araçlarımız düzenli bakım ve temizlikten geçer. %100 yasal, lisanslı ve deneyimli sürücülerimiz bulunur. Araçlarımız sigortalıdır ve güvenlik standartlarına uygun olarak hizmet verir."
    },
    {
      question: "Havaalanı transferi hizmeti veriyor musunuz?",
      answer: "Evet, İzmir Adnan Menderes Havaalanı'na 7/24 transfer hizmeti sağlıyoruz. Zamanında ve konforlu ulaşım garantisi ile havaalanı servisimiz bulunmaktadır."
    },
    {
      question: "Evcil hayvan taşıyabiliyor musunuz?",
      answer: "Evet, pet dostu araçlarımızla evcil hayvan taşımacılığı hizmeti veriyoruz. Özel bakım ve dikkatle, güvenli evcil hayvan transferi sağlıyoruz."
    },
    {
      question: "Kargo taşımacılığı yapıyor musunuz?",
      answer: "Evet, özel kargo taşıma hizmetimiz mevcuttur. Güvenli paket transferi ve hızlı teslimat seçeneklerimizle kargo taşımacılığı yapıyoruz."
    }
  ]


  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="text-sm px-4 py-2">
            Sık Sorulan Sorular
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            En çok <span className="text-primary">sorulanlar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Taksi hizmetlerimiz hakkında en çok sorulan soruları yanıtladık. 
            Aklınızda başka sorular varsa bizimle iletişime geçin.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 shadow-lg">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-6">
                    <div className="flex items-start gap-4 text-base font-semibold">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6 pl-9">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
            <CardContent className="p-0 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                  Başka sorunuz mu var?<br />
                  Hemen <span className="text-primary">iletişime geçin!</span>
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Tüm sorularınızı yanıtlamaya hazırız. Hızlı ve güvenli taksi hizmetlerimiz 
                  hakkında detaylı bilgi almak için iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer group"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Hemen Soru Sor</span>
                  </div>
                  <div 
                    className="inline-flex items-center gap-2 border border-border font-medium px-8 py-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => {
                      trackWhatsAppClick('faq_whatsapp')
                      window.open(`https://api.whatsapp.com/send/?phone=${contactInfo.phone.whatsapp}&text=${encodeURIComponent(contactInfo.whatsappMessages.support)}&type=phone_number&app_absent=0`, '_blank')
                    }}
                  >
                    <span>WhatsApp: {contactInfo.phone.display}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}