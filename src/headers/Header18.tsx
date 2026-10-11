"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

export interface Header18Item {
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** Either a link… */
  href?: string;
  /** …or a handler (e.g. scroll to a section). */
  onClick?: () => void;
}

export interface Header18Props {
  items: Header18Item[];
  /** Rendered under the list inside the drawer (e.g. a language select). */
  footer?: React.ReactNode;
  menuLabel?: string;
  linkComponent?: React.ElementType;
}

/**
 * Hamburger for the start of a toolbar that opens a 250px left drawer with a list
 * of small-icon links and an optional footer slot. Clicking anywhere in the drawer
 * closes it.
 */
export function Header18({ items, footer, menuLabel = "menu", linkComponent = "a" }: Header18Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <IconButton edge="start" aria-label={menuLabel} onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 250, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", p: 2 }}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <List>
            {items.map((item, i) => (
              <ListItemButton
                key={i}
                {...(item.href ? { component: linkComponent, href: item.href } : {})}
                onClick={item.onClick}
              >
                {item.icon && <ListItemIcon sx={{ minWidth: 36, "& svg": { fontSize: 20 } }}>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            {footer && <Box onClick={(e) => e.stopPropagation()}>{footer}</Box>}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header18;
