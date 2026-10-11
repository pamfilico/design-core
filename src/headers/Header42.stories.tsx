import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header42 } from "./Header42";

const text = {
  en: { backLabel: "Back to Home", signInLabel: "Sign in", signedInAsLabel: "Signed in as", signOutLabel: "Sign out" },
  el: { backLabel: "Επιστροφή στην αρχική", signInLabel: "Σύνδεση", signedInAsLabel: "Συνδεδεμένος ως", signOutLabel: "Αποσύνδεση" },
};

const logo = <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: "primary.main" }} />;

const meta = {
  title: "Design Core/Headers/Header42",
  component: Header42,
  args: { ...text.en, logo, onHome: () => {}, onSignOut: () => {} },
} satisfies Meta<typeof Header42>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header42 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { user: { name: "Jane Doe", email: "jane@example.com" } } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
