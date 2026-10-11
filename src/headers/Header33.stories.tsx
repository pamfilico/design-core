import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header33 } from "./Header33";

const text = {
  en: { title: "Dashboard", menuLabel: "Open navigation" },
  el: { title: "Πίνακας ελέγχου", menuLabel: "Άνοιγμα πλοήγησης" },
};

const meta = {
  title: "Design Core/Headers/Header33",
  component: Header33,
  args: { ...text.en, position: "static", railWidth: 0, onMenuClick: () => {} },
} satisfies Meta<typeof Header33>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header33 {...args} {...text[(globals.locale ?? "en") as "en" | "el"]} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
/** Offset by a 240px rail on desktop, as inside the app shell. */
export const WithRailOffset: Story = { ...English, args: { railWidth: 240 } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
