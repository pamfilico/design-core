import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header29 } from "./Header29";

const text = {
  en: { home: "HOME", crumbs: ["Spring launch", "Website"], links: ["Members", "Finances"], usage: "Billing", signOutLabel: "Logout", signInLabel: "Login" },
  el: { home: "ΑΡΧΙΚΗ", crumbs: ["Ανοιξιάτικη έναρξη", "Ιστότοπος"], links: ["Μέλη", "Οικονομικά"], usage: "Χρεώσεις", signOutLabel: "Αποσύνδεση", signInLabel: "Σύνδεση" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header29",
  component: Header29,
  parameters: { layout: "fullscreen" },
  args: { home: { label: "HOME", href: "#" }, signedIn: true, onSignOut: () => {}, onSignIn: () => {} },
} satisfies Meta<typeof Header29>;
export default meta;
type Story = StoryObj<typeof meta>;

function make(used: number, depth = 2): Story {
  return {
    render: (args, { globals }) => {
      const t = text[(globals.locale ?? "en") as L];
      return (
        <Header29
          {...args}
          home={{ label: t.home, href: "#" }}
          crumbs={t.crumbs.slice(0, depth).map((label) => ({ label, onClick: () => {} }))}
          links={t.links.map((label) => ({ label, href: "#" }))}
          usage={{ label: t.usage, used, limit: 50 }}
          signOutLabel={t.signOutLabel}
          signInLabel={t.signInLabel}
        />
      );
    },
  };
}

export const English: Story = { ...make(12), globals: { locale: "en" } };
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const NearLimit: Story = { ...make(47, 1) };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
