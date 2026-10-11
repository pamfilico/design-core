import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import SellIcon from "@mui/icons-material/Sell";
import HelpIcon from "@mui/icons-material/Help";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";
import { Sidebar22, type Sidebar22Action } from "./Sidebar22";

type Locale = "en" | "el";

const text = {
  en: { home: "Home", features: "Features", pricing: "Pricing", faq: "FAQ", contact: "Contact", signIn: "Sign in", menuLabel: "open navigation menu" },
  el: { home: "Αρχική", features: "Χαρακτηριστικά", pricing: "Τιμές", faq: "Συχνές ερωτήσεις", contact: "Επικοινωνία", signIn: "Σύνδεση", menuLabel: "άνοιγμα μενού πλοήγησης" },
};

function items(locale: Locale): Sidebar22Action[] {
  const t = text[locale];
  return [
    { key: "home", label: t.home, icon: <HomeIcon />, onClick: () => {} },
    { key: "features", label: t.features, icon: <StarIcon />, onClick: () => {} },
    { key: "pricing", label: t.pricing, icon: <SellIcon />, onClick: () => {} },
    { key: "faq", label: t.faq, icon: <HelpIcon />, onClick: () => {} },
    { key: "contact", label: t.contact, icon: <MailIcon />, onClick: () => {} },
    { key: "sign-in", label: t.signIn, icon: <LoginIcon />, onClick: () => {} },
  ];
}

const meta = {
  title: "Design Core/Sidebars/Sidebar22",
  component: Sidebar22,
  args: { items: items("en") },
} satisfies Meta<typeof Sidebar22>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: "primary.main" }} />
          <Typography fontWeight={700} sx={{ ml: 1, flexGrow: 1 }}>Logo</Typography>
          <Sidebar22 {...args} items={items(locale)} menuLabel={text[locale].menuLabel} />
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
