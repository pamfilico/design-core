import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HomeIcon from "@mui/icons-material/Home";
import StarsIcon from "@mui/icons-material/Stars";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MapIcon from "@mui/icons-material/Map";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import { Header48 } from "./Header48";

const text = {
  en: {
    brand: "Company",
    sections: ["Home", "Features", "Trusted by", "How it works", "Pricing", "Roadmap"],
    dashboardLabel: "Go to dashboard",
    ctaLabel: "Get started",
    signInLabel: "Sign in",
    menuLabel: "open navigation menu",
    toDarkLabel: "Switch to dark mode",
    toLightLabel: "Switch to light mode",
    owner: ["Manager", "Operators and business owners"],
    staff: ["Staff", "Team members and staff"],
  },
  el: {
    brand: "Εταιρεία",
    sections: ["Αρχική", "Χαρακτηριστικά", "Μας εμπιστεύονται", "Πώς λειτουργεί", "Τιμές", "Οδικός χάρτης"],
    dashboardLabel: "Μετάβαση στον πίνακα",
    ctaLabel: "Ξεκινήστε",
    signInLabel: "Σύνδεση",
    menuLabel: "άνοιγμα μενού πλοήγησης",
    toDarkLabel: "Σκούρο θέμα",
    toLightLabel: "Φωτεινό θέμα",
    owner: ["Διαχειριστής", "Επιχειρηματίες και ιδιοκτήτες"],
    staff: ["Προσωπικό", "Μέλη ομάδας και προσωπικό"],
  },
};
type L = "en" | "el";
const icons = [<HomeIcon />, <StarsIcon />, <VerifiedUserIcon />, <HelpOutlineIcon />, <AttachMoneyIcon />, <MapIcon />];
const ids = ["hero", "features", "trusted", "how", "pricing", "roadmap"];

const build = (l: L) => {
  const { sections, owner, staff, ...t } = text[l];
  return {
    ...t,
    sections: sections.map((label, i) => ({ id: ids[i], label, icon: icons[i] })),
    signInOptions: [
      { key: "owner", href: "#owner", icon: <AdminPanelSettingsIcon />, title: owner[0], body: owner[1] },
      { key: "staff", href: "#staff", icon: <PersonIcon />, title: staff[0], body: staff[1] },
    ],
  };
};

const meta = {
  title: "Design Core/Headers/Header48",
  component: Header48,
  args: { ...build("en"), position: "static", onToggleTheme: () => {}, onSectionClick: () => {} },
} satisfies Meta<typeof Header48>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header48 {...args} {...build((globals.locale ?? "en") as L)} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
