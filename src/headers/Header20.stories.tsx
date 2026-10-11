import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import StarOutlineOutlined from "@mui/icons-material/StarOutlineOutlined";
import ForumOutlined from "@mui/icons-material/ForumOutlined";
import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
import PaymentsOutlined from "@mui/icons-material/PaymentsOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";
import ContactMailOutlined from "@mui/icons-material/ContactMailOutlined";
import { Header20, type Header20Item } from "./Header20";

export const publicText = {
  en: {
    short: ["Home", "Features", "Chat", "Clients", "Pricing", "Roadmap", "Contact"],
    long: ["Home", "Features", "Live chat", "Trusted by", "Pricing", "Roadmap", "Contact us"],
  },
  el: {
    short: ["Αρχική", "Λειτουργίες", "Συνομιλία", "Πελάτες", "Τιμές", "Πλάνο", "Επαφή"],
    long: ["Αρχική", "Λειτουργίες", "Ζωντανή συνομιλία", "Μας εμπιστεύονται", "Τιμές", "Πλάνο εξέλιξης", "Επικοινωνήστε μαζί μας"],
  },
};
const icons = [HomeOutlined, StarOutlineOutlined, ForumOutlined, GroupsOutlined, PaymentsOutlined, MapOutlined, ContactMailOutlined];

export function publicItems(l: "en" | "el"): Header20Item[] {
  const t = publicText[l];
  return t.short.map((label, i) => {
    const Icon = icons[i];
    return { label, tooltip: t.long[i], icon: <Icon />, onClick: () => {} };
  });
}

const meta = {
  title: "Design Core/Headers/Header20",
  excludeStories: ["publicItems", "publicText"],
  component: Header20,
  args: { items: publicItems("en") },
  decorators: [(Story) => <Box sx={{ display: "flex", p: 2 }}><Story /></Box>],
} satisfies Meta<typeof Header20>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (_a, { globals }) => <Header20 items={publicItems((globals.locale ?? "en") as "en" | "el")} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
