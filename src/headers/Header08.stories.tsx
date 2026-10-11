import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header08 } from "./Header08";

const text = {
  en: { brand: "Company", localeLabel: "Language", contactLabel: "Contact", signInLabel: "Sign in", signOutLabel: "Sign out", toDarkLabel: "Switch to dark mode", toLightLabel: "Switch to light mode", menuLabel: "Open menu" },
  el: { brand: "Εταιρεία", localeLabel: "Γλώσσα", contactLabel: "Επικοινωνία", signInLabel: "Σύνδεση", signOutLabel: "Αποσύνδεση", toDarkLabel: "Σκούρο θέμα", toLightLabel: "Φωτεινό θέμα", menuLabel: "Άνοιγμα μενού" },
};
type L = keyof typeof text;
const locales = [
  { value: "en", label: "English" },
  { value: "el", label: "Ελληνικά" },
];

const meta = {
  title: "Design Core/Headers/Header08",
  component: Header08,
  parameters: { layout: "fullscreen" },
  args: { brand: "Company", locales, onToggleTheme: () => {}, onSignIn: () => {}, onSignOut: () => {}, onContact: () => {}, onMenuClick: () => {} },
} satisfies Meta<typeof Header08>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const l = (globals.locale ?? "en") as L;
    return <Header08 {...args} {...text[l]} locale={l} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" }, args: { themeMode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
export const Mobile: Story = { ...SignedIn, parameters: { viewport: { defaultViewport: "mobile1" } } };
