import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import { Sidebar18, type Sidebar18Item } from "./Sidebar18";

type Locale = "en" | "el";

const text = {
  en: {
    strings: { title: "Administration", logoutLabel: "Logout", drawerTitle: "Admin Panel", openNavLabel: "open navigation" },
    dashboard: "Dashboard", users: "Users", events: "Events", invoices: "Invoices", settings: "Settings",
  },
  el: {
    strings: { title: "Διαχείριση", logoutLabel: "Αποσύνδεση", drawerTitle: "Πίνακας διαχείρισης", openNavLabel: "άνοιγμα πλοήγησης" },
    dashboard: "Πίνακας ελέγχου", users: "Χρήστες", events: "Εκδηλώσεις", invoices: "Τιμολόγια", settings: "Ρυθμίσεις",
  },
};

function items(locale: Locale): Sidebar18Item[] {
  const t = text[locale];
  return [
    { key: "dashboard", label: t.dashboard, href: "/admin", icon: <DashboardIcon /> },
    { key: "users", label: t.users, href: "/admin/users", icon: <PeopleIcon /> },
    { key: "events", label: t.events, href: "/admin/events", icon: <EventIcon /> },
    { key: "invoices", label: t.invoices, href: "/admin/invoices", icon: <ReceiptIcon /> },
    { key: "settings", label: t.settings, href: "/admin/settings", icon: <SettingsIcon /> },
  ];
}

const meta = {
  title: "Design Core/Sidebars/Sidebar18",
  component: Sidebar18,
  args: {
    title: text.en.strings.title,
    username: "Jane Doe",
    onLogout: () => {},
    items: items("en"),
    activeHref: "/admin/users",
    onNavigate: () => {},
  },
} satisfies Meta<typeof Sidebar18>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return <Sidebar18 {...args} {...text[locale].strings} items={items(locale)} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Drawer open on first render. */
export const DrawerOpen: Story = { ...English, args: { defaultOpen: true } };
