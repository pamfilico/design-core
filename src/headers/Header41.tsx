"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

export interface Header59Props {
  /** Optional slot on the left (empty in the original, where the brand was switched off). */
  left?: React.ReactNode;
  homeLabel: React.ReactNode;
  homeHref?: string;
  contactLabel: React.ReactNode;
  /** Opens the contact dialog. */
  onContact?: () => void;
  menuLabel?: string;
  linkComponent?: React.ElementType;
}

/**
 * Transparent 70px bar with a single Contact button on the right; below `sm` it becomes a
 * hamburger opening a left drawer with large Home and Contact rows.
 */
export function Header41(props: Header59Props) {
  const { left, homeLabel, homeHref = "/", contactLabel, onContact, menuLabel = "open drawer", linkComponent = "a" } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const bar = (right: React.ReactNode) => (
    <AppBar position="static" sx={{ height: 70, backgroundColor: "transparent" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", height: "100%" }}>
        {left}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>{right}</Box>
      </Toolbar>
    </AppBar>
  );

  if (!isMobile) return bar(<Button onClick={onContact}>{contactLabel}</Button>);

  const rowText = { primary: { fontSize: "1.125rem", fontWeight: 500 } };
  return (
    <>
      {bar(
        <IconButton color="inherit" aria-label={menuLabel} onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>,
      )}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={linkComponent} href={homeHref} sx={{ py: 2 }}>
                <ListItemText primary={homeLabel} slotProps={rowText} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={onContact} sx={{ py: 2 }}>
                <ListItemText primary={contactLabel} slotProps={rowText} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header41;
