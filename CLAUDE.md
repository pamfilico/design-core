# design-core: instructions for Claude

This is the company **component** design system (`@pamfilico/design-core`). Read
README.md "Rules" first. In short:

- **Components only.** Never add a theme, `createTheme`, tokens, hex colors, fonts or
  logos to `src/`. Style only through the MUI theme (`sx` with theme keys such as
  `primary.main`, `text.secondary`, `divider`). Brand lives in each app's own design system.
- **Strings are props.** No `useTranslations` inside `src/` components (stories may use it).
- **Generic, presentational.** No fetching, no auth, no app imports. A component used
  by only one app does not belong here.

## Adding a component

1. `src/<group>/<Name>.tsx`, marked `"use client"` if it uses state or effects, with a
   named export and exported `<Name>Props`.
2. Export it and its types from `src/index.ts`. Write relative imports with the real
   extension (`./auth/AuthCard.tsx`); `tsc` rewrites them to `.js` in `dist/`.
3. `src/<group>/<Name>.stories.tsx` with title `Design Core/<Group>/<Name>` and at
   least `English`, `Greek` and `Dark` stories. Put the strings in
   `playground/messages/{en,el}.json` under a `<Name>` namespace.
4. Optionally show it on the playground page (`playground/app/[locale]/page.tsx`).
5. Run `npm run typecheck && npm run build && npm run build-storybook`.

## Email components

Put them in `src/email/`, built from `@react-email/components`, which is an optional
peer. Preview them in stories with `.storybook/EmailPreview.tsx`, and in `emails/`
for `npm run email:dev`.

## Releasing

Follow README "Release". Tags are lightweight `vX.Y.Z`, and `dist/` is committed
by the release script. Never add a `prepare` script back: it would make every
consumer's git install download Next and Storybook.

## Design sync

Start Claude with `./claudeRun.sh` and run `/design-sync`. The stories are the source
of the preview cards. Change components here in code; never edit them in Claude Design.

## Known pin

`next` is pinned to `~16.3.8`. Next 16.4 breaks Storybook 10.6.1's `nextjs-vite` router mock
("Cannot read properties of undefined (reading 'data')" in `useRouter`). Re-test before lifting it.
