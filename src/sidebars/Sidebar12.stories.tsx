import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory2";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { Sidebar12, type Sidebar12Item } from "./Sidebar12";

type Locale = "en" | "el";

const text = {
  en: {
    dashboard: "Dashboard", calendar: "Calendar", customers: "Customers", items: "Items",
    invoices: "Invoices", reports: "Reports", settings: "Settings",
    signOutLabel: "Sign Out", publicPageLabel: "Public Page", openLabel: "Open", copyLabel: "Copy",
    openTooltip: "Open in new tab", copyTooltip: "Copy link", copiedMessage: "Link copied to clipboard",
  },
  el: {
    dashboard: "Πίνακας ελέγχου", calendar: "Ημερολόγιο", customers: "Πελάτες", items: "Είδη",
    invoices: "Τιμολόγια", reports: "Αναφορές", settings: "Ρυθμίσεις",
    signOutLabel: "Αποσύνδεση", publicPageLabel: "Δημόσια σελίδα", openLabel: "Άνοιγμα", copyLabel: "Αντιγραφή",
    openTooltip: "Άνοιγμα σε νέα καρτέλα", copyTooltip: "Αντιγραφή συνδέσμου", copiedMessage: "Ο σύνδεσμος αντιγράφηκε",
  },
};

function items(locale: Locale): Sidebar12Item[] {
  const t = text[locale];
  return [
    { key: "dashboard", label: t.dashboard, href: "/dashboard", icon: <DashboardIcon /> },
    { key: "calendar", label: t.calendar, href: "/calendar", icon: <EventIcon /> },
    { key: "customers", label: t.customers, href: "/customers", icon: <PeopleIcon /> },
    { key: "items", label: t.items, href: "/items", icon: <InventoryIcon /> },
    { key: "invoices", label: t.invoices, href: "/invoices", icon: <ReceiptIcon /> },
    { key: "reports", label: t.reports, href: "/reports", icon: <BarChartIcon /> },
    { key: "settings", label: t.settings, href: "/settings", icon: <SettingsIcon /> },
  ];
}

function strings(locale: Locale) {
  const { signOutLabel, publicPageLabel, openLabel, copyLabel, openTooltip, copyTooltip, copiedMessage } = text[locale];
  return { signOutLabel, publicPageLabel, openLabel, copyLabel, openTooltip, copyTooltip, copiedMessage };
}

const meta = {
  title: "Design Core/Sidebars/Sidebar12",
  component: Sidebar12,
  args: {
    open: true,
    onClose: () => {},
    items: items("en"),
    activeHref: "/calendar",
    onNavigate: () => {},
    onSignOut: () => {},
    userEmail: "jane@example.com",
    publicPageUrl: "https://example.com/company",
  },
} satisfies Meta<typeof Sidebar12>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return <Sidebar12 {...args} items={items(locale)} {...strings(locale)} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Without a public page the card is hidden. */
export const WithoutPublicPage: Story = { ...English, args: { publicPageUrl: null } };

export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
