import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer03 } from "./Footer03";

const text = {
  en: {
    copyright: "© 2025 Company. All rights reserved.",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    externalLinks: [{ label: "Source code", href: "https://example.com" }],
  },
  el: {
    copyright: "© 2025 Company. Με την επιφύλαξη παντός δικαιώματος.",
    links: [
      { label: "Απόρρητο", href: "/privacy" },
      { label: "Όροι", href: "/terms" },
    ],
    externalLinks: [{ label: "Πηγαίος κώδικας", href: "https://example.com" }],
  },
};

const meta = {
  title: "Design Core/Footers/Footer03",
  component: Footer03,
  args: text.en,
} satisfies Meta<typeof Footer03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Footer03 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
