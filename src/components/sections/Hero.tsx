"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta-button"
import { PriceCalculator } from "@/components/ui/price-calculator"

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-4 md:py-2 px-4 pt-24 md:pt-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          
          {/* Left Column - Content */}
          <div className="flex flex-col items-center text-center">
            
            {/* Service Badge */}
            <Badge variant="outline" className="text-base md:text-lg mb-6">
              🚖 İzmir Ekonomik Transfer - 7/24 Ucuza Taksi
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-pretty mb-6">
              İzmir Ekonomik Transfer <span className="text-primary">Ucuza Taksi</span> Hizmeti!
            </h1>

            {/* Description */}
            <p className="text-muted-foreground lg:text-xl max-w-xl mb-8">
              Ekonomik transfer İzmir&apos;de 7/24 ucuza taksi hizmeti. İzmir transfer hizmetleri ile uygun fiyatlı, güvenli ulaşım. Havaalanı transferi ve şehir içi ekonomik transfer İzmir&apos;de hizmetinizde.
            </p>

            {/* CTA Buttons - Desktop Only */}
            <div className="hidden lg:flex w-full flex-col sm:flex-row gap-2 justify-center lg:justify-center">
              <WhatsAppCTAButton
                className="w-full sm:w-auto"
              >
                Şimdi Taksi Çağır
              </WhatsAppCTAButton>
              
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                className="w-full sm:w-auto"
              >
                Hizmetleri İncele
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Price Calculator with Background Image */}
          <div className="relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
            
            {/* Background Image Container */}
            <div className="absolute inset-0 rounded-md overflow-hidden shadow-2xl border border-border/20">
              <Image
                src="/assets/hero-section-final.jpg"
                alt="İzmir Ekonomik Transfer - Uygun Fiyatlı Transfer İzmir - Ucuza Taksi Hizmeti"
                fill
                className="object-cover scale-110"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectPosition: 'center center' }}
              />
              
              {/* Dark Overlay for Better Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
            </div>

            {/* Price Calculator Overlay */}
            <div className="relative z-10 w-full max-w-sm mx-auto px-2">
              <PriceCalculator />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}