# SynapseIQ
 
AI-powered data automation platform — a premium, conversion-focused landing page built for a frontend speed-run hackathon (Phase 1: Next-Gen AI Platform Speed Run).
 
Built with **React + Vite + Tailwind CSS** — zero UI or animation libraries. Every transition, hover state, and layout reflow is driven by native CSS transitions/animations or the Web Animations API.
 
---
 
## Tech stack
 
- **React 18** — hooks, context, `memo`
- **Vite 5** — dev server + production build
- **Tailwind CSS 3** — utility classes, JIT compiler
- **Native CSS / WAAPI only** — no Framer Motion, no Radix, no Headless UI, no Shadcn
---
 
## Getting started
 
```bash
npm install
npm run dev        # dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```
 
---
 
## Key architecture decisions
 
| What | Where | Why |
|---|---|---|
| Pricing context scoped to `<Pricing>` only | `src/context/PricingContext.jsx` | Currency/billing changes never reach Hero, Navbar, or any component outside the Pricing section |
| `PriceDisplay` is the only re-rendering leaf | `src/components/pricing/PriceDisplay.jsx` | Every sibling (`PricingCard`, etc.) is memoized against stable props, so a currency/billing toggle updates exactly one DOM text node |
| `ActiveFeatureContext` declared *above* the Bento ↔ Accordion switch | `src/components/sections/FeatureShowcase.jsx` | The active feature index survives the desktop/mobile layout swap — this is the Context Lock requirement |
| Single breakpoint source | `src/utils/breakpoints.js` | The same `{ md: 768, lg: 1024 }` values feed both the `matchMedia`-based `useBreakpoint` hook and `tailwind.config.js`, so JS and CSS never disagree on where a layout should switch |
| All timing tokens as CSS custom properties | `src/styles/tokens.css` | One place to change `--duration-micro` / `--duration-structural` / `--ease-micro` / `--ease-structural` and have it apply everywhere consistently |
| Pricing matrix — tariff-style, one `monthlyBase` per tier/currency | `src/data/pricingMatrix.js` | Annual pricing is always derived (monthly × 12 × discount), never separately stored; adding a new currency means adding one matrix entry + one locale mapping, nothing else |
 
---
 
## Folder structure
 
```
src/
├── components/
│   ├── accordion/    AccordionList — mobile feature list
│   ├── bento/        BentoGrid + BentoCard — desktop feature grid
│   ├── layout/       Navbar, Footer, Container
│   ├── pricing/      BillingToggle, CurrencySwitcher, PricingCard, PriceDisplay
│   ├── sections/     Hero, FeatureShowcase, Pricing, Testimonials, CTASection, FAQ
│   └── ui/           AccordionItem (shared by FAQ + mobile features), icons.jsx
├── context/          PricingContext, ActiveFeatureContext
├── data/              pricingMatrix, features, testimonials, faqs, navLinks, tierMeta
├── hooks/             useBreakpoint, usePricingCalculator, useScrollReveal, usePrefersReducedMotion
├── seo/               Meta (title, meta description, OG, Twitter card)
├── styles/            index.css, tokens.css, animations.css
└── utils/             breakpoints, formatCurrency, discount
```
 
---
 
## Feature highlights
 
**Dynamic, matrix-driven pricing** — Monthly/Annual toggle × INR/USD/EUR currency switcher. Every price is calculated live from `pricingMatrix.js` (regional base rate per tier/currency) plus a single flat 20% annual discount constant — nothing is hardcoded in the UI.
 
**Re-render isolation** — toggling currency or billing cycle updates only the price text node. Verified via React DevTools Profiler: no parent or sibling component re-renders.
 
**Responsive Bento ↔ Accordion with Context Lock** — a Bento Grid on desktop automatically becomes an Accordion list on mobile. If a card is active/hovered on desktop and the window is resized past the mobile breakpoint mid-interaction, the same item opens in the accordion — and the reverse holds true resizing back up.
 
**Asset-compliant design system** — fonts (JetBrains Mono + Inter), color palette (Forsythia, Nocturnal Expedition, Arctic Powder, Deep Saffron, Oceanic Noir, Mystic Mint), and the provided SVG icon pack are all wired directly into the design tokens and components rather than approximated.
 
---
 
## Deploying
 
Works on Vercel, Netlify, or any static host:
 
```bash
npm run build
# upload the contents of dist/ to your host
```
 
Live deployment: _add your Vercel/Netlify URL here_
 
---
 
## License
 
Built for Phase 1: Next-Gen AI Platform Speed Run.
 
