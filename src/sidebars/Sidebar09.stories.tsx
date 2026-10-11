import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Sidebar09 } from "./Sidebar09";

type Locale = "en" | "el";

const text = {
  en: {
    title: "Extract text", completed: "completed", failed: "failed", error: "The page could not be reached.",
    description: "Reads a page and returns its visible text.", id: "ID", kind: "Kind", scope: "Scope",
    input: "Input", output: "Output", run: "Run step", view: "View output", close: "Close",
  },
  el: {
    title: "Εξαγωγή κειμένου", completed: "ολοκληρώθηκε", failed: "απέτυχε", error: "Η σελίδα δεν ήταν προσβάσιμη.",
    description: "Διαβάζει μια σελίδα και επιστρέφει το ορατό κείμενο.", id: "Αναγνωριστικό", kind: "Είδος",
    scope: "Εύρος", input: "Είσοδος", output: "Έξοδος", run: "Εκτέλεση βήματος", view: "Προβολή εξόδου", close: "Κλείσιμο",
  },
};

function content(locale: Locale) {
  const t = text[locale];
  return {
    title: t.title,
    description: t.description,
    closeLabel: t.close,
    status: { label: t.completed, color: "success" as const },
    details: [
      { label: t.id, value: "extract_text" },
      { label: t.kind, value: "regex" },
      { label: t.scope, value: "per_page" },
    ],
    codeBlocks: [
      { title: t.input, content: JSON.stringify({ url: { type: "string" } }, null, 2) },
      { title: t.output, content: JSON.stringify({ text: { type: "string" } }, null, 2) },
    ],
    primaryAction: { label: t.run, onClick: () => {} },
    secondaryAction: { label: t.view, onClick: () => {} },
  };
}

const meta = {
  title: "Design Core/Sidebars/Sidebar09",
  component: Sidebar09,
  args: { open: true, onClose: () => {}, ...content("en") },
} satisfies Meta<typeof Sidebar09>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    const c = content(locale);
    return (
      <Sidebar09
        {...args}
        {...c}
        status={args.status === null ? null : args.status?.color === "error" ? { label: text[locale].failed, color: "error" } : c.status}
        error={args.error ? text[locale].error : undefined}
        primaryAction={{ ...c.primaryAction, loading: args.primaryAction?.loading }}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Failed step: red status chip and the error message. */
export const Failed: Story = { ...English, args: { status: { label: text.en.failed, color: "error" }, error: text.en.error } };

/** Step running: spinner in the disabled primary button. */
export const Running: Story = {
  ...English,
  args: { status: null, primaryAction: { label: text.en.run, onClick: () => {}, loading: true } },
};
