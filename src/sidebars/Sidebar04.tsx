"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Sidebar01, type Sidebar01Props } from "./Sidebar01.tsx";

export interface Sidebar04Props extends Omit<Sidebar01Props, "header"> {
  /** Small overline above the title (the record type, e.g. "Contact"). */
  overline: React.ReactNode;
  /** The record's title. Shows `placeholder` while empty (e.g. still loading). */
  title?: string;
  /** Shown while `title` is empty (default "…"). */
  placeholder?: string;
}

/**
 * Hover-to-expand sectioned rail (see Sidebar01) for ONE record: each of the record's
 * sections is its own route and this rail moves between them. Expanded, a small overline
 * and the record's title sit on top; collapsed, the header disappears and only the icons remain.
 */
export function Sidebar04({ overline, title, placeholder = "…", testId = "sidebar", ...rail }: Sidebar04Props) {
  return (
    <Sidebar01
      {...rail}
      testId={testId}
      header={({ expanded }) =>
        expanded ? (
          <Box sx={{ px: 2, py: 1.5, display: "flex", flexDirection: "column" }}>
            <Typography variant="overline" sx={{ color: "text.secondary", lineHeight: 1.2 }}>
              {overline}
            </Typography>
            <Typography
              variant="body2"
              data-testid={`${testId}-title`}
              sx={{ fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {title || placeholder}
            </Typography>
          </Box>
        ) : null
      }
    />
  );
}

export default Sidebar04;
