import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header28 } from "./Header28";

const text = {
  en: {
    title: "Company",
    signedInDetail: "(204)",
    hint: ["Scan the QR code", "to access services"] as [string, string],
    signOutLabel: "Logout",
    signInLabel: "Login",
    dialog: { title: "Login instructions", body: "To log in, open your camera app and scan the QR code shown in your unit.", closeLabel: "Close" },
  },
  el: {
    title: "Εταιρεία",
    signedInDetail: "(204)",
    hint: ["Σαρώστε τον κωδικό QR", "για πρόσβαση στις υπηρεσίες"] as [string, string],
    signOutLabel: "Αποσύνδεση",
    signInLabel: "Σύνδεση",
    dialog: { title: "Οδηγίες σύνδεσης", body: "Για να συνδεθείτε, ανοίξτε την κάμερα και σαρώστε τον κωδικό QR που βρίσκεται στη μονάδα σας.", closeLabel: "Κλείσιμο" },
  },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header28",
  component: Header28,
  parameters: { layout: "fullscreen" },
  args: {
    title: "Company",
    logo: <Box sx={{ width: 50, height: 50, borderRadius: "4px", boxShadow: 1, bgcolor: "background.paper" }} />,
    titleIcon: <Box sx={{ width: 50, height: 50, borderRadius: "50%", bgcolor: "secondary.main" }} />,
    onSignOut: () => {},
  },
} satisfies Meta<typeof Header28>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const { dialog, ...t } = text[(globals.locale ?? "en") as L];
    return <Header28 {...args} {...t} signInDialog={dialog} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
