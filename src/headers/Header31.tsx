"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export interface Header31Item {
  label: React.ReactNode;
  href: string;
}

export interface Header31Props {
  /** Small logo (≈32px) before the name. */
  logo?: React.ReactNode;
  name: React.ReactNode;
  homeHref?: string;
  items: Header31Item[];
  menuLabel?: string;
  closeLabel?: string;
  linkComponent?: React.ElementType;
}

/**
 * Static marketing bar on the neutral AppBar colour: logo + bold name, centred text
 * links, and below `md` a burger that opens a right drawer repeating the brand (with
 * a close button) and the links as a list.
 */
export function Header31({
  logo,
  name,
  homeHref = "/",
  items,
  menuLabel = "menu",
  closeLabel = "close",
  linkComponent = "a",
}: Header31Props) {
  const [open, setOpen] = React.useState(false);
  const brand = (
    <Link component={linkComponent} href={homeHref} underline="none" color="inherit" sx={{ display: "flex", alignItems: "center" }}>
      {logo}
      <Typography variant="h6" component="span" sx={{ ml: 1, fontWeight: "bold" }}>
        {name}
      </Typography>
    </Link>
  );
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        {brand}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          {items.map((link) => (
            <Button key={link.href} href={link.href} component={linkComponent} color="inherit" sx={{ mx: 2 }}>
              {link.label}
            </Button>
          ))}
        </Box>
        <IconButton edge="end" color="inherit" aria-label={menuLabel} onClick={() => setOpen(true)} sx={{ display: { md: "none" } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, display: "flex", flexDirection: "column", p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {brand}
            <IconButton onClick={() => setOpen(false)} aria-label={closeLabel}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {items.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton component={linkComponent} href={link.href} onClick={() => setOpen(false)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header31;
