import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Sidebar07, type Sidebar07Item } from "./Sidebar07";

type Locale = "en" | "el";

const text = {
  en: {
    title: "Pipelines", subtitle: "Select a pipeline to see its results", empty: "No pipelines found.",
    open: "Open editor", steps: "steps", links: "links", names: ["Daily import", "Weekly report", "Clean-up"],
  },
  el: {
    title: "Ροές εργασιών", subtitle: "Επιλέξτε μια ροή για να δείτε τα αποτελέσματα", empty: "Δεν βρέθηκαν ροές.",
    open: "Άνοιγμα επεξεργαστή", steps: "βήματα", links: "συνδέσεις", names: ["Ημερήσια εισαγωγή", "Εβδομαδιαία αναφορά", "Καθαρισμός"],
  },
};

function items(locale: Locale): Sidebar07Item[] {
  const t = text[locale];
  return t.names.map((name, i) => ({ id: String(i + 1), name, chips: [`${3 + i} ${t.steps}`, `${2 + i} ${t.links}`] }));
}

const meta = {
  title: "Design Core/Sidebars/Sidebar07",
  component: Sidebar07,
  args: {
    title: text.en.title,
    subtitle: text.en.subtitle,
    emptyText: text.en.empty,
    items: items("en"),
    selectedId: "2",
    onSelect: () => {},
    onOpen: () => {},
    openTitle: text.en.open,
  },
} satisfies Meta<typeof Sidebar07>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: function Render(args, { globals }) {
    const locale = (globals.locale ?? "en") as Locale;
    const t = text[locale];
    const [selected, setSelected] = React.useState<string | null>(args.selectedId);
    return (
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar07
          {...args}
          title={t.title}
          subtitle={t.subtitle}
          emptyText={t.empty}
          openTitle={t.open}
          items={args.items.length ? items(locale) : []}
          selectedId={selected}
          onSelect={setSelected}
        />
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Loading: Story = { ...English, args: { loading: true } };
export const Empty: Story = { ...English, args: { items: [] } };
