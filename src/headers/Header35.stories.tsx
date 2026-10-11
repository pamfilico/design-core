import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Header35 } from "./Header35";

const text = {
  en: { menuLabel: "Open navigation", signOutLabel: "Sign out", installLabel: "Install app", contextLabel: "Main branch", role: "manager" },
  el: { menuLabel: "Άνοιγμα πλοήγησης", signOutLabel: "Αποσύνδεση", installLabel: "Εγκατάσταση εφαρμογής", contextLabel: "Κεντρικό κατάστημα", role: "διαχειριστής" },
};

const mark = <Box sx={{ width: 24, height: 24, borderRadius: 1, bgcolor: "primary.contrastText", opacity: 0.9 }} />;
const logo = (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    {mark}
    <Typography fontWeight={700}>Logo</Typography>
  </Box>
);

const meta = {
  title: "Design Core/Headers/Header35",
  component: Header35,
  args: { logo, logoMark: mark, position: "static", onMenuClick: () => {}, onSignOut: () => {} },
} satisfies Meta<typeof Header35>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const { role, ...t } = text[(globals.locale ?? "en") as "en" | "el"];
    return <Header35 {...args} {...t} user={{ name: "Jane Doe", role }} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const WithInstall: Story = { ...English, args: { onInstall: () => {} } };
export const SecondaryRole: Story = { ...English, args: { roleColor: "secondary" } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
