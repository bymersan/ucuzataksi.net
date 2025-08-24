'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Home, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 text-center shadow-xl">
        <div className="mb-6">
          <Image
            src="/assets/logos/ucuzataksilogo.png"
            alt="UcuzaTaksi Logo"
            width={160}
            height={40}
            className="mx-auto mb-4"
          />
        </div>
        
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Sayfa Bulunamadı
          </h2>
          <p className="text-muted-foreground">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="space-y-3">
          <Link href="/" className="w-full">
            <Button className="w-full font-semibold text-lg py-6" size="lg">
              <Home className="w-5 h-5 mr-2" />
              Ana Sayfaya Dön
            </Button>
          </Link>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Geri Git
          </Button>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            İzmir&apos;de ucuz taksi hizmeti için{' '}
            <Link href="/" className="text-primary hover:underline font-medium">
              ana sayfamızı
            </Link>{' '}
            ziyaret edebilirsiniz.
          </p>
        </div>
      </Card>
    </div>
  )
}