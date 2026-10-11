// Preview-only: the stock MUI light theme, exposed on the bundle global so the
// design-sync provider chain (cfg.provider $ref) can mount ThemeProvider.
// Not a brand theme - apps pass their own createTheme() result.
import { createTheme } from "@mui/material/styles";
export const dsPreviewTheme = createTheme({ palette: { mode: "light" } });
