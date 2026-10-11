import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExploreIcon from "@mui/icons-material/Explore";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsIcon from "@mui/icons-material/Settings";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import MapIcon from "@mui/icons-material/Map";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Header02 } from "./Header02";

const text = {
  en: {
    title: "Apps",
    comingSoonLabel: "Coming soon",
    labels: ["Dashboard", "Discover", "Messages", "Billing", "Codes", "Settings", "Activity", "Map"],
  },
  el: {
    title: "Εφαρμογές",
    comingSoonLabel: "Έρχεται σύντομα",
    labels: ["Πίνακας", "Ανακάλυψη", "Μηνύματα", "Χρεώσεις", "Κωδικοί", "Ρυθμίσεις", "Δραστηριότητα", "Χάρτης"],
  },
};
type L = keyof typeof text;

function build(l: L) {
  const t = text[l].labels;
  return {
    items: [
      { label: t[0], href: "#dashboard", icon: <DashboardIcon />, active: true },
      { label: t[1], href: "#discover", icon: <ExploreIcon /> },
      { label: t[2], href: "#messages", icon: <MailOutlineIcon /> },
      { label: t[3], href: "#billing", icon: <ReceiptLongIcon /> },
      { label: t[4], href: "#codes", icon: <QrCode2Icon /> },
      { label: t[5], href: "#settings", icon: <SettingsIcon /> },
    ],
    comingSoon: [
      { label: t[6], href: "#activity", icon: <TimelineIcon /> },
      { label: t[7], href: "#map", icon: <MapIcon /> },
    ],
  };
}

const meta = {
  title: "Design Core/Headers/Header02",
  component: Header02,
  args: { items: build("en").items },
} satisfies Meta<typeof Header02>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const l = (globals.locale ?? "en") as L;
    return (
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <Header02 {...args} {...build(l)} title={text[l].title} comingSoonLabel={text[l].comingSoonLabel} />
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
