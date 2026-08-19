# @boredkevin/ui

A sharp, UI component library built on Radix UI, Tailwind CSS, and lightweight canvas backgrounds. Built for developer tools, dashboards, and futuristic web apps.

## Monorepo Structure

- **[`packages/ui`](./packages/ui)**: The publishable `@boredkevin/ui` npm package containing all components, theme context, design tokens, canvas backgrounds, and styles.
- **[`apps/showcase`](./apps/showcase)**: The interactive showcase website, documentation hub, and live theme builder (Vite + React + Tailwind).

## Documentation

Start the development server with `npm run dev` and click the **Docs** tab in the showcase to explore:
- **Interactive Component Demos & API References** (Button, Card, Dialog, Tabs, etc.)
- **Theming & HSL Token Reference**
- **Ambient Canvas Particle Backgrounds**
- **AI & LLM Setup Rules** (for Cursor, Claude, Copilot, and ChatGPT)

## Available Scripts

### Development
Start the showcase application dev server:
```bash
npm run dev
```

### Build Everything
Builds both the library package and the showcase web app:
```bash
npm run build
```

### Individual Package Builds
Build only the `@boredkevin/ui` npm library bundle:
```bash
npm run build:ui
```

Build only the showcase web app:
```bash
npm run build:showcase
```

### Preview Showcase Production Build
```bash
npm run preview
```

## Publishing `@boredkevin/ui`
To publish the library package to npm:
```bash
cd packages/ui
npm publish --access public
```

## License
MIT
