# Daita Dynamics Website Rebuild Plan

## Overview
Rebuild the current Webflow site into a Next.js codebase for easier maintenance via Claude Code, deployed on Railway.

---

## Current Site Analysis

### Pages/Sections Identified
1. **Hero** - Main headline, subtext, CTA button, trust badges
2. **Problem Statement** - "Does this sound familiar?" empathy section
3. **Approach** - Crawl/Walk/Run phased methodology (carousel/cards)
4. **Services** - Data, Automation, AI offerings
5. **Success Stories** - 4 case studies with expandable content
6. **Testimonials** - Client quotes with logos
7. **Our Story** - Founder bio with image
8. **Contact/CTA** - Final call-to-action with embedded form

### Assets to Extract
- Logo: `Daita_Dynamics-removebg 2.svg`
- Phase icons (Crawl/Walk/Run graphics)
- Service images (3 cards)
- Speech bubble decorative elements
- Client logos (Colorado Floor Company, Level 10 CFO)
- Founder photo (Cade Dannels)
- Trust badge checkmarks

---

## Recommended Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | **Next.js 14+ (App Router)** | Modern React, great DX for Claude Code |
| Styling | **Tailwind CSS** | Utility-first, fast iteration |
| Components | **shadcn/ui** | Accessible, customizable base components |
| Animations | **Framer Motion** | Smooth scroll animations, micro-interactions |
| Forms | **React Hook Form + Resend** | Form handling + email delivery |
| Deployment | **Railway** | As specified |
| Analytics | **Plausible or PostHog** | Privacy-friendly, simple |

---

## Project Structure

```
daita-dynamics/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page (single-page site)
│   ├── globals.css         # Tailwind imports + custom CSS
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form handler
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer with copyright
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Approach.tsx    # Crawl/Walk/Run phases
│   │   ├── Services.tsx    # Data/Automation/AI cards
│   │   ├── SuccessStories.tsx
│   │   ├── Testimonials.tsx
│   │   ├── OurStory.tsx
│   │   └── Contact.tsx
│   └── ui/                 # shadcn components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── lib/
│   ├── utils.ts            # Utility functions
│   └── constants.ts        # Site content/copy
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── cade-dannels.png
│   │   ├── phases/
│   │   ├── services/
│   │   └── clients/
│   └── fonts/              # If custom fonts needed
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

---

## Implementation Phases

### Phase 1: Foundation (Day 1)
1. Initialize Next.js project with TypeScript
2. Configure Tailwind CSS with custom color palette
3. Set up shadcn/ui base components
4. Create project structure
5. Extract and organize all assets from Webflow

### Phase 2: Core Sections (Days 2-3)
1. Build Header with smooth scroll navigation
2. Hero section with CTA
3. Problem statement section
4. Approach section (Crawl/Walk/Run cards)
5. Services section (3-column grid)

### Phase 3: Social Proof & Story (Day 4)
1. Success Stories with expand/collapse
2. Testimonials carousel or grid
3. Our Story section with founder image
4. Contact section with form

### Phase 4: Polish & Deploy (Day 5)
1. Add Framer Motion animations
2. Mobile responsiveness pass
3. SEO metadata
4. Railway deployment configuration
5. Domain connection

---

## Railway Deployment Configuration

```toml
# railway.toml
[build]
builder = "nixpacks"
buildCommand = "npm run build"

[deploy]
startCommand = "npm run start"
healthcheckPath = "/"
restartPolicyType = "on_failure"
restartPolicyMaxRetries = 3
```

Environment variables needed:
- `RESEND_API_KEY` (for contact form emails)
- `CONTACT_EMAIL` (destination for form submissions)

---

## Design System Extraction

### Colors (estimated from Webflow)
```ts
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: '#6B5CE7',  // Purple accent
    dark: '#4A3F9F',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    900: '#111827',
  },
  accent: {
    blue: '#60A5FA',     // Light blue bubble
    gray: '#9CA3AF',     // Gray elements
  }
}
```

### Typography
```ts
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  // Or whatever font Webflow uses
}
```

---

## Content Strategy

All copy will be stored in `lib/constants.ts` for easy editing via Claude Code:

```ts
export const SITE_CONTENT = {
  hero: {
    headline: "Feeling left behind by AI?",
    subline: "You're in the right place.",
    description: "We help B2B service businesses...",
    cta: "Book a Free Strategy Call"
  },
  approach: {
    phases: [
      { id: "crawl", title: "Start Small, Win Fast", ... },
      { id: "walk", title: "Build The Foundation", ... },
      { id: "run", title: "Scale With Confidence", ... }
    ]
  },
  // ... etc
}
```

---

## Key Improvements to Consider

Since Cade mentioned wanting to improve the design:

1. **Modern animations** - Subtle scroll-triggered reveals
2. **Better visual hierarchy** - More whitespace, cleaner typography
3. **Interactive elements** - Hover states, micro-interactions
4. **Performance** - Optimized images, lazy loading
5. **Accessibility** - Proper ARIA labels, keyboard navigation

---

## Next Steps

1. **You provide**: Full-page PDF screenshot (via Go Full Page extension)
2. **I build**: Complete codebase matching functionality
3. **We iterate**: Improve design together via Claude Code

---

## Questions for Cade

Before building:
1. Are there any specific design inspirations or styles you want to move toward?
2. Should the contact form integrate with any CRM (HubSpot, Airtable, etc.)?
3. Any new sections or content you want to add during the rebuild?
4. Do you have the original brand assets (fonts, exact colors, high-res logo)?
