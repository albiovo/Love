# Eyewear Case Innovation Matrix

A React + TypeScript + Tailwind CSS internal R&D web app for mapping eyewear case innovation opportunities across routes, product anatomy, archetypes, materials, processes, and hardware.

## Features

- Route dashboard with quick project counts.
- Innovation matrix (Product Anatomy rows × Route columns).
- Multi-filter panel for archetype, material, process, hardware, and functional area.
- Idea generator with opportunity statement pattern:
  - `Improve [functional area] by combining [material] with [process] to support [route].`
- Project card CRUD (add, edit, delete).
- Local persistence with `localStorage`.
- CSV export of filtered project list.
- Responsive desktop/tablet layout with reusable components.

## Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- Vite
- Browser `localStorage` (no backend)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview production build:

   ```bash
   npm run preview
   ```

## Seed Data Included

The app includes the full seed taxonomy for:

- Routes
- Product Anatomy levels
- Functional areas
- Archetypes
- Materials
- Processes
- Hardware

and sample project cards in `src/data/seedData.ts`.

## File Structure

```text
src/
  components/
    FiltersPanel.tsx
    IdeaGenerator.tsx
    MatrixTable.tsx
    ProjectCards.tsx
    ProjectForm.tsx
    RouteDashboard.tsx
  data/
    seedData.ts
  App.tsx
  index.css
  main.tsx
  types.ts
```

## Notes

- Data is saved in the browser under key:
  - `eyewear-case-innovation-matrix-projects`
- CSV export respects current active filters.
