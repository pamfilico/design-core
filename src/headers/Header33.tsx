"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export interface Header51Props {
  /** Page title (in the original: the label of the active nav item). */
  title: React.ReactNode;
  /** Opens the navigation drawer; the button shows below `md` only. */
  onMenuClick?: () => void;
  /** Accessible label of the menu button. */
  menuLabel?: string;
  /** Width of the permanent side rail on `md`+; the bar is offset by it (default 240). */
  railWidth?: number;
  /** "fixed" as in the original app shell; "static" for embedding. */
  position?: "fixed" | "static" | "sticky";
}

/**
 * Slim signed-in top bar of a rail + content shell: paper background with a bottom divider,
 * offset by the side rail width on desktop, a hamburger below `md`, and the current page title.
 */
export function Header33(props: Header51Props) {
  const { title, onMenuClick, menuLabel = "Open navigation", railWidth = 240, position = "fixed" } = props;
  return (
    <AppBar
      position={position}
      color="default"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
        width: { md: `calc(100% - ${railWidth}px)` },
        ml: { md: `${railWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { md: "none" } }}
          aria-label={menuLabel}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header33;
