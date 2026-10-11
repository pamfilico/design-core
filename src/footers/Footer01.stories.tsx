import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer01 } from "./Footer01";

const text = {
  en: {
    copyright: "© 2025 Company. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  el: {
    copyright: "© 2025 Company. Με την επιφύλαξη παντός δικαιώματος.",
    links: [
      { label: "Πολιτική απορρήτου", href: "/privacy" },
      { label: "Όροι χρήσης", href: "/terms" },
    ],
  },
};

const meta = {
  title: "Design Core/Footers/Footer01",
  component: Footer01,
  args: { copyright: text.en.copyright },
} satisfies Meta<typeof Footer01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Footer01 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const VisibleOnMobile: Story = {
  ...English,
  args: { hideOnMobile: false },
  parameters: { viewport: { defaultViewport: "mobile1" } },
};
