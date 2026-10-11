import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Typography from "@mui/material/Typography";
import { Header41 } from "./Header41";

const text = {
  en: { homeLabel: "Home", contactLabel: "Contact", menuLabel: "open drawer" },
  el: { homeLabel: "Αρχική", contactLabel: "Επικοινωνία", menuLabel: "άνοιγμα μενού" },
};

const meta = {
  title: "Design Core/Headers/Header41",
  component: Header41,
  args: { ...text.en, onContact: () => {} },
} satisfies Meta<typeof Header41>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header41 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const WithLeft: Story = { ...English, args: { left: <Typography fontWeight={700} color="primary">Logo</Typography> } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
