import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import HelpIcon from "@mui/icons-material/Help";
import { Sidebar10, type Sidebar10Props, type Sidebar10Section } from "./Sidebar10";

type Locale = "en" | "el";

const text = {
  en: { home: "Home", demo: "Demo", faq: "FAQ", hint: "Scroll or tap a button to jump to a section." },
  el: { home: "Αρχική", demo: "Επίδειξη", faq: "Συχνές ερωτήσεις", hint: "Κάντε κύλιση ή πατήστε ένα κουμπί για να μεταβείτε σε μια ενότητα." },
};

function sections(locale: Locale): Sidebar10Section[] {
  const t = text[locale];
  return [
    { id: "hero", label: t.home, icon: <HomeIcon /> },
    { id: "demo", label: t.demo, icon: <PlayCircleFilledIcon /> },
    { id: "faq", label: t.faq, icon: <HelpIcon /> },
  ];
}

/** A long page with three sections; tapping a button scrolls to it and marks it active. */
function LongPage({ locale, args }: { locale: Locale; args: Sidebar10Props }) {
  const [active, setActive] = React.useState(args.activeId ?? "");
  const items = sections(locale);
  return (
    <Box>
      {items.map((s, i) => (
        <Box
          key={s.id}
          id={s.id}
          sx={{ minHeight: "90vh", p: 3, bgcolor: i % 2 ? "action.hover" : "background.default" }}
        >
          <Typography variant="h4">{s.label}</Typography>
          <Typography color="text.secondary">{text[locale].hint}</Typography>
        </Box>
      ))}
      <Sidebar10
        {...args}
        sections={items}
        activeId={active}
        onSelect={(id) => {
          setActive(id);
          args.onSelect(id);
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </Box>
  );
}

const meta = {
  title: "Design Core/Sidebars/Sidebar10",
  component: Sidebar10,
  args: { sections: sections("en"), activeId: "hero", onSelect: () => {} },
  parameters: { viewport: { defaultViewport: "mobile1" } },
} satisfies Meta<typeof Sidebar10>;

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
