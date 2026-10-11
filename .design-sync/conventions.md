# Pamfilico design-core: conventions

**What this is.** These are brand-agnostic, presentational Pamfilico components built on **MUI v7**
(Material UI). They ship **no theme, no tokens, no fonts and no CSS classes**: every color, radius and
font comes from the MUI theme that the host app provides. The whole of `@mui/material` is also
on the same global, from the **same MUI instance**, so lay out your screens with real MUI
primitives. Never write raw CSS or invent class names.

## Setup: always wrap in ThemeProvider

Components read `palette.*`, `typography.*` and `shape.*` from MUI's theme context. Build a theme with
`createTheme` and wrap the whole tree. Add `CssBaseline` for the page background and font reset.
Take `ThemeProvider`, `createTheme` and `CssBaseline` from `window.PamfilicoDesignCore`, **never
from another MUI copy**: a second MUI instance has its own theme context and silently drops the theme.

```jsx
const { ThemeProvider, createTheme, CssBaseline, AuthScreen, AuthCard, Link } = window.PamfilicoDesignCore;
const theme = createTheme({ palette: { mode: "light", primary: { main: "#1976d2" } } });

<ThemeProvider theme={theme}>
  <CssBaseline />
  <AuthScreen>
    <AuthCard
      title="Sign in"
      subtitle="Welcome back"
      emailLabel="Email address"
      emailPlaceholder="you@example.com"
      submitLabel="Send magic link"
      providersLabel="or"
      providers={[{ id: "google", label: "Continue with Google" }]}
      footer={<Link href="#">Don't have an account? Sign up</Link>}
      onSubmit={({ email }) => {}}
    />
  </AuthScreen>
</ThemeProvider>
```

- **Dark mode:** `createTheme({ palette: { mode: "dark" } })`. Components adapt with no prop changes.
- **Branding** means changing the theme (`palette.primary.main`, `typography.fontFamily`,
  `shape.borderRadius`), never the component props. MUI's default font stack is Roboto. Load a
  webfont yourself if the design needs one.
- `dsPreviewTheme` on the global is the stock light theme used for the preview cards. It is fine
  for a quick mock, but a real design should create its own theme.

## Styling idiom: MUI props + `sx` with theme keys

- Layout: `Box`, `Stack` (`direction`, `spacing`), `Container`, `Grid`, `Paper`, `Divider`.
- Text: `Typography` with `variant` (`h4`, `h6`, `body1`, `body2`, `caption`, `overline`) and
  `color="text.secondary"`.
- Controls: `Button` (`variant="contained|outlined|text"`), `TextField`, `Alert`, `Chip`, `Link`.
- `sx` values must be theme keys, not hex: `bgcolor: "background.paper"`, `color: "primary.main"`,
  `borderColor: "divider"`, spacing numbers (`p: 2`, `gap: 1` = 8px units).

## Content is props

Components contain **no built-in copy and no i18n**. Pass every visible string (titles, labels,
button text, notices) as a prop, in the language the design needs (for example Greek:
`title="Σύνδεση"`). They do no fetching and no auth; wire `onSubmit` and `providers[].onClick` to the
design's own handlers.

## Components

- `AuthScreen`: full-height (`100dvh`) centered page on `background.default`, with `header` and
  `footer` slots. Put one `AuthCard` inside it.
- `AuthCard`: sign-in or sign-up card. The magic-link email form is the default; add
  `withPassword` for a password form. Other props: `loading`, `error`,
  `notice={{severity, message}}` with `noticeReplacesForm`, `providers` and `providersLabel`,
  `logo`, `footer`, `maxWidth` (default 440).

Read `components/auth/<Name>/<Name>.prompt.md` and `<Name>.d.ts` for the exact props.
