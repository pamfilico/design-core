import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TextField from "@mui/material/TextField";
import { Header24 } from "./Header24";

const text = {
  en: { date: "Date", quick: ["Yesterday", "Today", "Tomorrow"] },
  el: { date: "Ημερομηνία", quick: ["Χθες", "Σήμερα", "Αύριο"] },
};
type L = keyof typeof text;

function Demo({ l }: { l: L }) {
  const [sel, setSel] = React.useState(1);
  const t = text[l];
  return (
    <Header24
      datePicker={
        <TextField
          label={t.date}
          type="date"
          size="small"
          fullWidth
          defaultValue="2026-10-11"
          slotProps={{ inputLabel: { shrink: true } }}
          sx={{ "& .MuiOutlinedInput-root": { backgroundColor: "background.default" } }}
        />
      }
      quickPicks={t.quick.map((label, i) => ({ label, selected: sel === i, onClick: () => setSel(i) }))}
    />
  );
}

const meta = {
  title: "Design Core/Headers/Header24",
  component: Header24,
  args: { datePicker: null, quickPicks: [] },
} satisfies Meta<typeof Header24>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = { globals: { locale: "en" }, render: (_a, { globals }) => <Demo l={(globals.locale ?? "en") as L} /> };
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
