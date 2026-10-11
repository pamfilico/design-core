"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export interface Header64Props {
  /** Screen title; falls back to `brand`. */
  title?: React.ReactNode;
  brand: React.ReactNode;
  /** 36px logo tile shown when there is no back button. */
  logo?: React.ReactNode;
  /** When given, a "‹" back glyph replaces the logo. */
  onBack?: () => void;
  backLabel?: string;
  /** Optional status chip on the right (green when online). */
  status?: { label: React.ReactNode; online?: boolean };
}

/**
 * Compact sticky mobile app bar (64px): logo tile or a large "‹" back glyph, a bold title and an
 * optional status chip on the right.
 */
export function Header46(props: Header64Props) {
  const { title, brand, logo, onBack, backLabel = "Back", status } = props;
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ gap: 1.5, minHeight: 64 }}>
        {onBack ? (
          <IconButton onClick={onBack} aria-label={backLabel} sx={{ fontSize: 28, ml: -1 }}>
            {"‹"}
          </IconButton>
        ) : (
          logo
        )}
        <Typography sx={{ fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.02em", flexGrow: 1 }}>
          {title || brand}
        </Typography>
        {status && (
          <Chip
            label={status.label}
            sx={{
              fontWeight: 700,
              bgcolor: status.online ? "success.main" : "action.selected",
              color: status.online ? "success.contrastText" : "text.secondary",
            }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header46;
