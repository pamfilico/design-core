import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header07 } from "./Header07";

const text = {
  en: { brand: "Company", signInLabel: "Sign in", signOutLabel: "Sign out" },
  el: { brand: "Εταιρεία", signInLabel: "Σύνδεση", signOutLabel: "Αποσύνδεση" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header07",
  component: Header07,
  parameters: { layout: "fullscreen" },
  args: { brand: "Company", onSignIn: () => {}, onSignOut: () => {} },
  decorators: [
    (Story) => (
      <Box sx={{ minHeight: 200, bgcolor: "primary.dark" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Header07>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header07 {...args} {...text[(globals.locale ?? "en") as L]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
/** After scrolling: solid paper bar. */
export const Scrolled: Story = { ...English, args: { scrolled: true } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
