"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/config/navigation";
import { useWhatsApp } from "@/hooks/use-whatsapp";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openWhatsApp } = useWhatsApp();


  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navigationItems} />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <NavbarButton variant="primary" onClick={() => openWhatsApp(undefined, 'header_desktop')} className="font-black flex items-center gap-2">
            7/24 Taksi Çağır
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-primary-foreground rotate-180" />
            </div>
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
        >
          {navigationItems.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                item.action();
              }}
              className="relative text-foreground hover:text-primary transition-colors text-lg font-medium text-left w-full"
            >
              <span className="block">{item.name}</span>
            </button>
          ))}
          <div className="flex w-full flex-col gap-4 pt-4 border-t border-border/50">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Tema</span>
              <ThemeToggle />
            </div>
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                openWhatsApp(undefined, 'header_mobile');
              }}
              variant="primary"
              className="w-full font-black flex items-center gap-2 justify-center"
            >
              7/24 Taksi Çağır
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-primary-foreground rotate-180" />
              </div>
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}