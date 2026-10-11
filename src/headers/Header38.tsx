"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export interface Header56Props {
  /** Article title (rendered as h1 in the h2 style). */
  title: React.ReactNode;
  /** Author name; shown as "{byLabel} {author}". */
  author?: React.ReactNode;
  /** Publication date, already formatted by the caller. */
  date?: React.ReactNode;
  /** Prefix before the author (default "By"). */
  byLabel?: React.ReactNode;
  /** Call-to-action button on the right; hidden when `onAction` is missing. */
  actionLabel?: React.ReactNode;
  onAction?: () => void;
  actionIcon?: React.ReactNode;
}

/**
 * Article header: a large title with a prominent contained call-to-action on the right (wrapping
 * under the title on small screens) and a "By author | date" line beneath.
 */
export function Header38(props: Header56Props) {
  const { title, author, date, byLabel = "By", actionLabel = "Book Now", onAction, actionIcon = <CalendarTodayIcon /> } = props;
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3, flexWrap: "wrap", gap: 2 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, flex: 1, minWidth: { xs: "100%", md: "auto" } }}>
          {title}
        </Typography>
        {onAction && (
          <Button
            variant="contained"
            startIcon={actionIcon}
            onClick={onAction}
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              fontWeight: 600,
              px: 3,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: 2,
              "&:hover": { bgcolor: "primary.dark", boxShadow: 4 },
            }}
          >
            {actionLabel}
          </Button>
        )}
      </Box>
      {(author || date) && (
        <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
          {author && (
            <>
              {byLabel} {author}
            </>
          )}
          {author && date && " | "}
          {date}
        </Typography>
      )}
    </>
  );
}

export default Header38;
