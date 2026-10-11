import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import ViewTimeline from "@mui/icons-material/ViewTimeline";
import Add from "@mui/icons-material/Add";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Dashboard from "@mui/icons-material/Dashboard";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import BadgeIcon from "@mui/icons-material/Badge";
import { Header16, type Header16Props } from "./Header16";
import { Header18 } from "./Header18";
import { publicItems, publicText } from "./Header20.stories";
import { header19Menu } from "./Header19.stories";

const text = {
  en: {
    dashboard: "Dashboard", entries: "Entries", timeline: "Timeline", add: "New entry", plan: "Plan", requests: "Requests",
    goToApp: "Go to app", signOutLabel: "Logout", signInLabel: "Login", localeLabel: "Language",
    toDarkLabel: "Switch to dark mode", toLightLabel: "Switch to light mode",
    ownerTitle: "Owner login", ownerDesc: "Manage your workspace, team and settings.",
    staffTitle: "Team login", staffDesc: "See your tasks and today's schedule.",
  },
  el: {
    dashboard: "Πίνακας ελέγχου", entries: "Καταχωρίσεις", timeline: "Χρονολόγιο", add: "Νέα καταχώριση", plan: "Πλάνο", requests: "Αιτήματα",
    goToApp: "Μετάβαση στην εφαρμογή", signOutLabel: "Αποσύνδεση", signInLabel: "Σύνδεση", localeLabel: "Γλώσσα",
    toDarkLabel: "Σκούρο θέμα", toLightLabel: "Φωτεινό θέμα",
    ownerTitle: "Σύνδεση ιδιοκτήτη", ownerDesc: "Διαχειριστείτε τον χώρο εργασίας, την ομάδα και τις ρυθμίσεις.",
    staffTitle: "Σύνδεση ομάδας", staffDesc: "Δείτε τις εργασίες και το σημερινό πρόγραμμα.",
  },
};
type L = keyof typeof text;

const logo = <Box sx={{ width: 50, height: 50, borderRadius: "5px", bgcolor: "primary.main" }} />;
const locales = [
  { value: "en", label: "English" },
  { value: "el", label: "Ελληνικά" },
];

function props(l: L, signedIn: boolean): Header16Props {
  const t = text[l];
  return {
    logo,
    onLogoClick: () => {},
    signedIn,
    menu: signedIn
      ? header19Menu(l)
      : <Header18 items={publicItems(l).map((p, i) => ({ label: publicText[l].long[i], icon: p.icon, onClick: p.onClick }))} />,
    navItems: [
      { label: t.dashboard, href: "#dashboard" },
      { label: t.entries, children: [{ label: t.timeline, href: "#timeline", active: true }, { label: t.add, href: "#add" }] },
      { label: t.plan, href: "#plan" },
      { label: t.requests, href: "#requests" },
    ],
    highlight: { label: t.goToApp, href: "#app" },
    publicItems: publicItems(l),
    onToggleTheme: () => {},
    toDarkLabel: t.toDarkLabel,
    toLightLabel: t.toLightLabel,
    locales,
    locale: l,
    localeLabel: t.localeLabel,
    signOutLabel: t.signOutLabel,
    onSignOut: () => {},
    signInLabel: t.signInLabel,
    loginOptions: [
      { title: t.ownerTitle, description: t.ownerDesc, icon: <AdminPanelSettings />, href: "#owner" },
      { title: t.staffTitle, description: t.staffDesc, icon: <BadgeIcon />, href: "#team" },
    ],
  };
}

const meta = {
  title: "Design Core/Headers/Header16",
  component: Header16,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Header16>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Drop args Storybook leaves undefined so they do not override the demo props. */
function defined<T extends object>(a: T): Partial<T> {
  return Object.fromEntries(Object.entries(a).filter(([, v]) => v !== undefined)) as Partial<T>;
}

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header16 {...props((globals.locale ?? "en") as L, !!args.signedIn)} {...defined(args)} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" }, args: { themeMode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
export const SignedInOnHome: Story = { ...English, args: { signedIn: true, onHome: true } };
/** Solid bar with a signed-in bottom navigation. */
export const SolidWithBottomNav: Story = {
  ...English,
  args: {
    signedIn: true,
    transparent: false,
    bottomItems: [
      { label: "Timeline", icon: <ViewTimeline />, active: true },
      { label: "New", icon: <Add /> },
      { label: "Plan", icon: <CalendarMonth /> },
      { label: "Requests", icon: <Dashboard /> },
    ],
  },
};
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
