"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {children}
    </nav>
  );
};

export const NavBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export const NavItems = ({ items }: { items: { name: string; action: () => void }[] }) => {
  return (
    <div className="flex items-center space-x-8">
      {items.map((item, idx) => (
        <button
          key={`nav-item-${idx}`}
          onClick={item.action}
          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export const NavbarLogo = () => {
  return (
    <button 
      onClick={() => {
        if (window.location.pathname !== '/') {
          window.location.href = '/'
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
      className="flex items-center hover:opacity-80 transition-opacity"
    >
      <Image
        src="/assets/logos/ucuzataksilogo.png"
        alt="UcuzaTaksi Logo"
        width={180}
        height={45}
        priority={true}
        className="h-10 w-auto"
      />
    </button>
  );
};

export const NavbarButton = ({ 
  children, 
  variant = "primary", 
  className,
  onClick,
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      variant={variant === "primary" ? "default" : "outline"}
      className={cn("text-sm", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:hidden">
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ 
  isOpen, 
  onClick 
}: { 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md hover:bg-muted transition-colors"
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
};

export const MobileNavMenu = ({ 
  children, 
  isOpen
}: { 
  children: React.ReactNode; 
  isOpen: boolean;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden border-t bg-background"
        >
          <div className="px-4 py-6 space-y-6">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};