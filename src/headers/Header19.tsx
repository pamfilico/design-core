"use client";

import * as React from "react";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";

export interface Header19SubItem {
  label: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
  active?: boolean;
}

export interface Header19Item {
  /** Tooltip text (shown to the right of the icon). */
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
  /** Count badge on the icon. */
  badge?: number;
  /** When given, the icon opens a menu of these instead of navigating. */
  children?: Header19SubItem[];
}

export interface Header19Props {
  /** Scrollable main items. */
  items: Header19Item[];
  /** Fixed items under the divider at the bottom (billing, help, settings…). */
  bottomItems?: Header19Item[];
  /** Called with the target href; the menu closes. */
  onNavigate?: (href: string) => void;
  /** Compact language picker at the top of the bottom group; hidden without locales. */
  locales?: { value: string; label: string }[];
  locale?: string;
  onLocaleChange?: (locale: string) => void;
  localeLabel?: string;
  /** Shows the sign-out icon (hover turns it red). */
  onSignOut?: () => void;
  signOutLabel?: string;
  /** Smaller hamburger for dense headers. */
  compact?: boolean;
  menuLabel?: string;
  closeLabel?: string;
}

const railButtonSx = (active: boolean) => ({
  mb: 1,
  width: 48,
  height: 48,
  backgroundColor: active ? "primary.main" : "transparent",
  color: active ? "primary.contrastText" : "text.primary",
  "&:hover": { backgroundColor: active ? "primary.dark" : "action.hover" },
});

/**
 * Hamburger that opens a transparent left drawer holding a floating close button
 * and a 64px rounded paper rail of icon buttons with right-side tooltips. Active
 * items are filled with the primary colour; group items open a side menu. The
 * bottom group (language, extra links, sign-out) stays pinned under a divider.
 */
export function Header19({
  items,
  bottomItems = [],
  onNavigate,
  locales = [],
  locale,
  onLocaleChange,
  localeLabel = "Change language",
  onSignOut,
  signOutLabel = "Sign out",
  compact = false,
  menuLabel = "menu",
  closeLabel = "close drawer",
}: Header19Props) {
  const [open, setOpen] = React.useState(false);
  const [submenu, setSubmenu] = React.useState<{ el: HTMLElement; item: Header19Item } | null>(null);
  const [localeEl, setLocaleEl] = React.useState<HTMLElement | null>(null);

  const go = (href: string) => {
    onNavigate?.(href);
    setSubmenu(null);
  };
  const isActive = (item: Header19Item) => !!item.active || !!item.children?.some((c) => c.active);
  const currentLocale = locales.find((o) => o.value === locale)?.label ?? locales[0]?.label;

  const renderItem = (item: Header19Item) => (
    <Tooltip key={item.href + item.label} title={item.label} placement="right">
      <IconButton
        aria-label={item.label}
        onClick={(e) => (item.children ? setSubmenu({ el: e.currentTarget, item }) : go(item.href))}
        sx={railButtonSx(isActive(item))}
      >
        {item.badge ? (
          <Badge badgeContent={item.badge} color="error" max={99}>
            {item.icon}
          </Badge>
        ) : (
          item.icon
        )}
      </IconButton>
    </Tooltip>
  );

  return (
    <>
      <IconButton edge="start" aria-label={menuLabel} onClick={() => setOpen(true)} size={compact ? "small" : "medium"}>
        <MenuIcon fontSize={compact ? "small" : "medium"} />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { backgroundColor: "transparent", boxShadow: "none" } } }}
      >
        <Box
          sx={{ width: 80, display: "flex", flexDirection: "column", height: "100%", justifyContent: "flex-start", p: 1, pb: 9 }}
          role="presentation"
        >
          <IconButton
            onClick={() => setOpen(false)}
            aria-label={closeLabel}
            sx={{
              alignSelf: "center",
              mt: 1,
              mb: 2,
              boxShadow: 3,
              backgroundColor: "background.paper",
              "&:hover": { boxShadow: 6, backgroundColor: "background.paper" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ flex: 1, minHeight: 0, display: "flex" }}>
            <Paper
              elevation={2}
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
                {items.map(renderItem)}
              </Box>
              <Menu
                anchorEl={submenu?.el}
                open={Boolean(submenu)}
                onClose={() => setSubmenu(null)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {submenu?.item.children?.map((sub) => (
                  <MenuItem
                    key={sub.href}
                    onClick={() => go(sub.href)}
                    sx={{ backgroundColor: sub.active ? "primary.light" : "transparent" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {sub.icon}
                      <ListItemText primary={sub.label} />
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
              <Box sx={{ mt: "auto", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Divider sx={{ width: "80%", my: 1 }} />
                {locales.length > 0 && (
                  <>
                    <Tooltip title={localeLabel} placement="right">
                      <IconButton onClick={(e) => setLocaleEl(e.currentTarget)} aria-label={localeLabel} sx={railButtonSx(false)}>
                        <Typography variant="caption" sx={{ fontSize: "10px", fontWeight: "bold", lineHeight: 1 }}>
                          {currentLocale}
                        </Typography>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      anchorEl={localeEl}
                      open={Boolean(localeEl)}
                      onClose={() => setLocaleEl(null)}
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                      {locales.map((o) => (
                        <MenuItem
                          key={o.value}
                          selected={o.value === locale}
                          onClick={() => {
                            onLocaleChange?.(o.value);
                            setLocaleEl(null);
                          }}
                          sx={{ minWidth: 80, justifyContent: "center" }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            {o.label}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}
                {bottomItems.map(renderItem)}
                {onSignOut && (
                  <Tooltip title={signOutLabel} placement="right">
                    <IconButton
                      onClick={onSignOut}
                      aria-label={signOutLabel}
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
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Header19;
