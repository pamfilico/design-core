import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DescriptionIcon from "@mui/icons-material/Description";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ChatIcon from "@mui/icons-material/Chat";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Sidebar04 } from "./Sidebar04";
import type { Sidebar01Section } from "./Sidebar01";

type Locale = "en" | "el";

const text = {
  en: {
    overline: "Contact", record: "Record", back: "Back to list", sections: "Sections", profile: "Profile",
    contacts: "Contacts", documents: "Documents", insights: "Insights", chat: "Chat", pages: "Pages",
  },
  el: {
    overline: "Επαφή", record: "Εγγραφή", back: "Πίσω στη λίστα", sections: "Ενότητες", profile: "Προφίλ",
    contacts: "Επαφές", documents: "Έγγραφα", insights: "Πληροφορίες", chat: "Συνομιλία", pages: "Σελίδες",
  },
};

const base = "/records/42";

function sections(locale: Locale): Sidebar01Section[] {
  const t = text[locale];
  return [
    { sectionLabel: t.record, items: [{ label: t.back, href: "/records", icon: <ArrowBackIcon fontSize="small" />, matchPath: () => false }] },
    {
      sectionLabel: t.sections,
      dividerBefore: true,
      items: [
        { label: t.profile, href: base, icon: <PersonIcon fontSize="small" />, matchPath: (p) => p === base },
        { label: t.contacts, href: `${base}/contacts`, icon: <ContactMailIcon fontSize="small" /> },
        { label: t.documents, href: `${base}/documents`, icon: <DescriptionIcon fontSize="small" /> },
        { label: t.insights, href: `${base}/insights`, icon: <PsychologyIcon fontSize="small" /> },
        { label: t.chat, href: `${base}/chat`, icon: <ChatIcon fontSize="small" /> },
        { label: t.pages, href: `${base}/pages`, icon: <TravelExploreIcon fontSize="small" /> },
      ],
    },
  ];
}

const hoverRail = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await userEvent.hover(await within(canvasElement).findByTestId("sidebar"));
  await new Promise((r) => setTimeout(r, 450));
};

const meta = {
  title: "Design Core/Sidebars/Sidebar04",
  component: Sidebar04,
  args: { overline: text.en.overline, title: "Jane Doe", sections: sections("en"), activeHref: `${base}/contacts`, onNavigate: () => {} },
} satisfies Meta<typeof Sidebar04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return (
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar04 {...args} overline={text[locale].overline} sections={sections(locale)} />
        <Box sx={{ flex: 1 }} />
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Hovered: the overline and record title appear above the sections. */
export const Expanded: Story = { ...English, play: hoverRail };

/** Title not loaded yet: the placeholder shows. */
export const Loading: Story = { ...English, args: { title: "" }, play: hoverRail };
