import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header43 } from "./Header43";

const text = {
  en: { title: "Admin", signOutLabel: "Log out", nav: ["Overview", "Users", "Documents", "Partners", "Orders", "Tracking", "Settings"] },
  el: { title: "Διαχείριση", signOutLabel: "Αποσύνδεση", nav: ["Επισκόπηση", "Χρήστες", "Έγγραφα", "Συνεργάτες", "Παραγγελίες", "Παρακολούθηση", "Ρυθμίσεις"] },
};
const hrefs = ["/admin", "/admin/users", "/admin/documents", "/admin/partners", "/admin/orders", "/admin/tracking", "/admin/settings"];

const build = (l: "en" | "el", active = 0) => ({
  title: text[l].title,
  signOutLabel: text[l].signOutLabel,
  items: text[l].nav.map((label, i) => ({ label, href: hrefs[i], active: i === active })),
});

const logo = <Box sx={{ width: 32, height: 32, borderRadius: 2, bgcolor: "primary.main", flexShrink: 0 }} />;

const meta = {
  title: "Design Core/Headers/Header43",
  component: Header43,
  args: { ...build("en"), logo, userName: "jane", position: "static", onSignOut: () => {} },
} satisfies Meta<typeof Header43>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header43 {...args} {...build((globals.locale ?? "en") as "en" | "el")} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
