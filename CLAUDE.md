# Frontend Design Engineering Rules (Score 98/100 Pipeline)

1. DESIGN SYSTEM GROUNDING (Awesome DESIGN.md):
   - Always read ./DESIGN.md before creating or modifying any UI component.
   - Strictly enforce the exact hex colors, typography scale, spacing tokens, border radius, and shadow tokens defined in ./DESIGN.md.

2. ANTI-SLOP GOVERNANCE (Impeccable & Taste-Skill):
   - Never use generic purple-to-blue gradient text headlines.
   - Never place emoji icon tiles above feature headings; use clean SVG icons instead.
   - Run /impeccable audit and /impeccable polish across COMPONENTS, TYPOGRAPHY, and BACKGROUND layers.
   - Respect calibrated Taste parameters: BOLD (Design Variance), MOTION (Motion Intensity), and DENSITY (Visual Density).

3. UX & ACCESSIBILITY AUDIT (Vercel Web Design Guidelines):
   - Every interactive button or close icon must have a minimum hit target of 24x24px (44x44px on mobile touch targets).
   - Never disable browser zoom (user-scalable=no or maximum-scale=1 is strictly forbidden).
   - Every async form submission or action button must display an explicit <Spinner /> loading state while pending.

4. CLOSED-LOOP BROWSER QA (Microsoft Playwright MCP):
   - After building or updating any page, open the live localhost URL using Playwright MCP.
   - Click interactive buttons, take a real browser screenshot (take_screenshot), verify that no close (X) button or CTA overflows its card or overlaps text, and fix all visual bugs before completing the task.

---

## Project Technical Rules & Architecture (CryptoWebBuild Agency)

- **Framework & Build:** React 18, Vite, TypeScript, Tailwind CSS, Lucide React icons.
- **SSG & Deployment:** Built for Cloudflare Pages (`npm run build`). Always test build with `npm run build` to verify that `scripts/prerender-ssg.js` generates all 57 static routes without error.
- **TypeScript Strictness:** Always maintain 0 compiler errors (`npx tsc --noEmit`).
- **SEO & Performance:** Maintain 95+ Core Web Vitals score, valid OpenGraph / Twitter metadata, semantic HTML5, and accessible ARIA attributes.
