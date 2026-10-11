import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer07 } from "./Footer07";

const text = {
  en: {
    copyright: "© 2024",
    credit: { label: "example.com", href: "https://example.com" },
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  el: {
    copyright: "© 2024",
    credit: { label: "example.com", href: "https://example.com" },
    links: [
      { label: "Όροι", href: "/terms" },
      { label: "Απόρρητο", href: "/privacy" },
    ],
  },
};

const meta = {
  title: "Design Core/Footers/Footer07",
  component: Footer07,
  args: text.en,
} satisfies Meta<typeof Footer07>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Footer07 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Transparent: Story = { ...English, globals: { mode: "dark" }, args: { solid: false, openInNewTab: false } };
