"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const SIDEBAR_WIDTH_COLLAPSED = 48;
const SIDEBAR_WIDTH_EXPANDED = 200;
const CLOSE_DELAY_MS = 400;
const TRANSITION_MS = 350;

/** Stable kebab-case slug from a nav label (`"Back to list"` → `"back-to-list"`). */
function slugNavLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export interface Sidebar01Item {
  label: string;
  href: string;
  icon: React.ReactNode;
  /** When set, used instead of the default prefix match on `href`. */
  matchPath?: (pathname: string) => boolean;
  /** Render as a non-interactive, muted row (e.g. "coming soon"). */
  disabled?: boolean;
  /** Nested sub-items, indented below this item (shown when expanded / in the drawer). */
  children?: Sidebar01Item[];
  /** Overrides the auto `sidebar-item-<slug>` test id. */
  testId?: string;
  /** When set, runs instead of following `href` (e.g. history back). */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface Sidebar01Section {
  sectionLabel?: string;
  items: Sidebar01Item[];
  /** Subtle divider above this section. */
  dividerBefore?: boolean;
}

export interface Sidebar01Props {
  sections: Sidebar01Section[];
  /** Current path; drives the active row. */
  activeHref: string;
  /** Link component (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
  /** Called with the href when a row is clicked (after the item's own onClick). */
  onNavigate?: (href: string) => void;
  /** When set, viewports below `md` use a temporary drawer; otherwise the rail is used at all sizes. */
  mobileDrawer?: { open: boolean; onClose: () => void };
  /** Width of the temporary mobile drawer (default 220). */
  drawerWidth?: number;
  /** Optional block above the nav. A function receives `{ expanded }` (rail state). */
  header?: React.ReactNode | ((ctx: { expanded: boolean }) => React.ReactNode);
  /** Divider between header and nav (default true). */
  headerDivider?: boolean;
  /** Tooltip suffix for disabled rows on the collapsed rail (default " — coming soon"). */
  disabledSuffix?: string;
  /** Root `data-testid` (default "sidebar"). */
  testId?: string;
  /** Optional chip rendered at the top-right of every row. */
  itemChip?: (item: Sidebar01Item) => React.ReactNode;
}

function resolveTestId(item: Sidebar01Item, parentSlug?: string) {
  const slug = parentSlug ? `${parentSlug}-${slugNavLabel(item.label)}` : slugNavLabel(item.label);
  return item.testId ?? `sidebar-item-${slug}`;
}

/**
 * Sectioned app sidebar. From `md` up (or always, without `mobileDrawer`) it is a
 * hover-to-expand icon rail: 48px collapsed, 200px expanded, closing 400ms after the
 * pointer leaves, with tooltips while collapsed. Below `md`, with `mobileDrawer`, it is a
 * temporary drawer with full labels. Supports section captions, dividers, nested children,
 * disabled ("coming soon") rows and a header slot.
 */
export function Sidebar01({
  sections,
  activeHref,
  linkComponent = "a",
  onNavigate,
  mobileDrawer,
  drawerWidth = 220,
  header,
  headerDivider = true,
  disabledSuffix = " — coming soon",
  testId = "sidebar",
  itemChip,
}: Sidebar01Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hovered, setHovered] = React.useState(false);
  const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setHovered(false);
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  };

  const isItemActive = React.useCallback(
    (item: Sidebar01Item) => {
      if (item.matchPath) return item.matchPath(activeHref);
      const { href } = item;
      if (href === "/") return activeHref === "/";
      return activeHref === href || activeHref.startsWith(`${href}/`);
    },
    [activeHref]
  );

  const handleNavClick = (item: Sidebar01Item) => (event: React.MouseEvent<HTMLElement>) => {
    if (item.onClick) {
      event.preventDefault();
      item.onClick(event);
    } else if (onNavigate) {
      event.preventDefault();
      onNavigate(item.href);
    }
    mobileDrawer?.onClose();
  };

  const expanded = hovered;
  const useMobileDrawer = Boolean(isMobile && mobileDrawer);

  const renderHeaderBlock = () => {
    if (!header) return null;
    const node = typeof header === "function" ? header({ expanded }) : header;
    if (!node) return null;
    return (
      <Box data-testid={`${testId}-header`}>
        {node}
        {headerDivider ? <Divider /> : null}
      </Box>
    );
  };

  const renderLeaf = (
    item: Sidebar01Item,
    itemKey: string,
    variant: "drawer" | "rail",
    indent: boolean,
    parentSlug?: string
  ) => {
    const active = isItemActive(item);
    const itemTestId = resolveTestId(item, parentSlug);
    const chip = itemChip?.(item);
    const wrapRow = (node: React.ReactNode) => (
      <Box key={itemKey} sx={{ position: "relative", display: "flex", alignItems: "center", minWidth: 0 }}>
        {chip ? (
          <Box
            sx={{ position: "absolute", top: -4, right: 0, zIndex: 2 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {chip}
          </Box>
        ) : null}
        {node}
      </Box>
    );

    if (item.disabled) {
      const disabledEl = (
        <Box
          aria-disabled="true"
          data-testid={itemTestId}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            whiteSpace: "nowrap",
            color: "text.disabled",
            opacity: 0.6,
            cursor: "default",
            flex: 1,
            minWidth: 0,
            ...(variant === "drawer"
              ? { pl: indent ? 4 : 2, pr: 2, py: 1.2 }
              : { pl: indent ? 3 : 1, pr: 1, mx: 1, height: indent ? 32 : 36 }),
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 24 }}>
            {item.icon}
          </Box>
          {variant === "drawer" ? (
            <Typography variant="body2">{item.label}</Typography>
          ) : (
            <Box
              component="span"
              sx={{ fontSize: indent ? 12 : 13, opacity: expanded ? 1 : 0, transition: `opacity ${TRANSITION_MS}ms ease` }}
            >
              {item.label}
            </Box>
          )}
        </Box>
      );
      if (variant === "rail" && !expanded) {
        return wrapRow(
          <Tooltip title={`${item.label}${disabledSuffix}`} placement="right">
            {disabledEl}
          </Tooltip>
        );
      }
      return wrapRow(disabledEl);
    }

    if (variant === "drawer") {
      return wrapRow(
        <Box
          component={linkComponent}
          data-testid={itemTestId}
          href={item.href}
          onClick={handleNavClick(item)}
          sx={(t) => ({
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            pl: indent ? 4 : 2,
            pr: 2,
            py: 1.2,
            flex: 1,
            minWidth: 0,
            textDecoration: "none",
            color: active ? "primary.main" : "text.secondary",
            bgcolor: active ? `${t.palette.primary.main}1A` : "transparent",
            "&:hover": { bgcolor: `${t.palette.primary.main}14` },
          })}
        >
          {item.icon}
          <Typography variant="body2">{item.label}</Typography>
        </Box>
      );
    }

    const linkEl = (
      <Box
        component={linkComponent}
        data-testid={itemTestId}
        href={item.href}
        onClick={handleNavClick(item)}
        sx={(t) => ({
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          pl: indent ? 3 : 1,
          pr: 1,
          mx: 1,
          height: indent ? 32 : 36,
          flex: 1,
          minWidth: 0,
          borderRadius: t.shape.borderRadius,
          cursor: "pointer",
          whiteSpace: "nowrap",
          textDecoration: "none",
          color: active ? "primary.main" : "text.secondary",
          bgcolor: active ? `${t.palette.primary.main}1A` : "transparent",
          "&:hover": { bgcolor: `${t.palette.primary.main}14` },
        })}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 24 }}>
          {item.icon}
        </Box>
        <Box
          component="span"
          sx={{
            fontSize: indent ? 12 : 13,
            fontWeight: active ? 600 : 400,
            opacity: expanded ? 1 : 0,
            transition: `opacity ${TRANSITION_MS}ms ease`,
          }}
        >
          {item.label}
        </Box>
      </Box>
    );
    if (!expanded) {
      return wrapRow(
        <Tooltip title={item.label} placement="right">
          {linkEl}
        </Tooltip>
      );
    }
    return wrapRow(linkEl);
  };

  const renderNavSections = (variant: "drawer" | "rail") =>
    sections.map((section, sIdx) => {
      const sectionSlug = section.sectionLabel ? slugNavLabel(section.sectionLabel) : `section-${sIdx}`;
      return (
        <Box key={sIdx} data-testid={`${testId}-section-${sectionSlug}`}>
          {section.dividerBefore ? <Divider sx={{ my: 0.5, mx: variant === "drawer" ? 2 : 1 }} /> : null}
          {section.sectionLabel &&
            (variant === "drawer" ? (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  px: 2,
                  py: 0.5,
                  display: "block",
                  fontWeight: 600,
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {section.sectionLabel}
              </Typography>
            ) : (
              <Box
                sx={{
                  px: 1,
                  mx: 1,
                  py: 0.5,
                  opacity: expanded ? 1 : 0,
                  transition: `opacity ${TRANSITION_MS}ms ease`,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 600, fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}
                >
                  {section.sectionLabel}
                </Typography>
              </Box>
            ))}
          {section.items.map((item) => {
            const itemKey = `${sIdx}-${item.label}`;
            const parentSlug = slugNavLabel(item.label);
            const children = item.children ?? [];
            // Sub-items only show when there is room to read them: expanded rail or the drawer.
            const showChildren = children.length > 0 && (variant === "drawer" || expanded);
            return (
              <React.Fragment key={itemKey}>
                {renderLeaf(item, itemKey, variant, false)}
                {showChildren
                  ? children.map((child) =>
                      renderLeaf(child, `${itemKey}-${child.label}`, variant, true, parentSlug)
                    )
                  : null}
              </React.Fragment>
            );
          })}
        </Box>
      );
    });

  if (useMobileDrawer && mobileDrawer) {
    return (
      <Drawer
        variant="temporary"
        open={mobileDrawer.open}
        onClose={mobileDrawer.onClose}
        ModalProps={{ keepMounted: true }}
        data-testid={`${testId}-drawer`}
        sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}
      >
        <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", height: "100%", pt: 2 }}>
          {renderHeaderBlock()}
          <Box sx={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: 0.5, py: 1 }}>
            {renderNavSections("drawer")}
          </Box>
        </Box>
      </Drawer>
    );
  }

  return (
    <Box
      component="nav"
      data-testid={testId}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: expanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
        minHeight: 0,
        pt: 2,
        borderRight: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
        transition: `width ${TRANSITION_MS}ms ease`,
      }}
    >
      {renderHeaderBlock()}
      <Box sx={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column", gap: 0.5, py: 1 }}>
        {renderNavSections("rail")}
      </Box>
    </Box>
  );
}

export default Sidebar01;
