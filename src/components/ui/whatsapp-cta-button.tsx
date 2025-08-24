"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useWhatsApp } from "@/hooks/use-whatsapp"
import { cn } from "@/lib/utils"

interface WhatsAppCTAButtonProps {
  children: React.ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  message?: string
  trackingLocation: string
  disabled?: boolean
  showArrow?: boolean
  fullWidth?: boolean
  onClick?: () => void
}

export function WhatsAppCTAButton({
  children,
  variant = "default",
  size = "default",
  className,
  message,
  trackingLocation,
  disabled = false,
  showArrow = true,
  fullWidth = false,
  onClick
}: WhatsAppCTAButtonProps) {
  const { openWhatsApp } = useWhatsApp()

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    openWhatsApp(message, trackingLocation)
  }

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      disabled={disabled}
      className={cn(
        fullWidth && "w-full",
        "font-black flex items-center gap-2",
        className
      )}
    >
      {children}
      {showArrow && (
        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <ArrowRight className="w-3 h-3 text-primary-foreground rotate-180" />
        </div>
      )}
    </Button>
  )
}