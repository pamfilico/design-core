import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
import MapIcon from "@mui/icons-material/Map";
import ChatIcon from "@mui/icons-material/Chat";
import { Header25, type Header25Props } from "./Header25";

const text = {
  en: {
    brandName: "Company", sites: "Sites", team: "Team", section: "SITE", home: "Home", catalog: "Catalog", info: "Info", places: "Places", chats: "Chats",
    highlightLabel: "Go to app", contactLabel: "Contact", signOutLabel: "Logout", signInLabel: "Login", menuLabel: "Open navigation",
  },
  el: {
    brandName: "Εταιρεία", sites: "Χώροι", team: "Ομάδα", section: "ΧΩΡΟΣ", home: "Αρχική", catalog: "Κατάλογος", info: "Πληροφορίες", places: "Τοποθεσίες", chats: "Συνομιλίες",
    highlightLabel: "Μετάβαση στην εφαρμογή", contactLabel: "Επικοινωνία", signOutLabel: "Αποσύνδεση", signInLabel: "Σύνδεση", menuLabel: "Άνοιγμα πλοήγησης",
  },
};
type L = keyof typeof text;

function props(l: L): Header25Props {
  const t = text[l];
  return {
    logo: <Box sx={{ bgcolor: "primary.main" }} />,
    brandName: t.brandName,
    onBrandClick: () => {},
    items: [
      { label: t.sites, icon: <CorporateFareIcon />, href: "/sites" },
      { label: t.team, icon: <GroupIcon />, href: "/team" },
    ],
    activeHref: "/sites/1",
    highlightLabel: t.highlightLabel,
    onHighlight: () => {},
    contactLabel: t.contactLabel,
    onContact: () => {},
    signOutLabel: t.signOutLabel,
    onSignOut: () => {},
    signInLabel: t.signInLabel,
    onSignIn: () => {},
    menuLabel: t.menuLabel,
    onNavigate: () => {},
  };
}

const meta = { title: "Design Core/Headers/Header25", component: Header25, parameters: { layout: "fullscreen" } } satisfies Meta<typeof Header25>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Drop args Storybook leaves undefined so they do not override the demo props. */
function defined<T extends object>(a: T): Partial<T> {
  return Object.fromEntries(Object.entries(a).filter(([, v]) => v !== undefined)) as Partial<T>;
}

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header25 {...props((globals.locale ?? "en") as L)} {...defined(args)} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
/** Inside one record: no wordmark, extra captioned drawer block. */
export const WithSection: Story = {
  globals: { locale: "en" },
  render: (_a, { globals }) => {
    const l = (globals.locale ?? "en") as L;
    const t = text[l];
    return (
      <Header25
        {...props(l)}
        signedIn
        brandName={undefined}
        activeHref="/sites/1/catalog"
        sectionTitle={t.section}
        sectionItems={[
          { label: t.home, icon: <DashboardIcon />, href: "/sites/1" },
          { label: t.catalog, icon: <MenuBookIcon />, href: "/sites/1/catalog" },
          { label: t.info, icon: <InfoIcon />, href: "/sites/1/info" },
          { label: t.places, icon: <MapIcon />, href: "/sites/1/places" },
          { label: t.chats, icon: <ChatIcon />, href: "/sites/1/chats" },
        ]}
      />
    );
  },
};
