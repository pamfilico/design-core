import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BadgeIcon from "@mui/icons-material/Badge";
import { Header34 } from "./Header34";

const text = {
  en: {
    dashboardLabel: "Dashboard",
    signOutLabel: "Sign out",
    signInLabel: "Sign in",
    menuLabel: "Menu",
    closeMenuLabel: "Close menu",
    appearanceLabel: "Appearance",
    localeLabel: "Language",
    toDarkLabel: "Switch to dark mode",
    toLightLabel: "Switch to light mode",
    installLabel: "Install app",
    doors: [
      { title: "Owner", body: "Run the business, settings and team." },
      { title: "Staff", body: "Sign in with the username your manager gave you." },
    ],
  },
  el: {
    dashboardLabel: "Πίνακας ελέγχου",
    signOutLabel: "Αποσύνδεση",
    signInLabel: "Σύνδεση",
    menuLabel: "Μενού",
    closeMenuLabel: "Κλείσιμο μενού",
    appearanceLabel: "Εμφάνιση",
    localeLabel: "Γλώσσα",
    toDarkLabel: "Σκούρο θέμα",
    toLightLabel: "Φωτεινό θέμα",
    installLabel: "Εγκατάσταση εφαρμογής",
    doors: [
      { title: "Ιδιοκτήτης", body: "Διαχείριση επιχείρησης, ρυθμίσεων και ομάδας." },
      { title: "Προσωπικό", body: "Συνδεθείτε με το όνομα χρήστη που σας έδωσε ο υπεύθυνος." },
    ],
  },
};

const locales = [
  { value: "en", label: "English" },
  { value: "el", label: "Ελληνικά" },
];

const logo = (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box sx={{ width: 28, height: 28, borderRadius: 1, bgcolor: "primary.main" }} />
    <Typography fontWeight={700}>Logo</Typography>
  </Box>
);

const { doors: enDoors, ...en } = text.en;
void enDoors;

const meta = {
  title: "Design Core/Headers/Header34",
  component: Header34,
  args: { ...en, logo, locales, onToggleTheme: () => {}, onSignOut: () => {} },
} satisfies Meta<typeof Header34>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const l = (globals.locale ?? "en") as "en" | "el";
    const { doors, ...t } = text[l];
    const signInOptions = [
      { key: "owner", href: "#owner", icon: <ManageAccountsIcon />, ...doors[0] },
      { key: "staff", href: "#staff", icon: <BadgeIcon />, ...doors[1] },
    ];
    return <Header34 {...args} {...t} locale={l} signInOptions={signInOptions} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true, onInstall: () => {} } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
