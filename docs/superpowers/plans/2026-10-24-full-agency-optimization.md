# Full Agency Website Optimization Plan: SEO, Sales, Trust, Authority & Technical Excellence

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

This plan addresses all requested upgrades for **CryptoWebBuild**:
1. Complete technical error fixes (TypeScript compilation, Vite circular chunks, Service Worker caching bug, stray files).
2. Advanced SEO, Dynamic Social OpenGraph metadata, and Schema.org rich snippets.
3. High-converting sales psychology, dual-market positioning (International USD & Bangladesh BDT), and objection busters.
4. Trust, authority, and founder positioning (Sagor Ahamed, Principal Engineer, 50/50 risk-free guarantee).
5. UI/UX design polish across mobile and desktop with crisp contrast in both dark and light modes.

---

## Proposed Changes & File Modifications

### Technical & Core Maintenance
- Modify `components/LeakedRevenueCalculator.tsx`: Export `CalculatorMetrics` alias.
- Modify `components/blog/ProTip.tsx`: Support optional `title` and `tip` props alongside `children`.
- Modify `components/blog/ExpertBox.tsx`: Support `author`, `role`, and `avatar` props.
- Modify `vite.config.ts`: Fix manualChunks circular dependency (`react-helmet-async` into `vendor-react`).
- Modify `sw.js`: Change caching strategy to Network-First for HTML/navigation to prevent stale SPA trapping.
- Modify `public/_headers`: Add complete security headers and caching policies for Cloudflare Pages.
- Delete stray files: `cryptowebbuild@1.0.0`, `vite`, `public/site.webmanifest`, `pages/hero-avatar.webp`, `.aistudio/artifacts/brain/3e8cb97d-2eb1-456c-a819-bd73575e5357/`.

### Conversion, Trust & Sales Psychology
- Modify `pages/Contact.tsx`: Add clear submission error handling, WhatsApp fallback, and high-trust assurances.
- Modify `components/SEO.tsx`: Support rich structured data and dynamic OG preview images.
- Modify `pages/Home.tsx`: Polish Hero hierarchy, sharpen dual-market value proposition, refine conversion flow.
- Modify `components/Layout.tsx`: Enhance mobile drawer, header CTA prominence, and trust badges in the footer.
- Modify `components/BeforeAfterProof.tsx`: Re-verify benchmarks and high-contrast visual display.

---

## Tasks

### Task 1: Fix All TypeScript Compilation Errors & Core Interfaces
- [ ] Export `CalculatorMetrics` from `components/LeakedRevenueCalculator.tsx`.
- [ ] Update `components/blog/ProTip.tsx` props to accept `title` and `tip`.
- [ ] Update `components/blog/ExpertBox.tsx` props to accept `author`, `role`, and `avatar`.
- [ ] Verify `npx tsc --noEmit` completes with zero errors.

### Task 2: Clean Up Repository Garbage & Stray Files
- [ ] Delete 0-byte root files `cryptowebbuild@1.0.0` and `vite`.
- [ ] Delete redundant 0-byte `public/site.webmanifest`.
- [ ] Delete redundant `pages/hero-avatar.webp`.
- [ ] Remove `.aistudio` legacy storage directory.

### Task 3: Fix Service Worker & Production Build Headers
- [ ] Update `sw.js` with Network-First strategy for documents and navigation.
- [ ] Update `public/_headers` with Cloudflare security headers (CSP, HSTS, X-Content-Type-Options) and immutable asset caching.
- [ ] Update `vite.config.ts` manualChunks to eliminate the circular chunk warning.

### Task 4: Upgrade SEO Component & Schema.org Rich Snippets
- [ ] Update `components/SEO.tsx` with enhanced `LocalBusiness` / `ProfessionalService` structured data, geo coordinates, and dynamic social preview fallback.
- [ ] Verify canonical URL handling and meta description lengths.

### Task 5: Enhance Contact Form, Error Handling & Lead Protection
- [ ] Update `pages/Contact.tsx` with explicit error notification, direct WhatsApp fallback button, and instant Cal.com scheduling modal trigger.
- [ ] Test form error states and validation feedback.

### Task 6: UI/UX & Conversion Psychology Polish on Home & Layout
- [ ] Rebalance Hero section in `pages/Home.tsx` for optimal mobile-first visual hierarchy.
- [ ] Polish Dark & Light mode contrast for all glass cards and badges.
- [ ] Reinforce the "50/50 Risk-Free" and "48-Hour Prototype" proof points.
- [ ] Strengthen dual-currency pricing and ROI messaging (USD for global SaaS, BDT for local retail).

### Task 7: Full Verification & Production Build
- [ ] Run `npx tsc --noEmit` and confirm 0 errors.
- [ ] Run `npm run build` and verify that SSG pre-renders all routes without warnings or errors.
