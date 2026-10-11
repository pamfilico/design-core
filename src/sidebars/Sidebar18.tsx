"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

export interface Sidebar18Item {
  key?: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface Sidebar18Props {
  /** AppBar title. */
  title: React.ReactNode;
  /** Signed-in user's name, shown before the logout button. */
  username?: React.ReactNode;
  onLogout: () => void;
  /** Logout button label (default "Logout"). */
  logoutLabel?: React.ReactNode;
  items: Sidebar18Item[];
  /** Current path; the matching item (or anything under it) is selected. */
  activeHref: string;
  onNavigate?: (href: string) => void;
  /** Link component (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
  /** Heading at the top of the drawer (default "Admin Panel"). */
  drawerTitle?: React.ReactNode;
  /** aria-label of the hamburger (default "open navigation"). */
  openNavLabel?: string;
  /** Initial drawer state. */
  defaultOpen?: boolean;
}

const isPathActive = (activeHref: string, href: string) =>
  activeHref === href || activeHref.startsWith(href.replace(/\/$/, "") + "/");

/**
 * Static top bar (hamburger, title, user name, logout) whose hamburger opens a 250px
 * temporary left drawer: a primary-coloured heading, a divider and a list of icon + label
 * rows. Picking a row navigates and closes the drawer.
 */
export function Sidebar18({
  title,
  username,
  onLogout,
  logoutLabel = "Logout",
  items,
  activeHref,
  onNavigate,
  linkComponent = "a",
  drawerTitle = "Admin Panel",
  openNavLabel = "open navigation",
  defaultOpen = false,
}: Sidebar18Props) {
  const [drawerOpen, setDrawerOpen] = React.useState(defaultOpen);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
            aria-label={openNavLabel}
            data-testid="btn-open-nav"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            {username}
          </Typography>
          <Button color="inherit" onClick={onLogout}>
            {logoutLabel}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="primary">
              {drawerTitle}
            </Typography>
          </Box>
          <Divider />
          <List>
            {items.map((item) => (
              <ListItem key={item.key ?? item.href} disablePadding>
                <ListItemButton
                  component={linkComponent}
                  href={item.href}
                  data-testid={`nav-${item.key ?? item.href}`}
                  onClick={(e: React.MouseEvent) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(item.href);
                    }
                    setDrawerOpen(false);
                  }}
                  selected={isPathActive(activeHref, item.href)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar18;
