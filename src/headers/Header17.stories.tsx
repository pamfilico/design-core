import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from "@mui/material/Box";
import { Header17, type Header17Props } from "./Header17";

const text = {
  en: {
    entries: "Entries", timeline: "Timeline", add: "Add entry", plan: "Plan", team: "Team", places: "Places", cover: "Cover",
    items: "Items", groups: "Item groups", pricing: "Pricing", channels: "Price channels", web: "Web",
    goToApp: "Go to entries", home: "Home", trusted: "Trusted by", operations: "Operations", publicSection: "Public section",
    signOutLabel: "Logout", signInLabel: "Login",
  },
  el: {
    entries: "Καταχωρίσεις", timeline: "Χρονολόγιο", add: "Νέα καταχώριση", plan: "Πλάνο", team: "Ομάδα", places: "Τοποθεσίες", cover: "Κάλυψη",
    items: "Είδη", groups: "Ομάδες ειδών", pricing: "Τιμολόγηση", channels: "Κανάλια τιμών", web: "Ιστός",
    goToApp: "Στις καταχωρίσεις", home: "Αρχική", trusted: "Μας εμπιστεύονται", operations: "Λειτουργίες", publicSection: "Δημόσια ενότητα",
    signOutLabel: "Αποσύνδεση", signInLabel: "Σύνδεση",
  },
};
type L = keyof typeof text;

function props(l: L): Header17Props {
  const t = text[l];
  return {
    logo: <Box sx={{ width: 50, height: 50, borderRadius: 1, bgcolor: "background.paper" }} />,
    onLogoClick: () => {},
    navItems: [
      { label: t.entries, children: [{ label: t.timeline, href: "#t", active: true }, { label: t.add, href: "#a" }] },
      { label: t.plan, href: "#plan", active: true },
      { label: t.team, href: "#team" },
      { label: t.places, href: "#places" },
      { label: t.cover, href: "#cover" },
      { label: t.items, children: [{ label: t.items, href: "#i" }, { label: t.groups, href: "#g" }] },
      { label: t.pricing, children: [{ label: t.channels, href: "#c" }] },
      { label: t.web, href: "#web" },
    ],
    highlight: { label: t.goToApp, href: "#go" },
    publicItems: [{ label: t.home, href: "#home" }, { label: t.trusted, href: "#trusted" }],
    drawerGroups: [
      { title: t.entries, items: [{ label: t.timeline, href: "#t" }, { label: t.add, href: "#a" }] },
      { title: t.operations, items: [{ label: t.plan, href: "#plan" }, { label: t.team, href: "#team" }, { label: t.places, href: "#places" }] },
      { title: t.items, items: [{ label: t.items, href: "#i" }, { label: t.groups, href: "#g" }, { label: t.channels, href: "#c" }] },
    ],
    publicGroup: { title: t.publicSection, items: [{ label: t.trusted, href: "#trusted" }] },
    signOutLabel: t.signOutLabel,
    onSignOut: () => {},
    signInLabel: t.signInLabel,
    onSignIn: () => {},
  };
}

const meta = { title: "Design Core/Headers/Header17", component: Header17, parameters: { layout: "fullscreen" } } satisfies Meta<typeof Header17>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Drop args Storybook leaves undefined so they do not override the demo props. */
function defined<T extends object>(a: T): Partial<T> {
  return Object.fromEntries(Object.entries(a).filter(([, v]) => v !== undefined)) as Partial<T>;
}

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header17 {...props((globals.locale ?? "en") as L)} {...defined(args)} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const SignedIn: Story = { ...English, args: { signedIn: true } };
export const SignedInOnHome: Story = { ...English, args: { signedIn: true, onHome: true } };
export const Mobile: Story = { ...SignedIn, parameters: { viewport: { defaultViewport: "mobile1" } } };
