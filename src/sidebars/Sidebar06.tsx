"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";

const SIDEBAR_WIDTH_COLLAPSED = 48;
const SIDEBAR_WIDTH_EXPANDED = 200;
const CLOSE_DELAY_MS = 400;
const TRANSITION_MS = 350;

export interface Sidebar06Item {
  label: string;
  href: string;
  icon: React.ReactNode;
  /** Active only on exactly this path (default: active on `href` and anything starting with it). */
  exact?: boolean;
}

export interface Sidebar06Section {
  sectionLabel?: string;
  items: Sidebar06Item[];
}

export interface Sidebar06Props {
  sections: Sidebar06Section[];
  activeHref: string;
  /** Signed-in user shown above the nav. The block is hidden while this is empty. */
  user?: { name?: string | null; email: string; avatarUrl?: string | null } | null;
  /** Shown when the user has no name (default "User"). */
  userFallbackName?: string;
  /** Temporary drawer state below `md`. */
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
  /** Width of the temporary drawer (default 220). */
  drawerWidth?: number;
  onNavigate?: (href: string) => void;
  linkComponent?: React.ElementType;
}

/**
 * Hover-to-expand app rail with the signed-in user on top. From `md` up: a sticky,
 * full-height 48px icon rail that widens to 200px on hover (closing 400ms after the pointer
 * leaves), with an avatar + name/email row and captioned sections; labels fade in, no
 * tooltips. Below `md`: a 220px temporary drawer with the same content. Both leave 64px at
 * the top for a fixed app bar.
 */
export function Sidebar06({
  sections,
  activeHref,
  user,
  userFallbackName = "User",
  mobileOpen = false,
  onCloseMobile,
  drawerWidth = 220,
  onNavigate,
  linkComponent = "a",
}: Sidebar06Props) {
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

  const isActive = (item: Sidebar06Item) =>
    item.exact ? activeHref === item.href : activeHref.startsWith(item.href);

  const handleClick = (href: string, close: boolean) => (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
    if (close) onCloseMobile?.();
  };

  const expanded = hovered;

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onCloseMobile}
        ModalProps={{ keepMounted: true }}
        sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}
      >
        <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", height: "100%", pt: 8 }}>
          {user && (
            <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar src={user.avatarUrl || undefined} sx={{ width: 36, height: 36 }}>
                <PersonIcon />
              </Avatar>
              <Box sx={{ overflow: "hidden" }}>
                <Typography variant="body2" noWrap sx={{ fontWeight: 600 }}>
                  {user.name || userFallbackName}
                </Typography>
                <Typography variant="caption" color="text.secondary" noWrap sx={{ display: "block" }}>
                  {user.email}
                </Typography>
              </Box>
            </Box>
          )}
          <Divider />
          {sections.map((section, sIdx) => (
            <Box key={sIdx}>
              {section.sectionLabel && (
                <>
                  <Divider sx={{ my: 0.5 }} />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ px: 2, py: 0.5, display: "block", fontWeight: 600, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}
                  >
                    {section.sectionLabel}
                  </Typography>
                </>
              )}
              {section.items.map((item) => (
                <Box
                  key={item.href}
                  component={linkComponent}
                  href={item.href}
                  onClick={handleClick(item.href, true)}
                  sx={(t) => ({
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1.2,
                    textDecoration: "none",
                    color: isActive(item) ? "primary.main" : "text.secondary",
                    bgcolor: isActive(item) ? `${t.palette.primary.main}1A` : "transparent",
                    "&:hover": { bgcolor: `${t.palette.primary.main}14` },
                  })}
                >
                  {item.icon}
                  <Typography variant="body2">{item.label}</Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Drawer>
    );
  }

  return (
    <Box
      data-testid="sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: expanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        pt: 8,
        borderRight: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
        transition: `width ${TRANSITION_MS}ms ease`,
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      {user && (
        <Box sx={{ px: 1, py: 1.5, display: "flex", alignItems: "center", gap: 1.5, overflow: "hidden" }}>
          <Avatar src={user.avatarUrl || undefined} sx={{ width: 28, height: 28, flexShrink: 0 }}>
            <PersonIcon fontSize="small" />
          </Avatar>
          <Box sx={{ overflow: "hidden", opacity: expanded ? 1 : 0, transition: `opacity ${TRANSITION_MS}ms ease` }}>
            <Typography variant="body2" noWrap sx={{ fontWeight: 600, fontSize: 12 }}>
              {user.name || userFallbackName}
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap sx={{ display: "block", fontSize: 10 }}>
              {user.email}
            </Typography>
          </Box>
        </Box>
      )}
      <Divider />

      <Box sx={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column", gap: 0.5, py: 1 }}>
        {sections.map((section, sIdx) => (
          <Box key={sIdx}>
            {section.sectionLabel && (
              <>
                <Divider sx={{ my: 0.5, mx: 1 }} />
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
              </>
            )}
            {section.items.map((item) => {
              const active = isActive(item);
              return (
                <Box
                  key={item.href}
                  component={linkComponent}
                  href={item.href}
                  onClick={handleClick(item.href, false)}
                  sx={(t) => ({
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 1,
                    mx: 1,
                    height: 36,
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
                      fontSize: 13,
                      fontWeight: active ? 600 : 400,
                      opacity: expanded ? 1 : 0,
                      transition: `opacity ${TRANSITION_MS}ms ease`,
                    }}
                  >
                    {item.label}
                  </Box>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Sidebar06;
