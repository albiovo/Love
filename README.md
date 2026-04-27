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

## Run the app locally

### 1) Prerequisites

- Node.js 20+ (recommended: latest LTS)
- npm 10+

### 2) Install dependencies

```bash
npm install
```

### 3) Start dev server

```bash
npm run dev
```

Then open:

- http://localhost:5173

If you need LAN/device access:

```bash
npm run dev:host
```

### 4) Build for production

```bash
npm run build
```

### 5) Preview production build

```bash
npm run preview
```

## If `npm install` fails with 403

This usually means your environment is using a blocked npm proxy or private registry policy.

Try:

```bash
npm config set registry https://registry.npmjs.org/
npm config delete proxy
npm config delete https-proxy
npm cache clean --force
npm install
```

A project `.npmrc` is included to prefer the public npm registry.

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
