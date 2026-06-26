# @pamfilico/design-core

Shared, **theme-driven** design-system components used across Pamfilico apps.

The components are brand-agnostic: they carry no hardcoded colors and are styled
entirely by the host app's MUI theme (`palette.primary`, `text.secondary`,
`divider`, `background.default`, …). Drop the same component into any app and it
brands itself from that app's theme.

## Install

This package is installed straight from GitHub (it is **not** published to npm):

```bash
npm install github:pamfilico/design-core
```

It ships TypeScript sources and builds itself on install (`prepare` → `tsc`),
so the consuming app gets `dist/` with types.

### Peer dependencies

Provided by the host app (not bundled):

- `react >= 18`
- `@mui/material >= 5`
- `@emotion/react >= 11`
- `@emotion/styled >= 11`

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

## Build

```bash
npm run build   # tsc → dist/
```
