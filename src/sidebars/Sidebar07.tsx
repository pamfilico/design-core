"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export interface Sidebar07Item {
  id: string;
  name: string;
  /** Small outlined chips under the name (e.g. "4 steps"). */
  chips?: string[];
}

export interface Sidebar07Props {
  /** Panel heading (e.g. "Projects"). */
  title: React.ReactNode;
  /** Caption under the heading (e.g. "Select one to see its details"). */
  subtitle?: React.ReactNode;
  items: Sidebar07Item[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  /** Shows a spinner instead of the list. */
  loading?: boolean;
  /** Text when `items` is empty. */
  emptyText: React.ReactNode;
  /** Leading icon of every row (default a tree icon). */
  itemIcon?: React.ReactNode;
  /** When set, each row gets an "open" icon button calling this with the item id. */
  onOpen?: (id: string) => void;
  /** Title (hover text) of the open button. */
  openTitle?: string;
  /** Panel width in px (default 320). */
  width?: number;
}

/**
 * Selectable list column: a 320px flat panel with a right border, a heading and caption on
 * top, then a scrolling list of rows, each with an icon, a name (bold when selected), small
 * outlined chips and an optional "open" button. Shows a spinner while loading and a muted
 * line when empty. Sits as the second column next to an app rail.
 */
export function Sidebar07({
  title,
  subtitle,
  items,
  selectedId,
  onSelect,
  loading = false,
  emptyText,
  itemIcon = <AccountTreeIcon fontSize="small" color="primary" />,
  onOpen,
  openTitle,
  width = 320,
}: Sidebar07Props) {
  return (
    <Paper
      elevation={0}
      sx={{ width, borderRight: 1, borderColor: "divider", display: "flex", flexDirection: "column", flexShrink: 0 }}
    >
      <Box sx={{ px: 2, py: 2, borderBottom: 1, borderColor: "divider" }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        ) : null}
      </Box>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress size={24} />
        </Box>
      ) : items.length === 0 ? (
        <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
          {emptyText}
        </Typography>
      ) : (
        <List disablePadding sx={{ overflow: "auto", flex: 1 }}>
          {items.map((p) => (
            <ListItemButton
              key={p.id}
              selected={selectedId === p.id}
              onClick={() => onSelect(p.id)}
              sx={{ px: 2, py: 1.5, borderBottom: 1, borderColor: "divider" }}
            >
              <ListItemText
                primaryTypographyProps={{ component: "div" }}
                secondaryTypographyProps={{ component: "div" }}
                primary={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {itemIcon}
                    <Typography variant="body1" sx={{ fontWeight: selectedId === p.id ? 700 : 500 }}>
                      {p.name}
                    </Typography>
                  </Box>
                }
                secondary={
                  p.chips?.length ? (
                    <Box sx={{ display: "flex", gap: 0.5, mt: 0.5 }}>
                      {p.chips.map((c) => (
                        <Chip key={c} label={c} size="small" variant="outlined" sx={{ height: 20, fontSize: 10 }} />
                      ))}
                    </Box>
                  ) : null
                }
              />
              {onOpen ? (
                <IconButton
                  size="small"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    onOpen(p.id);
                  }}
                  title={openTitle}
                  aria-label={openTitle}
                >
                  <OpenInNewIcon fontSize="small" />
                </IconButton>
              ) : null}
            </ListItemButton>
          ))}
        </List>
      )}
    </Paper>
  );
}

export default Sidebar07;
