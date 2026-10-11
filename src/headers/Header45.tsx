"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface Header63Props {
  /** Screen title; falls back to `brand`. */
  title?: React.ReactNode;
  /** Name shown when there is no title. */
  brand: React.ReactNode;
  /** 38px logo tile shown when there is no back button. */
  logo?: React.ReactNode;
  /** When given, a back arrow replaces the logo. */
  onBack?: () => void;
  backLabel?: string;
  /** Optional online/offline style status chip at the start of the right group. */
  status?: { label: React.ReactNode; online?: boolean };
  /** Right-hand slot (icon buttons, install, settings…). */
  right?: React.ReactNode;
}

/**
 * Sticky mobile app bar (safe-area aware, 68px): logo tile or back arrow, a bold tight-tracked
 * title that truncates, and a right group with an optional status chip and actions.
 */
export function Header45(props: Header63Props) {
  const { title, brand, logo, onBack, backLabel = "Back", status, right } = props;
  return (
    <AppBar position="sticky" color="default" sx={{ top: "env(safe-area-inset-top, 0px)" }}>
      <Toolbar sx={{ gap: 1.25, minHeight: 68 }}>
        {onBack ? (
          <IconButton onClick={onBack} aria-label={backLabel} sx={{ ml: -1 }}>
            <ArrowBackIcon />
          </IconButton>
        ) : (
          logo
        )}
        <Typography
          component="h1"
          sx={{ fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.02em", flexGrow: 1, minWidth: 0 }}
          noWrap
        >
          {title || brand}
        </Typography>
        {(status || right) && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {status && (
              <Chip
                label={status.label}
                sx={{
                  bgcolor: status.online ? "success.main" : "action.selected",
                  color: status.online ? "success.contrastText" : "text.secondary",
                }}
              />
            )}
            {right}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header45;
