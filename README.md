# @pamfilico/design-core

The company **component** design system for Pamfilico apps.

**It contains components only.** It ships no theme, tokens, palette, fonts or logos.
Every component reads the host app's MUI theme (`palette.primary`, `text.secondary`,
`divider`, `background.default`, …). Drop the same component into CarFast or
TravelSuite and it takes on that app's brand. Brand, logos and assets belong to
each app's own design system, which sits on top of this one.

## Rules

1. **Components only.** No `createTheme`, no color values, no fonts, no logos in `src/`.
2. **Strings are props.** Components never call `useTranslations`; the app passes
   translated text in. This keeps the library free of next-intl and usable anywhere.
3. **Generic only.** A component comes in when two or more apps use it, or will.
   App-specific widgets stay in the app.
4. **Presentational.** No data fetching, no auth wiring, no API calls; callbacks out.

## Install

Installed from GitHub by tag (it is **not** published to npm):

```bash
npm install github:pamfilico/design-core#v0.2.1
```

`dist/` is committed at each release tag, so the install builds nothing and
pulls no devDependencies.

### Peer dependencies

Provided by the host app:

| package | range |
|---|---|
| `react`, `react-dom` | `>=19` |
| `@mui/material` | `^7.3.0` |
| `@emotion/react`, `@emotion/styled` | `>=11` |
| `@react-email/components` | `^1` (optional; only for email components) |
| `@react-email/render` | `^2` (optional) |

## Work on it

```bash
npm install
npm run storybook        # http://localhost:6099
npm run dev              # Next playground: http://localhost:3099/en and /el
npm run typecheck
npm run build            # dist/ (stories excluded)
```

You should see Storybook list `Design Core/Auth/AuthCard`. Use the **Locale** and
**Mode** toolbar buttons to switch between English and Greek, and between light and dark.

| Where | What |
|---|---|
| `src/` | The library. One folder per group (`auth/`, …), stories next to components. |
| `.storybook/` | Storybook 10 (`@storybook/nextjs-vite`). The stock MUI theme in light/dark and the en/el next-intl provider are test harnesses only. |
| `playground/` | A real Next 16 App Router app with next-intl (`[locale]` routing, `proxy.ts`). It imports `@pamfilico/design-core` straight from `src/`. |
| `playground/messages/` | `en.json` and `el.json`, which both Storybook and the playground read. |
| `emails/` | Previews for `npm run email:dev` (react-email CLI, port 3098). |

## Release

1. Add a `## vX.Y.Z` entry to `CHANGELOG.md`.
2. Run `npm run release -- patch` (or `minor`, `major`, `X.Y.Z`).
3. Push the commit and the tag. The script prints the exact commands.

Tags are **lightweight** `vX.Y.Z`, the codespec convention.

## Claude Design

`./claudeRun.sh` starts Claude Code in this folder. Run `/design-sync` there to push
the components into the company design system project in Claude Design.

## Components

### `AuthCard`

A presentational authentication card. It owns the email/password field state and
calls `onSubmit` — it does **no** auth wiring, so you keep `next-auth`/`signIn`
in your app. Compose sign-in, sign-up, magic-link, and OAuth flows from the same
card via props.

```tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { AuthCard, AuthScreen } from "@pamfilico/design-core";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <AuthScreen>
      <AuthCard
        title="Sign in"
        subtitle="Welcome back"
        loading={loading}
        error={error}
        notice={sent ? { severity: "success", message: "Check your inbox for the magic link." } : null}
        noticeReplacesForm={sent}
        submitLabel="Send magic link"
        onSubmit={async ({ email }) => {
          setLoading(true);
          setError(null);
          const res = await signIn("email", { email, redirect: false });
          setLoading(false);
          if (res?.error) setError("Something went wrong. Try again.");
          else setSent(true);
        }}
        providers={[
          { id: "google", label: "Continue with Google", disabled: true },
          { id: "github", label: "Continue with GitHub", disabled: true },
        ]}
        providersLabel="coming soon"
        footer={
          <span>
            Don&apos;t have an account? <a href="/auth/signup">Sign up</a>
          </span>
        }
      />
    </AuthScreen>
  );
}
```

The submit button uses `variant="contained" color="primary"`, so its color is
your theme's primary. To re-brand, change the theme — not this component.

#### Props (summary)

| Prop                 | Description                                              |
| -------------------- | ------------------------------------------------------- |
| `title` / `subtitle` | Heading text.                                           |
| `logo`               | Optional brand node above the title.                    |
| `onSubmit`           | `({ email, password? }) => void \| Promise<void>`.      |
| `withPassword`       | Add a password field (default `false`).                 |
| `loading`            | Disables inputs, shows a spinner.                       |
| `error`              | Error banner above the form.                            |
| `notice`            | `{ severity, message }` banner; success/info/etc.       |
| `noticeReplacesForm` | Hide the form and show only the notice (e.g. sent).     |
| `submitLabel` / `submitIcon` | Submit button content.                          |
| `providers`          | OAuth/3rd-party buttons below a divider.                |
| `providersLabel`     | Divider chip label (e.g. `"or"`, `"coming soon"`).      |
| `footer`             | Footer node (links).                                    |

### `AuthScreen`

Full-height layout that centers an `AuthCard` over `background.default`.

## Versions it is built against

Next ^16.3, React ^19.2, MUI ^7.3, next-intl ^4.14, Storybook ^10.6, react-email
components ^1 and render ^2. These are the versions most Pamfilico apps run.
