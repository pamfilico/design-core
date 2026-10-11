import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Header23 } from "./Header23";

const text = {
  en: { title: "Entry #1042", subtitle: "Created 3 days ago by Jane Doe", status: "Confirmed", back: "Back" },
  el: { title: "Καταχώριση #1042", subtitle: "Δημιουργήθηκε πριν από 3 ημέρες από την Jane Doe", status: "Επιβεβαιωμένη", back: "Πίσω" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header23",
  component: Header23,
  args: { onBack: () => {} },
  decorators: [(Story) => <Box sx={{ p: 2 }}><Story /></Box>],
} satisfies Meta<typeof Header23>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header23
        {...args}
        backLabel={t.back}
        title={<Typography variant="h6">{t.title}</Typography>}
        subtitle={<Typography variant="body2" color="text.secondary">{t.subtitle}</Typography>}
        end={<Chip label={t.status} color="success" size="small" />}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
