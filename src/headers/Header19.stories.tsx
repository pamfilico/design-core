import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Dashboard from "@mui/icons-material/Dashboard";
import EventNote from "@mui/icons-material/EventNote";
import Add from "@mui/icons-material/Add";
import Timeline from "@mui/icons-material/Timeline";
import Forum from "@mui/icons-material/Forum";
import Inventory from "@mui/icons-material/Inventory";
import Category from "@mui/icons-material/Category";
import AccountBalance from "@mui/icons-material/AccountBalance";
import Receipt from "@mui/icons-material/Receipt";
import People from "@mui/icons-material/People";
import Gavel from "@mui/icons-material/Gavel";
import AttachMoney from "@mui/icons-material/AttachMoney";
import HelpOutline from "@mui/icons-material/HelpOutline";
import Settings from "@mui/icons-material/Settings";
import { Header19, type Header19Item } from "./Header19";

const text = {
  en: {
    dashboard: "Dashboard", entries: "Entries", add: "New entry", timeline: "Timeline", messages: "Messages",
    catalog: "Catalog", items: "Items", groups: "Groups", finance: "Finance", invoices: "Invoices",
    people: "People", customers: "Customers", legal: "Legal", billing: "Billing", help: "Help", settings: "Settings",
    signOut: "Sign out", language: "Change language", menu: "Menu", close: "Close drawer",
  },
  el: {
    dashboard: "Πίνακας ελέγχου", entries: "Καταχωρίσεις", add: "Νέα καταχώριση", timeline: "Χρονολόγιο", messages: "Μηνύματα",
    catalog: "Κατάλογος", items: "Είδη", groups: "Ομάδες", finance: "Οικονομικά", invoices: "Τιμολόγια",
    people: "Άτομα", customers: "Πελάτες", legal: "Νομικά", billing: "Χρεώσεις", help: "Βοήθεια", settings: "Ρυθμίσεις",
    signOut: "Αποσύνδεση", language: "Αλλαγή γλώσσας", menu: "Μενού", close: "Κλείσιμο",
  },
};
type L = keyof typeof text;

function items(l: L): Header19Item[] {
  const t = text[l];
  return [
    { label: t.dashboard, icon: <Dashboard />, href: "/dashboard", active: true },
    {
      label: t.entries,
      icon: <EventNote />,
      href: "/entries",
      children: [
        { label: t.add, icon: <Add />, href: "/entries/add" },
        { label: t.timeline, icon: <Timeline />, href: "/entries/timeline" },
      ],
    },
    { label: t.messages, icon: <Forum />, href: "/messages", badge: 3 },
    {
      label: t.catalog,
      icon: <Inventory />,
      href: "/items",
      children: [
        { label: t.items, icon: <Inventory />, href: "/items" },
        { label: t.groups, icon: <Category />, href: "/groups" },
      ],
    },
    { label: t.finance, icon: <AccountBalance />, href: "/finance", children: [{ label: t.invoices, icon: <Receipt />, href: "/invoices" }] },
    { label: t.people, icon: <People />, href: "/customers", children: [{ label: t.customers, icon: <People />, href: "/customers" }] },
    { label: t.legal, icon: <Gavel />, href: "/legal" },
  ];
}

function bottom(l: L): Header19Item[] {
  const t = text[l];
  return [
    { label: t.billing, icon: <AttachMoney />, href: "/billing" },
    { label: t.help, icon: <HelpOutline />, href: "/help" },
    { label: t.settings, icon: <Settings />, href: "/settings" },
  ];
}

const locales = [
  { value: "en", label: "EN" },
  { value: "el", label: "EL" },
];

export function header19Menu(l: L) {
  const t = text[l];
  return (
    <Header19
      items={items(l)}
      bottomItems={bottom(l)}
      onNavigate={() => {}}
      locales={locales}
      locale={l}
      localeLabel={t.language}
      onSignOut={() => {}}
      signOutLabel={t.signOut}
      menuLabel={t.menu}
      closeLabel={t.close}
    />
  );
}

const meta = {
  title: "Design Core/Headers/Header19",
  excludeStories: ["header19Menu"],
  component: Header19,
  parameters: { layout: "fullscreen" },
  args: { items: [] },
} satisfies Meta<typeof Header19>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (_a, { globals }) => (
    <AppBar position="static" color="default">
      <Toolbar>{header19Menu((globals.locale ?? "en") as L)}</Toolbar>
    </AppBar>
  ),
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
