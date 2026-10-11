import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header30 } from "./Header30";

const text = {
  en: { items: ["Tasks"], signOutLabel: "Logout", signInLabel: "Login" },
  el: { items: ["Εργασίες"], signOutLabel: "Αποσύνδεση", signInLabel: "Σύνδεση" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header30",
  component: Header30,
  parameters: { layout: "fullscreen" },
  args: { logo: <Box sx={{ width: 50, height: 50, borderRadius: "4px", boxShadow: 1, bgcolor: "background.paper" }} />, onSignIn: () => {}, onSignOut: () => {} },
} satisfies Meta<typeof Header30>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header30
        {...args}
        items={args.signedIn ? t.items.map((label) => ({ label, href: "#tasks", active: true })) : []}
        signOutLabel={t.signOutLabel}
        signInLabel={t.signInLabel}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
/** Logo only, no auth button. */
export const LogoOnly: Story = { ...English, args: { showAuth: false } };
