# Palette's Journal

## 2024-05-22 - Initial Journal Creation
**Learning:** Establishing a journal for tracking UX/A11y learnings.
**Action:** Will record critical insights here as they are discovered.

## 2024-05-22 - Accordion Accessibility
**Learning:** Native `<details>` elements are accessible but difficult to animate smoothly. Custom accordion components must use `aria-expanded` and `aria-controls` to maintain screen reader context. Replacing `focus:outline-none` with `focus-visible` rings is critical for keyboard navigation.
**Action:** Always implement `useId` for associating triggers with content regions in custom interactive components.
