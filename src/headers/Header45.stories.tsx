import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { Header45 } from "./Header45";

const text = {
  en: { brand: "Company", title: "Today", backLabel: "Back", online: "Online", offline: "Offline", settings: "Settings" },
  el: { brand: "Εταιρεία", title: "Σήμερα", backLabel: "Πίσω", online: "Συνδεδεμένος", offline: "Εκτός σύνδεσης", settings: "Ρυθμίσεις" },
};
type L = "en" | "el";
const loc = (g: { locale?: string }) => (g.locale ?? "en") as L;

const logo = <Box sx={{ width: 38, height: 38, borderRadius: 2, bgcolor: "primary.main", flexShrink: 0 }} />;

const meta = {
  title: "Design Core/Headers/Header45",
  component: Header45,
  args: { brand: text.en.brand, logo },
  decorators: [(Story) => <Box sx={{ maxWidth: 520 }}><Story /></Box>],
} satisfies Meta<typeof Header45>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[loc(globals)];
    return <Header45 {...args} brand={t.brand} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const WithBack: Story = {
  render: (args, { globals }) => {
    const t = text[loc(globals)];
    return <Header45 {...args} brand={t.brand} title={t.title} backLabel={t.backLabel} onBack={() => {}} />;
  },
};
/** Signed-in worker screen: status chip and a settings action. */
export const WithStatus: Story = {
  render: (args, { globals }) => {
    const t = text[loc(globals)];
    return (
      <Header45
        {...args}
        brand={t.brand}
        title={t.title}
        status={{ label: t.online, online: true }}
        right={
          <IconButton aria-label={t.settings} href="#settings">
            <SettingsIcon />
          </IconButton>
        }
      />
    );
  },
};
export const Offline: Story = {
  render: (args, { globals }) => {
    const t = text[loc(globals)];
    return <Header45 {...args} brand={t.brand} status={{ label: t.offline, online: false }} />;
  },
};
