"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export interface Header66Section {
  /** Section id to scroll to. */
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export interface Header66SignInOption {
  key: string;
  href: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface Header66Props {
  brand: React.ReactNode;
  brandHref?: string;
  /** In-page sections; centred buttons from `lg`, a right drawer below. */
  sections: Header66Section[];
  /** Called with the section id. Defaults to smooth-scrolling to the element with that id. */
  onSectionClick?: (id: string) => void;
  menuLabel?: string;
  themeMode?: "light" | "dark";
  onToggleTheme?: () => void;
  toDarkLabel?: string;
  toLightLabel?: string;
  signedIn?: boolean;
  dashboardLabel: React.ReactNode;
  dashboardHref?: string;
  /** Signed out: the contained primary call to action. */
  ctaLabel: React.ReactNode;
  ctaHref?: string;
  /** Signed out: "Sign in ▾" opening a menu of sign-in cards. */
  signInLabel: React.ReactNode;
  signInOptions: Header66SignInOption[];
  position?: "fixed" | "static" | "sticky";
  linkComponent?: React.ElementType;
}

/**
 * Marketing top bar on the paper surface: brand on the left, centred icon buttons that scroll to
 * page sections (a right-hand drawer below `lg`), and on the right a theme toggle plus either
 * "Go to dashboard" or a contained call to action and a "Sign in ▾" chooser.
 */
export function Header48(props: Header66Props) {
  const {
    brand,
    brandHref = "/",
    sections,
    onSectionClick,
    menuLabel = "open navigation menu",
    themeMode = "light",
    onToggleTheme,
    toDarkLabel = "Switch to dark mode",
    toLightLabel = "Switch to light mode",
    signedIn = false,
    dashboardLabel,
    dashboardHref = "/dashboard",
    ctaLabel,
    ctaHref = "/auth/login",
    signInLabel,
    signInOptions,
    position = "fixed",
    linkComponent = "a",
  } = props;
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const go = (id: string) => {
    if (onSectionClick) onSectionClick(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar position={position} sx={{ backgroundColor: "background.paper", color: "text.primary", boxShadow: 1 }}>
      <Toolbar>
        <IconButton edge="start" onClick={() => setDrawerOpen(true)} sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }} aria-label={menuLabel}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} sx={{ display: { xs: "block", lg: "none" } }}>
          <Box sx={{ width: 280, pt: 2 }} role="presentation">
            <List>
              {sections.map((s) => (
                <ListItemButton
                  key={s.id}
                  onClick={() => {
                    go(s.id);
                    setDrawerOpen(false);
                  }}
                  sx={{ py: 1.5 }}
                >
                  {s.icon && <ListItemIcon sx={{ minWidth: 40, color: "primary.main" }}>{s.icon}</ListItemIcon>}
                  <ListItemText primary={s.label} slotProps={{ primary: { fontWeight: 600 } }} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
        <Typography variant="h6" component={linkComponent} href={brandHref} sx={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}>
          {brand}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" }, gap: 1, ml: 4, justifyContent: "center" }}>
          {sections.map((s) => (
            <Button key={s.id} startIcon={s.icon} sx={{ fontWeight: 600, textTransform: "none", color: "text.primary" }} onClick={() => go(s.id)}>
              {s.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
          {onToggleTheme && (
            <Tooltip title={themeMode === "light" ? toDarkLabel : toLightLabel}>
              <IconButton onClick={onToggleTheme} color="inherit" aria-label="toggle theme">
                {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
          )}
          {signedIn ? (
            <Button component={linkComponent} href={dashboardHref} variant="contained" sx={{ fontWeight: 600, textTransform: "none" }}>
              {dashboardLabel}
            </Button>
          ) : (
            <>
              <Button component={linkComponent} href={ctaHref} variant="contained" sx={{ fontWeight: 600, textTransform: "none" }}>
                {ctaLabel}
              </Button>
              <Button onClick={(e) => setAnchor(e.currentTarget)} endIcon={<ExpandMoreIcon />} sx={{ fontWeight: 600, textTransform: "none", color: "text.primary" }}>
                {signInLabel}
              </Button>
              <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={() => setAnchor(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{ paper: { sx: { mt: 1.5, p: 1.5, minWidth: 280 } } }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {signInOptions.map((o) => (
                    <Card key={o.key} variant="outlined" sx={{ overflow: "hidden" }}>
                      <CardActionArea component={linkComponent} href={o.href} onClick={() => setAnchor(null)} sx={{ display: "block", textAlign: "left" }}>
                        <CardContent sx={{ "&:last-child": { pb: 2 } }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                            {o.icon && <Box sx={{ display: "flex", color: "primary.main" }}>{o.icon}</Box>}
                            <Typography variant="subtitle1" fontWeight={600}>
                              {o.title}
                            </Typography>
                          </Box>
                          {o.body && (
                            <Typography variant="body2" color="text.secondary">
                              {o.body}
                            </Typography>
                          )}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Box>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header48;
