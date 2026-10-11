import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import SellIcon from "@mui/icons-material/Sell";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";
import LanguageIcon from "@mui/icons-material/Language";
import { Sidebar21, type Sidebar21Action } from "./Sidebar21";

type Locale = "en" | "el";

const text = {
  en: { home: "Home", features: "Features", pricing: "Pricing", contact: "Contact", signIn: "Sign in", language: "Ελληνικά", menuLabel: "menu" },
  el: { home: "Αρχική", features: "Χαρακτηριστικά", pricing: "Τιμές", contact: "Επικοινωνία", signIn: "Σύνδεση", language: "English", menuLabel: "μενού" },
};

function items(locale: Locale): Sidebar21Action[] {
  const t = text[locale];
  return [
    { key: "home", label: t.home, icon: <HomeIcon fontSize="small" />, onClick: () => {} },
    { key: "features", label: t.features, icon: <StarIcon fontSize="small" />, onClick: () => {} },
    { key: "pricing", label: t.pricing, icon: <SellIcon fontSize="small" />, onClick: () => {} },
    { key: "contact", label: t.contact, icon: <MailIcon fontSize="small" />, onClick: () => {} },
    { key: "sign-in", label: t.signIn, icon: <LoginIcon fontSize="small" />, onClick: () => {} },
  ];
}

const meta = {
  title: "Design Core/Sidebars/Sidebar21",
  component: Sidebar21,
  args: { items: items("en") },
} satisfies Meta<typeof Sidebar21>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    const t = text[locale];
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Sidebar21
            {...args}
            items={items(locale)}
            menuLabel={t.menuLabel}
            footerSlot={
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <LanguageIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={t.language} />
              </ListItemButton>
            }
          />
          <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: "primary.main", ml: 1 }} />
          <Typography fontWeight={700} sx={{ ml: 1 }}>Logo</Typography>
        </Toolbar>
      </AppBar>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Drawer open on first render. */
export const Open: Story = { ...English, args: { defaultOpen: true } };

export const Mobile: Story = { ...Open, parameters: { viewport: { defaultViewport: "mobile1" } } };
