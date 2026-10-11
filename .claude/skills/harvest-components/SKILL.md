---
name: harvest-components
description: Explore ~/Programming for reusable UI (headers, sidebars, footers, dialogs, tables, forms, empty states…) and COPY each one into @pamfilico/design-core as a NEUTRAL, numbered component (src/headers/Header07.tsx, src/sidebars/Sidebar03.tsx…) — no app names, no logos, no themes, strings and data as props — with en/el/dark Storybook stories. Never moves or edits the originals. Use for "find components in my apps", "harvest sidebars/headers/footers/dialogs from Programming", "add this app's header to the design system", "what components could go in the design system".
---

# Harvest components into design-core

`@pamfilico/design-core` (`~/Programming/codespec/packages/design-core`) is a simple package installed from
GitHub (`github:pamfilico/design-core#vX.Y.Z`). This skill adds **neutral copies** of the UI the apps already
have: one numbered component per distinct design, in `src/<kind>s/`.

## The user's rules (non-negotiable)

1. **Copy, never move.** Never write in the source repo.
2. **No app, product, company or client names** anywhere in design-core: not in files, components, comments,
   strings, story titles, mock data or URLs. Use generic words like Home, Dashboard and Settings, and demo
   data like "Jane Doe" and jane@example.com.
3. **Numbered names by kind:** `Header01`, `Sidebar01`, `Footer01`, `Dialog01`… Continue from the highest
   number that already exists in that folder.
4. **No underscore files or folders** (`_deps`, `_mocks`…). It's flat and simple: `src/<kind>s/<Name>.tsx`
   plus `src/<kind>s/<Name>.stories.tsx`.
5. **Keep the look and structure** (layout, MUI components, variants, responsive behaviour). Don't redesign.
   But make it self-contained:
   - Imports are limited to `react`, `@mui/material/*`, `@mui/icons-material/*` and relative `src/` files.
   - Everything app-specific becomes a prop: strings, logo (`logo?: ReactNode`), nav items, user, callbacks,
     active path, and `linkComponent` (defaults to `"a"`) where the original used `next/link`.
   - No brand colours: use theme keys (`primary.main`, `text.secondary`, `divider`…). No themes, no fonts.
6. **De-duplicate.** Identical designs, or ones that differ only in names, colours or strings, become one
   component. Skip work-client repos (`~/Programming/work/`), landing pages and routing-only layouts.
7. **Provenance is private.** Record `- Header07 ← <original path>` in `.sources/<kind>s.md`. That folder
   is gitignored, and it's the only place app names or paths may appear.

## Steps

1. **Find candidates.** List the frontends, then fan out with Explore agents per kind (up to 3):
   ```bash
   find ~/Programming -maxdepth 6 -name package.json -not -path '*/node_modules/*' \
     -exec grep -l '"next"' {} \; | grep -vE 'legacy|references|temp|docs/submodules|/work/'
   ```
   Then grep for `*Header*`, `*Sidebar*`, `*Drawer*`, `*Footer*`, `Dialog`, `DataGrid` and similar.
   Read `.sources/*.md` first so you don't re-copy a source that's already done.
2. **Show the user a short list** grouped by kind, with one generic line per candidate (and the source path,
   since it's only in chat). Let them pick. Never harvest everything unasked.
3. **Write each component and its stories.** Match `src/auth/AuthCard.tsx` and `AuthCard.stories.tsx`:
   - Title: `Design Core/<Kind>s/<Name>`.
   - Exports: `English`, `Greek` and `Dark`, plus real states (SignedIn, Mobile, Collapsed…).
   - Strings live in the story as `{ en: {...}, el: {...} }`, picked by `globals.locale`. Don't use next-intl.
   - The logo is a neutral placeholder.
4. **Export it.** Add it to `src/<kind>s/index.ts` and make sure `src/index.ts` re-exports that barrel.
   Write relative imports with `.tsx`/`.ts` extensions.
5. **Verify:**
   ```bash
   cd ~/Programming/codespec/packages/design-core
   npm run typecheck && npm run build && npm run build-storybook
   grep -rniE "<every app name you copied from>" src/ && echo "LEAK: fix it"
   ```
   Then open `npm run storybook` (port 6099) and check each new story in en, el and dark.
6. **Release** when the user asks: add a CHANGELOG entry, run `npm run release -- minor`, push the commit and
   tag, then `./claudeRun.sh` and `/design-sync`.
