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

export interface Sidebar22Action {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** Scroll to a section, navigate, … The drawer closes afterwards. */
  onClick: () => void;
}

export interface Sidebar22Props {
  items: Sidebar22Action[];
  /** aria-label of the hamburger (default "open navigation menu"). */
  menuLabel?: string;
  /** Controlled open state; uncontrolled when omitted. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Initial state when uncontrolled. */
  defaultOpen?: boolean;
}

/**
 * Landing-page menu: a hamburger button that opens a 280px drawer from the RIGHT, with
 * roomy rows, primary-coloured icons and bold labels. Each row runs its action and closes
 * the drawer.
 */
export function Sidebar22({
  items,
  menuLabel = "open navigation menu",
  open,
  onOpenChange,
  defaultOpen = false,
}: Sidebar22Props) {
  const [inner, setInner] = React.useState(defaultOpen);
  const isOpen = open ?? inner;
  const setOpen = (value: boolean) => {
    setInner(value);
    onOpenChange?.(value);
  };

  return (
    <>
      <IconButton edge="start" onClick={() => setOpen(true)} sx={{ mr: 1 }} aria-label={menuLabel}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
          <List>
            {items.map((item) => (
              <ListItemButton
                key={item.key}
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
                sx={{ py: 1.5 }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: "primary.main" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar22;
