import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header31 } from "./Header31";

const text = {
  en: { name: "Company", items: ["Pricing", "Reviews", "FAQ"], menuLabel: "Menu", closeLabel: "Close" },
  el: { name: "Εταιρεία", items: ["Τιμές", "Κριτικές", "Συχνές ερωτήσεις"], menuLabel: "Μενού", closeLabel: "Κλείσιμο" },
};
type L = keyof typeof text;
const hrefs = ["/#pricing", "/#reviews", "/#faq"];

const meta = {
  title: "Design Core/Headers/Header31",
  component: Header31,
  parameters: { layout: "fullscreen" },
  args: { name: "Company", items: [], logo: <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: "primary.main" }} /> },
} satisfies Meta<typeof Header31>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const { items, ...t } = text[(globals.locale ?? "en") as L];
    return <Header31 {...args} {...t} items={items.map((label, i) => ({ label, href: hrefs[i] }))} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
