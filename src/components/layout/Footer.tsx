import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin } from "lucide-react"
import { contactInfo } from "@/config/contact-info"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src="/assets/logos/ucuzataksilogo.png"
              alt="UcuzaTaksi Logo"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${contactInfo.email.primary}`} className="hover:text-primary">
                {contactInfo.email.primary}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href={`tel:${contactInfo.phone.call}`} className="hover:text-primary">
                {contactInfo.phone.display}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{contactInfo.address.full}</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">
            © {currentYear} UcuzaTaksi - İzmir Transfer Hizmetleri | Ekonomik Transfer İzmir | Ucuza Taksi
          </p>
          <p className="text-xs text-muted-foreground">
            İzmir&apos;de 7/24 ekonomik transfer ve ucuza taksi hizmeti
          </p>
        </div>
      </div>
    </footer>
  )
}