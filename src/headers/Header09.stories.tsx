import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header09 } from "./Header09";

const text = {
  en: { items: ["Users", "Datasets", "Logs"] },
  el: { items: ["Χρήστες", "Σύνολα δεδομένων", "Αρχεία καταγραφής"] },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header09",
  component: Header09,
  parameters: { layout: "fullscreen" },
  args: { items: [], activeHref: "/admin/users" },
} satisfies Meta<typeof Header09>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header09
        {...args}
        items={[
          { label: t.items[0], href: "/admin/users" },
          { label: t.items[1], href: "/admin/datasets" },
          { label: t.items[2], href: "/admin/logs" },
        ]}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SecondActive: Story = { ...English, args: { activeHref: "/admin/datasets" } };
