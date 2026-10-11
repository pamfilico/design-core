import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header38 } from "./Header38";

const text = {
  en: { title: "Ten things to do this summer", byLabel: "By", date: "June 12, 2026", actionLabel: "Book now" },
  el: { title: "Δέκα πράγματα να κάνετε αυτό το καλοκαίρι", byLabel: "Από", date: "12 Ιουνίου 2026", actionLabel: "Κράτηση" },
};

const meta = {
  title: "Design Core/Headers/Header38",
  component: Header38,
  args: { ...text.en, author: "Jane Doe", onAction: () => {} },
} satisfies Meta<typeof Header38>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header38 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const NoByline: Story = { ...English, render: (args) => <Header38 {...args} author={undefined} date={undefined} /> };
export const NoAction: Story = { ...English, args: { onAction: undefined } };
