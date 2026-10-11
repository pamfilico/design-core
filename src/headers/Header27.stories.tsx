import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header27 } from "./Header27";

const text = {
  en: { title: "Company", detail: "Unit: 204", signOutLabel: "Logout", signInLabel: "Login" },
  el: { title: "Εταιρεία", detail: "Μονάδα: 204", signOutLabel: "Αποσύνδεση", signInLabel: "Σύνδεση" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header27",
  component: Header27,
  parameters: { layout: "fullscreen" },
  args: {
    title: "Company",
    logo: <Box sx={{ width: 64, height: 64, borderRadius: 1, bgcolor: "background.paper" }} />,
    titleIcon: <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: "secondary.main" }} />,
    onSignIn: () => {},
    onSignOut: () => {},
  },
} satisfies Meta<typeof Header27>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header27 {...args} {...text[(globals.locale ?? "en") as L]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
