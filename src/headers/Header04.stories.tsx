import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Header04, type Header04Section } from "./Header04";

const text = {
  en: {
    crumbs: ["Items", "Group A"],
    drawerTitle: "Actions",
    s1: "Search actions",
    run: "Queue search job",
    s2: "Item actions",
    mode: "Mode",
    single: "Single page",
    all: "All pages",
    process: "Process all items",
    analyse: "Queue analysis",
    s3: "Utilities",
    refresh: "Refresh",
    back: "Back",
  },
  el: {
    crumbs: ["Στοιχεία", "Ομάδα Α"],
    drawerTitle: "Ενέργειες",
    s1: "Ενέργειες αναζήτησης",
    run: "Προγραμματισμός αναζήτησης",
    s2: "Ενέργειες στοιχείων",
    mode: "Λειτουργία",
    single: "Μία σελίδα",
    all: "Όλες οι σελίδες",
    process: "Επεξεργασία όλων",
    analyse: "Προγραμματισμός ανάλυσης",
    s3: "Βοηθητικά",
    refresh: "Ανανέωση",
    back: "Πίσω",
  },
};
type L = keyof typeof text;

function sections(l: L, loading = false): Header04Section[] {
  const t = text[l];
  return [
    { title: t.s1, actions: [{ label: t.run, icon: <PlayArrowIcon />, onClick: () => {}, loading }] },
    {
      title: t.s2,
      select: { label: t.mode, value: "single", options: [{ value: "single", label: t.single }, { value: "all", label: t.all }] },
      actions: [
        { label: t.process, icon: <PlayArrowIcon />, onClick: () => {} },
        { label: t.analyse, icon: <CheckCircleIcon />, onClick: () => {} },
      ],
    },
    { title: t.s3, actions: [{ label: t.refresh, icon: <RefreshIcon />, onClick: () => {} }] },
  ];
}

function render(l: L, loading = false) {
  const t = text[l];
  return (
    <Header04
      onBack={() => {}}
      backLabel={t.back}
      drawerTitle={t.drawerTitle}
      sections={sections(l, loading)}
      breadcrumbs={
        <Breadcrumbs sx={{ color: "inherit" }}>
          <Link underline="hover" color="inherit" href="#">
            {t.crumbs[0]}
          </Link>
          <Typography color="inherit">{t.crumbs[1]}</Typography>
        </Breadcrumbs>
      }
    />
  );
}

const meta = { title: "Design Core/Headers/Header04", component: Header04, parameters: { layout: "fullscreen" } } satisfies Meta<typeof Header04>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = { globals: { locale: "en" }, render: (_a, { globals }) => render((globals.locale ?? "en") as L) };
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
export const Loading: Story = { render: (_a, { globals }) => render((globals.locale ?? "en") as L, true) };
export const NoActions: Story = { args: { breadcrumbs: <Typography>Group A</Typography>, onBack: () => {} } };
