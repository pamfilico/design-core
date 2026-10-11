"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export interface Sidebar19Item {
  key?: string;
  label: string;
  href: string;
  /** Sub-items, shown in an indented collapse while the item is expanded. */
  children?: Sidebar19Item[];
}

export interface Sidebar19Props {
  /** AppBar title. */
  title: React.ReactNode;
  /** Signed-in user's name, shown before the logout button. */
  username?: React.ReactNode;
  onLogout: () => void;
  /** Logout button label (default "Logout"). */
  logoutLabel?: React.ReactNode;
  items: Sidebar19Item[];
  /** Current path; drives selection and which items are expanded. */
  activeHref: string;
  onNavigate?: (href: string) => void;
  /** Link component (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
  /** Which items show their children. Default: while the current path is under the item. */
  isExpanded?: (item: Sidebar19Item) => boolean;
  /** Max width of the main container; false for full-width pages (default "lg"). */
  containerMaxWidth?: "lg" | false;
  /** Drawer width in px (default 220). */
  drawerWidth?: number;
  children?: React.ReactNode;
}

/**
 * Whole admin frame: a full-width top bar (title, user name, logout) above a permanent
 * 220px drawer of text-only links, and the page in a container beside it. An item with
 * `children` expands into an indented, dense sub-list while you are inside it; a parent is
 * only selected on its own page, not while one of its children is.
 */
export function Sidebar19({
  title,
  username,
  onLogout,
  logoutLabel = "Logout",
  items,
  activeHref,
  onNavigate,
  linkComponent = "a",
  isExpanded,
  containerMaxWidth = "lg",
  drawerWidth = 220,
  children,
}: Sidebar19Props) {
  const expanded = isExpanded ?? ((item: Sidebar19Item) => activeHref.startsWith(item.href));

  const linkProps = (href: string) => ({
    component: linkComponent,
    href,
    onClick: (e: React.MouseEvent) => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(href);
      }
    },
  });

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }} color="default">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {username ? (
            <Typography variant="body2" sx={{ mr: 2 }}>
              {username}
            </Typography>
          ) : null}
          <Button size="small" onClick={onLogout}>
            {logoutLabel}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          {items.map((item) => {
            const hasChildren = !!item.children?.length;
            const open = hasChildren && expanded(item);
            const childActive = item.children?.some((c) => activeHref.startsWith(c.href)) ?? false;
            const key = item.key ?? item.href;
            return (
              <Box key={key}>
                <ListItem disablePadding>
                  <ListItemButton
                    {...linkProps(item.href)}
                    selected={
                      hasChildren
                        ? activeHref === item.href || (activeHref.startsWith(item.href) && !childActive && !open)
                        : activeHref.startsWith(item.href)
                    }
                    data-testid={`nav-${key}`}
                    sx={hasChildren ? { py: 1 } : undefined}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
                {hasChildren && (
                  <Collapse in={open} timeout="auto" unmountOnExit={false}>
                    <List component="div" disablePadding dense>
                      {item.children!.map((child) => (
                        <ListItem key={child.key ?? child.href} disablePadding>
                          <ListItemButton
                            {...linkProps(child.href)}
                            selected={activeHref.startsWith(child.href)}
                            data-testid={`nav-${child.key ?? child.href}`}
                            sx={{ pl: 4 }}
                          >
                            <ListItemText primary={child.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Toolbar />
        <Container maxWidth={containerMaxWidth} sx={{ py: 3 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default Sidebar19;
