import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InfoIcon from "@mui/icons-material/Info";
import ArticleIcon from "@mui/icons-material/Article";
import MailIcon from "@mui/icons-material/Mail";
import EventIcon from "@mui/icons-material/Event";
import { Header37 } from "./Header37";

const text = {
  en: { title: "Company", book: "Book now", about: "About us", blog: "Blog", contact: "Contact", caption: "Powered by Company", menuLabel: "open menu" },
  el: { title: "Εταιρεία", book: "Κράτηση", about: "Σχετικά", blog: "Ιστολόγιο", contact: "Επικοινωνία", caption: "Με την υποστήριξη της Εταιρείας", menuLabel: "άνοιγμα μενού" },
};

const build = (l: "en" | "el") => {
  const t = text[l];
  return {
    title: t.title,
    drawerCaption: t.caption,
    menuLabel: t.menuLabel,
    items: [
      { label: t.book, href: "/site", icon: <EventIcon /> },
      { label: t.about, href: "/site/about", icon: <InfoIcon /> },
      { label: t.blog, href: "/site/blog", icon: <ArticleIcon /> },
      { label: t.contact, href: "/site/contact", icon: <MailIcon /> },
    ],
  };
};

const meta = {
  title: "Design Core/Headers/Header37",
  component: Header37,
  args: { ...build("en"), homeHref: "/site", activeHref: "/site", icon: <StorefrontIcon /> },
} satisfies Meta<typeof Header37>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => <Header37 {...args} {...build((globals.locale ?? "en") as "en" | "el")} />,
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const BlogActive: Story = { ...English, args: { activeHref: "/site/blog/first-post" } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
