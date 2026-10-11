import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header05 } from "./Header05";

const text = {
  en: { title: "Company · admin", items: ["Section switches", "Global switches"], signOutLabel: "Sign out" },
  el: { title: "Εταιρεία · διαχείριση", items: ["Διακόπτες ενοτήτων", "Γενικοί διακόπτες"], signOutLabel: "Αποσύνδεση" },
};
type L = keyof typeof text;

const meta = {
  title: "Design Core/Headers/Header05",
  component: Header05,
  parameters: { layout: "fullscreen" },
  args: { title: text.en.title, onSignOut: () => {} },
} satisfies Meta<typeof Header05>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header05
        {...args}
        title={t.title}
        signOutLabel={t.signOutLabel}
        items={[
          { label: t.items[0], href: "#sections" },
          { label: t.items[1], href: "#global" },
        ]}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
