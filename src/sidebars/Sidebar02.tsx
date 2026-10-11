"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Sidebar01, type Sidebar01Props } from "./Sidebar01.tsx";

export interface Sidebar02Props extends Omit<Sidebar01Props, "header"> {
  /** Bold title at the top of the rail (e.g. the workspace or record name). */
  title: string;
  /** Muted caption under the title (e.g. "Workspace", "Settings"). */
  caption?: React.ReactNode;
  /** Shown on the collapsed rail. Defaults to the first two letters of `title`, upper-cased. */
  initials?: string;
  /** Tooltip on the collapsed initials. Defaults to `title`. */
  collapsedTooltip?: string;
  /** When set, the header block is a link (e.g. to the workspace overview). */
  titleHref?: string;
}

/**
 * Hover-to-expand sectioned rail (see Sidebar01) with a title block on top. Expanded, the
 * block shows a bold title and a muted caption; collapsed, it shrinks to a two-letter
 * initials badge with the title in a tooltip. The block can link to an overview page.
 */
export function Sidebar02({
  title,
  caption,
  initials,
  collapsedTooltip,
  titleHref,
  linkComponent = "a",
  onNavigate,
  ...rail
}: Sidebar02Props) {
  const short = initials ?? title.slice(0, 2).toUpperCase();
  const linkProps = titleHref
    ? {
        component: linkComponent,
        href: titleHref,
        onClick: (e: React.MouseEvent) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate(titleHref);
          }
        },
      }
    : {};

  return (
    <Sidebar01
      {...rail}
      linkComponent={linkComponent}
      onNavigate={onNavigate}
      header={({ expanded }) => (
        <Box
          {...linkProps}
          sx={{
            px: expanded ? 2 : 0,
            py: 1.5,
            display: "flex",
            flexDirection: "column",
            alignItems: expanded ? "flex-start" : "center",
            ...(titleHref ? { color: "inherit", textDecoration: "none", "&:hover": { opacity: 0.8 } } : {}),
          }}
        >
          {expanded ? (
            <>
              <Typography variant="subtitle2" fontWeight={700} noWrap>
                {title}
              </Typography>
              {caption ? (
                <Typography variant="caption" color="text.secondary" noWrap>
                  {caption}
                </Typography>
              ) : null}
            </>
          ) : (
            <Tooltip title={collapsedTooltip ?? title} placement="right">
              <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: 11 }} noWrap>
                {short}
              </Typography>
            </Tooltip>
          )}
        </Box>
      )}
    />
  );
}

export default Sidebar02;
