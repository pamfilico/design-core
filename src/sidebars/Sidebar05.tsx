"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, type Theme } from "@mui/material/styles";

const COLLAPSED_WIDTH = 56;
const EXPANDED_WIDTH = 220;

export interface Sidebar05Item {
  key?: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  /** Overrides the default "href or anything under it" match. */
  matchPath?: (pathname: string) => boolean;
}

export interface Sidebar05Props {
  /** Bold title (e.g. the workspace name). */
  title: string;
  /** Muted caption under the title on the expanded rail (e.g. "Workspace"). */
  caption?: React.ReactNode;
  /** Primary rows. On phones they become scrollable tabs. */
  items: Sidebar05Item[];
  /** Caption of the secondary group (e.g. "More"). */
  secondaryLabel?: React.ReactNode;
  /** Secondary rows, below a divider. On phones they become inline links. */
  secondaryItems?: Sidebar05Item[];
  activeHref: string;
  onNavigate?: (href: string) => void;
  linkComponent?: React.ElementType;
  /** `aria-label` of the rail (e.g. "Workspace navigation"). */
  ariaLabel?: string;
  /** The page, rendered beside the rail (desktop) or under the tabs (phone). */
  children?: React.ReactNode;
}

function isActive(item: Sidebar05Item, pathname: string) {
  if (item.matchPath) return item.matchPath(pathname);
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

/**
 * Scoped workspace shell. From `md` up: a hover-to-expand rail (56px → 220px) with a
 * title block that collapses to initials, primary rows, then a captioned secondary group
 * below a divider, and the page beside it. Below `md`: a sticky bar with the title,
 * scrollable tabs for the primary rows and a line of inline links for the secondary ones.
 */
export function Sidebar05({
  title,
  caption,
  items,
  secondaryLabel,
  secondaryItems = [],
  activeHref,
  onNavigate,
  linkComponent = "a",
  ariaLabel,
  children,
}: Sidebar05Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  // The most specific (longest) matching href wins the tab.
  const mobileTabIndex = React.useMemo(() => {
    const sorted = items.map((item, i) => ({ item, i })).sort((a, b) => b.item.href.length - a.item.href.length);
    for (const { item, i } of sorted) {
      if (isActive(item, activeHref)) return i;
    }
    return 0;
  }, [items, activeHref]);

  const rowSx = (active: boolean) => (t: Theme) => ({
    display: "flex",
    alignItems: "center",
    gap: expanded ? 1.5 : 0,
    px: 1.5,
    mx: expanded ? 1 : 0.5,
    minHeight: 36,
    borderRadius: 1,
    textDecoration: "none",
    justifyContent: expanded ? "flex-start" : "center",
    color: active ? "primary.main" : "text.secondary",
    bgcolor: active ? `${t.palette.primary.main}1A` : "transparent",
    "&:hover": { bgcolor: `${t.palette.primary.main}14` },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        flex: 1,
        minHeight: 0,
        minWidth: 0,
        width: "100%",
      }}
    >
      {isMobile ? (
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            bgcolor: "background.paper",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Box sx={{ px: 1.5, pt: 1, pb: 0.5 }}>
            <Typography variant="subtitle2" color="text.secondary" noWrap>
              {title}
            </Typography>
          </Box>
          <Tabs
            value={mobileTabIndex}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{ minHeight: 44, "& .MuiTab-root": { minHeight: 44, textTransform: "none" } }}
          >
            {items.map((item, index) => (
              <Tab
                key={item.key ?? item.href}
                value={index}
                label={item.label}
                component={linkComponent}
                href={item.href}
                onClick={handleClick(item.href)}
              />
            ))}
          </Tabs>
          {secondaryItems.length > 0 && (
            <Box
              sx={{
                px: 1.5,
                py: 0.75,
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                alignItems: "center",
                borderTop: 1,
                borderColor: "divider",
              }}
            >
              {secondaryLabel ? (
                <Typography variant="caption" color="text.secondary" sx={{ mr: 0.5 }}>
                  {secondaryLabel}
                </Typography>
              ) : null}
              {secondaryItems.map((p) => (
                <Box
                  key={p.key ?? p.href}
                  component={linkComponent}
                  href={p.href}
                  onClick={handleClick(p.href)}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontSize: 12,
                    color: "primary.main",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {p.icon}
                  {p.label}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ) : (
        <Box
          component="nav"
          aria-label={ariaLabel}
          data-testid="sidebar"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          sx={{
            width: expanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            borderRight: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            minHeight: 0,
            overflow: "hidden",
            transition: "width 0.2s ease",
          }}
        >
          <Box
            sx={{
              px: expanded ? 2 : 0,
              py: 1.5,
              display: "flex",
              flexDirection: "column",
              alignItems: expanded ? "flex-start" : "center",
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
              <Tooltip title={title} placement="right">
                <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: 11, textAlign: "center" }} noWrap>
                  {title.slice(0, 2).toUpperCase()}
                </Typography>
              </Tooltip>
            )}
          </Box>
          <Divider />
          <Box sx={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column", gap: 0.5, py: 1 }}>
            {items.map((item) => {
              const active = isActive(item, activeHref);
              return (
                <Tooltip key={item.key ?? item.href} title={expanded ? "" : item.label} placement="right">
                  <Box component={linkComponent} href={item.href} onClick={handleClick(item.href)} sx={rowSx(active)}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 24 }}>
                      {item.icon}
                    </Box>
                    {expanded && (
                      <Typography component="span" variant="body2" fontWeight={active ? 600 : 400} noWrap>
                        {item.label}
                      </Typography>
                    )}
                  </Box>
                </Tooltip>
              );
            })}
            {secondaryItems.length > 0 && (
              <>
                <Divider sx={{ my: 1, mx: 1 }} />
                {expanded && secondaryLabel ? (
                  <Box sx={{ px: 1, mx: 1, py: 0.5 }}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        fontWeight: 600,
                        fontSize: 9,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      {secondaryLabel}
                    </Typography>
                  </Box>
                ) : null}
                {secondaryItems.map((p) => (
                  <Tooltip key={p.key ?? p.href} title={expanded ? "" : p.label} placement="right">
                    <Box component={linkComponent} href={p.href} onClick={handleClick(p.href)} sx={rowSx(false)}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 24 }}>
                        {p.icon}
                      </Box>
                      {expanded && (
                        <Typography component="span" variant="body2" noWrap>
                          {p.label}
                        </Typography>
                      )}
                    </Box>
                  </Tooltip>
                ))}
              </>
            )}
          </Box>
        </Box>
      )}

      <Box sx={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", overflow: "auto" }}>
        {children}
      </Box>
    </Box>
  );
}

export default Sidebar05;
