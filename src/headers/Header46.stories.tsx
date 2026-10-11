import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header46 } from "./Header46";

const text = {
  en: { brand: "Company", title: "Your trip", backLabel: "Back", online: "Online", offline: "Offline" },
  el: { brand: "Εταιρεία", title: "Η διαδρομή σας", backLabel: "Πίσω", online: "Συνδεδεμένος", offline: "Εκτός σύνδεσης" },
};
type L = "en" | "el";
const loc = (g: { locale?: string }) => (g.locale ?? "en") as L;

const logo = <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: "primary.main" }} />;

const meta = {
  title: "Design Core/Headers/Header46",
  component: Header46,
  args: { brand: text.en.brand, logo },
  decorators: [(Story) => <Box sx={{ maxWidth: 520 }}><Story /></Box>],
} satisfies Meta<typeof Header46>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header46 {...args} brand={text[loc(globals)].brand} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const WithBack: Story = {
  render: (args, { globals }) => {
    const t = text[loc(globals)];
    return <Header46 {...args} brand={t.brand} title={t.title} backLabel={t.backLabel} onBack={() => {}} />;
  },
};
export const Online: Story = {
  render: (args, { globals }) => {
    const t = text[loc(globals)];
    return <Header46 {...args} brand={t.brand} status={{ label: t.online, online: true }} />;
  },
};
export const Offline: Story = {
  render: (args, { globals }) => {
    const t = text[loc(globals)];
    return <Header46 {...args} brand={t.brand} status={{ label: t.offline }} />;
  },
};
