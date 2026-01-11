# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Daita Dynamics is a single-page marketing website for a B2B AI/automation consulting company. Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and Framer Motion.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run Next.js linting
```

## Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page - assembles all sections
│   └── globals.css         # Tailwind imports + custom styles
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections (Hero, Approach, Services, etc.)
│   ├── cards/              # PhaseCard, ServiceCard, TestimonialCard
│   └── ui/                 # Reusable UI components (Button, Badge, Accordion, etc.)
├── lib/
│   ├── content.ts          # All site copy centralized here
│   └── utils.ts            # Utility functions (cn for className merging)
```

### Key Patterns

- **Centralized Content**: All text content lives in `src/lib/content.ts`. Edit copy there, not in component files.
- **Path Alias**: Use `@/*` to import from `src/*` (e.g., `@/components/ui/Button`)
- **Class Merging**: Use `cn()` from `@/lib/utils` for combining Tailwind classes with clsx + tailwind-merge

### Brand Colors (Tailwind)

Custom brand colors defined in `tailwind.config.ts`:
- `brand-purple` (deep/DEFAULT/light) - Primary purple
- `brand-magenta`, `brand-coral`, `brand-orange`, `brand-amber` - Gradient palette
- `brand-cyan` (DEFAULT/light/soft) - Accent
- `slate-*` (50-950) - Neutral palette

### Custom Utilities

- Gradients: `bg-gradient-brand`, `bg-gradient-brand-soft`
- Shadows: `shadow-glow`, `shadow-glow-lg`, `shadow-card`, `shadow-card-hover`
- Animations: `animate-float`, `animate-float-delayed`, `animate-pulse-slow`, `animate-gradient`

### Fonts

- Display font: `font-display` (Clash/system fallback)
- Body font: `font-body` (Satoshi/system fallback)

## Page Sections (in order)

1. Hero - Main headline with trust badges
2. ProblemStatement - Pain points with speech bubbles
3. Approach - Crawl/Walk/Run methodology cards
4. Services - Data, Automation, AI offerings
5. SuccessStories - Expandable accordion case studies
6. Testimonials - Client quote cards
7. OurStory - Founder bio section
8. Contact - CTA with Calendly embed

## External Services

- Calendly integration for scheduling (URL in content.ts)
- Images allowed from `images.unsplash.com` (next.config.js)
