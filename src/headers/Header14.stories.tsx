import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HomeIcon from "@mui/icons-material/Home";
import StarsIcon from "@mui/icons-material/Stars";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MapIcon from "@mui/icons-material/Map";
import { Header14 } from "./Header14";

const text = {
  en: {
    brand: "Company",
    items: ["Home", "Features", "How it works", "Pricing", "Roadmap"],
    contactLabel: "Contact",
    dashboardLabel: "Go to Dashboard",
    signOutLabel: "Logout",
    getStartedLabel: "Get Started",
    signInLabel: "Login",
    menuLabel: "Open navigation menu",
    toDarkLabel: "Switch to dark mode",
    toLightLabel: "Switch to light mode",
  },
  el: {
    brand: "Εταιρεία",
    items: ["Αρχική", "Δυνατότητες", "Πώς λειτουργεί", "Τιμές", "Πλάνο εξέλιξης"],
    contactLabel: "Επικοινωνία",
    dashboardLabel: "Πίνακας ελέγχου",
    signOutLabel: "Αποσύνδεση",
    getStartedLabel: "Ξεκινήστε",
    signInLabel: "Σύνδεση",
    menuLabel: "Άνοιγμα μενού πλοήγησης",
    toDarkLabel: "Σκούρο θέμα",
    toLightLabel: "Φωτεινό θέμα",
  },
};
type L = keyof typeof text;
const ids = ["hero", "features", "how", "pricing", "roadmap"];
const icons = [<HomeIcon key="a" />, <StarsIcon key="b" />, <HelpOutlineIcon key="c" />, <AttachMoneyIcon key="d" />, <MapIcon key="e" />];

const meta = {
  title: "Design Core/Headers/Header14",
  component: Header14,
  parameters: { layout: "fullscreen" },
  args: { brand: "Company", items: [], onItemClick: () => {}, onToggleTheme: () => {}, onContact: () => {}, onSignOut: () => {} },
} satisfies Meta<typeof Header14>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const { items, ...t } = text[(globals.locale ?? "en") as L];
    return <Header14 {...args} {...t} items={items.map((label, i) => ({ id: ids[i], label, icon: icons[i] }))} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" }, args: { themeMode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
