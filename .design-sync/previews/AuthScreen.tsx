// Owned preview: mirrors .storybook/preview.tsx's decorator per story — the
// story's `globals.locale` picks the next-intl messages and `globals.mode` the
// stock MUI light/dark theme (the generated wrapper passes globals: {}).
import * as React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import en from '@ds-stories/playground/messages/en.json';
import el from '@ds-stories/playground/messages/el.json';
import * as S from "@ds-stories/src/auth/AuthScreen.stories";

const themes: any = {
  light: createTheme({ palette: { mode: 'light' } }),
  dark: createTheme({ palette: { mode: 'dark' } }),
};
const messages: any = { en, el };

function compose(S: any, key: string) {
  const meta: any = S.default ?? {};
  const st: any = S[key];
  const args: any = { ...(meta.args ?? {}), ...(st && st.args ? st.args : {}) };
  const globals: any = { locale: 'en', mode: 'light', ...(meta.globals ?? {}), ...(st && st.globals ? st.globals : {}) };
  const ctx: any = { args, name: key, title: meta.title ?? '', globals, viewMode: 'story', parameters: (st && st.parameters) ?? meta.parameters ?? {} };
  let render: () => any;
  if (st && typeof st.render === 'function') render = () => st.render(args, ctx);
  else render = () => React.createElement(meta.component, args);
  return function Story() {
    return (
      <NextIntlClientProvider locale={globals.locale} messages={messages[globals.locale]} timeZone="Europe/Athens">
        <ThemeProvider theme={themes[globals.mode]}>
          <CssBaseline />
          {render()}
        </ThemeProvider>
      </NextIntlClientProvider>
    );
  };
}

export const English = compose(S, "English");
export const Greek = compose(S, "Greek");
export const Dark = compose(S, "Dark");
