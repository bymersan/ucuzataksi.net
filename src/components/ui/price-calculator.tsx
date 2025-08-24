"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calculator, MapPin, MessageSquare } from "lucide-react"

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

export function PriceCalculator({ className = "", compact = false }: PriceCalculatorProps) {
  const [fromDistrict, setFromDistrict] = useState<string>("")
  const [toDistrict, setToDistrict] = useState<string>("")

  const handleWhatsAppContact = () => {
    if (!fromDistrict || !toDistrict) return

    const fromName = IZMIR_DISTRICTS.find(d => d.id === fromDistrict)?.name
    const toName = IZMIR_DISTRICTS.find(d => d.id === toDistrict)?.name
    
    const message = `Merhaba! ucuzataksi.net'ten geliyorum.

Kalkış: ${fromName}
Varış: ${toName}

Bu güzergah için taksi hizmeti almak istiyorum. En uygun fiyat teklifinizi alabilir miyim?`

    const whatsappUrl = `https://wa.me/+905340881410?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const resetCalculator = () => {
    setFromDistrict("")
    setToDistrict("")
  }

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

        <div className="flex flex-col gap-1.5">
          <Button 
            onClick={handleWhatsAppContact}
            disabled={!fromDistrict || !toDistrict}
            className="w-full !bg-primary hover:!bg-primary/90 !text-white border-none"
            size={compact ? "sm" : "default"}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Fiyat Hesapla
          </Button>
          
          <Button 
            onClick={resetCalculator}
            variant="outline"
            size="sm"
            className="w-full"
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