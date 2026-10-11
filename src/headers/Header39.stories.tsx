import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header39 } from "./Header39";

const text = {
  en: { backLabel: "Back to results", currentLabel: "Company" },
  el: { backLabel: "Πίσω στα αποτελέσματα", currentLabel: "Εταιρεία" },
};

const meta = {
  title: "Design Core/Headers/Header39",
  component: Header39,
  args: { ...text.en, position: "static", onBack: () => {} },
  decorators: [(Story) => <Box sx={{ p: 2, bgcolor: "action.hover", minHeight: 120 }}><Story /></Box>],
} satisfies Meta<typeof Header39>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header39 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const BackOnly: Story = { ...English, render: (args) => <Header39 {...args} currentLabel={undefined} /> };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
