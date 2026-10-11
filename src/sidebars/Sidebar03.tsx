"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Sidebar01, type Sidebar01Props } from "./Sidebar01.tsx";

export interface Sidebar03Props extends Omit<Sidebar01Props, "header"> {
  /** Where the header leads back to (default "/"). */
  backHref?: string;
  /** Bold header label (default "Back to home"). */
  backLabel?: string;
  /** Muted caption under the label: the name of this area (e.g. "Settings"). */
  caption?: React.ReactNode;
}

/**
 * Hover-to-expand sectioned rail (see Sidebar01) for a top-level area that is not nested
 * under a record: its header is a way back out. Collapsed, the header is a lone back
 * arrow; expanded, the arrow sits beside a bold "Back to home" label and the area name.
 */
export function Sidebar03({
  backHref = "/",
  backLabel = "Back to home",
  caption,
  linkComponent = "a",
  onNavigate,
  ...rail
}: Sidebar03Props) {
  return (
    <Sidebar01
      {...rail}
      linkComponent={linkComponent}
      onNavigate={onNavigate}
      header={({ expanded }) => (
        <Box
          component={linkComponent}
          href={backHref}
          onClick={(e: React.MouseEvent) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate(backHref);
            }
          }}
          sx={{
            px: expanded ? 2 : 0,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: expanded ? "flex-start" : "center",
            gap: 1,
            color: "inherit",
            textDecoration: "none",
            "&:hover": { opacity: 0.8 },
          }}
        >
          <ArrowBackIcon fontSize="small" />
          {expanded ? (
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="subtitle2" fontWeight={700} noWrap>
                {backLabel}
              </Typography>
              {caption ? (
                <Typography variant="caption" color="text.secondary" noWrap>
                  {caption}
                </Typography>
              ) : null}
            </Box>
          ) : (
            <Tooltip title={backLabel} placement="right">
              <Box component="span" sx={{ display: "none" }} />
            </Tooltip>
          )}
        </Box>
      )}
    />
  );
}

export default Sidebar03;
