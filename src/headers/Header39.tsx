"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { alpha } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export interface Header57Props {
  /** Back link text, e.g. "Back to results". */
  backLabel: React.ReactNode;
  onBack?: () => void;
  /** Current page / owner name shown after a "›" separator (from `sm`). */
  currentLabel?: React.ReactNode;
  /** Accessible label of the nav landmark (default "breadcrumb"). */
  ariaLabel?: string;
  /**
   * "fixed" floats the chip at the top-left, after a 40px floating home logo (as in the original);
   * "static" renders it inline.
   */
  position?: "fixed" | "static";
  /** Left offset when fixed (default 56 = 8 + 40 + 8). */
  left?: number;
}

/**
 * Floating breadcrumb chip for a focused flow such as a checkout: a translucent, blurred rounded
 * box with "‹ Back" and, from `sm`, "› Current". Lifts slightly on hover. Adds no second header.
 */
export function Header39(props: Header57Props) {
  const { backLabel, onBack, currentLabel, ariaLabel = "breadcrumb", position = "fixed", left = 8 + 40 + 8 } = props;
  const fixed = position === "fixed";
  return (
    <Box
      component="nav"
      aria-label={ariaLabel}
      sx={{
        position: fixed ? "fixed" : "relative",
        top: fixed ? 8 : undefined,
        left: fixed ? left : undefined,
        zIndex: 1100,
        height: 40,
        pl: 0.75,
        pr: 1.75,
        display: "inline-flex",
        alignItems: "center",
        maxWidth: fixed ? "calc(100vw - 260px)" : "100%",
        color: "text.primary",
        fontSize: "0.9rem",
        fontWeight: 600,
        backgroundColor: (t) => alpha(t.palette.background.paper, 0.85),
        backdropFilter: "blur(6px)",
        borderRadius: 2,
        boxShadow: 1,
        transition: "transform 200ms, box-shadow 200ms",
        "&:hover": { transform: "translateY(-1px)", boxShadow: 2 },
        "& svg": { color: "primary.main" },
      }}
    >
      <ButtonBase
        onClick={onBack}
        sx={{ display: "flex", alignItems: "center", gap: "4px", height: "100%", font: "inherit", minWidth: 0 }}
      >
        <ChevronLeftIcon fontSize="small" />
        <Box
          component="span"
          sx={{ whiteSpace: "nowrap", fontWeight: { xs: 700, sm: 500 }, color: { xs: "text.primary", sm: "text.secondary" } }}
        >
          {backLabel}
        </Box>
      </ButtonBase>
      {currentLabel && (
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", minWidth: 0 }}>
          <Box component="span" aria-hidden sx={{ mx: 0.75, color: "text.disabled" }}>
            ›
          </Box>
          <Box
            component="span"
            aria-current="page"
            sx={{ fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            {currentLabel}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Header39;
