import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Sidebar08, type Sidebar08Block, type Sidebar08Item } from "./Sidebar08";

type Locale = "en" | "el";

const text = {
  en: {
    title: "Tools", blocks: "Blocks", primary: "Built in", secondary: "Custom", newTitle: "New tool",
    view: "View input and output", check: "Check dependencies", scope: "per page",
    names: ["Fetch page", "Extract text", "Classify", "Summarise", "My extractor"], chain: "Read and summarise",
  },
  el: {
    title: "Εργαλεία", blocks: "Μπλοκ", primary: "Ενσωματωμένα", secondary: "Προσαρμοσμένα", newTitle: "Νέο εργαλείο",
    view: "Προβολή εισόδου και εξόδου", check: "Έλεγχος εξαρτήσεων", scope: "ανά σελίδα",
    names: ["Λήψη σελίδας", "Εξαγωγή κειμένου", "Ταξινόμηση", "Σύνοψη", "Ο εξαγωγέας μου"], chain: "Ανάγνωση και σύνοψη",
  },
};

function items(locale: Locale): Sidebar08Item[] {
  const t = text[locale];
  const tags = ["fetch", "regex", "classifier", "ai", "ai"];
  return t.names.map((name, i) => ({
    id: String(i + 1),
    name,
    caption: "text -> json",
    subcaption: t.scope,
    tag: tags[i],
    secondary: i === 4,
  }));
}

const blocks = (locale: Locale): Sidebar08Block[] => [{ id: "b1", name: text[locale].chain, steps: ["1", "2", "4"] }];

const meta = {
  title: "Design Core/Sidebars/Sidebar08",
  component: Sidebar08,
  args: {
    title: text.en.title,
    blocksLabel: text.en.blocks,
    primaryLabel: text.en.primary,
    secondaryLabel: text.en.secondary,
    newTitle: text.en.newTitle,
    viewTitle: text.en.view,
    checkTitle: text.en.check,
    items: items("en"),
    blocks: blocks("en"),
    selectedId: "2",
    onSelect: () => {},
    onNew: () => {},
    onView: () => {},
    onCheck: () => {},
  },
} satisfies Meta<typeof Sidebar08>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: function Render(args, { globals }) {
    const locale = (globals.locale ?? "en") as Locale;
    const t = text[locale];
    const [selected, setSelected] = React.useState<string | null>(args.selectedId);
    return (
      <Box sx={{ display: "flex", justifyContent: "flex-end", height: "100vh" }}>
        <Sidebar08
          {...args}
          title={t.title}
          blocksLabel={t.blocks}
          primaryLabel={t.primary}
          secondaryLabel={t.secondary}
          newTitle={t.newTitle}
          viewTitle={t.view}
          checkTitle={t.check}
          items={items(locale)}
          blocks={blocks(locale)}
          selectedId={selected}
          onSelect={(item) => setSelected(item.id)}
        />
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Loading: Story = { ...English, args: { loading: true } };
/** One row's check is running. */
export const Checking: Story = { ...English, args: { checkingId: "1" } };
