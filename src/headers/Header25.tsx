"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, keyframes } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
`;

export interface Header25Item {
  label: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
}

export interface Header25Props {
  /** Logo (≈48px; rounded with a soft shadow). */
  logo?: React.ReactNode;
  /** Wordmark next to the logo (hidden on xs). Leave empty for a neutral bar. */
  brandName?: React.ReactNode;
  onBrandClick?: () => void;
  /** Show the hamburger + drawer (e.g. not on the home or auth pages). */
  showMenu?: boolean;
  /** Top drawer items. */
  items?: Header25Item[];
  /** Optional second drawer block under a caption (e.g. the current record's pages). */
  sectionTitle?: React.ReactNode;
  sectionItems?: Header25Item[];
  /** Current path; the matching item (or a parent) is selected. */
  activeHref?: string;
  onNavigate?: (href: string) => void;
  linkComponent?: React.ElementType;
  signedIn?: boolean;
  /** Wiggling call-to-action (signed in, desktop). */
  highlightLabel?: React.ReactNode;
  onHighlight?: () => void;
  contactLabel?: React.ReactNode;
  onContact?: () => void;
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  signInLabel?: React.ReactNode;
  onSignIn?: () => void;
  menuLabel?: string;
}

const authSx = { fontWeight: 700, textTransform: "none", px: 2.5, py: 0.75, borderRadius: 2, fontSize: "0.95rem" } as const;

/**
 * Fixed transparent header: optional hamburger, a logo + wordmark brand, a wiggling
 * call-to-action on desktop for signed-in users, and at the right a contact text
 * button and an outlined sign-out / contained sign-in button. The hamburger opens a
 * 260px drawer with the brand, rounded primary-tinted nav items and an optional
 * captioned second block.
 */
export function Header25({
  logo,
  brandName,
  onBrandClick,
  showMenu = true,
  items = [],
  sectionTitle,
  sectionItems = [],
  activeHref,
  onNavigate,
  linkComponent = "a",
  signedIn = false,
  highlightLabel,
  onHighlight,
  contactLabel,
  onContact,
  signOutLabel = "Logout",
  onSignOut,
  signInLabel = "Login",
  onSignIn,
  menuLabel = "open navigation",
}: Header25Props) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const [open, setOpen] = React.useState(false);
  const isActive = (href: string) => !!activeHref && (activeHref === href || activeHref.startsWith(`${href}/`));

  const navProps = (href: string) =>
    onNavigate
      ? { onClick: () => { onNavigate(href); setOpen(false); } }
      : { component: linkComponent, href, onClick: () => setOpen(false) };

  const brand = (size: number, drawer: boolean) => (
    <Box
      onClick={() => {
        onBrandClick?.();
        if (drawer) setOpen(false);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        cursor: onBrandClick ? "pointer" : undefined,
        transition: "opacity 0.2s",
        "&:hover": { opacity: 0.85 },
        ...(drawer ? { px: 2.5, py: 2.5 } : {}),
      }}
    >
      {logo && (
        <Box sx={{ width: size, height: size, borderRadius: 1, boxShadow: 1, overflow: "hidden", display: "flex", "& > *": { width: "100%", height: "100%" } }}>
          {logo}
        </Box>
      )}
      {brandName ? (
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, letterSpacing: 0.3, ...(drawer ? { fontSize: "1.15rem" } : { display: { xs: "none", sm: "block" } }) }}
        >
          {brandName}
        </Typography>
      ) : null}
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "transparent", color: "text.primary" }}>
        <Toolbar>
          {showMenu && (
            <IconButton onClick={() => setOpen(true)} edge="start" sx={{ mr: 1 }} aria-label={menuLabel} size="large">
              <MenuIcon />
            </IconButton>
          )}
          {brand(48, false)}
          {signedIn && highlightLabel && !isMobile && (
            <Box sx={{ ml: 2 }}>
              <Button sx={{ my: 2, fontWeight: "bold", whiteSpace: "nowrap", animation: `${wiggle} 2s infinite` }} onClick={onHighlight}>
                {highlightLabel}
              </Button>
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
            {contactLabel && (
              <Button onClick={onContact} sx={{ textTransform: "none", fontWeight: 600, whiteSpace: "nowrap" }}>
                {contactLabel}
              </Button>
            )}
            {signedIn ? (
              <Button variant="outlined" sx={authSx} onClick={onSignOut}>
                {signOutLabel}
              </Button>
            ) : (
              <Button variant="contained" sx={authSx} onClick={onSignIn}>
                {signInLabel}
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {showMenu && (
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 260 }} role="navigation">
            {brand(40, true)}
            <Divider />
            <List>
              {items.map((item) => (
                <ListItemButton
                  key={item.href}
                  selected={isActive(item.href)}
                  {...navProps(item.href)}
                  sx={{
                    mx: 1,
                    my: 0.25,
                    borderRadius: 1.5,
                    "&.Mui-selected": {
                      bgcolor: (t) => alpha(t.palette.primary.main, 0.12),
                      color: "primary.main",
                      "& .MuiListItemIcon-root": { color: "primary.main" },
                      "&:hover": { bgcolor: (t) => alpha(t.palette.primary.main, 0.18) },
                    },
                    "&:hover": { bgcolor: (t) => alpha(t.palette.primary.main, 0.06) },
                  }}
                >
                  {item.icon && <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>}
                  <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 600, fontSize: "0.95rem" } } }} />
                </ListItemButton>
              ))}
            </List>
            {sectionItems.length > 0 && (
              <>
                <Divider />
                {sectionTitle && (
                  <Box sx={{ px: 2, pt: 2, pb: 1 }}>
                    <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: 0.5 }}>
                      {sectionTitle}
                    </Typography>
                  </Box>
                )}
                <List>
                  {sectionItems.map((item) => (
                    <ListItemButton key={item.href} selected={isActive(item.href)} {...navProps(item.href)}>
                      {item.icon && <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>}
                      <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 600 } } }} />
                    </ListItemButton>
                  ))}
                </List>
              </>
            )}
          </Box>
        </Drawer>
      )}
    </>
  );
}

export default Header25;
