import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export interface Header13Props {
  brand: React.ReactNode;
  brandHref?: string;
  /** Alternative title shown instead of the brand from `sm` up (e.g. the current page name). */
  pageTitle?: React.ReactNode;
  linkComponent?: React.ElementType;
  signedIn?: boolean;
  onMenuClick?: () => void;
  menuLabel?: string;
  /** Small clickable chip (e.g. plan / trial state), signed in only. */
  statusChip?: { label: React.ReactNode; color?: "primary" | "secondary" | "error" | "warning" | "success" | "default"; onClick?: () => void };
  /** Theme toggle, signed in only; hidden without `onToggleTheme`. */
  themeMode?: "light" | "dark";
  onToggleTheme?: () => void;
  toDarkLabel?: string;
  toLightLabel?: string;
  signInLabel?: React.ReactNode;
  signInHref?: string;
  onSignIn?: () => void;
}

/**
 * Static app bar: hamburger when signed in, a brand link that grows (optionally
 * swapped for a page title from `sm` up), then a status chip and a theme toggle when
 * signed in, or a sign-in text button when signed out.
 */
export function Header13({
  brand,
  brandHref = "/",
  pageTitle,
  linkComponent = "a",
  signedIn = false,
  onMenuClick,
  menuLabel = "open drawer",
  statusChip,
  themeMode = "light",
  onToggleTheme,
  toDarkLabel = "Switch to dark mode",
  toLightLabel = "Switch to light mode",
  signInLabel = "Sign In",
  signInHref,
  onSignIn,
}: Header13Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        {signedIn && (
          <IconButton color="inherit" aria-label={menuLabel} edge="start" onClick={onMenuClick} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link component={linkComponent} href={brandHref} color="inherit" underline="none">
            {pageTitle ? (
              <>
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                  {pageTitle}
                </Box>
                <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
                  {brand}
                </Box>
              </>
            ) : (
              brand
            )}
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {signedIn && (
            <>
              {statusChip && (
                <Chip
                  label={statusChip.label}
                  color={statusChip.color ?? "primary"}
                  onClick={statusChip.onClick}
                  sx={{ cursor: "pointer" }}
                  size="small"
                />
              )}
              {onToggleTheme && (
                <Tooltip title={themeMode === "light" ? toDarkLabel : toLightLabel}>
                  <IconButton onClick={onToggleTheme} color="inherit" aria-label={themeMode === "light" ? toDarkLabel : toLightLabel}>
                    {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                  </IconButton>
                </Tooltip>
              )}
            </>
          )}
          {!signedIn && (
            <Button
              color="inherit"
              {...(signInHref ? { component: linkComponent, href: signInHref } : { onClick: onSignIn })}
            >
              {signInLabel}
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header13;
