"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Testimonials() {

  return (
    <section className="py-12 bg-background">
      <div className="w-full">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-0 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="text-sm px-4 py-2">
            Müşteri Deneyimleri
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            <span className="text-primary">Müşteri</span> Deneyimleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Taksi hizmetimizi kullanan müşterilerimizin gerçek deneyimleri ve görüşleri
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "Havaalanı transfer hizmeti için kullandığım Ucuz Taksi gerçekten harika. Sürücü çok kibardı, araç tertemizdi ve zamanında ulaştım. Fiyatları da çok uygun!",
    name: "Mehmet Yılmaz",
    title: "İş İnsanı, Bornova",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote:
      "Gece gezecem için taksi çağırdım, 5 dakikada geldi. Sürücü çok güvenilir ve kibar bir insandı. Artık hep onlardan taksi çağırıyorum.",
    name: "Ayşe Kaya",
    title: "Öğrenci, Karşıyaka",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: 
      "Evcil hayvanımı veterinere götürmek için aradtım, hiç sorun yapmadılar. Köpeğime çok iyi davrandılar, çok teşekkür ederim!",
    name: "Fatma Demir",
    title: "Emekli, Alsancak",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote:
      "Kargo taşıma hizmeti için kullandım, paketim güvenli bir şekilde ulaştı. Hızlı ve güvenilir hizmet, kesinlikle tavsiye ederim.",
    name: "Ali Şahin",
    title: "Esnaf, Konak",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote:
      "7/24 hizmet vermeleri çok işe yarıyor. Gece mesaiden çıktığımda hemen taksi bulabiliyorum. Fiyatları da makul.",
    name: "Zeynep Özkan",
    title: "Hemsiře, Gaziemir",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote:
      "Şehir içi ulaşım için sık sık kullanıyorum. Sürücüler İzmir&apos;i çok iyi biliyor, hep en kısa yoldan götürüyorlar.",
    name: "Cem Turan",
    title: "Doktor, Buca",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote:
      "Kurumsal transferlerimiz için kullanıyoruz. Toplantılara hep zamanında ulaşıyoruz, çok profesyonel hizmet.",
    name: "Ömer Kılıç",
    title: "Satış Müdürü, Bayraklı",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote:
      "WhatsApp'tan rezervasyon yapmak çok kolay. Mesaj attığımda hemen cevap alıyorum ve taksi gelene kadar takip edebiliyorum.",
    name: "Selin Arslan",
    title: "Öğretmen, Narlidırı",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  },
];