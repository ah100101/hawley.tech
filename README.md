# hawley.tech

A minimal, dark-themed portfolio website built with modern web technologies.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **Framer Motion** - Fluid animations

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   └── layout/      # Layout components
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
└── public/          # Static assets
```

## Features

- Static site generation for optimal performance
- Responsive design with mobile-first approach
- Smooth page transitions and animations
- Dark theme with custom typography
- Image galleries with lightbox functionality
- SEO optimized with Open Graph support

## Deployment

This site is deployed on [Vercel](https://vercel.com). Push to the main branch to trigger automatic deployments.
