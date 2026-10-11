import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Footer08 } from "./Footer08";

const logo = <Box sx={{ width: 24, height: 24, borderRadius: 1, bgcolor: "primary.main" }} />;

const text = {
  en: {
    description: "A short description of what the app does.",
    copyright: "Copyright © 2025 - All rights reserved",
    columns: [
      {
        title: "LINKS",
        links: [
          { label: "Support", href: "mailto:jane@example.com", external: true },
          { label: "Pricing", href: "/#pricing" },
          { label: "Blog", href: "/blog" },
          { label: "Affiliates", href: "/#", external: true },
        ],
      },
      {
        title: "LEGAL",
        links: [
          { label: "Terms of services", href: "/tos" },
          { label: "Privacy policy", href: "/privacy-policy" },
        ],
      },
    ],
  },
  el: {
    description: "Μια σύντομη περιγραφή του τι κάνει η εφαρμογή.",
    copyright: "Copyright © 2025 - Με την επιφύλαξη παντός δικαιώματος",
    columns: [
      {
        title: "ΣΥΝΔΕΣΜΟΙ",
        links: [
          { label: "Υποστήριξη", href: "mailto:jane@example.com", external: true },
          { label: "Τιμές", href: "/#pricing" },
          { label: "Ιστολόγιο", href: "/blog" },
          { label: "Συνεργάτες", href: "/#", external: true },
        ],
      },
      {
        title: "ΝΟΜΙΚΑ",
        links: [
          { label: "Όροι χρήσης", href: "/tos" },
          { label: "Πολιτική απορρήτου", href: "/privacy-policy" },
        ],
      },
    ],
  },
};

const meta = {
  title: "Design Core/Footers/Footer08",
  component: Footer08,
  args: { ...text.en, appName: "Company", logo },
} satisfies Meta<typeof Footer08>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Footer08 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
