# Jules UX & Accessibility Journal

## Typography & Contrast
- **Secondary Text Colors**: Use `text-gray-600` (light mode) and `text-gray-400` (dark mode). Avoid `text-gray-500` to satisfy WCAG AA/AAA contrast requirements.
- **Primary Text Colors**: Use `text-gray-900` (light) and `dark:text-white` (dark).

## Images & Assets
- **OptimizedImage Component**:
  - For fixed-size images (e.g., avatars), wrap the component in a container with explicit dimensions and relative positioning (`relative w-8 h-8`), and set `fill={true}`.
  - Set `loading='eager'` and `priority={true}` for LCP optimization (disables blur-up transitions).
  - Use the `aspectRatio` prop (e.g., `"16/9"`) to define aspect ratio styles and prevent CLS.
  - Handles Unsplash URLs robustly; store URLs in `data/blogPosts.ts` *without* query parameters.
- **JSON-LD Schema**:
  - Image URLs must be absolute paths (e.g., `https://cryptowebbuild.com/hero-avatar.webp`).
  - Use raster formats (`.webp`, `.jpg`, `.png`) for Organization/Publisher logos. Do NOT use SVGs (`favicon.svg`) to comply with Google Rich Results validation.

## Layout & Containers
- **Blog Post ContentContainers**: Use standard responsive padding (`p-4 md:p-8`) and gaps (`gap-4 md:gap-6`).
- **Blog Post Headers**: Use `pt-24` padding for mobile and `md:pt-48` for desktop to prevent content from hiding under fixed navbars.
- **Scroll-to-Top**: Maintain `pb-24` padding at the bottom of `Layout.tsx` to prevent the fixed Scroll-to-Top button from overlapping page content.

## Accessibility (A11y)
- **Skip Links**: Include a "Skip to content" link that targets an `id="main-content"` container with `tabIndex={-1}`.
- **Mobile Menu**: Apply the `invisible` class to the mobile menu when closed to prevent focus traps.
- **Decorative SVGs**: Add `aria-hidden="true"` to SVGs inside interactive elements (buttons/links) to prevent redundant screen reader announcements.

## Routing & Lists
- **React Lists**: Always use unique, stable values for the `key` prop (e.g., content-based IDs) in `.map()`. Avoid using array indices.
- **Internal Links**: Do not "hallucinate" routes in `<Link>` tags (e.g., creating imaginary `/services/foo` links). Always verify that the target route exists in `App.tsx` or `data/blogPosts.ts` before linking.

## SEO
- **Titles**: Keep SEO titles in page components under 60 characters to avoid truncation in SERPs.
- **Dual Schema**: The `SEO` component supports dual-schema generation (e.g., `Article` combined with `FAQPage`). Pass necessary props via `BlogPostLayout`.
- **Sitemap**: Exclude pages like `/thank-you` from sitemap generation to avoid "Noindex page in sitemap" errors.

## External Embeds
- **YouTube Iframes**: Ensure embedded YouTube videos use standard URLs (`youtube.com/embed/ID`) rather than alternative domains that may cause CORS/Playback issues without extra configuration.