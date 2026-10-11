"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export interface Header14Item {
  /** Stable key (e.g. a section id). */
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export interface Header14Props {
  brand: React.ReactNode;
  brandHref?: string;
  linkComponent?: React.ElementType;
  /** Section links; `onItemClick` gets the id (e.g. to scroll to a section). */
  items: Header14Item[];
  onItemClick?: (id: string) => void;
  menuLabel?: string;
  themeMode?: "light" | "dark";
  onToggleTheme?: () => void;
  toDarkLabel?: string;
  toLightLabel?: string;
  contactLabel?: React.ReactNode;
  onContact?: () => void;
  signedIn?: boolean;
  dashboardLabel?: React.ReactNode;
  dashboardHref?: string;
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  getStartedLabel?: React.ReactNode;
  signInLabel?: React.ReactNode;
  signInHref?: string;
}

/**
 * Fixed landing header on the paper colour: below `lg` a hamburger opens a right
 * drawer of icon links; brand; centred icon text buttons on `lg`+; then theme toggle,
 * contact, and either dashboard (contained) + sign out or get started (contained) +
 * sign in.
 */
export function Header14({
  brand,
  brandHref = "/",
  linkComponent = "a",
  items,
  onItemClick,
  menuLabel = "open navigation menu",
  themeMode = "light",
  onToggleTheme,
  toDarkLabel = "Switch to dark mode",
  toLightLabel = "Switch to light mode",
  contactLabel,
  onContact,
  signedIn = false,
  dashboardLabel = "Go to Dashboard",
  dashboardHref = "/dashboard",
  signOutLabel = "Logout",
  onSignOut,
  getStartedLabel = "Get Started",
  signInLabel = "Login",
  signInHref = "/login",
}: Header14Props) {
  const [open, setOpen] = React.useState(false);
  const btnSx = { fontWeight: 600, textTransform: "none", color: "text.primary" } as const;

  return (
    <AppBar position="fixed" sx={{ bgcolor: "background.paper", color: "text.primary", boxShadow: 1 }}>
      <Toolbar>
        <IconButton edge="start" onClick={() => setOpen(true)} sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }} aria-label={menuLabel}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)} sx={{ display: { xs: "block", lg: "none" } }}>
          <Box sx={{ width: 280, pt: 2 }} role="presentation">
            <List>
              {items.map((item) => (
                <ListItemButton
                  key={item.id}
                  onClick={() => {
                    onItemClick?.(item.id);
                    setOpen(false);
                  }}
                  sx={{ py: 1.5 }}
                >
                  {item.icon && <ListItemIcon sx={{ minWidth: 40, color: "primary.main" }}>{item.icon}</ListItemIcon>}
                  <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 600 } } }} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
        <Typography variant="h6" component={linkComponent} href={brandHref} sx={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}>
          {brand}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" }, gap: 1, ml: 4, justifyContent: "center" }}>
          {items.map((item) => (
            <Button key={item.id} startIcon={item.icon} sx={btnSx} onClick={() => onItemClick?.(item.id)}>
              {item.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
          {onToggleTheme && (
            <Tooltip title={themeMode === "light" ? toDarkLabel : toLightLabel}>
              <IconButton onClick={onToggleTheme} color="inherit" aria-label={themeMode === "light" ? toDarkLabel : toLightLabel}>
                {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
          )}
          {contactLabel && (
            <Button onClick={onContact} sx={btnSx}>
              {contactLabel}
            </Button>
          )}
          {signedIn ? (
            <>
              <Button component={linkComponent} href={dashboardHref} variant="contained" sx={{ fontWeight: 600, textTransform: "none" }}>
                {dashboardLabel}
              </Button>
              <Button onClick={onSignOut} sx={btnSx}>
                {signOutLabel}
              </Button>
            </>
          ) : (
            <>
              <Button component={linkComponent} href={signInHref} variant="contained" sx={{ fontWeight: 600, textTransform: "none" }}>
                {getStartedLabel}
              </Button>
              <Button component={linkComponent} href={signInHref} sx={btnSx}>
                {signInLabel}
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header14;
