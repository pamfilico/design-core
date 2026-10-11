import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Header15 } from "./Header15";

const text = {
  en: { title: "Entries", subtitle: "Everything scheduled for this week", backLabel: "Back", badge: "Draft", action: "New entry" },
  el: { title: "Καταχωρίσεις", subtitle: "Όλα όσα έχουν προγραμματιστεί αυτή την εβδομάδα", backLabel: "Πίσω", badge: "Πρόχειρο", action: "Νέα καταχώριση" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header15",
  component: Header15,
  args: { title: "Entries", icon: <EventNoteIcon fontSize="large" /> },
  decorators: [(Story) => <Box sx={{ p: 3 }}><Story /></Box>],
} satisfies Meta<typeof Header15>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header15
        {...args}
        title={t.title}
        subtitle={t.subtitle}
        backLabel={t.backLabel}
        badge={args.badge ? t.badge : undefined}
        actions={<Button variant="contained">{t.action}</Button>}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const WithBackAndBadge: Story = { ...English, args: { onBack: () => {}, badge: "x", badgeColor: "warning" } };
