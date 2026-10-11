import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import BadgeIcon from "@mui/icons-material/Badge";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import { Header01 } from "./Header01";
import { Header02 } from "./Header02";

const text = {
  en: {
    brand: "Company",
    menuLabel: "Open menu",
    accountLabel: "Account",
    roleTitle: "Role",
    roleLabel: "Owner",
    signInLabel: "Sign in",
    signOutLabel: "Sign out",
    crumbs: ["Workspaces", "Acme", "Overview"],
    permissions: "Permissions",
    sections: "Sections",
    apps: "Apps",
    dashboard: "Dashboard",
    settings: "Settings",
  },
  el: {
    brand: "Εταιρεία",
    menuLabel: "Άνοιγμα μενού",
    accountLabel: "Λογαριασμός",
    roleTitle: "Ρόλος",
    roleLabel: "Ιδιοκτήτης",
    signInLabel: "Σύνδεση",
    signOutLabel: "Αποσύνδεση",
    crumbs: ["Χώροι εργασίας", "Acme", "Επισκόπηση"],
    permissions: "Δικαιώματα",
    sections: "Ενότητες",
    apps: "Εφαρμογές",
    dashboard: "Πίνακας ελέγχου",
    settings: "Ρυθμίσεις",
  },
};
type L = keyof typeof text;

const user = { name: "Jane Doe", email: "jane@example.com" };

const meta = {
  title: "Design Core/Headers/Header01",
  component: Header01,
  parameters: { layout: "fullscreen" },
  args: { brand: "Company", user, onSignIn: () => {}, onSignOut: () => {}, onMenuClick: () => {} },
} satisfies Meta<typeof Header01>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header01
        {...args}
        brand={t.brand}
        menuLabel={t.menuLabel}
        accountLabel={t.accountLabel}
        roleTitle={t.roleTitle}
        roleLabel={args.user ? t.roleLabel : undefined}
        roleIcon={<BadgeIcon fontSize="small" color="action" />}
        signInLabel={t.signInLabel}
        signOutLabel={t.signOutLabel}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedOut: Story = { ...English, args: { user: null } };

export const WithBreadcrumbsAndApps: Story = {
  args: { showMenuButton: true, secondaryAvatar: true },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header01
        {...args}
        brand={t.brand}
        roleTitle={t.roleTitle}
        roleLabel={t.roleLabel}
        roleIcon={<BadgeIcon fontSize="small" color="action" />}
        accountDetails={[
          { icon: <LockPersonIcon fontSize="small" color="action" />, label: t.permissions, value: "Editor" },
          { icon: <BusinessIcon fontSize="small" color="action" />, label: t.sections, value: 3 },
        ]}
        signOutLabel={t.signOutLabel}
        breadcrumbs={
          <Breadcrumbs sx={{ color: "inherit" }}>
            <Link underline="hover" color="inherit" href="#">
              {t.crumbs[0]}
            </Link>
            <Link underline="hover" color="inherit" href="#">
              {t.crumbs[1]}
            </Link>
            <Typography color="inherit" sx={{ fontWeight: 600 }}>
              {t.crumbs[2]}
            </Typography>
          </Breadcrumbs>
        }
        actions={
          <Header02
            title={t.apps}
            items={[
              { label: t.dashboard, href: "#", icon: <DashboardIcon />, active: true },
              { label: t.settings, href: "#", icon: <SettingsIcon /> },
            ]}
          />
        }
      />
    );
  },
};
export const Mobile: Story = {
  ...WithBreadcrumbsAndApps,
  parameters: { viewport: { defaultViewport: "mobile1" } },
};
