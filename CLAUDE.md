# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, featuring a minimal dark-themed design. The site is originally created with v0.dev and deployed on Vercel.

## Common Commands

```bash
# Development
pnpm dev              # Start development server

# Build
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run Next.js linter
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.2.4 (App Router)
- **UI Components**: Radix UI primitives + custom shadcn/ui components
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Type Safety**: TypeScript

### Key Design Patterns

**Static Generation**: All pages use `export const dynamic = "force-static"` for static site generation.

**Component Organization**:
- `app/`: Next.js App Router pages (Home, Experience, Work, Gallery, About)
- `components/ui/`: Reusable shadcn/ui components (buttons, cards, dialogs, etc.)
- `components/layout/`: Layout components (Header, Footer)
- `components/`: Feature-specific components (photo galleries, work grids)
- `lib/`: Utility functions (mainly `cn()` for className merging)
- `hooks/`: Custom React hooks

**Layout Structure**:
- Root layout ([layout.tsx](app/layout.tsx)) provides global structure with Header, main content area, and Footer
- Template ([template.tsx](app/template.tsx)) wraps all pages with fade animations using Framer Motion's AnimatePresence

**Styling System**:
- Dark mode only (hardcoded `dark` class on html element)
- Three custom fonts via `next/font/google`:
  - Playfair Display (headings) - `font-heading`
  - IBM Plex Mono (body) - `font-sans`
  - Caveat (handwriting) - `font-handwriting`
- CSS variables for theming defined in [globals.css](app/globals.css)
- `cn()` utility for conditional className merging

**Navigation**: Client-side navigation with animated underline using Framer Motion's `layoutId` for smooth transitions between active states.

## shadcn/ui Configuration

This project uses shadcn/ui components. Configuration is in [components.json](components.json):
- Style: default
- Base color: neutral
- CSS variables enabled
- Path aliases configured (`@/components`, `@/lib`, etc.)

To add new shadcn components, the command would be:
```bash
npx shadcn@latest add <component-name>
```

## Build Configuration

**Next.js Config** ([next.config.mjs](next.config.mjs)):
- ESLint and TypeScript errors ignored during builds
- Images from `images.unsplash.com` allowed
- Image optimization disabled (`unoptimized: true`)

## Important Notes

- This is a v0.dev project - changes deployed from v0.dev will auto-sync to this repository
- Vercel deployment: https://vercel.com/alex-hawley-pro/v0-minimal-portfolio-design
