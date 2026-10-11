import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ArticleIcon from "@mui/icons-material/Article";
import MailIcon from "@mui/icons-material/Mail";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Header12 } from "./Header12";

const text = {
  en: { name: "Company", items: ["Home", "About us", "Blog", "Contact"], drawerFooter: "Powered by Company", menuLabel: "Open menu", closeLabel: "Close menu" },
  el: { name: "Εταιρεία", items: ["Αρχική", "Σχετικά", "Ιστολόγιο", "Επικοινωνία"], drawerFooter: "Με την υποστήριξη της Εταιρείας", menuLabel: "Άνοιγμα μενού", closeLabel: "Κλείσιμο μενού" },
};
type L = keyof typeof text;
const icons = [<HomeIcon key="a" />, <InfoIcon key="b" />, <ArticleIcon key="c" />, <MailIcon key="d" />];
const base = "/site";
const hrefs = [base, `${base}/about`, `${base}/blog`, `${base}/contact`];

const meta = {
  title: "Design Core/Headers/Header12",
  component: Header12,
  parameters: { layout: "fullscreen" },
  args: { name: "Company", nameHref: base, items: [], activeHref: base, icon: <StorefrontIcon /> },
} satisfies Meta<typeof Header12>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header12
        {...args}
        name={t.name}
        drawerFooter={t.drawerFooter}
        menuLabel={t.menuLabel}
        closeLabel={t.closeLabel}
        items={t.items.map((label, i) => ({ label, href: hrefs[i], icon: icons[i] }))}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const AboutActive: Story = { ...English, args: { activeHref: `${base}/about` } };
export const Mobile: Story = { ...English, parameters: { viewport: { defaultViewport: "mobile1" } } };
