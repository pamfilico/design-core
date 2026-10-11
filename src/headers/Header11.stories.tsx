import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { Header11 } from "./Header11";

const text = {
  en: { title: "Company Admin", drawerTitle: "Admin Panel", signOutLabel: "Logout", items: ["Dashboard", "Posts", "Expenses", "Users", "Products", "Health"] },
  el: { title: "Διαχείριση Εταιρείας", drawerTitle: "Πίνακας διαχείρισης", signOutLabel: "Αποσύνδεση", items: ["Πίνακας ελέγχου", "Άρθρα", "Έξοδα", "Χρήστες", "Προϊόντα", "Υγεία"] },
};
type L = keyof typeof text;
const icons = [<DashboardIcon key="a" />, <ArticleIcon key="b" />, <AttachMoneyIcon key="c" />, <PeopleIcon key="d" />, <InventoryIcon key="e" />, <HealthAndSafetyIcon key="f" />];
const hrefs = ["/admin/dashboard", "/admin/posts", "/admin/expenses", "/admin/users", "/admin/products", "/admin/health"];

const meta = {
  title: "Design Core/Headers/Header11",
  component: Header11,
  parameters: { layout: "fullscreen" },
  args: { title: "Company Admin", items: [], userName: "jane", activeHref: "/admin/users", onSignOut: () => {}, onNavigate: () => {} },
} satisfies Meta<typeof Header11>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  globals: { locale: "en" },
  render: (args, { globals }) => {
    const t = text[(globals.locale ?? "en") as L];
    return (
      <Header11
        {...args}
        title={t.title}
        drawerTitle={t.drawerTitle}
        signOutLabel={t.signOutLabel}
        items={t.items.map((label, i) => ({ label, href: hrefs[i], icon: icons[i] }))}
      />
    );
  },
};
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
