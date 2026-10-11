import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "@mui/material/Button";
import { Header44 } from "./Header44";

const text = {
  en: { title: "Users", subtitle: "Everyone with access to this workspace.", action: "Add user" },
  el: { title: "Χρήστες", subtitle: "Όλοι όσοι έχουν πρόσβαση σε αυτόν τον χώρο εργασίας.", action: "Προσθήκη χρήστη" },
};

const meta = {
  title: "Design Core/Headers/Header44",
  component: Header44,
  args: { title: text.en.title },
} satisfies Meta<typeof Header44>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as "en" | "el"];
    return <Header44 {...args} title={t.title} subtitle={t.subtitle} actions={<Button variant="contained">{t.action}</Button>} />;
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const TitleOnly: Story = { args: { title: "Users" } };
