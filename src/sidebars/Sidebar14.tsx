"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";

export interface Sidebar14Item {
  key?: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface Sidebar14Props {
  /** Brand shown at the top of the drawer (wordmark text or a logo node). */
  brand?: React.ReactNode;
  items: Sidebar14Item[];
  /** Current path; the exactly matching item is selected and titles the app bar. */
  activeHref: string;
  onNavigate?: (href: string) => void;
  linkComponent?: React.ElementType;
  onSignOut: () => void;
  signOutLabel?: string;
  openNavLabel?: string;
  /** App bar title when no item matches the current path. */
  fallbackTitle?: string;
  /** Drawer width in px (default 240). */
  railWidth?: number;
  /** Colour the brand with the primary colour (default true). */
  brandColored?: boolean;
  /** `auto` (default) switches at `md`. */
  mode?: "auto" | "permanent" | "temporary";
  testid?: string;
  children?: React.ReactNode;
}

/**
 * Whole signed-in frame: a permanent 240px drawer (brand, page list, sign out) from `md`
 * up, a temporary drawer opened by a hamburger below it, and an app bar offset by the
 * drawer that shows the current page's label. Two drawers rather than one that changes
 * variant, so a resize never remounts the page content.
 */
export function Sidebar14({
  brand,
  items,
  activeHref,
  onNavigate,
  linkComponent = "a",
  onSignOut,
  signOutLabel = "Sign out",
  openNavLabel = "Open navigation",
  fallbackTitle,
  railWidth = 240,
  brandColored = true,
  mode = "auto",
  testid,
  children,
}: Sidebar14Props) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktop = mode === "auto" ? upMd : mode === "permanent";
  const [open, setOpen] = React.useState(false);

  const nav = (
    <List data-testid="app-sidebar">
      {items.map((item) => {
        const key = item.key ?? item.href;
        return (
          <ListItemButton
            key={key}
            component={linkComponent}
            href={item.href}
            selected={activeHref === item.href}
            data-testid={`nav-${key}`}
            onClick={(e: React.MouseEvent) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(item.href);
              }
              setOpen(false);
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        );
      })}
      <Divider sx={{ my: 1 }} />
      <ListItemButton onClick={onSignOut} data-testid="btn-signout">
        <ListItemIcon sx={{ minWidth: 40 }}>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary={signOutLabel} />
      </ListItemButton>
    </List>
  );

  const brandBlock = (
    <Toolbar>
      {typeof brand === "string" ? (
        <Typography sx={{ fontWeight: 800, color: brandColored ? "primary.main" : undefined }}>{brand}</Typography>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", color: brandColored ? "primary.main" : undefined }}>
          {brand}
        </Box>
      )}
    </Toolbar>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }} data-testid={testid}>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          background: "transparent",
          backgroundColor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
          width: isDesktop ? `calc(100% - ${railWidth}px)` : "100%",
          ml: isDesktop ? `${railWidth}px` : 0,
        }}
      >
        <Toolbar>
          {!isDesktop && (
            <IconButton
              edge="start"
              onClick={() => setOpen(true)}
              sx={{ mr: 2 }}
              aria-label={openNavLabel}
              data-testid="btn-open-nav"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {items.find((i) => i.href === activeHref)?.label ?? fallbackTitle ?? items[0]?.label}
          </Typography>
        </Toolbar>
      </AppBar>

      {isDesktop ? (
        <Drawer
          variant="permanent"
          sx={{
            width: railWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: railWidth, boxSizing: "border-box" },
          }}
        >
          {brandBlock}
          <Divider />
          {nav}
        </Drawer>
      ) : (
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          slotProps={{ paper: { sx: { width: railWidth } } }}
          data-testid="nav-drawer"
        >
          {brandBlock}
          <Divider />
          {nav}
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 }, width: "100%", minWidth: 0 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Sidebar14;
