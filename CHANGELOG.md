# Changelog

## v0.3.0 — 2026-10-11

- 48 headers (`Header01`–`Header48`), 22 sidebars (`Sidebar01`–`Sidebar22`) and 8 footers
  (`Footer01`–`Footer08`). These are neutral, numbered copies of the designs our apps use: no app names,
  logos or colours, with strings, logo, nav items, user and callbacks as props. They have no Next.js
  dependency (`linkComponent` defaults to `"a"`). Every one has English, Greek and Dark stories.
- `@mui/icons-material` ^7.3 is an optional peer.
- `harvest-components` skill (`.claude/skills/`) for adding more from other repos.
- README marks the package as under active development.

## v0.2.2 — 2026-10-11

- Source imports use `.tsx` extensions; `tsc` rewrites them to `.js` in `dist/`
  (`rewriteRelativeImportExtensions`). v0.2.1's `.js` imports broke the Next playground,
  because Turbopack does not map `.js` to `.tsx` when importing source files.

## v0.2.1 — 2026-10-11

- `dist/` relative imports carry `.js` extensions, so it also loads in plain Node ESM
  (vitest, scripts), not only through bundlers.

## v0.2.0 — 2026-10-11

- Repositioned as the company **component** design system: components only, no
  themes, tokens, fonts or logos.
- Storybook 10 (`@storybook/nextjs-vite`) on port 6099 with locale (en/el) and
  light/dark toolbars over the stock MUI theme; stories for `AuthCard` and `AuthScreen`.
- Next 16 + next-intl playground (`npm run dev`, port 3099) importing the library from `src/`.
- react-email wired as optional peers plus `.storybook/EmailPreview.tsx` and an `emails/` preview dir.
- Peers narrowed to React >=19 and MUI ^7.3.
- `dist/` is now committed on release and `prepare` is gone, so git installs pull no devDependencies.
  Install with `github:pamfilico/design-core#v0.2.0`.
- `next` pinned to `~16.3.8` (dev only): Next 16.4 changed the router context, and
  Storybook 10.6.1's Next mock crashes on it (`useRouter` → reading `data`). Lift the pin once Storybook supports 16.4.
- `claudeRun.sh` for running `/design-sync` from this package.

## v0.1.0

- `AuthCard` and `AuthScreen`.
