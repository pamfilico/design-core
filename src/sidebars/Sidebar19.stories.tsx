import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Sidebar19, type Sidebar19Item } from "./Sidebar19";

type Locale = "en" | "el";

const text = {
  en: {
    strings: { title: "Administration", logoutLabel: "Logout" },
    overview: "Overview", inbox: "Inbox", received: "Received", sent: "Sent", pipeline: "Pipeline",
    users: "Users", settings: "Settings", page: "Page content",
  },
  el: {
    strings: { title: "Διαχείριση", logoutLabel: "Αποσύνδεση" },
    overview: "Επισκόπηση", inbox: "Εισερχόμενα", received: "Ληφθέντα", sent: "Απεσταλμένα", pipeline: "Ροή εργασιών",
    users: "Χρήστες", settings: "Ρυθμίσεις", page: "Περιεχόμενο σελίδας",
  },
};

function items(locale: Locale): Sidebar19Item[] {
  const t = text[locale];
  return [
    { key: "overview", label: t.overview, href: "/admin/overview" },
    {
      key: "inbox",
      label: t.inbox,
      href: "/admin/inbox",
      children: [
        { key: "inbox-received", label: t.received, href: "/admin/inbox/received" },
        { key: "inbox-sent", label: t.sent, href: "/admin/inbox/sent" },
        { key: "inbox-pipeline", label: t.pipeline, href: "/admin/inbox/pipeline" },
      ],
    },
    { key: "users", label: t.users, href: "/admin/users" },
    { key: "settings", label: t.settings, href: "/admin/settings" },
  ];
}

const meta = {
  title: "Design Core/Sidebars/Sidebar19",
  component: Sidebar19,
  args: {
    title: text.en.strings.title,
    username: "Jane Doe",
    onLogout: () => {},
    items: items("en"),
    activeHref: "/admin/users",
    onNavigate: () => {},
  },
} satisfies Meta<typeof Sidebar19>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return (
      <Sidebar19 {...args} {...text[locale].strings} items={items(locale)}>
        <Typography variant="overline" color="text.secondary">{text[locale].page}</Typography>
        <Box sx={{ mt: 1, height: 160, borderRadius: 2, border: "1px dashed", borderColor: "divider" }} />
      </Sidebar19>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Inside a parent with children: the sub-list expands and the child is selected. */
export const ChildExpanded: Story = { ...English, args: { activeHref: "/admin/inbox/sent" } };

/** Full-width page area (no container max width). */
export const FullWidth: Story = { ...English, args: { containerMaxWidth: false } };
