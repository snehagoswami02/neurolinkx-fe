# NeuroLinkX Design System

A scalable frontend component library built with Next.js, TypeScript, Tailwind CSS, Storybook, and TanStack Table.

This project focuses on reusable UI architecture, accessibility, component documentation, and scalable frontend engineering patterns.

## Features

- Reusable UI component library
- Token-based design system
- Dark theme architecture
- Storybook component documentation
- Accessible interactive components
- Responsive layouts
- Scalable TypeScript architecture
- Keyboard shortcut support
- Loading and empty states
- Generic DataTable implementation


## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS v4
- Storybook
- TanStack Table
- Sonner
- cmdk
- Lucide React
- class-variance-authority
- clsx
- tailwind-merge


## Folder Structure

src/
├── app/
├── components/
│   └── ui/
├── lib/
├── styles/
└── stories/

## Screenshots
### Storybook

![Storybook](public/screenshots/storybook.png)

### Modal Component

![Modal](public/screenshots/modal.png)

### DataTable

![DataTable](public/screenshots/table.png)

### Command Palette

![Command Palette](public/screenshots/command-palette.png)

## Design System Philosophy

The component library was built with a focus on:

- scalability
- reusability
- accessibility
- consistent UI patterns
- token-based styling
- isolated component development using Storybook

All components consume centralized design tokens instead of hardcoded values.

## Engineering Decisions

### Why Storybook?
Storybook enables isolated component development, documentation, and interaction testing.

### Why Design Tokens?
Design tokens ensure consistency across the entire UI system while simplifying theming and scalability.

### Why TanStack Table?
TanStack Table provides scalable and highly customizable table architecture for enterprise-grade data grids.

### Why cmdk?
cmdk enables accessible command palette interactions with keyboard-first UX patterns.

## Component Status

| Component | Status |
|---|---|
| Button | ✅ |
| Input | ✅ |
| Textarea | ✅ |
| Select | ✅ |
| Checkbox | ✅ |
| Switch | ✅ |
| Modal | ✅ |
| Toast | ✅ |
| Command Palette | ✅ |
| DataTable | ✅ |

## Accessibility Features

- Keyboard-accessible components
- Focus-visible states
- ESC key modal dismissal
- Cmd/Ctrl + K command palette support
- Semantic form labels
- Disabled interaction states

  ## Future Scope

- Theme switcher
- Virtualized tables
- Drag-and-drop support
- Unit testing
- Form validation with Zod + React Hook Form
- Animation system standardization

  ## Architecture Notes

The project follows a scalable component-first architecture:

- isolated UI components
- shared utility functions
- centralized design tokens
- reusable interaction patterns
- Storybook-driven development workflow
