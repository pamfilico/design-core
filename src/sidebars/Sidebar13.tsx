"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const RAIL_WIDTH_COLLAPSED = 56;
const RAIL_WIDTH_EXPANDED = 208;
const RAIL_DRAWER_WIDTH = 240;
const TRANSITION_MS = 220;
/** Constant at both rail widths: any height change here reflows the rows mid-click. */
const SECTION_LABEL_HEIGHT = 26;

export interface Sidebar13Item {
  key?: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface Sidebar13Section {
  /** Small uppercase heading above the section. */
  label?: string;
  items: Sidebar13Item[];
  dividerBefore?: boolean;
}

export interface Sidebar13Props {
  sections: Sidebar13Section[];
  /** Current path; an item is active on its own path or anything under it. */
  activeHref: string;
  onNavigate?: (href: string) => void;
  linkComponent?: React.ElementType;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  /** Rendered above the nav in the mobile drawer (identity, sign out). */
  headerSlot?: React.ReactNode;
  /** `auto` (default) switches at `md`. */
  mode?: "auto" | "rail" | "drawer";
  /** The rail is `position: fixed` under an app bar; false drops the spacer toolbar. */
  clearAppBar?: boolean;
}

const isPathActive = (activeHref: string, href: string) =>
  activeHref === href || activeHref.startsWith(href.replace(/\/$/, "") + "/");

function NavRows({
  sections,
  expanded,
  activeHref,
  onNavigate,
  linkComponent,
  onAfterNavigate,
}: {
  sections: Sidebar13Section[];
  expanded: boolean;
  activeHref: string;
  onNavigate?: (href: string) => void;
  linkComponent: React.ElementType;
  onAfterNavigate?: () => void;
}) {
  return (
    <List sx={{ py: 0.5 }}>
      {sections.map((section, index) => (
        <Box key={section.label ?? `section-${index}`}>
          {section.dividerBefore && <Divider sx={{ my: 0.75, mx: expanded ? 2 : 1 }} />}
          {section.label && (
            <Typography
              variant="caption"
              sx={{
                display: "block",
                px: 2,
                color: "text.secondary",
                textTransform: "uppercase",
                letterSpacing: 0.6,
                fontSize: 11,
                // Only fades: its box keeps a constant height at both widths.
                opacity: expanded ? 1 : 0,
                height: SECTION_LABEL_HEIGHT,
                lineHeight: `${SECTION_LABEL_HEIGHT}px`,
                pointerEvents: "none",
                overflow: "hidden",
                transition: `opacity ${TRANSITION_MS}ms ease`,
                whiteSpace: "nowrap",
              }}
            >
              {section.label}
            </Typography>
          )}
          {section.items.map((item) => {
            const active = isPathActive(activeHref, item.href);
            const key = item.key ?? item.href;
            // The tooltip stays mounted and is only disabled when expanded, so the row under
            // the cursor is never remounted while hover widens the rail.
            return (
              <Tooltip
                key={key}
                title={expanded ? "" : item.label}
                placement="right"
                disableInteractive
                disableHoverListener={expanded}
                disableFocusListener={expanded}
                disableTouchListener={expanded}
              >
                <ListItemButton
                  component={linkComponent}
                  href={item.href}
                  data-testid={`nav-${key}`}
                  onClick={(e: React.MouseEvent) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(item.href);
                    }
                    onAfterNavigate?.();
                  }}
                  selected={active}
                  sx={{
                    minHeight: 44,
                    px: 1.75,
                    mx: 0.5,
                    borderRadius: 1.5,
                    "&.Mui-selected": { bgcolor: "action.selected" },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: expanded ? 1.75 : 0,
                      justifyContent: "center",
                      color: active ? "primary.main" : "inherit",
                      transition: `margin ${TRANSITION_MS}ms ease`,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: active ? 700 : 400, noWrap: true }}
                    sx={{ opacity: expanded ? 1 : 0, transition: `opacity ${TRANSITION_MS}ms ease` }}
                  />
                </ListItemButton>
              </Tooltip>
            );
          })}
        </Box>
      ))}
    </List>
  );
}

/**
 * Sectioned list sidebar. From `md` up it is a fixed hover-to-expand icon rail (56px →
 * 208px, no close delay) with fading section captions and tooltips while collapsed; below
 * `md` it is a 240px temporary drawer opened by a header hamburger. It renders either the
 * rail or the drawer, never both. Selection uses `action.selected` with a primary icon.
 */
export function Sidebar13({
  sections,
  activeHref,
  onNavigate,
  linkComponent = "a",
  mobileOpen,
  onCloseMobile,
  headerSlot,
  mode = "auto",
  clearAppBar = true,
}: Sidebar13Props) {
  const theme = useTheme();
  const belowMd = useMediaQuery(theme.breakpoints.down("md"));
  const [hovered, setHovered] = React.useState(false);
  const isMobile = mode === "auto" ? belowMd : mode === "drawer";

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onCloseMobile}
        data-testid="app-sidebar-drawer"
        ModalProps={{ keepMounted: true }}
        sx={{ "& .MuiDrawer-paper": { width: RAIL_DRAWER_WIDTH, boxSizing: "border-box" } }}
      >
        {headerSlot}
        <NavRows
          sections={sections}
          expanded
          activeHref={activeHref}
          onNavigate={onNavigate}
          linkComponent={linkComponent}
          onAfterNavigate={onCloseMobile}
        />
      </Drawer>
    );
  }

  return (
    <Box
      component="nav"
      data-testid="app-sidebar-rail"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{ width: RAIL_WIDTH_COLLAPSED, flexShrink: 0 }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: hovered ? RAIL_WIDTH_EXPANDED : RAIL_WIDTH_COLLAPSED,
          overflowX: "hidden",
          borderRight: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          transition: `width ${TRANSITION_MS}ms ease`,
          zIndex: (t) => t.zIndex.appBar + 1,
        }}
      >
        {clearAppBar && <Toolbar variant="dense" />}
        <NavRows
          sections={sections}
          expanded={hovered}
          activeHref={activeHref}
          onNavigate={onNavigate}
          linkComponent={linkComponent}
        />
      </Box>
    </Box>
  );
}

export default Sidebar13;
