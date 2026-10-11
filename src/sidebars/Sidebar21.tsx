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

export interface Sidebar21Action {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** Scroll to a section, navigate, … The drawer closes afterwards. */
  onClick: () => void;
}

export interface Sidebar21Props {
  items: Sidebar21Action[];
  /** Rendered at the end of the list (e.g. a language switcher). */
  footerSlot?: React.ReactNode;
  /** aria-label of the hamburger (default "menu"). */
  menuLabel?: string;
  /** Controlled open state; uncontrolled when omitted. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Initial state when uncontrolled. */
  defaultOpen?: boolean;
}

/**
 * Public (signed-out) menu: a hamburger button that opens a 250px left drawer of action
 * rows with small icons, followed by an optional footer slot. Each row runs its action and
 * closes the drawer.
 */
export function Sidebar21({
  items,
  footerSlot,
  menuLabel = "menu",
  open,
  onOpenChange,
  defaultOpen = false,
}: Sidebar21Props) {
  const [inner, setInner] = React.useState(defaultOpen);
  const isOpen = open ?? inner;
  const setOpen = (value: boolean) => {
    setInner(value);
    onOpenChange?.(value);
  };

  return (
    <>
      <IconButton edge="start" aria-label={menuLabel} onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 250, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", p: 2 }}
          role="presentation"
        >
          <List>
            {items.map((item) => (
              <ListItemButton
                key={item.key}
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            {footerSlot}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar21;
