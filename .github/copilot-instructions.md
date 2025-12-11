---
applyTo: "**"
---

# Copilot Instructions for Mobile App

This project is a **React Native** application built with **Expo** and **TypeScript**. It uses **Expo Router** for navigation and **Biome** for linting/formatting.

## 🏗 Architecture & Structure

- **Framework**: Expo (Managed Workflow) with Expo Router.
- **Navigation**: File-based routing in `src/app`.
  - `_layout.tsx`: Root layout, handles providers (Session, Fonts) and Splash Screen.
  - `(group)/`: Route groups for organization (e.g., `(home)`).
- **State Management**:
  - **Auth**: `SessionProvider` in `src/lib/auth/context.tsx` manages user session.
  - **Hooks**: Custom hooks in `src/hooks` (e.g., `useSession`, `useStorageState`).
- **Path Aliases**: Configured in `tsconfig.json`. Use these aliases instead of relative paths:
  - `@components/*` -> `src/components/*`
  - `@ui/*` -> `src/components/ui/*`
  - `@hooks/*` -> `src/hooks/*`
  - `@lib/*` -> `src/lib/*`
  - `@assets/*` -> `src/assets/*`

## 🎨 Styling & UI

- **Theming**:
  - Use custom "Themed" components from `@ui/*` (e.g., `ThemedText`, `ThemedView`) which automatically handle light/dark mode using `useTheme`.
  - Colors are defined in `src/lib/theme.ts`.
  - **Fonts**: `WorkSans` is the primary font family.
- **NativeWind**: Configured (v5) but currently experimental. Prefer using the established `Themed*` components or standard React Native styles with the `Colors` object until NativeWind is fully adopted.

## 🔐 Authentication

- **Flow**:
  - `SessionProvider` wraps the app in `src/app/_layout.tsx`.
  - Use `useSession()` hook to access `signIn`, `signOut`, and `session` data.
  - Protected routes should check for `session` and redirect if necessary.

## 🛠 Development Workflow

- **Package Manager**: `pnpm`
- **Scripts**:
  - `pnpm start`: Start the Expo development server.
  - `pnpm android` / `pnpm ios`: Run on simulators/devices.
- **Linting**: Run `biome check` for linting and formatting.

## 📝 Coding Conventions

- **Imports**: Always use path aliases (`@/*`).
- **Components**: Functional components with TypeScript interfaces for props.
- **File Naming**: Kebab-case for files (e.g., `use-session.ts`, `themed-text.tsx`).
- **Expo Router**: Follow Expo Router conventions for special files (`_layout.tsx`, `+not-found.tsx`, etc.).

## 🔍 Key Files

- `src/app/_layout.tsx`: App entry point, global providers.
- `src/lib/auth/context.tsx`: Authentication logic and state.
- `src/lib/theme.ts`: Color palette definitions.
- `src/components/ui/`: Reusable UI components.
