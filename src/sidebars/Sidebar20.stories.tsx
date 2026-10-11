import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import InventoryIcon from "@mui/icons-material/Inventory";
import EventIcon from "@mui/icons-material/Event";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WebIcon from "@mui/icons-material/Web";
import SettingsIcon from "@mui/icons-material/Settings";
import WarningIcon from "@mui/icons-material/Warning";
import { Sidebar20, type Sidebar20Item } from "./Sidebar20";

type Locale = "en" | "el";

const text = {
  en: {
    profile: "Profile", setup: "Setup", items: "Items", events: "Events", invoices: "Invoices",
    website: "Website", settings: "Settings", danger: "Danger zone", page: "Page content",
  },
  el: {
    profile: "Προφίλ", setup: "Ρύθμιση", items: "Είδη", events: "Εκδηλώσεις", invoices: "Τιμολόγια",
    website: "Ιστότοπος", settings: "Ρυθμίσεις", danger: "Επικίνδυνη ζώνη", page: "Περιεχόμενο σελίδας",
  },
};

function items(locale: Locale): Sidebar20Item[] {
  const t = text[locale];
  return [
    { key: "profile", label: t.profile, href: "/admin/user/profile", icon: <PersonIcon /> },
    { key: "setup", label: t.setup, href: "/admin/user/setup", icon: <BuildIcon /> },
    { key: "items", label: t.items, href: "/admin/user/items", icon: <InventoryIcon /> },
    { key: "events", label: t.events, href: "/admin/user/events", icon: <EventIcon />, dividerAfter: true },
    { key: "invoices", label: t.invoices, href: "/admin/user/invoices", icon: <ReceiptIcon /> },
    { key: "website", label: t.website, href: "/admin/user/website", icon: <WebIcon />, dividerAfter: true },
    { key: "settings", label: t.settings, href: "/admin/user/settings", icon: <SettingsIcon />, dividerAfter: true },
    { key: "danger", label: t.danger, href: "/admin/user/danger", icon: <WarningIcon />, danger: true },
  ];
}

const meta = {
  title: "Design Core/Sidebars/Sidebar20",
  component: Sidebar20,
  args: { items: items("en"), activeHref: "/admin/user/items", onNavigate: () => {} },
} satisfies Meta<typeof Sidebar20>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return (
      <Box sx={{ display: "flex", gap: 2, p: 2, minHeight: "100vh" }}>
        <Sidebar20 {...args} items={items(locale)} />
        <Box sx={{ flex: 1 }}>
          <Typography variant="overline" color="text.secondary">{text[locale].page}</Typography>
          <Box sx={{ mt: 1, height: 160, borderRadius: 2, border: "1px dashed", borderColor: "divider" }} />
        </Box>
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** The destructive item active: filled with the error colour. */
export const DangerActive: Story = { ...English, args: { activeHref: "/admin/user/danger" } };
