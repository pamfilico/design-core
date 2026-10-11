import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header26 } from "./Header26";

const text = {
  en: { items: ["Overview", "Schedule", "Reports"] },
  el: { items: ["Επισκόπηση", "Πρόγραμμα", "Αναφορές"] },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header26",
  component: Header26,
  args: { label: "Overview" },
} satisfies Meta<typeof Header26>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (_a, { globals }) => (
    <Box sx={{ display: "flex", gap: 1, px: 2 }}>
      {text[(globals.locale ?? "en") as L].items.map((label, i) => (
        <Header26 key={i} label={label} href="#" active={i === 0} />
      ))}
    </Box>
  ),
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
