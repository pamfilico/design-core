import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header10, type Header10Props } from "./Header10";

const text = {
  en: {
    title: "Weekly import",
    nodes: "8 steps",
    edges: "7 links",
    running: "Running",
    completed: "Completed",
    failed: "Failed",
    done: "5 done",
    active: "1 running",
    site: "Source",
    pages: "Pages (3)",
    allPages: "All pages",
    selected: (n: number) => `${n} selected`,
    run: "Run all",
  },
  el: {
    title: "Εβδομαδιαία εισαγωγή",
    nodes: "8 βήματα",
    edges: "7 συνδέσεις",
    running: "Σε εξέλιξη",
    completed: "Ολοκληρώθηκε",
    failed: "Απέτυχε",
    done: "5 ολοκληρώθηκαν",
    active: "1 σε εξέλιξη",
    site: "Πηγή",
    pages: "Σελίδες (3)",
    allPages: "Όλες οι σελίδες",
    selected: (n: number) => `${n} επιλεγμένες`,
    run: "Εκτέλεση όλων",
  },
};
type L = keyof typeof text;

function props(l: L): Header10Props {
  const t = text[l];
  return {
    title: t.title,
    chips: [{ label: t.nodes }, { label: t.edges }],
    statusLabels: { running: t.running, completed: t.completed, failed: t.failed },
    statusChips: [
      { label: t.done, color: "success" },
      { label: t.active, color: "info" },
    ],
    select: {
      label: t.site,
      value: "a",
      options: [
        { value: "a", label: "example.com" },
        { value: "b", label: "example.org" },
      ],
    },
    multiSelect: {
      label: t.pages,
      value: [],
      options: [
        { value: "1", label: "1. /" },
        { value: "2", label: "2. /about" },
        { value: "3", label: "3. /contact" },
      ],
      renderValue: (s) => (s.length === 0 ? t.allPages : t.selected(s.length)),
    },
    actionLabel: t.run,
    onAction: () => {},
  };
}

const meta = {
  title: "Design Core/Headers/Header10",
  component: Header10,
  parameters: { layout: "fullscreen" },
  args: props("en"),
} satisfies Meta<typeof Header10>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header10 {...props((globals.locale ?? "en") as L)} status={args.status} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Running: Story = { ...English, args: { status: "running" } };
export const Failed: Story = { ...English, args: { status: "failed" } };
