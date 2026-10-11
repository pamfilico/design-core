import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import CampaignIcon from "@mui/icons-material/Campaign";
import TimelineIcon from "@mui/icons-material/Timeline";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import BugReportIcon from "@mui/icons-material/BugReport";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Sidebar05, type Sidebar05Item } from "./Sidebar05";

type Locale = "en" | "el";

const text = {
  en: {
    title: "Company", caption: "Workspace", more: "More", aria: "Workspace navigation", overview: "Overview",
    records: "Records", board: "Board", campaigns: "Campaigns", activity: "Activity", groups: "Groups",
    map: "Map", settings: "Settings", issues: "Issues", demos: "Demos", page: "Page content",
  },
  el: {
    title: "Εταιρεία", caption: "Χώρος εργασίας", more: "Περισσότερα", aria: "Πλοήγηση χώρου εργασίας",
    overview: "Επισκόπηση", records: "Εγγραφές", board: "Πίνακας", campaigns: "Καμπάνιες", activity: "Δραστηριότητα",
    groups: "Ομάδες", map: "Χάρτης", settings: "Ρυθμίσεις", issues: "Ζητήματα", demos: "Επιδείξεις",
    page: "Περιεχόμενο σελίδας",
  },
};

const base = "/workspace/7";

function items(locale: Locale): Sidebar05Item[] {
  const t = text[locale];
  return [
    { label: t.overview, href: base, icon: <DashboardIcon fontSize="small" />, matchPath: (p) => p === base },
    { label: t.records, href: `${base}/records`, icon: <ListAltIcon fontSize="small" />, matchPath: (p) => p.startsWith(`${base}/records`) && !p.startsWith(`${base}/records/board`) },
    { label: t.board, href: `${base}/records/board`, icon: <ViewKanbanIcon fontSize="small" /> },
    { label: t.campaigns, href: `${base}/campaigns`, icon: <CampaignIcon fontSize="small" /> },
    { label: t.activity, href: `${base}/activity`, icon: <TimelineIcon fontSize="small" /> },
    { label: t.groups, href: `${base}/groups`, icon: <FolderCopyIcon fontSize="small" /> },
    { label: t.map, href: `${base}/map`, icon: <MapIcon fontSize="small" /> },
    { label: t.settings, href: `${base}/settings`, icon: <SettingsIcon fontSize="small" /> },
  ];
}

function secondary(locale: Locale): Sidebar05Item[] {
  const t = text[locale];
  return [
    { label: t.issues, href: `${base}/issues`, icon: <BugReportIcon fontSize="small" /> },
    { label: t.demos, href: `${base}/demos`, icon: <PlayCircleOutlineIcon fontSize="small" /> },
  ];
}

const meta = {
  title: "Design Core/Sidebars/Sidebar05",
  component: Sidebar05,
  args: {
    title: text.en.title,
    caption: text.en.caption,
    items: items("en"),
    secondaryLabel: text.en.more,
    secondaryItems: secondary("en"),
    activeHref: `${base}/records/board`,
    onNavigate: () => {},
  },
} satisfies Meta<typeof Sidebar05>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    const t = text[locale];
    return (
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar05
          {...args}
          title={t.title}
          caption={t.caption}
          items={items(locale)}
          secondaryLabel={t.more}
          secondaryItems={secondary(locale)}
          ariaLabel={t.aria}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="overline" color="text.secondary">{t.page}</Typography>
            <Box sx={{ mt: 1, height: 160, borderRadius: 2, border: "1px dashed", borderColor: "divider" }} />
          </Box>
        </Sidebar05>
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Hovered: title, caption, labels and the secondary caption appear. */
export const Expanded: Story = {
  ...English,
  play: async ({ canvasElement }) => {
    await userEvent.hover(await within(canvasElement).findByTestId("sidebar"));
    await new Promise((r) => setTimeout(r, 300));
  },
};

/** Below `md`: sticky title, scrollable tabs and inline secondary links. */
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
