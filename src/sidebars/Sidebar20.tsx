"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";

export interface Sidebar20Item {
  key?: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  /** Tooltip text when it differs from the label. */
  tooltip?: string;
  /** Destructive styling (error colour). */
  danger?: boolean;
  /** Draw a divider after this item (group separator). */
  dividerAfter?: boolean;
}

export interface Sidebar20Props {
  items: Sidebar20Item[];
  /** Current path; drives the active button. */
  activeHref: string;
  onNavigate?: (href: string) => void;
  /** Link component (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
  /** Active rule. Defaults to an exact match on the href without its query string. */
  isActive?: (activeHref: string, item: Sidebar20Item) => boolean;
}

/**
 * A sticky 64px floating rail of 48px icon buttons with tooltips on the right, kept on
 * screen next to the page (not in a drawer). The active button is filled with the primary
 * colour; `danger` items use the error colour; `dividerAfter` separates groups.
 */
export function Sidebar20({
  items,
  activeHref,
  onNavigate,
  linkComponent = "a",
  isActive = (path, item) => path === item.href.split("?")[0],
}: Sidebar20Props) {
  return (
    <Paper
      elevation={2}
      data-testid="icon-rail"
      sx={{
        width: 64,
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        position: "sticky",
        top: 20,
        backgroundColor: "background.paper",
        borderRadius: 2,
      }}
    >
      {items.map((item) => {
        const active = isActive(activeHref, item);
        const tone = item.danger ? "error" : "primary";
        const key = item.key ?? item.href;
        return (
          <Box key={key}>
            <Tooltip title={item.tooltip ?? item.label} placement="right">
              <IconButton
                component={linkComponent}
                href={item.href}
                aria-label={item.label}
                data-testid={`nav-${key}`}
                onClick={(e: React.MouseEvent) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate(item.href);
                  }
                }}
                sx={{
                  mb: 1,
                  width: 48,
                  height: 48,
                  backgroundColor: active ? `${tone}.main` : "transparent",
                  color: active ? `${tone}.contrastText` : item.danger ? "error.main" : "text.primary",
                  "&:hover": {
                    backgroundColor: active ? `${tone}.dark` : item.danger ? "error.light" : "action.hover",
                  },
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
            {item.dividerAfter && <Divider sx={{ width: "80%", my: 1 }} />}
          </Box>
        );
      })}
    </Paper>
  );
}

export default Sidebar20;
