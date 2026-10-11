# design-sync notes: @pamfilico/design-core

Target project: "Pamfilico Design Core" (`84594364-e919-451b-88be-031bc7bb4e92`). Shape: storybook (`.storybook/`).

## Setup / fixes

- [GENERAL] The decorators bundled from `.storybook/preview.tsx` crashed every preview with "Element type is invalid" inside
  `CssBaseline`. Root cause: the converter's decorator React shim exports `Fragment: undefined`, and the
  decorator bundle also carries its OWN copy of MUI and next-intl, so its ThemeProvider could never theme the bundle's
  components. Fix: `cfg.provider` = `ThemeProvider theme={$ref dsPreviewTheme}`. Setting it disables decorator bundling.
- [GENERAL] `cfg.extraEntries` puts `@mui/material` on `window.PamfilicoDesignCore`, so stories, previews and the design
  agent all share the bundle's single MUI/emotion instance. Story imports of `@mui/material/<X>` shim to it. The
  bundle grows from about 0.75 MB to 1.9 MB.
- `./.design-sync/preview-theme.ts` (extraEntries) exports `dsPreviewTheme`, the stock MUI light theme, which is
  needed only as the provider `$ref`. It is not a brand theme, and no theme exists in `src/`.
- Stories select locale and dark mode through story `globals` (`locale`, `mode`). The generated wrapper passes `globals: {}`,
  so both previews are OWNED (`.design-sync/previews/AuthCard.tsx`, `AuthScreen.tsx`): a generic `compose`
  that reads `st.globals` and wraps each story in NextIntlClientProvider (messages from `playground/messages/*.json`)
  + ThemeProvider(light|dark) + CssBaseline, mirroring the storybook decorator.
- `AuthScreen` is full-page (100dvh), so its card uses `overrides.AuthScreen.cardMode: "single"` and `primaryStory: "English"`.
- AuthCard has 8 stories, above compare's default 6-story cap. Capture it with `--max-stories 8`.
- Fonts: the DS ships none (brand lives in each app). MUI's Roboto stack falls back to Helvetica in both storybook and
  the previews. This is expected, not a [FONT_MISSING] to fix here.

## Re-sync risks

- The owned previews hardcode each story's export list. A NEW story export needs a `compose(S, "<Name>")` line added,
  or it shows as `unpaired`.
- The owned previews duplicate the storybook decorator (locale, timeZone, light/dark stock themes). If
  `.storybook/preview.tsx` changes, mirror the change there.
- `next` is pinned `~16.3.8` for Storybook 10.6.1 (see CLAUDE.md). Rebuild sb-reference after any Storybook upgrade.
- When a new story's `globals` key is not `locale`/`mode`, the owned compose ignores it.
