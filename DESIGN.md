# DESIGN.md — CryptoWebBuild Design System

> **Design System Specification** for CryptoWebBuild Agency.  
> Adheres to the Google Stitch DESIGN.md standard and Frontend Architect Engineering rules (Score 98/100).

---

## 1. Visual Theme & Atmosphere

* **Brand Atmosphere:** Elite, high-performance tech agency aesthetic inspired by Linear, Stripe, and modern high-converting Web3/SaaS leaders.
* **Mood:** Deep obsidian void contrast with surgical precision, subtle glassmorphism, crisp vector typography, and restrained electric indigo accents.
* **Design Variance (Taste Calibrations):**
  * `BOLD`: 6/10 (Distinctive architectural borders, glowing gradient buttons, authoritative headlines; strictly no messy chaotic layouts).
  * `MOTION`: 4/10 (Purposeful GPU-accelerated micro-interactions, smooth hover lifts, respects `prefers-reduced-motion`).
  * `DENSITY`: 7/10 (High information density with generous breathing room, structured grids, clean cards).

---

## 2. Color Palette & Semantic Roles

### Dark Theme (Primary Void)
| Token | CSS Variable | Hex / Value | Semantic Role |
| :--- | :--- | :--- | :--- |
| **Canvas Void** | `--bg-void` | `#090A0F` | Deep dark space background |
| **Surface Card** | `--bg-surface` | `#11131A` | Elevated cards, sections, modals |
| **Surface Highlight**| `--bg-surface-highlight` | `#181B24` | Hover states, active tabs, pill chips |
| **Text Primary** | `--tx-main` | `#F8FAFC` | Headings, hero copy, primary labels |
| **Text Muted** | `--tx-muted` | `#94A3B8` | Body copy, secondary descriptions |
| **Border Glass** | `--border-glass` | `rgba(255, 255, 255, 0.07)` | Subtle architectural card borders |
| **Shadow Color** | `--shadow-color` | `rgba(0, 0, 0, 0.65)` | Ambient card elevation & depth |

### Light Theme (Crisp Day)
| Token | CSS Variable | Hex / Value | Semantic Role |
| :--- | :--- | :--- | :--- |
| **Canvas Void** | `--bg-void` | `#FAFAFA` | Clean neutral daylight background |
| **Surface Card** | `--bg-surface` | `#FFFFFF` | Crisp white containers & cards |
| **Surface Highlight**| `--bg-surface-highlight` | `#F4F4F5` | Subtle chip & hover highlights |
| **Text Primary** | `--tx-main` | `#090A0F` | High-contrast black typography |
| **Text Muted** | `--tx-muted` | `#52525B` | Readable slate secondary text |
| **Border Glass** | `--border-glass` | `rgba(9, 10, 15, 0.08)` | Neutral card delineation |
| **Shadow Color** | `--shadow-color` | `rgba(9, 10, 15, 0.05)` | Soft ambient elevation |

### Brand Accents & Signals
| Token | Hex | Tailwind Utility | Semantic Role |
| :--- | :--- | :--- | :--- |
| **Electric Indigo** | `#6366F1` | `indigo-500` | Primary brand accent, active states |
| **Deep Indigo** | `#4F46E5` | `indigo-600` | Primary button gradient stop & hover |
| **Cyan Spark** | `#06B6D4` | `cyan-500` | Tech telemetry, Web3 / Smart Contract badges |
| **Emerald Growth** | `#10B981` | `emerald-500` | SEO scores, success metrics, revenue ROI |
| **Amber Warning** | `#F59E0B` | `amber-500` | Auditing notices, attention badges |

---

## 3. Typography Rules

* **Display Font:** `'Space Grotesk', sans-serif` (Self-hosted for 0ms layout shift). Used exclusively for H1, H2, H3, stat counters, and hero title elements.
* **Body Font:** `'Outfit', sans-serif` (Self-hosted). Used for navigation, body paragraphs, list items, card descriptions, and buttons.
* **Monospace:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`. Used for code snippets, contract addresses, and telemetry badges.

### Typography Hierarchy Scale
| Level | Font Family | Size (Mobile / Desktop) | Weight | Tracking & Leading |
| :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | `Space Grotesk` | `32px / 56px` | 800 / 900 | `tracking-tight leading-none` |
| **Section H2**| `Space Grotesk` | `24px / 36px` | 700 | `tracking-tight leading-snug` |
| **Card H3** | `Space Grotesk` | `18px / 22px` | 600 / 700 | `leading-snug` |
| **Body Large**| `Outfit` | `16px / 18px` | 400 / 500 | `leading-relaxed text-slate-300` |
| **Body Base** | `Outfit` | `14px / 16px` | 400 | `leading-normal` |
| **Caption** | `Outfit` | `12px / 13px` | 500 | `tracking-wide uppercase` |

---

## 4. Component Stylings & Tokens

### 1. Primary Action Button (`neon-button`)
```css
background: linear-gradient(180deg, #6366F1 0%, #4F46E5 100%);
box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.25), 0 6px 18px -4px rgba(79, 70, 229, 0.45);
border-radius: 9999px; /* Pill */
min-height: 44px; /* Touch target accessibility */
padding: 10px 24px;
```
* **Hover:** `transform: translateY(-1.5px); opacity: 0.96;`
* **Active:** `transform: translateY(0px);`
* **Pending / Async:** Must show `<Spinner />` and `aria-busy="true"` with disabled interaction.

### 2. Architectural Glass Cards (`glass-panel`)
```css
background-color: var(--bg-surface);
border: 1px solid var(--border-glass);
box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 12px 32px -12px var(--shadow-color);
border-radius: 16px; /* rounded-2xl */
```

### 3. Chips & Feature Badges
* Rounded pill badges (`rounded-full py-1 px-3 text-xs font-semibold`).
* Border: `border border-indigo-500/20 bg-indigo-500/10 text-indigo-400`.
* No emojis in badge icons; use 14px Lucide SVG icons (e.g., `<CheckCircle2 />`, `<Zap />`, `<ShieldCheck />`).

---

## 5. Anti-Slop Governance & Visual Quality Standards

1. **NO Cheap AI Gradients:**
   * ❌ Never use generic purple-to-blue text gradients (`bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent`) on headings.
   * ✅ Use solid `#FFFFFF` (or high-contrast `#F8FAFC`) with subtle contrast accents or linear light sheen.
2. **NO Emoji Feature Titles:**
   * ❌ Never put loose emojis (🚀, 💡, ⚡) inside colored square tiles above feature headers.
   * ✅ Always use clean, thin-stroke SVG icons from `lucide-react` (e.g. `<Cpu className="w-5 h-5 text-indigo-400" />`).
3. **NO Content-Shifting Popups:**
   * ❌ Never place sticky bottom banners or intrusive popups that block mobile navigation or tap targets.
   * ✅ Use clean inline CTAs and a fixed header navigation bar with backdrop blur.

---

## 6. UX, Accessibility & Mobile Rules (Vercel Guidelines)

* **Touch Target Sizing:** All mobile buttons, links, and close triggers must have a minimum interactive touch area of **44x44px** (desktop min 24x24px).
* **Viewport Zooming:** Never disable user scaling (`user-scalable=no` or `maximum-scale=1` are strictly prohibited).
* **Focus Visibility:** Always preserve `:focus-visible` with `outline: 2px solid #6366F1` and `outline-offset: 2px`.
* **Async Feedback:** Any form submission (e.g. contact form, newsletter, booking) must immediately show a distinct loading indicator (`<Spinner />`).

---

## 7. Performance & 60fps Scrolling Standards

* Add `.cv-auto` (`content-visibility: auto`) to long below-the-fold content blocks to defer rendering offscreen DOM nodes.
* Use `will-change: transform` or `.gpu-accelerated` (`transform: translateZ(0)`) only on animating surfaces to eliminate repaint lag.
* Ensure all images use native `loading="lazy"` and `decoding="async"` with explicit `width` and `height` attributes to prevent CLS (Cumulative Layout Shift).
