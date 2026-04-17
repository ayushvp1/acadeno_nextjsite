# 🏗️ Next.js Development Standards & Rules

To maintain high code quality, readability, and performance during the migration, all developers (and AI agents) must adhere to these standards.

## 1. File Size & Readability (CRITICAL)
- **Constraint:** Every `.tsx` component file must contain **less than 100 lines of code**.
- **Action:** If a file exceeds 200 lines, it is a signal that the component is doing too much. Refactor by:
  - Splitting into smaller sub-components.
  - Moving complex logic into custom hooks (`/src/hooks`).
  - Extracting helper functions into `/src/utils`.
- **Naming:** Small components should be named descriptively (e.g., `HeroBanner.tsx`, `FeaturesList.tsx`).

## 2. Styling System
- **Framework:** Use **Tailwind CSS** as the primary styling framework.
- **Organization:** Leverage utility-first classes for most styling needs. For complex components, use Tailwind's `@apply` in CSS Modules or local CSS files if necessary, but prioritize inline classes for consistency.
- **Tokens:** Customize the `tailwind.config.ts` to include project-specific design tokens.
- **Aesthetics:** Maintain a premium, high-fidelity UI with smooth interactions and micro-animations.

## 3. Project Architecture
- **Directory:** Use the `src/` directory.
- **Routing:** Use Next.js **App Router** (`src/app`).
- **Data Fetching:** Prefer Server Components for data fetching where applicable.
- **Types:** Use strict TypeScript for all files.

## 4. Performance & SEO
- **Images:** Always use `next/image` with proper `alt` tags and sizing.
- **Fonts:** Use `next/font` for optimized typography.
- **Accessibility:** Ensure all interactive elements have ARIA labels and keyboard support.
