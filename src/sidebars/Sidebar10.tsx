"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";

export interface Sidebar10Section {
  /** Id of the page section to jump to. */
  id: string;
  /** Tooltip text. */
  label: string;
  icon: React.ReactNode;
}

export interface Sidebar10Props {
  sections: Sidebar10Section[];
  /** Id of the highlighted section. */
  activeId?: string;
  /** Called with the section id when a button is tapped. */
  onSelect: (id: string) => void;
  /** aria-label on every button (default "scroll"). */
  ariaLabel?: string;
}

/**
 * Floating section navigation for phones: a vertical stack of small FABs fixed at the
 * bottom-left corner (16px / 12px) that stays on screen while the page scrolls. Tapping
 * one jumps to its section; the active one uses the secondary colour. Hidden from `md` up.
 */
export function Sidebar10({ sections, activeId, onSelect, ariaLabel = "scroll" }: Sidebar10Props) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        left: 12,
        display: { xs: "flex", md: "none" },
        flexDirection: "column",
        gap: 1.5,
        zIndex: (theme) => theme.zIndex.tooltip,
      }}
    >
      {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <Tooltip key={section.id} title={section.label} arrow>
            <Fab
              color={isActive ? "secondary" : "primary"}
              aria-label={ariaLabel}
              size="small"
              sx={{
                display: { xs: "flex", md: "none" },
                backgroundColor: isActive ? "secondary.main" : "primary.main",
                "&:hover": { backgroundColor: isActive ? "secondary.dark" : "primary.dark" },
              }}
              onClick={() => onSelect(section.id)}
            >
              {section.icon}
            </Fab>
          </Tooltip>
        );
      })}
    </Box>
  );
}

export default Sidebar10;
