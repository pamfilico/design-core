import * as React from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import en from "../playground/messages/en.json";
import el from "../playground/messages/el.json";

// Stock MUI theme, light or dark. This is a test harness, not a theme we ship:
// it only proves a component follows whatever theme the host app provides.
const themes = {
  light: createTheme({ palette: { mode: "light" } }),
  dark: createTheme({ palette: { mode: "dark" } }),
};
const messages = { en, el };

const preview: Preview = {
  globalTypes: {
    locale: {
      description: "Locale",
      toolbar: {
        title: "Locale",
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "el", title: "Ελληνικά" },
        ],
        dynamicTitle: true,
      },
    },
    mode: {
      description: "Light / dark (stock MUI theme)",
      toolbar: {
        title: "Mode",
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { locale: "en", mode: "light" },
  decorators: [
    (Story, context) => {
      const locale = (context.globals.locale ?? "en") as keyof typeof messages;
      const mode = (context.globals.mode ?? "light") as keyof typeof themes;
      return (
        <NextIntlClientProvider
          locale={locale}
          messages={messages[locale]}
          timeZone="Europe/Athens"
        >
          <ThemeProvider theme={themes[mode]}>
            <CssBaseline />
            <Story />
          </ThemeProvider>
        </NextIntlClientProvider>
      );
    },
  ],
  parameters: {
    layout: "fullscreen",
    nextjs: { appDirectory: true },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: "todo" },
  },
};

export default preview;
