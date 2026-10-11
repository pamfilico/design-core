"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

export interface Sidebar17Item {
  key?: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface Sidebar17Section {
  /** Small heading above the section (e.g. "WORKSPACE"). */
  label?: string;
  items: Sidebar17Item[];
}

export interface Sidebar17Props {
  open: boolean;
  onClose: () => void;
  logo?: React.ReactNode;
  /** Wordmark next to the logo; omit to hide it. */
  brandName?: React.ReactNode;
  onBrandClick?: () => void;
  /** Top-level pages. */
  baseItems: Sidebar17Item[];
  /** Context section (the pages of the item you are inside). Hidden when empty. */
  contextSection?: Sidebar17Section;
  activeHref: string;
  onNavigate?: (href: string) => void;
  linkComponent?: React.ElementType;
}

const isActive = (activeHref: string, href: string) => activeHref === href || activeHref.startsWith(href + "/");

/**
 * 260px temporary left drawer: a clickable logo + wordmark, the top-level pages with a
 * soft primary-tinted rounded selection, then — when inside a context — a small caption
 * heading and that context's pages in a plain list. Navigating or clicking the brand
 * closes the drawer.
 */
export function Sidebar17({
  open,
  onClose,
  logo,
  brandName,
  onBrandClick,
  baseItems,
  contextSection,
  activeHref,
  onNavigate,
  linkComponent = "a",
}: Sidebar17Props) {
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose} data-testid="sidebar-drawer">
      <Box sx={{ width: 260 }} role="navigation">
        <Box
          sx={{
            px: 2.5,
            py: 2.5,
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            cursor: "pointer",
            transition: "opacity 0.2s",
            "&:hover": { opacity: 0.85 },
          }}
          onClick={() => {
            onBrandClick?.();
            onClose();
          }}
        >
          {logo}
          {brandName ? (
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.3, fontSize: "1.15rem" }}>
              {brandName}
            </Typography>
          ) : null}
        </Box>
        <Divider />
        <List>
          {baseItems.map((item) => {
            const key = item.key ?? item.href;
            return (
              <ListItemButton
                key={key}
                component={linkComponent}
                href={item.href}
                data-testid={`nav-${key}`}
                selected={isActive(activeHref, item.href)}
                onClick={handleClick(item.href)}
                sx={(t) => ({
                  mx: 1,
                  my: 0.25,
                  borderRadius: 1.5,
                  "&.Mui-selected": {
                    bgcolor: alpha(t.palette.primary.main, 0.12),
                    color: "primary.main",
                    "& .MuiListItemIcon-root": { color: "primary.main" },
                    "&:hover": { bgcolor: alpha(t.palette.primary.main, 0.18) },
                  },
                  "&:hover": { bgcolor: alpha(t.palette.primary.main, 0.06) },
                })}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600, fontSize: "0.95rem" }} />
              </ListItemButton>
            );
          })}
        </List>
        {contextSection && contextSection.items.length > 0 && (
          <>
            <Divider />
            {contextSection.label && (
              <Box sx={{ px: 2, pt: 2, pb: 1 }}>
                <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: 0.5 }}>
                  {contextSection.label}
                </Typography>
              </Box>
            )}
            <List>
              {contextSection.items.map((item) => {
                const key = item.key ?? item.href;
                return (
                  <ListItemButton
                    key={key}
                    component={linkComponent}
                    href={item.href}
                    data-testid={`nav-${key}`}
                    selected={isActive(activeHref, item.href)}
                    onClick={handleClick(item.href)}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
                  </ListItemButton>
                );
              })}
            </List>
          </>
        )}
      </Box>
    </Drawer>
  );
}

export default Sidebar17;
