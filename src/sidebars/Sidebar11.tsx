"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";

export interface Sidebar11Section {
  /** Id of the page section to jump to. */
  id: string;
  /** Tooltip text. */
  label: string;
  icon: React.ReactNode;
}

export interface Sidebar11Props {
  sections: Sidebar11Section[];
  /** Id of the highlighted section. */
  activeId?: string;
  /** Called with the section id when a button is tapped. */
  onSelect: (id: string) => void;
  /** aria-label on every button (default "scroll"). */
  ariaLabel?: string;
}

/**
 * Floating section navigation for phones, as a horizontal row: each small FAB is fixed at
 * 12% from the top and spaced 56px apart from 10% of the width, so the row stays put while
 * the page scrolls (usually rendered inside a header bar). Tapping one jumps to its section;
 * the active one uses the secondary colour. Hidden from `md` up.
 */
export function Sidebar11({ sections, activeId, onSelect, ariaLabel = "scroll" }: Sidebar11Props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
      {sections.map((section, index) => {
        const isActive = activeId === section.id;
        return (
          <Tooltip key={section.id} title={section.label} arrow>
            <Fab
              color={isActive ? "secondary" : "primary"}
              aria-label={ariaLabel}
              size="small"
              sx={{
                position: "fixed",
                top: "12%",
                left: `calc(10% + ${index * 56}px)`,
                transform: "translateX(-50%)",
                mt: 0,
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

export default Sidebar11;
