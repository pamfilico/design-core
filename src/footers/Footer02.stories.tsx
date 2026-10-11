import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer02 } from "./Footer02";

const text = {
  en: {
    brandName: "Company Manager",
    description: "Modern management platform for growing businesses.",
    copyright: "© 2025 Company Manager. All rights reserved.",
    columns: [
      { title: "Support", links: [{ label: "Contact", href: "mailto:jane@example.com" }] },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    ],
  },
  el: {
    brandName: "Company Manager",
    description: "Σύγχρονη πλατφόρμα διαχείρισης για επιχειρήσεις που αναπτύσσονται.",
    copyright: "© 2025 Company Manager. Με την επιφύλαξη παντός δικαιώματος.",
    columns: [
      { title: "Υποστήριξη", links: [{ label: "Επικοινωνία", href: "mailto:jane@example.com" }] },
      {
        title: "Νομικά",
        links: [
          { label: "Πολιτική απορρήτου", href: "/privacy" },
          { label: "Όροι χρήσης", href: "/terms" },
        ],
      },
    ],
  },
};

const meta = {
  title: "Design Core/Footers/Footer02",
  component: Footer02,
  args: text.en,
} satisfies Meta<typeof Footer02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Footer02 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const ThreeEvenColumns: Story = { ...English, args: { columnSize: 4 } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
