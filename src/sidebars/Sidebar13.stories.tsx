import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ListAltIcon from "@mui/icons-material/ListAlt";
import StoreIcon from "@mui/icons-material/Store";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import { Sidebar13, type Sidebar13Section } from "./Sidebar13";

type Locale = "en" | "el";

const text = {
  en: {
    dashboard: "Dashboard", orders: "Orders", catalog: "Catalog", locations: "Locations",
    places: "Places", team: "Team", account: "Account", settings: "Settings",
    signedInAs: "Jane Doe", page: "Page content",
  },
  el: {
    dashboard: "Πίνακας ελέγχου", orders: "Παραγγελίες", catalog: "Κατάλογος", locations: "Τοποθεσίες",
    places: "Χώροι", team: "Ομάδα", account: "Λογαριασμός", settings: "Ρυθμίσεις",
    signedInAs: "Jane Doe", page: "Περιεχόμενο σελίδας",
  },
};

function sections(locale: Locale): Sidebar13Section[] {
  const t = text[locale];
  return [
    {
      items: [
        { key: "dashboard", label: t.dashboard, href: "/dashboard", icon: <DashboardIcon /> },
        { key: "orders", label: t.orders, href: "/orders", icon: <ReceiptLongIcon /> },
        { key: "catalog", label: t.catalog, href: "/catalog", icon: <ListAltIcon /> },
      ],
    },
    {
      label: t.locations,
      dividerBefore: true,
      items: [{ key: "places", label: t.places, href: "/places", icon: <StoreIcon /> }],
    },
    {
      label: t.account,
      dividerBefore: true,
      items: [
        { key: "team", label: t.team, href: "/team", icon: <GroupIcon /> },
        { key: "settings", label: t.settings, href: "/settings", icon: <SettingsIcon /> },
      ],
    },
  ];
}

const meta = {
  title: "Design Core/Sidebars/Sidebar13",
  component: Sidebar13,
  args: {
    sections: sections("en"),
    activeHref: "/orders",
    onNavigate: () => {},
    mobileOpen: true,
    onCloseMobile: () => {},
    mode: "rail",
  },
} satisfies Meta<typeof Sidebar13>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const locale = (globals.locale ?? "en") as Locale;
    return (
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar13
          {...args}
          sections={sections(locale)}
          headerSlot={
            <Box sx={{ p: 2 }}>
              <Typography fontWeight={700}>{text[locale].signedInAs}</Typography>
              <Typography variant="caption" color="text.secondary">jane@example.com</Typography>
            </Box>
          }
        />
        <Box sx={{ flex: 1, p: 3 }}>
          <Typography variant="overline" color="text.secondary">{text[locale].page}</Typography>
        </Box>
      </Box>
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };

/** Hovered rail: labels and section captions fade in. */
export const Expanded: Story = {
  ...English,
  play: async ({ canvasElement }) => {
    await userEvent.hover(await within(canvasElement).findByTestId("app-sidebar-rail"));
    await new Promise((r) => setTimeout(r, 300));
  },
};

/** Phone presentation: temporary drawer with a header slot. */
export const MobileDrawer: Story = {
  ...English,
  args: { mode: "drawer" },
  parameters: { viewport: { defaultViewport: "mobile1" } },
};
