import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer05 } from "./Footer05";

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
  title: "Design Core/Footers/Footer05",
  component: Footer05,
  args: { ...text.en, onNavigate: () => {} },
} satisfies Meta<typeof Footer05>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Footer05 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
