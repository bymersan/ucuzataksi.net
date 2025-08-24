# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.4.4 marketing website with TypeScript, Tailwind CSS, and shadcn/ui components. The project uses the App Router pattern and includes features like contact forms, theme switching, and various marketing sections.

## Development Commands

```bash
# Start development server with Turbopack (recommended)
npm run dev

# Start development server without Turbopack
npm run dev-normal

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with custom theme configuration
- **Components**: shadcn/ui components (Radix UI primitives)
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Email**: Nodemailer for contact form submission
- **Icons**: Lucide React

### Directory Structure
- `/src/app/` - Next.js App Router pages and API routes
  - `layout.tsx` - Root layout with theme provider and global components
  - `page.tsx` - Homepage with all marketing sections
  - `/api/contact/` - Contact form email API endpoint
- `/src/components/` - React components organized by type
  - `/ui/` - shadcn/ui reusable components
  - `/sections/` - Page section components (Hero, About, Services, etc.)
  - `/layout/` - Layout components (Header, Footer)
  - `/providers/` - Context providers (theme)
- `/src/lib/` - Utility functions
- `/src/hooks/` - Custom React hooks
- `/src/config/` - Configuration files

### Key Configuration Files
- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Tailwind CSS with custom theme variables
- `tsconfig.json` - TypeScript configuration with path aliases (@/*)
- `next.config.ts` - Next.js configuration with image optimization and caching headers

### Environment Variables
The contact form API requires Gmail SMTP credentials:
- `GMAIL_USER` - Gmail email address
- `GMAIL_PASS` - Gmail App Password (not regular password)

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

### Styling Approach
- Uses CSS variables for theming (defined in globals.css)
- Tailwind CSS for utility-first styling
- shadcn/ui components use the "new-york" style variant
- Dark mode support via next-themes provider