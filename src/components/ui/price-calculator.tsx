"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calculator, MapPin, MessageSquare } from "lucide-react"
import { trackPriceCalculation, trackWhatsAppClick } from "@/lib/gtm-events"

const IZMIR_DISTRICTS = [
  { id: 'aliaga', name: 'Aliağa' },
  { id: 'balcova', name: 'Balçova' },
  { id: 'bayindir', name: 'Bayındır' },
  { id: 'bayrakli', name: 'Bayraklı' },
  { id: 'bergama', name: 'Bergama' },
  { id: 'bornova', name: 'Bornova' },
  { id: 'buca', name: 'Buca' },
  { id: 'cesme', name: 'Çeşme' },
  { id: 'cigli', name: 'Çiğli' },
  { id: 'dikili', name: 'Dikili' },
  { id: 'foca', name: 'Foça' },
  { id: 'gaziemir', name: 'Gaziemir' },
  { id: 'guzelbahce', name: 'Güzelbahçe' },
  { id: 'karabaglar', name: 'Karabağlar' },
  { id: 'karaburun', name: 'Karaburun' },
  { id: 'karsiliyaka', name: 'Karşıyaka' },
  { id: 'kemalpasa', name: 'Kemalpasa' },
  { id: 'kinik', name: 'Kınık' },
  { id: 'kiraz', name: 'Kiraz' },
  { id: 'konak', name: 'Konak' },
  { id: 'menderes', name: 'Menderes' },
  { id: 'menemen', name: 'Menemen' },
  { id: 'narlidere', name: 'Narlıdere' },
  { id: 'odemis', name: 'Ödemiş' },
  { id: 'seferihisar', name: 'Seferihisar' },
  { id: 'selcuk', name: 'Selçuk' },
  { id: 'tire', name: 'Tire' },
  { id: 'torbali', name: 'Torbalı' },
  { id: 'urla', name: 'Urla' }
]


interface PriceCalculatorProps {
  className?: string
  compact?: boolean
}

// Estimated prices between districts (in TRY)
const calculateEstimatedPrice = (from: string, to: string): number => {
  // Base prices for different route types
  const SAME_DISTRICT = 35
  const NEARBY_DISTRICTS = 60
  const MEDIUM_DISTANCE = 100
  const LONG_DISTANCE = 150
  const AIRPORT_ROUTES = 120
  
  // Same district
  if (from === to) return SAME_DISTRICT
  
  // Airport routes (higher value)
  if (from === 'gaziemir' || to === 'gaziemir') return AIRPORT_ROUTES
  
  // Central districts (nearby)
  const centralDistricts = ['konak', 'karsiliyaka', 'bornova', 'balcova', 'bayrakli']
  if (centralDistricts.includes(from) && centralDistricts.includes(to)) {
    return NEARBY_DISTRICTS
  }
  
  // Long distance routes
  const outerDistricts = ['aliaga', 'bergama', 'cesme', 'dikili', 'foca', 'karaburun', 'odemis', 'selcuk', 'tire']
  if (outerDistricts.includes(from) || outerDistricts.includes(to)) {
    return LONG_DISTANCE
  }
  
  return MEDIUM_DISTANCE
}

export function PriceCalculator({ className = "", compact = false }: PriceCalculatorProps) {
  const [fromDistrict, setFromDistrict] = useState<string>("")
  const [toDistrict, setToDistrict] = useState<string>("")
  const [isCalculating, setIsCalculating] = useState<boolean>(false)

  const handleWhatsAppContact = async () => {
    if (!fromDistrict || !toDistrict) return

    setIsCalculating(true)

    const fromName = IZMIR_DISTRICTS.find(d => d.id === fromDistrict)?.name
    const toName = IZMIR_DISTRICTS.find(d => d.id === toDistrict)?.name
    const estimatedPrice = calculateEstimatedPrice(fromDistrict, toDistrict)
    
    // Track price calculation event for GTM/Google Ads
    trackPriceCalculation(fromName!, toName!, estimatedPrice)
    
    // Track WhatsApp click conversion
    trackWhatsAppClick('price_calculator_hero', estimatedPrice)
    
    // Enhanced message with estimated price
    const message = `Merhaba! ucuzataksi.net fiyat hesaplama aracından geliyorum.

📍 Kalkış: ${fromName}
📍 Varış: ${toName}
💰 Tahmini Fiyat: ₺${estimatedPrice}

Bu güzergah için taksi rezervasyonu yapmak istiyorum. En uygun fiyat teklifinizi alabilir miyim?

🚖 7/24 hizmet - Güvenli yolculuk
⏱️ Hızlı rezervasyon`

    const whatsappUrl = `https://wa.me/+905340881410?text=${encodeURIComponent(message)}`
    
    // Small delay to ensure GTM events are sent
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsCalculating(false)
    }, 500)
  }

  const resetCalculator = () => {
    setFromDistrict("")
    setToDistrict("")
    setIsCalculating(false)
  }

  // Calculate and show estimated price
  const getEstimatedPrice = () => {
    if (!fromDistrict || !toDistrict) return null
    return calculateEstimatedPrice(fromDistrict, toDistrict)
  }

  const estimatedPrice = getEstimatedPrice()

  return (
    <Card className={`w-full max-w-sm bg-background/95 backdrop-blur-sm border-primary/20 ${className}`}>
      <CardHeader className={compact ? "pb-3" : ""}>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Calculator className="h-4 w-4" />
          {compact ? "Fiyat Hesapla" : "Fiyat Hesaplama Aracı"}
        </CardTitle>
        {!compact && (
          <CardDescription>
            İzmir içi taksi ücretini önceden hesaplayın
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-3 pb-4">
        <div className="space-y-2">
          <div className="space-y-1">
            <label className="text-sm font-medium flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Nereden
            </label>
            <Select value={fromDistrict} onValueChange={setFromDistrict}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="İlçe seçin" />
              </SelectTrigger>
              <SelectContent>
                {IZMIR_DISTRICTS.map((district) => (
                  <SelectItem key={district.id} value={district.id}>
                    {district.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Nereye
            </label>
            <Select value={toDistrict} onValueChange={setToDistrict}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="İlçe seçin" />
              </SelectTrigger>
              <SelectContent>
                {IZMIR_DISTRICTS.map((district) => (
                  <SelectItem key={district.id} value={district.id}>
                    {district.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Estimated Price Display */}
        {estimatedPrice && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
            <p className="text-sm font-medium text-muted-foreground">Tahmini Fiyat</p>
            <p className="text-2xl font-bold text-primary">₺{estimatedPrice}</p>
            <p className="text-xs text-muted-foreground mt-1">
              * Kesin fiyat WhatsApp&apos;tan öğrenebilirsiniz
            </p>
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <Button 
            onClick={handleWhatsAppContact}
            disabled={!fromDistrict || !toDistrict || isCalculating}
            className="w-full !bg-primary hover:!bg-primary/90 !text-white border-none"
            size={compact ? "sm" : "default"}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            {isCalculating ? "Hesaplando..." : estimatedPrice ? `₺${estimatedPrice} - WhatsApp'ta Rezervasyon` : "Fiyat Hesapla"}
          </Button>
          
          <Button 
            onClick={resetCalculator}
            variant="outline"
            size="sm"
            className="w-full"
            disabled={isCalculating}
          >
            Sıfırla
          </Button>
        </div>

        {!compact && (
          <div className="text-xs text-muted-foreground text-center">
            * Seçim yaptıktan sonra WhatsApp üzerinden fiyat öğrenin.
          </div>
        )}
      </CardContent>
    </Card>
  )
}