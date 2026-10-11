import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header32 } from "./Header32";

const text = {
  en: {
    brand: "Company",
    dashboardLabel: "Dashboard",
    signOutLabel: "Sign out",
    signInLabel: "Sign in",
    localeLabel: "Language",
    toDarkLabel: "Switch to dark mode",
    toLightLabel: "Switch to light mode",
    installLabel: "Install app",
  },
  el: {
    brand: "Εταιρεία",
    dashboardLabel: "Πίνακας ελέγχου",
    signOutLabel: "Αποσύνδεση",
    signInLabel: "Σύνδεση",
    localeLabel: "Γλώσσα",
    toDarkLabel: "Σκούρο θέμα",
    toLightLabel: "Φωτεινό θέμα",
    installLabel: "Εγκατάσταση εφαρμογής",
  },
};

const locales = [
  { value: "en", label: "English" },
  { value: "el", label: "Ελληνικά" },
];

const meta = {
  title: "Design Core/Headers/Header32",
  component: Header32,
  args: { ...text.en, locales, onToggleTheme: () => {}, onSignOut: () => {} },
} satisfies Meta<typeof Header32>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const l = (globals.locale ?? "en") as "en" | "el";
    return <Header32 {...args} {...text[l]} locale={l} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
export const WithInstall: Story = { ...English, args: { onInstall: () => {} } };
export const WithBanner: Story = {
  ...English,
  args: {
    banner: (
      <div style={{ padding: "4px 16px", textAlign: "center", fontSize: 13 }}>Scheduled maintenance tonight</div>
    ),
  },
};
