import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import LabelIcon from "@mui/icons-material/Label";
import QueueIcon from "@mui/icons-material/Queue";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import PaidIcon from "@mui/icons-material/Paid";
import ForumIcon from "@mui/icons-material/Forum";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BuildIcon from "@mui/icons-material/Build";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PersonIcon from "@mui/icons-material/Person";
import { Sidebar06, type Sidebar06Section } from "./Sidebar06";

type Locale = "en" | "el";

const text = {
  en: {
    dashboard: "Dashboard", history: "History", channels: "Channels", queue: "Queue", search: "Search",
    places: "Places", web: "Web", credits: "Credits", analysis: "Analysis", topics: "Topics", clone: "Clone",
    tools: "Tools", builder: "Builder", pipelines: "Pipelines", profile: "Profile", fallback: "User",
  },
  el: {
    dashboard: "Πίνακας ελέγχου", history: "Ιστορικό", channels: "Κανάλια", queue: "Ουρά", search: "Αναζήτηση",
    places: "Τοποθεσίες", web: "Διαδίκτυο", credits: "Μονάδες", analysis: "Ανάλυση", topics: "Θέματα",
    clone: "Αντίγραφο", tools: "Εργαλεία", builder: "Δημιουργός", pipelines: "Ροές εργασιών", profile: "Προφίλ",
    fallback: "Χρήστης",
  },
};

function sections(locale: Locale): Sidebar06Section[] {
  const t = text[locale];
  return [
    {
      items: [
        { label: t.dashboard, href: "/dashboard", icon: <DashboardIcon fontSize="small" />, exact: true },
        { label: t.history, href: "/tools/history", icon: <HistoryIcon fontSize="small" /> },
        { label: t.channels, href: "/tools/channels", icon: <LabelIcon fontSize="small" /> },
        { label: t.queue, href: "/tools/queue", icon: <QueueIcon fontSize="small" /> },
      ],
    },
    {
      sectionLabel: t.search,
      items: [
        { label: t.places, href: "/tools/search/places", icon: <PlaceIcon fontSize="small" /> },
        { label: t.web, href: "/tools/search/web", icon: <SearchIcon fontSize="small" /> },
        { label: t.credits, href: "/tools/search/credits", icon: <PaidIcon fontSize="small" /> },
      ],
    },
    {
      sectionLabel: t.analysis,
      items: [
        { label: t.topics, href: "/tools/topics", icon: <ForumIcon fontSize="small" /> },
        { label: t.clone, href: "/tools/clone", icon: <ContentCopyIcon fontSize="small" /> },
      ],
    },
    {
      sectionLabel: t.tools,
      items: [
        { label: t.builder, href: "/tools/builder", icon: <BuildIcon fontSize="small" /> },
        { label: t.pipelines, href: "/tools/pipelines", icon: <AccountTreeIcon fontSize="small" /> },
      ],
    },
    { items: [{ label: t.profile, href: "/profile", icon: <PersonIcon fontSize="small" /> }] },
  ];
}

const meta = {
  title: "Design Core/Sidebars/Sidebar06",
  component: Sidebar06,
  args: {
    sections: sections("en"),
    activeHref: "/tools/queue",
    user: { name: "Jane Doe", email: "jane@example.com" },
    onNavigate: () => {},
    onCloseMobile: () => {},
  },
} satisfies Meta<typeof Sidebar06>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return (
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar06 {...args} sections={sections(locale)} userFallbackName={text[locale].fallback} />
        <Box sx={{ flex: 1 }} />
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Hovered: user name/email, section captions and labels fade in. */
export const Expanded: Story = {
  ...English,
  play: async ({ canvasElement }) => {
    await userEvent.hover(await within(canvasElement).findByTestId("sidebar"));
    await new Promise((r) => setTimeout(r, 450));
  },
};

/** No user yet: the block is hidden. */
export const SignedOut: Story = { ...English, args: { user: null } };

/** Below `md`: a temporary drawer. */
export const MobileDrawer: Story = {
  ...English,
  args: { mobileOpen: true },
  parameters: { viewport: { defaultViewport: "mobile1" } },
};
