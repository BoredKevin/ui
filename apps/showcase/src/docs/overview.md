# Overview & Architecture

`@boredkevin/ui` is a UI kit designed for interfaces that need distinct personality. While most modern design systems default to soft, rounded corners and generic gray cards, this library focuses on sharp rectangular lines, pitch-black OLED dark mode by default, and a subtle sci-fi aesthetic inspired by developer tools, code editors, and technical dashboards.

Under the hood, the library builds on Radix UI primitives paired with Tailwind CSS and lightweight canvas backgrounds, providing accessible, high-contrast components without fighting the underlying framework.

## Core Design Principles

### Sharp, Dark Aesthetics
High contrast, pitch-black backgrounds, crisp 1px borders, and optional angled chamfer cuts without unnecessary visual clutter.

### Radix UI Primitives
Every interactive component is backed by Radix UI. Keyboard navigation, screen reader support, focus trapping, and ARIA attributes work out of the box.

### Tailwind & HSL Tokens
All colors are defined as HSL custom properties, making runtime theme switches and Tailwind opacity helpers like `bg-primary/20` effortless.

### Built-In Canvas Backgrounds
Instead of requiring heavy 3D libraries or custom canvas loops, the library includes interactive constellation particles and fluid noise fields that drop directly into page layouts.

## Documentation Index

- [Installation & Setup](/docs/installation)
- [Theming & Tokens](/docs/theming)
- [Canvas Backgrounds](/docs/backgrounds)
- [AI & LLM Guide](/docs/llms)
- [Component Directory](/docs/components/button)
