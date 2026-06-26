# SynapseIQ

AI-powered data automation platform landing page. Built with React + Vite + Tailwind CSS — zero UI or animation libraries.

## Tech stack

- **React 18** (hooks, context, memo)
- **Vite 5** (build, dev server)
- **Tailwind CSS 3** (utility classes, JIT)
- **Native CSS / WAAPI** — no Framer Motion, no Radix, no headless UI

## Getting started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

## Key architecture decisions

| What | Where | Why |
|------|-------|-----|
| Pricing context scoped to `<Pricing>` only | `src/context/PricingContext.jsx` | Currency/billing changes never reach Hero, Navbar, etc. |
| `PriceDisplay` is the only re-rendering leaf | `src/components/pricing/PriceDisplay.jsx` | All sibling `PricingCard` content is memoized |
| `ActiveFeatureContext` declared *above* the Bento↔Accordion switch | `src/components/sections/FeatureShowcase.jsx` | Active index persists across resize — Context Lock |
| Single breakpoint source | `src/utils/breakpoints.js` | Same `{md:768, lg:1024}` values feed both `matchMedia` and `tailwind.config.js` |
| All timing tokens as CSS custom properties | `src/styles/tokens.css` | One place to change `--duration-micro` or `--ease-structural` |
| Pricing matrix — tariff-style, one `monthlyBase` per tier/currency | `src/data/pricingMatrix.js` | Annual price always derived, never stored; adding a currency = 2 lines |

## Folder structure

```
src/
├── components/
│   ├── accordion/   AccordionList (mobile features)
│   ├── bento/       BentoGrid + BentoCard (desktop features)
│   ├── layout/      Navbar, Footer, Container
│   ├── pricing/     BillingToggle, CurrencySwitcher, PricingCard, PriceDisplay
│   ├── sections/    Hero, FeatureShowcase, Pricing, Testimonials, CTASection, FAQ
│   └── ui/          AccordionItem (shared by FAQ + mobile features)
├── context/         PricingContext, ActiveFeatureContext
├── data/            pricingMatrix, features, testimonials, faqs, navLinks, tierMeta
├── hooks/           useBreakpoint, usePricingCalculator, useScrollReveal, usePrefersReducedMotion
├── seo/             Meta (title, OG, Twitter card)
├── styles/          index.css, tokens.css, animations.css
└── utils/           breakpoints, formatCurrency, discount
```

## Deploying

Works on Vercel, Netlify, or any static host:

```bash
npm run build
# upload dist/ to your host
```
