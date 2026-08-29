# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

# Shopflow

## Tech stack

- Expo SDK 54, React Native, TypeScript, Expo Router.
- Use Expo Router for navigation. Do not add React Navigation navigators directly.
- Read the Expo SDK 54 docs before adding or changing Expo-specific code:
  https://docs.expo.dev/versions/v54.0.0/

## Project structure

- `app/` contains routes and layouts only.
- `components/` contains reusable UI components.
- `components/home/` contains Home-screen-specific components.
- `data/` contains local mock data.
- `types/` contains shared TypeScript types.
- `utils/` contains pure helper functions.

## Code conventions

- Use TypeScript; do not use `any`.
- Keep components small and focused.
- Use named exports for reusable components and default exports for route screens.
- Prefer `StyleSheet.create()` for styles.
- Keep product/category data typed using the types in `types/`.
- Use typed Expo Router navigation for dynamic routes:
  `router.push({ pathname: "/products/[id]", params: { id } })`.

## Quality checks

Run these after relevant changes:

```bash
npx tsc --noEmit
npm run lint

I will ask you in English Language, But, always anaswer in  Myanmar Lanaguage.
```
