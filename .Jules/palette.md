## 2024-05-22 - Initial Journal Creation
**Learning:** Establishing a journal for tracking UX/A11y learnings.
**Action:** Will record critical insights here as they are discovered.

## 2024-05-22 - Accordion Accessibility
**Learning:** Native `<details>` elements are accessible but difficult to animate smoothly. Custom accordion components must use `aria-expanded` and `aria-controls` to maintain screen reader context. Replacing `focus:outline-none` with `focus-visible` rings is critical for keyboard navigation.
**Action:** Always implement `useId` for associating triggers with content regions in custom interactive components.

## 2024-05-22 - Mobile Menu Visibility Transition
**Learning:** Animated mobile menus using `opacity` transitions can leave hidden interactive elements (like links) in the DOM, creating a focus trap where keyboard users navigate invisible items. Adding `visibility: hidden` (via `invisible` class) to the closed state ensures these elements are removed from the accessibility tree while still allowing the opacity transition to play out (as CSS transitions support visibility steps).
**Action:** When animating opacity for visibility, always toggle `visibility: hidden/visible` to ensure keyboard focus management is correct.
