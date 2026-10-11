import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Header36 } from "./Header36";

const text = {
  en: { logoText: "Logo", help: "Help" },
  el: { logoText: "Λογότυπο", help: "Βοήθεια" },
};

const makeLogo = (label: string) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: "primary.main" }} />
    <Typography fontWeight={700}>{label}</Typography>
  </Box>
);

const meta = {
  title: "Design Core/Headers/Header36",
  component: Header36,
  args: { logo: makeLogo("Logo") },
} satisfies Meta<typeof Header36>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as "en" | "el"];
    return <Header36 {...args} logo={makeLogo(t.logoText)} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const WithRightSlot: Story = {
  ...English,
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as "en" | "el"];
    return <Header36 {...args} logo={makeLogo(t.logoText)} right={<Button size="small">{t.help}</Button>} />;
  },
};
