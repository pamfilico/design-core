import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer06 } from "./Footer06";

const text = {
  en: {
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
    poweredByLabel: "Powered by",
  },
  el: {
    links: [
      { label: "Όροι", href: "/terms" },
      { label: "Απόρρητο", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
    poweredByLabel: "Με την υποστήριξη του",
  },
};

const meta = {
  title: "Design Core/Footers/Footer06",
  component: Footer06,
  args: { ...text.en, businessName: "Company", poweredByName: "Platform", year: 2025 },
} satisfies Meta<typeof Footer06>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Footer06 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
export const NoCredit: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => (
    <Footer06
      {...args}
      {...text[(globals.locale ?? "en") as "en" | "el"]}
      poweredByLabel={undefined}
      poweredByName={undefined}
    />
  ),
};
