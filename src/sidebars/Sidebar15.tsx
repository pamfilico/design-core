"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";

export interface Sidebar15Item {
  key?: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  /** Tooltip text when it differs from the label. */
  tooltip?: string;
  /** Sub-items: the button opens a flyout menu instead of navigating. */
  children?: Sidebar15Item[];
}

export interface Sidebar15Props {
  items: Sidebar15Item[];
  /** Pinned below a divider at the bottom. */
  footerItems?: Sidebar15Item[];
  /** Rendered first in the footer (e.g. a language selector). */
  footerSlot?: React.ReactNode;
  activeHref: string;
  onNavigate?: (href: string) => void;
  linkComponent?: React.ElementType;
  /** Shows the logout button when given. */
  onLogout?: () => void;
  logoutLabel?: string;
}

const slugTestId = (href: string) => href.replace(/^\//, "").replace(/[/?=&]/g, "-") || "root";

const isActive = (activeHref: string, href: string) =>
  activeHref === href || (activeHref.startsWith(href) && href !== "/");

function RailButton({
  item,
  active,
  linkComponent,
  asLink,
  onClick,
}: {
  item: Sidebar15Item;
  active: boolean;
  linkComponent: React.ElementType;
  asLink: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const linkProps = asLink ? { component: linkComponent, href: item.href } : {};
  return (
    <Tooltip title={item.tooltip ?? item.label} placement="right">
      <IconButton
        {...linkProps}
        data-testid={`nav-toolbar-${item.key ?? slugTestId(item.href)}`}
        onClick={onClick}
        sx={{
          mb: 1,
          width: 48,
          height: 48,
          backgroundColor: active ? "primary.main" : "transparent",
          color: active ? "primary.contrastText" : "text.primary",
          "&:hover": { backgroundColor: active ? "primary.dark" : "action.hover" },
        }}
      >
        {item.icon}
      </IconButton>
    </Tooltip>
  );
}

/**
 * Floating 64px icon rail: a rounded, elevated paper column of 48px icon buttons with
 * tooltips to the right. The active item is filled with the primary colour. An item with
 * `children` opens a flyout menu beside it instead of navigating. A footer block (custom
 * slot, footer items, logout with an error-tinted hover) is pinned to the bottom.
 */
export function Sidebar15({
  items,
  footerItems = [],
  footerSlot,
  activeHref,
  onNavigate,
  linkComponent = "a",
  onLogout,
  logoutLabel = "Logout",
}: Sidebar15Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);

  const closeMenu = () => {
    setAnchorEl(null);
    setActiveSubmenu(null);
  };
  const go = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
    closeMenu();
  };
  const itemActive = (item: Sidebar15Item) =>
    isActive(activeHref, item.href) || (item.children?.some((c) => isActive(activeHref, c.href)) ?? false);
  const keyOf = (item: Sidebar15Item) => item.key ?? item.href;

  return (
    <Paper
      elevation={2}
      data-testid="icon-rail"
      sx={{
        width: 64,
        flex: 1,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        position: "sticky",
        backgroundColor: "background.paper",
        borderRadius: 2,
      }}
    >
      <Box sx={{ flex: 1, minHeight: 0, overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {items.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          return (
            <RailButton
              key={keyOf(item)}
              item={item}
              active={itemActive(item)}
              linkComponent={linkComponent}
              asLink={!hasChildren}
              onClick={
                hasChildren
                  ? (e) => {
                      setAnchorEl(e.currentTarget);
                      setActiveSubmenu(keyOf(item));
                    }
                  : (e) => go(e, item.href)
              }
            />
          );
        })}
      </Box>

      {items
        .filter((item) => item.children?.length)
        .map((item) => (
          <Menu
            key={`submenu-${keyOf(item)}`}
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && activeSubmenu === keyOf(item)}
            onClose={closeMenu}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {item.children!.map((sub) => (
              <MenuItem
                key={keyOf(sub)}
                component={linkComponent}
                href={sub.href}
                data-testid={`nav-submenu-${sub.key ?? slugTestId(sub.href)}`}
                onClick={(e: React.MouseEvent<HTMLElement>) => go(e, sub.href)}
                sx={{ backgroundColor: isActive(activeHref, sub.href) ? "primary.light" : "transparent" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {sub.icon}
                  <ListItemText primary={sub.label} />
                </Box>
              </MenuItem>
            ))}
          </Menu>
        ))}

      <Box sx={{ mt: "auto", flexShrink: 0 }}>
        <Divider sx={{ width: "80%", my: 1 }} />
        {footerSlot}
        {footerItems.map((item) => (
          <RailButton
            key={keyOf(item)}
            item={item}
            active={isActive(activeHref, item.href)}
            linkComponent={linkComponent}
            asLink
            onClick={(e) => go(e, item.href)}
          />
        ))}
        {onLogout && (
          <Tooltip title={logoutLabel} placement="right">
            <IconButton
              data-testid="nav-toolbar-logout"
              onClick={onLogout}
              sx={{
                width: 48,
                height: 48,
                color: "text.primary",
                "&:hover": { backgroundColor: "error.light", color: "error.contrastText" },
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Paper>
  );
}

export default Sidebar15;
