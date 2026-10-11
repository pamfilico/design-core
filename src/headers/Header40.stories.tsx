import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header40 } from "./Header40";

const text = {
  en: { homeLabel: "Back to home", promoLabel: "For business", signInLabel: "Sign in", signedInAsLabel: "Signed in as", signOutLabel: "Sign out" },
  el: { homeLabel: "Επιστροφή στην αρχική", promoLabel: "Για επιχειρήσεις", signInLabel: "Σύνδεση", signedInAsLabel: "Συνδεδεμένος ως", signOutLabel: "Αποσύνδεση" },
};

const logo = <Box sx={{ width: "100%", height: "100%", borderRadius: 1, bgcolor: "primary.main" }} />;

const meta = {
  title: "Design Core/Headers/Header40",
  component: Header40,
  args: { ...text.en, logo, position: "absolute", onSignOut: () => {} },
  decorators: [
    (Story) => (
      <Box sx={{ position: "relative", height: 200, bgcolor: "action.selected" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Header40>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header40 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { user: { name: "Jane Doe", email: "jane@example.com" } } };
export const OnHome: Story = { ...English, args: { hideHome: true } };
export const FocusedFlow: Story = { ...English, args: { hidePromo: true } };
