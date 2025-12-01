# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Turkish transfer service website (UcuzaTaksi.net) built with Next.js 15.5.0 and React 19.1.1. The site provides economical taxi and transfer services in İzmir, Turkey, with comprehensive SEO optimization, Google Tag Manager tracking, contact forms, and WhatsApp integration.

## Development Commands

```bash
# Development with Turbopack (faster HMR and builds)
npm run dev

# Development without Turbopack
npm run dev-normal

# Production build
npm run build

# Start production server (after build)
npm start

# Linting
npm run lint
```

## Core Architecture

### Analytics & Conversion Tracking
- **Google Ads Conversion**: Single conversion tracking for all site interactions
  - Google Ads ID: `AW-11468635348`
  - Conversion Label: `BYbhCNuYgMobENT51dwq`
  - Value: 1.0 TRY
- **Tracking Library**: `/src/lib/gtm-events.ts` - Single `trackConversion()` function
- **Tracked Actions**: WhatsApp clicks, phone calls, form submissions, price calculator

### Contact & Communication
- **WhatsApp Integration**: Click-to-WhatsApp with predefined message templates
  - Contact info config: `/src/config/contact-info.ts`
  - Phone: +90 532 519 75 35 (display: "+90 532 519 75 35", WhatsApp: "905325197535")
  - Message templates for default, reservation, airport, and support
- **Contact Form API**: Nodemailer-based email endpoint at `/src/app/api/contact/route.ts`
  - Sends formatted HTML emails (recipient configured in code)
  - Requires environment variables: `GMAIL_USER` and `GMAIL_PASS` (Gmail App Password)
- **Floating Contact Buttons**: Persistent WhatsApp and phone call buttons across all pages

### SEO & Structured Data
- **Schema.org Markup**: Seven comprehensive structured data schemas in `/src/lib/schema.ts`
  - LocalBusiness, Website, Organization, Service, TaxiService, Breadcrumb, FAQ
  - All optimized for "İzmir ekonomik transfer" and "ucuza taksi" keywords
- **Meta Configuration**: Extensive SEO metadata in `/src/app/layout.tsx`
  - Open Graph, Twitter Cards, geo-location tags, mobile app tags
  - Language: Turkish (tr-TR), Region: İzmir (TR-35)
  - Coordinates: 38.4192, 27.1287 (İzmir city center)
- **Third-party Scripts**: Google Ads gtag, Instagram embeds loaded with appropriate strategies

### Component Architecture
- **Section Components**: Marketing sections in `/src/components/sections/`
  - Hero, Services, About, Benefits, FAQ, Contact, ContactForm, CustomerReviews, Testimonials, TrustIndicators, SocialVideos
- **UI Components**: shadcn/ui library with "new-york" style variant (see `components.json`)
  - Configured with Radix UI primitives, Lucide icons, Tailwind CSS
  - Path aliases: `@/components`, `@/lib`, `@/hooks`, `@/ui`
- **Layout Components**: Header, Footer in `/src/components/layout/`
- **Providers**:
  - `theme-provider.tsx` - next-themes integration for dark mode

### Styling & Theming
- **Tailwind CSS**: Custom design system with CSS variables for theme colors
  - Config: `tailwind.config.ts` with "new-york" preset
  - Global styles: `/src/app/globals.css`
  - Dark mode support via class-based strategy (next-themes)
  - Custom animations: scroll, accordion-down/up
  - Extended color palette: background, foreground, primary, secondary, muted, accent, destructive, border, ring, chart, sidebar
- **Responsive Design**: Mobile-first approach with `use-mobile.tsx` hook for device detection

### Configuration Files
- **Navigation**: `/src/config/navigation.ts` - Site navigation structure
- **Contact Info**: `/src/config/contact-info.ts` - Centralized contact details, social links, WhatsApp messages, working hours
- **Next.js Config**: `next.config.ts`
  - Image optimization: WebP/AVIF formats, 1-year cache TTL
  - Unsplash remote images allowed
  - Aggressive caching headers for static assets
  - Compression enabled, poweredByHeader disabled

### Performance Optimizations
- **Image Optimization**: Next.js Image component with WebP/AVIF, aggressive caching (31536000s)
- **Turbopack**: Fast development mode with HMR
- **Font Loading**: Geist Sans and Geist Mono with `display: swap` and preload
- **Resource Hints**: Preconnect to fonts.googleapis.com, fonts.gstatic.com, Instagram
- **Script Loading**: Strategic loading with `afterInteractive` and `lazyOnload`
- **Caching Headers**: Immutable 1-year cache for `/_next/static/*` and `/assets/*`

## Important Implementation Notes

### When Working with Tracking Events
- Single conversion function: `trackConversion()` in `/src/lib/gtm-events.ts`
- Call `trackConversion()` for any user action that should be tracked (WhatsApp, phone, forms)
- Conversion is sent to Google Ads: `AW-11468635348/BYbhCNuYgMobENT51dwq`

### When Modifying Contact Information
- Single source of truth: `/src/config/contact-info.ts`
- Phone number formats: `display` (human-readable), `whatsapp` (no +), `call` (with +)
- Update both config file and structured data schemas if changing contact details

### When Adding New UI Components
- Use shadcn/ui CLI to add components: `npx shadcn@latest add <component-name>`
- All components follow "new-york" style variant (see `components.json`)
- Components auto-configure with path aliases and Tailwind theme

### Environment Variables
Create `.env.local` with:
```
GMAIL_USER=your-gmail@gmail.com
GMAIL_PASS=your-app-password-here
```
Note: GMAIL_PASS must be a Gmail App Password, not your regular password. Generate at https://myaccount.google.com/apppasswords