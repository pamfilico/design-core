import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import { Sidebar16 } from "./Sidebar16";
import type { Sidebar15Item } from "./Sidebar15";

type Locale = "en" | "el";

const text = {
  en: {
    dashboard: "Dashboard", schedule: "Schedule", calendar: "Calendar", list: "List", finance: "Finance",
    payments: "Payments", invoices: "Invoices", people: "People", messages: "Messages", help: "Help",
    settings: "Settings", logoutLabel: "Logout", menuLabel: "Menu", closeLabel: "Close menu",
  },
  el: {
    dashboard: "Πίνακας ελέγχου", schedule: "Πρόγραμμα", calendar: "Ημερολόγιο", list: "Λίστα", finance: "Οικονομικά",
    payments: "Πληρωμές", invoices: "Τιμολόγια", people: "Άτομα", messages: "Μηνύματα", help: "Βοήθεια",
    settings: "Ρυθμίσεις", logoutLabel: "Αποσύνδεση", menuLabel: "Μενού", closeLabel: "Κλείσιμο μενού",
  },
};

function rail(locale: Locale): { items: Sidebar15Item[]; footerItems: Sidebar15Item[] } {
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
          <Badge badgeContent={2} color="error">
            <ChatIcon />
          </Badge>
        ),
      },
    ],
    footerItems: [
      { key: "help", label: t.help, href: "/help", icon: <HelpIcon /> },
      { key: "settings", label: t.settings, href: "/settings", icon: <SettingsIcon /> },
    ],
  };
}

const meta = {
  title: "Design Core/Sidebars/Sidebar16",
  component: Sidebar16,
  args: { ...rail("en"), activeHref: "/dashboard", onNavigate: () => {}, onLogout: () => {}, defaultOpen: true },
} satisfies Meta<typeof Sidebar16>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    const t = text[locale];
    return (
      <Box sx={{ p: 1 }}>
        <Sidebar16
          {...args}
          {...rail(locale)}
          logoutLabel={t.logoutLabel}
          menuLabel={t.menuLabel}
          closeLabel={t.closeLabel}
        />
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Closed: only the (compact) hamburger is visible. */
export const Closed: Story = { ...English, args: { defaultOpen: false, compact: true } };

export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
