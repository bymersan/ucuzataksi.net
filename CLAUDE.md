# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Turkish transfer service company website (UcuzaTaksi.net) built with Next.js 15.5.0, featuring SEO optimization, GTM tracking, contact forms, and WhatsApp integration. The site is focused on İzmir ekonomik transfer (economical transfer) and affordable transportation services.

## Development Commands

```bash
# Development with Turbopack (fast refresh)
npm run dev

# Development without Turbopack  
npm run dev-normal

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Core Architecture

### Business Logic & Tracking
- **GTM Integration**: Comprehensive Google Tag Manager event tracking via `/src/lib/gtm-events.ts`
- **WhatsApp Integration**: Click-to-WhatsApp functionality with message templates in `/src/hooks/use-whatsapp.tsx`
- **Contact System**: Nodemailer-based email forms with Gmail SMTP in `/src/app/api/contact/route.ts`
- **SEO**: Structured data schemas, meta tags, and Open Graph configuration in `/src/lib/schema.ts` and layout.tsx

### Key Hooks & Utilities
- `use-form-tracking.tsx` - Form interaction analytics
- `use-scroll-tracking.tsx` - User engagement metrics  
- `use-mobile.tsx` - Mobile device detection
- `gtm-events.ts` - Conversion tracking, enhanced conversions, lead generation events

### Component Architecture
- **Sections**: Marketing sections (Hero, Services, FAQ, etc.) in `/src/components/sections/`
- **UI Components**: shadcn/ui components with "new-york" style variant
- **Providers**: Theme provider (next-themes) and GTM provider for analytics

### Environment Variables
Required for contact form functionality:
- `GMAIL_USER` - Gmail address for sending emails
- `GMAIL_PASS` - Gmail App Password (not regular password)

### Styling System
- Tailwind CSS with CSS variables for theming
- Dark mode support via next-themes
- Custom theme colors defined in globals.css
- Responsive design with mobile-first approach

### Performance Optimizations
- Image optimization with WebP/AVIF formats
- Turbopack for faster development builds
- Aggressive caching headers for static assets
- Lazy loading for off-screen components