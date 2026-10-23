# Ultra-Premium Linear-Style Agency UI/UX & Cal.com Integration Plan

This plan details the upgrade to configure the dev server on port 3000, integrate the official Cal.com link (`https://cal.com/cryptowebbuilddev/15min`), remove temporary video modal components, streamline hero copy to eliminate clutter while maintaining 100% SEO, and polish the visual aesthetic to a Linear-style Deep Obsidian design with 60fps hairline accents and 100% mobile/desktop PageSpeed.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions are confirmed and guide the implementation:
> 1. **Dev Server Port 3000 Fix**: Configure `server: { port: 3000, host: '0.0.0.0' }` in `vite.config.ts` to ensure instant local dev server boot without port collision or timeout.
> 2. **Official Cal.com Link**: Updated across all booking touchpoints to `https://cal.com/cryptowebbuilddev/15min`.
> 3. **Video Removal**: Removed the temporary video demo modal and button from the Hero and codebase as requested, keeping the visual focus strictly on the conversion pipeline and live proof.
> 4. **Hero Action Hierarchy**:
>    - Primary Accent: **Claim 48-Hour Prototype** (Neon gradient button)
>    - Secondary Focus: **Book 15-Min Strategy Call** (Direct Cal.com integration)
>    - Tertiary / Subtle: **WhatsApp (01618-138820)** (Subdued hairline border style so it doesn't distract or overpower).
> 5. **Aesthetic & PageSpeed**: Linear-style Deep Obsidian (`#090A0F`), 1px subtle hairline specular highlights, balanced micro-typography, and zero-JS-overhead CSS animations to maintain a verified 100/100 Core Web Vitals score on both mobile and desktop.

---

## 1. Overview & Core Concept

- **What It Delivers**:
  - **Dev Server Stability**: Explicit Vite port 3000 binding for 100% reliable local development.
  - **Distraction-Free Copy & 100% SEO**: Concise, balanced 1–2 line value propositions that eliminate walls of text while preserving the semantic H1, keyword density, and pre-rendered SSG metadata for search crawlers.
  - **Official Cal.com Meeting Booking**: One-click 15-minute Strategy Call booking modal and direct links using `https://cal.com/cryptowebbuilddev/15min`.
  - **Linear / Vercel Aesthetic**: Deep obsidian backgrounds (`#090A0F`), translucent card surfaces (`#11131A`), hairline borders (`rgba(255,255,255,0.08)`), crisp typography pairing (`Space Grotesk` display + `Inter`/sans body), and 60fps hardware-accelerated SVG conversion animations.

---

## 2. Technical Architecture & Component Mapping

```
┌────────────────────────────────────────────────────────────────────────┐
│                        VITE CONFIG (PORT 3000)                         │
│   server: { port: 3000, host: '0.0.0.0' }                              │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     LINEAR-STYLE DEEP OBSIDIAN UI                      │
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Hero Section: Clean 1-Line Proposition + 3-Button Flow         │   │
│   │ [Claim 48h Prototype]  [15-Min Strategy Call]  [WhatsApp (sub)]│   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                  │                                     │
│         ┌────────────────────────┴────────────────────────┐            │
│         ▼                                                 ▼            │
│  [BookingModal.tsx]                            [ProjectScopeBuilder]   │
│  cal.com/cryptowebbuilddev/15min               USD/BDT Instant Quote   │
└────────────────────────────────────────────────────────────────────────┘
```

### Step 1: Fix Dev Server in `vite.config.ts`
- Add explicit server configuration:
  ```ts
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
  }
  ```
- Ensures the server binds directly to port 3000 as expected by the preview environment.

### Step 2: Remove Video Demo Modal & Button
- Remove `VideoDemoModal.tsx` references from `pages/Home.tsx`.
- Delete `components/VideoDemoModal.tsx` to keep the bundle clean and eliminate unused code.

### Step 3: Integrate Official Cal.com Link & Booking Modal
- In `components/BookingModal.tsx`:
  - Update booking link to `https://cal.com/cryptowebbuilddev/15min`.
  - Provide both clean iframe embed support and external link fallback.
- In `components/Layout.tsx`, `components/FloatingChatWidget.tsx`, and `scripts/prerender-ssg.js`:
  - Update all Cal.com references to `https://cal.com/cryptowebbuilddev/15min`.

### Step 4: Streamline Hero Copy & Action Hierarchy
- Rebalance Hero section in `pages/Home.tsx`:
  - **H1**: Bold, balanced, 2-line title (*"Sub-Second Websites & 1-Click Stores That Multiply Revenue."*).
  - **Copy**: Exactly 2 crisp sentences explaining the 0.4s speed, 1-click checkout, and 50/50 live testing guarantee.
  - **Action Trio**:
    1. `Claim 48-Hour Prototype` (Primary CTA)
    2. `15-Min Strategy Call` (Cal.com modal trigger)
    3. `WhatsApp` (Subdued secondary hairline button)
- Remove text clutter across the 3 service cards and projects preview while preserving all technical SEO keywords and Schema.org JSON-LD markup.

### Step 5: Verify 100% PageSpeed & SSG Compilation
- Run `compile_applet` (`npm run build`) to ensure:
  - TypeScript passes without error.
  - All 50+ static HTML routes are pre-rendered with the updated Cal.com link and clean copy.
  - Restart the dev server to confirm port 3000 is active and responding.
