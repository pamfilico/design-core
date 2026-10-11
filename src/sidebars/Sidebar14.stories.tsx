import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import { Sidebar14, type Sidebar14Item } from "./Sidebar14";

type Locale = "en" | "el";

const text = {
  en: {
    brand: "Company", dashboard: "Dashboard", customers: "Customers", documents: "Documents",
    payments: "Payments", settings: "Settings", signOutLabel: "Sign out", openNavLabel: "Open navigation",
    body: "Page content",
  },
  el: {
    brand: "Company", dashboard: "Πίνακας ελέγχου", customers: "Πελάτες", documents: "Έγγραφα",
    payments: "Πληρωμές", settings: "Ρυθμίσεις", signOutLabel: "Αποσύνδεση", openNavLabel: "Άνοιγμα πλοήγησης",
    body: "Περιεχόμενο σελίδας",
  },
};

function items(locale: Locale): Sidebar14Item[] {
  const t = text[locale];
  return [
    { key: "dashboard", label: t.dashboard, href: "/dashboard", icon: <DashboardIcon /> },
    { key: "customers", label: t.customers, href: "/customers", icon: <PeopleIcon /> },
    { key: "documents", label: t.documents, href: "/documents", icon: <DescriptionIcon /> },
    { key: "payments", label: t.payments, href: "/payments", icon: <PaymentsIcon /> },
    { key: "settings", label: t.settings, href: "/settings", icon: <SettingsIcon /> },
  ];
}

const meta = {
  title: "Design Core/Sidebars/Sidebar14",
  component: Sidebar14,
  args: {
    brand: "Company",
    items: items("en"),
    activeHref: "/customers",
    onNavigate: () => {},
    onSignOut: () => {},
    mode: "permanent",
  },
} satisfies Meta<typeof Sidebar14>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    const t = text[locale];
    return (
      <Sidebar14
        {...args}
        items={items(locale)}
        signOutLabel={t.signOutLabel}
        openNavLabel={t.openNavLabel}
      >
        <Typography variant="overline" color="text.secondary">{t.body}</Typography>
        <Box sx={{ mt: 1, height: 160, borderRadius: 2, border: "1px dashed", borderColor: "divider" }} />
      </Sidebar14>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Logo node instead of a text wordmark, uncoloured brand, narrower drawer. */
export const LogoBrand: Story = {
  ...English,
  args: {
    brand: <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: "primary.main" }} />,
    brandColored: false,
    railWidth: 232,
  },
};

/** Below `md`: hamburger in the app bar opens a temporary drawer. */
export const Mobile: Story = {
  ...English,
  args: { mode: "temporary" },
  parameters: { viewport: { defaultViewport: "mobile1" } },
};
