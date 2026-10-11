"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import type { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

/** One row in the account panel (icon · label · value). */
export interface Header01AccountDetail {
  icon?: React.ReactNode;
  label: React.ReactNode;
  value: React.ReactNode;
}

export interface Header01User {
  name?: string | null;
  email?: string | null;
  avatarUrl?: string;
}

export interface Header01Props {
  /** Brand label / node shown top-left. */
  brand: React.ReactNode;
  /** Where the brand links to (default "/"). */
  brandHref?: string;
  /** Component used for the brand link (e.g. a router link); default "a". */
  linkComponent?: React.ElementType;
  /** Show the hamburger below `md` (e.g. only when signed in). */
  showMenuButton?: boolean;
  onMenuClick?: () => void;
  menuLabel?: string;
  /** Replaces the brand in the grow area (e.g. breadcrumbs). */
  breadcrumbs?: React.ReactNode;
  /** Extra actions rendered before the account avatar (install button, app launcher…). */
  actions?: React.ReactNode;
  /** Signed-in user. When set, the avatar menu and the sign-out icon show; otherwise the sign-in icon. */
  user?: Header01User | null;
  /** Use the secondary colour for the avatar (e.g. a staff member rather than the owner). */
  secondaryAvatar?: boolean;
  /** Chip shown on the account panel's role row. */
  roleLabel?: React.ReactNode;
  roleTitle?: React.ReactNode;
  roleIcon?: React.ReactNode;
  /** Extra rows under the role row. */
  accountDetails?: Header01AccountDetail[];
  accountLabel?: string;
  onSignIn?: () => void;
  onSignOut?: () => void;
  signInLabel?: string;
  signOutLabel?: string;
  position?: AppBarProps["position"];
  sx?: AppBarProps["sx"];
}

function initials(name?: string | null, email?: string | null): string {
  const source = (name || "").trim();
  if (source && !source.includes("@")) {
    const parts = source.split(/\s+/).slice(0, 2);
    return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "?";
  }
  return (email || "?").trim()[0]?.toUpperCase() ?? "?";
}

/**
 * Authenticated app top bar: optional hamburger below `md`, a brand link or a
 * breadcrumbs slot that grows, then an actions slot, an avatar that opens an
 * account panel (name, email, role and detail rows) and a sign-in / sign-out icon.
 * Sits above the drawer (`zIndex: drawer + 1`).
 */
export function Header01({
  brand,
  brandHref = "/",
  linkComponent = "a",
  showMenuButton = false,
  onMenuClick,
  menuLabel = "open menu",
  breadcrumbs,
  actions,
  user,
  secondaryAvatar = false,
  roleLabel,
  roleTitle = "Role",
  roleIcon,
  accountDetails = [],
  accountLabel = "Account",
  onSignIn,
  onSignOut,
  signInLabel = "Sign in",
  signOutLabel = "Sign out",
  position = "fixed",
  sx,
}: Header01Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const name = user?.name ?? null;
  const email = user?.email ?? null;
  const displayName = name && !name.includes("@") ? name : null;
  const avatarColor = secondaryAvatar ? "secondary.main" : "primary.main";

  return (
    <AppBar position={position} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ...sx }}>
      <Toolbar>
        {showMenuButton ? (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 1, display: { md: "none" } }}
            aria-label={menuLabel}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        {breadcrumbs ? (
          <Box sx={{ flexGrow: 1, minWidth: 0, display: "flex", alignItems: "center" }}>{breadcrumbs}</Box>
        ) : (
          <Typography
            variant="h6"
            component={linkComponent}
            href={brandHref}
            color="inherit"
            sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: "-0.02em", textDecoration: "none" }}
          >
            {brand}
          </Typography>
        )}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {actions}
          {user ? (
            <>
              <Tooltip title={email ?? accountLabel}>
                <IconButton
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  sx={{ color: "inherit" }}
                  size="small"
                  aria-label={accountLabel}
                >
                  <Avatar
                    src={user.avatarUrl}
                    sx={{ width: 30, height: 30, fontSize: 13, fontWeight: 600, bgcolor: avatarColor }}
                  >
                    {initials(displayName, email)}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{ paper: { sx: { minWidth: 260, mt: 1 } } }}
              >
                <Box sx={{ px: 2, py: 1.5 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar
                      src={user.avatarUrl}
                      sx={{ width: 40, height: 40, fontSize: 15, fontWeight: 600, bgcolor: avatarColor }}
                    >
                      {initials(displayName, email)}
                    </Avatar>
                    <Box sx={{ minWidth: 0 }}>
                      {displayName && (
                        <Typography variant="subtitle2" noWrap>
                          {displayName}
                        </Typography>
                      )}
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {email ?? "—"}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                {(roleLabel || accountDetails.length > 0) && <Divider />}
                {(roleLabel || accountDetails.length > 0) && (
                  <Box sx={{ px: 2, py: 1.5 }}>
                    <Stack spacing={1}>
                      {roleLabel && (
                        <Stack direction="row" spacing={1} alignItems="center">
                          {roleIcon}
                          <Typography variant="body2" color="text.secondary">
                            {roleTitle}
                          </Typography>
                          <Box sx={{ flexGrow: 1 }} />
                          <Chip
                            size="small"
                            label={roleLabel}
                            color={secondaryAvatar ? "secondary" : "primary"}
                            variant="outlined"
                          />
                        </Stack>
                      )}
                      {accountDetails.map((row, i) => (
                        <Stack key={i} direction="row" spacing={1} alignItems="center">
                          {row.icon}
                          <Typography variant="body2" color="text.secondary">
                            {row.label}
                          </Typography>
                          <Box sx={{ flexGrow: 1 }} />
                          <Typography variant="body2">{row.value}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                )}
              </Menu>
              <IconButton onClick={onSignOut} sx={{ color: "inherit" }} aria-label={signOutLabel}>
                <LogoutIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={onSignIn} sx={{ color: "inherit" }} aria-label={signInLabel}>
              <LoginIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header01;
