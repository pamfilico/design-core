import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";
import Box from "@mui/material/Box";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SpeedIcon from "@mui/icons-material/Speed";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StorageIcon from "@mui/icons-material/Storage";
import { Sidebar03 } from "./Sidebar03";
import type { Sidebar01Section } from "./Sidebar01";

type Locale = "en" | "el";

const text = {
  en: {
    back: "Back to home", caption: "Queues", queues: "Queues", byOwner: "By owner", core: "Core queues",
    crawling: "Crawling", detail: "Detail", jobs: "Job lists", batch: "Batch jobs",
    infra: "Infrastructure", storage: "Storage queues",
  },
  el: {
    back: "Πίσω στην αρχική", caption: "Ουρές", queues: "Ουρές", byOwner: "Ανά κάτοχο", core: "Κύριες ουρές",
    crawling: "Ανίχνευση", detail: "Λεπτομέρειες", jobs: "Λίστες εργασιών", batch: "Μαζικές εργασίες",
    infra: "Υποδομή", storage: "Ουρές αποθήκευσης",
  },
};

function sections(locale: Locale): Sidebar01Section[] {
  const t = text[locale];
  return [
    {
      sectionLabel: t.queues,
      items: [
        { label: t.byOwner, href: "/queue", icon: <AccountTreeIcon />, matchPath: (p) => p === "/queue" },
        { label: t.core, href: "/queue/core", icon: <SpeedIcon /> },
        { label: t.crawling, href: "/queue/crawling", icon: <TravelExploreIcon /> },
      ],
    },
    {
      sectionLabel: t.detail,
      dividerBefore: true,
      items: [
        { label: t.jobs, href: "/queue/jobs", icon: <FormatListBulletedIcon /> },
        { label: t.batch, href: "/queue/batch", icon: <AutoAwesomeIcon /> },
      ],
    },
    { sectionLabel: t.infra, dividerBefore: true, items: [{ label: t.storage, href: "/queue/storage", icon: <StorageIcon /> }] },
  ];
}

const hoverRail = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await userEvent.hover(await within(canvasElement).findByTestId("sidebar"));
  await new Promise((r) => setTimeout(r, 450));
};

const meta = {
  title: "Design Core/Sidebars/Sidebar03",
  component: Sidebar03,
  args: { backLabel: text.en.back, caption: text.en.caption, sections: sections("en"), activeHref: "/queue/jobs", onNavigate: () => {} },
} satisfies Meta<typeof Sidebar03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    const t = text[locale];
    return (
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar03 {...args} backLabel={t.back} caption={t.caption} sections={sections(locale)} />
        <Box sx={{ flex: 1 }} />
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Hovered: the back arrow gains its label and the area name. */
export const Expanded: Story = { ...English, play: hoverRail };
