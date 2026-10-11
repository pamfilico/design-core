import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Header18 } from "./Header18";
import { publicItems, publicText } from "./Header20.stories";

const text = {
  en: { menuLabel: "Menu", language: "Language" },
  el: { menuLabel: "Μενού", language: "Γλώσσα" },
};
type L = keyof typeof text;

function render(l: L) {
  const items = publicItems(l).map((it, i) => ({ label: publicText[l].long[i], icon: it.icon, onClick: it.onClick }));
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Header18
          items={items}
          menuLabel={text[l].menuLabel}
          footer={
            <FormControl size="small" sx={{ width: 150, mt: 1 }}>
              <InputLabel id="h18-lang">{text[l].language}</InputLabel>
              <Select labelId="h18-lang" value={l} label={text[l].language}>
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="el">Ελληνικά</MenuItem>
              </Select>
            </FormControl>
          }
        />
      </Toolbar>
    </AppBar>
  );
}

const meta = {
  title: "Design Core/Headers/Header18",
  component: Header18,
  parameters: { layout: "fullscreen" },
  args: { items: [] },
} satisfies Meta<typeof Header18>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = { globals: { locale: "en" }, render: (_a, { globals }) => render((globals.locale ?? "en") as L) };
export const Greek: Story = { ...English, globals: { locale: "el" } };
export const Dark: Story = { ...English, globals: { mode: "dark" } };
