import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Header03 } from "./Header03";

const text = {
  en: { title: "Reports", action: "Export" },
  el: { title: "Αναφορές", action: "Εξαγωγή" },
};
type L = keyof typeof text;

const meta = { title: "Design Core/Headers/Header03", component: Header03, parameters: { layout: "fullscreen" } } satisfies Meta<typeof Header03>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header03
        {...args}
        left={
          <IconButton color="inherit" edge="start">
            <ArrowBackIcon />
          </IconButton>
        }
        center={<Typography variant="h6">{t.title}</Typography>}
        right={
          <Button color="inherit" variant="outlined" size="small">
            {t.action}
          </Button>
        }
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
