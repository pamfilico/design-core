import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SettingsIcon from "@mui/icons-material/Settings";
import { Header06 } from "./Header06";

const text = {
  en: { title: "Admin", back: "Back", tabs: ["Overview", "Statuses", "Channels", "Action types", "Waitlist", "Event types", "Schemas", "Queues", "Connectors"] },
  el: { title: "Διαχείριση", back: "Πίσω", tabs: ["Επισκόπηση", "Καταστάσεις", "Κανάλια", "Τύποι ενεργειών", "Λίστα αναμονής", "Τύποι συμβάντων", "Σχήματα", "Ουρές", "Συνδέσεις"] },
};
type L = keyof typeof text;
const keys = ["overview", "statuses", "channels", "actions", "waitlist", "events", "schemas", "queues", "connectors"];

function Demo({ l }: { l: L }) {
  const [tab, setTab] = React.useState("overview");
  const t = text[l];
  return (
    <Header06
      title={t.title}
      backLabel={t.back}
      icon={<SettingsIcon />}
      onBack={() => {}}
      tabs={keys.map((k, i) => ({ value: k, label: t.tabs[i] }))}
      activeTab={tab}
      onTabChange={setTab}
    />
  );
}

const meta = {
  title: "Design Core/Headers/Header06",
  component: Header06,
  parameters: { layout: "fullscreen" },
  args: { title: "Admin", tabs: [] },
} satisfies Meta<typeof Header06>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = { globals: { locale: "en" }, render: (_a, { globals }) => <Demo l={(globals.locale ?? "en") as L} /> };
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
