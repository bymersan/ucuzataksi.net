"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, MapPin, Shield, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-3 z-50"></div>
              <Card className="relative overflow-hidden rounded-2xl shadow-2xl z-10 h-full">
                <div className="w-full h-full relative min-h-[400px]">
                  <Image
                    src="/assets/hero-section-final.jpg"
                    alt="UcuzaTaksi - İzmir Taksi Hizmetleri"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Image
                      src="/assets/logos/ucuzataksilogo.png"
                      alt="UcuzaTaksi Logo"
                      width={200}
                      height={100}
                      className="w-2/3 h-auto object-contain filter drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white z-30">
                  <h3 className="text-2xl font-bold mb-2">UcuzaTaksi - İzmir Korsan Taksi</h3>
                  <p className="text-sm opacity-90">Korsan Taksi İzmir&apos;de Ucuza Taksi Çözümünüz</p>
                </div>
              </Card>
              
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl z-40">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  <div>
                    <p className="text-2xl font-black">%100</p>
                    <p className="text-xs">Yasal & Sigortalı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black lg:text-5xl mb-4">
                İzmir Korsan Taksi ile <span className="text-primary">Ucuza Taksi</span> Hizmeti
              </h2>
              <p className="text-muted-foreground text-lg">
                İzmir korsan taksi olarak yılların tecrübesiyle korsan taksi İzmir ve çevresinde 7/24 ucuza taksi hizmeti sunuyoruz. 
                Korsan taksi İzmir&apos;de müşteri memnuniyeti odaklı yaklaşımımızla, güvenli ve ekonomik ulaşım sağlıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-bold text-lg">10+ Yıl</p>
                    <p className="text-sm text-muted-foreground">Sektör Deneyimi</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-bold text-lg">50.000+</p>
                    <p className="text-sm text-muted-foreground">Mutlu Müşteri</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-bold text-lg">İzmir</p>
                    <p className="text-sm text-muted-foreground">Tüm İlçelere Hizmet</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-bold text-lg">Lisanslı</p>
                    <p className="text-sm text-muted-foreground">Yasal Sürücüler</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-xl mb-3">Neden İzmir Korsan Taksi Tercih Edilmeli?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  İzmir korsan taksi ile ucuza taksi garantisi
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Korsan taksi İzmir&apos;de 7/24 kesintisiz hizmet
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Ucuza taksi ile havaalanı transferi ve şehir içi ulaşım
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Korsan taksi İzmir deneyimli sürücü kadrosu
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  İzmir korsan taksi temiz araç filosu ve özel hizmetler
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}