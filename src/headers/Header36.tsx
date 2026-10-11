import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

export interface Header54Props {
  /** Logo on the far left; clicking it is the way back home. */
  logo: React.ReactNode;
  /** Href of the logo link (default "/"). */
  logoHref?: string;
  /** Optional slot on the right. Empty in the original. */
  right?: React.ReactNode;
  linkComponent?: React.ElementType;
}

/**
 * Minimal header for sign-in pages: a transparent, blurred bar with a bottom divider and only the
 * logo (linked home) on the left.
 */
export function Header36(props: Header54Props) {
  const { logo, logoHref = "/", right, linkComponent = "a" } = props;
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(6px)",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ minHeight: 56 }}>
        <Link component={linkComponent} href={logoHref} color="inherit" underline="none" sx={{ display: "inline-flex" }}>
          {logo}
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        {right}
      </Toolbar>
    </AppBar>
  );
}

export default Header36;
