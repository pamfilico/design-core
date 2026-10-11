import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import HelpIcon from "@mui/icons-material/Help";
import { Sidebar11, type Sidebar11Props, type Sidebar11Section } from "./Sidebar11";

type Locale = "en" | "el";

const text = {
  en: { home: "Home", demo: "Demo", faq: "FAQ", hint: "Scroll or tap a button to jump to a section." },
  el: { home: "Αρχική", demo: "Επίδειξη", faq: "Συχνές ερωτήσεις", hint: "Κάντε κύλιση ή πατήστε ένα κουμπί για να μεταβείτε σε μια ενότητα." },
};

function sections(locale: Locale): Sidebar11Section[] {
  const t = text[locale];
  return [
    { id: "hero", label: t.home, icon: <HomeIcon /> },
    { id: "demo", label: t.demo, icon: <PlayCircleFilledIcon /> },
    { id: "faq", label: t.faq, icon: <HelpIcon /> },
  ];
}

/** A fixed header bar holding the row, above a long page with three sections. */
function LongPage({ locale, args }: { locale: Locale; args: Sidebar11Props }) {
  const [active, setActive] = React.useState(args.activeId ?? "");
  const items = sections(locale);
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: "secondary.main" }} />
          <Box sx={{ flexGrow: 1 }} />
          <Sidebar11
            {...args}
            sections={items}
            activeId={active}
            onSelect={(id) => {
              setActive(id);
              args.onSelect(id);
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
      {items.map((s, i) => (
        <Box
          key={s.id}
          id={s.id}
          sx={{ minHeight: "90vh", p: 3, pt: 12, bgcolor: i % 2 ? "action.hover" : "background.default" }}
        >
          <Typography variant="h4">{s.label}</Typography>
          <Typography color="text.secondary">{text[locale].hint}</Typography>
        </Box>
      ))}
    </Box>
  );
}

const meta = {
  title: "Design Core/Sidebars/Sidebar11",
  component: Sidebar11,
  args: { sections: sections("en"), activeId: "hero", onSelect: () => {} },
  parameters: { viewport: { defaultViewport: "mobile1" } },
} satisfies Meta<typeof Sidebar11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <LongPage args={args} locale={(globals.locale ?? "en") as Locale} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Nothing tapped yet: every button uses the primary colour. */
export const NoneActive: Story = { ...English, args: { activeId: undefined } };
