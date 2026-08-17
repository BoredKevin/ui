# @boredkevin/ui Monorepo

A sharp-cornered Shadcn UI design system inspired by Tweakcn with pitch-dark aesthetic, live HSL controls, custom chamfers, dynamic background effects, and drop-in integration.

## Monorepo Structure

- **[`packages/ui`](./packages/ui)**: The publishable `@boredkevin/ui` npm package containing all components, theme context, tokens, background canvas effects, and styles.
- **[`apps/showcase`](./apps/showcase)**: The interactive Tweakcn-style showcase SPA and live theme builder (Vite + React + Tailwind).

## Available Scripts

### Development
Start the showcase application dev server:
```bash
npm run dev
```

### Build Everything
Builds both the library package and the showcase SPA:
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
