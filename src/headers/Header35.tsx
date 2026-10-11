"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";

export interface Header53Props {
  /** Full logo / lockup, shown from `sm` up. */
  logo?: React.ReactNode;
  /** Compact mark, shown below `sm` instead of the full logo. */
  logoMark?: React.ReactNode;
  logoHref?: string;
  /** Context chip next to the logo (e.g. the selected workspace). */
  contextLabel?: React.ReactNode;
  /** The signed-in user. The name collapses below `sm`, the role always shows. */
  user?: { name: string; role?: string };
  /** Chip colour of the role chip (default "primary"). */
  roleColor?: "primary" | "secondary" | "default";
  onMenuClick?: () => void;
  menuLabel?: string;
  onSignOut?: () => void;
  signOutLabel?: string;
  /** Install icon, shown only when given. */
  onInstall?: () => void;
  installLabel?: string;
  /** "fixed" as in the original app shell; "static" for embedding. */
  position?: "fixed" | "static" | "sticky";
  linkComponent?: React.ElementType;
}

/**
 * Dense signed-in top bar that sits above the side navigation: a hamburger below `md`, the logo
 * (reduced to a mark on phones), an optional context chip, then install, a name · role chip and a
 * Sign out button whose label collapses to its icon on phones.
 */
export function Header35(props: Header53Props) {
  const {
    logo,
    logoMark,
    logoHref = "/",
    contextLabel,
    user,
    roleColor = "primary",
    onMenuClick,
    menuLabel = "Open navigation",
    onSignOut,
    signOutLabel = "Sign out",
    onInstall,
    installLabel = "Install",
    position = "fixed",
    linkComponent = "a",
  } = props;

  return (
    <AppBar
      position={position}
      elevation={0}
      sx={{ borderBottom: 1, borderColor: "divider", zIndex: (t) => t.zIndex.appBar + 2 }}
    >
      <Toolbar variant="dense" sx={{ gap: 1 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label={menuLabel}
          onClick={onMenuClick}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {logo && (
          <Link
            component={linkComponent}
            href={logoHref}
            color="inherit"
            underline="none"
            sx={{ display: { xs: logoMark ? "none" : "flex", sm: "flex" }, alignItems: "center" }}
          >
            {logo}
          </Link>
        )}
        {logoMark && <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>{logoMark}</Box>}
        {contextLabel && (
          <Chip
            size="small"
            variant="outlined"
            label={contextLabel}
            sx={{ ml: 1, maxWidth: { xs: 120, sm: 220 }, fontWeight: 700 }}
          />
        )}
        <Box sx={{ flexGrow: 1 }} />
        {onInstall && (
          <Tooltip title={installLabel}>
            <IconButton color="inherit" onClick={onInstall} aria-label={installLabel} size="small" sx={{ minWidth: 44, minHeight: 44 }}>
              <InstallMobileIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        {user && (
          <Chip
            size="small"
            color={roleColor}
            label={
              <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                <Box component="span" sx={{ display: { xs: user.role ? "none" : "inline", sm: "inline" } }}>
                  {user.name}
                  {user.role ? " · " : ""}
                </Box>
                {user.role}
              </Box>
            }
          />
        )}
        <Tooltip title={signOutLabel}>
          <Button
            color="inherit"
            aria-label={signOutLabel}
            onClick={onSignOut}
            startIcon={<LogoutIcon fontSize="small" />}
            sx={{
              minWidth: { xs: 0, sm: 64 },
              px: { xs: 1, sm: 2 },
              "& .MuiButton-startIcon": { mr: { xs: 0, sm: 1 } },
            }}
          >
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
              {signOutLabel}
            </Box>
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Header35;
