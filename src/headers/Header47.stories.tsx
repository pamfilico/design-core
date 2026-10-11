import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import { Header47 } from "./Header47";

const text = {
  en: {
    brand: "Company",
    pageTitle: "New booking",
    signInLabel: "Sign in",
    menuLabel: "open drawer",
    toDarkLabel: "Switch to dark mode",
    toLightLabel: "Switch to light mode",
    trial: "Trial",
    expired: "Trial expired",
    owner: ["Manager", "Operators and business owners"],
    staff: ["Staff", "Team members and staff"],
  },
  el: {
    brand: "Εταιρεία",
    pageTitle: "Νέα κράτηση",
    signInLabel: "Σύνδεση",
    menuLabel: "άνοιγμα μενού",
    toDarkLabel: "Σκούρο θέμα",
    toLightLabel: "Φωτεινό θέμα",
    trial: "Δοκιμή",
    expired: "Η δοκιμή έληξε",
    owner: ["Διαχειριστής", "Επιχειρηματίες και ιδιοκτήτες"],
    staff: ["Προσωπικό", "Μέλη ομάδας και προσωπικό"],
  },
};
type L = "en" | "el";

const build = (l: L) => {
  const t = text[l];
  return {
    brand: t.brand,
    signInLabel: t.signInLabel,
    menuLabel: t.menuLabel,
    toDarkLabel: t.toDarkLabel,
    toLightLabel: t.toLightLabel,
    signInOptions: [
      { key: "owner", href: "#owner", icon: <AdminPanelSettingsIcon />, title: t.owner[0], body: t.owner[1] },
      { key: "staff", href: "#staff", icon: <PersonIcon />, title: t.staff[0], body: t.staff[1] },
    ],
  };
};

const meta = {
  title: "Design Core/Headers/Header47",
  component: Header47,
  args: { ...build("en"), onToggleTheme: () => {}, onMenuClick: () => {} },
} satisfies Meta<typeof Header47>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header47 {...args} {...build((globals.locale ?? "en") as L)} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = {
  render: (args, { globals }) => {
    const l = (globals.locale ?? "en") as L;
    return <Header47 {...args} {...build(l)} signedIn statusChip={{ label: text[l].trial, onClick: () => {} }} />;
  },
};
export const TrialExpired: Story = {
  render: (args, { globals }) => {
    const l = (globals.locale ?? "en") as L;
    return <Header47 {...args} {...build(l)} signedIn statusChip={{ label: text[l].expired, color: "error" }} />;
  },
};
export const WithPageTitle: Story = {
  render: (args, { globals }) => {
    const l = (globals.locale ?? "en") as L;
    return <Header47 {...args} {...build(l)} signedIn pageTitle={text[l].pageTitle} />;
  },
};
