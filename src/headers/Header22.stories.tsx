import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import { Header22 } from "./Header22";

const text = {
  en: { title: "Customers", center: "24 total", action: "Add customer" },
  el: { title: "Πελάτες", center: "24 συνολικά", action: "Προσθήκη πελάτη" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header22",
  component: Header22,
  decorators: [(Story) => <Box sx={{ p: 2 }}><Story /></Box>],
} satisfies Meta<typeof Header22>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header22
        {...args}
        left={<Typography variant="h5">{t.title}</Typography>}
        center={<Typography color="text.secondary">{t.center}</Typography>}
        right={
          <>
            <Button variant="contained">{t.action}</Button>
            <IconButton><InstallMobileIcon /></IconButton>
          </>
        }
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
