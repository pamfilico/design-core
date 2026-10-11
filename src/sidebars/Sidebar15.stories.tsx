import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BuildIcon from "@mui/icons-material/Build";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import { Sidebar15, type Sidebar15Item } from "./Sidebar15";

type Locale = "en" | "el";

const text = {
  en: {
    dashboard: "Dashboard", schedule: "Schedule", calendar: "Calendar", list: "List", inventory: "Inventory",
    items: "Items", maintenance: "Maintenance", finance: "Finance", payments: "Payments", invoices: "Invoices",
    people: "People", messages: "Messages", billing: "Billing", help: "Help", settings: "Settings", logoutLabel: "Logout",
  },
  el: {
    dashboard: "Πίνακας ελέγχου", schedule: "Πρόγραμμα", calendar: "Ημερολόγιο", list: "Λίστα", inventory: "Απόθεμα",
    items: "Είδη", maintenance: "Συντήρηση", finance: "Οικονομικά", payments: "Πληρωμές", invoices: "Τιμολόγια",
    people: "Άτομα", messages: "Μηνύματα", billing: "Χρέωση", help: "Βοήθεια", settings: "Ρυθμίσεις", logoutLabel: "Αποσύνδεση",
  },
};

function railItems(locale: Locale): { items: Sidebar15Item[]; footerItems: Sidebar15Item[] } {
  const t = text[locale];
  return {
    items: [
      { key: "dashboard", label: t.dashboard, href: "/dashboard", icon: <DashboardIcon /> },
      {
        key: "schedule",
        label: t.schedule,
        href: "/schedule",
        icon: <EventIcon />,
        children: [
          { key: "calendar", label: t.calendar, href: "/schedule/calendar", icon: <EventIcon fontSize="small" /> },
          { key: "list", label: t.list, href: "/schedule/list", icon: <ListAltIcon fontSize="small" /> },
        ],
      },
      {
        key: "inventory",
        label: t.inventory,
        href: "/inventory",
        icon: <Inventory2Icon />,
        children: [
          { key: "items", label: t.items, href: "/inventory/items", icon: <Inventory2Icon fontSize="small" /> },
          { key: "maintenance", label: t.maintenance, href: "/inventory/maintenance", icon: <BuildIcon fontSize="small" /> },
        ],
      },
      {
        key: "finance",
        label: t.finance,
        href: "/finance",
        icon: <PaymentsIcon />,
        children: [
          { key: "payments", label: t.payments, href: "/finance/payments", icon: <PaymentsIcon fontSize="small" /> },
          { key: "invoices", label: t.invoices, href: "/finance/invoices", icon: <ReceiptIcon fontSize="small" /> },
        ],
      },
      { key: "people", label: t.people, href: "/people", icon: <PeopleIcon /> },
      {
        key: "messages",
        label: t.messages,
        href: "/messages",
        icon: (
          <Badge badgeContent={3} color="error">
            <ChatIcon />
          </Badge>
        ),
      },
    ],
    footerItems: [
      { key: "billing", label: t.billing, href: "/billing", icon: <CreditCardIcon /> },
      { key: "help", label: t.help, href: "/help", icon: <HelpIcon /> },
      { key: "settings", label: t.settings, href: "/settings", icon: <SettingsIcon /> },
    ],
  };
}

const meta = {
  title: "Design Core/Sidebars/Sidebar15",
  component: Sidebar15,
  args: { ...railItems("en"), activeHref: "/schedule/calendar", onNavigate: () => {}, onLogout: () => {} },
} satisfies Meta<typeof Sidebar15>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return (
      <Box sx={{ height: 640, display: "flex", p: 2 }}>
        <Sidebar15 {...args} {...railItems(locale)} logoutLabel={text[locale].logoutLabel} />
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** No footer items and no logout: just the main icons. */
export const Minimal: Story = { ...English, args: { footerItems: [], onLogout: undefined, activeHref: "/dashboard" } };
