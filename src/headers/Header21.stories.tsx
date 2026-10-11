import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Header21 } from "./Header21";

const text = {
  en: { title: "Monthly overview", action: "Share with the team" },
  el: { title: "Μηνιαία επισκόπηση", action: "Κοινοποίηση στην ομάδα" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header21",
  component: Header21,
  decorators: [(Story) => <Box sx={{ p: 2 }}><Story /></Box>],
} satisfies Meta<typeof Header21>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header21
        {...args}
        start={<IconButton><ArrowBackIcon /></IconButton>}
        center={<Typography variant="h6" noWrap>{t.title}</Typography>}
        end={<Button variant="outlined" size="small">{t.action}</Button>}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
