"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar15, type Sidebar15Props } from "./Sidebar15.tsx";

export interface Sidebar16Props extends Sidebar15Props {
  /** Smaller menu button for dense mobile headers. */
  compact?: boolean;
  /** Controlled open state; uncontrolled when omitted. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Initial state when uncontrolled. */
  defaultOpen?: boolean;
  menuLabel?: string;
  closeLabel?: string;
}

/**
 * Hamburger button plus a transparent left drawer in which the floating icon rail
 * (Sidebar15) hangs: an 80px column with a round close button on top and the rail
 * filling the rest, with bottom padding to clear a fixed bottom tab bar. Navigating
 * closes the drawer.
 */
export function Sidebar16({
  compact = false,
  open,
  onOpenChange,
  defaultOpen = false,
  menuLabel = "menu",
  closeLabel = "close drawer",
  ...rail
}: Sidebar16Props) {
  const [innerOpen, setInnerOpen] = React.useState(defaultOpen);
  const drawerOpen = open ?? innerOpen;
  const setOpen = (value: boolean) => {
    setInnerOpen(value);
    onOpenChange?.(value);
  };

  return (
    <>
      <IconButton
        edge="start"
        aria-label={menuLabel}
        data-testid="drawer-open-menu"
        onClick={() => setOpen(true)}
        size={compact ? "small" : "medium"}
      >
        <MenuIcon fontSize={compact ? "small" : "medium"} />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { backgroundColor: "transparent", boxShadow: "none" } } }}
      >
        <Box
          sx={{
            width: 80,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "flex-start",
            backgroundColor: "transparent",
            p: 1,
            pb: 9,
          }}
          role="presentation"
        >
          <IconButton
            data-testid="drawer-close"
            onClick={() => setOpen(false)}
            aria-label={closeLabel}
            sx={{
              alignSelf: "center",
              mt: 1,
              mb: 2,
              boxShadow: 3,
              backgroundColor: "background.paper",
              "&:hover": { boxShadow: 6, backgroundColor: "background.paper" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ flex: 1, minHeight: 0, display: "flex" }}>
            <Sidebar15
              {...rail}
              onNavigate={
                rail.onNavigate
                  ? (href) => {
                      rail.onNavigate?.(href);
                      setOpen(false);
                    }
                  : undefined
              }
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar16;
