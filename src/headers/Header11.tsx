"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";

export interface Header11Item {
  label: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}

export interface Header11Props {
  title: React.ReactNode;
  /** Heading at the top of the drawer. */
  drawerTitle?: React.ReactNode;
  items: Header11Item[];
  /** Current path; the matching item (or its parent) is selected. */
  activeHref?: string;
  /** Called with the item's href; the drawer then closes. Without it items are plain links. */
  onNavigate?: (href: string) => void;
  linkComponent?: React.ElementType;
  /** Name shown before the sign-out button. */
  userName?: React.ReactNode;
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  menuLabel?: string;
}

/**
 * Static admin bar: a hamburger that opens a temporary left drawer (title, divider,
 * icon list with the current item selected), the title, the signed-in name and a
 * sign-out text button.
 */
export function Header11({
  title,
  drawerTitle,
  items,
  activeHref,
  onNavigate,
  linkComponent = "a",
  userName,
  signOutLabel = "Sign out",
  onSignOut,
  menuLabel = "open menu",
}: Header11Props) {
  const [open, setOpen] = React.useState(false);
  const isActive = (href: string) => !!activeHref && (activeHref === href || activeHref.startsWith(`${href}/`));

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setOpen(true)} sx={{ mr: 2 }} aria-label={menuLabel}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {userName && (
            <Typography variant="body2" sx={{ mr: 2 }}>
              {userName}
            </Typography>
          )}
          {onSignOut && (
            <Button color="inherit" onClick={onSignOut}>
              {signOutLabel}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          {drawerTitle && (
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" color="primary">
                {drawerTitle}
              </Typography>
            </Box>
          )}
          <Divider />
          <List>
            {items.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  {...(onNavigate
                    ? { onClick: () => { onNavigate(item.href); setOpen(false); } }
                    : { component: linkComponent, href: item.href })}
                  selected={isActive(item.href)}
                >
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
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

export default Header11;
