import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ArticleIcon from "@mui/icons-material/Article";
import BlockIcon from "@mui/icons-material/Block";
import PlaceIcon from "@mui/icons-material/Place";
import StorageIcon from "@mui/icons-material/Storage";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FeedIcon from "@mui/icons-material/Feed";
import { Sidebar02 } from "./Sidebar02";
import type { Sidebar01Section } from "./Sidebar01";

type Locale = "en" | "el";

const text = {
  en: {
    title: "Company", caption: "Workspace", back: "Back to workspace", workspace: "Workspace",
    records: "Records", list: "All records", search: "Search", groups: "Search groups", terms: "Search terms",
    blocked: "Blocked", places: "Places", data: "Data", datasets: "Datasets", sample: "Sample set",
    sources: "Sources", social: "Social profile", feed: "Feed", disabledSuffix: " — coming soon",
  },
  el: {
    title: "Εταιρεία", caption: "Χώρος εργασίας", back: "Πίσω στον χώρο εργασίας", workspace: "Χώρος εργασίας",
    records: "Εγγραφές", list: "Όλες οι εγγραφές", search: "Αναζήτηση", groups: "Ομάδες αναζήτησης",
    terms: "Όροι αναζήτησης", blocked: "Αποκλεισμένα", places: "Τοποθεσίες", data: "Δεδομένα",
    datasets: "Σύνολα δεδομένων", sample: "Δείγμα", sources: "Πηγές", social: "Κοινωνικό προφίλ",
    feed: "Ροή", disabledSuffix: " — σύντομα",
  },
};

function sections(locale: Locale): Sidebar01Section[] {
  const t = text[locale];
  return [
    { sectionLabel: t.workspace, items: [{ label: t.back, href: "/workspace", icon: <ArrowBackIcon fontSize="small" />, matchPath: () => false }] },
    { sectionLabel: t.records, dividerBefore: true, items: [{ label: t.list, href: "/records", icon: <ListAltIcon fontSize="small" />, matchPath: (p) => p === "/records" }] },
    {
      sectionLabel: t.search,
      dividerBefore: true,
      items: [
        { label: t.groups, href: "/records/groups", icon: <FolderCopyIcon fontSize="small" /> },
        { label: t.terms, href: "/records/terms", icon: <ArticleIcon fontSize="small" /> },
        { label: t.blocked, href: "/records/blocked", icon: <BlockIcon fontSize="small" /> },
        {
          label: t.places,
          href: "/records/places",
          icon: <PlaceIcon fontSize="small" />,
          matchPath: (p) => p === "/records/places",
          children: [
            { label: t.groups, href: "/records/places/groups", icon: <FolderCopyIcon fontSize="small" /> },
            { label: t.terms, href: "/records/places/terms", icon: <ArticleIcon fontSize="small" /> },
          ],
        },
      ],
    },
    {
      sectionLabel: t.data,
      dividerBefore: true,
      items: [
        {
          label: t.datasets,
          href: "/records/datasets",
          icon: <StorageIcon fontSize="small" />,
          children: [{ label: t.sample, href: "/records/datasets?id=1", icon: <FolderCopyIcon fontSize="small" /> }],
        },
      ],
    },
    {
      sectionLabel: t.sources,
      dividerBefore: true,
      items: [
        { label: t.social, href: "/records/social", icon: <ShareOutlinedIcon fontSize="small" />, disabled: true },
        { label: t.feed, href: "/records/feed", icon: <FeedIcon fontSize="small" />, disabled: true },
      ],
    },
  ];
}

const hoverRail = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await userEvent.hover(await within(canvasElement).findByTestId("sidebar"));
  await new Promise((r) => setTimeout(r, 450));
};

const meta = {
  title: "Design Core/Sidebars/Sidebar02",
  component: Sidebar02,
  args: { title: text.en.title, caption: text.en.caption, sections: sections("en"), activeHref: "/records/groups", onNavigate: () => {} },
} satisfies Meta<typeof Sidebar02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    const t = text[locale];
    return (
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar02 {...args} title={t.title} caption={t.caption} sections={sections(locale)} disabledSuffix={t.disabledSuffix} />
        <Box sx={{ flex: 1 }} />
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Hovered: title and caption replace the initials badge. */
export const Expanded: Story = { ...English, play: hoverRail };

/** Header links to an overview page, with explicit one-letter initials. */
export const LinkedHeader: Story = { ...English, args: { titleHref: "/workspace", initials: "C" }, play: hoverRail };

export const MobileDrawer: Story = {
  ...English,
  args: { mobileDrawer: { open: true, onClose: () => {} } },
  parameters: { viewport: { defaultViewport: "mobile1" } },
};
