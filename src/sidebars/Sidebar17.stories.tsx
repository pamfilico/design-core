import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import FolderIcon from "@mui/icons-material/Folder";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import { Sidebar17, type Sidebar17Item, type Sidebar17Section } from "./Sidebar17";

type Locale = "en" | "el";

const text = {
  en: {
    projects: "Projects", members: "Members", context: "PROJECT", overview: "Overview",
    tasks: "Tasks", messages: "Messages", settings: "Settings",
  },
  el: {
    projects: "Έργα", members: "Μέλη", context: "ΕΡΓΟ", overview: "Επισκόπηση",
    tasks: "Εργασίες", messages: "Μηνύματα", settings: "Ρυθμίσεις",
  },
};

function baseItems(locale: Locale): Sidebar17Item[] {
  const t = text[locale];
  return [
    { key: "projects", label: t.projects, href: "/projects", icon: <FolderIcon /> },
    { key: "members", label: t.members, href: "/members", icon: <GroupIcon /> },
  ];
}

function contextSection(locale: Locale): Sidebar17Section {
  const t = text[locale];
  return {
    label: t.context,
    items: [
      { key: "overview", label: t.overview, href: "/projects/1/overview", icon: <DashboardIcon /> },
      { key: "tasks", label: t.tasks, href: "/projects/1/tasks", icon: <ChecklistIcon /> },
      { key: "messages", label: t.messages, href: "/projects/1/messages", icon: <ChatIcon /> },
      { key: "settings", label: t.settings, href: "/projects/1/settings", icon: <SettingsIcon /> },
    ],
  };
}

const logo = <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: "primary.main" }} />;

const meta = {
  title: "Design Core/Sidebars/Sidebar17",
  component: Sidebar17,
  args: {
    open: true,
    onClose: () => {},
    logo,
    brandName: "Company",
    baseItems: baseItems("en"),
    activeHref: "/projects",
    onNavigate: () => {},
  },
} satisfies Meta<typeof Sidebar17>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return (
      <Sidebar17
        {...args}
        baseItems={baseItems(locale)}
        contextSection={args.contextSection ? contextSection(locale) : undefined}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Inside a context: the wordmark hides and the context's pages appear under a caption. */
export const WithContext: Story = {
  ...English,
  args: { brandName: undefined, contextSection: contextSection("en"), activeHref: "/projects/1/tasks" },
};
