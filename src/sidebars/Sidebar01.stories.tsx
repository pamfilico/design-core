import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import QueueIcon from "@mui/icons-material/Queue";
import LayersIcon from "@mui/icons-material/Layers";
import ExtensionIcon from "@mui/icons-material/Extension";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import BadgeIcon from "@mui/icons-material/Badge";
import SettingsIcon from "@mui/icons-material/Settings";
import MapIcon from "@mui/icons-material/Map";
import { Sidebar01, type Sidebar01Section } from "./Sidebar01";

type Locale = "en" | "el";

const text = {
  en: {
    workspace: "Workspace", home: "Home", dashboard: "Dashboard", people: "People", queue: "Queue",
    batch: "Batch jobs", integrations: "Integrations", docs: "Docs", developer: "Developer",
    apiKeys: "API keys", team: "Team", members: "Members", settings: "Settings",
    comingSoon: "Coming soon", map: "Map", disabledSuffix: " — coming soon", page: "Page content",
  },
  el: {
    workspace: "Χώρος εργασίας", home: "Αρχική", dashboard: "Πίνακας ελέγχου", people: "Άτομα", queue: "Ουρά",
    batch: "Μαζικές εργασίες", integrations: "Ενσωματώσεις", docs: "Τεκμηρίωση", developer: "Προγραμματιστές",
    apiKeys: "Κλειδιά API", team: "Ομάδα", members: "Μέλη", settings: "Ρυθμίσεις",
    comingSoon: "Σύντομα", map: "Χάρτης", disabledSuffix: " — σύντομα", page: "Περιεχόμενο σελίδας",
  },
};

function sections(locale: Locale): Sidebar01Section[] {
  const t = text[locale];
  return [
    {
      sectionLabel: t.workspace,
      items: [
        { label: t.home, href: "/", icon: <HomeIcon fontSize="small" /> },
        { label: t.dashboard, href: "/dashboard", icon: <DashboardIcon fontSize="small" /> },
        { label: t.people, href: "/people", icon: <PeopleIcon fontSize="small" /> },
        {
          label: t.queue,
          href: "/queue",
          icon: <QueueIcon fontSize="small" />,
          children: [{ label: t.batch, href: "/queue/batch", icon: <LayersIcon fontSize="small" /> }],
        },
        { label: t.integrations, href: "/integrations", icon: <ExtensionIcon fontSize="small" /> },
        { label: t.docs, href: "/docs", icon: <MenuBookIcon fontSize="small" /> },
      ],
    },
    {
      sectionLabel: t.developer,
      dividerBefore: true,
      items: [{ label: t.apiKeys, href: "/api-keys", icon: <VpnKeyIcon fontSize="small" /> }],
    },
    {
      sectionLabel: t.team,
      dividerBefore: true,
      items: [{ label: t.members, href: "/members", icon: <BadgeIcon fontSize="small" /> }],
    },
    {
      sectionLabel: t.comingSoon,
      dividerBefore: true,
      items: [{ label: t.map, href: "/map", icon: <MapIcon fontSize="small" />, disabled: true }],
    },
    { items: [{ label: t.settings, href: "/settings", icon: <SettingsIcon fontSize="small" /> }] },
  ];
}

/** The rail beside a placeholder page, the way a layout places it. */
function Frame({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {children}
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="overline" color="text.secondary">{text[locale].page}</Typography>
        <Box sx={{ mt: 1, height: 160, borderRadius: 2, border: "1px dashed", borderColor: "divider" }} />
      </Box>
    </Box>
  );
}

const hoverRail = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await userEvent.hover(await within(canvasElement).findByTestId("sidebar"));
  await new Promise((r) => setTimeout(r, 450));
};

const meta = {
  title: "Design Core/Sidebars/Sidebar01",
  component: Sidebar01,
  args: { sections: sections("en"), activeHref: "/dashboard", onNavigate: () => {} },
} satisfies Meta<typeof Sidebar01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return (
      <Frame locale={locale}>
        <Sidebar01 {...args} sections={sections(locale)} disabledSuffix={text[locale].disabledSuffix} />
      </Frame>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Hovered: the rail widens to show labels, captions and nested children. */
export const Expanded: Story = { ...English, play: hoverRail };

/** Below `md` with `mobileDrawer`: a temporary drawer with full labels. */
export const MobileDrawer: Story = {
  ...English,
  args: { mobileDrawer: { open: true, onClose: () => {} } },
  parameters: { viewport: { defaultViewport: "mobile1" } },
};
