import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header13 } from "./Header13";

const text = {
  en: { brand: "Company", pageTitle: "New entry", signInLabel: "Sign In", trial: "Trial", expired: "Trial expired", toDarkLabel: "Switch to dark mode", toLightLabel: "Switch to light mode", menuLabel: "Open drawer" },
  el: { brand: "Εταιρεία", pageTitle: "Νέα καταχώριση", signInLabel: "Σύνδεση", trial: "Δοκιμή", expired: "Η δοκιμή έληξε", toDarkLabel: "Σκούρο θέμα", toLightLabel: "Φωτεινό θέμα", menuLabel: "Άνοιγμα μενού" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header13",
  component: Header13,
  parameters: { layout: "fullscreen" },
  args: { brand: "Company", onToggleTheme: () => {}, onSignIn: () => {}, onMenuClick: () => {} },
} satisfies Meta<typeof Header13>;
export default meta;
type Story = StoryObj<typeof meta>;

function make(expired = false, withPage = false): Story {
  return {
    render: (args, { globals }) => {
      const t = text[(globals.locale ?? "en") as L];
      return (
        <Header13
          {...args}
          brand={t.brand}
          pageTitle={withPage ? t.pageTitle : undefined}
          signInLabel={t.signInLabel}
          toDarkLabel={t.toDarkLabel}
          toLightLabel={t.toLightLabel}
          menuLabel={t.menuLabel}
          statusChip={{ label: expired ? t.expired : t.trial, color: expired ? "error" : "primary", onClick: () => {} }}
        />
      );
    },
  };
}

export const English: Story = { ...make(), globals: { locale: "en" } };
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...make(), args: { signedIn: true } };
export const TrialExpired: Story = { ...make(true), args: { signedIn: true } };
export const WithPageTitle: Story = { ...make(false, true), args: { signedIn: true } };
